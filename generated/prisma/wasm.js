
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


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

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

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
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
