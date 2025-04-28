
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/library.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}




  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  motDePasse: 'motDePasse',
  nom: 'nom',
  prenom: 'prenom',
  image: 'image',
  role: 'role',
  departement: 'departement',
  faculte: 'faculte',
  specialite: 'specialite',
  niveauEtudes: 'niveauEtudes',
  dateInscription: 'dateInscription',
  derniereConnexion: 'derniereConnexion',
  estActif: 'estActif',
  universite: 'universite'
};

exports.Prisma.RessourceScalarFieldEnum = {
  id: 'id',
  titre: 'titre',
  description: 'description',
  type: 'type',
  langue: 'langue',
  urlFichier: 'urlFichier',
  format: 'format',
  referenceBlockchain: 'referenceBlockchain',
  dateCreation: 'dateCreation',
  dateModification: 'dateModification',
  estPublique: 'estPublique',
  motsCles: 'motsCles',
  auteurId: 'auteurId',
  universiteSource: 'universiteSource',
  estExterne: 'estExterne'
};

exports.Prisma.FavoriScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  ressourceId: 'ressourceId',
  dateAjout: 'dateAjout',
  note: 'note'
};

exports.Prisma.CommentaireScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  ressourceId: 'ressourceId',
  contenu: 'contenu',
  dateCreation: 'dateCreation',
  estModere: 'estModere'
};

exports.Prisma.NotationScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  ressourceId: 'ressourceId',
  note: 'note',
  dateNotation: 'dateNotation'
};

exports.Prisma.HistoriqueAccesScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  ressourceId: 'ressourceId',
  dateAcces: 'dateAcces',
  typeAcces: 'typeAcces',
  ipAcces: 'ipAcces',
  universiteSrc: 'universiteSrc'
};

exports.Prisma.DonneesRecommandationScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  ressourceId: 'ressourceId',
  score: 'score',
  typeInteraction: 'typeInteraction',
  dateDonnee: 'dateDonnee'
};

exports.Prisma.CollectionScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  nom: 'nom',
  description: 'description',
  estPublique: 'estPublique',
  dateCreation: 'dateCreation'
};

exports.Prisma.CollectionRessourceScalarFieldEnum = {
  id: 'id',
  collectionId: 'collectionId',
  ressourceId: 'ressourceId',
  dateAjout: 'dateAjout',
  notes: 'notes'
};

exports.Prisma.PartageUniversiteScalarFieldEnum = {
  id: 'id',
  ressourceId: 'ressourceId',
  universiteSource: 'universiteSource',
  universiteDestination: 'universiteDestination',
  datePartage: 'datePartage',
  estActif: 'estActif'
};

