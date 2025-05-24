
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

exports.Prisma.ConventionInteruniversitaireScalarFieldEnum = {
  id: 'id',
  universiteId1: 'universiteId1',
  universiteId2: 'universiteId2',
  dateDebut: 'dateDebut',
  dateFin: 'dateFin',
  estActive: 'estActive',
  typeConvention: 'typeConvention',
  detailsConvention: 'detailsConvention',
  documentsUrl: 'documentsUrl',
  contactUniversite1: 'contactUniversite1',
  contactUniversite2: 'contactUniversite2'
};

exports.Prisma.ReglePretScalarFieldEnum = {
  id: 'id',
  universiteId: 'universiteId',
  roleUtilisateur: 'roleUtilisateur',
  nombreMaxOuvrages: 'nombreMaxOuvrages',
  dureeEmpruntJours: 'dureeEmpruntJours',
  nbRenouvellements: 'nbRenouvellements',
  penaliteRetardJours: 'penaliteRetardJours',
  exigeCarteValide: 'exigeCarteValide',
  dateMiseAJour: 'dateMiseAJour',
  estActif: 'estActif'
};

exports.Prisma.PolitiqueBibliothequeScalarFieldEnum = {
  id: 'id',
  universiteId: 'universiteId',
  politiqueRetour: 'politiqueRetour',
  politiquePerte: 'politiquePerte',
  penaliteRetard: 'penaliteRetard',
  estActive: 'estActive',
  dateMiseAJour: 'dateMiseAJour'
};

exports.Prisma.SanctionUtilisateurScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  typeRestriction: 'typeRestriction',
  dateDebut: 'dateDebut',
  dateFin: 'dateFin',
  motif: 'motif',
  empruntId: 'empruntId',
  estActive: 'estActive'
};

exports.Prisma.StatistiqueInteruniversitaireScalarFieldEnum = {
  id: 'id',
  universiteSource: 'universiteSource',
  universiteDestination: 'universiteDestination',
  mois: 'mois',
  annee: 'annee',
  nbEmprunts: 'nbEmprunts',
  nbReservations: 'nbReservations',
  ressourcesPlusConsultees: 'ressourcesPlusConsultees',
  domainesPlusConsultes: 'domainesPlusConsultes'
};

exports.Prisma.ReservationScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  ressourceId: 'ressourceId',
  dateReservation: 'dateReservation',
  dateDebut: 'dateDebut',
  dateFin: 'dateFin',
  statut: 'statut',
  commentaire: 'commentaire',
  universiteEmprunteur: 'universiteEmprunteur',
  validePar: 'validePar'
};

exports.Prisma.ExemplairePhysiqueScalarFieldEnum = {
  id: 'id',
  ressourceId: 'ressourceId',
  cote: 'cote',
  etat: 'etat',
  disponible: 'disponible',
  localisation: 'localisation',
  dateAcquisition: 'dateAcquisition',
  estReservableExterne: 'estReservableExterne',
  estEmpruntableExterne: 'estEmpruntableExterne',
  qrCode: 'qrCode'
};

exports.Prisma.EmpruntScalarFieldEnum = {
  id: 'id',
  exemplaireId: 'exemplaireId',
  userId: 'userId',
  dateEmprunt: 'dateEmprunt',
  dateRetourPrevue: 'dateRetourPrevue',
  dateRetourEffective: 'dateRetourEffective',
  statut: 'statut',
  commentaire: 'commentaire',
  universiteEmprunteur: 'universiteEmprunteur',
  estEmpruntExterne: 'estEmpruntExterne',
  motifEmprunt: 'motifEmprunt',
  validePar: 'validePar'
};

exports.Prisma.RecommandationScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  ressourceId: 'ressourceId',
  dateRecommandation: 'dateRecommandation',
  score: 'score',
  motif: 'motif',
  estVue: 'estVue',
  estInteruniversitaire: 'estInteruniversitaire',
  universiteSource: 'universiteSource'
};

