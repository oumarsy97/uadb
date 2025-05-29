
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

exports.Prisma.ConventionInteruniversitaireScalarFieldEnum = {
  id: 'id',
  universiteId1: 'universiteId1',
  universiteId2: 'universiteId2',
  dateDebut: 'dateDebut',
  dateFin: 'dateFin',
  estActive: 'estActive',
  typeConvention: 'typeConvention',
  detailsConvention: 'detailsConvention'
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
  detailsConvention: 'detailsConvention'
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
exports.TypeModalite = exports.$Enums.TypeModalite = {
  INTERNE: 'INTERNE',
  EXTERNE: 'EXTERNE'
};

exports.TypeSanction = exports.$Enums.TypeSanction = {
  INTERDICTION_EMPRUNT: 'INTERDICTION_EMPRUNT',
  LIMITATION_SERVICES: 'LIMITATION_SERVICES',
  SUSPENSION_COMPTE: 'SUSPENSION_COMPTE',
  AMENDE_FINANCIERE: 'AMENDE_FINANCIERE'
};

exports.TypeConvention = exports.$Enums.TypeConvention = {
  EMPRUNT_RECIPROQUE: 'EMPRUNT_RECIPROQUE',
  CONSULTATION_UNIQUEMENT: 'CONSULTATION_UNIQUEMENT',
  ACCES_COMPLET: 'ACCES_COMPLET',
  COLLABORATION_SPECIFIQUE: 'COLLABORATION_SPECIFIQUE'
};

exports.TypeValidation = exports.$Enums.TypeValidation = {
  EN_ATTENTE: 'EN_ATTENTE',
  VALIDE: 'VALIDE',
  REJETEE: 'REJETEE',
  ANNULEE: 'ANNULEE'
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

exports.RoleUser = exports.$Enums.RoleUser = {
  ETUDIANT: 'ETUDIANT',
  ENSEIGNANT: 'ENSEIGNANT',
  CHERCHEUR: 'CHERCHEUR',
  BIBLIOTHECAIRE: 'BIBLIOTHECAIRE',
  ADMIN: 'ADMIN'
};

exports.NiveauEtudes = exports.$Enums.NiveauEtudes = {
  LICENCE: 'LICENCE',
  MASTER: 'MASTER',
  DOCTORAT: 'DOCTORAT',
  POSTDOCTORAT: 'POSTDOCTORAT'
};

exports.FrequenceRecommandation = exports.$Enums.FrequenceRecommandation = {
  QUOTIDIENNE: 'QUOTIDIENNE',
  HEBDOMADAIRE: 'HEBDOMADAIRE',
  MENSUELLE: 'MENSUELLE',
  JAMAIS: 'JAMAIS'
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
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": "mysql://oumar:passer123@localhost:3306/dbuadb"
      }
    }
  },
  "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\ngenerator client {\n  provider = \"prisma-client-js\"\n  output   = \"../generated/prisma\"\n}\n\ndatasource db {\n  provider = \"mysql\"\n  url      = env(\"DATABASE_URL\")\n}\n\n// Modèle pour les conventions entre universités\nmodel ConventionInteruniversitaire {\n  id                String         @id @default(uuid())\n  universiteId1     String         @map(\"universite_id_1\")\n  universiteId2     String         @map(\"universite_id_2\")\n  dateDebut         DateTime       @default(now()) @map(\"date_debut\")\n  dateFin           DateTime?      @map(\"date_fin\")\n  estActive         Boolean        @default(true) @map(\"est_active\")\n  typeConvention    TypeConvention @default(EMPRUNT_RECIPROQUE)\n  detailsConvention String?        @map(\"details_convention\") @db.Text\n\n  @@unique([universiteId1, universiteId2])\n}\n\nenum TypeModalite {\n  INTERNE\n  EXTERNE\n}\n\n// Modèle pour les règles de prêt selon le profil utilisateur\nmodel ReglePret {\n  id                  String   @id @default(uuid())\n  universiteId        String   @map(\"universite_id\")\n  roleUtilisateur     RoleUser @map(\"role_utilisateur\") // ETUDIANT, ENSEIGNANT, etc.\n  nombreMaxOuvrages   Int      @default(2) @map(\"nombre_max_ouvrages\")\n  dureeEmpruntJours   Int      @default(15) @map(\"duree_emprunt_jours\")\n  nbRenouvellements   Int      @default(1) @map(\"nb_renouvellements\")\n  penaliteRetardJours Boolean  @default(true) @map(\"penalite_retard_jours\")\n  exigeCarteValide    Boolean  @default(true) @map(\"exige_carte_valide\")\n  dateMiseAJour       DateTime @updatedAt @map(\"date_mise_a_jour\")\n  estActif            Boolean  @default(true) @map(\"est_actif\")\n\n  // Relation avec l'université\n  universite Universite @relation(fields: [universiteId], references: [id])\n\n  @@unique([universiteId, roleUtilisateur])\n  @@index([universiteId])\n  @@index([roleUtilisateur])\n}\n\n// Modèle pour les politiques générales de la bibliothèque\nmodel PolitiqueBibliotheque {\n  id              String   @id @default(uuid())\n  universiteId    String   @map(\"universite_id\")\n  politiqueRetour String   @map(\"politique_retour\") @db.Text // Description des lieux de retour\n  politiquePerte  String   @map(\"politique_perte\") @db.Text // Politique en cas de perte\n  penaliteRetard  String   @map(\"penalite_retard\") @db.Text // Description de la pénalité\n  estActive       Boolean  @default(true) @map(\"est_active\")\n  dateMiseAJour   DateTime @updatedAt @map(\"date_mise_a_jour\")\n\n  // Relation avec l'université\n  universite Universite @relation(fields: [universiteId], references: [id])\n\n  @@index([universiteId])\n}\n\nmodel SanctionUtilisateur {\n  id              String       @id @default(uuid())\n  userId          String       @map(\"user_id\")\n  typeRestriction TypeSanction @map(\"type_restriction\")\n  dateDebut       DateTime     @default(now()) @map(\"date_debut\")\n  dateFin         DateTime     @map(\"date_fin\") // Calculée automatiquement selon la règle\n  motif           String       @db.Text\n  empruntId       String?      @map(\"emprunt_id\") // Lien vers l'emprunt en retard ou perdu\n  estActive       Boolean      @default(true) @map(\"est_active\")\n\n  // Relations\n  user    User     @relation(fields: [userId], references: [id])\n  emprunt Emprunt? @relation(fields: [empruntId], references: [id])\n\n  @@index([userId, estActive])\n  @@index([dateFin])\n}\n\nenum TypeSanction {\n  INTERDICTION_EMPRUNT\n  LIMITATION_SERVICES\n  SUSPENSION_COMPTE\n  AMENDE_FINANCIERE\n}\n\nenum TypeConvention {\n  EMPRUNT_RECIPROQUE\n  CONSULTATION_UNIQUEMENT\n  ACCES_COMPLET\n  COLLABORATION_SPECIFIQUE\n}\n\nenum TypeValidation {\n  EN_ATTENTE\n  VALIDE\n  REJETEE\n  ANNULEE\n}\n\n// Modèle pour les statistiques d'emprunts inter-universitaires\nmodel StatistiqueInteruniversitaire {\n  id                       String  @id @default(uuid())\n  universiteSource         String  @map(\"universite_source\")\n  universiteDestination    String  @map(\"universite_destination\")\n  mois                     Int\n  annee                    Int\n  nbEmprunts               Int     @default(0) @map(\"nb_emprunts\")\n  nbReservations           Int     @default(0) @map(\"nb_reservations\")\n  ressourcesPlusConsultees String? @map(\"ressources_plus_consultees\") // JSON array\n  domainesPlusConsultes    String? @map(\"domaines_plus_consultes\") // JSON array\n\n  // Relations avec les universités (manquantes)\n  universiteSourceRel      Universite @relation(\"StatistiqueSource\", fields: [universiteSource], references: [id])\n  universiteDestinationRel Universite @relation(\"StatistiqueDestination\", fields: [universiteDestination], references: [id])\n\n  @@unique([universiteSource, universiteDestination, mois, annee])\n}\n\n// Système de réservation des ressources\nmodel Reservation {\n  id                      String            @id @default(uuid())\n  userId                  String?           @map(\"user_id\")\n  ressourceId             String            @map(\"ressource_id\")\n  dateReservation         DateTime          @default(now()) @map(\"date_reservation\")\n  dateDebut               DateTime          @map(\"date_debut\")\n  dateFin                 DateTime          @map(\"date_fin\")\n  statut                  StatutReservation @default(EN_ATTENTE)\n  commentaire             String?           @db.Text\n  universiteEmprunteur    String            @map(\"universite_emprunteur\") // Université d'origine du réservateur\n  validePar               String?           @map(\"valide_par\") // ID de l'administrateur qui a validé la réservation externe\n  user                    User?             @relation(fields: [userId], references: [id])\n  ressource               Ressource         @relation(fields: [ressourceId], references: [id])\n  universiteEmprunteurRel Universite        @relation(\"UniversiteReservation\", fields: [universiteEmprunteur], references: [id])\n  valideur                Bibliothecaire?   @relation(fields: [validePar], references: [id]) // ID de l'administrateur qui a validé la réservation\n\n  @@index([dateDebut, dateFin]) // Index pour optimiser les recherches par date\n}\n\nenum StatutReservation {\n  EN_ATTENTE\n  CONFIRMEE\n  ANNULEE\n  TERMINEE\n  RETARD\n}\n\n// Gestion des exemplaires physiques\nmodel ExemplairePhysique {\n  id                    String         @id @default(uuid())\n  ressourceId           String         @map(\"ressource_id\")\n  cote                  String // Référence bibliothécaire\n  etat                  EtatExemplaire @default(BON)\n  disponible            Boolean        @default(true)\n  localisation          String // Salle, étage, étagère\n  dateAcquisition       DateTime?      @default(now()) @map(\"date_acquisition\")\n  estReservableExterne  Boolean?       @default(false) @map(\"est_reservable_externe\") // Disponible pour réservation externe\n  estEmpruntableExterne Boolean?       @default(false) @map(\"est_empruntable_externe\") // Disponible pour emprunt externe\n  qrCode                String?        @map(\"qr_code\") // QR code pour identification\n  ressource             Ressource      @relation(fields: [ressourceId], references: [id])\n  emprunts              Emprunt[]\n\n  @@index([ressourceId])\n  @@index([disponible])\n  @@index([etat])\n  @@index([qrCode])\n}\n\nenum EtatExemplaire {\n  NEUF\n  BON\n  USAGE\n  ABIME\n  PERDU\n}\n\n// Gestion des emprunts physiques\nmodel Emprunt {\n  id                   String        @id @default(uuid())\n  exemplaireId         String        @map(\"exemplaire_id\")\n  userId               String        @map(\"user_id\")\n  dateEmprunt          DateTime      @default(now()) @map(\"date_emprunt\")\n  dateRetourPrevue     DateTime      @map(\"date_retour_prevue\")\n  dateRetourEffective  DateTime?     @map(\"date_retour_effective\")\n  statut               StatutEmprunt @default(EN_COURS)\n  commentaire          String?       @db.Text\n  universiteEmprunteur String        @map(\"universite_emprunteur\") // Université d'origine de l'emprunteur\n  estEmpruntExterne    Boolean       @default(false) @map(\"est_emprunt_externe\") // Flag pour les emprunts inter-universitaires\n  motifEmprunt         String?       @map(\"motif_emprunt\") // Justification pour emprunt externe\n  validePar            String?       @map(\"valide_par\") // ID de l'administrateur qui a validé l'emprunt externe\n\n  exemplaire              ExemplairePhysique    @relation(fields: [exemplaireId], references: [id])\n  user                    User                  @relation(fields: [userId], references: [id])\n  universiteEmprunteurRel Universite            @relation(\"UniversiteEmprunt\", fields: [universiteEmprunteur], references: [id])\n  SanctionUtilisateur     SanctionUtilisateur[]\n\n  @@index([dateEmprunt, dateRetourPrevue])\n  @@index([statut])\n}\n\nenum StatutEmprunt {\n  EN_COURS\n  RETOURNE\n  RETARD\n  PERDU\n}\n\n// Système de recommandation amélioré\nmodel Recommandation {\n  id                    String              @id @default(uuid())\n  userId                String              @map(\"user_id\")\n  ressourceId           String              @map(\"ressource_id\")\n  dateRecommandation    DateTime            @default(now()) @map(\"date_recommandation\")\n  score                 Float // Score de pertinence calculé\n  motif                 MotifRecommandation @map(\"motif_recommandation\") // Motif de la recommandation\n  estVue                Boolean             @default(false) @map(\"est_vue\")\n  estInteruniversitaire Boolean             @default(false) @map(\"est_interuniversitaire\") // Recommandation qui vient d'une autre université\n  universiteSource      String?             @map(\"universite_source\") // ID de l'université source pour recommandations interuniversitaires\n\n  user                User        @relation(fields: [userId], references: [id])\n  ressource           Ressource   @relation(fields: [ressourceId], references: [id])\n  universiteSourceRel Universite? @relation(\"UniversiteRecommandation\", fields: [universiteSource], references: [id])\n\n  @@index([userId, estVue])\n  @@index([ressourceId])\n}\n\nenum MotifRecommandation {\n  INTERET_SIMILAIRE\n  CONSULTE_RECEMMENT\n  POPULAIRE_DOMAINE\n  NOUVEAU_CONTENU\n  SUGGESTION_ENSEIGNANT\n}\n\nmodel Universite {\n  id                String   @id @default(uuid())\n  nom               String   @unique\n  adresse           String?\n  ville             String\n  pays              String\n  siteWeb           String?  @map(\"site_web\")\n  dateCreation      DateTime @default(now()) @map(\"date_creation\")\n  adresseBlockchain String?  @map(\"adresse_blockchain\")\n  estActive         Boolean  @default(true) @map(\"est_active\")\n\n  // Relations existantes\n  users      User[]\n  ressources Ressource[]\n\n  // Relations manquantes\n  statistiquesSource      StatistiqueInteruniversitaire[] @relation(\"StatistiqueSource\")\n  statistiquesDestination StatistiqueInteruniversitaire[] @relation(\"StatistiqueDestination\")\n  reservations            Reservation[]                   @relation(\"UniversiteReservation\")\n  emprunts                Emprunt[]                       @relation(\"UniversiteEmprunt\")\n  recommandationsSource   Recommandation[]                @relation(\"UniversiteRecommandation\")\n\n  // Relations avec les statistiques biblio\n  statistiquesBibliotheque StatistiqueBibliotheque[]\n\n  // Relations avec les partages\n  // partagesSource    PartageUniversite[] @relation(\"UniversitePartageSource\")\n  // partagesDestination PartageUniversite[] @relation(\"UniversitePartageDestination\")\n\n  // Relations avec les transactions blockchain\n  transactionsOrigine     TransactionBlockchain[] @relation(\"UniversiteTransactionOrigine\")\n  transactionsDestination TransactionBlockchain[] @relation(\"UniversiteTransactionDestination\")\n\n  HistoriqueAcces HistoriqueAcces[] @relation(\"UniversiteHistoriqueAcces\")\n\n  reglePrets ReglePret[]\n\n  politiqueBibliotheques PolitiqueBibliotheque[]\n}\n\nenum RoleUser {\n  ETUDIANT\n  ENSEIGNANT\n  CHERCHEUR\n  BIBLIOTHECAIRE\n  ADMIN\n}\n\n// Modèle User avec préférences de recommandation\nmodel User {\n  id                String    @id @default(uuid())\n  email             String    @unique\n  motDePasse        String    @map(\"mot_de_passe\")\n  nom               String\n  telephone         String?\n  prenom            String\n  image             String?\n  role              RoleUser  @map(\"role\")\n  derniereConnexion DateTime? @map(\"derniere_connexion\")\n  estActif          Boolean   @default(true) @map(\"est_actif\")\n  universiteId      String    @map(\"universite_id\")\n\n  // Relations existantes\n  universite                Universite              @relation(fields: [universiteId], references: [id])\n  contributions             Ressource[]\n  favoris                   Favori[]\n  commentaires              Commentaire[]\n  notations                 Notation[]\n  historiques               HistoriqueAcces[]\n  collections               Collection[]\n  reservations              Reservation[]\n  emprunts                  Emprunt[]\n  recommandations           Recommandation[]\n  // Nouveaux champs pour recommandations\n  preferencesRecommandation String?                 @map(\"preferences_recommandation\") // JSON: {\"domaines\": [\"informatique\", \"droit\"], \"formats\": [\"pdf\", \"docx\"]}\n  frequenceRecommandation   FrequenceRecommandation @default(HEBDOMADAIRE) @map(\"frequence_recommandation\")\n  JournalAudit              JournalAudit[]\n  donneesRecommandations    DonneesRecommandation[]\n  notifications             Notification[]\n  etudiants                 Etudiant[]\n  enseignants               Enseignant[]\n  bibliothecaires           Bibliothecaire[]\n  administrateurs           Administrateur[]\n  sanctions                 SanctionUtilisateur[]\n\n  @@index([preferencesRecommandation])\n  @@index([frequenceRecommandation])\n  @@index([universiteId])\n  @@index([role])\n  @@index([email])\n}\n\nmodel Etudiant {\n  id              String       @id @default(uuid())\n  userId          String       @map(\"user_id\")\n  numeroEtudiant  String       @unique @map(\"numero_etudiant\")\n  dateNaissance   DateTime     @map(\"date_naissance\")\n  dateInscription DateTime     @default(now()) @map(\"date_inscription\")\n  departement     String?\n  faculte         String?\n  specialite      String?\n  niveauEtudes    NiveauEtudes @default(LICENCE) @map(\"niveau_etudes\")\n  user            User         @relation(fields: [userId], references: [id])\n\n  @@index([userId])\n  @@index([departement])\n}\n\nenum NiveauEtudes {\n  LICENCE\n  MASTER\n  DOCTORAT\n  POSTDOCTORAT\n}\n\nmodel Enseignant {\n  id               String   @id @default(uuid())\n  userId           String   @map(\"user_id\")\n  numeroEnseignant String   @unique @map(\"numero_enseignant\")\n  dateNaissance    DateTime @map(\"date_naissance\")\n  specialite       String?\n  user             User     @relation(fields: [userId], references: [id])\n\n  @@index([userId])\n}\n\nmodel Bibliothecaire {\n  id                   String        @id @default(uuid())\n  userId               String        @map(\"user_id\")\n  numeroBibliothecaire String        @unique @map(\"numero_bibliothecaire\")\n  dateNaissance        DateTime      @map(\"date_naissance\")\n  adresse              String?\n  ville                String?\n  pays                 String?\n  user                 User          @relation(fields: [userId], references: [id])\n  reservations         Reservation[]\n\n  @@index([userId])\n}\n\nmodel Administrateur {\n  id            String   @id @default(uuid())\n  userId        String   @map(\"user_id\")\n  numeroAdmin   String   @unique @map(\"numero_administrateur\")\n  dateNaissance DateTime @map(\"date_naissance\")\n  adresse       String?\n  ville         String?\n  pays          String?\n\n  user User @relation(fields: [userId], references: [id])\n\n  @@index([userId])\n}\n\nenum FrequenceRecommandation {\n  QUOTIDIENNE\n  HEBDOMADAIRE\n  MENSUELLE\n  JAMAIS\n}\n\nmodel Favori {\n  id             String    @id @default(uuid())\n  userId         String    @map(\"user_id\")\n  ressourceId    String    @map(\"ressource_id\")\n  dateAjout      DateTime  @default(now()) @map(\"date_ajout\")\n  note           String?   @db.Text\n  user           User      @relation(fields: [userId], references: [id])\n  ressource      Ressource @relation(fields: [ressourceId], references: [id])\n  universiteSrc  String?   @map(\"universite_source\") // Si favori externe\n  universiteUser String?   @map(\"universite_utilisateur\") // Université de l'utilisateur\n\n  @@unique([userId, ressourceId])\n  @@index([dateAjout])\n  @@index([universiteSrc])\n  @@index([universiteUser])\n}\n\nmodel Commentaire {\n  id             String    @id @default(uuid())\n  userId         String    @map(\"user_id\")\n  ressourceId    String    @map(\"ressource_id\")\n  contenu        String    @db.Text\n  dateCreation   DateTime  @default(now()) @map(\"date_creation\")\n  user           User      @relation(fields: [userId], references: [id])\n  ressource      Ressource @relation(fields: [ressourceId], references: [id])\n  universiteSrc  String?   @map(\"universite_source\") // Si commentaire externe\n  universiteUser String?   @map(\"universite_utilisateur\")\n\n  @@index([ressourceId, dateCreation])\n  @@index([universiteSrc])\n  @@index([universiteUser])\n}\n\nmodel Notation {\n  id             String    @id @default(uuid())\n  userId         String    @map(\"user_id\")\n  ressourceId    String    @map(\"ressource_id\")\n  note           Int // 1-5\n  dateNotation   DateTime  @default(now()) @map(\"date_notation\")\n  user           User      @relation(fields: [userId], references: [id])\n  ressource      Ressource @relation(fields: [ressourceId], references: [id])\n  universiteSrc  String?   @map(\"universite_source\") // Si notation externe\n  universiteUser String?   @map(\"universite_utilisateur\") // Université de l'utilisateur\n\n  @@unique([userId, ressourceId])\n  @@index([ressourceId])\n  @@index([universiteSrc])\n  @@index([universiteUser])\n}\n\nmodel HistoriqueAcces {\n  id             String    @id @default(uuid())\n  userId         String    @map(\"user_id\")\n  ressourceId    String    @map(\"ressource_id\")\n  dateAcces      DateTime  @default(now()) @map(\"date_acces\")\n  typeAcces      TypeAcces\n  universiteSrc  String?   @map(\"universite_source\") // Si accès externe\n  universiteUser String?   @map(\"universite_utilisateur\") // Université de l'utilisateur\n\n  user             User        @relation(fields: [userId], references: [id])\n  ressource        Ressource   @relation(fields: [ressourceId], references: [id])\n  universiteSrcRel Universite? @relation(\"UniversiteHistoriqueAcces\", fields: [universiteSrc], references: [id])\n\n  @@index([dateAcces])\n  @@index([ressourceId, typeAcces])\n}\n\nenum TypeAcces {\n  CONSULTATION\n  TELECHARGEMENT\n  CITATION\n  PARTAGE\n}\n\nmodel DonneesRecommandation {\n  id              String          @id @default(uuid())\n  userId          String          @map(\"user_id\")\n  ressourceId     String          @map(\"ressource_id\")\n  score           Float // Score de pertinence calculé\n  typeInteraction TypeInteraction @map(\"type_interaction\")\n  dateDonnee      DateTime        @default(now()) @map(\"date_donnee\")\n\n  // Relations manquantes\n  user      User      @relation(fields: [userId], references: [id])\n  ressource Ressource @relation(fields: [ressourceId], references: [id])\n\n  @@index([userId])\n  @@index([ressourceId])\n  @@index([dateDonnee])\n}\n\nenum TypeInteraction {\n  VUE\n  TELECHARGEMENT\n  FAVORI\n  NOTATION\n  TEMPS_LECTURE\n  RECHERCHE_SIMILAIRE\n}\n\nmodel Collection {\n  id           String   @id @default(uuid())\n  userId       String   @map(\"user_id\")\n  nom          String\n  description  String?  @db.Text\n  estPublique  Boolean  @default(false) @map(\"est_publique\")\n  dateCreation DateTime @default(now()) @map(\"date_creation\")\n\n  user       User                  @relation(fields: [userId], references: [id])\n  ressources CollectionRessource[]\n\n  @@index([userId])\n  @@index([estPublique])\n}\n\nmodel CollectionRessource {\n  id           String   @id @default(uuid())\n  collectionId String   @map(\"collection_id\")\n  ressourceId  String   @map(\"ressource_id\")\n  dateAjout    DateTime @default(now()) @map(\"date_ajout\")\n  notes        String?  @db.Text\n\n  collection Collection @relation(fields: [collectionId], references: [id])\n  ressource  Ressource  @relation(fields: [ressourceId], references: [id])\n\n  @@unique([collectionId, ressourceId])\n  @@index([dateAjout])\n}\n\n// Modèle pour les partages inter-universitaires\n// model PartageUniversite {\n//   id                    String    @id @default(uuid())\n//   ressourceId           String    @map(\"ressource_id\")\n//   universiteSource      String    @map(\"universite_source\")\n//   universiteDestination String    @map(\"universite_destination\")\n//   datePartage           DateTime  @default(now()) @map(\"date_partage\")\n//   estActif              Boolean   @default(true) @map(\"est_actif\")\n\n//   ressource             Ressource @relation(fields: [ressourceId], references: [id])\n//   universiteSourceRel   Universite @relation(\"UniversitePartageSource\", fields: [universiteSource], references: [id])\n//   universiteDestinationRel Universite @relation(\"UniversitePartageDestination\", fields: [universiteDestination], references: [id])\n\n//   @@unique([ressourceId, universiteDestination])\n//   @@index([datePartage])\n//   @@index([estActif])\n// }\n\nmodel TransactionBlockchain {\n  id                       String            @id @default(uuid())\n  referenceBlockchain      String            @unique @map(\"reference_blockchain\")\n  typeTransaction          TypeTransaction   @map(\"type_transaction\")\n  ressourceId              String?           @map(\"ressource_id\")\n  universiteOrigine        String            @map(\"universite_origine\")\n  universiteDestination    String?           @map(\"universite_destination\")\n  dateTransaction          DateTime          @default(now()) @map(\"date_transaction\")\n  statut                   StatutTransaction\n  hashTransaction          String            @unique @map(\"hash_transaction\")\n  // Relations manquantes\n  ressource                Ressource?        @relation(fields: [ressourceId], references: [id])\n  universiteOrigineRel     Universite        @relation(\"UniversiteTransactionOrigine\", fields: [universiteOrigine], references: [id])\n  universiteDestinationRel Universite?       @relation(\"UniversiteTransactionDestination\", fields: [universiteDestination], references: [id])\n\n  @@index([typeTransaction, statut])\n  @@index([dateTransaction])\n}\n\nenum TypeTransaction {\n  PUBLICATION\n  MODIFICATION\n  ACCES\n  SUPPRESSION\n  PARTAGE\n}\n\nenum StatutTransaction {\n  INITIEE\n  VALIDEE\n  REJETEE\n  ANNULEE\n}\n\nenum TypeRessource {\n  MEMOIRE\n  THESE\n  ARTICLE_SCIENTIFIQUE\n  COURS\n  SUPPORT_PEDAGOGIQUE\n  RAPPORT_RECHERCHE\n  LIVRE\n  CONFERENCE\n}\n\nenum NiveauAcces {\n  PUBLIC // Accessible à tous\n  AUTHENTIFIE // Accessible aux utilisateurs authentifiés\n  UNIVERSITE_ORIGINE // Réservé aux membres de l'université d'origine\n  PRIVE // Accès limité (créateur et administrateurs)\n}\n\n// Modèle Ressource pour bibliothèque\nmodel Ressource {\n  // Champs existants\n  id                       String         @id @default(uuid())\n  titre                    String\n  description              String         @db.Text\n  type                     TypeRessource\n  langue                   String         @default(\"fr\")\n  urlFichier               String         @map(\"url_fichier\")\n  urlFichierLocal          String?        @default(\"file:///tmp/ressource.pdf\") @map(\"url_fichier_local\")\n  format                   String // pdf, docx, etc.\n  dateCreation             DateTime       @default(now()) @map(\"date_creation\")\n  dateModification         DateTime       @updatedAt @map(\"date_modification\")\n  motsCles                 String         @map(\"mots_cles\")\n  auteurId                 String?        @map(\"auteur_id\")\n  universiteId             String         @map(\"universite_id\")\n  image                    String?\n  niveauAcces              NiveauAcces    @default(PUBLIC) @map(\"niveau_acces\")\n  datePublication          DateTime?      @default(now()) @map(\"date_publication\")\n  estValide                Boolean        @default(true) @map(\"est_valide\")\n  estArchive               Boolean        @default(false) @map(\"est_archive\")\n  nomAuteurExterne         String?        @map(\"nom_auteur_externe\")\n  prenomAuteurExterne      String?        @map(\"prenom_auteur_externe\")\n  affiliationAuteurExterne String?        @map(\"affiliation_auteur_externe\")\n  validation               TypeValidation @default(EN_ATTENTE) @map(\"validation\")\n\n  // Champs pour bibliothèque\n  isbn               String?\n  doi                String?\n  edition            String?\n  anneePublication   Int?             @map(\"annee_publication\")\n  editeur            String?\n  nbPages            Int?             @map(\"nb_pages\")\n  categorieBiblio    CategorieBiblio? @map(\"categorie_biblio\")\n  estEmpruntable     Boolean          @default(false) @map(\"est_empruntable\")\n  nbExemplaires      Int              @default(0) @map(\"nb_exemplaires\")\n  nbDisponibles      Int              @default(0) @map(\"nb_disponibles\")\n  coteClassification String?          @map(\"cote_classification\") // Classification Dewey ou autre\n\n  // Champs pour emprunts inter-universitaires\n  estEmpruntableExterne   Boolean @default(false) @map(\"est_empruntable_externe\") // Peut être emprunté par d'autres universités\n  dureeMaxEmpruntExterne  Int     @default(14) @map(\"duree_max_emprunt_externe\") // Durée en jours\n  nbMaxExemplairesExterne Int     @default(1) @map(\"nb_max_exemplaires_externe\") // Nombre max d'exemplaires pour emprunt externe\n  necessiteAutorisation   Boolean @default(true) @map(\"necessite_autorisation\") // Requiert validation\n\n  // Relations\n  auteur     User?      @relation(fields: [auteurId], references: [id])\n  universite Universite @relation(fields: [universiteId], references: [id])\n\n  favoris                Favori[]\n  commentaires           Commentaire[]\n  notations              Notation[]\n  historiques            HistoriqueAcces[]\n  collections            CollectionRessource[]\n  // partages          PartageUniversite[]\n  exemplaires            ExemplairePhysique[]\n  reservations           Reservation[]\n  recommandations        Recommandation[]\n  donneesRecommandations DonneesRecommandation[]\n  transactions           TransactionBlockchain[]\n  notifications          Notification[]\n\n  @@index([dateCreation, datePublication])\n  @@index([type, categorieBiblio])\n  @@index([universiteId])\n  @@index([estEmpruntable, estEmpruntableExterne])\n  @@index([estValide, estArchive])\n}\n\nenum CategorieBiblio {\n  LIVRE\n  MANUEL_SCOLAIRE\n  THESE_DOCTORAT\n  MEMOIRE_MASTER\n  MEMOIRE_LICENCE\n  RAPPORT_RECHERCHE\n  PERIODIQUE\n  ARTICLE_JOURNAL\n  RESSOURCE_MULTIMEDIA\n  DOCUMENT_TECHNIQUE\n}\n\n// Statistiques des prêts et réservations\nmodel StatistiqueBibliotheque {\n  id                        String  @id @default(uuid())\n  universiteId              String  @map(\"universite_id\")\n  mois                      Int\n  annee                     Int\n  nbEmprunts                Int     @default(0) @map(\"nb_emprunts\")\n  nbEmpruntsExternes        Int     @default(0) @map(\"nb_emprunts_externes\") // Emprunts provenant d'autres universités\n  nbReservations            Int     @default(0) @map(\"nb_reservations\")\n  nbReservationsExternes    Int     @default(0) @map(\"nb_reservations_externes\") // Réservations provenant d'autres universités\n  nbRetardsRendu            Int     @default(0) @map(\"nb_retards_rendu\")\n  tauxRotation              Float?  @map(\"taux_rotation\") // Ratio prêts/nombre d'exemplaires\n  categoriesPlusEmpruntees  String? @map(\"categories_plus_empruntees\") // JSON array\n  universitesPlusFrequentes String? @map(\"universites_plus_frequentes\") // Universités partenaires les plus actives\n\n  // Relation manquante\n  universite Universite @relation(fields: [universiteId], references: [id])\n\n  @@unique([universiteId, mois, annee])\n  @@index([annee, mois])\n}\n\n// Modèle pour les notifications (manquant dans le schéma original)\nmodel Notification {\n  id               String           @id @default(uuid())\n  userId           String           @map(\"user_id\")\n  titre            String\n  message          String           @db.Text\n  dateCreation     DateTime         @default(now()) @map(\"date_creation\")\n  estLue           Boolean          @default(false) @map(\"est_lue\")\n  typeNotification TypeNotification\n  ressourceId      String?          @map(\"ressource_id\")\n\n  user      User       @relation(fields: [userId], references: [id])\n  ressource Ressource? @relation(fields: [ressourceId], references: [id])\n\n  @@index([userId, estLue])\n  @@index([dateCreation])\n}\n\nenum TypeNotification {\n  EMPRUNT\n  RAPPEL_RETOUR\n  RESERVATION_CONFIRMEE\n  NOUVELLE_RESSOURCE\n  RECOMMANDATION\n  PARTAGE\n  CONVENTION\n  ADMINISTRATIF\n}\n\n// Modèle pour l'audit des actions système (manquant dans le schéma original)\nmodel JournalAudit {\n  id            String   @id @default(uuid())\n  userId        String?  @map(\"user_id\")\n  action        String\n  entite        String // Nom de la table concernée\n  entiteId      String   @map(\"entite_id\")\n  dateAction    DateTime @default(now()) @map(\"date_action\")\n  detailsAction Json     @map(\"details_action\")\n  ipAdresse     String   @map(\"ip_adresse\")\n\n  user User? @relation(fields: [userId], references: [id])\n\n  @@index([dateAction])\n  @@index([userId])\n  @@index([entite, entiteId])\n}\n",
  "inlineSchemaHash": "1f165f87babd6bb09f2b585d5b2c5112f083f5dce026d56262d7d885b263aa70",
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

