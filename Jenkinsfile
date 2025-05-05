pipeline {
    agent any
    
    environment {
        APP_NAME = 'uadb'
        PORT = '4000'
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
                sh 'npm ci'
            }
        }
        
        stage('Lint') {
            steps {
                sh 'npm run lint'
            }
        }
        
        stage('Tests Unitaires') {
            steps {
                sh 'npm run test'
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
                    def dockerImage = docker.build("${APP_NAME}:${BUILD_NUMBER}", "--build-arg PORT=${PORT} .")
                }
            }
        }
        
        stage('Vérification de l'image Docker') {
            steps {
                sh "docker run --rm -d --name=${APP_NAME}-test -p ${PORT}:${PORT} ${APP_NAME}:${BUILD_NUMBER}"
                sh "sleep 10" // Attendre que l'application démarre
                sh "curl -f http://localhost:${PORT}/health || exit 1" // Vérifier que l'application répond
                sh "docker stop ${APP_NAME}-test"
            }
        }
        
        stage('Archivage de l\'artefact') {
            steps {
                // Sauvegarde l'image Docker en tant qu'artefact
                sh "docker save -o ${APP_NAME}-${BUILD_NUMBER}.tar ${APP_NAME}:${BUILD_NUMBER}"
                archiveArtifacts artifacts: "${APP_NAME}-${BUILD_NUMBER}.tar", fingerprint: true
            }
        }
    }
    
    post {
        success {
            echo "Build du microservice UADB réussi ! L'image Docker est prête : ${APP_NAME}:${BUILD_NUMBER}"
        }
        failure {
            echo "Le build du microservice UADB a échoué"
        }
        always {
            // Nettoyer l'espace de travail et supprimer les containers de test
            sh "docker rm -f ${APP_NAME}-test || true"
            cleanWs()
        }
    }
}