exports.Prisma.UniversiteScalarFieldEnum = {
  id: 'id',
  nom: 'nom',
  adresse: 'adresse',
  ville: 'ville',
  pays: 'pays',
  siteWeb: 'siteWeb',
  dateCreation: 'dateCreation',
  adresseBlockchain: 'adresseBlockchain',
  estActive: 'estActive'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  motDePasse: 'motDePasse',
  nom: 'nom',
  telephone: 'telephone',
  prenom: 'prenom',
  image: 'image',
  role: 'role',
  derniereConnexion: 'derniereConnexion',
  estActif: 'estActif',
  universiteId: 'universiteId',
  preferencesRecommandation: 'preferencesRecommandation',
  frequenceRecommandation: 'frequenceRecommandation'
};

exports.Prisma.EtudiantScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  numeroEtudiant: 'numeroEtudiant',
  dateNaissance: 'dateNaissance',
  dateInscription: 'dateInscription',
  departement: 'departement',
  faculte: 'faculte',
  specialite: 'specialite',
  niveauEtudes: 'niveauEtudes'
};

exports.Prisma.EnseignantScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  numeroEnseignant: 'numeroEnseignant',
  dateNaissance: 'dateNaissance',
  specialite: 'specialite'
};

exports.Prisma.BibliothecaireScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  numeroBibliothecaire: 'numeroBibliothecaire',
  dateNaissance: 'dateNaissance',
  adresse: 'adresse',
  ville: 'ville',
  pays: 'pays'
};

exports.Prisma.AdministrateurScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  numeroAdmin: 'numeroAdmin',
  dateNaissance: 'dateNaissance',
  adresse: 'adresse',
  ville: 'ville',
  pays: 'pays'
};

exports.Prisma.FavoriScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  ressourceId: 'ressourceId',
  dateAjout: 'dateAjout',
  note: 'note',
  universiteSrc: 'universiteSrc',
  universiteUser: 'universiteUser'
};

exports.Prisma.CommentaireScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  ressourceId: 'ressourceId',
  contenu: 'contenu',
  dateCreation: 'dateCreation',
  universiteSrc: 'universiteSrc',
  universiteUser: 'universiteUser'
};

exports.Prisma.NotationScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  ressourceId: 'ressourceId',
  note: 'note',
  dateNotation: 'dateNotation',
  universiteSrc: 'universiteSrc',
  universiteUser: 'universiteUser'
};

exports.Prisma.HistoriqueAccesScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  ressourceId: 'ressourceId',
  dateAcces: 'dateAcces',
  typeAcces: 'typeAcces',
  universiteSrc: 'universiteSrc',
  universiteUser: 'universiteUser'
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

exports.Prisma.TransactionBlockchainScalarFieldEnum = {
  id: 'id',
  referenceBlockchain: 'referenceBlockchain',
  typeTransaction: 'typeTransaction',
  ressourceId: 'ressourceId',
  universiteOrigine: 'universiteOrigine',
  universiteDestination: 'universiteDestination',
  dateTransaction: 'dateTransaction',
  statut: 'statut',
  hashTransaction: 'hashTransaction'
};

