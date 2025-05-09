pipeline {
    agent any
    
    environment {
        APP_NAME = 'uadb'
        PORT = '4000'
        NODE_VERSION = 'node:16'  // Spécifiez la version de Node.js à utiliser
        DOCKER_REGISTRY = 'https://registry.hub.docker.com'  // Pour Docker Hub // À remplacer par votre registre Docker
    }
    
    stages {
        stage('Checkout') {
            steps {
                // Récupère le code source
                checkout scm
            }
        }
        
        stage('Installation des dépendances') {
            steps {
                // Utilisation de --legacy-peer-deps pour éviter les problèmes de compatibilité
                sh 'npm ci --legacy-peer-deps || npm install --legacy-peer-deps'
            }
        }
        
        stage('Lint') {
            steps {
                sh 'npm run lint || echo "Lint warnings/errors found but continuing"'
            }
        }
        
        stage('Tests Unitaires') {
            steps {
                sh 'npm run test'
            }
            post {
                always {
                    // Publication des résultats de tests si configuré
                    junit allowEmptyResults: true, testResults: 'test-results/junit.xml'
                }
            }
        }
        
        stage('Build Application') {
            steps {
                sh 'npm run build'
            }
        }
        
        stage('Build Docker Image') {
            steps {
                script {
                    dockerImage = docker.build("${APP_NAME}:${BUILD_NUMBER}", "--build-arg PORT=${PORT} .")
                }
            }
        }
        
        stage('Vérification de l\'image Docker') {
            steps {
                script {
                    try {
                        // Démarrer le conteneur en arrière-plan
                        sh "docker run --rm -d --name=${APP_NAME}-test -p ${PORT}:${PORT} ${APP_NAME}:${BUILD_NUMBER}"
                        
                        // Attendre que l'application démarre
                        sh "sleep 15"  // Un peu plus de temps pour s'assurer que NestJS est bien démarré
                        
                        // Vérifier que l'application répond
                        sh "curl -f http://localhost:${PORT}/health || exit 1"
                    } finally {
                        // S'assurer que le conteneur est arrêté, même en cas d'erreur
                        sh "docker stop ${APP_NAME}-test || true"
                    }
                }
            }
        }
        
        stage('Archivage de l\'artefact') {
            steps {
                // Sauvegarde l'image Docker en tant qu'artefact
                sh "docker save -o ${APP_NAME}-${BUILD_NUMBER}.tar ${APP_NAME}:${BUILD_NUMBER}"
                archiveArtifacts artifacts: "${APP_NAME}-${BUILD_NUMBER}.tar", fingerprint: true
            }
        }
        
        stage('Push vers Registry') {
            when {
                branch 'main'  // Exécuter uniquement sur la branche principale
            }
            steps {
                script {
                    // Tagger l'image pour le registre et la pousser
                    docker.withRegistry("${DOCKER_REGISTRY}", 'docker-registry-credentials') {
                    dockerImage.push("${BUILD_NUMBER}")
                    dockerImage.push("latest")
                    }
                }
            }
        }
    }
    
    post {
        success {
            echo "Build du microservice UADB réussi ! L'image Docker est prête : ${APP_NAME}:${BUILD_NUMBER}"
            // Notifications potentielles en cas de succès
            // slackSend(color: 'good', message: "Build réussi : ${APP_NAME} - ${BUILD_NUMBER}")
        }
        failure {
            echo "Le build du microservice UADB a échoué"
            // Notifications potentielles en cas d'échec
            // slackSend(color: 'danger', message: "Build échoué : ${APP_NAME} - ${BUILD_NUMBER}")
        }
        always {
            // Nettoyer l'espace de travail et supprimer les containers de test
            sh "docker rm -f ${APP_NAME}-test || true"
            cleanWs()
        }
    }
}