exports.Prisma.TransactionBlockchainScalarFieldEnum = {
  id: 'id',
  referenceBlockchain: 'referenceBlockchain',
  typeTransaction: 'typeTransaction',
  ressourceId: 'ressourceId',
  universiteOrigine: 'universiteOrigine',
  universiteDestination: 'universiteDestination',
  dateTransaction: 'dateTransaction',
  statut: 'statut',
  hashTransaction: 'hashTransaction',
  donneesTechniques: 'donneesTechniques'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.UserOrderByRelevanceFieldEnum = {
  id: 'id',
  email: 'email',
  motDePasse: 'motDePasse',
  nom: 'nom',
  prenom: 'prenom',
  image: 'image',
  departement: 'departement',
  faculte: 'faculte',
  specialite: 'specialite',
  niveauEtudes: 'niveauEtudes',
  universite: 'universite'
};

exports.Prisma.RessourceOrderByRelevanceFieldEnum = {
  id: 'id',
  titre: 'titre',
  description: 'description',
  langue: 'langue',
  urlFichier: 'urlFichier',
  format: 'format',
  referenceBlockchain: 'referenceBlockchain',
  motsCles: 'motsCles',
  auteurId: 'auteurId',
  universiteSource: 'universiteSource'
};

exports.Prisma.FavoriOrderByRelevanceFieldEnum = {
  id: 'id',
  userId: 'userId',
  ressourceId: 'ressourceId',
  note: 'note'
};

exports.Prisma.CommentaireOrderByRelevanceFieldEnum = {
  id: 'id',
  userId: 'userId',
  ressourceId: 'ressourceId',
  contenu: 'contenu'
};

exports.Prisma.NotationOrderByRelevanceFieldEnum = {
  id: 'id',
  userId: 'userId',
  ressourceId: 'ressourceId'
};

exports.Prisma.HistoriqueAccesOrderByRelevanceFieldEnum = {
  id: 'id',
  userId: 'userId',
  ressourceId: 'ressourceId',
  ipAcces: 'ipAcces',
  universiteSrc: 'universiteSrc'
};

exports.Prisma.DonneesRecommandationOrderByRelevanceFieldEnum = {
  id: 'id',
  userId: 'userId',
  ressourceId: 'ressourceId'
};

exports.Prisma.CollectionOrderByRelevanceFieldEnum = {
  id: 'id',
  userId: 'userId',
  nom: 'nom',
  description: 'description'
};

exports.Prisma.CollectionRessourceOrderByRelevanceFieldEnum = {
  id: 'id',
  collectionId: 'collectionId',
  ressourceId: 'ressourceId',
  notes: 'notes'
};

exports.Prisma.PartageUniversiteOrderByRelevanceFieldEnum = {
  id: 'id',
  ressourceId: 'ressourceId',
  universiteSource: 'universiteSource',
  universiteDestination: 'universiteDestination'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.TransactionBlockchainOrderByRelevanceFieldEnum = {
  id: 'id',
  referenceBlockchain: 'referenceBlockchain',
  ressourceId: 'ressourceId',
  universiteOrigine: 'universiteOrigine',
  universiteDestination: 'universiteDestination',
  hashTransaction: 'hashTransaction'
};
exports.RoleUser = exports.$Enums.RoleUser = {
  ETUDIANT: 'ETUDIANT',
  ENSEIGNANT: 'ENSEIGNANT',
  CHERCHEUR: 'CHERCHEUR',
  BIBLIOTHECAIRE: 'BIBLIOTHECAIRE',
  ADMINISTRATEUR: 'ADMINISTRATEUR'
};

exports.TypeRessource = exports.$Enums.TypeRessource = {
  MEMOIRE: 'MEMOIRE',
  THESE: 'THESE',
  ARTICLE_SCIENTIFIQUE: 'ARTICLE_SCIENTIFIQUE',
  COURS: 'COURS',
  SUPPORT_PEDAGOGIQUE: 'SUPPORT_PEDAGOGIQUE',
  RAPPORT_RECHERCHE: 'RAPPORT_RECHERCHE',
  LIVRE: 'LIVRE',
  CONFERENCE: 'CONFERENCE'
};

exports.TypeAcces = exports.$Enums.TypeAcces = {
  CONSULTATION: 'CONSULTATION',
  TELECHARGEMENT: 'TELECHARGEMENT',
  CITATION: 'CITATION',
  PARTAGE: 'PARTAGE'
};

exports.TypeInteraction = exports.$Enums.TypeInteraction = {
  VUE: 'VUE',
  TELECHARGEMENT: 'TELECHARGEMENT',
  FAVORI: 'FAVORI',
  NOTATION: 'NOTATION',
  TEMPS_LECTURE: 'TEMPS_LECTURE',
  RECHERCHE_SIMILAIRE: 'RECHERCHE_SIMILAIRE'
};

exports.TypeTransaction = exports.$Enums.TypeTransaction = {
  PUBLICATION: 'PUBLICATION',
  MODIFICATION: 'MODIFICATION',
  ACCES: 'ACCES',
  SUPPRESSION: 'SUPPRESSION',
  PARTAGE: 'PARTAGE'
};

exports.StatutTransaction = exports.$Enums.StatutTransaction = {
  INITIEE: 'INITIEE',
  VALIDEE: 'VALIDEE',
  REJETEE: 'REJETEE',
  ANNULEE: 'ANNULEE'
};

exports.Prisma.ModelName = {
  User: 'User',
  Ressource: 'Ressource',
  Favori: 'Favori',
  Commentaire: 'Commentaire',
  Notation: 'Notation',
  HistoriqueAcces: 'HistoriqueAcces',
  DonneesRecommandation: 'DonneesRecommandation',
  Collection: 'Collection',
  CollectionRessource: 'CollectionRessource',
  PartageUniversite: 'PartageUniversite',
  TransactionBlockchain: 'TransactionBlockchain'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/home/seydina/monprojetsm2/universite-numerique-ms/uadb/generated/prisma",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "debian-openssl-3.0.x",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "/home/seydina/monprojetsm2/universite-numerique-ms/uadb/prisma/schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "6.6.0",
  "engineVersion": "f676762280b54cd07c770017ed3711ddde35f37a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\ngenerator client {\n  provider = \"prisma-client-js\"\n  output   = \"../generated/prisma\"\n}\n\ndatasource db {\n  provider = \"mysql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel User {\n  id                String            @id @default(uuid())\n  email             String            @unique\n  motDePasse        String            @map(\"mot_de_passe\")\n  nom               String\n  prenom            String\n  image             String?\n  role              RoleUser\n  departement       String\n  faculte           String\n  specialite        String?\n  niveauEtudes      String?           @map(\"niveau_etudes\")\n  dateInscription   DateTime          @default(now()) @map(\"date_inscription\")\n  derniereConnexion DateTime?         @map(\"derniere_connexion\")\n  estActif          Boolean           @default(true) @map(\"est_actif\")\n  universite        String // Nom de l'université de l'utilisateur\n  contributions     Ressource[]\n  favoris           Favori[]\n  commentaires      Commentaire[]\n  notations         Notation[]\n  historiques       HistoriqueAcces[]\n  collections       Collection[]\n}\n\nenum RoleUser {\n  ETUDIANT\n  ENSEIGNANT\n  CHERCHEUR\n  BIBLIOTHECAIRE\n  ADMINISTRATEUR\n}\n\nmodel Ressource {\n  id                  String                @id @default(uuid())\n  titre               String\n  description         String                @db.Text\n  type                TypeRessource\n  langue              String                @default(\"fr\")\n  urlFichier          String                @map(\"url_fichier\")\n  format              String // pdf, docx, etc.\n  referenceBlockchain String                @unique @map(\"reference_blockchain\")\n  dateCreation        DateTime              @default(now()) @map(\"date_creation\")\n  dateModification    DateTime              @updatedAt @map(\"date_modification\")\n  estPublique         Boolean               @default(true) @map(\"est_publique\")\n  motsCles            String                @map(\"mots_cles\") // Stockage de mots-clés sous forme de texte\n  auteurId            String                @map(\"auteur_id\")\n  universiteSource    String                @map(\"universite_source\") // Université d'origine de la ressource\n  estExterne          Boolean               @default(false) @map(\"est_externe\") // Indique si la ressource provient d'une autre université\n  auteur              User                  @relation(fields: [auteurId], references: [id])\n  favoris             Favori[]\n  commentaires        Commentaire[]\n  notations           Notation[]\n  historiques         HistoriqueAcces[]\n  collections         CollectionRessource[]\n  partages            PartageUniversite[]\n}\n\nenum TypeRessource {\n  MEMOIRE\n  THESE\n  ARTICLE_SCIENTIFIQUE\n  COURS\n  SUPPORT_PEDAGOGIQUE\n  RAPPORT_RECHERCHE\n  LIVRE\n  CONFERENCE\n}\n\nmodel Favori {\n  id          String    @id @default(uuid())\n  userId      String    @map(\"user_id\")\n  ressourceId String    @map(\"ressource_id\")\n  dateAjout   DateTime  @default(now()) @map(\"date_ajout\")\n  note        String?   @db.Text\n  user        User      @relation(fields: [userId], references: [id])\n  ressource   Ressource @relation(fields: [ressourceId], references: [id])\n\n  @@unique([userId, ressourceId])\n}\n\nmodel Commentaire {\n  id           String    @id @default(uuid())\n  userId       String    @map(\"user_id\")\n  ressourceId  String    @map(\"ressource_id\")\n  contenu      String    @db.Text\n  dateCreation DateTime  @default(now()) @map(\"date_creation\")\n  estModere    Boolean   @default(false) @map(\"est_modere\")\n  user         User      @relation(fields: [userId], references: [id])\n  ressource    Ressource @relation(fields: [ressourceId], references: [id])\n}\n\nmodel Notation {\n  id           String    @id @default(uuid())\n  userId       String    @map(\"user_id\")\n  ressourceId  String    @map(\"ressource_id\")\n  note         Int // 1-5\n  dateNotation DateTime  @default(now()) @map(\"date_notation\")\n  user         User      @relation(fields: [userId], references: [id])\n  ressource    Ressource @relation(fields: [ressourceId], references: [id])\n\n  @@unique([userId, ressourceId])\n}\n\nmodel HistoriqueAcces {\n  id            String    @id @default(uuid())\n  userId        String    @map(\"user_id\")\n  ressourceId   String    @map(\"ressource_id\")\n  dateAcces     DateTime  @default(now()) @map(\"date_acces\")\n  typeAcces     TypeAcces @map(\"type_acces\")\n  ipAcces       String    @map(\"ip_acces\")\n  universiteSrc String?   @map(\"universite_source\") // Si accès externe\n  user          User      @relation(fields: [userId], references: [id])\n  ressource     Ressource @relation(fields: [ressourceId], references: [id])\n}\n\nenum TypeAcces {\n  CONSULTATION\n  TELECHARGEMENT\n  CITATION\n  PARTAGE\n}\n\nmodel DonneesRecommandation {\n  id              String          @id @default(uuid())\n  userId          String          @map(\"user_id\")\n  ressourceId     String          @map(\"ressource_id\")\n  score           Float // Score de pertinence calculé\n  typeInteraction TypeInteraction @map(\"type_interaction\")\n  dateDonnee      DateTime        @default(now()) @map(\"date_donnee\")\n\n  @@index([userId])\n  @@index([ressourceId])\n}\n\nenum TypeInteraction {\n  VUE\n  TELECHARGEMENT\n  FAVORI\n  NOTATION\n  TEMPS_LECTURE\n  RECHERCHE_SIMILAIRE\n}\n\nmodel Collection {\n  id           String                @id @default(uuid())\n  userId       String                @map(\"user_id\")\n  nom          String\n  description  String?               @db.Text\n  estPublique  Boolean               @default(false) @map(\"est_publique\")\n  dateCreation DateTime              @default(now()) @map(\"date_creation\")\n  user         User                  @relation(fields: [userId], references: [id])\n  ressources   CollectionRessource[]\n}\n\nmodel CollectionRessource {\n  id           String     @id @default(uuid())\n  collectionId String     @map(\"collection_id\")\n  ressourceId  String     @map(\"ressource_id\")\n  dateAjout    DateTime   @default(now()) @map(\"date_ajout\")\n  notes        String?    @db.Text\n  collection   Collection @relation(fields: [collectionId], references: [id])\n  ressource    Ressource  @relation(fields: [ressourceId], references: [id])\n\n  @@unique([collectionId, ressourceId])\n}\n\n// Modèle très simplifié pour les partages inter-universitaires\nmodel PartageUniversite {\n  id                    String    @id @default(uuid())\n  ressourceId           String    @map(\"ressource_id\")\n  universiteSource      String    @map(\"universite_source\")\n  universiteDestination String    @map(\"universite_destination\")\n  datePartage           DateTime  @default(now()) @map(\"date_partage\")\n  estActif              Boolean   @default(true) @map(\"est_actif\")\n  ressource             Ressource @relation(fields: [ressourceId], references: [id])\n\n  @@unique([ressourceId, universiteDestination])\n}\n\nmodel TransactionBlockchain {\n  id                    String            @id @default(uuid())\n  referenceBlockchain   String            @unique @map(\"reference_blockchain\")\n  typeTransaction       TypeTransaction   @map(\"type_transaction\")\n  ressourceId           String?           @map(\"ressource_id\")\n  universiteOrigine     String            @map(\"universite_origine\")\n  universiteDestination String?           @map(\"universite_destination\")\n  dateTransaction       DateTime          @default(now()) @map(\"date_transaction\")\n  statut                StatutTransaction\n  hashTransaction       String            @unique @map(\"hash_transaction\")\n  donneesTechniques     Json?             @map(\"donnees_techniques\")\n}\n\nenum TypeTransaction {\n  PUBLICATION\n  MODIFICATION\n  ACCES\n  SUPPRESSION\n  PARTAGE\n}\n\nenum StatutTransaction {\n  INITIEE\n  VALIDEE\n  REJETEE\n  ANNULEE\n}\n",
  "inlineSchemaHash": "464b5ed5325c96a37a6281c1288c7eaae614a6253a1c1cf93c423de8f3696770",
  "copyEngine": true
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "generated/prisma",
    "prisma",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"motDePasse\",\"dbName\":\"mot_de_passe\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nom\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"prenom\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"image\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RoleUser\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"departement\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"faculte\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"specialite\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"niveauEtudes\",\"dbName\":\"niveau_etudes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateInscription\",\"dbName\":\"date_inscription\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"derniereConnexion\",\"dbName\":\"derniere_connexion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estActif\",\"dbName\":\"est_actif\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"universite\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contributions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Ressource\",\"nativeType\":null,\"relationName\":\"RessourceToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"favoris\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Favori\",\"nativeType\":null,\"relationName\":\"FavoriToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"commentaires\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Commentaire\",\"nativeType\":null,\"relationName\":\"CommentaireToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"notations\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Notation\",\"nativeType\":null,\"relationName\":\"NotationToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"historiques\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"HistoriqueAcces\",\"nativeType\":null,\"relationName\":\"HistoriqueAccesToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"collections\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Collection\",\"nativeType\":null,\"relationName\":\"CollectionToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Ressource\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"titre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TypeRessource\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"langue\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":\"fr\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"urlFichier\",\"dbName\":\"url_fichier\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"format\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"referenceBlockchain\",\"dbName\":\"reference_blockchain\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateCreation\",\"dbName\":\"date_creation\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateModification\",\"dbName\":\"date_modification\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"estPublique\",\"dbName\":\"est_publique\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"motsCles\",\"dbName\":\"mots_cles\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"auteurId\",\"dbName\":\"auteur_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"universiteSource\",\"dbName\":\"universite_source\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estExterne\",\"dbName\":\"est_externe\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"auteur\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"RessourceToUser\",\"relationFromFields\":[\"auteurId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"favoris\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Favori\",\"nativeType\":null,\"relationName\":\"FavoriToRessource\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"commentaires\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Commentaire\",\"nativeType\":null,\"relationName\":\"CommentaireToRessource\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"notations\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Notation\",\"nativeType\":null,\"relationName\":\"NotationToRessource\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"historiques\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"HistoriqueAcces\",\"nativeType\":null,\"relationName\":\"HistoriqueAccesToRessource\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"collections\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CollectionRessource\",\"nativeType\":null,\"relationName\":\"CollectionRessourceToRessource\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"partages\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PartageUniversite\",\"nativeType\":null,\"relationName\":\"PartageUniversiteToRessource\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Favori\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ressourceId\",\"dbName\":\"ressource_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateAjout\",\"dbName\":\"date_ajout\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"note\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"FavoriToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ressource\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Ressource\",\"nativeType\":null,\"relationName\":\"FavoriToRessource\",\"relationFromFields\":[\"ressourceId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"userId\",\"ressourceId\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"userId\",\"ressourceId\"]}],\"isGenerated\":false},\"Commentaire\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ressourceId\",\"dbName\":\"ressource_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contenu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateCreation\",\"dbName\":\"date_creation\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estModere\",\"dbName\":\"est_modere\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"CommentaireToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ressource\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Ressource\",\"nativeType\":null,\"relationName\":\"CommentaireToRessource\",\"relationFromFields\":[\"ressourceId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Notation\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ressourceId\",\"dbName\":\"ressource_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"note\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateNotation\",\"dbName\":\"date_notation\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"NotationToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ressource\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Ressource\",\"nativeType\":null,\"relationName\":\"NotationToRessource\",\"relationFromFields\":[\"ressourceId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"userId\",\"ressourceId\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"userId\",\"ressourceId\"]}],\"isGenerated\":false},\"HistoriqueAcces\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ressourceId\",\"dbName\":\"ressource_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateAcces\",\"dbName\":\"date_acces\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"typeAcces\",\"dbName\":\"type_acces\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TypeAcces\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ipAcces\",\"dbName\":\"ip_acces\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"universiteSrc\",\"dbName\":\"universite_source\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"HistoriqueAccesToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ressource\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Ressource\",\"nativeType\":null,\"relationName\":\"HistoriqueAccesToRessource\",\"relationFromFields\":[\"ressourceId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"DonneesRecommandation\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ressourceId\",\"dbName\":\"ressource_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"score\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"typeInteraction\",\"dbName\":\"type_interaction\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TypeInteraction\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateDonnee\",\"dbName\":\"date_donnee\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Collection\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nom\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estPublique\",\"dbName\":\"est_publique\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateCreation\",\"dbName\":\"date_creation\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"CollectionToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ressources\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CollectionRessource\",\"nativeType\":null,\"relationName\":\"CollectionToCollectionRessource\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CollectionRessource\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"collectionId\",\"dbName\":\"collection_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ressourceId\",\"dbName\":\"ressource_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateAjout\",\"dbName\":\"date_ajout\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"notes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"collection\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Collection\",\"nativeType\":null,\"relationName\":\"CollectionToCollectionRessource\",\"relationFromFields\":[\"collectionId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ressource\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Ressource\",\"nativeType\":null,\"relationName\":\"CollectionRessourceToRessource\",\"relationFromFields\":[\"ressourceId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"collectionId\",\"ressourceId\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"collectionId\",\"ressourceId\"]}],\"isGenerated\":false},\"PartageUniversite\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ressourceId\",\"dbName\":\"ressource_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"universiteSource\",\"dbName\":\"universite_source\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"universiteDestination\",\"dbName\":\"universite_destination\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"datePartage\",\"dbName\":\"date_partage\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estActif\",\"dbName\":\"est_actif\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ressource\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Ressource\",\"nativeType\":null,\"relationName\":\"PartageUniversiteToRessource\",\"relationFromFields\":[\"ressourceId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"ressourceId\",\"universiteDestination\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"ressourceId\",\"universiteDestination\"]}],\"isGenerated\":false},\"TransactionBlockchain\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"referenceBlockchain\",\"dbName\":\"reference_blockchain\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"typeTransaction\",\"dbName\":\"type_transaction\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TypeTransaction\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ressourceId\",\"dbName\":\"ressource_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"universiteOrigine\",\"dbName\":\"universite_origine\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"universiteDestination\",\"dbName\":\"universite_destination\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateTransaction\",\"dbName\":\"date_transaction\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"statut\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StatutTransaction\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hashTransaction\",\"dbName\":\"hash_transaction\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"donneesTechniques\",\"dbName\":\"donnees_techniques\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"RoleUser\":{\"values\":[{\"name\":\"ETUDIANT\",\"dbName\":null},{\"name\":\"ENSEIGNANT\",\"dbName\":null},{\"name\":\"CHERCHEUR\",\"dbName\":null},{\"name\":\"BIBLIOTHECAIRE\",\"dbName\":null},{\"name\":\"ADMINISTRATEUR\",\"dbName\":null}],\"dbName\":null},\"TypeRessource\":{\"values\":[{\"name\":\"MEMOIRE\",\"dbName\":null},{\"name\":\"THESE\",\"dbName\":null},{\"name\":\"ARTICLE_SCIENTIFIQUE\",\"dbName\":null},{\"name\":\"COURS\",\"dbName\":null},{\"name\":\"SUPPORT_PEDAGOGIQUE\",\"dbName\":null},{\"name\":\"RAPPORT_RECHERCHE\",\"dbName\":null},{\"name\":\"LIVRE\",\"dbName\":null},{\"name\":\"CONFERENCE\",\"dbName\":null}],\"dbName\":null},\"TypeAcces\":{\"values\":[{\"name\":\"CONSULTATION\",\"dbName\":null},{\"name\":\"TELECHARGEMENT\",\"dbName\":null},{\"name\":\"CITATION\",\"dbName\":null},{\"name\":\"PARTAGE\",\"dbName\":null}],\"dbName\":null},\"TypeInteraction\":{\"values\":[{\"name\":\"VUE\",\"dbName\":null},{\"name\":\"TELECHARGEMENT\",\"dbName\":null},{\"name\":\"FAVORI\",\"dbName\":null},{\"name\":\"NOTATION\",\"dbName\":null},{\"name\":\"TEMPS_LECTURE\",\"dbName\":null},{\"name\":\"RECHERCHE_SIMILAIRE\",\"dbName\":null}],\"dbName\":null},\"TypeTransaction\":{\"values\":[{\"name\":\"PUBLICATION\",\"dbName\":null},{\"name\":\"MODIFICATION\",\"dbName\":null},{\"name\":\"ACCES\",\"dbName\":null},{\"name\":\"SUPPRESSION\",\"dbName\":null},{\"name\":\"PARTAGE\",\"dbName\":null}],\"dbName\":null},\"StatutTransaction\":{\"values\":[{\"name\":\"INITIEE\",\"dbName\":null},{\"name\":\"VALIDEE\",\"dbName\":null},{\"name\":\"REJETEE\",\"dbName\":null},{\"name\":\"ANNULEE\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-debian-openssl-3.0.x.so.node");
path.join(process.cwd(), "generated/prisma/libquery_engine-debian-openssl-3.0.x.so.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "generated/prisma/schema.prisma")