exports.Prisma.RessourceScalarFieldEnum = {
  id: 'id',
  titre: 'titre',
  description: 'description',
  type: 'type',
  langue: 'langue',
  urlFichier: 'urlFichier',
  urlFichierLocal: 'urlFichierLocal',
  format: 'format',
  dateCreation: 'dateCreation',
  dateModification: 'dateModification',
  estPublique: 'estPublique',
  motsCles: 'motsCles',
  auteurId: 'auteurId',
  universiteId: 'universiteId',
  image: 'image',
  niveauAcces: 'niveauAcces',
  datePublication: 'datePublication',
  estValide: 'estValide',
  estArchive: 'estArchive',
  nomAuteurExterne: 'nomAuteurExterne',
  prenomAuteurExterne: 'prenomAuteurExterne',
  affiliationAuteurExterne: 'affiliationAuteurExterne',
  validation: 'validation',
  isbn: 'isbn',
  doi: 'doi',
  edition: 'edition',
  anneePublication: 'anneePublication',
  editeur: 'editeur',
  nbPages: 'nbPages',
  categorieBiblio: 'categorieBiblio',
  estEmpruntable: 'estEmpruntable',
  nbExemplaires: 'nbExemplaires',
  nbDisponibles: 'nbDisponibles',
  coteClassification: 'coteClassification',
  estEmpruntableExterne: 'estEmpruntableExterne',
  dureeMaxEmpruntExterne: 'dureeMaxEmpruntExterne',
  nbMaxExemplairesExterne: 'nbMaxExemplairesExterne',
  necessiteAutorisation: 'necessiteAutorisation'
};

exports.Prisma.StatistiqueBibliothequeScalarFieldEnum = {
  id: 'id',
  universiteId: 'universiteId',
  mois: 'mois',
  annee: 'annee',
  nbEmprunts: 'nbEmprunts',
  nbEmpruntsExternes: 'nbEmpruntsExternes',
  nbReservations: 'nbReservations',
  nbReservationsExternes: 'nbReservationsExternes',
  nbRetardsRendu: 'nbRetardsRendu',
  tauxRotation: 'tauxRotation',
  categoriesPlusEmpruntees: 'categoriesPlusEmpruntees',
  universitesPlusFrequentes: 'universitesPlusFrequentes'
};

exports.Prisma.NotificationScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  titre: 'titre',
  message: 'message',
  dateCreation: 'dateCreation',
  estLue: 'estLue',
  typeNotification: 'typeNotification',
  ressourceId: 'ressourceId'
};

exports.Prisma.JournalAuditScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  action: 'action',
  entite: 'entite',
  entiteId: 'entiteId',
  dateAction: 'dateAction',
  detailsAction: 'detailsAction',
  ipAdresse: 'ipAdresse'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.ConventionInteruniversitaireOrderByRelevanceFieldEnum = {
  id: 'id',
  universiteId1: 'universiteId1',
  universiteId2: 'universiteId2',
  detailsConvention: 'detailsConvention',
  documentsUrl: 'documentsUrl',
  contactUniversite1: 'contactUniversite1',
  contactUniversite2: 'contactUniversite2'
};

exports.Prisma.ReglePretOrderByRelevanceFieldEnum = {
  id: 'id',
  universiteId: 'universiteId'
};

exports.Prisma.PolitiqueBibliothequeOrderByRelevanceFieldEnum = {
  id: 'id',
  universiteId: 'universiteId',
  politiqueRetour: 'politiqueRetour',
  politiquePerte: 'politiquePerte',
  penaliteRetard: 'penaliteRetard'
};

exports.Prisma.SanctionUtilisateurOrderByRelevanceFieldEnum = {
  id: 'id',
  userId: 'userId',
  motif: 'motif',
  empruntId: 'empruntId'
};

exports.Prisma.StatistiqueInteruniversitaireOrderByRelevanceFieldEnum = {
  id: 'id',
  universiteSource: 'universiteSource',
  universiteDestination: 'universiteDestination',
  ressourcesPlusConsultees: 'ressourcesPlusConsultees',
  domainesPlusConsultes: 'domainesPlusConsultes'
};

exports.Prisma.ReservationOrderByRelevanceFieldEnum = {
  id: 'id',
  userId: 'userId',
  ressourceId: 'ressourceId',
  commentaire: 'commentaire',
  universiteEmprunteur: 'universiteEmprunteur',
  validePar: 'validePar'
};

exports.Prisma.ExemplairePhysiqueOrderByRelevanceFieldEnum = {
  id: 'id',
  ressourceId: 'ressourceId',
  cote: 'cote',
  localisation: 'localisation',
  qrCode: 'qrCode'
};