config.runtimeDataModel = JSON.parse("{\"models\":{\"ConventionInteruniversitaire\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"universiteId1\",\"dbName\":\"universite_id_1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"universiteId2\",\"dbName\":\"universite_id_2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateDebut\",\"dbName\":\"date_debut\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateFin\",\"dbName\":\"date_fin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estActive\",\"dbName\":\"est_active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"typeConvention\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"TypeConvention\",\"nativeType\":null,\"default\":\"EMPRUNT_RECIPROQUE\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"detailsConvention\",\"dbName\":\"details_convention\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"universiteId1\",\"universiteId2\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"universiteId1\",\"universiteId2\"]}],\"isGenerated\":false},\"ReglePret\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"universiteId\",\"dbName\":\"universite_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"roleUtilisateur\",\"dbName\":\"role_utilisateur\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RoleUser\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombreMaxOuvrages\",\"dbName\":\"nombre_max_ouvrages\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":2,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dureeEmpruntJours\",\"dbName\":\"duree_emprunt_jours\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":15,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nbRenouvellements\",\"dbName\":\"nb_renouvellements\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"penaliteRetardJours\",\"dbName\":\"penalite_retard_jours\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"exigeCarteValide\",\"dbName\":\"exige_carte_valide\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateMiseAJour\",\"dbName\":\"date_mise_a_jour\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"estActif\",\"dbName\":\"est_actif\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"universite\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Universite\",\"nativeType\":null,\"relationName\":\"ReglePretToUniversite\",\"relationFromFields\":[\"universiteId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"universiteId\",\"roleUtilisateur\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"universiteId\",\"roleUtilisateur\"]}],\"isGenerated\":false},\"PolitiqueBibliotheque\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"universiteId\",\"dbName\":\"universite_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"politiqueRetour\",\"dbName\":\"politique_retour\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"politiquePerte\",\"dbName\":\"politique_perte\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"penaliteRetard\",\"dbName\":\"penalite_retard\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estActive\",\"dbName\":\"est_active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateMiseAJour\",\"dbName\":\"date_mise_a_jour\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"universite\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Universite\",\"nativeType\":null,\"relationName\":\"PolitiqueBibliothequeToUniversite\",\"relationFromFields\":[\"universiteId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"SanctionUtilisateur\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"typeRestriction\",\"dbName\":\"type_restriction\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TypeSanction\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateDebut\",\"dbName\":\"date_debut\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateFin\",\"dbName\":\"date_fin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"motif\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"empruntId\",\"dbName\":\"emprunt_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estActive\",\"dbName\":\"est_active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"SanctionUtilisateurToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"emprunt\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Emprunt\",\"nativeType\":null,\"relationName\":\"EmpruntToSanctionUtilisateur\",\"relationFromFields\":[\"empruntId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"StatistiqueInteruniversitaire\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"universiteSource\",\"dbName\":\"universite_source\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"universiteDestination\",\"dbName\":\"universite_destination\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mois\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"annee\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nbEmprunts\",\"dbName\":\"nb_emprunts\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nbReservations\",\"dbName\":\"nb_reservations\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ressourcesPlusConsultees\",\"dbName\":\"ressources_plus_consultees\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"domainesPlusConsultes\",\"dbName\":\"domaines_plus_consultes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"universiteSourceRel\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Universite\",\"nativeType\":null,\"relationName\":\"StatistiqueSource\",\"relationFromFields\":[\"universiteSource\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"universiteDestinationRel\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Universite\",\"nativeType\":null,\"relationName\":\"StatistiqueDestination\",\"relationFromFields\":[\"universiteDestination\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"universiteSource\",\"universiteDestination\",\"mois\",\"annee\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"universiteSource\",\"universiteDestination\",\"mois\",\"annee\"]}],\"isGenerated\":false},\"Reservation\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ressourceId\",\"dbName\":\"ressource_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateReservation\",\"dbName\":\"date_reservation\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateDebut\",\"dbName\":\"date_debut\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateFin\",\"dbName\":\"date_fin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"statut\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"StatutReservation\",\"nativeType\":null,\"default\":\"EN_ATTENTE\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"commentaire\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"universiteEmprunteur\",\"dbName\":\"universite_emprunteur\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"validePar\",\"dbName\":\"valide_par\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"ReservationToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ressource\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Ressource\",\"nativeType\":null,\"relationName\":\"ReservationToRessource\",\"relationFromFields\":[\"ressourceId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"universiteEmprunteurRel\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Universite\",\"nativeType\":null,\"relationName\":\"UniversiteReservation\",\"relationFromFields\":[\"universiteEmprunteur\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"valideur\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bibliothecaire\",\"nativeType\":null,\"relationName\":\"BibliothecaireToReservation\",\"relationFromFields\":[\"validePar\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ExemplairePhysique\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ressourceId\",\"dbName\":\"ressource_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cote\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etat\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"EtatExemplaire\",\"nativeType\":null,\"default\":\"BON\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"disponible\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"localisation\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateAcquisition\",\"dbName\":\"date_acquisition\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estReservableExterne\",\"dbName\":\"est_reservable_externe\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estEmpruntableExterne\",\"dbName\":\"est_empruntable_externe\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"qrCode\",\"dbName\":\"qr_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ressource\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Ressource\",\"nativeType\":null,\"relationName\":\"ExemplairePhysiqueToRessource\",\"relationFromFields\":[\"ressourceId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"emprunts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Emprunt\",\"nativeType\":null,\"relationName\":\"EmpruntToExemplairePhysique\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Emprunt\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"exemplaireId\",\"dbName\":\"exemplaire_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateEmprunt\",\"dbName\":\"date_emprunt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateRetourPrevue\",\"dbName\":\"date_retour_prevue\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateRetourEffective\",\"dbName\":\"date_retour_effective\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"statut\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"StatutEmprunt\",\"nativeType\":null,\"default\":\"EN_COURS\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"commentaire\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"universiteEmprunteur\",\"dbName\":\"universite_emprunteur\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estEmpruntExterne\",\"dbName\":\"est_emprunt_externe\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"motifEmprunt\",\"dbName\":\"motif_emprunt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"validePar\",\"dbName\":\"valide_par\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"exemplaire\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ExemplairePhysique\",\"nativeType\":null,\"relationName\":\"EmpruntToExemplairePhysique\",\"relationFromFields\":[\"exemplaireId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"EmpruntToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"universiteEmprunteurRel\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Universite\",\"nativeType\":null,\"relationName\":\"UniversiteEmprunt\",\"relationFromFields\":[\"universiteEmprunteur\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SanctionUtilisateur\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SanctionUtilisateur\",\"nativeType\":null,\"relationName\":\"EmpruntToSanctionUtilisateur\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Recommandation\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ressourceId\",\"dbName\":\"ressource_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateRecommandation\",\"dbName\":\"date_recommandation\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"score\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"motif\",\"dbName\":\"motif_recommandation\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"MotifRecommandation\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estVue\",\"dbName\":\"est_vue\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estInteruniversitaire\",\"dbName\":\"est_interuniversitaire\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"universiteSource\",\"dbName\":\"universite_source\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"RecommandationToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ressource\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Ressource\",\"nativeType\":null,\"relationName\":\"RecommandationToRessource\",\"relationFromFields\":[\"ressourceId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"universiteSourceRel\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Universite\",\"nativeType\":null,\"relationName\":\"UniversiteRecommandation\",\"relationFromFields\":[\"universiteSource\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Universite\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nom\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"adresse\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ville\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pays\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"siteWeb\",\"dbName\":\"site_web\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateCreation\",\"dbName\":\"date_creation\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"adresseBlockchain\",\"dbName\":\"adresse_blockchain\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estActive\",\"dbName\":\"est_active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"UniversiteToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ressources\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Ressource\",\"nativeType\":null,\"relationName\":\"RessourceToUniversite\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"statistiquesSource\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StatistiqueInteruniversitaire\",\"nativeType\":null,\"relationName\":\"StatistiqueSource\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"statistiquesDestination\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StatistiqueInteruniversitaire\",\"nativeType\":null,\"relationName\":\"StatistiqueDestination\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reservations\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Reservation\",\"nativeType\":null,\"relationName\":\"UniversiteReservation\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"emprunts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Emprunt\",\"nativeType\":null,\"relationName\":\"UniversiteEmprunt\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"recommandationsSource\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Recommandation\",\"nativeType\":null,\"relationName\":\"UniversiteRecommandation\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"statistiquesBibliotheque\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StatistiqueBibliotheque\",\"nativeType\":null,\"relationName\":\"StatistiqueBibliothequeToUniversite\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transactionsOrigine\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TransactionBlockchain\",\"nativeType\":null,\"relationName\":\"UniversiteTransactionOrigine\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transactionsDestination\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TransactionBlockchain\",\"nativeType\":null,\"relationName\":\"UniversiteTransactionDestination\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"HistoriqueAcces\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"HistoriqueAcces\",\"nativeType\":null,\"relationName\":\"UniversiteHistoriqueAcces\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reglePrets\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ReglePret\",\"nativeType\":null,\"relationName\":\"ReglePretToUniversite\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"politiqueBibliotheques\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PolitiqueBibliotheque\",\"nativeType\":null,\"relationName\":\"PolitiqueBibliothequeToUniversite\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"User\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"motDePasse\",\"dbName\":\"mot_de_passe\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nom\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"telephone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"prenom\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"image\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"dbName\":\"role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RoleUser\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"derniereConnexion\",\"dbName\":\"derniere_connexion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estActif\",\"dbName\":\"est_actif\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"universiteId\",\"dbName\":\"universite_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"universite\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Universite\",\"nativeType\":null,\"relationName\":\"UniversiteToUser\",\"relationFromFields\":[\"universiteId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contributions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Ressource\",\"nativeType\":null,\"relationName\":\"RessourceToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"favoris\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Favori\",\"nativeType\":null,\"relationName\":\"FavoriToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"commentaires\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Commentaire\",\"nativeType\":null,\"relationName\":\"CommentaireToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"notations\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Notation\",\"nativeType\":null,\"relationName\":\"NotationToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"historiques\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"HistoriqueAcces\",\"nativeType\":null,\"relationName\":\"HistoriqueAccesToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"collections\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Collection\",\"nativeType\":null,\"relationName\":\"CollectionToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reservations\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Reservation\",\"nativeType\":null,\"relationName\":\"ReservationToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"emprunts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Emprunt\",\"nativeType\":null,\"relationName\":\"EmpruntToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"recommandations\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Recommandation\",\"nativeType\":null,\"relationName\":\"RecommandationToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"preferencesRecommandation\",\"dbName\":\"preferences_recommandation\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"frequenceRecommandation\",\"dbName\":\"frequence_recommandation\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"FrequenceRecommandation\",\"nativeType\":null,\"default\":\"HEBDOMADAIRE\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"JournalAudit\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"JournalAudit\",\"nativeType\":null,\"relationName\":\"JournalAuditToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"donneesRecommandations\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DonneesRecommandation\",\"nativeType\":null,\"relationName\":\"DonneesRecommandationToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"notifications\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Notification\",\"nativeType\":null,\"relationName\":\"NotificationToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etudiants\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Etudiant\",\"nativeType\":null,\"relationName\":\"EtudiantToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"enseignants\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Enseignant\",\"nativeType\":null,\"relationName\":\"EnseignantToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bibliothecaires\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bibliothecaire\",\"nativeType\":null,\"relationName\":\"BibliothecaireToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"administrateurs\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Administrateur\",\"nativeType\":null,\"relationName\":\"AdministrateurToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sanctions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SanctionUtilisateur\",\"nativeType\":null,\"relationName\":\"SanctionUtilisateurToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Etudiant\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"numeroEtudiant\",\"dbName\":\"numero_etudiant\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateNaissance\",\"dbName\":\"date_naissance\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateInscription\",\"dbName\":\"date_inscription\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"departement\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"faculte\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"specialite\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"niveauEtudes\",\"dbName\":\"niveau_etudes\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"NiveauEtudes\",\"nativeType\":null,\"default\":\"LICENCE\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"EtudiantToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Enseignant\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"numeroEnseignant\",\"dbName\":\"numero_enseignant\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateNaissance\",\"dbName\":\"date_naissance\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"specialite\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"EnseignantToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Bibliothecaire\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"numeroBibliothecaire\",\"dbName\":\"numero_bibliothecaire\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateNaissance\",\"dbName\":\"date_naissance\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"adresse\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ville\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pays\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"BibliothecaireToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reservations\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Reservation\",\"nativeType\":null,\"relationName\":\"BibliothecaireToReservation\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Administrateur\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"numeroAdmin\",\"dbName\":\"numero_administrateur\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateNaissance\",\"dbName\":\"date_naissance\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"adresse\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ville\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pays\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"AdministrateurToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Favori\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ressourceId\",\"dbName\":\"ressource_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateAjout\",\"dbName\":\"date_ajout\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"note\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"FavoriToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ressource\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Ressource\",\"nativeType\":null,\"relationName\":\"FavoriToRessource\",\"relationFromFields\":[\"ressourceId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"universiteSrc\",\"dbName\":\"universite_source\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"universiteUser\",\"dbName\":\"universite_utilisateur\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"userId\",\"ressourceId\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"userId\",\"ressourceId\"]}],\"isGenerated\":false},\"Commentaire\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ressourceId\",\"dbName\":\"ressource_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contenu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateCreation\",\"dbName\":\"date_creation\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"CommentaireToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ressource\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Ressource\",\"nativeType\":null,\"relationName\":\"CommentaireToRessource\",\"relationFromFields\":[\"ressourceId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"universiteSrc\",\"dbName\":\"universite_source\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"universiteUser\",\"dbName\":\"universite_utilisateur\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Notation\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ressourceId\",\"dbName\":\"ressource_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"note\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateNotation\",\"dbName\":\"date_notation\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"NotationToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ressource\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Ressource\",\"nativeType\":null,\"relationName\":\"NotationToRessource\",\"relationFromFields\":[\"ressourceId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"universiteSrc\",\"dbName\":\"universite_source\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"universiteUser\",\"dbName\":\"universite_utilisateur\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"userId\",\"ressourceId\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"userId\",\"ressourceId\"]}],\"isGenerated\":false},\"HistoriqueAcces\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ressourceId\",\"dbName\":\"ressource_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateAcces\",\"dbName\":\"date_acces\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"typeAcces\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TypeAcces\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"universiteSrc\",\"dbName\":\"universite_source\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"universiteUser\",\"dbName\":\"universite_utilisateur\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"HistoriqueAccesToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ressource\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Ressource\",\"nativeType\":null,\"relationName\":\"HistoriqueAccesToRessource\",\"relationFromFields\":[\"ressourceId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"universiteSrcRel\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Universite\",\"nativeType\":null,\"relationName\":\"UniversiteHistoriqueAcces\",\"relationFromFields\":[\"universiteSrc\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"DonneesRecommandation\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ressourceId\",\"dbName\":\"ressource_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"score\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"typeInteraction\",\"dbName\":\"type_interaction\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TypeInteraction\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateDonnee\",\"dbName\":\"date_donnee\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"DonneesRecommandationToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ressource\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Ressource\",\"nativeType\":null,\"relationName\":\"DonneesRecommandationToRessource\",\"relationFromFields\":[\"ressourceId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Collection\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nom\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estPublique\",\"dbName\":\"est_publique\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateCreation\",\"dbName\":\"date_creation\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"CollectionToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ressources\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CollectionRessource\",\"nativeType\":null,\"relationName\":\"CollectionToCollectionRessource\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CollectionRessource\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"collectionId\",\"dbName\":\"collection_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ressourceId\",\"dbName\":\"ressource_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateAjout\",\"dbName\":\"date_ajout\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"notes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"collection\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Collection\",\"nativeType\":null,\"relationName\":\"CollectionToCollectionRessource\",\"relationFromFields\":[\"collectionId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ressource\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Ressource\",\"nativeType\":null,\"relationName\":\"CollectionRessourceToRessource\",\"relationFromFields\":[\"ressourceId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"collectionId\",\"ressourceId\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"collectionId\",\"ressourceId\"]}],\"isGenerated\":false},\"TransactionBlockchain\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"referenceBlockchain\",\"dbName\":\"reference_blockchain\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"typeTransaction\",\"dbName\":\"type_transaction\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TypeTransaction\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ressourceId\",\"dbName\":\"ressource_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"universiteOrigine\",\"dbName\":\"universite_origine\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"universiteDestination\",\"dbName\":\"universite_destination\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateTransaction\",\"dbName\":\"date_transaction\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"statut\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StatutTransaction\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hashTransaction\",\"dbName\":\"hash_transaction\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ressource\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Ressource\",\"nativeType\":null,\"relationName\":\"RessourceToTransactionBlockchain\",\"relationFromFields\":[\"ressourceId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"universiteOrigineRel\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Universite\",\"nativeType\":null,\"relationName\":\"UniversiteTransactionOrigine\",\"relationFromFields\":[\"universiteOrigine\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"universiteDestinationRel\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Universite\",\"nativeType\":null,\"relationName\":\"UniversiteTransactionDestination\",\"relationFromFields\":[\"universiteDestination\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Ressource\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"titre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TypeRessource\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"langue\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":\"fr\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"urlFichier\",\"dbName\":\"url_fichier\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"urlFichierLocal\",\"dbName\":\"url_fichier_local\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":\"file:///tmp/ressource.pdf\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"format\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateCreation\",\"dbName\":\"date_creation\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateModification\",\"dbName\":\"date_modification\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"motsCles\",\"dbName\":\"mots_cles\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"auteurId\",\"dbName\":\"auteur_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"universiteId\",\"dbName\":\"universite_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"image\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"niveauAcces\",\"dbName\":\"niveau_acces\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"NiveauAcces\",\"nativeType\":null,\"default\":\"PUBLIC\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"datePublication\",\"dbName\":\"date_publication\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estValide\",\"dbName\":\"est_valide\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estArchive\",\"dbName\":\"est_archive\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nomAuteurExterne\",\"dbName\":\"nom_auteur_externe\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"prenomAuteurExterne\",\"dbName\":\"prenom_auteur_externe\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"affiliationAuteurExterne\",\"dbName\":\"affiliation_auteur_externe\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"validation\",\"dbName\":\"validation\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"TypeValidation\",\"nativeType\":null,\"default\":\"EN_ATTENTE\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isbn\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"doi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"edition\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"anneePublication\",\"dbName\":\"annee_publication\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"editeur\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nbPages\",\"dbName\":\"nb_pages\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"categorieBiblio\",\"dbName\":\"categorie_biblio\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CategorieBiblio\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estEmpruntable\",\"dbName\":\"est_empruntable\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nbExemplaires\",\"dbName\":\"nb_exemplaires\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nbDisponibles\",\"dbName\":\"nb_disponibles\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"coteClassification\",\"dbName\":\"cote_classification\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estEmpruntableExterne\",\"dbName\":\"est_empruntable_externe\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dureeMaxEmpruntExterne\",\"dbName\":\"duree_max_emprunt_externe\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":14,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nbMaxExemplairesExterne\",\"dbName\":\"nb_max_exemplaires_externe\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"necessiteAutorisation\",\"dbName\":\"necessite_autorisation\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"auteur\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"RessourceToUser\",\"relationFromFields\":[\"auteurId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"universite\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Universite\",\"nativeType\":null,\"relationName\":\"RessourceToUniversite\",\"relationFromFields\":[\"universiteId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"favoris\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Favori\",\"nativeType\":null,\"relationName\":\"FavoriToRessource\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"commentaires\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Commentaire\",\"nativeType\":null,\"relationName\":\"CommentaireToRessource\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"notations\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Notation\",\"nativeType\":null,\"relationName\":\"NotationToRessource\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"historiques\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"HistoriqueAcces\",\"nativeType\":null,\"relationName\":\"HistoriqueAccesToRessource\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"collections\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CollectionRessource\",\"nativeType\":null,\"relationName\":\"CollectionRessourceToRessource\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"exemplaires\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ExemplairePhysique\",\"nativeType\":null,\"relationName\":\"ExemplairePhysiqueToRessource\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reservations\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Reservation\",\"nativeType\":null,\"relationName\":\"ReservationToRessource\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"recommandations\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Recommandation\",\"nativeType\":null,\"relationName\":\"RecommandationToRessource\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"donneesRecommandations\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DonneesRecommandation\",\"nativeType\":null,\"relationName\":\"DonneesRecommandationToRessource\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transactions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TransactionBlockchain\",\"nativeType\":null,\"relationName\":\"RessourceToTransactionBlockchain\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"notifications\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Notification\",\"nativeType\":null,\"relationName\":\"NotificationToRessource\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"StatistiqueBibliotheque\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"universiteId\",\"dbName\":\"universite_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mois\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"annee\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nbEmprunts\",\"dbName\":\"nb_emprunts\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nbEmpruntsExternes\",\"dbName\":\"nb_emprunts_externes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nbReservations\",\"dbName\":\"nb_reservations\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nbReservationsExternes\",\"dbName\":\"nb_reservations_externes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nbRetardsRendu\",\"dbName\":\"nb_retards_rendu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tauxRotation\",\"dbName\":\"taux_rotation\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"categoriesPlusEmpruntees\",\"dbName\":\"categories_plus_empruntees\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"universitesPlusFrequentes\",\"dbName\":\"universites_plus_frequentes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"universite\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Universite\",\"nativeType\":null,\"relationName\":\"StatistiqueBibliothequeToUniversite\",\"relationFromFields\":[\"universiteId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"universiteId\",\"mois\",\"annee\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"universiteId\",\"mois\",\"annee\"]}],\"isGenerated\":false},\"Notification\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"titre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"message\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateCreation\",\"dbName\":\"date_creation\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estLue\",\"dbName\":\"est_lue\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"typeNotification\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TypeNotification\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ressourceId\",\"dbName\":\"ressource_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"NotificationToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ressource\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Ressource\",\"nativeType\":null,\"relationName\":\"NotificationToRessource\",\"relationFromFields\":[\"ressourceId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"JournalAudit\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"action\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"entite\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"entiteId\",\"dbName\":\"entite_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateAction\",\"dbName\":\"date_action\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"detailsAction\",\"dbName\":\"details_action\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ipAdresse\",\"dbName\":\"ip_adresse\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"JournalAuditToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"TypeModalite\":{\"values\":[{\"name\":\"INTERNE\",\"dbName\":null},{\"name\":\"EXTERNE\",\"dbName\":null}],\"dbName\":null},\"TypeSanction\":{\"values\":[{\"name\":\"INTERDICTION_EMPRUNT\",\"dbName\":null},{\"name\":\"LIMITATION_SERVICES\",\"dbName\":null},{\"name\":\"SUSPENSION_COMPTE\",\"dbName\":null},{\"name\":\"AMENDE_FINANCIERE\",\"dbName\":null}],\"dbName\":null},\"TypeConvention\":{\"values\":[{\"name\":\"EMPRUNT_RECIPROQUE\",\"dbName\":null},{\"name\":\"CONSULTATION_UNIQUEMENT\",\"dbName\":null},{\"name\":\"ACCES_COMPLET\",\"dbName\":null},{\"name\":\"COLLABORATION_SPECIFIQUE\",\"dbName\":null}],\"dbName\":null},\"TypeValidation\":{\"values\":[{\"name\":\"EN_ATTENTE\",\"dbName\":null},{\"name\":\"VALIDE\",\"dbName\":null},{\"name\":\"REJETEE\",\"dbName\":null},{\"name\":\"ANNULEE\",\"dbName\":null}],\"dbName\":null},\"StatutReservation\":{\"values\":[{\"name\":\"EN_ATTENTE\",\"dbName\":null},{\"name\":\"CONFIRMEE\",\"dbName\":null},{\"name\":\"ANNULEE\",\"dbName\":null},{\"name\":\"TERMINEE\",\"dbName\":null},{\"name\":\"RETARD\",\"dbName\":null}],\"dbName\":null},\"EtatExemplaire\":{\"values\":[{\"name\":\"NEUF\",\"dbName\":null},{\"name\":\"BON\",\"dbName\":null},{\"name\":\"USAGE\",\"dbName\":null},{\"name\":\"ABIME\",\"dbName\":null},{\"name\":\"PERDU\",\"dbName\":null}],\"dbName\":null},\"StatutEmprunt\":{\"values\":[{\"name\":\"EN_COURS\",\"dbName\":null},{\"name\":\"RETOURNE\",\"dbName\":null},{\"name\":\"RETARD\",\"dbName\":null},{\"name\":\"PERDU\",\"dbName\":null}],\"dbName\":null},\"MotifRecommandation\":{\"values\":[{\"name\":\"INTERET_SIMILAIRE\",\"dbName\":null},{\"name\":\"CONSULTE_RECEMMENT\",\"dbName\":null},{\"name\":\"POPULAIRE_DOMAINE\",\"dbName\":null},{\"name\":\"NOUVEAU_CONTENU\",\"dbName\":null},{\"name\":\"SUGGESTION_ENSEIGNANT\",\"dbName\":null}],\"dbName\":null},\"RoleUser\":{\"values\":[{\"name\":\"ETUDIANT\",\"dbName\":null},{\"name\":\"ENSEIGNANT\",\"dbName\":null},{\"name\":\"CHERCHEUR\",\"dbName\":null},{\"name\":\"BIBLIOTHECAIRE\",\"dbName\":null},{\"name\":\"ADMIN\",\"dbName\":null}],\"dbName\":null},\"NiveauEtudes\":{\"values\":[{\"name\":\"LICENCE\",\"dbName\":null},{\"name\":\"MASTER\",\"dbName\":null},{\"name\":\"DOCTORAT\",\"dbName\":null},{\"name\":\"POSTDOCTORAT\",\"dbName\":null}],\"dbName\":null},\"FrequenceRecommandation\":{\"values\":[{\"name\":\"QUOTIDIENNE\",\"dbName\":null},{\"name\":\"HEBDOMADAIRE\",\"dbName\":null},{\"name\":\"MENSUELLE\",\"dbName\":null},{\"name\":\"JAMAIS\",\"dbName\":null}],\"dbName\":null},\"TypeAcces\":{\"values\":[{\"name\":\"CONSULTATION\",\"dbName\":null},{\"name\":\"TELECHARGEMENT\",\"dbName\":null},{\"name\":\"CITATION\",\"dbName\":null},{\"name\":\"PARTAGE\",\"dbName\":null}],\"dbName\":null},\"TypeInteraction\":{\"values\":[{\"name\":\"VUE\",\"dbName\":null},{\"name\":\"TELECHARGEMENT\",\"dbName\":null},{\"name\":\"FAVORI\",\"dbName\":null},{\"name\":\"NOTATION\",\"dbName\":null},{\"name\":\"TEMPS_LECTURE\",\"dbName\":null},{\"name\":\"RECHERCHE_SIMILAIRE\",\"dbName\":null}],\"dbName\":null},\"TypeTransaction\":{\"values\":[{\"name\":\"PUBLICATION\",\"dbName\":null},{\"name\":\"MODIFICATION\",\"dbName\":null},{\"name\":\"ACCES\",\"dbName\":null},{\"name\":\"SUPPRESSION\",\"dbName\":null},{\"name\":\"PARTAGE\",\"dbName\":null}],\"dbName\":null},\"StatutTransaction\":{\"values\":[{\"name\":\"INITIEE\",\"dbName\":null},{\"name\":\"VALIDEE\",\"dbName\":null},{\"name\":\"REJETEE\",\"dbName\":null},{\"name\":\"ANNULEE\",\"dbName\":null}],\"dbName\":null},\"TypeRessource\":{\"values\":[{\"name\":\"MEMOIRE\",\"dbName\":null},{\"name\":\"THESE\",\"dbName\":null},{\"name\":\"ARTICLE_SCIENTIFIQUE\",\"dbName\":null},{\"name\":\"COURS\",\"dbName\":null},{\"name\":\"SUPPORT_PEDAGOGIQUE\",\"dbName\":null},{\"name\":\"RAPPORT_RECHERCHE\",\"dbName\":null},{\"name\":\"LIVRE\",\"dbName\":null},{\"name\":\"CONFERENCE\",\"dbName\":null}],\"dbName\":null},\"NiveauAcces\":{\"values\":[{\"name\":\"PUBLIC\",\"dbName\":null},{\"name\":\"AUTHENTIFIE\",\"dbName\":null},{\"name\":\"UNIVERSITE_ORIGINE\",\"dbName\":null},{\"name\":\"PRIVE\",\"dbName\":null}],\"dbName\":null},\"CategorieBiblio\":{\"values\":[{\"name\":\"LIVRE\",\"dbName\":null},{\"name\":\"MANUEL_SCOLAIRE\",\"dbName\":null},{\"name\":\"THESE_DOCTORAT\",\"dbName\":null},{\"name\":\"MEMOIRE_MASTER\",\"dbName\":null},{\"name\":\"MEMOIRE_LICENCE\",\"dbName\":null},{\"name\":\"RAPPORT_RECHERCHE\",\"dbName\":null},{\"name\":\"PERIODIQUE\",\"dbName\":null},{\"name\":\"ARTICLE_JOURNAL\",\"dbName\":null},{\"name\":\"RESSOURCE_MULTIMEDIA\",\"dbName\":null},{\"name\":\"DOCUMENT_TECHNIQUE\",\"dbName\":null}],\"dbName\":null},\"TypeNotification\":{\"values\":[{\"name\":\"EMPRUNT\",\"dbName\":null},{\"name\":\"RAPPEL_RETOUR\",\"dbName\":null},{\"name\":\"RESERVATION_CONFIRMEE\",\"dbName\":null},{\"name\":\"NOUVELLE_RESSOURCE\",\"dbName\":null},{\"name\":\"RECOMMANDATION\",\"dbName\":null},{\"name\":\"PARTAGE\",\"dbName\":null},{\"name\":\"CONVENTION\",\"dbName\":null},{\"name\":\"ADMINISTRATIF\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
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