exports.Prisma.EmpruntOrderByRelevanceFieldEnum = {
  id: 'id',
  exemplaireId: 'exemplaireId',
  userId: 'userId',
  commentaire: 'commentaire',
  universiteEmprunteur: 'universiteEmprunteur',
  motifEmprunt: 'motifEmprunt',
  validePar: 'validePar'
};

exports.Prisma.RecommandationOrderByRelevanceFieldEnum = {
  id: 'id',
  userId: 'userId',
  ressourceId: 'ressourceId',
  universiteSource: 'universiteSource'
};

exports.Prisma.UniversiteOrderByRelevanceFieldEnum = {
  id: 'id',
  nom: 'nom',
  adresse: 'adresse',
  ville: 'ville',
  pays: 'pays',
  siteWeb: 'siteWeb',
  adresseBlockchain: 'adresseBlockchain'
};

exports.Prisma.UserOrderByRelevanceFieldEnum = {
  id: 'id',
  email: 'email',
  motDePasse: 'motDePasse',
  nom: 'nom',
  telephone: 'telephone',
  prenom: 'prenom',
  image: 'image',
  universiteId: 'universiteId',
  preferencesRecommandation: 'preferencesRecommandation'
};

exports.Prisma.EtudiantOrderByRelevanceFieldEnum = {
  id: 'id',
  userId: 'userId',
  numeroEtudiant: 'numeroEtudiant',
  departement: 'departement',
  faculte: 'faculte',
  specialite: 'specialite'
};

exports.Prisma.EnseignantOrderByRelevanceFieldEnum = {
  id: 'id',
  userId: 'userId',
  numeroEnseignant: 'numeroEnseignant',
  specialite: 'specialite'
};

exports.Prisma.BibliothecaireOrderByRelevanceFieldEnum = {
  id: 'id',
  userId: 'userId',
  numeroBibliothecaire: 'numeroBibliothecaire',
  adresse: 'adresse',
  ville: 'ville',
  pays: 'pays'
};

exports.Prisma.AdministrateurOrderByRelevanceFieldEnum = {
  id: 'id',
  userId: 'userId',
  numeroAdmin: 'numeroAdmin',
  adresse: 'adresse',
  ville: 'ville',
  pays: 'pays'
};

exports.Prisma.FavoriOrderByRelevanceFieldEnum = {
  id: 'id',
  userId: 'userId',
  ressourceId: 'ressourceId',
  note: 'note',
  universiteSrc: 'universiteSrc',
  universiteUser: 'universiteUser'
};

exports.Prisma.CommentaireOrderByRelevanceFieldEnum = {
  id: 'id',
  userId: 'userId',
  ressourceId: 'ressourceId',
  contenu: 'contenu',
  universiteSrc: 'universiteSrc',
  universiteUser: 'universiteUser'
};

exports.Prisma.NotationOrderByRelevanceFieldEnum = {
  id: 'id',
  userId: 'userId',
  ressourceId: 'ressourceId',
  universiteSrc: 'universiteSrc',
  universiteUser: 'universiteUser'
};

exports.Prisma.HistoriqueAccesOrderByRelevanceFieldEnum = {
  id: 'id',
  userId: 'userId',
  ressourceId: 'ressourceId',
  universiteSrc: 'universiteSrc',
  universiteUser: 'universiteUser'
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

exports.Prisma.TransactionBlockchainOrderByRelevanceFieldEnum = {
  id: 'id',
  referenceBlockchain: 'referenceBlockchain',
  ressourceId: 'ressourceId',
  universiteOrigine: 'universiteOrigine',
  universiteDestination: 'universiteDestination',
  hashTransaction: 'hashTransaction'
};

exports.Prisma.RessourceOrderByRelevanceFieldEnum = {
  id: 'id',
  titre: 'titre',
  description: 'description',
  langue: 'langue',
  urlFichier: 'urlFichier',
  urlFichierLocal: 'urlFichierLocal',
  format: 'format',
  motsCles: 'motsCles',
  auteurId: 'auteurId',
  universiteId: 'universiteId',
  image: 'image',
  nomAuteurExterne: 'nomAuteurExterne',
  prenomAuteurExterne: 'prenomAuteurExterne',
  affiliationAuteurExterne: 'affiliationAuteurExterne',
  isbn: 'isbn',
  doi: 'doi',
  edition: 'edition',
  editeur: 'editeur',
  coteClassification: 'coteClassification'
};

exports.Prisma.StatistiqueBibliothequeOrderByRelevanceFieldEnum = {
  id: 'id',
  universiteId: 'universiteId',
  categoriesPlusEmpruntees: 'categoriesPlusEmpruntees',
  universitesPlusFrequentes: 'universitesPlusFrequentes'
};

exports.Prisma.NotificationOrderByRelevanceFieldEnum = {
  id: 'id',
  userId: 'userId',
  titre: 'titre',
  message: 'message',
  ressourceId: 'ressourceId'
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

exports.Prisma.JournalAuditOrderByRelevanceFieldEnum = {
  id: 'id',
  userId: 'userId',
  action: 'action',
  entite: 'entite',
  entiteId: 'entiteId',
  ipAdresse: 'ipAdresse'
};
exports.TypeConvention = exports.$Enums.TypeConvention = {
  EMPRUNT_RECIPROQUE: 'EMPRUNT_RECIPROQUE',
  CONSULTATION_UNIQUEMENT: 'CONSULTATION_UNIQUEMENT',
  ACCES_COMPLET: 'ACCES_COMPLET',
  COLLABORATION_SPECIFIQUE: 'COLLABORATION_SPECIFIQUE'
};

exports.RoleUser = exports.$Enums.RoleUser = {
  ETUDIANT: 'ETUDIANT',
  ENSEIGNANT: 'ENSEIGNANT',
  CHERCHEUR: 'CHERCHEUR',
  BIBLIOTHECAIRE: 'BIBLIOTHECAIRE',
  ADMIN: 'ADMIN'
};

exports.TypeSanction = exports.$Enums.TypeSanction = {
  INTERDICTION_EMPRUNT: 'INTERDICTION_EMPRUNT',
  LIMITATION_SERVICES: 'LIMITATION_SERVICES',
  SUSPENSION_COMPTE: 'SUSPENSION_COMPTE',
  AMENDE_FINANCIERE: 'AMENDE_FINANCIERE'
};

exports.StatutReservation = exports.$Enums.StatutReservation = {
  EN_ATTENTE: 'EN_ATTENTE',
  CONFIRMEE: 'CONFIRMEE',
  ANNULEE: 'ANNULEE',
  TERMINEE: 'TERMINEE',
  RETARD: 'RETARD'
};

exports.EtatExemplaire = exports.$Enums.EtatExemplaire = {
  NEUF: 'NEUF',
  BON: 'BON',
  USAGE: 'USAGE',
  ABIME: 'ABIME',
  PERDU: 'PERDU'
};

exports.StatutEmprunt = exports.$Enums.StatutEmprunt = {
  EN_COURS: 'EN_COURS',
  RETOURNE: 'RETOURNE',
  RETARD: 'RETARD',
  PERDU: 'PERDU'
};

exports.MotifRecommandation = exports.$Enums.MotifRecommandation = {
  INTERET_SIMILAIRE: 'INTERET_SIMILAIRE',
  CONSULTE_RECEMMENT: 'CONSULTE_RECEMMENT',
  POPULAIRE_DOMAINE: 'POPULAIRE_DOMAINE',
  NOUVEAU_CONTENU: 'NOUVEAU_CONTENU',
  SUGGESTION_ENSEIGNANT: 'SUGGESTION_ENSEIGNANT'
};

exports.FrequenceRecommandation = exports.$Enums.FrequenceRecommandation = {
  QUOTIDIENNE: 'QUOTIDIENNE',
  HEBDOMADAIRE: 'HEBDOMADAIRE',
  MENSUELLE: 'MENSUELLE',
  JAMAIS: 'JAMAIS'
};

exports.NiveauEtudes = exports.$Enums.NiveauEtudes = {
  LICENCE: 'LICENCE',
  MASTER: 'MASTER',
  DOCTORAT: 'DOCTORAT',
  POSTDOCTORAT: 'POSTDOCTORAT'
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

exports.NiveauAcces = exports.$Enums.NiveauAcces = {
  PUBLIC: 'PUBLIC',
  AUTHENTIFIE: 'AUTHENTIFIE',
  UNIVERSITE_ORIGINE: 'UNIVERSITE_ORIGINE',
  PRIVE: 'PRIVE'
};

exports.TypeValidation = exports.$Enums.TypeValidation = {
  EN_ATTENTE: 'EN_ATTENTE',
  VALIDE: 'VALIDE',
  REJETEE: 'REJETEE',
  ANNULEE: 'ANNULEE'
};

exports.CategorieBiblio = exports.$Enums.CategorieBiblio = {
  LIVRE: 'LIVRE',
  MANUEL_SCOLAIRE: 'MANUEL_SCOLAIRE',
  THESE_DOCTORAT: 'THESE_DOCTORAT',
  MEMOIRE_MASTER: 'MEMOIRE_MASTER',
  MEMOIRE_LICENCE: 'MEMOIRE_LICENCE',
  RAPPORT_RECHERCHE: 'RAPPORT_RECHERCHE',
  PERIODIQUE: 'PERIODIQUE',
  ARTICLE_JOURNAL: 'ARTICLE_JOURNAL',
  RESSOURCE_MULTIMEDIA: 'RESSOURCE_MULTIMEDIA',
  DOCUMENT_TECHNIQUE: 'DOCUMENT_TECHNIQUE'
};

exports.TypeNotification = exports.$Enums.TypeNotification = {
  EMPRUNT: 'EMPRUNT',
  RAPPEL_RETOUR: 'RAPPEL_RETOUR',
  RESERVATION_CONFIRMEE: 'RESERVATION_CONFIRMEE',
  NOUVELLE_RESSOURCE: 'NOUVELLE_RESSOURCE',
  RECOMMANDATION: 'RECOMMANDATION',
  PARTAGE: 'PARTAGE',
  CONVENTION: 'CONVENTION',
  ADMINISTRATIF: 'ADMINISTRATIF'
};

exports.Prisma.ModelName = {
  ConventionInteruniversitaire: 'ConventionInteruniversitaire',
  ReglePret: 'ReglePret',
  PolitiqueBibliotheque: 'PolitiqueBibliotheque',
  SanctionUtilisateur: 'SanctionUtilisateur',
  StatistiqueInteruniversitaire: 'StatistiqueInteruniversitaire',
  Reservation: 'Reservation',
  ExemplairePhysique: 'ExemplairePhysique',
  Emprunt: 'Emprunt',
  Recommandation: 'Recommandation',
  Universite: 'Universite',
  User: 'User',
  Etudiant: 'Etudiant',
  Enseignant: 'Enseignant',
  Bibliothecaire: 'Bibliothecaire',
  Administrateur: 'Administrateur',
  Favori: 'Favori',
  Commentaire: 'Commentaire',
  Notation: 'Notation',
  HistoriqueAcces: 'HistoriqueAcces',
  DonneesRecommandation: 'DonneesRecommandation',
  Collection: 'Collection',
  CollectionRessource: 'CollectionRessource',
  TransactionBlockchain: 'TransactionBlockchain',
  Ressource: 'Ressource',
  StatistiqueBibliotheque: 'StatistiqueBibliotheque',
  Notification: 'Notification',
  JournalAudit: 'JournalAudit'
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
