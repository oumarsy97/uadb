
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Ressource
 * 
 */
export type Ressource = $Result.DefaultSelection<Prisma.$RessourcePayload>
/**
 * Model Favori
 * 
 */
export type Favori = $Result.DefaultSelection<Prisma.$FavoriPayload>
/**
 * Model Universite
 * 
 */
export type Universite = $Result.DefaultSelection<Prisma.$UniversitePayload>
/**
 * Model Commentaire
 * 
 */
export type Commentaire = $Result.DefaultSelection<Prisma.$CommentairePayload>
/**
 * Model Notation
 * 
 */
export type Notation = $Result.DefaultSelection<Prisma.$NotationPayload>
/**
 * Model HistoriqueAcces
 * 
 */
export type HistoriqueAcces = $Result.DefaultSelection<Prisma.$HistoriqueAccesPayload>
/**
 * Model DonneesRecommandation
 * 
 */
export type DonneesRecommandation = $Result.DefaultSelection<Prisma.$DonneesRecommandationPayload>
/**
 * Model Collection
 * 
 */
export type Collection = $Result.DefaultSelection<Prisma.$CollectionPayload>
/**
 * Model CollectionRessource
 * 
 */
export type CollectionRessource = $Result.DefaultSelection<Prisma.$CollectionRessourcePayload>
/**
 * Model PartageUniversite
 * 
 */
export type PartageUniversite = $Result.DefaultSelection<Prisma.$PartageUniversitePayload>
/**
 * Model TransactionBlockchain
 * 
 */
export type TransactionBlockchain = $Result.DefaultSelection<Prisma.$TransactionBlockchainPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const RoleUser: {
  ETUDIANT: 'ETUDIANT',
  ENSEIGNANT: 'ENSEIGNANT',
  CHERCHEUR: 'CHERCHEUR',
  BIBLIOTHECAIRE: 'BIBLIOTHECAIRE',
  ADMINISTRATEUR: 'ADMINISTRATEUR'
};

export type RoleUser = (typeof RoleUser)[keyof typeof RoleUser]


export const NiveauAcces: {
  PUBLIC: 'PUBLIC',
  AUTHENTIFIE: 'AUTHENTIFIE',
  UNIVERSITE_ORIGINE: 'UNIVERSITE_ORIGINE',
  PRIVE: 'PRIVE'
};

export type NiveauAcces = (typeof NiveauAcces)[keyof typeof NiveauAcces]


export const TypeRessource: {
  MEMOIRE: 'MEMOIRE',
  THESE: 'THESE',
  ARTICLE_SCIENTIFIQUE: 'ARTICLE_SCIENTIFIQUE',
  COURS: 'COURS',
  SUPPORT_PEDAGOGIQUE: 'SUPPORT_PEDAGOGIQUE',
  RAPPORT_RECHERCHE: 'RAPPORT_RECHERCHE',
  LIVRE: 'LIVRE',
  CONFERENCE: 'CONFERENCE'
};

export type TypeRessource = (typeof TypeRessource)[keyof typeof TypeRessource]


export const TypeAcces: {
  CONSULTATION: 'CONSULTATION',
  TELECHARGEMENT: 'TELECHARGEMENT',
  CITATION: 'CITATION',
  PARTAGE: 'PARTAGE'
};

export type TypeAcces = (typeof TypeAcces)[keyof typeof TypeAcces]


export const TypeInteraction: {
  VUE: 'VUE',
  TELECHARGEMENT: 'TELECHARGEMENT',
  FAVORI: 'FAVORI',
  NOTATION: 'NOTATION',
  TEMPS_LECTURE: 'TEMPS_LECTURE',
  RECHERCHE_SIMILAIRE: 'RECHERCHE_SIMILAIRE'
};

export type TypeInteraction = (typeof TypeInteraction)[keyof typeof TypeInteraction]


export const TypeTransaction: {
  PUBLICATION: 'PUBLICATION',
  MODIFICATION: 'MODIFICATION',
  ACCES: 'ACCES',
  SUPPRESSION: 'SUPPRESSION',
  PARTAGE: 'PARTAGE'
};

export type TypeTransaction = (typeof TypeTransaction)[keyof typeof TypeTransaction]


export const StatutTransaction: {
  INITIEE: 'INITIEE',
  VALIDEE: 'VALIDEE',
  REJETEE: 'REJETEE',
  ANNULEE: 'ANNULEE'
};

export type StatutTransaction = (typeof StatutTransaction)[keyof typeof StatutTransaction]

}

export type RoleUser = $Enums.RoleUser

export const RoleUser: typeof $Enums.RoleUser

export type NiveauAcces = $Enums.NiveauAcces

export const NiveauAcces: typeof $Enums.NiveauAcces

export type TypeRessource = $Enums.TypeRessource

export const TypeRessource: typeof $Enums.TypeRessource

export type TypeAcces = $Enums.TypeAcces

export const TypeAcces: typeof $Enums.TypeAcces

export type TypeInteraction = $Enums.TypeInteraction

export const TypeInteraction: typeof $Enums.TypeInteraction

export type TypeTransaction = $Enums.TypeTransaction

export const TypeTransaction: typeof $Enums.TypeTransaction

export type StatutTransaction = $Enums.StatutTransaction

export const StatutTransaction: typeof $Enums.StatutTransaction

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ressource`: Exposes CRUD operations for the **Ressource** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ressources
    * const ressources = await prisma.ressource.findMany()
    * ```
    */
  get ressource(): Prisma.RessourceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.favori`: Exposes CRUD operations for the **Favori** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Favoris
    * const favoris = await prisma.favori.findMany()
    * ```
    */
  get favori(): Prisma.FavoriDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.universite`: Exposes CRUD operations for the **Universite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Universites
    * const universites = await prisma.universite.findMany()
    * ```
    */
  get universite(): Prisma.UniversiteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.commentaire`: Exposes CRUD operations for the **Commentaire** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Commentaires
    * const commentaires = await prisma.commentaire.findMany()
    * ```
    */
  get commentaire(): Prisma.CommentaireDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notation`: Exposes CRUD operations for the **Notation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notations
    * const notations = await prisma.notation.findMany()
    * ```
    */
  get notation(): Prisma.NotationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.historiqueAcces`: Exposes CRUD operations for the **HistoriqueAcces** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HistoriqueAcces
    * const historiqueAcces = await prisma.historiqueAcces.findMany()
    * ```
    */
  get historiqueAcces(): Prisma.HistoriqueAccesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.donneesRecommandation`: Exposes CRUD operations for the **DonneesRecommandation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DonneesRecommandations
    * const donneesRecommandations = await prisma.donneesRecommandation.findMany()
    * ```
    */
  get donneesRecommandation(): Prisma.DonneesRecommandationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.collection`: Exposes CRUD operations for the **Collection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Collections
    * const collections = await prisma.collection.findMany()
    * ```
    */
  get collection(): Prisma.CollectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.collectionRessource`: Exposes CRUD operations for the **CollectionRessource** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CollectionRessources
    * const collectionRessources = await prisma.collectionRessource.findMany()
    * ```
    */
  get collectionRessource(): Prisma.CollectionRessourceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.partageUniversite`: Exposes CRUD operations for the **PartageUniversite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PartageUniversites
    * const partageUniversites = await prisma.partageUniversite.findMany()
    * ```
    */
  get partageUniversite(): Prisma.PartageUniversiteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transactionBlockchain`: Exposes CRUD operations for the **TransactionBlockchain** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TransactionBlockchains
    * const transactionBlockchains = await prisma.transactionBlockchain.findMany()
    * ```
    */
  get transactionBlockchain(): Prisma.TransactionBlockchainDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Ressource: 'Ressource',
    Favori: 'Favori',
    Universite: 'Universite',
    Commentaire: 'Commentaire',
    Notation: 'Notation',
    HistoriqueAcces: 'HistoriqueAcces',
    DonneesRecommandation: 'DonneesRecommandation',
    Collection: 'Collection',
    CollectionRessource: 'CollectionRessource',
    PartageUniversite: 'PartageUniversite',
    TransactionBlockchain: 'TransactionBlockchain'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "ressource" | "favori" | "universite" | "commentaire" | "notation" | "historiqueAcces" | "donneesRecommandation" | "collection" | "collectionRessource" | "partageUniversite" | "transactionBlockchain"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Ressource: {
        payload: Prisma.$RessourcePayload<ExtArgs>
        fields: Prisma.RessourceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RessourceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RessourcePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RessourceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RessourcePayload>
          }
          findFirst: {
            args: Prisma.RessourceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RessourcePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RessourceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RessourcePayload>
          }
          findMany: {
            args: Prisma.RessourceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RessourcePayload>[]
          }
          create: {
            args: Prisma.RessourceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RessourcePayload>
          }
          createMany: {
            args: Prisma.RessourceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RessourceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RessourcePayload>
          }
          update: {
            args: Prisma.RessourceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RessourcePayload>
          }
          deleteMany: {
            args: Prisma.RessourceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RessourceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RessourceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RessourcePayload>
          }
          aggregate: {
            args: Prisma.RessourceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRessource>
          }
          groupBy: {
            args: Prisma.RessourceGroupByArgs<ExtArgs>
            result: $Utils.Optional<RessourceGroupByOutputType>[]
          }
          count: {
            args: Prisma.RessourceCountArgs<ExtArgs>
            result: $Utils.Optional<RessourceCountAggregateOutputType> | number
          }
        }
      }
      Favori: {
        payload: Prisma.$FavoriPayload<ExtArgs>
        fields: Prisma.FavoriFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FavoriFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FavoriFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriPayload>
          }
          findFirst: {
            args: Prisma.FavoriFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FavoriFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriPayload>
          }
          findMany: {
            args: Prisma.FavoriFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriPayload>[]
          }
          create: {
            args: Prisma.FavoriCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriPayload>
          }
          createMany: {
            args: Prisma.FavoriCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FavoriDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriPayload>
          }
          update: {
            args: Prisma.FavoriUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriPayload>
          }
          deleteMany: {
            args: Prisma.FavoriDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FavoriUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FavoriUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriPayload>
          }
          aggregate: {
            args: Prisma.FavoriAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavori>
          }
          groupBy: {
            args: Prisma.FavoriGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavoriGroupByOutputType>[]
          }
          count: {
            args: Prisma.FavoriCountArgs<ExtArgs>
            result: $Utils.Optional<FavoriCountAggregateOutputType> | number
          }
        }
      }
      Universite: {
        payload: Prisma.$UniversitePayload<ExtArgs>
        fields: Prisma.UniversiteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UniversiteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversitePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UniversiteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversitePayload>
          }
          findFirst: {
            args: Prisma.UniversiteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversitePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UniversiteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversitePayload>
          }
          findMany: {
            args: Prisma.UniversiteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversitePayload>[]
          }
          create: {
            args: Prisma.UniversiteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversitePayload>
          }
          createMany: {
            args: Prisma.UniversiteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UniversiteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversitePayload>
          }
          update: {
            args: Prisma.UniversiteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversitePayload>
          }
          deleteMany: {
            args: Prisma.UniversiteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UniversiteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UniversiteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversitePayload>
          }
          aggregate: {
            args: Prisma.UniversiteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUniversite>
          }
          groupBy: {
            args: Prisma.UniversiteGroupByArgs<ExtArgs>
            result: $Utils.Optional<UniversiteGroupByOutputType>[]
          }
          count: {
            args: Prisma.UniversiteCountArgs<ExtArgs>
            result: $Utils.Optional<UniversiteCountAggregateOutputType> | number
          }
        }
      }
      Commentaire: {
        payload: Prisma.$CommentairePayload<ExtArgs>
        fields: Prisma.CommentaireFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentaireFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentaireFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload>
          }
          findFirst: {
            args: Prisma.CommentaireFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentaireFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload>
          }
          findMany: {
            args: Prisma.CommentaireFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload>[]
          }
          create: {
            args: Prisma.CommentaireCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload>
          }
          createMany: {
            args: Prisma.CommentaireCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CommentaireDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload>
          }
          update: {
            args: Prisma.CommentaireUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload>
          }
          deleteMany: {
            args: Prisma.CommentaireDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentaireUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CommentaireUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload>
          }
          aggregate: {
            args: Prisma.CommentaireAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommentaire>
          }
          groupBy: {
            args: Prisma.CommentaireGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentaireGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentaireCountArgs<ExtArgs>
            result: $Utils.Optional<CommentaireCountAggregateOutputType> | number
          }
        }
      }
      Notation: {
        payload: Prisma.$NotationPayload<ExtArgs>
        fields: Prisma.NotationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotationPayload>
          }
          findFirst: {
            args: Prisma.NotationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotationPayload>
          }
          findMany: {
            args: Prisma.NotationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotationPayload>[]
          }
          create: {
            args: Prisma.NotationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotationPayload>
          }
          createMany: {
            args: Prisma.NotationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NotationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotationPayload>
          }
          update: {
            args: Prisma.NotationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotationPayload>
          }
          deleteMany: {
            args: Prisma.NotationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotationPayload>
          }
          aggregate: {
            args: Prisma.NotationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotation>
          }
          groupBy: {
            args: Prisma.NotationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotationCountArgs<ExtArgs>
            result: $Utils.Optional<NotationCountAggregateOutputType> | number
          }
        }
      }
      HistoriqueAcces: {
        payload: Prisma.$HistoriqueAccesPayload<ExtArgs>
        fields: Prisma.HistoriqueAccesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HistoriqueAccesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriqueAccesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HistoriqueAccesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriqueAccesPayload>
          }
          findFirst: {
            args: Prisma.HistoriqueAccesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriqueAccesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HistoriqueAccesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriqueAccesPayload>
          }
          findMany: {
            args: Prisma.HistoriqueAccesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriqueAccesPayload>[]
          }
          create: {
            args: Prisma.HistoriqueAccesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriqueAccesPayload>
          }
          createMany: {
            args: Prisma.HistoriqueAccesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.HistoriqueAccesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriqueAccesPayload>
          }
          update: {
            args: Prisma.HistoriqueAccesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriqueAccesPayload>
          }
          deleteMany: {
            args: Prisma.HistoriqueAccesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HistoriqueAccesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HistoriqueAccesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriqueAccesPayload>
          }
          aggregate: {
            args: Prisma.HistoriqueAccesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistoriqueAcces>
          }
          groupBy: {
            args: Prisma.HistoriqueAccesGroupByArgs<ExtArgs>
            result: $Utils.Optional<HistoriqueAccesGroupByOutputType>[]
          }
          count: {
            args: Prisma.HistoriqueAccesCountArgs<ExtArgs>
            result: $Utils.Optional<HistoriqueAccesCountAggregateOutputType> | number
          }
        }
      }
      DonneesRecommandation: {
        payload: Prisma.$DonneesRecommandationPayload<ExtArgs>
        fields: Prisma.DonneesRecommandationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DonneesRecommandationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonneesRecommandationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DonneesRecommandationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonneesRecommandationPayload>
          }
          findFirst: {
            args: Prisma.DonneesRecommandationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonneesRecommandationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DonneesRecommandationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonneesRecommandationPayload>
          }
          findMany: {
            args: Prisma.DonneesRecommandationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonneesRecommandationPayload>[]
          }
          create: {
            args: Prisma.DonneesRecommandationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonneesRecommandationPayload>
          }
          createMany: {
            args: Prisma.DonneesRecommandationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DonneesRecommandationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonneesRecommandationPayload>
          }
          update: {
            args: Prisma.DonneesRecommandationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonneesRecommandationPayload>
          }
          deleteMany: {
            args: Prisma.DonneesRecommandationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DonneesRecommandationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DonneesRecommandationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonneesRecommandationPayload>
          }
          aggregate: {
            args: Prisma.DonneesRecommandationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDonneesRecommandation>
          }
          groupBy: {
            args: Prisma.DonneesRecommandationGroupByArgs<ExtArgs>
            result: $Utils.Optional<DonneesRecommandationGroupByOutputType>[]
          }
          count: {
            args: Prisma.DonneesRecommandationCountArgs<ExtArgs>
            result: $Utils.Optional<DonneesRecommandationCountAggregateOutputType> | number
          }
        }
      }
      Collection: {
        payload: Prisma.$CollectionPayload<ExtArgs>
        fields: Prisma.CollectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CollectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CollectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          findFirst: {
            args: Prisma.CollectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CollectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          findMany: {
            args: Prisma.CollectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>[]
          }
          create: {
            args: Prisma.CollectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          createMany: {
            args: Prisma.CollectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CollectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          update: {
            args: Prisma.CollectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          deleteMany: {
            args: Prisma.CollectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CollectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CollectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          aggregate: {
            args: Prisma.CollectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCollection>
          }
          groupBy: {
            args: Prisma.CollectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CollectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CollectionCountArgs<ExtArgs>
            result: $Utils.Optional<CollectionCountAggregateOutputType> | number
          }
        }
      }
      CollectionRessource: {
        payload: Prisma.$CollectionRessourcePayload<ExtArgs>
        fields: Prisma.CollectionRessourceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CollectionRessourceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionRessourcePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CollectionRessourceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionRessourcePayload>
          }
          findFirst: {
            args: Prisma.CollectionRessourceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionRessourcePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CollectionRessourceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionRessourcePayload>
          }
          findMany: {
            args: Prisma.CollectionRessourceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionRessourcePayload>[]
          }
          create: {
            args: Prisma.CollectionRessourceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionRessourcePayload>
          }
          createMany: {
            args: Prisma.CollectionRessourceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CollectionRessourceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionRessourcePayload>
          }
          update: {
            args: Prisma.CollectionRessourceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionRessourcePayload>
          }
          deleteMany: {
            args: Prisma.CollectionRessourceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CollectionRessourceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CollectionRessourceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionRessourcePayload>
          }
          aggregate: {
            args: Prisma.CollectionRessourceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCollectionRessource>
          }
          groupBy: {
            args: Prisma.CollectionRessourceGroupByArgs<ExtArgs>
            result: $Utils.Optional<CollectionRessourceGroupByOutputType>[]
          }
          count: {
            args: Prisma.CollectionRessourceCountArgs<ExtArgs>
            result: $Utils.Optional<CollectionRessourceCountAggregateOutputType> | number
          }
        }
      }
      PartageUniversite: {
        payload: Prisma.$PartageUniversitePayload<ExtArgs>
        fields: Prisma.PartageUniversiteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PartageUniversiteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartageUniversitePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PartageUniversiteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartageUniversitePayload>
          }
          findFirst: {
            args: Prisma.PartageUniversiteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartageUniversitePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PartageUniversiteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartageUniversitePayload>
          }
          findMany: {
            args: Prisma.PartageUniversiteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartageUniversitePayload>[]
          }
          create: {
            args: Prisma.PartageUniversiteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartageUniversitePayload>
          }
          createMany: {
            args: Prisma.PartageUniversiteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PartageUniversiteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartageUniversitePayload>
          }
          update: {
            args: Prisma.PartageUniversiteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartageUniversitePayload>
          }
          deleteMany: {
            args: Prisma.PartageUniversiteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PartageUniversiteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PartageUniversiteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartageUniversitePayload>
          }
          aggregate: {
            args: Prisma.PartageUniversiteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePartageUniversite>
          }
          groupBy: {
            args: Prisma.PartageUniversiteGroupByArgs<ExtArgs>
            result: $Utils.Optional<PartageUniversiteGroupByOutputType>[]
          }
          count: {
            args: Prisma.PartageUniversiteCountArgs<ExtArgs>
            result: $Utils.Optional<PartageUniversiteCountAggregateOutputType> | number
          }
        }
      }
      TransactionBlockchain: {
        payload: Prisma.$TransactionBlockchainPayload<ExtArgs>
        fields: Prisma.TransactionBlockchainFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionBlockchainFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionBlockchainPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionBlockchainFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionBlockchainPayload>
          }
          findFirst: {
            args: Prisma.TransactionBlockchainFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionBlockchainPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionBlockchainFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionBlockchainPayload>
          }
          findMany: {
            args: Prisma.TransactionBlockchainFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionBlockchainPayload>[]
          }
          create: {
            args: Prisma.TransactionBlockchainCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionBlockchainPayload>
          }
          createMany: {
            args: Prisma.TransactionBlockchainCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TransactionBlockchainDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionBlockchainPayload>
          }
          update: {
            args: Prisma.TransactionBlockchainUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionBlockchainPayload>
          }
          deleteMany: {
            args: Prisma.TransactionBlockchainDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionBlockchainUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TransactionBlockchainUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionBlockchainPayload>
          }
          aggregate: {
            args: Prisma.TransactionBlockchainAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransactionBlockchain>
          }
          groupBy: {
            args: Prisma.TransactionBlockchainGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionBlockchainGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionBlockchainCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionBlockchainCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    ressource?: RessourceOmit
    favori?: FavoriOmit
    universite?: UniversiteOmit
    commentaire?: CommentaireOmit
    notation?: NotationOmit
    historiqueAcces?: HistoriqueAccesOmit
    donneesRecommandation?: DonneesRecommandationOmit
    collection?: CollectionOmit
    collectionRessource?: CollectionRessourceOmit
    partageUniversite?: PartageUniversiteOmit
    transactionBlockchain?: TransactionBlockchainOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    contributions: number
    favoris: number
    commentaires: number
    notations: number
    historiques: number
    collections: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contributions?: boolean | UserCountOutputTypeCountContributionsArgs
    favoris?: boolean | UserCountOutputTypeCountFavorisArgs
    commentaires?: boolean | UserCountOutputTypeCountCommentairesArgs
    notations?: boolean | UserCountOutputTypeCountNotationsArgs
    historiques?: boolean | UserCountOutputTypeCountHistoriquesArgs
    collections?: boolean | UserCountOutputTypeCountCollectionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountContributionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RessourceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFavorisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentairesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentaireWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHistoriquesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoriqueAccesWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCollectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollectionWhereInput
  }


  /**
   * Count Type RessourceCountOutputType
   */

  export type RessourceCountOutputType = {
    favoris: number
    commentaires: number
    notations: number
    historiques: number
    collections: number
    partages: number
  }

  export type RessourceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favoris?: boolean | RessourceCountOutputTypeCountFavorisArgs
    commentaires?: boolean | RessourceCountOutputTypeCountCommentairesArgs
    notations?: boolean | RessourceCountOutputTypeCountNotationsArgs
    historiques?: boolean | RessourceCountOutputTypeCountHistoriquesArgs
    collections?: boolean | RessourceCountOutputTypeCountCollectionsArgs
    partages?: boolean | RessourceCountOutputTypeCountPartagesArgs
  }

  // Custom InputTypes
  /**
   * RessourceCountOutputType without action
   */
  export type RessourceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RessourceCountOutputType
     */
    select?: RessourceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RessourceCountOutputType without action
   */
  export type RessourceCountOutputTypeCountFavorisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriWhereInput
  }

  /**
   * RessourceCountOutputType without action
   */
  export type RessourceCountOutputTypeCountCommentairesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentaireWhereInput
  }

  /**
   * RessourceCountOutputType without action
   */
  export type RessourceCountOutputTypeCountNotationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotationWhereInput
  }

  /**
   * RessourceCountOutputType without action
   */
  export type RessourceCountOutputTypeCountHistoriquesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoriqueAccesWhereInput
  }

  /**
   * RessourceCountOutputType without action
   */
  export type RessourceCountOutputTypeCountCollectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollectionRessourceWhereInput
  }

  /**
   * RessourceCountOutputType without action
   */
  export type RessourceCountOutputTypeCountPartagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartageUniversiteWhereInput
  }


  /**
   * Count Type UniversiteCountOutputType
   */

  export type UniversiteCountOutputType = {
    users: number
    ressources: number
  }

  export type UniversiteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UniversiteCountOutputTypeCountUsersArgs
    ressources?: boolean | UniversiteCountOutputTypeCountRessourcesArgs
  }

  // Custom InputTypes
  /**
   * UniversiteCountOutputType without action
   */
  export type UniversiteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniversiteCountOutputType
     */
    select?: UniversiteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UniversiteCountOutputType without action
   */
  export type UniversiteCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * UniversiteCountOutputType without action
   */
  export type UniversiteCountOutputTypeCountRessourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RessourceWhereInput
  }


  /**
   * Count Type CollectionCountOutputType
   */

  export type CollectionCountOutputType = {
    ressources: number
  }

  export type CollectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ressources?: boolean | CollectionCountOutputTypeCountRessourcesArgs
  }

  // Custom InputTypes
  /**
   * CollectionCountOutputType without action
   */
  export type CollectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionCountOutputType
     */
    select?: CollectionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CollectionCountOutputType without action
   */
  export type CollectionCountOutputTypeCountRessourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollectionRessourceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    motDePasse: string | null
    nom: string | null
    prenom: string | null
    image: string | null
    role: $Enums.RoleUser | null
    departement: string | null
    faculte: string | null
    specialite: string | null
    niveauEtudes: string | null
    dateInscription: Date | null
    derniereConnexion: Date | null
    estActif: boolean | null
    universiteId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    motDePasse: string | null
    nom: string | null
    prenom: string | null
    image: string | null
    role: $Enums.RoleUser | null
    departement: string | null
    faculte: string | null
    specialite: string | null
    niveauEtudes: string | null
    dateInscription: Date | null
    derniereConnexion: Date | null
    estActif: boolean | null
    universiteId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    motDePasse: number
    nom: number
    prenom: number
    image: number
    role: number
    departement: number
    faculte: number
    specialite: number
    niveauEtudes: number
    dateInscription: number
    derniereConnexion: number
    estActif: number
    universiteId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    motDePasse?: true
    nom?: true
    prenom?: true
    image?: true
    role?: true
    departement?: true
    faculte?: true
    specialite?: true
    niveauEtudes?: true
    dateInscription?: true
    derniereConnexion?: true
    estActif?: true
    universiteId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    motDePasse?: true
    nom?: true
    prenom?: true
    image?: true
    role?: true
    departement?: true
    faculte?: true
    specialite?: true
    niveauEtudes?: true
    dateInscription?: true
    derniereConnexion?: true
    estActif?: true
    universiteId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    motDePasse?: true
    nom?: true
    prenom?: true
    image?: true
    role?: true
    departement?: true
    faculte?: true
    specialite?: true
    niveauEtudes?: true
    dateInscription?: true
    derniereConnexion?: true
    estActif?: true
    universiteId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    motDePasse: string
    nom: string
    prenom: string
    image: string | null
    role: $Enums.RoleUser
    departement: string
    faculte: string
    specialite: string | null
    niveauEtudes: string | null
    dateInscription: Date
    derniereConnexion: Date | null
    estActif: boolean
    universiteId: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    motDePasse?: boolean
    nom?: boolean
    prenom?: boolean
    image?: boolean
    role?: boolean
    departement?: boolean
    faculte?: boolean
    specialite?: boolean
    niveauEtudes?: boolean
    dateInscription?: boolean
    derniereConnexion?: boolean
    estActif?: boolean
    universiteId?: boolean
    universite?: boolean | UniversiteDefaultArgs<ExtArgs>
    contributions?: boolean | User$contributionsArgs<ExtArgs>
    favoris?: boolean | User$favorisArgs<ExtArgs>
    commentaires?: boolean | User$commentairesArgs<ExtArgs>
    notations?: boolean | User$notationsArgs<ExtArgs>
    historiques?: boolean | User$historiquesArgs<ExtArgs>
    collections?: boolean | User$collectionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    motDePasse?: boolean
    nom?: boolean
    prenom?: boolean
    image?: boolean
    role?: boolean
    departement?: boolean
    faculte?: boolean
    specialite?: boolean
    niveauEtudes?: boolean
    dateInscription?: boolean
    derniereConnexion?: boolean
    estActif?: boolean
    universiteId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "motDePasse" | "nom" | "prenom" | "image" | "role" | "departement" | "faculte" | "specialite" | "niveauEtudes" | "dateInscription" | "derniereConnexion" | "estActif" | "universiteId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    universite?: boolean | UniversiteDefaultArgs<ExtArgs>
    contributions?: boolean | User$contributionsArgs<ExtArgs>
    favoris?: boolean | User$favorisArgs<ExtArgs>
    commentaires?: boolean | User$commentairesArgs<ExtArgs>
    notations?: boolean | User$notationsArgs<ExtArgs>
    historiques?: boolean | User$historiquesArgs<ExtArgs>
    collections?: boolean | User$collectionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      universite: Prisma.$UniversitePayload<ExtArgs>
      contributions: Prisma.$RessourcePayload<ExtArgs>[]
      favoris: Prisma.$FavoriPayload<ExtArgs>[]
      commentaires: Prisma.$CommentairePayload<ExtArgs>[]
      notations: Prisma.$NotationPayload<ExtArgs>[]
      historiques: Prisma.$HistoriqueAccesPayload<ExtArgs>[]
      collections: Prisma.$CollectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      motDePasse: string
      nom: string
      prenom: string
      image: string | null
      role: $Enums.RoleUser
      departement: string
      faculte: string
      specialite: string | null
      niveauEtudes: string | null
      dateInscription: Date
      derniereConnexion: Date | null
      estActif: boolean
      universiteId: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    universite<T extends UniversiteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UniversiteDefaultArgs<ExtArgs>>): Prisma__UniversiteClient<$Result.GetResult<Prisma.$UniversitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    contributions<T extends User$contributionsArgs<ExtArgs> = {}>(args?: Subset<T, User$contributionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RessourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favoris<T extends User$favorisArgs<ExtArgs> = {}>(args?: Subset<T, User$favorisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    commentaires<T extends User$commentairesArgs<ExtArgs> = {}>(args?: Subset<T, User$commentairesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notations<T extends User$notationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    historiques<T extends User$historiquesArgs<ExtArgs> = {}>(args?: Subset<T, User$historiquesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoriqueAccesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    collections<T extends User$collectionsArgs<ExtArgs> = {}>(args?: Subset<T, User$collectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly motDePasse: FieldRef<"User", 'String'>
    readonly nom: FieldRef<"User", 'String'>
    readonly prenom: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'RoleUser'>
    readonly departement: FieldRef<"User", 'String'>
    readonly faculte: FieldRef<"User", 'String'>
    readonly specialite: FieldRef<"User", 'String'>
    readonly niveauEtudes: FieldRef<"User", 'String'>
    readonly dateInscription: FieldRef<"User", 'DateTime'>
    readonly derniereConnexion: FieldRef<"User", 'DateTime'>
    readonly estActif: FieldRef<"User", 'Boolean'>
    readonly universiteId: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.contributions
   */
  export type User$contributionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ressource
     */
    select?: RessourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ressource
     */
    omit?: RessourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RessourceInclude<ExtArgs> | null
    where?: RessourceWhereInput
    orderBy?: RessourceOrderByWithRelationInput | RessourceOrderByWithRelationInput[]
    cursor?: RessourceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RessourceScalarFieldEnum | RessourceScalarFieldEnum[]
  }

  /**
   * User.favoris
   */
  export type User$favorisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favori
     */
    select?: FavoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favori
     */
    omit?: FavoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriInclude<ExtArgs> | null
    where?: FavoriWhereInput
    orderBy?: FavoriOrderByWithRelationInput | FavoriOrderByWithRelationInput[]
    cursor?: FavoriWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriScalarFieldEnum | FavoriScalarFieldEnum[]
  }

  /**
   * User.commentaires
   */
  export type User$commentairesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    where?: CommentaireWhereInput
    orderBy?: CommentaireOrderByWithRelationInput | CommentaireOrderByWithRelationInput[]
    cursor?: CommentaireWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentaireScalarFieldEnum | CommentaireScalarFieldEnum[]
  }

  /**
   * User.notations
   */
  export type User$notationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notation
     */
    select?: NotationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notation
     */
    omit?: NotationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotationInclude<ExtArgs> | null
    where?: NotationWhereInput
    orderBy?: NotationOrderByWithRelationInput | NotationOrderByWithRelationInput[]
    cursor?: NotationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotationScalarFieldEnum | NotationScalarFieldEnum[]
  }

  /**
   * User.historiques
   */
  export type User$historiquesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriqueAcces
     */
    select?: HistoriqueAccesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriqueAcces
     */
    omit?: HistoriqueAccesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriqueAccesInclude<ExtArgs> | null
    where?: HistoriqueAccesWhereInput
    orderBy?: HistoriqueAccesOrderByWithRelationInput | HistoriqueAccesOrderByWithRelationInput[]
    cursor?: HistoriqueAccesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoriqueAccesScalarFieldEnum | HistoriqueAccesScalarFieldEnum[]
  }

  /**
   * User.collections
   */
  export type User$collectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    where?: CollectionWhereInput
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    cursor?: CollectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Ressource
   */

  export type AggregateRessource = {
    _count: RessourceCountAggregateOutputType | null
    _min: RessourceMinAggregateOutputType | null
    _max: RessourceMaxAggregateOutputType | null
  }

  export type RessourceMinAggregateOutputType = {
    id: string | null
    titre: string | null
    description: string | null
    type: $Enums.TypeRessource | null
    langue: string | null
    urlFichier: string | null
    urlFichierLocal: string | null
    format: string | null
    dateCreation: Date | null
    dateModification: Date | null
    estPublique: boolean | null
    motsCles: string | null
    auteurId: string | null
    universiteId: string | null
    image: string | null
    niveauAcces: $Enums.NiveauAcces | null
    datePublication: Date | null
    estValide: boolean | null
    estArchive: boolean | null
    nomAuteurExterne: string | null
    prenomAuteurExterne: string | null
    affiliationAuteurExterne: string | null
  }

  export type RessourceMaxAggregateOutputType = {
    id: string | null
    titre: string | null
    description: string | null
    type: $Enums.TypeRessource | null
    langue: string | null
    urlFichier: string | null
    urlFichierLocal: string | null
    format: string | null
    dateCreation: Date | null
    dateModification: Date | null
    estPublique: boolean | null
    motsCles: string | null
    auteurId: string | null
    universiteId: string | null
    image: string | null
    niveauAcces: $Enums.NiveauAcces | null
    datePublication: Date | null
    estValide: boolean | null
    estArchive: boolean | null
    nomAuteurExterne: string | null
    prenomAuteurExterne: string | null
    affiliationAuteurExterne: string | null
  }

  export type RessourceCountAggregateOutputType = {
    id: number
    titre: number
    description: number
    type: number
    langue: number
    urlFichier: number
    urlFichierLocal: number
    format: number
    dateCreation: number
    dateModification: number
    estPublique: number
    motsCles: number
    auteurId: number
    universiteId: number
    image: number
    niveauAcces: number
    datePublication: number
    estValide: number
    estArchive: number
    nomAuteurExterne: number
    prenomAuteurExterne: number
    affiliationAuteurExterne: number
    _all: number
  }


  export type RessourceMinAggregateInputType = {
    id?: true
    titre?: true
    description?: true
    type?: true
    langue?: true
    urlFichier?: true
    urlFichierLocal?: true
    format?: true
    dateCreation?: true
    dateModification?: true
    estPublique?: true
    motsCles?: true
    auteurId?: true
    universiteId?: true
    image?: true
    niveauAcces?: true
    datePublication?: true
    estValide?: true
    estArchive?: true
    nomAuteurExterne?: true
    prenomAuteurExterne?: true
    affiliationAuteurExterne?: true
  }

  export type RessourceMaxAggregateInputType = {
    id?: true
    titre?: true
    description?: true
    type?: true
    langue?: true
    urlFichier?: true
    urlFichierLocal?: true
    format?: true
    dateCreation?: true
    dateModification?: true
    estPublique?: true
    motsCles?: true
    auteurId?: true
    universiteId?: true
    image?: true
    niveauAcces?: true
    datePublication?: true
    estValide?: true
    estArchive?: true
    nomAuteurExterne?: true
    prenomAuteurExterne?: true
    affiliationAuteurExterne?: true
  }

  export type RessourceCountAggregateInputType = {
    id?: true
    titre?: true
    description?: true
    type?: true
    langue?: true
    urlFichier?: true
    urlFichierLocal?: true
    format?: true
    dateCreation?: true
    dateModification?: true
    estPublique?: true
    motsCles?: true
    auteurId?: true
    universiteId?: true
    image?: true
    niveauAcces?: true
    datePublication?: true
    estValide?: true
    estArchive?: true
    nomAuteurExterne?: true
    prenomAuteurExterne?: true
    affiliationAuteurExterne?: true
    _all?: true
  }

  export type RessourceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ressource to aggregate.
     */
    where?: RessourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ressources to fetch.
     */
    orderBy?: RessourceOrderByWithRelationInput | RessourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RessourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ressources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ressources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ressources
    **/
    _count?: true | RessourceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RessourceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RessourceMaxAggregateInputType
  }

  export type GetRessourceAggregateType<T extends RessourceAggregateArgs> = {
        [P in keyof T & keyof AggregateRessource]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRessource[P]>
      : GetScalarType<T[P], AggregateRessource[P]>
  }




  export type RessourceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RessourceWhereInput
    orderBy?: RessourceOrderByWithAggregationInput | RessourceOrderByWithAggregationInput[]
    by: RessourceScalarFieldEnum[] | RessourceScalarFieldEnum
    having?: RessourceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RessourceCountAggregateInputType | true
    _min?: RessourceMinAggregateInputType
    _max?: RessourceMaxAggregateInputType
  }

  export type RessourceGroupByOutputType = {
    id: string
    titre: string
    description: string
    type: $Enums.TypeRessource
    langue: string
    urlFichier: string
    urlFichierLocal: string | null
    format: string
    dateCreation: Date
    dateModification: Date
    estPublique: boolean
    motsCles: string
    auteurId: string | null
    universiteId: string
    image: string | null
    niveauAcces: $Enums.NiveauAcces
    datePublication: Date | null
    estValide: boolean
    estArchive: boolean
    nomAuteurExterne: string | null
    prenomAuteurExterne: string | null
    affiliationAuteurExterne: string | null
    _count: RessourceCountAggregateOutputType | null
    _min: RessourceMinAggregateOutputType | null
    _max: RessourceMaxAggregateOutputType | null
  }

  type GetRessourceGroupByPayload<T extends RessourceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RessourceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RessourceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RessourceGroupByOutputType[P]>
            : GetScalarType<T[P], RessourceGroupByOutputType[P]>
        }
      >
    >


  export type RessourceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titre?: boolean
    description?: boolean
    type?: boolean
    langue?: boolean
    urlFichier?: boolean
    urlFichierLocal?: boolean
    format?: boolean
    dateCreation?: boolean
    dateModification?: boolean
    estPublique?: boolean
    motsCles?: boolean
    auteurId?: boolean
    universiteId?: boolean
    image?: boolean
    niveauAcces?: boolean
    datePublication?: boolean
    estValide?: boolean
    estArchive?: boolean
    nomAuteurExterne?: boolean
    prenomAuteurExterne?: boolean
    affiliationAuteurExterne?: boolean
    auteur?: boolean | Ressource$auteurArgs<ExtArgs>
    universite?: boolean | UniversiteDefaultArgs<ExtArgs>
    favoris?: boolean | Ressource$favorisArgs<ExtArgs>
    commentaires?: boolean | Ressource$commentairesArgs<ExtArgs>
    notations?: boolean | Ressource$notationsArgs<ExtArgs>
    historiques?: boolean | Ressource$historiquesArgs<ExtArgs>
    collections?: boolean | Ressource$collectionsArgs<ExtArgs>
    partages?: boolean | Ressource$partagesArgs<ExtArgs>
    _count?: boolean | RessourceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ressource"]>



  export type RessourceSelectScalar = {
    id?: boolean
    titre?: boolean
    description?: boolean
    type?: boolean
    langue?: boolean
    urlFichier?: boolean
    urlFichierLocal?: boolean
    format?: boolean
    dateCreation?: boolean
    dateModification?: boolean
    estPublique?: boolean
    motsCles?: boolean
    auteurId?: boolean
    universiteId?: boolean
    image?: boolean
    niveauAcces?: boolean
    datePublication?: boolean
    estValide?: boolean
    estArchive?: boolean
    nomAuteurExterne?: boolean
    prenomAuteurExterne?: boolean
    affiliationAuteurExterne?: boolean
  }

  export type RessourceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titre" | "description" | "type" | "langue" | "urlFichier" | "urlFichierLocal" | "format" | "dateCreation" | "dateModification" | "estPublique" | "motsCles" | "auteurId" | "universiteId" | "image" | "niveauAcces" | "datePublication" | "estValide" | "estArchive" | "nomAuteurExterne" | "prenomAuteurExterne" | "affiliationAuteurExterne", ExtArgs["result"]["ressource"]>
  export type RessourceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auteur?: boolean | Ressource$auteurArgs<ExtArgs>
    universite?: boolean | UniversiteDefaultArgs<ExtArgs>
    favoris?: boolean | Ressource$favorisArgs<ExtArgs>
    commentaires?: boolean | Ressource$commentairesArgs<ExtArgs>
    notations?: boolean | Ressource$notationsArgs<ExtArgs>
    historiques?: boolean | Ressource$historiquesArgs<ExtArgs>
    collections?: boolean | Ressource$collectionsArgs<ExtArgs>
    partages?: boolean | Ressource$partagesArgs<ExtArgs>
    _count?: boolean | RessourceCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RessourcePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ressource"
    objects: {
      auteur: Prisma.$UserPayload<ExtArgs> | null
      universite: Prisma.$UniversitePayload<ExtArgs>
      favoris: Prisma.$FavoriPayload<ExtArgs>[]
      commentaires: Prisma.$CommentairePayload<ExtArgs>[]
      notations: Prisma.$NotationPayload<ExtArgs>[]
      historiques: Prisma.$HistoriqueAccesPayload<ExtArgs>[]
      collections: Prisma.$CollectionRessourcePayload<ExtArgs>[]
      partages: Prisma.$PartageUniversitePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      titre: string
      description: string
      type: $Enums.TypeRessource
      langue: string
      urlFichier: string
      urlFichierLocal: string | null
      format: string
      dateCreation: Date
      dateModification: Date
      estPublique: boolean
      motsCles: string
      auteurId: string | null
      universiteId: string
      image: string | null
      niveauAcces: $Enums.NiveauAcces
      datePublication: Date | null
      estValide: boolean
      estArchive: boolean
      nomAuteurExterne: string | null
      prenomAuteurExterne: string | null
      affiliationAuteurExterne: string | null
    }, ExtArgs["result"]["ressource"]>
    composites: {}
  }

  type RessourceGetPayload<S extends boolean | null | undefined | RessourceDefaultArgs> = $Result.GetResult<Prisma.$RessourcePayload, S>

  type RessourceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RessourceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RessourceCountAggregateInputType | true
    }

  export interface RessourceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ressource'], meta: { name: 'Ressource' } }
    /**
     * Find zero or one Ressource that matches the filter.
     * @param {RessourceFindUniqueArgs} args - Arguments to find a Ressource
     * @example
     * // Get one Ressource
     * const ressource = await prisma.ressource.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RessourceFindUniqueArgs>(args: SelectSubset<T, RessourceFindUniqueArgs<ExtArgs>>): Prisma__RessourceClient<$Result.GetResult<Prisma.$RessourcePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ressource that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RessourceFindUniqueOrThrowArgs} args - Arguments to find a Ressource
     * @example
     * // Get one Ressource
     * const ressource = await prisma.ressource.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RessourceFindUniqueOrThrowArgs>(args: SelectSubset<T, RessourceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RessourceClient<$Result.GetResult<Prisma.$RessourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ressource that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RessourceFindFirstArgs} args - Arguments to find a Ressource
     * @example
     * // Get one Ressource
     * const ressource = await prisma.ressource.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RessourceFindFirstArgs>(args?: SelectSubset<T, RessourceFindFirstArgs<ExtArgs>>): Prisma__RessourceClient<$Result.GetResult<Prisma.$RessourcePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ressource that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RessourceFindFirstOrThrowArgs} args - Arguments to find a Ressource
     * @example
     * // Get one Ressource
     * const ressource = await prisma.ressource.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RessourceFindFirstOrThrowArgs>(args?: SelectSubset<T, RessourceFindFirstOrThrowArgs<ExtArgs>>): Prisma__RessourceClient<$Result.GetResult<Prisma.$RessourcePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ressources that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RessourceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ressources
     * const ressources = await prisma.ressource.findMany()
     * 
     * // Get first 10 Ressources
     * const ressources = await prisma.ressource.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ressourceWithIdOnly = await prisma.ressource.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RessourceFindManyArgs>(args?: SelectSubset<T, RessourceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RessourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ressource.
     * @param {RessourceCreateArgs} args - Arguments to create a Ressource.
     * @example
     * // Create one Ressource
     * const Ressource = await prisma.ressource.create({
     *   data: {
     *     // ... data to create a Ressource
     *   }
     * })
     * 
     */
    create<T extends RessourceCreateArgs>(args: SelectSubset<T, RessourceCreateArgs<ExtArgs>>): Prisma__RessourceClient<$Result.GetResult<Prisma.$RessourcePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ressources.
     * @param {RessourceCreateManyArgs} args - Arguments to create many Ressources.
     * @example
     * // Create many Ressources
     * const ressource = await prisma.ressource.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RessourceCreateManyArgs>(args?: SelectSubset<T, RessourceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ressource.
     * @param {RessourceDeleteArgs} args - Arguments to delete one Ressource.
     * @example
     * // Delete one Ressource
     * const Ressource = await prisma.ressource.delete({
     *   where: {
     *     // ... filter to delete one Ressource
     *   }
     * })
     * 
     */
    delete<T extends RessourceDeleteArgs>(args: SelectSubset<T, RessourceDeleteArgs<ExtArgs>>): Prisma__RessourceClient<$Result.GetResult<Prisma.$RessourcePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ressource.
     * @param {RessourceUpdateArgs} args - Arguments to update one Ressource.
     * @example
     * // Update one Ressource
     * const ressource = await prisma.ressource.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RessourceUpdateArgs>(args: SelectSubset<T, RessourceUpdateArgs<ExtArgs>>): Prisma__RessourceClient<$Result.GetResult<Prisma.$RessourcePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ressources.
     * @param {RessourceDeleteManyArgs} args - Arguments to filter Ressources to delete.
     * @example
     * // Delete a few Ressources
     * const { count } = await prisma.ressource.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RessourceDeleteManyArgs>(args?: SelectSubset<T, RessourceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ressources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RessourceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ressources
     * const ressource = await prisma.ressource.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RessourceUpdateManyArgs>(args: SelectSubset<T, RessourceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ressource.
     * @param {RessourceUpsertArgs} args - Arguments to update or create a Ressource.
     * @example
     * // Update or create a Ressource
     * const ressource = await prisma.ressource.upsert({
     *   create: {
     *     // ... data to create a Ressource
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ressource we want to update
     *   }
     * })
     */
    upsert<T extends RessourceUpsertArgs>(args: SelectSubset<T, RessourceUpsertArgs<ExtArgs>>): Prisma__RessourceClient<$Result.GetResult<Prisma.$RessourcePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ressources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RessourceCountArgs} args - Arguments to filter Ressources to count.
     * @example
     * // Count the number of Ressources
     * const count = await prisma.ressource.count({
     *   where: {
     *     // ... the filter for the Ressources we want to count
     *   }
     * })
    **/
    count<T extends RessourceCountArgs>(
      args?: Subset<T, RessourceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RessourceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ressource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RessourceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RessourceAggregateArgs>(args: Subset<T, RessourceAggregateArgs>): Prisma.PrismaPromise<GetRessourceAggregateType<T>>

    /**
     * Group by Ressource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RessourceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RessourceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RessourceGroupByArgs['orderBy'] }
        : { orderBy?: RessourceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RessourceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRessourceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ressource model
   */
  readonly fields: RessourceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ressource.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RessourceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    auteur<T extends Ressource$auteurArgs<ExtArgs> = {}>(args?: Subset<T, Ressource$auteurArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    universite<T extends UniversiteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UniversiteDefaultArgs<ExtArgs>>): Prisma__UniversiteClient<$Result.GetResult<Prisma.$UniversitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    favoris<T extends Ressource$favorisArgs<ExtArgs> = {}>(args?: Subset<T, Ressource$favorisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    commentaires<T extends Ressource$commentairesArgs<ExtArgs> = {}>(args?: Subset<T, Ressource$commentairesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notations<T extends Ressource$notationsArgs<ExtArgs> = {}>(args?: Subset<T, Ressource$notationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    historiques<T extends Ressource$historiquesArgs<ExtArgs> = {}>(args?: Subset<T, Ressource$historiquesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoriqueAccesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    collections<T extends Ressource$collectionsArgs<ExtArgs> = {}>(args?: Subset<T, Ressource$collectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionRessourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    partages<T extends Ressource$partagesArgs<ExtArgs> = {}>(args?: Subset<T, Ressource$partagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartageUniversitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ressource model
   */
  interface RessourceFieldRefs {
    readonly id: FieldRef<"Ressource", 'String'>
    readonly titre: FieldRef<"Ressource", 'String'>
    readonly description: FieldRef<"Ressource", 'String'>
    readonly type: FieldRef<"Ressource", 'TypeRessource'>
    readonly langue: FieldRef<"Ressource", 'String'>
    readonly urlFichier: FieldRef<"Ressource", 'String'>
    readonly urlFichierLocal: FieldRef<"Ressource", 'String'>
    readonly format: FieldRef<"Ressource", 'String'>
    readonly dateCreation: FieldRef<"Ressource", 'DateTime'>
    readonly dateModification: FieldRef<"Ressource", 'DateTime'>
    readonly estPublique: FieldRef<"Ressource", 'Boolean'>
    readonly motsCles: FieldRef<"Ressource", 'String'>
    readonly auteurId: FieldRef<"Ressource", 'String'>
    readonly universiteId: FieldRef<"Ressource", 'String'>
    readonly image: FieldRef<"Ressource", 'String'>
    readonly niveauAcces: FieldRef<"Ressource", 'NiveauAcces'>
    readonly datePublication: FieldRef<"Ressource", 'DateTime'>
    readonly estValide: FieldRef<"Ressource", 'Boolean'>
    readonly estArchive: FieldRef<"Ressource", 'Boolean'>
    readonly nomAuteurExterne: FieldRef<"Ressource", 'String'>
    readonly prenomAuteurExterne: FieldRef<"Ressource", 'String'>
    readonly affiliationAuteurExterne: FieldRef<"Ressource", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Ressource findUnique
   */
  export type RessourceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ressource
     */
    select?: RessourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ressource
     */
    omit?: RessourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RessourceInclude<ExtArgs> | null
    /**
     * Filter, which Ressource to fetch.
     */
    where: RessourceWhereUniqueInput
  }

  /**
   * Ressource findUniqueOrThrow
   */
  export type RessourceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ressource
     */
    select?: RessourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ressource
     */
    omit?: RessourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RessourceInclude<ExtArgs> | null
    /**
     * Filter, which Ressource to fetch.
     */
    where: RessourceWhereUniqueInput
  }

  /**
   * Ressource findFirst
   */
  export type RessourceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ressource
     */
    select?: RessourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ressource
     */
    omit?: RessourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RessourceInclude<ExtArgs> | null
    /**
     * Filter, which Ressource to fetch.
     */
    where?: RessourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ressources to fetch.
     */
    orderBy?: RessourceOrderByWithRelationInput | RessourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ressources.
     */
    cursor?: RessourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ressources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ressources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ressources.
     */
    distinct?: RessourceScalarFieldEnum | RessourceScalarFieldEnum[]
  }

  /**
   * Ressource findFirstOrThrow
   */
  export type RessourceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ressource
     */
    select?: RessourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ressource
     */
    omit?: RessourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RessourceInclude<ExtArgs> | null
    /**
     * Filter, which Ressource to fetch.
     */
    where?: RessourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ressources to fetch.
     */
    orderBy?: RessourceOrderByWithRelationInput | RessourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ressources.
     */
    cursor?: RessourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ressources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ressources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ressources.
     */
    distinct?: RessourceScalarFieldEnum | RessourceScalarFieldEnum[]
  }

  /**
   * Ressource findMany
   */
  export type RessourceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ressource
     */
    select?: RessourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ressource
     */
    omit?: RessourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RessourceInclude<ExtArgs> | null
    /**
     * Filter, which Ressources to fetch.
     */
    where?: RessourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ressources to fetch.
     */
    orderBy?: RessourceOrderByWithRelationInput | RessourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ressources.
     */
    cursor?: RessourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ressources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ressources.
     */
    skip?: number
    distinct?: RessourceScalarFieldEnum | RessourceScalarFieldEnum[]
  }

  /**
   * Ressource create
   */
  export type RessourceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ressource
     */
    select?: RessourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ressource
     */
    omit?: RessourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RessourceInclude<ExtArgs> | null
    /**
     * The data needed to create a Ressource.
     */
    data: XOR<RessourceCreateInput, RessourceUncheckedCreateInput>
  }

  /**
   * Ressource createMany
   */
  export type RessourceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ressources.
     */
    data: RessourceCreateManyInput | RessourceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ressource update
   */
  export type RessourceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ressource
     */
    select?: RessourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ressource
     */
    omit?: RessourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RessourceInclude<ExtArgs> | null
    /**
     * The data needed to update a Ressource.
     */
    data: XOR<RessourceUpdateInput, RessourceUncheckedUpdateInput>
    /**
     * Choose, which Ressource to update.
     */
    where: RessourceWhereUniqueInput
  }

  /**
   * Ressource updateMany
   */
  export type RessourceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ressources.
     */
    data: XOR<RessourceUpdateManyMutationInput, RessourceUncheckedUpdateManyInput>
    /**
     * Filter which Ressources to update
     */
    where?: RessourceWhereInput
    /**
     * Limit how many Ressources to update.
     */
    limit?: number
  }

  /**
   * Ressource upsert
   */
  export type RessourceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ressource
     */
    select?: RessourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ressource
     */
    omit?: RessourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RessourceInclude<ExtArgs> | null
    /**
     * The filter to search for the Ressource to update in case it exists.
     */
    where: RessourceWhereUniqueInput
    /**
     * In case the Ressource found by the `where` argument doesn't exist, create a new Ressource with this data.
     */
    create: XOR<RessourceCreateInput, RessourceUncheckedCreateInput>
    /**
     * In case the Ressource was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RessourceUpdateInput, RessourceUncheckedUpdateInput>
  }

  /**
   * Ressource delete
   */
  export type RessourceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ressource
     */
    select?: RessourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ressource
     */
    omit?: RessourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RessourceInclude<ExtArgs> | null
    /**
     * Filter which Ressource to delete.
     */
    where: RessourceWhereUniqueInput
  }

  /**
   * Ressource deleteMany
   */
  export type RessourceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ressources to delete
     */
    where?: RessourceWhereInput
    /**
     * Limit how many Ressources to delete.
     */
    limit?: number
  }

  /**
   * Ressource.auteur
   */
  export type Ressource$auteurArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Ressource.favoris
   */
  export type Ressource$favorisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favori
     */
    select?: FavoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favori
     */
    omit?: FavoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriInclude<ExtArgs> | null
    where?: FavoriWhereInput
    orderBy?: FavoriOrderByWithRelationInput | FavoriOrderByWithRelationInput[]
    cursor?: FavoriWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriScalarFieldEnum | FavoriScalarFieldEnum[]
  }

  /**
   * Ressource.commentaires
   */
  export type Ressource$commentairesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    where?: CommentaireWhereInput
    orderBy?: CommentaireOrderByWithRelationInput | CommentaireOrderByWithRelationInput[]
    cursor?: CommentaireWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentaireScalarFieldEnum | CommentaireScalarFieldEnum[]
  }

  /**
   * Ressource.notations
   */
  export type Ressource$notationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notation
     */
    select?: NotationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notation
     */
    omit?: NotationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotationInclude<ExtArgs> | null
    where?: NotationWhereInput
    orderBy?: NotationOrderByWithRelationInput | NotationOrderByWithRelationInput[]
    cursor?: NotationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotationScalarFieldEnum | NotationScalarFieldEnum[]
  }

  /**
   * Ressource.historiques
   */
  export type Ressource$historiquesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriqueAcces
     */
    select?: HistoriqueAccesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriqueAcces
     */
    omit?: HistoriqueAccesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriqueAccesInclude<ExtArgs> | null
    where?: HistoriqueAccesWhereInput
    orderBy?: HistoriqueAccesOrderByWithRelationInput | HistoriqueAccesOrderByWithRelationInput[]
    cursor?: HistoriqueAccesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoriqueAccesScalarFieldEnum | HistoriqueAccesScalarFieldEnum[]
  }

  /**
   * Ressource.collections
   */
  export type Ressource$collectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionRessource
     */
    select?: CollectionRessourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionRessource
     */
    omit?: CollectionRessourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionRessourceInclude<ExtArgs> | null
    where?: CollectionRessourceWhereInput
    orderBy?: CollectionRessourceOrderByWithRelationInput | CollectionRessourceOrderByWithRelationInput[]
    cursor?: CollectionRessourceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CollectionRessourceScalarFieldEnum | CollectionRessourceScalarFieldEnum[]
  }

  /**
   * Ressource.partages
   */
  export type Ressource$partagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartageUniversite
     */
    select?: PartageUniversiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartageUniversite
     */
    omit?: PartageUniversiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartageUniversiteInclude<ExtArgs> | null
    where?: PartageUniversiteWhereInput
    orderBy?: PartageUniversiteOrderByWithRelationInput | PartageUniversiteOrderByWithRelationInput[]
    cursor?: PartageUniversiteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PartageUniversiteScalarFieldEnum | PartageUniversiteScalarFieldEnum[]
  }

  /**
   * Ressource without action
   */
  export type RessourceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ressource
     */
    select?: RessourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ressource
     */
    omit?: RessourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RessourceInclude<ExtArgs> | null
  }


  /**
   * Model Favori
   */

  export type AggregateFavori = {
    _count: FavoriCountAggregateOutputType | null
    _min: FavoriMinAggregateOutputType | null
    _max: FavoriMaxAggregateOutputType | null
  }

  export type FavoriMinAggregateOutputType = {
    id: string | null
    userId: string | null
    ressourceId: string | null
    dateAjout: Date | null
    note: string | null
  }

  export type FavoriMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    ressourceId: string | null
    dateAjout: Date | null
    note: string | null
  }

  export type FavoriCountAggregateOutputType = {
    id: number
    userId: number
    ressourceId: number
    dateAjout: number
    note: number
    _all: number
  }


  export type FavoriMinAggregateInputType = {
    id?: true
    userId?: true
    ressourceId?: true
    dateAjout?: true
    note?: true
  }

  export type FavoriMaxAggregateInputType = {
    id?: true
    userId?: true
    ressourceId?: true
    dateAjout?: true
    note?: true
  }

  export type FavoriCountAggregateInputType = {
    id?: true
    userId?: true
    ressourceId?: true
    dateAjout?: true
    note?: true
    _all?: true
  }

  export type FavoriAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favori to aggregate.
     */
    where?: FavoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favoris to fetch.
     */
    orderBy?: FavoriOrderByWithRelationInput | FavoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FavoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favoris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Favoris
    **/
    _count?: true | FavoriCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoriMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoriMaxAggregateInputType
  }

  export type GetFavoriAggregateType<T extends FavoriAggregateArgs> = {
        [P in keyof T & keyof AggregateFavori]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavori[P]>
      : GetScalarType<T[P], AggregateFavori[P]>
  }




  export type FavoriGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriWhereInput
    orderBy?: FavoriOrderByWithAggregationInput | FavoriOrderByWithAggregationInput[]
    by: FavoriScalarFieldEnum[] | FavoriScalarFieldEnum
    having?: FavoriScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoriCountAggregateInputType | true
    _min?: FavoriMinAggregateInputType
    _max?: FavoriMaxAggregateInputType
  }

  export type FavoriGroupByOutputType = {
    id: string
    userId: string
    ressourceId: string
    dateAjout: Date
    note: string | null
    _count: FavoriCountAggregateOutputType | null
    _min: FavoriMinAggregateOutputType | null
    _max: FavoriMaxAggregateOutputType | null
  }

  type GetFavoriGroupByPayload<T extends FavoriGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavoriGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavoriGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoriGroupByOutputType[P]>
            : GetScalarType<T[P], FavoriGroupByOutputType[P]>
        }
      >
    >


  export type FavoriSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ressourceId?: boolean
    dateAjout?: boolean
    note?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    ressource?: boolean | RessourceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favori"]>



  export type FavoriSelectScalar = {
    id?: boolean
    userId?: boolean
    ressourceId?: boolean
    dateAjout?: boolean
    note?: boolean
  }

  export type FavoriOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "ressourceId" | "dateAjout" | "note", ExtArgs["result"]["favori"]>
  export type FavoriInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    ressource?: boolean | RessourceDefaultArgs<ExtArgs>
  }

  export type $FavoriPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Favori"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      ressource: Prisma.$RessourcePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      ressourceId: string
      dateAjout: Date
      note: string | null
    }, ExtArgs["result"]["favori"]>
    composites: {}
  }

  type FavoriGetPayload<S extends boolean | null | undefined | FavoriDefaultArgs> = $Result.GetResult<Prisma.$FavoriPayload, S>

  type FavoriCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FavoriFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FavoriCountAggregateInputType | true
    }

  export interface FavoriDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Favori'], meta: { name: 'Favori' } }
    /**
     * Find zero or one Favori that matches the filter.
     * @param {FavoriFindUniqueArgs} args - Arguments to find a Favori
     * @example
     * // Get one Favori
     * const favori = await prisma.favori.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FavoriFindUniqueArgs>(args: SelectSubset<T, FavoriFindUniqueArgs<ExtArgs>>): Prisma__FavoriClient<$Result.GetResult<Prisma.$FavoriPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Favori that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FavoriFindUniqueOrThrowArgs} args - Arguments to find a Favori
     * @example
     * // Get one Favori
     * const favori = await prisma.favori.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FavoriFindUniqueOrThrowArgs>(args: SelectSubset<T, FavoriFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FavoriClient<$Result.GetResult<Prisma.$FavoriPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favori that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriFindFirstArgs} args - Arguments to find a Favori
     * @example
     * // Get one Favori
     * const favori = await prisma.favori.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FavoriFindFirstArgs>(args?: SelectSubset<T, FavoriFindFirstArgs<ExtArgs>>): Prisma__FavoriClient<$Result.GetResult<Prisma.$FavoriPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favori that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriFindFirstOrThrowArgs} args - Arguments to find a Favori
     * @example
     * // Get one Favori
     * const favori = await prisma.favori.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FavoriFindFirstOrThrowArgs>(args?: SelectSubset<T, FavoriFindFirstOrThrowArgs<ExtArgs>>): Prisma__FavoriClient<$Result.GetResult<Prisma.$FavoriPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Favoris that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Favoris
     * const favoris = await prisma.favori.findMany()
     * 
     * // Get first 10 Favoris
     * const favoris = await prisma.favori.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const favoriWithIdOnly = await prisma.favori.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FavoriFindManyArgs>(args?: SelectSubset<T, FavoriFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Favori.
     * @param {FavoriCreateArgs} args - Arguments to create a Favori.
     * @example
     * // Create one Favori
     * const Favori = await prisma.favori.create({
     *   data: {
     *     // ... data to create a Favori
     *   }
     * })
     * 
     */
    create<T extends FavoriCreateArgs>(args: SelectSubset<T, FavoriCreateArgs<ExtArgs>>): Prisma__FavoriClient<$Result.GetResult<Prisma.$FavoriPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Favoris.
     * @param {FavoriCreateManyArgs} args - Arguments to create many Favoris.
     * @example
     * // Create many Favoris
     * const favori = await prisma.favori.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FavoriCreateManyArgs>(args?: SelectSubset<T, FavoriCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Favori.
     * @param {FavoriDeleteArgs} args - Arguments to delete one Favori.
     * @example
     * // Delete one Favori
     * const Favori = await prisma.favori.delete({
     *   where: {
     *     // ... filter to delete one Favori
     *   }
     * })
     * 
     */
    delete<T extends FavoriDeleteArgs>(args: SelectSubset<T, FavoriDeleteArgs<ExtArgs>>): Prisma__FavoriClient<$Result.GetResult<Prisma.$FavoriPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Favori.
     * @param {FavoriUpdateArgs} args - Arguments to update one Favori.
     * @example
     * // Update one Favori
     * const favori = await prisma.favori.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FavoriUpdateArgs>(args: SelectSubset<T, FavoriUpdateArgs<ExtArgs>>): Prisma__FavoriClient<$Result.GetResult<Prisma.$FavoriPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Favoris.
     * @param {FavoriDeleteManyArgs} args - Arguments to filter Favoris to delete.
     * @example
     * // Delete a few Favoris
     * const { count } = await prisma.favori.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FavoriDeleteManyArgs>(args?: SelectSubset<T, FavoriDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favoris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Favoris
     * const favori = await prisma.favori.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FavoriUpdateManyArgs>(args: SelectSubset<T, FavoriUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Favori.
     * @param {FavoriUpsertArgs} args - Arguments to update or create a Favori.
     * @example
     * // Update or create a Favori
     * const favori = await prisma.favori.upsert({
     *   create: {
     *     // ... data to create a Favori
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Favori we want to update
     *   }
     * })
     */
    upsert<T extends FavoriUpsertArgs>(args: SelectSubset<T, FavoriUpsertArgs<ExtArgs>>): Prisma__FavoriClient<$Result.GetResult<Prisma.$FavoriPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Favoris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriCountArgs} args - Arguments to filter Favoris to count.
     * @example
     * // Count the number of Favoris
     * const count = await prisma.favori.count({
     *   where: {
     *     // ... the filter for the Favoris we want to count
     *   }
     * })
    **/
    count<T extends FavoriCountArgs>(
      args?: Subset<T, FavoriCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoriCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Favori.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FavoriAggregateArgs>(args: Subset<T, FavoriAggregateArgs>): Prisma.PrismaPromise<GetFavoriAggregateType<T>>

    /**
     * Group by Favori.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FavoriGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavoriGroupByArgs['orderBy'] }
        : { orderBy?: FavoriGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FavoriGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoriGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Favori model
   */
  readonly fields: FavoriFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Favori.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FavoriClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ressource<T extends RessourceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RessourceDefaultArgs<ExtArgs>>): Prisma__RessourceClient<$Result.GetResult<Prisma.$RessourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Favori model
   */
  interface FavoriFieldRefs {
    readonly id: FieldRef<"Favori", 'String'>
    readonly userId: FieldRef<"Favori", 'String'>
    readonly ressourceId: FieldRef<"Favori", 'String'>
    readonly dateAjout: FieldRef<"Favori", 'DateTime'>
    readonly note: FieldRef<"Favori", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Favori findUnique
   */
  export type FavoriFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favori
     */
    select?: FavoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favori
     */
    omit?: FavoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriInclude<ExtArgs> | null
    /**
     * Filter, which Favori to fetch.
     */
    where: FavoriWhereUniqueInput
  }

  /**
   * Favori findUniqueOrThrow
   */
  export type FavoriFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favori
     */
    select?: FavoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favori
     */
    omit?: FavoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriInclude<ExtArgs> | null
    /**
     * Filter, which Favori to fetch.
     */
    where: FavoriWhereUniqueInput
  }

  /**
   * Favori findFirst
   */
  export type FavoriFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favori
     */
    select?: FavoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favori
     */
    omit?: FavoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriInclude<ExtArgs> | null
    /**
     * Filter, which Favori to fetch.
     */
    where?: FavoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favoris to fetch.
     */
    orderBy?: FavoriOrderByWithRelationInput | FavoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favoris.
     */
    cursor?: FavoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favoris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favoris.
     */
    distinct?: FavoriScalarFieldEnum | FavoriScalarFieldEnum[]
  }

  /**
   * Favori findFirstOrThrow
   */
  export type FavoriFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favori
     */
    select?: FavoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favori
     */
    omit?: FavoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriInclude<ExtArgs> | null
    /**
     * Filter, which Favori to fetch.
     */
    where?: FavoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favoris to fetch.
     */
    orderBy?: FavoriOrderByWithRelationInput | FavoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favoris.
     */
    cursor?: FavoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favoris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favoris.
     */
    distinct?: FavoriScalarFieldEnum | FavoriScalarFieldEnum[]
  }

  /**
   * Favori findMany
   */
  export type FavoriFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favori
     */
    select?: FavoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favori
     */
    omit?: FavoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriInclude<ExtArgs> | null
    /**
     * Filter, which Favoris to fetch.
     */
    where?: FavoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favoris to fetch.
     */
    orderBy?: FavoriOrderByWithRelationInput | FavoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Favoris.
     */
    cursor?: FavoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favoris.
     */
    skip?: number
    distinct?: FavoriScalarFieldEnum | FavoriScalarFieldEnum[]
  }

  /**
   * Favori create
   */
  export type FavoriCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favori
     */
    select?: FavoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favori
     */
    omit?: FavoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriInclude<ExtArgs> | null
    /**
     * The data needed to create a Favori.
     */
    data: XOR<FavoriCreateInput, FavoriUncheckedCreateInput>
  }

  /**
   * Favori createMany
   */
  export type FavoriCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Favoris.
     */
    data: FavoriCreateManyInput | FavoriCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Favori update
   */
  export type FavoriUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favori
     */
    select?: FavoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favori
     */
    omit?: FavoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriInclude<ExtArgs> | null
    /**
     * The data needed to update a Favori.
     */
    data: XOR<FavoriUpdateInput, FavoriUncheckedUpdateInput>
    /**
     * Choose, which Favori to update.
     */
    where: FavoriWhereUniqueInput
  }

  /**
   * Favori updateMany
   */
  export type FavoriUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Favoris.
     */
    data: XOR<FavoriUpdateManyMutationInput, FavoriUncheckedUpdateManyInput>
    /**
     * Filter which Favoris to update
     */
    where?: FavoriWhereInput
    /**
     * Limit how many Favoris to update.
     */
    limit?: number
  }

  /**
   * Favori upsert
   */
  export type FavoriUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favori
     */
    select?: FavoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favori
     */
    omit?: FavoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriInclude<ExtArgs> | null
    /**
     * The filter to search for the Favori to update in case it exists.
     */
    where: FavoriWhereUniqueInput
    /**
     * In case the Favori found by the `where` argument doesn't exist, create a new Favori with this data.
     */
    create: XOR<FavoriCreateInput, FavoriUncheckedCreateInput>
    /**
     * In case the Favori was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavoriUpdateInput, FavoriUncheckedUpdateInput>
  }

  /**
   * Favori delete
   */
  export type FavoriDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favori
     */
    select?: FavoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favori
     */
    omit?: FavoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriInclude<ExtArgs> | null
    /**
     * Filter which Favori to delete.
     */
    where: FavoriWhereUniqueInput
  }

  /**
   * Favori deleteMany
   */
  export type FavoriDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favoris to delete
     */
    where?: FavoriWhereInput
    /**
     * Limit how many Favoris to delete.
     */
    limit?: number
  }

  /**
   * Favori without action
   */
  export type FavoriDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favori
     */
    select?: FavoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favori
     */
    omit?: FavoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriInclude<ExtArgs> | null
  }


  /**
   * Model Universite
   */

  export type AggregateUniversite = {
    _count: UniversiteCountAggregateOutputType | null
    _min: UniversiteMinAggregateOutputType | null
    _max: UniversiteMaxAggregateOutputType | null
  }

  export type UniversiteMinAggregateOutputType = {
    id: string | null
    nom: string | null
    adresse: string | null
    ville: string | null
    pays: string | null
    siteWeb: string | null
    dateCreation: Date | null
    adresseBlockchain: string | null
    estActive: boolean | null
  }

  export type UniversiteMaxAggregateOutputType = {
    id: string | null
    nom: string | null
    adresse: string | null
    ville: string | null
    pays: string | null
    siteWeb: string | null
    dateCreation: Date | null
    adresseBlockchain: string | null
    estActive: boolean | null
  }

  export type UniversiteCountAggregateOutputType = {
    id: number
    nom: number
    adresse: number
    ville: number
    pays: number
    siteWeb: number
    dateCreation: number
    adresseBlockchain: number
    estActive: number
    _all: number
  }


  export type UniversiteMinAggregateInputType = {
    id?: true
    nom?: true
    adresse?: true
    ville?: true
    pays?: true
    siteWeb?: true
    dateCreation?: true
    adresseBlockchain?: true
    estActive?: true
  }

  export type UniversiteMaxAggregateInputType = {
    id?: true
    nom?: true
    adresse?: true
    ville?: true
    pays?: true
    siteWeb?: true
    dateCreation?: true
    adresseBlockchain?: true
    estActive?: true
  }

  export type UniversiteCountAggregateInputType = {
    id?: true
    nom?: true
    adresse?: true
    ville?: true
    pays?: true
    siteWeb?: true
    dateCreation?: true
    adresseBlockchain?: true
    estActive?: true
    _all?: true
  }

  export type UniversiteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Universite to aggregate.
     */
    where?: UniversiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Universites to fetch.
     */
    orderBy?: UniversiteOrderByWithRelationInput | UniversiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UniversiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Universites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Universites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Universites
    **/
    _count?: true | UniversiteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UniversiteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UniversiteMaxAggregateInputType
  }

  export type GetUniversiteAggregateType<T extends UniversiteAggregateArgs> = {
        [P in keyof T & keyof AggregateUniversite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUniversite[P]>
      : GetScalarType<T[P], AggregateUniversite[P]>
  }




  export type UniversiteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UniversiteWhereInput
    orderBy?: UniversiteOrderByWithAggregationInput | UniversiteOrderByWithAggregationInput[]
    by: UniversiteScalarFieldEnum[] | UniversiteScalarFieldEnum
    having?: UniversiteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UniversiteCountAggregateInputType | true
    _min?: UniversiteMinAggregateInputType
    _max?: UniversiteMaxAggregateInputType
  }

  export type UniversiteGroupByOutputType = {
    id: string
    nom: string
    adresse: string | null
    ville: string
    pays: string
    siteWeb: string | null
    dateCreation: Date
    adresseBlockchain: string | null
    estActive: boolean
    _count: UniversiteCountAggregateOutputType | null
    _min: UniversiteMinAggregateOutputType | null
    _max: UniversiteMaxAggregateOutputType | null
  }

  type GetUniversiteGroupByPayload<T extends UniversiteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UniversiteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UniversiteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UniversiteGroupByOutputType[P]>
            : GetScalarType<T[P], UniversiteGroupByOutputType[P]>
        }
      >
    >


  export type UniversiteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    adresse?: boolean
    ville?: boolean
    pays?: boolean
    siteWeb?: boolean
    dateCreation?: boolean
    adresseBlockchain?: boolean
    estActive?: boolean
    users?: boolean | Universite$usersArgs<ExtArgs>
    ressources?: boolean | Universite$ressourcesArgs<ExtArgs>
    _count?: boolean | UniversiteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["universite"]>



  export type UniversiteSelectScalar = {
    id?: boolean
    nom?: boolean
    adresse?: boolean
    ville?: boolean
    pays?: boolean
    siteWeb?: boolean
    dateCreation?: boolean
    adresseBlockchain?: boolean
    estActive?: boolean
  }

  export type UniversiteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "adresse" | "ville" | "pays" | "siteWeb" | "dateCreation" | "adresseBlockchain" | "estActive", ExtArgs["result"]["universite"]>
  export type UniversiteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Universite$usersArgs<ExtArgs>
    ressources?: boolean | Universite$ressourcesArgs<ExtArgs>
    _count?: boolean | UniversiteCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UniversitePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Universite"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      ressources: Prisma.$RessourcePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nom: string
      adresse: string | null
      ville: string
      pays: string
      siteWeb: string | null
      dateCreation: Date
      adresseBlockchain: string | null
      estActive: boolean
    }, ExtArgs["result"]["universite"]>
    composites: {}
  }

  type UniversiteGetPayload<S extends boolean | null | undefined | UniversiteDefaultArgs> = $Result.GetResult<Prisma.$UniversitePayload, S>

  type UniversiteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UniversiteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UniversiteCountAggregateInputType | true
    }

  export interface UniversiteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Universite'], meta: { name: 'Universite' } }
    /**
     * Find zero or one Universite that matches the filter.
     * @param {UniversiteFindUniqueArgs} args - Arguments to find a Universite
     * @example
     * // Get one Universite
     * const universite = await prisma.universite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UniversiteFindUniqueArgs>(args: SelectSubset<T, UniversiteFindUniqueArgs<ExtArgs>>): Prisma__UniversiteClient<$Result.GetResult<Prisma.$UniversitePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Universite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UniversiteFindUniqueOrThrowArgs} args - Arguments to find a Universite
     * @example
     * // Get one Universite
     * const universite = await prisma.universite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UniversiteFindUniqueOrThrowArgs>(args: SelectSubset<T, UniversiteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UniversiteClient<$Result.GetResult<Prisma.$UniversitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Universite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniversiteFindFirstArgs} args - Arguments to find a Universite
     * @example
     * // Get one Universite
     * const universite = await prisma.universite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UniversiteFindFirstArgs>(args?: SelectSubset<T, UniversiteFindFirstArgs<ExtArgs>>): Prisma__UniversiteClient<$Result.GetResult<Prisma.$UniversitePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Universite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniversiteFindFirstOrThrowArgs} args - Arguments to find a Universite
     * @example
     * // Get one Universite
     * const universite = await prisma.universite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UniversiteFindFirstOrThrowArgs>(args?: SelectSubset<T, UniversiteFindFirstOrThrowArgs<ExtArgs>>): Prisma__UniversiteClient<$Result.GetResult<Prisma.$UniversitePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Universites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniversiteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Universites
     * const universites = await prisma.universite.findMany()
     * 
     * // Get first 10 Universites
     * const universites = await prisma.universite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const universiteWithIdOnly = await prisma.universite.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UniversiteFindManyArgs>(args?: SelectSubset<T, UniversiteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UniversitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Universite.
     * @param {UniversiteCreateArgs} args - Arguments to create a Universite.
     * @example
     * // Create one Universite
     * const Universite = await prisma.universite.create({
     *   data: {
     *     // ... data to create a Universite
     *   }
     * })
     * 
     */
    create<T extends UniversiteCreateArgs>(args: SelectSubset<T, UniversiteCreateArgs<ExtArgs>>): Prisma__UniversiteClient<$Result.GetResult<Prisma.$UniversitePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Universites.
     * @param {UniversiteCreateManyArgs} args - Arguments to create many Universites.
     * @example
     * // Create many Universites
     * const universite = await prisma.universite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UniversiteCreateManyArgs>(args?: SelectSubset<T, UniversiteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Universite.
     * @param {UniversiteDeleteArgs} args - Arguments to delete one Universite.
     * @example
     * // Delete one Universite
     * const Universite = await prisma.universite.delete({
     *   where: {
     *     // ... filter to delete one Universite
     *   }
     * })
     * 
     */
    delete<T extends UniversiteDeleteArgs>(args: SelectSubset<T, UniversiteDeleteArgs<ExtArgs>>): Prisma__UniversiteClient<$Result.GetResult<Prisma.$UniversitePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Universite.
     * @param {UniversiteUpdateArgs} args - Arguments to update one Universite.
     * @example
     * // Update one Universite
     * const universite = await prisma.universite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UniversiteUpdateArgs>(args: SelectSubset<T, UniversiteUpdateArgs<ExtArgs>>): Prisma__UniversiteClient<$Result.GetResult<Prisma.$UniversitePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Universites.
     * @param {UniversiteDeleteManyArgs} args - Arguments to filter Universites to delete.
     * @example
     * // Delete a few Universites
     * const { count } = await prisma.universite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UniversiteDeleteManyArgs>(args?: SelectSubset<T, UniversiteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Universites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniversiteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Universites
     * const universite = await prisma.universite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UniversiteUpdateManyArgs>(args: SelectSubset<T, UniversiteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Universite.
     * @param {UniversiteUpsertArgs} args - Arguments to update or create a Universite.
     * @example
     * // Update or create a Universite
     * const universite = await prisma.universite.upsert({
     *   create: {
     *     // ... data to create a Universite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Universite we want to update
     *   }
     * })
     */
    upsert<T extends UniversiteUpsertArgs>(args: SelectSubset<T, UniversiteUpsertArgs<ExtArgs>>): Prisma__UniversiteClient<$Result.GetResult<Prisma.$UniversitePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Universites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniversiteCountArgs} args - Arguments to filter Universites to count.
     * @example
     * // Count the number of Universites
     * const count = await prisma.universite.count({
     *   where: {
     *     // ... the filter for the Universites we want to count
     *   }
     * })
    **/
    count<T extends UniversiteCountArgs>(
      args?: Subset<T, UniversiteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UniversiteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Universite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniversiteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UniversiteAggregateArgs>(args: Subset<T, UniversiteAggregateArgs>): Prisma.PrismaPromise<GetUniversiteAggregateType<T>>

    /**
     * Group by Universite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniversiteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UniversiteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UniversiteGroupByArgs['orderBy'] }
        : { orderBy?: UniversiteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UniversiteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUniversiteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Universite model
   */
  readonly fields: UniversiteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Universite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UniversiteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Universite$usersArgs<ExtArgs> = {}>(args?: Subset<T, Universite$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ressources<T extends Universite$ressourcesArgs<ExtArgs> = {}>(args?: Subset<T, Universite$ressourcesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RessourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Universite model
   */
  interface UniversiteFieldRefs {
    readonly id: FieldRef<"Universite", 'String'>
    readonly nom: FieldRef<"Universite", 'String'>
    readonly adresse: FieldRef<"Universite", 'String'>
    readonly ville: FieldRef<"Universite", 'String'>
    readonly pays: FieldRef<"Universite", 'String'>
    readonly siteWeb: FieldRef<"Universite", 'String'>
    readonly dateCreation: FieldRef<"Universite", 'DateTime'>
    readonly adresseBlockchain: FieldRef<"Universite", 'String'>
    readonly estActive: FieldRef<"Universite", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Universite findUnique
   */
  export type UniversiteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Universite
     */
    select?: UniversiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Universite
     */
    omit?: UniversiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversiteInclude<ExtArgs> | null
    /**
     * Filter, which Universite to fetch.
     */
    where: UniversiteWhereUniqueInput
  }

  /**
   * Universite findUniqueOrThrow
   */
  export type UniversiteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Universite
     */
    select?: UniversiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Universite
     */
    omit?: UniversiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversiteInclude<ExtArgs> | null
    /**
     * Filter, which Universite to fetch.
     */
    where: UniversiteWhereUniqueInput
  }

  /**
   * Universite findFirst
   */
  export type UniversiteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Universite
     */
    select?: UniversiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Universite
     */
    omit?: UniversiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversiteInclude<ExtArgs> | null
    /**
     * Filter, which Universite to fetch.
     */
    where?: UniversiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Universites to fetch.
     */
    orderBy?: UniversiteOrderByWithRelationInput | UniversiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Universites.
     */
    cursor?: UniversiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Universites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Universites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Universites.
     */
    distinct?: UniversiteScalarFieldEnum | UniversiteScalarFieldEnum[]
  }

  /**
   * Universite findFirstOrThrow
   */
  export type UniversiteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Universite
     */
    select?: UniversiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Universite
     */
    omit?: UniversiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversiteInclude<ExtArgs> | null
    /**
     * Filter, which Universite to fetch.
     */
    where?: UniversiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Universites to fetch.
     */
    orderBy?: UniversiteOrderByWithRelationInput | UniversiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Universites.
     */
    cursor?: UniversiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Universites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Universites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Universites.
     */
    distinct?: UniversiteScalarFieldEnum | UniversiteScalarFieldEnum[]
  }

  /**
   * Universite findMany
   */
  export type UniversiteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Universite
     */
    select?: UniversiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Universite
     */
    omit?: UniversiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversiteInclude<ExtArgs> | null
    /**
     * Filter, which Universites to fetch.
     */
    where?: UniversiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Universites to fetch.
     */
    orderBy?: UniversiteOrderByWithRelationInput | UniversiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Universites.
     */
    cursor?: UniversiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Universites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Universites.
     */
    skip?: number
    distinct?: UniversiteScalarFieldEnum | UniversiteScalarFieldEnum[]
  }

  /**
   * Universite create
   */
  export type UniversiteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Universite
     */
    select?: UniversiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Universite
     */
    omit?: UniversiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversiteInclude<ExtArgs> | null
    /**
     * The data needed to create a Universite.
     */
    data: XOR<UniversiteCreateInput, UniversiteUncheckedCreateInput>
  }

  /**
   * Universite createMany
   */
  export type UniversiteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Universites.
     */
    data: UniversiteCreateManyInput | UniversiteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Universite update
   */
  export type UniversiteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Universite
     */
    select?: UniversiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Universite
     */
    omit?: UniversiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversiteInclude<ExtArgs> | null
    /**
     * The data needed to update a Universite.
     */
    data: XOR<UniversiteUpdateInput, UniversiteUncheckedUpdateInput>
    /**
     * Choose, which Universite to update.
     */
    where: UniversiteWhereUniqueInput
  }

  /**
   * Universite updateMany
   */
  export type UniversiteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Universites.
     */
    data: XOR<UniversiteUpdateManyMutationInput, UniversiteUncheckedUpdateManyInput>
    /**
     * Filter which Universites to update
     */
    where?: UniversiteWhereInput
    /**
     * Limit how many Universites to update.
     */
    limit?: number
  }

  /**
   * Universite upsert
   */
  export type UniversiteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Universite
     */
    select?: UniversiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Universite
     */
    omit?: UniversiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversiteInclude<ExtArgs> | null
    /**
     * The filter to search for the Universite to update in case it exists.
     */
    where: UniversiteWhereUniqueInput
    /**
     * In case the Universite found by the `where` argument doesn't exist, create a new Universite with this data.
     */
    create: XOR<UniversiteCreateInput, UniversiteUncheckedCreateInput>
    /**
     * In case the Universite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UniversiteUpdateInput, UniversiteUncheckedUpdateInput>
  }

  /**
   * Universite delete
   */
  export type UniversiteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Universite
     */
    select?: UniversiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Universite
     */
    omit?: UniversiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversiteInclude<ExtArgs> | null
    /**
     * Filter which Universite to delete.
     */
    where: UniversiteWhereUniqueInput
  }

  /**
   * Universite deleteMany
   */
  export type UniversiteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Universites to delete
     */
    where?: UniversiteWhereInput
    /**
     * Limit how many Universites to delete.
     */
    limit?: number
  }

  /**
   * Universite.users
   */
  export type Universite$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Universite.ressources
   */
  export type Universite$ressourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ressource
     */
    select?: RessourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ressource
     */
    omit?: RessourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RessourceInclude<ExtArgs> | null
    where?: RessourceWhereInput
    orderBy?: RessourceOrderByWithRelationInput | RessourceOrderByWithRelationInput[]
    cursor?: RessourceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RessourceScalarFieldEnum | RessourceScalarFieldEnum[]
  }

  /**
   * Universite without action
   */
  export type UniversiteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Universite
     */
    select?: UniversiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Universite
     */
    omit?: UniversiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversiteInclude<ExtArgs> | null
  }


  /**
   * Model Commentaire
   */

  export type AggregateCommentaire = {
    _count: CommentaireCountAggregateOutputType | null
    _min: CommentaireMinAggregateOutputType | null
    _max: CommentaireMaxAggregateOutputType | null
  }

  export type CommentaireMinAggregateOutputType = {
    id: string | null
    userId: string | null
    ressourceId: string | null
    contenu: string | null
    dateCreation: Date | null
    estModere: boolean | null
  }

  export type CommentaireMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    ressourceId: string | null
    contenu: string | null
    dateCreation: Date | null
    estModere: boolean | null
  }

  export type CommentaireCountAggregateOutputType = {
    id: number
    userId: number
    ressourceId: number
    contenu: number
    dateCreation: number
    estModere: number
    _all: number
  }


  export type CommentaireMinAggregateInputType = {
    id?: true
    userId?: true
    ressourceId?: true
    contenu?: true
    dateCreation?: true
    estModere?: true
  }

  export type CommentaireMaxAggregateInputType = {
    id?: true
    userId?: true
    ressourceId?: true
    contenu?: true
    dateCreation?: true
    estModere?: true
  }

  export type CommentaireCountAggregateInputType = {
    id?: true
    userId?: true
    ressourceId?: true
    contenu?: true
    dateCreation?: true
    estModere?: true
    _all?: true
  }

  export type CommentaireAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Commentaire to aggregate.
     */
    where?: CommentaireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commentaires to fetch.
     */
    orderBy?: CommentaireOrderByWithRelationInput | CommentaireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentaireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commentaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commentaires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Commentaires
    **/
    _count?: true | CommentaireCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentaireMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentaireMaxAggregateInputType
  }

  export type GetCommentaireAggregateType<T extends CommentaireAggregateArgs> = {
        [P in keyof T & keyof AggregateCommentaire]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommentaire[P]>
      : GetScalarType<T[P], AggregateCommentaire[P]>
  }




  export type CommentaireGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentaireWhereInput
    orderBy?: CommentaireOrderByWithAggregationInput | CommentaireOrderByWithAggregationInput[]
    by: CommentaireScalarFieldEnum[] | CommentaireScalarFieldEnum
    having?: CommentaireScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentaireCountAggregateInputType | true
    _min?: CommentaireMinAggregateInputType
    _max?: CommentaireMaxAggregateInputType
  }

  export type CommentaireGroupByOutputType = {
    id: string
    userId: string
    ressourceId: string
    contenu: string
    dateCreation: Date
    estModere: boolean
    _count: CommentaireCountAggregateOutputType | null
    _min: CommentaireMinAggregateOutputType | null
    _max: CommentaireMaxAggregateOutputType | null
  }

  type GetCommentaireGroupByPayload<T extends CommentaireGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentaireGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentaireGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentaireGroupByOutputType[P]>
            : GetScalarType<T[P], CommentaireGroupByOutputType[P]>
        }
      >
    >


  export type CommentaireSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ressourceId?: boolean
    contenu?: boolean
    dateCreation?: boolean
    estModere?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    ressource?: boolean | RessourceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commentaire"]>



  export type CommentaireSelectScalar = {
    id?: boolean
    userId?: boolean
    ressourceId?: boolean
    contenu?: boolean
    dateCreation?: boolean
    estModere?: boolean
  }

  export type CommentaireOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "ressourceId" | "contenu" | "dateCreation" | "estModere", ExtArgs["result"]["commentaire"]>
  export type CommentaireInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    ressource?: boolean | RessourceDefaultArgs<ExtArgs>
  }

  export type $CommentairePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Commentaire"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      ressource: Prisma.$RessourcePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      ressourceId: string
      contenu: string
      dateCreation: Date
      estModere: boolean
    }, ExtArgs["result"]["commentaire"]>
    composites: {}
  }

  type CommentaireGetPayload<S extends boolean | null | undefined | CommentaireDefaultArgs> = $Result.GetResult<Prisma.$CommentairePayload, S>

  type CommentaireCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentaireFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentaireCountAggregateInputType | true
    }

  export interface CommentaireDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Commentaire'], meta: { name: 'Commentaire' } }
    /**
     * Find zero or one Commentaire that matches the filter.
     * @param {CommentaireFindUniqueArgs} args - Arguments to find a Commentaire
     * @example
     * // Get one Commentaire
     * const commentaire = await prisma.commentaire.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentaireFindUniqueArgs>(args: SelectSubset<T, CommentaireFindUniqueArgs<ExtArgs>>): Prisma__CommentaireClient<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Commentaire that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentaireFindUniqueOrThrowArgs} args - Arguments to find a Commentaire
     * @example
     * // Get one Commentaire
     * const commentaire = await prisma.commentaire.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentaireFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentaireFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentaireClient<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Commentaire that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentaireFindFirstArgs} args - Arguments to find a Commentaire
     * @example
     * // Get one Commentaire
     * const commentaire = await prisma.commentaire.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentaireFindFirstArgs>(args?: SelectSubset<T, CommentaireFindFirstArgs<ExtArgs>>): Prisma__CommentaireClient<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Commentaire that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentaireFindFirstOrThrowArgs} args - Arguments to find a Commentaire
     * @example
     * // Get one Commentaire
     * const commentaire = await prisma.commentaire.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentaireFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentaireFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentaireClient<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Commentaires that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentaireFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Commentaires
     * const commentaires = await prisma.commentaire.findMany()
     * 
     * // Get first 10 Commentaires
     * const commentaires = await prisma.commentaire.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentaireWithIdOnly = await prisma.commentaire.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentaireFindManyArgs>(args?: SelectSubset<T, CommentaireFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Commentaire.
     * @param {CommentaireCreateArgs} args - Arguments to create a Commentaire.
     * @example
     * // Create one Commentaire
     * const Commentaire = await prisma.commentaire.create({
     *   data: {
     *     // ... data to create a Commentaire
     *   }
     * })
     * 
     */
    create<T extends CommentaireCreateArgs>(args: SelectSubset<T, CommentaireCreateArgs<ExtArgs>>): Prisma__CommentaireClient<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Commentaires.
     * @param {CommentaireCreateManyArgs} args - Arguments to create many Commentaires.
     * @example
     * // Create many Commentaires
     * const commentaire = await prisma.commentaire.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentaireCreateManyArgs>(args?: SelectSubset<T, CommentaireCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Commentaire.
     * @param {CommentaireDeleteArgs} args - Arguments to delete one Commentaire.
     * @example
     * // Delete one Commentaire
     * const Commentaire = await prisma.commentaire.delete({
     *   where: {
     *     // ... filter to delete one Commentaire
     *   }
     * })
     * 
     */
    delete<T extends CommentaireDeleteArgs>(args: SelectSubset<T, CommentaireDeleteArgs<ExtArgs>>): Prisma__CommentaireClient<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Commentaire.
     * @param {CommentaireUpdateArgs} args - Arguments to update one Commentaire.
     * @example
     * // Update one Commentaire
     * const commentaire = await prisma.commentaire.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentaireUpdateArgs>(args: SelectSubset<T, CommentaireUpdateArgs<ExtArgs>>): Prisma__CommentaireClient<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Commentaires.
     * @param {CommentaireDeleteManyArgs} args - Arguments to filter Commentaires to delete.
     * @example
     * // Delete a few Commentaires
     * const { count } = await prisma.commentaire.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentaireDeleteManyArgs>(args?: SelectSubset<T, CommentaireDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Commentaires.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentaireUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Commentaires
     * const commentaire = await prisma.commentaire.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentaireUpdateManyArgs>(args: SelectSubset<T, CommentaireUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Commentaire.
     * @param {CommentaireUpsertArgs} args - Arguments to update or create a Commentaire.
     * @example
     * // Update or create a Commentaire
     * const commentaire = await prisma.commentaire.upsert({
     *   create: {
     *     // ... data to create a Commentaire
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Commentaire we want to update
     *   }
     * })
     */
    upsert<T extends CommentaireUpsertArgs>(args: SelectSubset<T, CommentaireUpsertArgs<ExtArgs>>): Prisma__CommentaireClient<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Commentaires.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentaireCountArgs} args - Arguments to filter Commentaires to count.
     * @example
     * // Count the number of Commentaires
     * const count = await prisma.commentaire.count({
     *   where: {
     *     // ... the filter for the Commentaires we want to count
     *   }
     * })
    **/
    count<T extends CommentaireCountArgs>(
      args?: Subset<T, CommentaireCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentaireCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Commentaire.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentaireAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentaireAggregateArgs>(args: Subset<T, CommentaireAggregateArgs>): Prisma.PrismaPromise<GetCommentaireAggregateType<T>>

    /**
     * Group by Commentaire.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentaireGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentaireGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentaireGroupByArgs['orderBy'] }
        : { orderBy?: CommentaireGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentaireGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentaireGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Commentaire model
   */
  readonly fields: CommentaireFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Commentaire.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentaireClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ressource<T extends RessourceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RessourceDefaultArgs<ExtArgs>>): Prisma__RessourceClient<$Result.GetResult<Prisma.$RessourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Commentaire model
   */
  interface CommentaireFieldRefs {
    readonly id: FieldRef<"Commentaire", 'String'>
    readonly userId: FieldRef<"Commentaire", 'String'>
    readonly ressourceId: FieldRef<"Commentaire", 'String'>
    readonly contenu: FieldRef<"Commentaire", 'String'>
    readonly dateCreation: FieldRef<"Commentaire", 'DateTime'>
    readonly estModere: FieldRef<"Commentaire", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Commentaire findUnique
   */
  export type CommentaireFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    /**
     * Filter, which Commentaire to fetch.
     */
    where: CommentaireWhereUniqueInput
  }

  /**
   * Commentaire findUniqueOrThrow
   */
  export type CommentaireFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    /**
     * Filter, which Commentaire to fetch.
     */
    where: CommentaireWhereUniqueInput
  }

  /**
   * Commentaire findFirst
   */
  export type CommentaireFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    /**
     * Filter, which Commentaire to fetch.
     */
    where?: CommentaireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commentaires to fetch.
     */
    orderBy?: CommentaireOrderByWithRelationInput | CommentaireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Commentaires.
     */
    cursor?: CommentaireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commentaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commentaires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Commentaires.
     */
    distinct?: CommentaireScalarFieldEnum | CommentaireScalarFieldEnum[]
  }

  /**
   * Commentaire findFirstOrThrow
   */
  export type CommentaireFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    /**
     * Filter, which Commentaire to fetch.
     */
    where?: CommentaireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commentaires to fetch.
     */
    orderBy?: CommentaireOrderByWithRelationInput | CommentaireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Commentaires.
     */
    cursor?: CommentaireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commentaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commentaires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Commentaires.
     */
    distinct?: CommentaireScalarFieldEnum | CommentaireScalarFieldEnum[]
  }

  /**
   * Commentaire findMany
   */
  export type CommentaireFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    /**
     * Filter, which Commentaires to fetch.
     */
    where?: CommentaireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commentaires to fetch.
     */
    orderBy?: CommentaireOrderByWithRelationInput | CommentaireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Commentaires.
     */
    cursor?: CommentaireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commentaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commentaires.
     */
    skip?: number
    distinct?: CommentaireScalarFieldEnum | CommentaireScalarFieldEnum[]
  }

  /**
   * Commentaire create
   */
  export type CommentaireCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    /**
     * The data needed to create a Commentaire.
     */
    data: XOR<CommentaireCreateInput, CommentaireUncheckedCreateInput>
  }

  /**
   * Commentaire createMany
   */
  export type CommentaireCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Commentaires.
     */
    data: CommentaireCreateManyInput | CommentaireCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Commentaire update
   */
  export type CommentaireUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    /**
     * The data needed to update a Commentaire.
     */
    data: XOR<CommentaireUpdateInput, CommentaireUncheckedUpdateInput>
    /**
     * Choose, which Commentaire to update.
     */
    where: CommentaireWhereUniqueInput
  }

  /**
   * Commentaire updateMany
   */
  export type CommentaireUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Commentaires.
     */
    data: XOR<CommentaireUpdateManyMutationInput, CommentaireUncheckedUpdateManyInput>
    /**
     * Filter which Commentaires to update
     */
    where?: CommentaireWhereInput
    /**
     * Limit how many Commentaires to update.
     */
    limit?: number
  }

  /**
   * Commentaire upsert
   */
  export type CommentaireUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    /**
     * The filter to search for the Commentaire to update in case it exists.
     */
    where: CommentaireWhereUniqueInput
    /**
     * In case the Commentaire found by the `where` argument doesn't exist, create a new Commentaire with this data.
     */
    create: XOR<CommentaireCreateInput, CommentaireUncheckedCreateInput>
    /**
     * In case the Commentaire was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentaireUpdateInput, CommentaireUncheckedUpdateInput>
  }

  /**
   * Commentaire delete
   */
  export type CommentaireDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    /**
     * Filter which Commentaire to delete.
     */
    where: CommentaireWhereUniqueInput
  }

  /**
   * Commentaire deleteMany
   */
  export type CommentaireDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Commentaires to delete
     */
    where?: CommentaireWhereInput
    /**
     * Limit how many Commentaires to delete.
     */
    limit?: number
  }

  /**
   * Commentaire without action
   */
  export type CommentaireDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
  }


  /**
   * Model Notation
   */

  export type AggregateNotation = {
    _count: NotationCountAggregateOutputType | null
    _avg: NotationAvgAggregateOutputType | null
    _sum: NotationSumAggregateOutputType | null
    _min: NotationMinAggregateOutputType | null
    _max: NotationMaxAggregateOutputType | null
  }

  export type NotationAvgAggregateOutputType = {
    note: number | null
  }

  export type NotationSumAggregateOutputType = {
    note: number | null
  }

  export type NotationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    ressourceId: string | null
    note: number | null
    dateNotation: Date | null
  }

  export type NotationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    ressourceId: string | null
    note: number | null
    dateNotation: Date | null
  }

  export type NotationCountAggregateOutputType = {
    id: number
    userId: number
    ressourceId: number
    note: number
    dateNotation: number
    _all: number
  }


  export type NotationAvgAggregateInputType = {
    note?: true
  }

  export type NotationSumAggregateInputType = {
    note?: true
  }

  export type NotationMinAggregateInputType = {
    id?: true
    userId?: true
    ressourceId?: true
    note?: true
    dateNotation?: true
  }

  export type NotationMaxAggregateInputType = {
    id?: true
    userId?: true
    ressourceId?: true
    note?: true
    dateNotation?: true
  }

  export type NotationCountAggregateInputType = {
    id?: true
    userId?: true
    ressourceId?: true
    note?: true
    dateNotation?: true
    _all?: true
  }

  export type NotationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notation to aggregate.
     */
    where?: NotationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notations to fetch.
     */
    orderBy?: NotationOrderByWithRelationInput | NotationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notations
    **/
    _count?: true | NotationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotationMaxAggregateInputType
  }

  export type GetNotationAggregateType<T extends NotationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotation[P]>
      : GetScalarType<T[P], AggregateNotation[P]>
  }




  export type NotationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotationWhereInput
    orderBy?: NotationOrderByWithAggregationInput | NotationOrderByWithAggregationInput[]
    by: NotationScalarFieldEnum[] | NotationScalarFieldEnum
    having?: NotationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotationCountAggregateInputType | true
    _avg?: NotationAvgAggregateInputType
    _sum?: NotationSumAggregateInputType
    _min?: NotationMinAggregateInputType
    _max?: NotationMaxAggregateInputType
  }

  export type NotationGroupByOutputType = {
    id: string
    userId: string
    ressourceId: string
    note: number
    dateNotation: Date
    _count: NotationCountAggregateOutputType | null
    _avg: NotationAvgAggregateOutputType | null
    _sum: NotationSumAggregateOutputType | null
    _min: NotationMinAggregateOutputType | null
    _max: NotationMaxAggregateOutputType | null
  }

  type GetNotationGroupByPayload<T extends NotationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotationGroupByOutputType[P]>
            : GetScalarType<T[P], NotationGroupByOutputType[P]>
        }
      >
    >


  export type NotationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ressourceId?: boolean
    note?: boolean
    dateNotation?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    ressource?: boolean | RessourceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notation"]>



  export type NotationSelectScalar = {
    id?: boolean
    userId?: boolean
    ressourceId?: boolean
    note?: boolean
    dateNotation?: boolean
  }

  export type NotationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "ressourceId" | "note" | "dateNotation", ExtArgs["result"]["notation"]>
  export type NotationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    ressource?: boolean | RessourceDefaultArgs<ExtArgs>
  }

  export type $NotationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notation"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      ressource: Prisma.$RessourcePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      ressourceId: string
      note: number
      dateNotation: Date
    }, ExtArgs["result"]["notation"]>
    composites: {}
  }

  type NotationGetPayload<S extends boolean | null | undefined | NotationDefaultArgs> = $Result.GetResult<Prisma.$NotationPayload, S>

  type NotationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotationCountAggregateInputType | true
    }

  export interface NotationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notation'], meta: { name: 'Notation' } }
    /**
     * Find zero or one Notation that matches the filter.
     * @param {NotationFindUniqueArgs} args - Arguments to find a Notation
     * @example
     * // Get one Notation
     * const notation = await prisma.notation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotationFindUniqueArgs>(args: SelectSubset<T, NotationFindUniqueArgs<ExtArgs>>): Prisma__NotationClient<$Result.GetResult<Prisma.$NotationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotationFindUniqueOrThrowArgs} args - Arguments to find a Notation
     * @example
     * // Get one Notation
     * const notation = await prisma.notation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotationClient<$Result.GetResult<Prisma.$NotationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotationFindFirstArgs} args - Arguments to find a Notation
     * @example
     * // Get one Notation
     * const notation = await prisma.notation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotationFindFirstArgs>(args?: SelectSubset<T, NotationFindFirstArgs<ExtArgs>>): Prisma__NotationClient<$Result.GetResult<Prisma.$NotationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotationFindFirstOrThrowArgs} args - Arguments to find a Notation
     * @example
     * // Get one Notation
     * const notation = await prisma.notation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotationClient<$Result.GetResult<Prisma.$NotationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notations
     * const notations = await prisma.notation.findMany()
     * 
     * // Get first 10 Notations
     * const notations = await prisma.notation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notationWithIdOnly = await prisma.notation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotationFindManyArgs>(args?: SelectSubset<T, NotationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notation.
     * @param {NotationCreateArgs} args - Arguments to create a Notation.
     * @example
     * // Create one Notation
     * const Notation = await prisma.notation.create({
     *   data: {
     *     // ... data to create a Notation
     *   }
     * })
     * 
     */
    create<T extends NotationCreateArgs>(args: SelectSubset<T, NotationCreateArgs<ExtArgs>>): Prisma__NotationClient<$Result.GetResult<Prisma.$NotationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notations.
     * @param {NotationCreateManyArgs} args - Arguments to create many Notations.
     * @example
     * // Create many Notations
     * const notation = await prisma.notation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotationCreateManyArgs>(args?: SelectSubset<T, NotationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notation.
     * @param {NotationDeleteArgs} args - Arguments to delete one Notation.
     * @example
     * // Delete one Notation
     * const Notation = await prisma.notation.delete({
     *   where: {
     *     // ... filter to delete one Notation
     *   }
     * })
     * 
     */
    delete<T extends NotationDeleteArgs>(args: SelectSubset<T, NotationDeleteArgs<ExtArgs>>): Prisma__NotationClient<$Result.GetResult<Prisma.$NotationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notation.
     * @param {NotationUpdateArgs} args - Arguments to update one Notation.
     * @example
     * // Update one Notation
     * const notation = await prisma.notation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotationUpdateArgs>(args: SelectSubset<T, NotationUpdateArgs<ExtArgs>>): Prisma__NotationClient<$Result.GetResult<Prisma.$NotationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notations.
     * @param {NotationDeleteManyArgs} args - Arguments to filter Notations to delete.
     * @example
     * // Delete a few Notations
     * const { count } = await prisma.notation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotationDeleteManyArgs>(args?: SelectSubset<T, NotationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notations
     * const notation = await prisma.notation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotationUpdateManyArgs>(args: SelectSubset<T, NotationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notation.
     * @param {NotationUpsertArgs} args - Arguments to update or create a Notation.
     * @example
     * // Update or create a Notation
     * const notation = await prisma.notation.upsert({
     *   create: {
     *     // ... data to create a Notation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notation we want to update
     *   }
     * })
     */
    upsert<T extends NotationUpsertArgs>(args: SelectSubset<T, NotationUpsertArgs<ExtArgs>>): Prisma__NotationClient<$Result.GetResult<Prisma.$NotationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotationCountArgs} args - Arguments to filter Notations to count.
     * @example
     * // Count the number of Notations
     * const count = await prisma.notation.count({
     *   where: {
     *     // ... the filter for the Notations we want to count
     *   }
     * })
    **/
    count<T extends NotationCountArgs>(
      args?: Subset<T, NotationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotationAggregateArgs>(args: Subset<T, NotationAggregateArgs>): Prisma.PrismaPromise<GetNotationAggregateType<T>>

    /**
     * Group by Notation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotationGroupByArgs['orderBy'] }
        : { orderBy?: NotationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notation model
   */
  readonly fields: NotationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ressource<T extends RessourceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RessourceDefaultArgs<ExtArgs>>): Prisma__RessourceClient<$Result.GetResult<Prisma.$RessourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notation model
   */
  interface NotationFieldRefs {
    readonly id: FieldRef<"Notation", 'String'>
    readonly userId: FieldRef<"Notation", 'String'>
    readonly ressourceId: FieldRef<"Notation", 'String'>
    readonly note: FieldRef<"Notation", 'Int'>
    readonly dateNotation: FieldRef<"Notation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notation findUnique
   */
  export type NotationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notation
     */
    select?: NotationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notation
     */
    omit?: NotationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotationInclude<ExtArgs> | null
    /**
     * Filter, which Notation to fetch.
     */
    where: NotationWhereUniqueInput
  }

  /**
   * Notation findUniqueOrThrow
   */
  export type NotationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notation
     */
    select?: NotationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notation
     */
    omit?: NotationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotationInclude<ExtArgs> | null
    /**
     * Filter, which Notation to fetch.
     */
    where: NotationWhereUniqueInput
  }

  /**
   * Notation findFirst
   */
  export type NotationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notation
     */
    select?: NotationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notation
     */
    omit?: NotationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotationInclude<ExtArgs> | null
    /**
     * Filter, which Notation to fetch.
     */
    where?: NotationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notations to fetch.
     */
    orderBy?: NotationOrderByWithRelationInput | NotationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notations.
     */
    cursor?: NotationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notations.
     */
    distinct?: NotationScalarFieldEnum | NotationScalarFieldEnum[]
  }

  /**
   * Notation findFirstOrThrow
   */
  export type NotationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notation
     */
    select?: NotationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notation
     */
    omit?: NotationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotationInclude<ExtArgs> | null
    /**
     * Filter, which Notation to fetch.
     */
    where?: NotationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notations to fetch.
     */
    orderBy?: NotationOrderByWithRelationInput | NotationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notations.
     */
    cursor?: NotationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notations.
     */
    distinct?: NotationScalarFieldEnum | NotationScalarFieldEnum[]
  }

  /**
   * Notation findMany
   */
  export type NotationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notation
     */
    select?: NotationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notation
     */
    omit?: NotationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotationInclude<ExtArgs> | null
    /**
     * Filter, which Notations to fetch.
     */
    where?: NotationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notations to fetch.
     */
    orderBy?: NotationOrderByWithRelationInput | NotationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notations.
     */
    cursor?: NotationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notations.
     */
    skip?: number
    distinct?: NotationScalarFieldEnum | NotationScalarFieldEnum[]
  }

  /**
   * Notation create
   */
  export type NotationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notation
     */
    select?: NotationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notation
     */
    omit?: NotationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notation.
     */
    data: XOR<NotationCreateInput, NotationUncheckedCreateInput>
  }

  /**
   * Notation createMany
   */
  export type NotationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notations.
     */
    data: NotationCreateManyInput | NotationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notation update
   */
  export type NotationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notation
     */
    select?: NotationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notation
     */
    omit?: NotationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notation.
     */
    data: XOR<NotationUpdateInput, NotationUncheckedUpdateInput>
    /**
     * Choose, which Notation to update.
     */
    where: NotationWhereUniqueInput
  }

  /**
   * Notation updateMany
   */
  export type NotationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notations.
     */
    data: XOR<NotationUpdateManyMutationInput, NotationUncheckedUpdateManyInput>
    /**
     * Filter which Notations to update
     */
    where?: NotationWhereInput
    /**
     * Limit how many Notations to update.
     */
    limit?: number
  }

  /**
   * Notation upsert
   */
  export type NotationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notation
     */
    select?: NotationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notation
     */
    omit?: NotationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notation to update in case it exists.
     */
    where: NotationWhereUniqueInput
    /**
     * In case the Notation found by the `where` argument doesn't exist, create a new Notation with this data.
     */
    create: XOR<NotationCreateInput, NotationUncheckedCreateInput>
    /**
     * In case the Notation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotationUpdateInput, NotationUncheckedUpdateInput>
  }

  /**
   * Notation delete
   */
  export type NotationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notation
     */
    select?: NotationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notation
     */
    omit?: NotationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotationInclude<ExtArgs> | null
    /**
     * Filter which Notation to delete.
     */
    where: NotationWhereUniqueInput
  }

  /**
   * Notation deleteMany
   */
  export type NotationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notations to delete
     */
    where?: NotationWhereInput
    /**
     * Limit how many Notations to delete.
     */
    limit?: number
  }

  /**
   * Notation without action
   */
  export type NotationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notation
     */
    select?: NotationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notation
     */
    omit?: NotationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotationInclude<ExtArgs> | null
  }


  /**
   * Model HistoriqueAcces
   */

  export type AggregateHistoriqueAcces = {
    _count: HistoriqueAccesCountAggregateOutputType | null
    _min: HistoriqueAccesMinAggregateOutputType | null
    _max: HistoriqueAccesMaxAggregateOutputType | null
  }

  export type HistoriqueAccesMinAggregateOutputType = {
    id: string | null
    userId: string | null
    ressourceId: string | null
    dateAcces: Date | null
    typeAcces: $Enums.TypeAcces | null
    ipAcces: string | null
    universiteSrc: string | null
  }

  export type HistoriqueAccesMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    ressourceId: string | null
    dateAcces: Date | null
    typeAcces: $Enums.TypeAcces | null
    ipAcces: string | null
    universiteSrc: string | null
  }

  export type HistoriqueAccesCountAggregateOutputType = {
    id: number
    userId: number
    ressourceId: number
    dateAcces: number
    typeAcces: number
    ipAcces: number
    universiteSrc: number
    _all: number
  }


  export type HistoriqueAccesMinAggregateInputType = {
    id?: true
    userId?: true
    ressourceId?: true
    dateAcces?: true
    typeAcces?: true
    ipAcces?: true
    universiteSrc?: true
  }

  export type HistoriqueAccesMaxAggregateInputType = {
    id?: true
    userId?: true
    ressourceId?: true
    dateAcces?: true
    typeAcces?: true
    ipAcces?: true
    universiteSrc?: true
  }

  export type HistoriqueAccesCountAggregateInputType = {
    id?: true
    userId?: true
    ressourceId?: true
    dateAcces?: true
    typeAcces?: true
    ipAcces?: true
    universiteSrc?: true
    _all?: true
  }

  export type HistoriqueAccesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistoriqueAcces to aggregate.
     */
    where?: HistoriqueAccesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoriqueAcces to fetch.
     */
    orderBy?: HistoriqueAccesOrderByWithRelationInput | HistoriqueAccesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HistoriqueAccesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoriqueAcces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoriqueAcces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HistoriqueAcces
    **/
    _count?: true | HistoriqueAccesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HistoriqueAccesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HistoriqueAccesMaxAggregateInputType
  }

  export type GetHistoriqueAccesAggregateType<T extends HistoriqueAccesAggregateArgs> = {
        [P in keyof T & keyof AggregateHistoriqueAcces]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistoriqueAcces[P]>
      : GetScalarType<T[P], AggregateHistoriqueAcces[P]>
  }




  export type HistoriqueAccesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoriqueAccesWhereInput
    orderBy?: HistoriqueAccesOrderByWithAggregationInput | HistoriqueAccesOrderByWithAggregationInput[]
    by: HistoriqueAccesScalarFieldEnum[] | HistoriqueAccesScalarFieldEnum
    having?: HistoriqueAccesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HistoriqueAccesCountAggregateInputType | true
    _min?: HistoriqueAccesMinAggregateInputType
    _max?: HistoriqueAccesMaxAggregateInputType
  }

  export type HistoriqueAccesGroupByOutputType = {
    id: string
    userId: string
    ressourceId: string
    dateAcces: Date
    typeAcces: $Enums.TypeAcces
    ipAcces: string
    universiteSrc: string | null
    _count: HistoriqueAccesCountAggregateOutputType | null
    _min: HistoriqueAccesMinAggregateOutputType | null
    _max: HistoriqueAccesMaxAggregateOutputType | null
  }

  type GetHistoriqueAccesGroupByPayload<T extends HistoriqueAccesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HistoriqueAccesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HistoriqueAccesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HistoriqueAccesGroupByOutputType[P]>
            : GetScalarType<T[P], HistoriqueAccesGroupByOutputType[P]>
        }
      >
    >


  export type HistoriqueAccesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ressourceId?: boolean
    dateAcces?: boolean
    typeAcces?: boolean
    ipAcces?: boolean
    universiteSrc?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    ressource?: boolean | RessourceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historiqueAcces"]>



  export type HistoriqueAccesSelectScalar = {
    id?: boolean
    userId?: boolean
    ressourceId?: boolean
    dateAcces?: boolean
    typeAcces?: boolean
    ipAcces?: boolean
    universiteSrc?: boolean
  }

  export type HistoriqueAccesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "ressourceId" | "dateAcces" | "typeAcces" | "ipAcces" | "universiteSrc", ExtArgs["result"]["historiqueAcces"]>
  export type HistoriqueAccesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    ressource?: boolean | RessourceDefaultArgs<ExtArgs>
  }

  export type $HistoriqueAccesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HistoriqueAcces"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      ressource: Prisma.$RessourcePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      ressourceId: string
      dateAcces: Date
      typeAcces: $Enums.TypeAcces
      ipAcces: string
      universiteSrc: string | null
    }, ExtArgs["result"]["historiqueAcces"]>
    composites: {}
  }

  type HistoriqueAccesGetPayload<S extends boolean | null | undefined | HistoriqueAccesDefaultArgs> = $Result.GetResult<Prisma.$HistoriqueAccesPayload, S>

  type HistoriqueAccesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HistoriqueAccesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HistoriqueAccesCountAggregateInputType | true
    }

  export interface HistoriqueAccesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HistoriqueAcces'], meta: { name: 'HistoriqueAcces' } }
    /**
     * Find zero or one HistoriqueAcces that matches the filter.
     * @param {HistoriqueAccesFindUniqueArgs} args - Arguments to find a HistoriqueAcces
     * @example
     * // Get one HistoriqueAcces
     * const historiqueAcces = await prisma.historiqueAcces.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HistoriqueAccesFindUniqueArgs>(args: SelectSubset<T, HistoriqueAccesFindUniqueArgs<ExtArgs>>): Prisma__HistoriqueAccesClient<$Result.GetResult<Prisma.$HistoriqueAccesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HistoriqueAcces that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HistoriqueAccesFindUniqueOrThrowArgs} args - Arguments to find a HistoriqueAcces
     * @example
     * // Get one HistoriqueAcces
     * const historiqueAcces = await prisma.historiqueAcces.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HistoriqueAccesFindUniqueOrThrowArgs>(args: SelectSubset<T, HistoriqueAccesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HistoriqueAccesClient<$Result.GetResult<Prisma.$HistoriqueAccesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HistoriqueAcces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoriqueAccesFindFirstArgs} args - Arguments to find a HistoriqueAcces
     * @example
     * // Get one HistoriqueAcces
     * const historiqueAcces = await prisma.historiqueAcces.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HistoriqueAccesFindFirstArgs>(args?: SelectSubset<T, HistoriqueAccesFindFirstArgs<ExtArgs>>): Prisma__HistoriqueAccesClient<$Result.GetResult<Prisma.$HistoriqueAccesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HistoriqueAcces that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoriqueAccesFindFirstOrThrowArgs} args - Arguments to find a HistoriqueAcces
     * @example
     * // Get one HistoriqueAcces
     * const historiqueAcces = await prisma.historiqueAcces.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HistoriqueAccesFindFirstOrThrowArgs>(args?: SelectSubset<T, HistoriqueAccesFindFirstOrThrowArgs<ExtArgs>>): Prisma__HistoriqueAccesClient<$Result.GetResult<Prisma.$HistoriqueAccesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HistoriqueAcces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoriqueAccesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HistoriqueAcces
     * const historiqueAcces = await prisma.historiqueAcces.findMany()
     * 
     * // Get first 10 HistoriqueAcces
     * const historiqueAcces = await prisma.historiqueAcces.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const historiqueAccesWithIdOnly = await prisma.historiqueAcces.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HistoriqueAccesFindManyArgs>(args?: SelectSubset<T, HistoriqueAccesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoriqueAccesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HistoriqueAcces.
     * @param {HistoriqueAccesCreateArgs} args - Arguments to create a HistoriqueAcces.
     * @example
     * // Create one HistoriqueAcces
     * const HistoriqueAcces = await prisma.historiqueAcces.create({
     *   data: {
     *     // ... data to create a HistoriqueAcces
     *   }
     * })
     * 
     */
    create<T extends HistoriqueAccesCreateArgs>(args: SelectSubset<T, HistoriqueAccesCreateArgs<ExtArgs>>): Prisma__HistoriqueAccesClient<$Result.GetResult<Prisma.$HistoriqueAccesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HistoriqueAcces.
     * @param {HistoriqueAccesCreateManyArgs} args - Arguments to create many HistoriqueAcces.
     * @example
     * // Create many HistoriqueAcces
     * const historiqueAcces = await prisma.historiqueAcces.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HistoriqueAccesCreateManyArgs>(args?: SelectSubset<T, HistoriqueAccesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HistoriqueAcces.
     * @param {HistoriqueAccesDeleteArgs} args - Arguments to delete one HistoriqueAcces.
     * @example
     * // Delete one HistoriqueAcces
     * const HistoriqueAcces = await prisma.historiqueAcces.delete({
     *   where: {
     *     // ... filter to delete one HistoriqueAcces
     *   }
     * })
     * 
     */
    delete<T extends HistoriqueAccesDeleteArgs>(args: SelectSubset<T, HistoriqueAccesDeleteArgs<ExtArgs>>): Prisma__HistoriqueAccesClient<$Result.GetResult<Prisma.$HistoriqueAccesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HistoriqueAcces.
     * @param {HistoriqueAccesUpdateArgs} args - Arguments to update one HistoriqueAcces.
     * @example
     * // Update one HistoriqueAcces
     * const historiqueAcces = await prisma.historiqueAcces.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HistoriqueAccesUpdateArgs>(args: SelectSubset<T, HistoriqueAccesUpdateArgs<ExtArgs>>): Prisma__HistoriqueAccesClient<$Result.GetResult<Prisma.$HistoriqueAccesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HistoriqueAcces.
     * @param {HistoriqueAccesDeleteManyArgs} args - Arguments to filter HistoriqueAcces to delete.
     * @example
     * // Delete a few HistoriqueAcces
     * const { count } = await prisma.historiqueAcces.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HistoriqueAccesDeleteManyArgs>(args?: SelectSubset<T, HistoriqueAccesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HistoriqueAcces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoriqueAccesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HistoriqueAcces
     * const historiqueAcces = await prisma.historiqueAcces.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HistoriqueAccesUpdateManyArgs>(args: SelectSubset<T, HistoriqueAccesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HistoriqueAcces.
     * @param {HistoriqueAccesUpsertArgs} args - Arguments to update or create a HistoriqueAcces.
     * @example
     * // Update or create a HistoriqueAcces
     * const historiqueAcces = await prisma.historiqueAcces.upsert({
     *   create: {
     *     // ... data to create a HistoriqueAcces
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HistoriqueAcces we want to update
     *   }
     * })
     */
    upsert<T extends HistoriqueAccesUpsertArgs>(args: SelectSubset<T, HistoriqueAccesUpsertArgs<ExtArgs>>): Prisma__HistoriqueAccesClient<$Result.GetResult<Prisma.$HistoriqueAccesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HistoriqueAcces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoriqueAccesCountArgs} args - Arguments to filter HistoriqueAcces to count.
     * @example
     * // Count the number of HistoriqueAcces
     * const count = await prisma.historiqueAcces.count({
     *   where: {
     *     // ... the filter for the HistoriqueAcces we want to count
     *   }
     * })
    **/
    count<T extends HistoriqueAccesCountArgs>(
      args?: Subset<T, HistoriqueAccesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HistoriqueAccesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HistoriqueAcces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoriqueAccesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HistoriqueAccesAggregateArgs>(args: Subset<T, HistoriqueAccesAggregateArgs>): Prisma.PrismaPromise<GetHistoriqueAccesAggregateType<T>>

    /**
     * Group by HistoriqueAcces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoriqueAccesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HistoriqueAccesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HistoriqueAccesGroupByArgs['orderBy'] }
        : { orderBy?: HistoriqueAccesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HistoriqueAccesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistoriqueAccesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HistoriqueAcces model
   */
  readonly fields: HistoriqueAccesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HistoriqueAcces.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HistoriqueAccesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ressource<T extends RessourceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RessourceDefaultArgs<ExtArgs>>): Prisma__RessourceClient<$Result.GetResult<Prisma.$RessourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HistoriqueAcces model
   */
  interface HistoriqueAccesFieldRefs {
    readonly id: FieldRef<"HistoriqueAcces", 'String'>
    readonly userId: FieldRef<"HistoriqueAcces", 'String'>
    readonly ressourceId: FieldRef<"HistoriqueAcces", 'String'>
    readonly dateAcces: FieldRef<"HistoriqueAcces", 'DateTime'>
    readonly typeAcces: FieldRef<"HistoriqueAcces", 'TypeAcces'>
    readonly ipAcces: FieldRef<"HistoriqueAcces", 'String'>
    readonly universiteSrc: FieldRef<"HistoriqueAcces", 'String'>
  }
    

  // Custom InputTypes
  /**
   * HistoriqueAcces findUnique
   */
  export type HistoriqueAccesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriqueAcces
     */
    select?: HistoriqueAccesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriqueAcces
     */
    omit?: HistoriqueAccesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriqueAccesInclude<ExtArgs> | null
    /**
     * Filter, which HistoriqueAcces to fetch.
     */
    where: HistoriqueAccesWhereUniqueInput
  }

  /**
   * HistoriqueAcces findUniqueOrThrow
   */
  export type HistoriqueAccesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriqueAcces
     */
    select?: HistoriqueAccesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriqueAcces
     */
    omit?: HistoriqueAccesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriqueAccesInclude<ExtArgs> | null
    /**
     * Filter, which HistoriqueAcces to fetch.
     */
    where: HistoriqueAccesWhereUniqueInput
  }

  /**
   * HistoriqueAcces findFirst
   */
  export type HistoriqueAccesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriqueAcces
     */
    select?: HistoriqueAccesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriqueAcces
     */
    omit?: HistoriqueAccesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriqueAccesInclude<ExtArgs> | null
    /**
     * Filter, which HistoriqueAcces to fetch.
     */
    where?: HistoriqueAccesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoriqueAcces to fetch.
     */
    orderBy?: HistoriqueAccesOrderByWithRelationInput | HistoriqueAccesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistoriqueAcces.
     */
    cursor?: HistoriqueAccesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoriqueAcces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoriqueAcces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistoriqueAcces.
     */
    distinct?: HistoriqueAccesScalarFieldEnum | HistoriqueAccesScalarFieldEnum[]
  }

  /**
   * HistoriqueAcces findFirstOrThrow
   */
  export type HistoriqueAccesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriqueAcces
     */
    select?: HistoriqueAccesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriqueAcces
     */
    omit?: HistoriqueAccesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriqueAccesInclude<ExtArgs> | null
    /**
     * Filter, which HistoriqueAcces to fetch.
     */
    where?: HistoriqueAccesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoriqueAcces to fetch.
     */
    orderBy?: HistoriqueAccesOrderByWithRelationInput | HistoriqueAccesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistoriqueAcces.
     */
    cursor?: HistoriqueAccesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoriqueAcces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoriqueAcces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistoriqueAcces.
     */
    distinct?: HistoriqueAccesScalarFieldEnum | HistoriqueAccesScalarFieldEnum[]
  }

  /**
   * HistoriqueAcces findMany
   */
  export type HistoriqueAccesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriqueAcces
     */
    select?: HistoriqueAccesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriqueAcces
     */
    omit?: HistoriqueAccesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriqueAccesInclude<ExtArgs> | null
    /**
     * Filter, which HistoriqueAcces to fetch.
     */
    where?: HistoriqueAccesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoriqueAcces to fetch.
     */
    orderBy?: HistoriqueAccesOrderByWithRelationInput | HistoriqueAccesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HistoriqueAcces.
     */
    cursor?: HistoriqueAccesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoriqueAcces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoriqueAcces.
     */
    skip?: number
    distinct?: HistoriqueAccesScalarFieldEnum | HistoriqueAccesScalarFieldEnum[]
  }

  /**
   * HistoriqueAcces create
   */
  export type HistoriqueAccesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriqueAcces
     */
    select?: HistoriqueAccesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriqueAcces
     */
    omit?: HistoriqueAccesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriqueAccesInclude<ExtArgs> | null
    /**
     * The data needed to create a HistoriqueAcces.
     */
    data: XOR<HistoriqueAccesCreateInput, HistoriqueAccesUncheckedCreateInput>
  }

  /**
   * HistoriqueAcces createMany
   */
  export type HistoriqueAccesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HistoriqueAcces.
     */
    data: HistoriqueAccesCreateManyInput | HistoriqueAccesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HistoriqueAcces update
   */
  export type HistoriqueAccesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriqueAcces
     */
    select?: HistoriqueAccesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriqueAcces
     */
    omit?: HistoriqueAccesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriqueAccesInclude<ExtArgs> | null
    /**
     * The data needed to update a HistoriqueAcces.
     */
    data: XOR<HistoriqueAccesUpdateInput, HistoriqueAccesUncheckedUpdateInput>
    /**
     * Choose, which HistoriqueAcces to update.
     */
    where: HistoriqueAccesWhereUniqueInput
  }

  /**
   * HistoriqueAcces updateMany
   */
  export type HistoriqueAccesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HistoriqueAcces.
     */
    data: XOR<HistoriqueAccesUpdateManyMutationInput, HistoriqueAccesUncheckedUpdateManyInput>
    /**
     * Filter which HistoriqueAcces to update
     */
    where?: HistoriqueAccesWhereInput
    /**
     * Limit how many HistoriqueAcces to update.
     */
    limit?: number
  }

  /**
   * HistoriqueAcces upsert
   */
  export type HistoriqueAccesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriqueAcces
     */
    select?: HistoriqueAccesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriqueAcces
     */
    omit?: HistoriqueAccesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriqueAccesInclude<ExtArgs> | null
    /**
     * The filter to search for the HistoriqueAcces to update in case it exists.
     */
    where: HistoriqueAccesWhereUniqueInput
    /**
     * In case the HistoriqueAcces found by the `where` argument doesn't exist, create a new HistoriqueAcces with this data.
     */
    create: XOR<HistoriqueAccesCreateInput, HistoriqueAccesUncheckedCreateInput>
    /**
     * In case the HistoriqueAcces was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HistoriqueAccesUpdateInput, HistoriqueAccesUncheckedUpdateInput>
  }

  /**
   * HistoriqueAcces delete
   */
  export type HistoriqueAccesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriqueAcces
     */
    select?: HistoriqueAccesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriqueAcces
     */
    omit?: HistoriqueAccesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriqueAccesInclude<ExtArgs> | null
    /**
     * Filter which HistoriqueAcces to delete.
     */
    where: HistoriqueAccesWhereUniqueInput
  }

  /**
   * HistoriqueAcces deleteMany
   */
  export type HistoriqueAccesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistoriqueAcces to delete
     */
    where?: HistoriqueAccesWhereInput
    /**
     * Limit how many HistoriqueAcces to delete.
     */
    limit?: number
  }

  /**
   * HistoriqueAcces without action
   */
  export type HistoriqueAccesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriqueAcces
     */
    select?: HistoriqueAccesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriqueAcces
     */
    omit?: HistoriqueAccesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriqueAccesInclude<ExtArgs> | null
  }


  /**
   * Model DonneesRecommandation
   */

  export type AggregateDonneesRecommandation = {
    _count: DonneesRecommandationCountAggregateOutputType | null
    _avg: DonneesRecommandationAvgAggregateOutputType | null
    _sum: DonneesRecommandationSumAggregateOutputType | null
    _min: DonneesRecommandationMinAggregateOutputType | null
    _max: DonneesRecommandationMaxAggregateOutputType | null
  }

  export type DonneesRecommandationAvgAggregateOutputType = {
    score: number | null
  }

  export type DonneesRecommandationSumAggregateOutputType = {
    score: number | null
  }

  export type DonneesRecommandationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    ressourceId: string | null
    score: number | null
    typeInteraction: $Enums.TypeInteraction | null
    dateDonnee: Date | null
  }

  export type DonneesRecommandationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    ressourceId: string | null
    score: number | null
    typeInteraction: $Enums.TypeInteraction | null
    dateDonnee: Date | null
  }

  export type DonneesRecommandationCountAggregateOutputType = {
    id: number
    userId: number
    ressourceId: number
    score: number
    typeInteraction: number
    dateDonnee: number
    _all: number
  }


  export type DonneesRecommandationAvgAggregateInputType = {
    score?: true
  }

  export type DonneesRecommandationSumAggregateInputType = {
    score?: true
  }

  export type DonneesRecommandationMinAggregateInputType = {
    id?: true
    userId?: true
    ressourceId?: true
    score?: true
    typeInteraction?: true
    dateDonnee?: true
  }

  export type DonneesRecommandationMaxAggregateInputType = {
    id?: true
    userId?: true
    ressourceId?: true
    score?: true
    typeInteraction?: true
    dateDonnee?: true
  }

  export type DonneesRecommandationCountAggregateInputType = {
    id?: true
    userId?: true
    ressourceId?: true
    score?: true
    typeInteraction?: true
    dateDonnee?: true
    _all?: true
  }

  export type DonneesRecommandationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DonneesRecommandation to aggregate.
     */
    where?: DonneesRecommandationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DonneesRecommandations to fetch.
     */
    orderBy?: DonneesRecommandationOrderByWithRelationInput | DonneesRecommandationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DonneesRecommandationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DonneesRecommandations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DonneesRecommandations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DonneesRecommandations
    **/
    _count?: true | DonneesRecommandationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DonneesRecommandationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DonneesRecommandationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DonneesRecommandationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DonneesRecommandationMaxAggregateInputType
  }

  export type GetDonneesRecommandationAggregateType<T extends DonneesRecommandationAggregateArgs> = {
        [P in keyof T & keyof AggregateDonneesRecommandation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDonneesRecommandation[P]>
      : GetScalarType<T[P], AggregateDonneesRecommandation[P]>
  }




  export type DonneesRecommandationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonneesRecommandationWhereInput
    orderBy?: DonneesRecommandationOrderByWithAggregationInput | DonneesRecommandationOrderByWithAggregationInput[]
    by: DonneesRecommandationScalarFieldEnum[] | DonneesRecommandationScalarFieldEnum
    having?: DonneesRecommandationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DonneesRecommandationCountAggregateInputType | true
    _avg?: DonneesRecommandationAvgAggregateInputType
    _sum?: DonneesRecommandationSumAggregateInputType
    _min?: DonneesRecommandationMinAggregateInputType
    _max?: DonneesRecommandationMaxAggregateInputType
  }

  export type DonneesRecommandationGroupByOutputType = {
    id: string
    userId: string
    ressourceId: string
    score: number
    typeInteraction: $Enums.TypeInteraction
    dateDonnee: Date
    _count: DonneesRecommandationCountAggregateOutputType | null
    _avg: DonneesRecommandationAvgAggregateOutputType | null
    _sum: DonneesRecommandationSumAggregateOutputType | null
    _min: DonneesRecommandationMinAggregateOutputType | null
    _max: DonneesRecommandationMaxAggregateOutputType | null
  }

  type GetDonneesRecommandationGroupByPayload<T extends DonneesRecommandationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DonneesRecommandationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DonneesRecommandationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DonneesRecommandationGroupByOutputType[P]>
            : GetScalarType<T[P], DonneesRecommandationGroupByOutputType[P]>
        }
      >
    >


  export type DonneesRecommandationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ressourceId?: boolean
    score?: boolean
    typeInteraction?: boolean
    dateDonnee?: boolean
  }, ExtArgs["result"]["donneesRecommandation"]>



  export type DonneesRecommandationSelectScalar = {
    id?: boolean
    userId?: boolean
    ressourceId?: boolean
    score?: boolean
    typeInteraction?: boolean
    dateDonnee?: boolean
  }

  export type DonneesRecommandationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "ressourceId" | "score" | "typeInteraction" | "dateDonnee", ExtArgs["result"]["donneesRecommandation"]>

  export type $DonneesRecommandationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DonneesRecommandation"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      ressourceId: string
      score: number
      typeInteraction: $Enums.TypeInteraction
      dateDonnee: Date
    }, ExtArgs["result"]["donneesRecommandation"]>
    composites: {}
  }

  type DonneesRecommandationGetPayload<S extends boolean | null | undefined | DonneesRecommandationDefaultArgs> = $Result.GetResult<Prisma.$DonneesRecommandationPayload, S>

  type DonneesRecommandationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DonneesRecommandationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DonneesRecommandationCountAggregateInputType | true
    }

  export interface DonneesRecommandationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DonneesRecommandation'], meta: { name: 'DonneesRecommandation' } }
    /**
     * Find zero or one DonneesRecommandation that matches the filter.
     * @param {DonneesRecommandationFindUniqueArgs} args - Arguments to find a DonneesRecommandation
     * @example
     * // Get one DonneesRecommandation
     * const donneesRecommandation = await prisma.donneesRecommandation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DonneesRecommandationFindUniqueArgs>(args: SelectSubset<T, DonneesRecommandationFindUniqueArgs<ExtArgs>>): Prisma__DonneesRecommandationClient<$Result.GetResult<Prisma.$DonneesRecommandationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DonneesRecommandation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DonneesRecommandationFindUniqueOrThrowArgs} args - Arguments to find a DonneesRecommandation
     * @example
     * // Get one DonneesRecommandation
     * const donneesRecommandation = await prisma.donneesRecommandation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DonneesRecommandationFindUniqueOrThrowArgs>(args: SelectSubset<T, DonneesRecommandationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DonneesRecommandationClient<$Result.GetResult<Prisma.$DonneesRecommandationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DonneesRecommandation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonneesRecommandationFindFirstArgs} args - Arguments to find a DonneesRecommandation
     * @example
     * // Get one DonneesRecommandation
     * const donneesRecommandation = await prisma.donneesRecommandation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DonneesRecommandationFindFirstArgs>(args?: SelectSubset<T, DonneesRecommandationFindFirstArgs<ExtArgs>>): Prisma__DonneesRecommandationClient<$Result.GetResult<Prisma.$DonneesRecommandationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DonneesRecommandation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonneesRecommandationFindFirstOrThrowArgs} args - Arguments to find a DonneesRecommandation
     * @example
     * // Get one DonneesRecommandation
     * const donneesRecommandation = await prisma.donneesRecommandation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DonneesRecommandationFindFirstOrThrowArgs>(args?: SelectSubset<T, DonneesRecommandationFindFirstOrThrowArgs<ExtArgs>>): Prisma__DonneesRecommandationClient<$Result.GetResult<Prisma.$DonneesRecommandationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DonneesRecommandations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonneesRecommandationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DonneesRecommandations
     * const donneesRecommandations = await prisma.donneesRecommandation.findMany()
     * 
     * // Get first 10 DonneesRecommandations
     * const donneesRecommandations = await prisma.donneesRecommandation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const donneesRecommandationWithIdOnly = await prisma.donneesRecommandation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DonneesRecommandationFindManyArgs>(args?: SelectSubset<T, DonneesRecommandationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonneesRecommandationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DonneesRecommandation.
     * @param {DonneesRecommandationCreateArgs} args - Arguments to create a DonneesRecommandation.
     * @example
     * // Create one DonneesRecommandation
     * const DonneesRecommandation = await prisma.donneesRecommandation.create({
     *   data: {
     *     // ... data to create a DonneesRecommandation
     *   }
     * })
     * 
     */
    create<T extends DonneesRecommandationCreateArgs>(args: SelectSubset<T, DonneesRecommandationCreateArgs<ExtArgs>>): Prisma__DonneesRecommandationClient<$Result.GetResult<Prisma.$DonneesRecommandationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DonneesRecommandations.
     * @param {DonneesRecommandationCreateManyArgs} args - Arguments to create many DonneesRecommandations.
     * @example
     * // Create many DonneesRecommandations
     * const donneesRecommandation = await prisma.donneesRecommandation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DonneesRecommandationCreateManyArgs>(args?: SelectSubset<T, DonneesRecommandationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DonneesRecommandation.
     * @param {DonneesRecommandationDeleteArgs} args - Arguments to delete one DonneesRecommandation.
     * @example
     * // Delete one DonneesRecommandation
     * const DonneesRecommandation = await prisma.donneesRecommandation.delete({
     *   where: {
     *     // ... filter to delete one DonneesRecommandation
     *   }
     * })
     * 
     */
    delete<T extends DonneesRecommandationDeleteArgs>(args: SelectSubset<T, DonneesRecommandationDeleteArgs<ExtArgs>>): Prisma__DonneesRecommandationClient<$Result.GetResult<Prisma.$DonneesRecommandationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DonneesRecommandation.
     * @param {DonneesRecommandationUpdateArgs} args - Arguments to update one DonneesRecommandation.
     * @example
     * // Update one DonneesRecommandation
     * const donneesRecommandation = await prisma.donneesRecommandation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DonneesRecommandationUpdateArgs>(args: SelectSubset<T, DonneesRecommandationUpdateArgs<ExtArgs>>): Prisma__DonneesRecommandationClient<$Result.GetResult<Prisma.$DonneesRecommandationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DonneesRecommandations.
     * @param {DonneesRecommandationDeleteManyArgs} args - Arguments to filter DonneesRecommandations to delete.
     * @example
     * // Delete a few DonneesRecommandations
     * const { count } = await prisma.donneesRecommandation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DonneesRecommandationDeleteManyArgs>(args?: SelectSubset<T, DonneesRecommandationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DonneesRecommandations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonneesRecommandationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DonneesRecommandations
     * const donneesRecommandation = await prisma.donneesRecommandation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DonneesRecommandationUpdateManyArgs>(args: SelectSubset<T, DonneesRecommandationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DonneesRecommandation.
     * @param {DonneesRecommandationUpsertArgs} args - Arguments to update or create a DonneesRecommandation.
     * @example
     * // Update or create a DonneesRecommandation
     * const donneesRecommandation = await prisma.donneesRecommandation.upsert({
     *   create: {
     *     // ... data to create a DonneesRecommandation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DonneesRecommandation we want to update
     *   }
     * })
     */
    upsert<T extends DonneesRecommandationUpsertArgs>(args: SelectSubset<T, DonneesRecommandationUpsertArgs<ExtArgs>>): Prisma__DonneesRecommandationClient<$Result.GetResult<Prisma.$DonneesRecommandationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DonneesRecommandations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonneesRecommandationCountArgs} args - Arguments to filter DonneesRecommandations to count.
     * @example
     * // Count the number of DonneesRecommandations
     * const count = await prisma.donneesRecommandation.count({
     *   where: {
     *     // ... the filter for the DonneesRecommandations we want to count
     *   }
     * })
    **/
    count<T extends DonneesRecommandationCountArgs>(
      args?: Subset<T, DonneesRecommandationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DonneesRecommandationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DonneesRecommandation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonneesRecommandationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DonneesRecommandationAggregateArgs>(args: Subset<T, DonneesRecommandationAggregateArgs>): Prisma.PrismaPromise<GetDonneesRecommandationAggregateType<T>>

    /**
     * Group by DonneesRecommandation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonneesRecommandationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DonneesRecommandationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DonneesRecommandationGroupByArgs['orderBy'] }
        : { orderBy?: DonneesRecommandationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DonneesRecommandationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDonneesRecommandationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DonneesRecommandation model
   */
  readonly fields: DonneesRecommandationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DonneesRecommandation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DonneesRecommandationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DonneesRecommandation model
   */
  interface DonneesRecommandationFieldRefs {
    readonly id: FieldRef<"DonneesRecommandation", 'String'>
    readonly userId: FieldRef<"DonneesRecommandation", 'String'>
    readonly ressourceId: FieldRef<"DonneesRecommandation", 'String'>
    readonly score: FieldRef<"DonneesRecommandation", 'Float'>
    readonly typeInteraction: FieldRef<"DonneesRecommandation", 'TypeInteraction'>
    readonly dateDonnee: FieldRef<"DonneesRecommandation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DonneesRecommandation findUnique
   */
  export type DonneesRecommandationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonneesRecommandation
     */
    select?: DonneesRecommandationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonneesRecommandation
     */
    omit?: DonneesRecommandationOmit<ExtArgs> | null
    /**
     * Filter, which DonneesRecommandation to fetch.
     */
    where: DonneesRecommandationWhereUniqueInput
  }

  /**
   * DonneesRecommandation findUniqueOrThrow
   */
  export type DonneesRecommandationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonneesRecommandation
     */
    select?: DonneesRecommandationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonneesRecommandation
     */
    omit?: DonneesRecommandationOmit<ExtArgs> | null
    /**
     * Filter, which DonneesRecommandation to fetch.
     */
    where: DonneesRecommandationWhereUniqueInput
  }

  /**
   * DonneesRecommandation findFirst
   */
  export type DonneesRecommandationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonneesRecommandation
     */
    select?: DonneesRecommandationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonneesRecommandation
     */
    omit?: DonneesRecommandationOmit<ExtArgs> | null
    /**
     * Filter, which DonneesRecommandation to fetch.
     */
    where?: DonneesRecommandationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DonneesRecommandations to fetch.
     */
    orderBy?: DonneesRecommandationOrderByWithRelationInput | DonneesRecommandationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DonneesRecommandations.
     */
    cursor?: DonneesRecommandationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DonneesRecommandations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DonneesRecommandations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DonneesRecommandations.
     */
    distinct?: DonneesRecommandationScalarFieldEnum | DonneesRecommandationScalarFieldEnum[]
  }

  /**
   * DonneesRecommandation findFirstOrThrow
   */
  export type DonneesRecommandationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonneesRecommandation
     */
    select?: DonneesRecommandationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonneesRecommandation
     */
    omit?: DonneesRecommandationOmit<ExtArgs> | null
    /**
     * Filter, which DonneesRecommandation to fetch.
     */
    where?: DonneesRecommandationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DonneesRecommandations to fetch.
     */
    orderBy?: DonneesRecommandationOrderByWithRelationInput | DonneesRecommandationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DonneesRecommandations.
     */
    cursor?: DonneesRecommandationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DonneesRecommandations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DonneesRecommandations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DonneesRecommandations.
     */
    distinct?: DonneesRecommandationScalarFieldEnum | DonneesRecommandationScalarFieldEnum[]
  }

  /**
   * DonneesRecommandation findMany
   */
  export type DonneesRecommandationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonneesRecommandation
     */
    select?: DonneesRecommandationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonneesRecommandation
     */
    omit?: DonneesRecommandationOmit<ExtArgs> | null
    /**
     * Filter, which DonneesRecommandations to fetch.
     */
    where?: DonneesRecommandationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DonneesRecommandations to fetch.
     */
    orderBy?: DonneesRecommandationOrderByWithRelationInput | DonneesRecommandationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DonneesRecommandations.
     */
    cursor?: DonneesRecommandationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DonneesRecommandations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DonneesRecommandations.
     */
    skip?: number
    distinct?: DonneesRecommandationScalarFieldEnum | DonneesRecommandationScalarFieldEnum[]
  }

  /**
   * DonneesRecommandation create
   */
  export type DonneesRecommandationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonneesRecommandation
     */
    select?: DonneesRecommandationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonneesRecommandation
     */
    omit?: DonneesRecommandationOmit<ExtArgs> | null
    /**
     * The data needed to create a DonneesRecommandation.
     */
    data: XOR<DonneesRecommandationCreateInput, DonneesRecommandationUncheckedCreateInput>
  }

  /**
   * DonneesRecommandation createMany
   */
  export type DonneesRecommandationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DonneesRecommandations.
     */
    data: DonneesRecommandationCreateManyInput | DonneesRecommandationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DonneesRecommandation update
   */
  export type DonneesRecommandationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonneesRecommandation
     */
    select?: DonneesRecommandationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonneesRecommandation
     */
    omit?: DonneesRecommandationOmit<ExtArgs> | null
    /**
     * The data needed to update a DonneesRecommandation.
     */
    data: XOR<DonneesRecommandationUpdateInput, DonneesRecommandationUncheckedUpdateInput>
    /**
     * Choose, which DonneesRecommandation to update.
     */
    where: DonneesRecommandationWhereUniqueInput
  }

  /**
   * DonneesRecommandation updateMany
   */
  export type DonneesRecommandationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DonneesRecommandations.
     */
    data: XOR<DonneesRecommandationUpdateManyMutationInput, DonneesRecommandationUncheckedUpdateManyInput>
    /**
     * Filter which DonneesRecommandations to update
     */
    where?: DonneesRecommandationWhereInput
    /**
     * Limit how many DonneesRecommandations to update.
     */
    limit?: number
  }

  /**
   * DonneesRecommandation upsert
   */
  export type DonneesRecommandationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonneesRecommandation
     */
    select?: DonneesRecommandationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonneesRecommandation
     */
    omit?: DonneesRecommandationOmit<ExtArgs> | null
    /**
     * The filter to search for the DonneesRecommandation to update in case it exists.
     */
    where: DonneesRecommandationWhereUniqueInput
    /**
     * In case the DonneesRecommandation found by the `where` argument doesn't exist, create a new DonneesRecommandation with this data.
     */
    create: XOR<DonneesRecommandationCreateInput, DonneesRecommandationUncheckedCreateInput>
    /**
     * In case the DonneesRecommandation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DonneesRecommandationUpdateInput, DonneesRecommandationUncheckedUpdateInput>
  }

  /**
   * DonneesRecommandation delete
   */
  export type DonneesRecommandationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonneesRecommandation
     */
    select?: DonneesRecommandationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonneesRecommandation
     */
    omit?: DonneesRecommandationOmit<ExtArgs> | null
    /**
     * Filter which DonneesRecommandation to delete.
     */
    where: DonneesRecommandationWhereUniqueInput
  }

  /**
   * DonneesRecommandation deleteMany
   */
  export type DonneesRecommandationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DonneesRecommandations to delete
     */
    where?: DonneesRecommandationWhereInput
    /**
     * Limit how many DonneesRecommandations to delete.
     */
    limit?: number
  }

  /**
   * DonneesRecommandation without action
   */
  export type DonneesRecommandationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonneesRecommandation
     */
    select?: DonneesRecommandationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonneesRecommandation
     */
    omit?: DonneesRecommandationOmit<ExtArgs> | null
  }


  /**
   * Model Collection
   */

  export type AggregateCollection = {
    _count: CollectionCountAggregateOutputType | null
    _min: CollectionMinAggregateOutputType | null
    _max: CollectionMaxAggregateOutputType | null
  }

  export type CollectionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    nom: string | null
    description: string | null
    estPublique: boolean | null
    dateCreation: Date | null
  }

  export type CollectionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    nom: string | null
    description: string | null
    estPublique: boolean | null
    dateCreation: Date | null
  }

  export type CollectionCountAggregateOutputType = {
    id: number
    userId: number
    nom: number
    description: number
    estPublique: number
    dateCreation: number
    _all: number
  }


  export type CollectionMinAggregateInputType = {
    id?: true
    userId?: true
    nom?: true
    description?: true
    estPublique?: true
    dateCreation?: true
  }

  export type CollectionMaxAggregateInputType = {
    id?: true
    userId?: true
    nom?: true
    description?: true
    estPublique?: true
    dateCreation?: true
  }

  export type CollectionCountAggregateInputType = {
    id?: true
    userId?: true
    nom?: true
    description?: true
    estPublique?: true
    dateCreation?: true
    _all?: true
  }

  export type CollectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Collection to aggregate.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Collections
    **/
    _count?: true | CollectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CollectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CollectionMaxAggregateInputType
  }

  export type GetCollectionAggregateType<T extends CollectionAggregateArgs> = {
        [P in keyof T & keyof AggregateCollection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCollection[P]>
      : GetScalarType<T[P], AggregateCollection[P]>
  }




  export type CollectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollectionWhereInput
    orderBy?: CollectionOrderByWithAggregationInput | CollectionOrderByWithAggregationInput[]
    by: CollectionScalarFieldEnum[] | CollectionScalarFieldEnum
    having?: CollectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CollectionCountAggregateInputType | true
    _min?: CollectionMinAggregateInputType
    _max?: CollectionMaxAggregateInputType
  }

  export type CollectionGroupByOutputType = {
    id: string
    userId: string
    nom: string
    description: string | null
    estPublique: boolean
    dateCreation: Date
    _count: CollectionCountAggregateOutputType | null
    _min: CollectionMinAggregateOutputType | null
    _max: CollectionMaxAggregateOutputType | null
  }

  type GetCollectionGroupByPayload<T extends CollectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CollectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CollectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CollectionGroupByOutputType[P]>
            : GetScalarType<T[P], CollectionGroupByOutputType[P]>
        }
      >
    >


  export type CollectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    nom?: boolean
    description?: boolean
    estPublique?: boolean
    dateCreation?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    ressources?: boolean | Collection$ressourcesArgs<ExtArgs>
    _count?: boolean | CollectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collection"]>



  export type CollectionSelectScalar = {
    id?: boolean
    userId?: boolean
    nom?: boolean
    description?: boolean
    estPublique?: boolean
    dateCreation?: boolean
  }

  export type CollectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "nom" | "description" | "estPublique" | "dateCreation", ExtArgs["result"]["collection"]>
  export type CollectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    ressources?: boolean | Collection$ressourcesArgs<ExtArgs>
    _count?: boolean | CollectionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CollectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Collection"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      ressources: Prisma.$CollectionRessourcePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      nom: string
      description: string | null
      estPublique: boolean
      dateCreation: Date
    }, ExtArgs["result"]["collection"]>
    composites: {}
  }

  type CollectionGetPayload<S extends boolean | null | undefined | CollectionDefaultArgs> = $Result.GetResult<Prisma.$CollectionPayload, S>

  type CollectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CollectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CollectionCountAggregateInputType | true
    }

  export interface CollectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Collection'], meta: { name: 'Collection' } }
    /**
     * Find zero or one Collection that matches the filter.
     * @param {CollectionFindUniqueArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CollectionFindUniqueArgs>(args: SelectSubset<T, CollectionFindUniqueArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Collection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CollectionFindUniqueOrThrowArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CollectionFindUniqueOrThrowArgs>(args: SelectSubset<T, CollectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Collection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionFindFirstArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CollectionFindFirstArgs>(args?: SelectSubset<T, CollectionFindFirstArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Collection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionFindFirstOrThrowArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CollectionFindFirstOrThrowArgs>(args?: SelectSubset<T, CollectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Collections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Collections
     * const collections = await prisma.collection.findMany()
     * 
     * // Get first 10 Collections
     * const collections = await prisma.collection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const collectionWithIdOnly = await prisma.collection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CollectionFindManyArgs>(args?: SelectSubset<T, CollectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Collection.
     * @param {CollectionCreateArgs} args - Arguments to create a Collection.
     * @example
     * // Create one Collection
     * const Collection = await prisma.collection.create({
     *   data: {
     *     // ... data to create a Collection
     *   }
     * })
     * 
     */
    create<T extends CollectionCreateArgs>(args: SelectSubset<T, CollectionCreateArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Collections.
     * @param {CollectionCreateManyArgs} args - Arguments to create many Collections.
     * @example
     * // Create many Collections
     * const collection = await prisma.collection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CollectionCreateManyArgs>(args?: SelectSubset<T, CollectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Collection.
     * @param {CollectionDeleteArgs} args - Arguments to delete one Collection.
     * @example
     * // Delete one Collection
     * const Collection = await prisma.collection.delete({
     *   where: {
     *     // ... filter to delete one Collection
     *   }
     * })
     * 
     */
    delete<T extends CollectionDeleteArgs>(args: SelectSubset<T, CollectionDeleteArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Collection.
     * @param {CollectionUpdateArgs} args - Arguments to update one Collection.
     * @example
     * // Update one Collection
     * const collection = await prisma.collection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CollectionUpdateArgs>(args: SelectSubset<T, CollectionUpdateArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Collections.
     * @param {CollectionDeleteManyArgs} args - Arguments to filter Collections to delete.
     * @example
     * // Delete a few Collections
     * const { count } = await prisma.collection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CollectionDeleteManyArgs>(args?: SelectSubset<T, CollectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Collections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Collections
     * const collection = await prisma.collection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CollectionUpdateManyArgs>(args: SelectSubset<T, CollectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Collection.
     * @param {CollectionUpsertArgs} args - Arguments to update or create a Collection.
     * @example
     * // Update or create a Collection
     * const collection = await prisma.collection.upsert({
     *   create: {
     *     // ... data to create a Collection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Collection we want to update
     *   }
     * })
     */
    upsert<T extends CollectionUpsertArgs>(args: SelectSubset<T, CollectionUpsertArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Collections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionCountArgs} args - Arguments to filter Collections to count.
     * @example
     * // Count the number of Collections
     * const count = await prisma.collection.count({
     *   where: {
     *     // ... the filter for the Collections we want to count
     *   }
     * })
    **/
    count<T extends CollectionCountArgs>(
      args?: Subset<T, CollectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CollectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Collection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CollectionAggregateArgs>(args: Subset<T, CollectionAggregateArgs>): Prisma.PrismaPromise<GetCollectionAggregateType<T>>

    /**
     * Group by Collection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CollectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CollectionGroupByArgs['orderBy'] }
        : { orderBy?: CollectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CollectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCollectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Collection model
   */
  readonly fields: CollectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Collection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CollectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ressources<T extends Collection$ressourcesArgs<ExtArgs> = {}>(args?: Subset<T, Collection$ressourcesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionRessourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Collection model
   */
  interface CollectionFieldRefs {
    readonly id: FieldRef<"Collection", 'String'>
    readonly userId: FieldRef<"Collection", 'String'>
    readonly nom: FieldRef<"Collection", 'String'>
    readonly description: FieldRef<"Collection", 'String'>
    readonly estPublique: FieldRef<"Collection", 'Boolean'>
    readonly dateCreation: FieldRef<"Collection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Collection findUnique
   */
  export type CollectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collection to fetch.
     */
    where: CollectionWhereUniqueInput
  }

  /**
   * Collection findUniqueOrThrow
   */
  export type CollectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collection to fetch.
     */
    where: CollectionWhereUniqueInput
  }

  /**
   * Collection findFirst
   */
  export type CollectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collection to fetch.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Collections.
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Collections.
     */
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[]
  }

  /**
   * Collection findFirstOrThrow
   */
  export type CollectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collection to fetch.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Collections.
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Collections.
     */
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[]
  }

  /**
   * Collection findMany
   */
  export type CollectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collections to fetch.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Collections.
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[]
  }

  /**
   * Collection create
   */
  export type CollectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * The data needed to create a Collection.
     */
    data: XOR<CollectionCreateInput, CollectionUncheckedCreateInput>
  }

  /**
   * Collection createMany
   */
  export type CollectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Collections.
     */
    data: CollectionCreateManyInput | CollectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Collection update
   */
  export type CollectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * The data needed to update a Collection.
     */
    data: XOR<CollectionUpdateInput, CollectionUncheckedUpdateInput>
    /**
     * Choose, which Collection to update.
     */
    where: CollectionWhereUniqueInput
  }

  /**
   * Collection updateMany
   */
  export type CollectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Collections.
     */
    data: XOR<CollectionUpdateManyMutationInput, CollectionUncheckedUpdateManyInput>
    /**
     * Filter which Collections to update
     */
    where?: CollectionWhereInput
    /**
     * Limit how many Collections to update.
     */
    limit?: number
  }

  /**
   * Collection upsert
   */
  export type CollectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * The filter to search for the Collection to update in case it exists.
     */
    where: CollectionWhereUniqueInput
    /**
     * In case the Collection found by the `where` argument doesn't exist, create a new Collection with this data.
     */
    create: XOR<CollectionCreateInput, CollectionUncheckedCreateInput>
    /**
     * In case the Collection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CollectionUpdateInput, CollectionUncheckedUpdateInput>
  }

  /**
   * Collection delete
   */
  export type CollectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter which Collection to delete.
     */
    where: CollectionWhereUniqueInput
  }

  /**
   * Collection deleteMany
   */
  export type CollectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Collections to delete
     */
    where?: CollectionWhereInput
    /**
     * Limit how many Collections to delete.
     */
    limit?: number
  }

  /**
   * Collection.ressources
   */
  export type Collection$ressourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionRessource
     */
    select?: CollectionRessourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionRessource
     */
    omit?: CollectionRessourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionRessourceInclude<ExtArgs> | null
    where?: CollectionRessourceWhereInput
    orderBy?: CollectionRessourceOrderByWithRelationInput | CollectionRessourceOrderByWithRelationInput[]
    cursor?: CollectionRessourceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CollectionRessourceScalarFieldEnum | CollectionRessourceScalarFieldEnum[]
  }

  /**
   * Collection without action
   */
  export type CollectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
  }


  /**
   * Model CollectionRessource
   */

  export type AggregateCollectionRessource = {
    _count: CollectionRessourceCountAggregateOutputType | null
    _min: CollectionRessourceMinAggregateOutputType | null
    _max: CollectionRessourceMaxAggregateOutputType | null
  }

  export type CollectionRessourceMinAggregateOutputType = {
    id: string | null
    collectionId: string | null
    ressourceId: string | null
    dateAjout: Date | null
    notes: string | null
  }

  export type CollectionRessourceMaxAggregateOutputType = {
    id: string | null
    collectionId: string | null
    ressourceId: string | null
    dateAjout: Date | null
    notes: string | null
  }

  export type CollectionRessourceCountAggregateOutputType = {
    id: number
    collectionId: number
    ressourceId: number
    dateAjout: number
    notes: number
    _all: number
  }


  export type CollectionRessourceMinAggregateInputType = {
    id?: true
    collectionId?: true
    ressourceId?: true
    dateAjout?: true
    notes?: true
  }

  export type CollectionRessourceMaxAggregateInputType = {
    id?: true
    collectionId?: true
    ressourceId?: true
    dateAjout?: true
    notes?: true
  }

  export type CollectionRessourceCountAggregateInputType = {
    id?: true
    collectionId?: true
    ressourceId?: true
    dateAjout?: true
    notes?: true
    _all?: true
  }

  export type CollectionRessourceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CollectionRessource to aggregate.
     */
    where?: CollectionRessourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollectionRessources to fetch.
     */
    orderBy?: CollectionRessourceOrderByWithRelationInput | CollectionRessourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CollectionRessourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollectionRessources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollectionRessources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CollectionRessources
    **/
    _count?: true | CollectionRessourceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CollectionRessourceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CollectionRessourceMaxAggregateInputType
  }

  export type GetCollectionRessourceAggregateType<T extends CollectionRessourceAggregateArgs> = {
        [P in keyof T & keyof AggregateCollectionRessource]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCollectionRessource[P]>
      : GetScalarType<T[P], AggregateCollectionRessource[P]>
  }




  export type CollectionRessourceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollectionRessourceWhereInput
    orderBy?: CollectionRessourceOrderByWithAggregationInput | CollectionRessourceOrderByWithAggregationInput[]
    by: CollectionRessourceScalarFieldEnum[] | CollectionRessourceScalarFieldEnum
    having?: CollectionRessourceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CollectionRessourceCountAggregateInputType | true
    _min?: CollectionRessourceMinAggregateInputType
    _max?: CollectionRessourceMaxAggregateInputType
  }

  export type CollectionRessourceGroupByOutputType = {
    id: string
    collectionId: string
    ressourceId: string
    dateAjout: Date
    notes: string | null
    _count: CollectionRessourceCountAggregateOutputType | null
    _min: CollectionRessourceMinAggregateOutputType | null
    _max: CollectionRessourceMaxAggregateOutputType | null
  }

  type GetCollectionRessourceGroupByPayload<T extends CollectionRessourceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CollectionRessourceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CollectionRessourceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CollectionRessourceGroupByOutputType[P]>
            : GetScalarType<T[P], CollectionRessourceGroupByOutputType[P]>
        }
      >
    >


  export type CollectionRessourceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    collectionId?: boolean
    ressourceId?: boolean
    dateAjout?: boolean
    notes?: boolean
    collection?: boolean | CollectionDefaultArgs<ExtArgs>
    ressource?: boolean | RessourceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collectionRessource"]>



  export type CollectionRessourceSelectScalar = {
    id?: boolean
    collectionId?: boolean
    ressourceId?: boolean
    dateAjout?: boolean
    notes?: boolean
  }

  export type CollectionRessourceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "collectionId" | "ressourceId" | "dateAjout" | "notes", ExtArgs["result"]["collectionRessource"]>
  export type CollectionRessourceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collection?: boolean | CollectionDefaultArgs<ExtArgs>
    ressource?: boolean | RessourceDefaultArgs<ExtArgs>
  }

  export type $CollectionRessourcePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CollectionRessource"
    objects: {
      collection: Prisma.$CollectionPayload<ExtArgs>
      ressource: Prisma.$RessourcePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      collectionId: string
      ressourceId: string
      dateAjout: Date
      notes: string | null
    }, ExtArgs["result"]["collectionRessource"]>
    composites: {}
  }

  type CollectionRessourceGetPayload<S extends boolean | null | undefined | CollectionRessourceDefaultArgs> = $Result.GetResult<Prisma.$CollectionRessourcePayload, S>

  type CollectionRessourceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CollectionRessourceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CollectionRessourceCountAggregateInputType | true
    }

  export interface CollectionRessourceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CollectionRessource'], meta: { name: 'CollectionRessource' } }
    /**
     * Find zero or one CollectionRessource that matches the filter.
     * @param {CollectionRessourceFindUniqueArgs} args - Arguments to find a CollectionRessource
     * @example
     * // Get one CollectionRessource
     * const collectionRessource = await prisma.collectionRessource.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CollectionRessourceFindUniqueArgs>(args: SelectSubset<T, CollectionRessourceFindUniqueArgs<ExtArgs>>): Prisma__CollectionRessourceClient<$Result.GetResult<Prisma.$CollectionRessourcePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CollectionRessource that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CollectionRessourceFindUniqueOrThrowArgs} args - Arguments to find a CollectionRessource
     * @example
     * // Get one CollectionRessource
     * const collectionRessource = await prisma.collectionRessource.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CollectionRessourceFindUniqueOrThrowArgs>(args: SelectSubset<T, CollectionRessourceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CollectionRessourceClient<$Result.GetResult<Prisma.$CollectionRessourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CollectionRessource that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionRessourceFindFirstArgs} args - Arguments to find a CollectionRessource
     * @example
     * // Get one CollectionRessource
     * const collectionRessource = await prisma.collectionRessource.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CollectionRessourceFindFirstArgs>(args?: SelectSubset<T, CollectionRessourceFindFirstArgs<ExtArgs>>): Prisma__CollectionRessourceClient<$Result.GetResult<Prisma.$CollectionRessourcePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CollectionRessource that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionRessourceFindFirstOrThrowArgs} args - Arguments to find a CollectionRessource
     * @example
     * // Get one CollectionRessource
     * const collectionRessource = await prisma.collectionRessource.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CollectionRessourceFindFirstOrThrowArgs>(args?: SelectSubset<T, CollectionRessourceFindFirstOrThrowArgs<ExtArgs>>): Prisma__CollectionRessourceClient<$Result.GetResult<Prisma.$CollectionRessourcePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CollectionRessources that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionRessourceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CollectionRessources
     * const collectionRessources = await prisma.collectionRessource.findMany()
     * 
     * // Get first 10 CollectionRessources
     * const collectionRessources = await prisma.collectionRessource.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const collectionRessourceWithIdOnly = await prisma.collectionRessource.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CollectionRessourceFindManyArgs>(args?: SelectSubset<T, CollectionRessourceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionRessourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CollectionRessource.
     * @param {CollectionRessourceCreateArgs} args - Arguments to create a CollectionRessource.
     * @example
     * // Create one CollectionRessource
     * const CollectionRessource = await prisma.collectionRessource.create({
     *   data: {
     *     // ... data to create a CollectionRessource
     *   }
     * })
     * 
     */
    create<T extends CollectionRessourceCreateArgs>(args: SelectSubset<T, CollectionRessourceCreateArgs<ExtArgs>>): Prisma__CollectionRessourceClient<$Result.GetResult<Prisma.$CollectionRessourcePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CollectionRessources.
     * @param {CollectionRessourceCreateManyArgs} args - Arguments to create many CollectionRessources.
     * @example
     * // Create many CollectionRessources
     * const collectionRessource = await prisma.collectionRessource.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CollectionRessourceCreateManyArgs>(args?: SelectSubset<T, CollectionRessourceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CollectionRessource.
     * @param {CollectionRessourceDeleteArgs} args - Arguments to delete one CollectionRessource.
     * @example
     * // Delete one CollectionRessource
     * const CollectionRessource = await prisma.collectionRessource.delete({
     *   where: {
     *     // ... filter to delete one CollectionRessource
     *   }
     * })
     * 
     */
    delete<T extends CollectionRessourceDeleteArgs>(args: SelectSubset<T, CollectionRessourceDeleteArgs<ExtArgs>>): Prisma__CollectionRessourceClient<$Result.GetResult<Prisma.$CollectionRessourcePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CollectionRessource.
     * @param {CollectionRessourceUpdateArgs} args - Arguments to update one CollectionRessource.
     * @example
     * // Update one CollectionRessource
     * const collectionRessource = await prisma.collectionRessource.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CollectionRessourceUpdateArgs>(args: SelectSubset<T, CollectionRessourceUpdateArgs<ExtArgs>>): Prisma__CollectionRessourceClient<$Result.GetResult<Prisma.$CollectionRessourcePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CollectionRessources.
     * @param {CollectionRessourceDeleteManyArgs} args - Arguments to filter CollectionRessources to delete.
     * @example
     * // Delete a few CollectionRessources
     * const { count } = await prisma.collectionRessource.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CollectionRessourceDeleteManyArgs>(args?: SelectSubset<T, CollectionRessourceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CollectionRessources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionRessourceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CollectionRessources
     * const collectionRessource = await prisma.collectionRessource.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CollectionRessourceUpdateManyArgs>(args: SelectSubset<T, CollectionRessourceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CollectionRessource.
     * @param {CollectionRessourceUpsertArgs} args - Arguments to update or create a CollectionRessource.
     * @example
     * // Update or create a CollectionRessource
     * const collectionRessource = await prisma.collectionRessource.upsert({
     *   create: {
     *     // ... data to create a CollectionRessource
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CollectionRessource we want to update
     *   }
     * })
     */
    upsert<T extends CollectionRessourceUpsertArgs>(args: SelectSubset<T, CollectionRessourceUpsertArgs<ExtArgs>>): Prisma__CollectionRessourceClient<$Result.GetResult<Prisma.$CollectionRessourcePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CollectionRessources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionRessourceCountArgs} args - Arguments to filter CollectionRessources to count.
     * @example
     * // Count the number of CollectionRessources
     * const count = await prisma.collectionRessource.count({
     *   where: {
     *     // ... the filter for the CollectionRessources we want to count
     *   }
     * })
    **/
    count<T extends CollectionRessourceCountArgs>(
      args?: Subset<T, CollectionRessourceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CollectionRessourceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CollectionRessource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionRessourceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CollectionRessourceAggregateArgs>(args: Subset<T, CollectionRessourceAggregateArgs>): Prisma.PrismaPromise<GetCollectionRessourceAggregateType<T>>

    /**
     * Group by CollectionRessource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionRessourceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CollectionRessourceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CollectionRessourceGroupByArgs['orderBy'] }
        : { orderBy?: CollectionRessourceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CollectionRessourceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCollectionRessourceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CollectionRessource model
   */
  readonly fields: CollectionRessourceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CollectionRessource.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CollectionRessourceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    collection<T extends CollectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CollectionDefaultArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ressource<T extends RessourceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RessourceDefaultArgs<ExtArgs>>): Prisma__RessourceClient<$Result.GetResult<Prisma.$RessourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CollectionRessource model
   */
  interface CollectionRessourceFieldRefs {
    readonly id: FieldRef<"CollectionRessource", 'String'>
    readonly collectionId: FieldRef<"CollectionRessource", 'String'>
    readonly ressourceId: FieldRef<"CollectionRessource", 'String'>
    readonly dateAjout: FieldRef<"CollectionRessource", 'DateTime'>
    readonly notes: FieldRef<"CollectionRessource", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CollectionRessource findUnique
   */
  export type CollectionRessourceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionRessource
     */
    select?: CollectionRessourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionRessource
     */
    omit?: CollectionRessourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionRessourceInclude<ExtArgs> | null
    /**
     * Filter, which CollectionRessource to fetch.
     */
    where: CollectionRessourceWhereUniqueInput
  }

  /**
   * CollectionRessource findUniqueOrThrow
   */
  export type CollectionRessourceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionRessource
     */
    select?: CollectionRessourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionRessource
     */
    omit?: CollectionRessourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionRessourceInclude<ExtArgs> | null
    /**
     * Filter, which CollectionRessource to fetch.
     */
    where: CollectionRessourceWhereUniqueInput
  }

  /**
   * CollectionRessource findFirst
   */
  export type CollectionRessourceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionRessource
     */
    select?: CollectionRessourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionRessource
     */
    omit?: CollectionRessourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionRessourceInclude<ExtArgs> | null
    /**
     * Filter, which CollectionRessource to fetch.
     */
    where?: CollectionRessourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollectionRessources to fetch.
     */
    orderBy?: CollectionRessourceOrderByWithRelationInput | CollectionRessourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CollectionRessources.
     */
    cursor?: CollectionRessourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollectionRessources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollectionRessources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CollectionRessources.
     */
    distinct?: CollectionRessourceScalarFieldEnum | CollectionRessourceScalarFieldEnum[]
  }

  /**
   * CollectionRessource findFirstOrThrow
   */
  export type CollectionRessourceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionRessource
     */
    select?: CollectionRessourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionRessource
     */
    omit?: CollectionRessourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionRessourceInclude<ExtArgs> | null
    /**
     * Filter, which CollectionRessource to fetch.
     */
    where?: CollectionRessourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollectionRessources to fetch.
     */
    orderBy?: CollectionRessourceOrderByWithRelationInput | CollectionRessourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CollectionRessources.
     */
    cursor?: CollectionRessourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollectionRessources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollectionRessources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CollectionRessources.
     */
    distinct?: CollectionRessourceScalarFieldEnum | CollectionRessourceScalarFieldEnum[]
  }

  /**
   * CollectionRessource findMany
   */
  export type CollectionRessourceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionRessource
     */
    select?: CollectionRessourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionRessource
     */
    omit?: CollectionRessourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionRessourceInclude<ExtArgs> | null
    /**
     * Filter, which CollectionRessources to fetch.
     */
    where?: CollectionRessourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollectionRessources to fetch.
     */
    orderBy?: CollectionRessourceOrderByWithRelationInput | CollectionRessourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CollectionRessources.
     */
    cursor?: CollectionRessourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollectionRessources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollectionRessources.
     */
    skip?: number
    distinct?: CollectionRessourceScalarFieldEnum | CollectionRessourceScalarFieldEnum[]
  }

  /**
   * CollectionRessource create
   */
  export type CollectionRessourceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionRessource
     */
    select?: CollectionRessourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionRessource
     */
    omit?: CollectionRessourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionRessourceInclude<ExtArgs> | null
    /**
     * The data needed to create a CollectionRessource.
     */
    data: XOR<CollectionRessourceCreateInput, CollectionRessourceUncheckedCreateInput>
  }

  /**
   * CollectionRessource createMany
   */
  export type CollectionRessourceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CollectionRessources.
     */
    data: CollectionRessourceCreateManyInput | CollectionRessourceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CollectionRessource update
   */
  export type CollectionRessourceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionRessource
     */
    select?: CollectionRessourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionRessource
     */
    omit?: CollectionRessourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionRessourceInclude<ExtArgs> | null
    /**
     * The data needed to update a CollectionRessource.
     */
    data: XOR<CollectionRessourceUpdateInput, CollectionRessourceUncheckedUpdateInput>
    /**
     * Choose, which CollectionRessource to update.
     */
    where: CollectionRessourceWhereUniqueInput
  }

  /**
   * CollectionRessource updateMany
   */
  export type CollectionRessourceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CollectionRessources.
     */
    data: XOR<CollectionRessourceUpdateManyMutationInput, CollectionRessourceUncheckedUpdateManyInput>
    /**
     * Filter which CollectionRessources to update
     */
    where?: CollectionRessourceWhereInput
    /**
     * Limit how many CollectionRessources to update.
     */
    limit?: number
  }

  /**
   * CollectionRessource upsert
   */
  export type CollectionRessourceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionRessource
     */
    select?: CollectionRessourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionRessource
     */
    omit?: CollectionRessourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionRessourceInclude<ExtArgs> | null
    /**
     * The filter to search for the CollectionRessource to update in case it exists.
     */
    where: CollectionRessourceWhereUniqueInput
    /**
     * In case the CollectionRessource found by the `where` argument doesn't exist, create a new CollectionRessource with this data.
     */
    create: XOR<CollectionRessourceCreateInput, CollectionRessourceUncheckedCreateInput>
    /**
     * In case the CollectionRessource was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CollectionRessourceUpdateInput, CollectionRessourceUncheckedUpdateInput>
  }

  /**
   * CollectionRessource delete
   */
  export type CollectionRessourceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionRessource
     */
    select?: CollectionRessourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionRessource
     */
    omit?: CollectionRessourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionRessourceInclude<ExtArgs> | null
    /**
     * Filter which CollectionRessource to delete.
     */
    where: CollectionRessourceWhereUniqueInput
  }

  /**
   * CollectionRessource deleteMany
   */
  export type CollectionRessourceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CollectionRessources to delete
     */
    where?: CollectionRessourceWhereInput
    /**
     * Limit how many CollectionRessources to delete.
     */
    limit?: number
  }

  /**
   * CollectionRessource without action
   */
  export type CollectionRessourceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionRessource
     */
    select?: CollectionRessourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionRessource
     */
    omit?: CollectionRessourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionRessourceInclude<ExtArgs> | null
  }


  /**
   * Model PartageUniversite
   */

  export type AggregatePartageUniversite = {
    _count: PartageUniversiteCountAggregateOutputType | null
    _min: PartageUniversiteMinAggregateOutputType | null
    _max: PartageUniversiteMaxAggregateOutputType | null
  }

  export type PartageUniversiteMinAggregateOutputType = {
    id: string | null
    ressourceId: string | null
    universiteSource: string | null
    universiteDestination: string | null
    datePartage: Date | null
    estActif: boolean | null
  }

  export type PartageUniversiteMaxAggregateOutputType = {
    id: string | null
    ressourceId: string | null
    universiteSource: string | null
    universiteDestination: string | null
    datePartage: Date | null
    estActif: boolean | null
  }

  export type PartageUniversiteCountAggregateOutputType = {
    id: number
    ressourceId: number
    universiteSource: number
    universiteDestination: number
    datePartage: number
    estActif: number
    _all: number
  }


  export type PartageUniversiteMinAggregateInputType = {
    id?: true
    ressourceId?: true
    universiteSource?: true
    universiteDestination?: true
    datePartage?: true
    estActif?: true
  }

  export type PartageUniversiteMaxAggregateInputType = {
    id?: true
    ressourceId?: true
    universiteSource?: true
    universiteDestination?: true
    datePartage?: true
    estActif?: true
  }

  export type PartageUniversiteCountAggregateInputType = {
    id?: true
    ressourceId?: true
    universiteSource?: true
    universiteDestination?: true
    datePartage?: true
    estActif?: true
    _all?: true
  }

  export type PartageUniversiteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PartageUniversite to aggregate.
     */
    where?: PartageUniversiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartageUniversites to fetch.
     */
    orderBy?: PartageUniversiteOrderByWithRelationInput | PartageUniversiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PartageUniversiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartageUniversites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartageUniversites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PartageUniversites
    **/
    _count?: true | PartageUniversiteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PartageUniversiteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PartageUniversiteMaxAggregateInputType
  }

  export type GetPartageUniversiteAggregateType<T extends PartageUniversiteAggregateArgs> = {
        [P in keyof T & keyof AggregatePartageUniversite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePartageUniversite[P]>
      : GetScalarType<T[P], AggregatePartageUniversite[P]>
  }




  export type PartageUniversiteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartageUniversiteWhereInput
    orderBy?: PartageUniversiteOrderByWithAggregationInput | PartageUniversiteOrderByWithAggregationInput[]
    by: PartageUniversiteScalarFieldEnum[] | PartageUniversiteScalarFieldEnum
    having?: PartageUniversiteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PartageUniversiteCountAggregateInputType | true
    _min?: PartageUniversiteMinAggregateInputType
    _max?: PartageUniversiteMaxAggregateInputType
  }

  export type PartageUniversiteGroupByOutputType = {
    id: string
    ressourceId: string
    universiteSource: string
    universiteDestination: string
    datePartage: Date
    estActif: boolean
    _count: PartageUniversiteCountAggregateOutputType | null
    _min: PartageUniversiteMinAggregateOutputType | null
    _max: PartageUniversiteMaxAggregateOutputType | null
  }

  type GetPartageUniversiteGroupByPayload<T extends PartageUniversiteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PartageUniversiteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PartageUniversiteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PartageUniversiteGroupByOutputType[P]>
            : GetScalarType<T[P], PartageUniversiteGroupByOutputType[P]>
        }
      >
    >


  export type PartageUniversiteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ressourceId?: boolean
    universiteSource?: boolean
    universiteDestination?: boolean
    datePartage?: boolean
    estActif?: boolean
    ressource?: boolean | RessourceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["partageUniversite"]>



  export type PartageUniversiteSelectScalar = {
    id?: boolean
    ressourceId?: boolean
    universiteSource?: boolean
    universiteDestination?: boolean
    datePartage?: boolean
    estActif?: boolean
  }

  export type PartageUniversiteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ressourceId" | "universiteSource" | "universiteDestination" | "datePartage" | "estActif", ExtArgs["result"]["partageUniversite"]>
  export type PartageUniversiteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ressource?: boolean | RessourceDefaultArgs<ExtArgs>
  }

  export type $PartageUniversitePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PartageUniversite"
    objects: {
      ressource: Prisma.$RessourcePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ressourceId: string
      universiteSource: string
      universiteDestination: string
      datePartage: Date
      estActif: boolean
    }, ExtArgs["result"]["partageUniversite"]>
    composites: {}
  }

  type PartageUniversiteGetPayload<S extends boolean | null | undefined | PartageUniversiteDefaultArgs> = $Result.GetResult<Prisma.$PartageUniversitePayload, S>

  type PartageUniversiteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PartageUniversiteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PartageUniversiteCountAggregateInputType | true
    }

  export interface PartageUniversiteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PartageUniversite'], meta: { name: 'PartageUniversite' } }
    /**
     * Find zero or one PartageUniversite that matches the filter.
     * @param {PartageUniversiteFindUniqueArgs} args - Arguments to find a PartageUniversite
     * @example
     * // Get one PartageUniversite
     * const partageUniversite = await prisma.partageUniversite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PartageUniversiteFindUniqueArgs>(args: SelectSubset<T, PartageUniversiteFindUniqueArgs<ExtArgs>>): Prisma__PartageUniversiteClient<$Result.GetResult<Prisma.$PartageUniversitePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PartageUniversite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PartageUniversiteFindUniqueOrThrowArgs} args - Arguments to find a PartageUniversite
     * @example
     * // Get one PartageUniversite
     * const partageUniversite = await prisma.partageUniversite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PartageUniversiteFindUniqueOrThrowArgs>(args: SelectSubset<T, PartageUniversiteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PartageUniversiteClient<$Result.GetResult<Prisma.$PartageUniversitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PartageUniversite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartageUniversiteFindFirstArgs} args - Arguments to find a PartageUniversite
     * @example
     * // Get one PartageUniversite
     * const partageUniversite = await prisma.partageUniversite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PartageUniversiteFindFirstArgs>(args?: SelectSubset<T, PartageUniversiteFindFirstArgs<ExtArgs>>): Prisma__PartageUniversiteClient<$Result.GetResult<Prisma.$PartageUniversitePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PartageUniversite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartageUniversiteFindFirstOrThrowArgs} args - Arguments to find a PartageUniversite
     * @example
     * // Get one PartageUniversite
     * const partageUniversite = await prisma.partageUniversite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PartageUniversiteFindFirstOrThrowArgs>(args?: SelectSubset<T, PartageUniversiteFindFirstOrThrowArgs<ExtArgs>>): Prisma__PartageUniversiteClient<$Result.GetResult<Prisma.$PartageUniversitePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PartageUniversites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartageUniversiteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PartageUniversites
     * const partageUniversites = await prisma.partageUniversite.findMany()
     * 
     * // Get first 10 PartageUniversites
     * const partageUniversites = await prisma.partageUniversite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const partageUniversiteWithIdOnly = await prisma.partageUniversite.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PartageUniversiteFindManyArgs>(args?: SelectSubset<T, PartageUniversiteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartageUniversitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PartageUniversite.
     * @param {PartageUniversiteCreateArgs} args - Arguments to create a PartageUniversite.
     * @example
     * // Create one PartageUniversite
     * const PartageUniversite = await prisma.partageUniversite.create({
     *   data: {
     *     // ... data to create a PartageUniversite
     *   }
     * })
     * 
     */
    create<T extends PartageUniversiteCreateArgs>(args: SelectSubset<T, PartageUniversiteCreateArgs<ExtArgs>>): Prisma__PartageUniversiteClient<$Result.GetResult<Prisma.$PartageUniversitePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PartageUniversites.
     * @param {PartageUniversiteCreateManyArgs} args - Arguments to create many PartageUniversites.
     * @example
     * // Create many PartageUniversites
     * const partageUniversite = await prisma.partageUniversite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PartageUniversiteCreateManyArgs>(args?: SelectSubset<T, PartageUniversiteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PartageUniversite.
     * @param {PartageUniversiteDeleteArgs} args - Arguments to delete one PartageUniversite.
     * @example
     * // Delete one PartageUniversite
     * const PartageUniversite = await prisma.partageUniversite.delete({
     *   where: {
     *     // ... filter to delete one PartageUniversite
     *   }
     * })
     * 
     */
    delete<T extends PartageUniversiteDeleteArgs>(args: SelectSubset<T, PartageUniversiteDeleteArgs<ExtArgs>>): Prisma__PartageUniversiteClient<$Result.GetResult<Prisma.$PartageUniversitePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PartageUniversite.
     * @param {PartageUniversiteUpdateArgs} args - Arguments to update one PartageUniversite.
     * @example
     * // Update one PartageUniversite
     * const partageUniversite = await prisma.partageUniversite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PartageUniversiteUpdateArgs>(args: SelectSubset<T, PartageUniversiteUpdateArgs<ExtArgs>>): Prisma__PartageUniversiteClient<$Result.GetResult<Prisma.$PartageUniversitePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PartageUniversites.
     * @param {PartageUniversiteDeleteManyArgs} args - Arguments to filter PartageUniversites to delete.
     * @example
     * // Delete a few PartageUniversites
     * const { count } = await prisma.partageUniversite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PartageUniversiteDeleteManyArgs>(args?: SelectSubset<T, PartageUniversiteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PartageUniversites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartageUniversiteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PartageUniversites
     * const partageUniversite = await prisma.partageUniversite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PartageUniversiteUpdateManyArgs>(args: SelectSubset<T, PartageUniversiteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PartageUniversite.
     * @param {PartageUniversiteUpsertArgs} args - Arguments to update or create a PartageUniversite.
     * @example
     * // Update or create a PartageUniversite
     * const partageUniversite = await prisma.partageUniversite.upsert({
     *   create: {
     *     // ... data to create a PartageUniversite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PartageUniversite we want to update
     *   }
     * })
     */
    upsert<T extends PartageUniversiteUpsertArgs>(args: SelectSubset<T, PartageUniversiteUpsertArgs<ExtArgs>>): Prisma__PartageUniversiteClient<$Result.GetResult<Prisma.$PartageUniversitePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PartageUniversites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartageUniversiteCountArgs} args - Arguments to filter PartageUniversites to count.
     * @example
     * // Count the number of PartageUniversites
     * const count = await prisma.partageUniversite.count({
     *   where: {
     *     // ... the filter for the PartageUniversites we want to count
     *   }
     * })
    **/
    count<T extends PartageUniversiteCountArgs>(
      args?: Subset<T, PartageUniversiteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PartageUniversiteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PartageUniversite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartageUniversiteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PartageUniversiteAggregateArgs>(args: Subset<T, PartageUniversiteAggregateArgs>): Prisma.PrismaPromise<GetPartageUniversiteAggregateType<T>>

    /**
     * Group by PartageUniversite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartageUniversiteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PartageUniversiteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PartageUniversiteGroupByArgs['orderBy'] }
        : { orderBy?: PartageUniversiteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PartageUniversiteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartageUniversiteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PartageUniversite model
   */
  readonly fields: PartageUniversiteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PartageUniversite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PartageUniversiteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ressource<T extends RessourceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RessourceDefaultArgs<ExtArgs>>): Prisma__RessourceClient<$Result.GetResult<Prisma.$RessourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PartageUniversite model
   */
  interface PartageUniversiteFieldRefs {
    readonly id: FieldRef<"PartageUniversite", 'String'>
    readonly ressourceId: FieldRef<"PartageUniversite", 'String'>
    readonly universiteSource: FieldRef<"PartageUniversite", 'String'>
    readonly universiteDestination: FieldRef<"PartageUniversite", 'String'>
    readonly datePartage: FieldRef<"PartageUniversite", 'DateTime'>
    readonly estActif: FieldRef<"PartageUniversite", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * PartageUniversite findUnique
   */
  export type PartageUniversiteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartageUniversite
     */
    select?: PartageUniversiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartageUniversite
     */
    omit?: PartageUniversiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartageUniversiteInclude<ExtArgs> | null
    /**
     * Filter, which PartageUniversite to fetch.
     */
    where: PartageUniversiteWhereUniqueInput
  }

  /**
   * PartageUniversite findUniqueOrThrow
   */
  export type PartageUniversiteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartageUniversite
     */
    select?: PartageUniversiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartageUniversite
     */
    omit?: PartageUniversiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartageUniversiteInclude<ExtArgs> | null
    /**
     * Filter, which PartageUniversite to fetch.
     */
    where: PartageUniversiteWhereUniqueInput
  }

  /**
   * PartageUniversite findFirst
   */
  export type PartageUniversiteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartageUniversite
     */
    select?: PartageUniversiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartageUniversite
     */
    omit?: PartageUniversiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartageUniversiteInclude<ExtArgs> | null
    /**
     * Filter, which PartageUniversite to fetch.
     */
    where?: PartageUniversiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartageUniversites to fetch.
     */
    orderBy?: PartageUniversiteOrderByWithRelationInput | PartageUniversiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PartageUniversites.
     */
    cursor?: PartageUniversiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartageUniversites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartageUniversites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PartageUniversites.
     */
    distinct?: PartageUniversiteScalarFieldEnum | PartageUniversiteScalarFieldEnum[]
  }

  /**
   * PartageUniversite findFirstOrThrow
   */
  export type PartageUniversiteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartageUniversite
     */
    select?: PartageUniversiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartageUniversite
     */
    omit?: PartageUniversiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartageUniversiteInclude<ExtArgs> | null
    /**
     * Filter, which PartageUniversite to fetch.
     */
    where?: PartageUniversiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartageUniversites to fetch.
     */
    orderBy?: PartageUniversiteOrderByWithRelationInput | PartageUniversiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PartageUniversites.
     */
    cursor?: PartageUniversiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartageUniversites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartageUniversites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PartageUniversites.
     */
    distinct?: PartageUniversiteScalarFieldEnum | PartageUniversiteScalarFieldEnum[]
  }

  /**
   * PartageUniversite findMany
   */
  export type PartageUniversiteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartageUniversite
     */
    select?: PartageUniversiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartageUniversite
     */
    omit?: PartageUniversiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartageUniversiteInclude<ExtArgs> | null
    /**
     * Filter, which PartageUniversites to fetch.
     */
    where?: PartageUniversiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartageUniversites to fetch.
     */
    orderBy?: PartageUniversiteOrderByWithRelationInput | PartageUniversiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PartageUniversites.
     */
    cursor?: PartageUniversiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartageUniversites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartageUniversites.
     */
    skip?: number
    distinct?: PartageUniversiteScalarFieldEnum | PartageUniversiteScalarFieldEnum[]
  }

  /**
   * PartageUniversite create
   */
  export type PartageUniversiteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartageUniversite
     */
    select?: PartageUniversiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartageUniversite
     */
    omit?: PartageUniversiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartageUniversiteInclude<ExtArgs> | null
    /**
     * The data needed to create a PartageUniversite.
     */
    data: XOR<PartageUniversiteCreateInput, PartageUniversiteUncheckedCreateInput>
  }

  /**
   * PartageUniversite createMany
   */
  export type PartageUniversiteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PartageUniversites.
     */
    data: PartageUniversiteCreateManyInput | PartageUniversiteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PartageUniversite update
   */
  export type PartageUniversiteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartageUniversite
     */
    select?: PartageUniversiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartageUniversite
     */
    omit?: PartageUniversiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartageUniversiteInclude<ExtArgs> | null
    /**
     * The data needed to update a PartageUniversite.
     */
    data: XOR<PartageUniversiteUpdateInput, PartageUniversiteUncheckedUpdateInput>
    /**
     * Choose, which PartageUniversite to update.
     */
    where: PartageUniversiteWhereUniqueInput
  }

  /**
   * PartageUniversite updateMany
   */
  export type PartageUniversiteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PartageUniversites.
     */
    data: XOR<PartageUniversiteUpdateManyMutationInput, PartageUniversiteUncheckedUpdateManyInput>
    /**
     * Filter which PartageUniversites to update
     */
    where?: PartageUniversiteWhereInput
    /**
     * Limit how many PartageUniversites to update.
     */
    limit?: number
  }

  /**
   * PartageUniversite upsert
   */
  export type PartageUniversiteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartageUniversite
     */
    select?: PartageUniversiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartageUniversite
     */
    omit?: PartageUniversiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartageUniversiteInclude<ExtArgs> | null
    /**
     * The filter to search for the PartageUniversite to update in case it exists.
     */
    where: PartageUniversiteWhereUniqueInput
    /**
     * In case the PartageUniversite found by the `where` argument doesn't exist, create a new PartageUniversite with this data.
     */
    create: XOR<PartageUniversiteCreateInput, PartageUniversiteUncheckedCreateInput>
    /**
     * In case the PartageUniversite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PartageUniversiteUpdateInput, PartageUniversiteUncheckedUpdateInput>
  }

  /**
   * PartageUniversite delete
   */
  export type PartageUniversiteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartageUniversite
     */
    select?: PartageUniversiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartageUniversite
     */
    omit?: PartageUniversiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartageUniversiteInclude<ExtArgs> | null
    /**
     * Filter which PartageUniversite to delete.
     */
    where: PartageUniversiteWhereUniqueInput
  }

  /**
   * PartageUniversite deleteMany
   */
  export type PartageUniversiteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PartageUniversites to delete
     */
    where?: PartageUniversiteWhereInput
    /**
     * Limit how many PartageUniversites to delete.
     */
    limit?: number
  }

  /**
   * PartageUniversite without action
   */
  export type PartageUniversiteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartageUniversite
     */
    select?: PartageUniversiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartageUniversite
     */
    omit?: PartageUniversiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartageUniversiteInclude<ExtArgs> | null
  }


  /**
   * Model TransactionBlockchain
   */

  export type AggregateTransactionBlockchain = {
    _count: TransactionBlockchainCountAggregateOutputType | null
    _min: TransactionBlockchainMinAggregateOutputType | null
    _max: TransactionBlockchainMaxAggregateOutputType | null
  }

  export type TransactionBlockchainMinAggregateOutputType = {
    id: string | null
    referenceBlockchain: string | null
    typeTransaction: $Enums.TypeTransaction | null
    ressourceId: string | null
    universiteOrigine: string | null
    universiteDestination: string | null
    dateTransaction: Date | null
    statut: $Enums.StatutTransaction | null
    hashTransaction: string | null
  }

  export type TransactionBlockchainMaxAggregateOutputType = {
    id: string | null
    referenceBlockchain: string | null
    typeTransaction: $Enums.TypeTransaction | null
    ressourceId: string | null
    universiteOrigine: string | null
    universiteDestination: string | null
    dateTransaction: Date | null
    statut: $Enums.StatutTransaction | null
    hashTransaction: string | null
  }

  export type TransactionBlockchainCountAggregateOutputType = {
    id: number
    referenceBlockchain: number
    typeTransaction: number
    ressourceId: number
    universiteOrigine: number
    universiteDestination: number
    dateTransaction: number
    statut: number
    hashTransaction: number
    donneesTechniques: number
    _all: number
  }


  export type TransactionBlockchainMinAggregateInputType = {
    id?: true
    referenceBlockchain?: true
    typeTransaction?: true
    ressourceId?: true
    universiteOrigine?: true
    universiteDestination?: true
    dateTransaction?: true
    statut?: true
    hashTransaction?: true
  }

  export type TransactionBlockchainMaxAggregateInputType = {
    id?: true
    referenceBlockchain?: true
    typeTransaction?: true
    ressourceId?: true
    universiteOrigine?: true
    universiteDestination?: true
    dateTransaction?: true
    statut?: true
    hashTransaction?: true
  }

  export type TransactionBlockchainCountAggregateInputType = {
    id?: true
    referenceBlockchain?: true
    typeTransaction?: true
    ressourceId?: true
    universiteOrigine?: true
    universiteDestination?: true
    dateTransaction?: true
    statut?: true
    hashTransaction?: true
    donneesTechniques?: true
    _all?: true
  }

  export type TransactionBlockchainAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransactionBlockchain to aggregate.
     */
    where?: TransactionBlockchainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionBlockchains to fetch.
     */
    orderBy?: TransactionBlockchainOrderByWithRelationInput | TransactionBlockchainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionBlockchainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionBlockchains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionBlockchains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TransactionBlockchains
    **/
    _count?: true | TransactionBlockchainCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionBlockchainMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionBlockchainMaxAggregateInputType
  }

  export type GetTransactionBlockchainAggregateType<T extends TransactionBlockchainAggregateArgs> = {
        [P in keyof T & keyof AggregateTransactionBlockchain]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransactionBlockchain[P]>
      : GetScalarType<T[P], AggregateTransactionBlockchain[P]>
  }




  export type TransactionBlockchainGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionBlockchainWhereInput
    orderBy?: TransactionBlockchainOrderByWithAggregationInput | TransactionBlockchainOrderByWithAggregationInput[]
    by: TransactionBlockchainScalarFieldEnum[] | TransactionBlockchainScalarFieldEnum
    having?: TransactionBlockchainScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionBlockchainCountAggregateInputType | true
    _min?: TransactionBlockchainMinAggregateInputType
    _max?: TransactionBlockchainMaxAggregateInputType
  }

  export type TransactionBlockchainGroupByOutputType = {
    id: string
    referenceBlockchain: string
    typeTransaction: $Enums.TypeTransaction
    ressourceId: string | null
    universiteOrigine: string
    universiteDestination: string | null
    dateTransaction: Date
    statut: $Enums.StatutTransaction
    hashTransaction: string
    donneesTechniques: JsonValue | null
    _count: TransactionBlockchainCountAggregateOutputType | null
    _min: TransactionBlockchainMinAggregateOutputType | null
    _max: TransactionBlockchainMaxAggregateOutputType | null
  }

  type GetTransactionBlockchainGroupByPayload<T extends TransactionBlockchainGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionBlockchainGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionBlockchainGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionBlockchainGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionBlockchainGroupByOutputType[P]>
        }
      >
    >


  export type TransactionBlockchainSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    referenceBlockchain?: boolean
    typeTransaction?: boolean
    ressourceId?: boolean
    universiteOrigine?: boolean
    universiteDestination?: boolean
    dateTransaction?: boolean
    statut?: boolean
    hashTransaction?: boolean
    donneesTechniques?: boolean
  }, ExtArgs["result"]["transactionBlockchain"]>



  export type TransactionBlockchainSelectScalar = {
    id?: boolean
    referenceBlockchain?: boolean
    typeTransaction?: boolean
    ressourceId?: boolean
    universiteOrigine?: boolean
    universiteDestination?: boolean
    dateTransaction?: boolean
    statut?: boolean
    hashTransaction?: boolean
    donneesTechniques?: boolean
  }

  export type TransactionBlockchainOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "referenceBlockchain" | "typeTransaction" | "ressourceId" | "universiteOrigine" | "universiteDestination" | "dateTransaction" | "statut" | "hashTransaction" | "donneesTechniques", ExtArgs["result"]["transactionBlockchain"]>

  export type $TransactionBlockchainPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TransactionBlockchain"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      referenceBlockchain: string
      typeTransaction: $Enums.TypeTransaction
      ressourceId: string | null
      universiteOrigine: string
      universiteDestination: string | null
      dateTransaction: Date
      statut: $Enums.StatutTransaction
      hashTransaction: string
      donneesTechniques: Prisma.JsonValue | null
    }, ExtArgs["result"]["transactionBlockchain"]>
    composites: {}
  }

  type TransactionBlockchainGetPayload<S extends boolean | null | undefined | TransactionBlockchainDefaultArgs> = $Result.GetResult<Prisma.$TransactionBlockchainPayload, S>

  type TransactionBlockchainCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionBlockchainFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionBlockchainCountAggregateInputType | true
    }

  export interface TransactionBlockchainDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TransactionBlockchain'], meta: { name: 'TransactionBlockchain' } }
    /**
     * Find zero or one TransactionBlockchain that matches the filter.
     * @param {TransactionBlockchainFindUniqueArgs} args - Arguments to find a TransactionBlockchain
     * @example
     * // Get one TransactionBlockchain
     * const transactionBlockchain = await prisma.transactionBlockchain.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionBlockchainFindUniqueArgs>(args: SelectSubset<T, TransactionBlockchainFindUniqueArgs<ExtArgs>>): Prisma__TransactionBlockchainClient<$Result.GetResult<Prisma.$TransactionBlockchainPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TransactionBlockchain that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionBlockchainFindUniqueOrThrowArgs} args - Arguments to find a TransactionBlockchain
     * @example
     * // Get one TransactionBlockchain
     * const transactionBlockchain = await prisma.transactionBlockchain.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionBlockchainFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionBlockchainFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionBlockchainClient<$Result.GetResult<Prisma.$TransactionBlockchainPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransactionBlockchain that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionBlockchainFindFirstArgs} args - Arguments to find a TransactionBlockchain
     * @example
     * // Get one TransactionBlockchain
     * const transactionBlockchain = await prisma.transactionBlockchain.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionBlockchainFindFirstArgs>(args?: SelectSubset<T, TransactionBlockchainFindFirstArgs<ExtArgs>>): Prisma__TransactionBlockchainClient<$Result.GetResult<Prisma.$TransactionBlockchainPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransactionBlockchain that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionBlockchainFindFirstOrThrowArgs} args - Arguments to find a TransactionBlockchain
     * @example
     * // Get one TransactionBlockchain
     * const transactionBlockchain = await prisma.transactionBlockchain.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionBlockchainFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionBlockchainFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionBlockchainClient<$Result.GetResult<Prisma.$TransactionBlockchainPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TransactionBlockchains that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionBlockchainFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TransactionBlockchains
     * const transactionBlockchains = await prisma.transactionBlockchain.findMany()
     * 
     * // Get first 10 TransactionBlockchains
     * const transactionBlockchains = await prisma.transactionBlockchain.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionBlockchainWithIdOnly = await prisma.transactionBlockchain.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionBlockchainFindManyArgs>(args?: SelectSubset<T, TransactionBlockchainFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionBlockchainPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TransactionBlockchain.
     * @param {TransactionBlockchainCreateArgs} args - Arguments to create a TransactionBlockchain.
     * @example
     * // Create one TransactionBlockchain
     * const TransactionBlockchain = await prisma.transactionBlockchain.create({
     *   data: {
     *     // ... data to create a TransactionBlockchain
     *   }
     * })
     * 
     */
    create<T extends TransactionBlockchainCreateArgs>(args: SelectSubset<T, TransactionBlockchainCreateArgs<ExtArgs>>): Prisma__TransactionBlockchainClient<$Result.GetResult<Prisma.$TransactionBlockchainPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TransactionBlockchains.
     * @param {TransactionBlockchainCreateManyArgs} args - Arguments to create many TransactionBlockchains.
     * @example
     * // Create many TransactionBlockchains
     * const transactionBlockchain = await prisma.transactionBlockchain.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionBlockchainCreateManyArgs>(args?: SelectSubset<T, TransactionBlockchainCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TransactionBlockchain.
     * @param {TransactionBlockchainDeleteArgs} args - Arguments to delete one TransactionBlockchain.
     * @example
     * // Delete one TransactionBlockchain
     * const TransactionBlockchain = await prisma.transactionBlockchain.delete({
     *   where: {
     *     // ... filter to delete one TransactionBlockchain
     *   }
     * })
     * 
     */
    delete<T extends TransactionBlockchainDeleteArgs>(args: SelectSubset<T, TransactionBlockchainDeleteArgs<ExtArgs>>): Prisma__TransactionBlockchainClient<$Result.GetResult<Prisma.$TransactionBlockchainPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TransactionBlockchain.
     * @param {TransactionBlockchainUpdateArgs} args - Arguments to update one TransactionBlockchain.
     * @example
     * // Update one TransactionBlockchain
     * const transactionBlockchain = await prisma.transactionBlockchain.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionBlockchainUpdateArgs>(args: SelectSubset<T, TransactionBlockchainUpdateArgs<ExtArgs>>): Prisma__TransactionBlockchainClient<$Result.GetResult<Prisma.$TransactionBlockchainPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TransactionBlockchains.
     * @param {TransactionBlockchainDeleteManyArgs} args - Arguments to filter TransactionBlockchains to delete.
     * @example
     * // Delete a few TransactionBlockchains
     * const { count } = await prisma.transactionBlockchain.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionBlockchainDeleteManyArgs>(args?: SelectSubset<T, TransactionBlockchainDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransactionBlockchains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionBlockchainUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TransactionBlockchains
     * const transactionBlockchain = await prisma.transactionBlockchain.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionBlockchainUpdateManyArgs>(args: SelectSubset<T, TransactionBlockchainUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TransactionBlockchain.
     * @param {TransactionBlockchainUpsertArgs} args - Arguments to update or create a TransactionBlockchain.
     * @example
     * // Update or create a TransactionBlockchain
     * const transactionBlockchain = await prisma.transactionBlockchain.upsert({
     *   create: {
     *     // ... data to create a TransactionBlockchain
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TransactionBlockchain we want to update
     *   }
     * })
     */
    upsert<T extends TransactionBlockchainUpsertArgs>(args: SelectSubset<T, TransactionBlockchainUpsertArgs<ExtArgs>>): Prisma__TransactionBlockchainClient<$Result.GetResult<Prisma.$TransactionBlockchainPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TransactionBlockchains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionBlockchainCountArgs} args - Arguments to filter TransactionBlockchains to count.
     * @example
     * // Count the number of TransactionBlockchains
     * const count = await prisma.transactionBlockchain.count({
     *   where: {
     *     // ... the filter for the TransactionBlockchains we want to count
     *   }
     * })
    **/
    count<T extends TransactionBlockchainCountArgs>(
      args?: Subset<T, TransactionBlockchainCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionBlockchainCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TransactionBlockchain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionBlockchainAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionBlockchainAggregateArgs>(args: Subset<T, TransactionBlockchainAggregateArgs>): Prisma.PrismaPromise<GetTransactionBlockchainAggregateType<T>>

    /**
     * Group by TransactionBlockchain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionBlockchainGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransactionBlockchainGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionBlockchainGroupByArgs['orderBy'] }
        : { orderBy?: TransactionBlockchainGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransactionBlockchainGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionBlockchainGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TransactionBlockchain model
   */
  readonly fields: TransactionBlockchainFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TransactionBlockchain.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionBlockchainClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TransactionBlockchain model
   */
  interface TransactionBlockchainFieldRefs {
    readonly id: FieldRef<"TransactionBlockchain", 'String'>
    readonly referenceBlockchain: FieldRef<"TransactionBlockchain", 'String'>
    readonly typeTransaction: FieldRef<"TransactionBlockchain", 'TypeTransaction'>
    readonly ressourceId: FieldRef<"TransactionBlockchain", 'String'>
    readonly universiteOrigine: FieldRef<"TransactionBlockchain", 'String'>
    readonly universiteDestination: FieldRef<"TransactionBlockchain", 'String'>
    readonly dateTransaction: FieldRef<"TransactionBlockchain", 'DateTime'>
    readonly statut: FieldRef<"TransactionBlockchain", 'StatutTransaction'>
    readonly hashTransaction: FieldRef<"TransactionBlockchain", 'String'>
    readonly donneesTechniques: FieldRef<"TransactionBlockchain", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * TransactionBlockchain findUnique
   */
  export type TransactionBlockchainFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionBlockchain
     */
    select?: TransactionBlockchainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionBlockchain
     */
    omit?: TransactionBlockchainOmit<ExtArgs> | null
    /**
     * Filter, which TransactionBlockchain to fetch.
     */
    where: TransactionBlockchainWhereUniqueInput
  }

  /**
   * TransactionBlockchain findUniqueOrThrow
   */
  export type TransactionBlockchainFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionBlockchain
     */
    select?: TransactionBlockchainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionBlockchain
     */
    omit?: TransactionBlockchainOmit<ExtArgs> | null
    /**
     * Filter, which TransactionBlockchain to fetch.
     */
    where: TransactionBlockchainWhereUniqueInput
  }

  /**
   * TransactionBlockchain findFirst
   */
  export type TransactionBlockchainFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionBlockchain
     */
    select?: TransactionBlockchainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionBlockchain
     */
    omit?: TransactionBlockchainOmit<ExtArgs> | null
    /**
     * Filter, which TransactionBlockchain to fetch.
     */
    where?: TransactionBlockchainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionBlockchains to fetch.
     */
    orderBy?: TransactionBlockchainOrderByWithRelationInput | TransactionBlockchainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransactionBlockchains.
     */
    cursor?: TransactionBlockchainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionBlockchains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionBlockchains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransactionBlockchains.
     */
    distinct?: TransactionBlockchainScalarFieldEnum | TransactionBlockchainScalarFieldEnum[]
  }

  /**
   * TransactionBlockchain findFirstOrThrow
   */
  export type TransactionBlockchainFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionBlockchain
     */
    select?: TransactionBlockchainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionBlockchain
     */
    omit?: TransactionBlockchainOmit<ExtArgs> | null
    /**
     * Filter, which TransactionBlockchain to fetch.
     */
    where?: TransactionBlockchainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionBlockchains to fetch.
     */
    orderBy?: TransactionBlockchainOrderByWithRelationInput | TransactionBlockchainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransactionBlockchains.
     */
    cursor?: TransactionBlockchainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionBlockchains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionBlockchains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransactionBlockchains.
     */
    distinct?: TransactionBlockchainScalarFieldEnum | TransactionBlockchainScalarFieldEnum[]
  }

  /**
   * TransactionBlockchain findMany
   */
  export type TransactionBlockchainFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionBlockchain
     */
    select?: TransactionBlockchainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionBlockchain
     */
    omit?: TransactionBlockchainOmit<ExtArgs> | null
    /**
     * Filter, which TransactionBlockchains to fetch.
     */
    where?: TransactionBlockchainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionBlockchains to fetch.
     */
    orderBy?: TransactionBlockchainOrderByWithRelationInput | TransactionBlockchainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TransactionBlockchains.
     */
    cursor?: TransactionBlockchainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionBlockchains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionBlockchains.
     */
    skip?: number
    distinct?: TransactionBlockchainScalarFieldEnum | TransactionBlockchainScalarFieldEnum[]
  }

  /**
   * TransactionBlockchain create
   */
  export type TransactionBlockchainCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionBlockchain
     */
    select?: TransactionBlockchainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionBlockchain
     */
    omit?: TransactionBlockchainOmit<ExtArgs> | null
    /**
     * The data needed to create a TransactionBlockchain.
     */
    data: XOR<TransactionBlockchainCreateInput, TransactionBlockchainUncheckedCreateInput>
  }

  /**
   * TransactionBlockchain createMany
   */
  export type TransactionBlockchainCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TransactionBlockchains.
     */
    data: TransactionBlockchainCreateManyInput | TransactionBlockchainCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TransactionBlockchain update
   */
  export type TransactionBlockchainUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionBlockchain
     */
    select?: TransactionBlockchainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionBlockchain
     */
    omit?: TransactionBlockchainOmit<ExtArgs> | null
    /**
     * The data needed to update a TransactionBlockchain.
     */
    data: XOR<TransactionBlockchainUpdateInput, TransactionBlockchainUncheckedUpdateInput>
    /**
     * Choose, which TransactionBlockchain to update.
     */
    where: TransactionBlockchainWhereUniqueInput
  }

  /**
   * TransactionBlockchain updateMany
   */
  export type TransactionBlockchainUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TransactionBlockchains.
     */
    data: XOR<TransactionBlockchainUpdateManyMutationInput, TransactionBlockchainUncheckedUpdateManyInput>
    /**
     * Filter which TransactionBlockchains to update
     */
    where?: TransactionBlockchainWhereInput
    /**
     * Limit how many TransactionBlockchains to update.
     */
    limit?: number
  }

  /**
   * TransactionBlockchain upsert
   */
  export type TransactionBlockchainUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionBlockchain
     */
    select?: TransactionBlockchainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionBlockchain
     */
    omit?: TransactionBlockchainOmit<ExtArgs> | null
    /**
     * The filter to search for the TransactionBlockchain to update in case it exists.
     */
    where: TransactionBlockchainWhereUniqueInput
    /**
     * In case the TransactionBlockchain found by the `where` argument doesn't exist, create a new TransactionBlockchain with this data.
     */
    create: XOR<TransactionBlockchainCreateInput, TransactionBlockchainUncheckedCreateInput>
    /**
     * In case the TransactionBlockchain was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionBlockchainUpdateInput, TransactionBlockchainUncheckedUpdateInput>
  }

  /**
   * TransactionBlockchain delete
   */
  export type TransactionBlockchainDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionBlockchain
     */
    select?: TransactionBlockchainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionBlockchain
     */
    omit?: TransactionBlockchainOmit<ExtArgs> | null
    /**
     * Filter which TransactionBlockchain to delete.
     */
    where: TransactionBlockchainWhereUniqueInput
  }

  /**
   * TransactionBlockchain deleteMany
   */
  export type TransactionBlockchainDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransactionBlockchains to delete
     */
    where?: TransactionBlockchainWhereInput
    /**
     * Limit how many TransactionBlockchains to delete.
     */
    limit?: number
  }

  /**
   * TransactionBlockchain without action
   */
  export type TransactionBlockchainDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionBlockchain
     */
    select?: TransactionBlockchainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionBlockchain
     */
    omit?: TransactionBlockchainOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
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
    universiteId: 'universiteId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RessourceScalarFieldEnum: {
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
    affiliationAuteurExterne: 'affiliationAuteurExterne'
  };

  export type RessourceScalarFieldEnum = (typeof RessourceScalarFieldEnum)[keyof typeof RessourceScalarFieldEnum]


  export const FavoriScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    ressourceId: 'ressourceId',
    dateAjout: 'dateAjout',
    note: 'note'
  };

  export type FavoriScalarFieldEnum = (typeof FavoriScalarFieldEnum)[keyof typeof FavoriScalarFieldEnum]


  export const UniversiteScalarFieldEnum: {
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

  export type UniversiteScalarFieldEnum = (typeof UniversiteScalarFieldEnum)[keyof typeof UniversiteScalarFieldEnum]


  export const CommentaireScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    ressourceId: 'ressourceId',
    contenu: 'contenu',
    dateCreation: 'dateCreation',
    estModere: 'estModere'
  };

  export type CommentaireScalarFieldEnum = (typeof CommentaireScalarFieldEnum)[keyof typeof CommentaireScalarFieldEnum]


  export const NotationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    ressourceId: 'ressourceId',
    note: 'note',
    dateNotation: 'dateNotation'
  };

  export type NotationScalarFieldEnum = (typeof NotationScalarFieldEnum)[keyof typeof NotationScalarFieldEnum]


  export const HistoriqueAccesScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    ressourceId: 'ressourceId',
    dateAcces: 'dateAcces',
    typeAcces: 'typeAcces',
    ipAcces: 'ipAcces',
    universiteSrc: 'universiteSrc'
  };

  export type HistoriqueAccesScalarFieldEnum = (typeof HistoriqueAccesScalarFieldEnum)[keyof typeof HistoriqueAccesScalarFieldEnum]


  export const DonneesRecommandationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    ressourceId: 'ressourceId',
    score: 'score',
    typeInteraction: 'typeInteraction',
    dateDonnee: 'dateDonnee'
  };

  export type DonneesRecommandationScalarFieldEnum = (typeof DonneesRecommandationScalarFieldEnum)[keyof typeof DonneesRecommandationScalarFieldEnum]


  export const CollectionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    nom: 'nom',
    description: 'description',
    estPublique: 'estPublique',
    dateCreation: 'dateCreation'
  };

  export type CollectionScalarFieldEnum = (typeof CollectionScalarFieldEnum)[keyof typeof CollectionScalarFieldEnum]


  export const CollectionRessourceScalarFieldEnum: {
    id: 'id',
    collectionId: 'collectionId',
    ressourceId: 'ressourceId',
    dateAjout: 'dateAjout',
    notes: 'notes'
  };

  export type CollectionRessourceScalarFieldEnum = (typeof CollectionRessourceScalarFieldEnum)[keyof typeof CollectionRessourceScalarFieldEnum]


  export const PartageUniversiteScalarFieldEnum: {
    id: 'id',
    ressourceId: 'ressourceId',
    universiteSource: 'universiteSource',
    universiteDestination: 'universiteDestination',
    datePartage: 'datePartage',
    estActif: 'estActif'
  };

  export type PartageUniversiteScalarFieldEnum = (typeof PartageUniversiteScalarFieldEnum)[keyof typeof PartageUniversiteScalarFieldEnum]


  export const TransactionBlockchainScalarFieldEnum: {
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

  export type TransactionBlockchainScalarFieldEnum = (typeof TransactionBlockchainScalarFieldEnum)[keyof typeof TransactionBlockchainScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
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
    universiteId: 'universiteId'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const RessourceOrderByRelevanceFieldEnum: {
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
    affiliationAuteurExterne: 'affiliationAuteurExterne'
  };

  export type RessourceOrderByRelevanceFieldEnum = (typeof RessourceOrderByRelevanceFieldEnum)[keyof typeof RessourceOrderByRelevanceFieldEnum]


  export const FavoriOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    ressourceId: 'ressourceId',
    note: 'note'
  };

  export type FavoriOrderByRelevanceFieldEnum = (typeof FavoriOrderByRelevanceFieldEnum)[keyof typeof FavoriOrderByRelevanceFieldEnum]


  export const UniversiteOrderByRelevanceFieldEnum: {
    id: 'id',
    nom: 'nom',
    adresse: 'adresse',
    ville: 'ville',
    pays: 'pays',
    siteWeb: 'siteWeb',
    adresseBlockchain: 'adresseBlockchain'
  };

  export type UniversiteOrderByRelevanceFieldEnum = (typeof UniversiteOrderByRelevanceFieldEnum)[keyof typeof UniversiteOrderByRelevanceFieldEnum]


  export const CommentaireOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    ressourceId: 'ressourceId',
    contenu: 'contenu'
  };

  export type CommentaireOrderByRelevanceFieldEnum = (typeof CommentaireOrderByRelevanceFieldEnum)[keyof typeof CommentaireOrderByRelevanceFieldEnum]


  export const NotationOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    ressourceId: 'ressourceId'
  };

  export type NotationOrderByRelevanceFieldEnum = (typeof NotationOrderByRelevanceFieldEnum)[keyof typeof NotationOrderByRelevanceFieldEnum]


  export const HistoriqueAccesOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    ressourceId: 'ressourceId',
    ipAcces: 'ipAcces',
    universiteSrc: 'universiteSrc'
  };

  export type HistoriqueAccesOrderByRelevanceFieldEnum = (typeof HistoriqueAccesOrderByRelevanceFieldEnum)[keyof typeof HistoriqueAccesOrderByRelevanceFieldEnum]


  export const DonneesRecommandationOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    ressourceId: 'ressourceId'
  };

  export type DonneesRecommandationOrderByRelevanceFieldEnum = (typeof DonneesRecommandationOrderByRelevanceFieldEnum)[keyof typeof DonneesRecommandationOrderByRelevanceFieldEnum]


  export const CollectionOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    nom: 'nom',
    description: 'description'
  };

  export type CollectionOrderByRelevanceFieldEnum = (typeof CollectionOrderByRelevanceFieldEnum)[keyof typeof CollectionOrderByRelevanceFieldEnum]


  export const CollectionRessourceOrderByRelevanceFieldEnum: {
    id: 'id',
    collectionId: 'collectionId',
    ressourceId: 'ressourceId',
    notes: 'notes'
  };

  export type CollectionRessourceOrderByRelevanceFieldEnum = (typeof CollectionRessourceOrderByRelevanceFieldEnum)[keyof typeof CollectionRessourceOrderByRelevanceFieldEnum]


  export const PartageUniversiteOrderByRelevanceFieldEnum: {
    id: 'id',
    ressourceId: 'ressourceId',
    universiteSource: 'universiteSource',
    universiteDestination: 'universiteDestination'
  };

  export type PartageUniversiteOrderByRelevanceFieldEnum = (typeof PartageUniversiteOrderByRelevanceFieldEnum)[keyof typeof PartageUniversiteOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const TransactionBlockchainOrderByRelevanceFieldEnum: {
    id: 'id',
    referenceBlockchain: 'referenceBlockchain',
    ressourceId: 'ressourceId',
    universiteOrigine: 'universiteOrigine',
    universiteDestination: 'universiteDestination',
    hashTransaction: 'hashTransaction'
  };

  export type TransactionBlockchainOrderByRelevanceFieldEnum = (typeof TransactionBlockchainOrderByRelevanceFieldEnum)[keyof typeof TransactionBlockchainOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'RoleUser'
   */
  export type EnumRoleUserFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoleUser'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'TypeRessource'
   */
  export type EnumTypeRessourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypeRessource'>
    


  /**
   * Reference to a field of type 'NiveauAcces'
   */
  export type EnumNiveauAccesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NiveauAcces'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'TypeAcces'
   */
  export type EnumTypeAccesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypeAcces'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'TypeInteraction'
   */
  export type EnumTypeInteractionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypeInteraction'>
    


  /**
   * Reference to a field of type 'TypeTransaction'
   */
  export type EnumTypeTransactionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypeTransaction'>
    


  /**
   * Reference to a field of type 'StatutTransaction'
   */
  export type EnumStatutTransactionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutTransaction'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    motDePasse?: StringFilter<"User"> | string
    nom?: StringFilter<"User"> | string
    prenom?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleUserFilter<"User"> | $Enums.RoleUser
    departement?: StringFilter<"User"> | string
    faculte?: StringFilter<"User"> | string
    specialite?: StringNullableFilter<"User"> | string | null
    niveauEtudes?: StringNullableFilter<"User"> | string | null
    dateInscription?: DateTimeFilter<"User"> | Date | string
    derniereConnexion?: DateTimeNullableFilter<"User"> | Date | string | null
    estActif?: BoolFilter<"User"> | boolean
    universiteId?: StringFilter<"User"> | string
    universite?: XOR<UniversiteScalarRelationFilter, UniversiteWhereInput>
    contributions?: RessourceListRelationFilter
    favoris?: FavoriListRelationFilter
    commentaires?: CommentaireListRelationFilter
    notations?: NotationListRelationFilter
    historiques?: HistoriqueAccesListRelationFilter
    collections?: CollectionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    motDePasse?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    image?: SortOrderInput | SortOrder
    role?: SortOrder
    departement?: SortOrder
    faculte?: SortOrder
    specialite?: SortOrderInput | SortOrder
    niveauEtudes?: SortOrderInput | SortOrder
    dateInscription?: SortOrder
    derniereConnexion?: SortOrderInput | SortOrder
    estActif?: SortOrder
    universiteId?: SortOrder
    universite?: UniversiteOrderByWithRelationInput
    contributions?: RessourceOrderByRelationAggregateInput
    favoris?: FavoriOrderByRelationAggregateInput
    commentaires?: CommentaireOrderByRelationAggregateInput
    notations?: NotationOrderByRelationAggregateInput
    historiques?: HistoriqueAccesOrderByRelationAggregateInput
    collections?: CollectionOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    motDePasse?: StringFilter<"User"> | string
    nom?: StringFilter<"User"> | string
    prenom?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleUserFilter<"User"> | $Enums.RoleUser
    departement?: StringFilter<"User"> | string
    faculte?: StringFilter<"User"> | string
    specialite?: StringNullableFilter<"User"> | string | null
    niveauEtudes?: StringNullableFilter<"User"> | string | null
    dateInscription?: DateTimeFilter<"User"> | Date | string
    derniereConnexion?: DateTimeNullableFilter<"User"> | Date | string | null
    estActif?: BoolFilter<"User"> | boolean
    universiteId?: StringFilter<"User"> | string
    universite?: XOR<UniversiteScalarRelationFilter, UniversiteWhereInput>
    contributions?: RessourceListRelationFilter
    favoris?: FavoriListRelationFilter
    commentaires?: CommentaireListRelationFilter
    notations?: NotationListRelationFilter
    historiques?: HistoriqueAccesListRelationFilter
    collections?: CollectionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    motDePasse?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    image?: SortOrderInput | SortOrder
    role?: SortOrder
    departement?: SortOrder
    faculte?: SortOrder
    specialite?: SortOrderInput | SortOrder
    niveauEtudes?: SortOrderInput | SortOrder
    dateInscription?: SortOrder
    derniereConnexion?: SortOrderInput | SortOrder
    estActif?: SortOrder
    universiteId?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    motDePasse?: StringWithAggregatesFilter<"User"> | string
    nom?: StringWithAggregatesFilter<"User"> | string
    prenom?: StringWithAggregatesFilter<"User"> | string
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleUserWithAggregatesFilter<"User"> | $Enums.RoleUser
    departement?: StringWithAggregatesFilter<"User"> | string
    faculte?: StringWithAggregatesFilter<"User"> | string
    specialite?: StringNullableWithAggregatesFilter<"User"> | string | null
    niveauEtudes?: StringNullableWithAggregatesFilter<"User"> | string | null
    dateInscription?: DateTimeWithAggregatesFilter<"User"> | Date | string
    derniereConnexion?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    estActif?: BoolWithAggregatesFilter<"User"> | boolean
    universiteId?: StringWithAggregatesFilter<"User"> | string
  }

  export type RessourceWhereInput = {
    AND?: RessourceWhereInput | RessourceWhereInput[]
    OR?: RessourceWhereInput[]
    NOT?: RessourceWhereInput | RessourceWhereInput[]
    id?: StringFilter<"Ressource"> | string
    titre?: StringFilter<"Ressource"> | string
    description?: StringFilter<"Ressource"> | string
    type?: EnumTypeRessourceFilter<"Ressource"> | $Enums.TypeRessource
    langue?: StringFilter<"Ressource"> | string
    urlFichier?: StringFilter<"Ressource"> | string
    urlFichierLocal?: StringNullableFilter<"Ressource"> | string | null
    format?: StringFilter<"Ressource"> | string
    dateCreation?: DateTimeFilter<"Ressource"> | Date | string
    dateModification?: DateTimeFilter<"Ressource"> | Date | string
    estPublique?: BoolFilter<"Ressource"> | boolean
    motsCles?: StringFilter<"Ressource"> | string
    auteurId?: StringNullableFilter<"Ressource"> | string | null
    universiteId?: StringFilter<"Ressource"> | string
    image?: StringNullableFilter<"Ressource"> | string | null
    niveauAcces?: EnumNiveauAccesFilter<"Ressource"> | $Enums.NiveauAcces
    datePublication?: DateTimeNullableFilter<"Ressource"> | Date | string | null
    estValide?: BoolFilter<"Ressource"> | boolean
    estArchive?: BoolFilter<"Ressource"> | boolean
    nomAuteurExterne?: StringNullableFilter<"Ressource"> | string | null
    prenomAuteurExterne?: StringNullableFilter<"Ressource"> | string | null
    affiliationAuteurExterne?: StringNullableFilter<"Ressource"> | string | null
    auteur?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    universite?: XOR<UniversiteScalarRelationFilter, UniversiteWhereInput>
    favoris?: FavoriListRelationFilter
    commentaires?: CommentaireListRelationFilter
    notations?: NotationListRelationFilter
    historiques?: HistoriqueAccesListRelationFilter
    collections?: CollectionRessourceListRelationFilter
    partages?: PartageUniversiteListRelationFilter
  }

  export type RessourceOrderByWithRelationInput = {
    id?: SortOrder
    titre?: SortOrder
    description?: SortOrder
    type?: SortOrder
    langue?: SortOrder
    urlFichier?: SortOrder
    urlFichierLocal?: SortOrderInput | SortOrder
    format?: SortOrder
    dateCreation?: SortOrder
    dateModification?: SortOrder
    estPublique?: SortOrder
    motsCles?: SortOrder
    auteurId?: SortOrderInput | SortOrder
    universiteId?: SortOrder
    image?: SortOrderInput | SortOrder
    niveauAcces?: SortOrder
    datePublication?: SortOrderInput | SortOrder
    estValide?: SortOrder
    estArchive?: SortOrder
    nomAuteurExterne?: SortOrderInput | SortOrder
    prenomAuteurExterne?: SortOrderInput | SortOrder
    affiliationAuteurExterne?: SortOrderInput | SortOrder
    auteur?: UserOrderByWithRelationInput
    universite?: UniversiteOrderByWithRelationInput
    favoris?: FavoriOrderByRelationAggregateInput
    commentaires?: CommentaireOrderByRelationAggregateInput
    notations?: NotationOrderByRelationAggregateInput
    historiques?: HistoriqueAccesOrderByRelationAggregateInput
    collections?: CollectionRessourceOrderByRelationAggregateInput
    partages?: PartageUniversiteOrderByRelationAggregateInput
    _relevance?: RessourceOrderByRelevanceInput
  }

  export type RessourceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RessourceWhereInput | RessourceWhereInput[]
    OR?: RessourceWhereInput[]
    NOT?: RessourceWhereInput | RessourceWhereInput[]
    titre?: StringFilter<"Ressource"> | string
    description?: StringFilter<"Ressource"> | string
    type?: EnumTypeRessourceFilter<"Ressource"> | $Enums.TypeRessource
    langue?: StringFilter<"Ressource"> | string
    urlFichier?: StringFilter<"Ressource"> | string
    urlFichierLocal?: StringNullableFilter<"Ressource"> | string | null
    format?: StringFilter<"Ressource"> | string
    dateCreation?: DateTimeFilter<"Ressource"> | Date | string
    dateModification?: DateTimeFilter<"Ressource"> | Date | string
    estPublique?: BoolFilter<"Ressource"> | boolean
    motsCles?: StringFilter<"Ressource"> | string
    auteurId?: StringNullableFilter<"Ressource"> | string | null
    universiteId?: StringFilter<"Ressource"> | string
    image?: StringNullableFilter<"Ressource"> | string | null
    niveauAcces?: EnumNiveauAccesFilter<"Ressource"> | $Enums.NiveauAcces
    datePublication?: DateTimeNullableFilter<"Ressource"> | Date | string | null
    estValide?: BoolFilter<"Ressource"> | boolean
    estArchive?: BoolFilter<"Ressource"> | boolean
    nomAuteurExterne?: StringNullableFilter<"Ressource"> | string | null
    prenomAuteurExterne?: StringNullableFilter<"Ressource"> | string | null
    affiliationAuteurExterne?: StringNullableFilter<"Ressource"> | string | null
    auteur?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    universite?: XOR<UniversiteScalarRelationFilter, UniversiteWhereInput>
    favoris?: FavoriListRelationFilter
    commentaires?: CommentaireListRelationFilter
    notations?: NotationListRelationFilter
    historiques?: HistoriqueAccesListRelationFilter
    collections?: CollectionRessourceListRelationFilter
    partages?: PartageUniversiteListRelationFilter
  }, "id">

  export type RessourceOrderByWithAggregationInput = {
    id?: SortOrder
    titre?: SortOrder
    description?: SortOrder
    type?: SortOrder
    langue?: SortOrder
    urlFichier?: SortOrder
    urlFichierLocal?: SortOrderInput | SortOrder
    format?: SortOrder
    dateCreation?: SortOrder
    dateModification?: SortOrder
    estPublique?: SortOrder
    motsCles?: SortOrder
    auteurId?: SortOrderInput | SortOrder
    universiteId?: SortOrder
    image?: SortOrderInput | SortOrder
    niveauAcces?: SortOrder
    datePublication?: SortOrderInput | SortOrder
    estValide?: SortOrder
    estArchive?: SortOrder
    nomAuteurExterne?: SortOrderInput | SortOrder
    prenomAuteurExterne?: SortOrderInput | SortOrder
    affiliationAuteurExterne?: SortOrderInput | SortOrder
    _count?: RessourceCountOrderByAggregateInput
    _max?: RessourceMaxOrderByAggregateInput
    _min?: RessourceMinOrderByAggregateInput
  }

  export type RessourceScalarWhereWithAggregatesInput = {
    AND?: RessourceScalarWhereWithAggregatesInput | RessourceScalarWhereWithAggregatesInput[]
    OR?: RessourceScalarWhereWithAggregatesInput[]
    NOT?: RessourceScalarWhereWithAggregatesInput | RessourceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ressource"> | string
    titre?: StringWithAggregatesFilter<"Ressource"> | string
    description?: StringWithAggregatesFilter<"Ressource"> | string
    type?: EnumTypeRessourceWithAggregatesFilter<"Ressource"> | $Enums.TypeRessource
    langue?: StringWithAggregatesFilter<"Ressource"> | string
    urlFichier?: StringWithAggregatesFilter<"Ressource"> | string
    urlFichierLocal?: StringNullableWithAggregatesFilter<"Ressource"> | string | null
    format?: StringWithAggregatesFilter<"Ressource"> | string
    dateCreation?: DateTimeWithAggregatesFilter<"Ressource"> | Date | string
    dateModification?: DateTimeWithAggregatesFilter<"Ressource"> | Date | string
    estPublique?: BoolWithAggregatesFilter<"Ressource"> | boolean
    motsCles?: StringWithAggregatesFilter<"Ressource"> | string
    auteurId?: StringNullableWithAggregatesFilter<"Ressource"> | string | null
    universiteId?: StringWithAggregatesFilter<"Ressource"> | string
    image?: StringNullableWithAggregatesFilter<"Ressource"> | string | null
    niveauAcces?: EnumNiveauAccesWithAggregatesFilter<"Ressource"> | $Enums.NiveauAcces
    datePublication?: DateTimeNullableWithAggregatesFilter<"Ressource"> | Date | string | null
    estValide?: BoolWithAggregatesFilter<"Ressource"> | boolean
    estArchive?: BoolWithAggregatesFilter<"Ressource"> | boolean
    nomAuteurExterne?: StringNullableWithAggregatesFilter<"Ressource"> | string | null
    prenomAuteurExterne?: StringNullableWithAggregatesFilter<"Ressource"> | string | null
    affiliationAuteurExterne?: StringNullableWithAggregatesFilter<"Ressource"> | string | null
  }

  export type FavoriWhereInput = {
    AND?: FavoriWhereInput | FavoriWhereInput[]
    OR?: FavoriWhereInput[]
    NOT?: FavoriWhereInput | FavoriWhereInput[]
    id?: StringFilter<"Favori"> | string
    userId?: StringFilter<"Favori"> | string
    ressourceId?: StringFilter<"Favori"> | string
    dateAjout?: DateTimeFilter<"Favori"> | Date | string
    note?: StringNullableFilter<"Favori"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    ressource?: XOR<RessourceScalarRelationFilter, RessourceWhereInput>
  }

  export type FavoriOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    ressourceId?: SortOrder
    dateAjout?: SortOrder
    note?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    ressource?: RessourceOrderByWithRelationInput
    _relevance?: FavoriOrderByRelevanceInput
  }

  export type FavoriWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_ressourceId?: FavoriUserIdRessourceIdCompoundUniqueInput
    AND?: FavoriWhereInput | FavoriWhereInput[]
    OR?: FavoriWhereInput[]
    NOT?: FavoriWhereInput | FavoriWhereInput[]
    userId?: StringFilter<"Favori"> | string
    ressourceId?: StringFilter<"Favori"> | string
    dateAjout?: DateTimeFilter<"Favori"> | Date | string
    note?: StringNullableFilter<"Favori"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    ressource?: XOR<RessourceScalarRelationFilter, RessourceWhereInput>
  }, "id" | "userId_ressourceId">

  export type FavoriOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    ressourceId?: SortOrder
    dateAjout?: SortOrder
    note?: SortOrderInput | SortOrder
    _count?: FavoriCountOrderByAggregateInput
    _max?: FavoriMaxOrderByAggregateInput
    _min?: FavoriMinOrderByAggregateInput
  }

  export type FavoriScalarWhereWithAggregatesInput = {
    AND?: FavoriScalarWhereWithAggregatesInput | FavoriScalarWhereWithAggregatesInput[]
    OR?: FavoriScalarWhereWithAggregatesInput[]
    NOT?: FavoriScalarWhereWithAggregatesInput | FavoriScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Favori"> | string
    userId?: StringWithAggregatesFilter<"Favori"> | string
    ressourceId?: StringWithAggregatesFilter<"Favori"> | string
    dateAjout?: DateTimeWithAggregatesFilter<"Favori"> | Date | string
    note?: StringNullableWithAggregatesFilter<"Favori"> | string | null
  }

  export type UniversiteWhereInput = {
    AND?: UniversiteWhereInput | UniversiteWhereInput[]
    OR?: UniversiteWhereInput[]
    NOT?: UniversiteWhereInput | UniversiteWhereInput[]
    id?: StringFilter<"Universite"> | string
    nom?: StringFilter<"Universite"> | string
    adresse?: StringNullableFilter<"Universite"> | string | null
    ville?: StringFilter<"Universite"> | string
    pays?: StringFilter<"Universite"> | string
    siteWeb?: StringNullableFilter<"Universite"> | string | null
    dateCreation?: DateTimeFilter<"Universite"> | Date | string
    adresseBlockchain?: StringNullableFilter<"Universite"> | string | null
    estActive?: BoolFilter<"Universite"> | boolean
    users?: UserListRelationFilter
    ressources?: RessourceListRelationFilter
  }

  export type UniversiteOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    adresse?: SortOrderInput | SortOrder
    ville?: SortOrder
    pays?: SortOrder
    siteWeb?: SortOrderInput | SortOrder
    dateCreation?: SortOrder
    adresseBlockchain?: SortOrderInput | SortOrder
    estActive?: SortOrder
    users?: UserOrderByRelationAggregateInput
    ressources?: RessourceOrderByRelationAggregateInput
    _relevance?: UniversiteOrderByRelevanceInput
  }

  export type UniversiteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nom?: string
    AND?: UniversiteWhereInput | UniversiteWhereInput[]
    OR?: UniversiteWhereInput[]
    NOT?: UniversiteWhereInput | UniversiteWhereInput[]
    adresse?: StringNullableFilter<"Universite"> | string | null
    ville?: StringFilter<"Universite"> | string
    pays?: StringFilter<"Universite"> | string
    siteWeb?: StringNullableFilter<"Universite"> | string | null
    dateCreation?: DateTimeFilter<"Universite"> | Date | string
    adresseBlockchain?: StringNullableFilter<"Universite"> | string | null
    estActive?: BoolFilter<"Universite"> | boolean
    users?: UserListRelationFilter
    ressources?: RessourceListRelationFilter
  }, "id" | "nom">

  export type UniversiteOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    adresse?: SortOrderInput | SortOrder
    ville?: SortOrder
    pays?: SortOrder
    siteWeb?: SortOrderInput | SortOrder
    dateCreation?: SortOrder
    adresseBlockchain?: SortOrderInput | SortOrder
    estActive?: SortOrder
    _count?: UniversiteCountOrderByAggregateInput
    _max?: UniversiteMaxOrderByAggregateInput
    _min?: UniversiteMinOrderByAggregateInput
  }

  export type UniversiteScalarWhereWithAggregatesInput = {
    AND?: UniversiteScalarWhereWithAggregatesInput | UniversiteScalarWhereWithAggregatesInput[]
    OR?: UniversiteScalarWhereWithAggregatesInput[]
    NOT?: UniversiteScalarWhereWithAggregatesInput | UniversiteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Universite"> | string
    nom?: StringWithAggregatesFilter<"Universite"> | string
    adresse?: StringNullableWithAggregatesFilter<"Universite"> | string | null
    ville?: StringWithAggregatesFilter<"Universite"> | string
    pays?: StringWithAggregatesFilter<"Universite"> | string
    siteWeb?: StringNullableWithAggregatesFilter<"Universite"> | string | null
    dateCreation?: DateTimeWithAggregatesFilter<"Universite"> | Date | string
    adresseBlockchain?: StringNullableWithAggregatesFilter<"Universite"> | string | null
    estActive?: BoolWithAggregatesFilter<"Universite"> | boolean
  }

  export type CommentaireWhereInput = {
    AND?: CommentaireWhereInput | CommentaireWhereInput[]
    OR?: CommentaireWhereInput[]
    NOT?: CommentaireWhereInput | CommentaireWhereInput[]
    id?: StringFilter<"Commentaire"> | string
    userId?: StringFilter<"Commentaire"> | string
    ressourceId?: StringFilter<"Commentaire"> | string
    contenu?: StringFilter<"Commentaire"> | string
    dateCreation?: DateTimeFilter<"Commentaire"> | Date | string
    estModere?: BoolFilter<"Commentaire"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    ressource?: XOR<RessourceScalarRelationFilter, RessourceWhereInput>
  }

  export type CommentaireOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    ressourceId?: SortOrder
    contenu?: SortOrder
    dateCreation?: SortOrder
    estModere?: SortOrder
    user?: UserOrderByWithRelationInput
    ressource?: RessourceOrderByWithRelationInput
    _relevance?: CommentaireOrderByRelevanceInput
  }

  export type CommentaireWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommentaireWhereInput | CommentaireWhereInput[]
    OR?: CommentaireWhereInput[]
    NOT?: CommentaireWhereInput | CommentaireWhereInput[]
    userId?: StringFilter<"Commentaire"> | string
    ressourceId?: StringFilter<"Commentaire"> | string
    contenu?: StringFilter<"Commentaire"> | string
    dateCreation?: DateTimeFilter<"Commentaire"> | Date | string
    estModere?: BoolFilter<"Commentaire"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    ressource?: XOR<RessourceScalarRelationFilter, RessourceWhereInput>
  }, "id">

  export type CommentaireOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    ressourceId?: SortOrder
    contenu?: SortOrder
    dateCreation?: SortOrder
    estModere?: SortOrder
    _count?: CommentaireCountOrderByAggregateInput
    _max?: CommentaireMaxOrderByAggregateInput
    _min?: CommentaireMinOrderByAggregateInput
  }

  export type CommentaireScalarWhereWithAggregatesInput = {
    AND?: CommentaireScalarWhereWithAggregatesInput | CommentaireScalarWhereWithAggregatesInput[]
    OR?: CommentaireScalarWhereWithAggregatesInput[]
    NOT?: CommentaireScalarWhereWithAggregatesInput | CommentaireScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Commentaire"> | string
    userId?: StringWithAggregatesFilter<"Commentaire"> | string
    ressourceId?: StringWithAggregatesFilter<"Commentaire"> | string
    contenu?: StringWithAggregatesFilter<"Commentaire"> | string
    dateCreation?: DateTimeWithAggregatesFilter<"Commentaire"> | Date | string
    estModere?: BoolWithAggregatesFilter<"Commentaire"> | boolean
  }

  export type NotationWhereInput = {
    AND?: NotationWhereInput | NotationWhereInput[]
    OR?: NotationWhereInput[]
    NOT?: NotationWhereInput | NotationWhereInput[]
    id?: StringFilter<"Notation"> | string
    userId?: StringFilter<"Notation"> | string
    ressourceId?: StringFilter<"Notation"> | string
    note?: IntFilter<"Notation"> | number
    dateNotation?: DateTimeFilter<"Notation"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    ressource?: XOR<RessourceScalarRelationFilter, RessourceWhereInput>
  }

  export type NotationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    ressourceId?: SortOrder
    note?: SortOrder
    dateNotation?: SortOrder
    user?: UserOrderByWithRelationInput
    ressource?: RessourceOrderByWithRelationInput
    _relevance?: NotationOrderByRelevanceInput
  }

  export type NotationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_ressourceId?: NotationUserIdRessourceIdCompoundUniqueInput
    AND?: NotationWhereInput | NotationWhereInput[]
    OR?: NotationWhereInput[]
    NOT?: NotationWhereInput | NotationWhereInput[]
    userId?: StringFilter<"Notation"> | string
    ressourceId?: StringFilter<"Notation"> | string
    note?: IntFilter<"Notation"> | number
    dateNotation?: DateTimeFilter<"Notation"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    ressource?: XOR<RessourceScalarRelationFilter, RessourceWhereInput>
  }, "id" | "userId_ressourceId">

  export type NotationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    ressourceId?: SortOrder
    note?: SortOrder
    dateNotation?: SortOrder
    _count?: NotationCountOrderByAggregateInput
    _avg?: NotationAvgOrderByAggregateInput
    _max?: NotationMaxOrderByAggregateInput
    _min?: NotationMinOrderByAggregateInput
    _sum?: NotationSumOrderByAggregateInput
  }

  export type NotationScalarWhereWithAggregatesInput = {
    AND?: NotationScalarWhereWithAggregatesInput | NotationScalarWhereWithAggregatesInput[]
    OR?: NotationScalarWhereWithAggregatesInput[]
    NOT?: NotationScalarWhereWithAggregatesInput | NotationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notation"> | string
    userId?: StringWithAggregatesFilter<"Notation"> | string
    ressourceId?: StringWithAggregatesFilter<"Notation"> | string
    note?: IntWithAggregatesFilter<"Notation"> | number
    dateNotation?: DateTimeWithAggregatesFilter<"Notation"> | Date | string
  }

  export type HistoriqueAccesWhereInput = {
    AND?: HistoriqueAccesWhereInput | HistoriqueAccesWhereInput[]
    OR?: HistoriqueAccesWhereInput[]
    NOT?: HistoriqueAccesWhereInput | HistoriqueAccesWhereInput[]
    id?: StringFilter<"HistoriqueAcces"> | string
    userId?: StringFilter<"HistoriqueAcces"> | string
    ressourceId?: StringFilter<"HistoriqueAcces"> | string
    dateAcces?: DateTimeFilter<"HistoriqueAcces"> | Date | string
    typeAcces?: EnumTypeAccesFilter<"HistoriqueAcces"> | $Enums.TypeAcces
    ipAcces?: StringFilter<"HistoriqueAcces"> | string
    universiteSrc?: StringNullableFilter<"HistoriqueAcces"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    ressource?: XOR<RessourceScalarRelationFilter, RessourceWhereInput>
  }

  export type HistoriqueAccesOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    ressourceId?: SortOrder
    dateAcces?: SortOrder
    typeAcces?: SortOrder
    ipAcces?: SortOrder
    universiteSrc?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    ressource?: RessourceOrderByWithRelationInput
    _relevance?: HistoriqueAccesOrderByRelevanceInput
  }

  export type HistoriqueAccesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HistoriqueAccesWhereInput | HistoriqueAccesWhereInput[]
    OR?: HistoriqueAccesWhereInput[]
    NOT?: HistoriqueAccesWhereInput | HistoriqueAccesWhereInput[]
    userId?: StringFilter<"HistoriqueAcces"> | string
    ressourceId?: StringFilter<"HistoriqueAcces"> | string
    dateAcces?: DateTimeFilter<"HistoriqueAcces"> | Date | string
    typeAcces?: EnumTypeAccesFilter<"HistoriqueAcces"> | $Enums.TypeAcces
    ipAcces?: StringFilter<"HistoriqueAcces"> | string
    universiteSrc?: StringNullableFilter<"HistoriqueAcces"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    ressource?: XOR<RessourceScalarRelationFilter, RessourceWhereInput>
  }, "id">

  export type HistoriqueAccesOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    ressourceId?: SortOrder
    dateAcces?: SortOrder
    typeAcces?: SortOrder
    ipAcces?: SortOrder
    universiteSrc?: SortOrderInput | SortOrder
    _count?: HistoriqueAccesCountOrderByAggregateInput
    _max?: HistoriqueAccesMaxOrderByAggregateInput
    _min?: HistoriqueAccesMinOrderByAggregateInput
  }

  export type HistoriqueAccesScalarWhereWithAggregatesInput = {
    AND?: HistoriqueAccesScalarWhereWithAggregatesInput | HistoriqueAccesScalarWhereWithAggregatesInput[]
    OR?: HistoriqueAccesScalarWhereWithAggregatesInput[]
    NOT?: HistoriqueAccesScalarWhereWithAggregatesInput | HistoriqueAccesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HistoriqueAcces"> | string
    userId?: StringWithAggregatesFilter<"HistoriqueAcces"> | string
    ressourceId?: StringWithAggregatesFilter<"HistoriqueAcces"> | string
    dateAcces?: DateTimeWithAggregatesFilter<"HistoriqueAcces"> | Date | string
    typeAcces?: EnumTypeAccesWithAggregatesFilter<"HistoriqueAcces"> | $Enums.TypeAcces
    ipAcces?: StringWithAggregatesFilter<"HistoriqueAcces"> | string
    universiteSrc?: StringNullableWithAggregatesFilter<"HistoriqueAcces"> | string | null
  }

  export type DonneesRecommandationWhereInput = {
    AND?: DonneesRecommandationWhereInput | DonneesRecommandationWhereInput[]
    OR?: DonneesRecommandationWhereInput[]
    NOT?: DonneesRecommandationWhereInput | DonneesRecommandationWhereInput[]
    id?: StringFilter<"DonneesRecommandation"> | string
    userId?: StringFilter<"DonneesRecommandation"> | string
    ressourceId?: StringFilter<"DonneesRecommandation"> | string
    score?: FloatFilter<"DonneesRecommandation"> | number
    typeInteraction?: EnumTypeInteractionFilter<"DonneesRecommandation"> | $Enums.TypeInteraction
    dateDonnee?: DateTimeFilter<"DonneesRecommandation"> | Date | string
  }

  export type DonneesRecommandationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    ressourceId?: SortOrder
    score?: SortOrder
    typeInteraction?: SortOrder
    dateDonnee?: SortOrder
    _relevance?: DonneesRecommandationOrderByRelevanceInput
  }

  export type DonneesRecommandationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DonneesRecommandationWhereInput | DonneesRecommandationWhereInput[]
    OR?: DonneesRecommandationWhereInput[]
    NOT?: DonneesRecommandationWhereInput | DonneesRecommandationWhereInput[]
    userId?: StringFilter<"DonneesRecommandation"> | string
    ressourceId?: StringFilter<"DonneesRecommandation"> | string
    score?: FloatFilter<"DonneesRecommandation"> | number
    typeInteraction?: EnumTypeInteractionFilter<"DonneesRecommandation"> | $Enums.TypeInteraction
    dateDonnee?: DateTimeFilter<"DonneesRecommandation"> | Date | string
  }, "id">

  export type DonneesRecommandationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    ressourceId?: SortOrder
    score?: SortOrder
    typeInteraction?: SortOrder
    dateDonnee?: SortOrder
    _count?: DonneesRecommandationCountOrderByAggregateInput
    _avg?: DonneesRecommandationAvgOrderByAggregateInput
    _max?: DonneesRecommandationMaxOrderByAggregateInput
    _min?: DonneesRecommandationMinOrderByAggregateInput
    _sum?: DonneesRecommandationSumOrderByAggregateInput
  }

  export type DonneesRecommandationScalarWhereWithAggregatesInput = {
    AND?: DonneesRecommandationScalarWhereWithAggregatesInput | DonneesRecommandationScalarWhereWithAggregatesInput[]
    OR?: DonneesRecommandationScalarWhereWithAggregatesInput[]
    NOT?: DonneesRecommandationScalarWhereWithAggregatesInput | DonneesRecommandationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DonneesRecommandation"> | string
    userId?: StringWithAggregatesFilter<"DonneesRecommandation"> | string
    ressourceId?: StringWithAggregatesFilter<"DonneesRecommandation"> | string
    score?: FloatWithAggregatesFilter<"DonneesRecommandation"> | number
    typeInteraction?: EnumTypeInteractionWithAggregatesFilter<"DonneesRecommandation"> | $Enums.TypeInteraction
    dateDonnee?: DateTimeWithAggregatesFilter<"DonneesRecommandation"> | Date | string
  }

  export type CollectionWhereInput = {
    AND?: CollectionWhereInput | CollectionWhereInput[]
    OR?: CollectionWhereInput[]
    NOT?: CollectionWhereInput | CollectionWhereInput[]
    id?: StringFilter<"Collection"> | string
    userId?: StringFilter<"Collection"> | string
    nom?: StringFilter<"Collection"> | string
    description?: StringNullableFilter<"Collection"> | string | null
    estPublique?: BoolFilter<"Collection"> | boolean
    dateCreation?: DateTimeFilter<"Collection"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    ressources?: CollectionRessourceListRelationFilter
  }

  export type CollectionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    nom?: SortOrder
    description?: SortOrderInput | SortOrder
    estPublique?: SortOrder
    dateCreation?: SortOrder
    user?: UserOrderByWithRelationInput
    ressources?: CollectionRessourceOrderByRelationAggregateInput
    _relevance?: CollectionOrderByRelevanceInput
  }

  export type CollectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CollectionWhereInput | CollectionWhereInput[]
    OR?: CollectionWhereInput[]
    NOT?: CollectionWhereInput | CollectionWhereInput[]
    userId?: StringFilter<"Collection"> | string
    nom?: StringFilter<"Collection"> | string
    description?: StringNullableFilter<"Collection"> | string | null
    estPublique?: BoolFilter<"Collection"> | boolean
    dateCreation?: DateTimeFilter<"Collection"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    ressources?: CollectionRessourceListRelationFilter
  }, "id">

  export type CollectionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    nom?: SortOrder
    description?: SortOrderInput | SortOrder
    estPublique?: SortOrder
    dateCreation?: SortOrder
    _count?: CollectionCountOrderByAggregateInput
    _max?: CollectionMaxOrderByAggregateInput
    _min?: CollectionMinOrderByAggregateInput
  }

  export type CollectionScalarWhereWithAggregatesInput = {
    AND?: CollectionScalarWhereWithAggregatesInput | CollectionScalarWhereWithAggregatesInput[]
    OR?: CollectionScalarWhereWithAggregatesInput[]
    NOT?: CollectionScalarWhereWithAggregatesInput | CollectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Collection"> | string
    userId?: StringWithAggregatesFilter<"Collection"> | string
    nom?: StringWithAggregatesFilter<"Collection"> | string
    description?: StringNullableWithAggregatesFilter<"Collection"> | string | null
    estPublique?: BoolWithAggregatesFilter<"Collection"> | boolean
    dateCreation?: DateTimeWithAggregatesFilter<"Collection"> | Date | string
  }

  export type CollectionRessourceWhereInput = {
    AND?: CollectionRessourceWhereInput | CollectionRessourceWhereInput[]
    OR?: CollectionRessourceWhereInput[]
    NOT?: CollectionRessourceWhereInput | CollectionRessourceWhereInput[]
    id?: StringFilter<"CollectionRessource"> | string
    collectionId?: StringFilter<"CollectionRessource"> | string
    ressourceId?: StringFilter<"CollectionRessource"> | string
    dateAjout?: DateTimeFilter<"CollectionRessource"> | Date | string
    notes?: StringNullableFilter<"CollectionRessource"> | string | null
    collection?: XOR<CollectionScalarRelationFilter, CollectionWhereInput>
    ressource?: XOR<RessourceScalarRelationFilter, RessourceWhereInput>
  }

  export type CollectionRessourceOrderByWithRelationInput = {
    id?: SortOrder
    collectionId?: SortOrder
    ressourceId?: SortOrder
    dateAjout?: SortOrder
    notes?: SortOrderInput | SortOrder
    collection?: CollectionOrderByWithRelationInput
    ressource?: RessourceOrderByWithRelationInput
    _relevance?: CollectionRessourceOrderByRelevanceInput
  }

  export type CollectionRessourceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    collectionId_ressourceId?: CollectionRessourceCollectionIdRessourceIdCompoundUniqueInput
    AND?: CollectionRessourceWhereInput | CollectionRessourceWhereInput[]
    OR?: CollectionRessourceWhereInput[]
    NOT?: CollectionRessourceWhereInput | CollectionRessourceWhereInput[]
    collectionId?: StringFilter<"CollectionRessource"> | string
    ressourceId?: StringFilter<"CollectionRessource"> | string
    dateAjout?: DateTimeFilter<"CollectionRessource"> | Date | string
    notes?: StringNullableFilter<"CollectionRessource"> | string | null
    collection?: XOR<CollectionScalarRelationFilter, CollectionWhereInput>
    ressource?: XOR<RessourceScalarRelationFilter, RessourceWhereInput>
  }, "id" | "collectionId_ressourceId">

  export type CollectionRessourceOrderByWithAggregationInput = {
    id?: SortOrder
    collectionId?: SortOrder
    ressourceId?: SortOrder
    dateAjout?: SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: CollectionRessourceCountOrderByAggregateInput
    _max?: CollectionRessourceMaxOrderByAggregateInput
    _min?: CollectionRessourceMinOrderByAggregateInput
  }

  export type CollectionRessourceScalarWhereWithAggregatesInput = {
    AND?: CollectionRessourceScalarWhereWithAggregatesInput | CollectionRessourceScalarWhereWithAggregatesInput[]
    OR?: CollectionRessourceScalarWhereWithAggregatesInput[]
    NOT?: CollectionRessourceScalarWhereWithAggregatesInput | CollectionRessourceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CollectionRessource"> | string
    collectionId?: StringWithAggregatesFilter<"CollectionRessource"> | string
    ressourceId?: StringWithAggregatesFilter<"CollectionRessource"> | string
    dateAjout?: DateTimeWithAggregatesFilter<"CollectionRessource"> | Date | string
    notes?: StringNullableWithAggregatesFilter<"CollectionRessource"> | string | null
  }

  export type PartageUniversiteWhereInput = {
    AND?: PartageUniversiteWhereInput | PartageUniversiteWhereInput[]
    OR?: PartageUniversiteWhereInput[]
    NOT?: PartageUniversiteWhereInput | PartageUniversiteWhereInput[]
    id?: StringFilter<"PartageUniversite"> | string
    ressourceId?: StringFilter<"PartageUniversite"> | string
    universiteSource?: StringFilter<"PartageUniversite"> | string
    universiteDestination?: StringFilter<"PartageUniversite"> | string
    datePartage?: DateTimeFilter<"PartageUniversite"> | Date | string
    estActif?: BoolFilter<"PartageUniversite"> | boolean
    ressource?: XOR<RessourceScalarRelationFilter, RessourceWhereInput>
  }

  export type PartageUniversiteOrderByWithRelationInput = {
    id?: SortOrder
    ressourceId?: SortOrder
    universiteSource?: SortOrder
    universiteDestination?: SortOrder
    datePartage?: SortOrder
    estActif?: SortOrder
    ressource?: RessourceOrderByWithRelationInput
    _relevance?: PartageUniversiteOrderByRelevanceInput
  }

  export type PartageUniversiteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    ressourceId_universiteDestination?: PartageUniversiteRessourceIdUniversiteDestinationCompoundUniqueInput
    AND?: PartageUniversiteWhereInput | PartageUniversiteWhereInput[]
    OR?: PartageUniversiteWhereInput[]
    NOT?: PartageUniversiteWhereInput | PartageUniversiteWhereInput[]
    ressourceId?: StringFilter<"PartageUniversite"> | string
    universiteSource?: StringFilter<"PartageUniversite"> | string
    universiteDestination?: StringFilter<"PartageUniversite"> | string
    datePartage?: DateTimeFilter<"PartageUniversite"> | Date | string
    estActif?: BoolFilter<"PartageUniversite"> | boolean
    ressource?: XOR<RessourceScalarRelationFilter, RessourceWhereInput>
  }, "id" | "ressourceId_universiteDestination">

  export type PartageUniversiteOrderByWithAggregationInput = {
    id?: SortOrder
    ressourceId?: SortOrder
    universiteSource?: SortOrder
    universiteDestination?: SortOrder
    datePartage?: SortOrder
    estActif?: SortOrder
    _count?: PartageUniversiteCountOrderByAggregateInput
    _max?: PartageUniversiteMaxOrderByAggregateInput
    _min?: PartageUniversiteMinOrderByAggregateInput
  }

  export type PartageUniversiteScalarWhereWithAggregatesInput = {
    AND?: PartageUniversiteScalarWhereWithAggregatesInput | PartageUniversiteScalarWhereWithAggregatesInput[]
    OR?: PartageUniversiteScalarWhereWithAggregatesInput[]
    NOT?: PartageUniversiteScalarWhereWithAggregatesInput | PartageUniversiteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PartageUniversite"> | string
    ressourceId?: StringWithAggregatesFilter<"PartageUniversite"> | string
    universiteSource?: StringWithAggregatesFilter<"PartageUniversite"> | string
    universiteDestination?: StringWithAggregatesFilter<"PartageUniversite"> | string
    datePartage?: DateTimeWithAggregatesFilter<"PartageUniversite"> | Date | string
    estActif?: BoolWithAggregatesFilter<"PartageUniversite"> | boolean
  }

  export type TransactionBlockchainWhereInput = {
    AND?: TransactionBlockchainWhereInput | TransactionBlockchainWhereInput[]
    OR?: TransactionBlockchainWhereInput[]
    NOT?: TransactionBlockchainWhereInput | TransactionBlockchainWhereInput[]
    id?: StringFilter<"TransactionBlockchain"> | string
    referenceBlockchain?: StringFilter<"TransactionBlockchain"> | string
    typeTransaction?: EnumTypeTransactionFilter<"TransactionBlockchain"> | $Enums.TypeTransaction
    ressourceId?: StringNullableFilter<"TransactionBlockchain"> | string | null
    universiteOrigine?: StringFilter<"TransactionBlockchain"> | string
    universiteDestination?: StringNullableFilter<"TransactionBlockchain"> | string | null
    dateTransaction?: DateTimeFilter<"TransactionBlockchain"> | Date | string
    statut?: EnumStatutTransactionFilter<"TransactionBlockchain"> | $Enums.StatutTransaction
    hashTransaction?: StringFilter<"TransactionBlockchain"> | string
    donneesTechniques?: JsonNullableFilter<"TransactionBlockchain">
  }

  export type TransactionBlockchainOrderByWithRelationInput = {
    id?: SortOrder
    referenceBlockchain?: SortOrder
    typeTransaction?: SortOrder
    ressourceId?: SortOrderInput | SortOrder
    universiteOrigine?: SortOrder
    universiteDestination?: SortOrderInput | SortOrder
    dateTransaction?: SortOrder
    statut?: SortOrder
    hashTransaction?: SortOrder
    donneesTechniques?: SortOrderInput | SortOrder
    _relevance?: TransactionBlockchainOrderByRelevanceInput
  }

  export type TransactionBlockchainWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    referenceBlockchain?: string
    hashTransaction?: string
    AND?: TransactionBlockchainWhereInput | TransactionBlockchainWhereInput[]
    OR?: TransactionBlockchainWhereInput[]
    NOT?: TransactionBlockchainWhereInput | TransactionBlockchainWhereInput[]
    typeTransaction?: EnumTypeTransactionFilter<"TransactionBlockchain"> | $Enums.TypeTransaction
    ressourceId?: StringNullableFilter<"TransactionBlockchain"> | string | null
    universiteOrigine?: StringFilter<"TransactionBlockchain"> | string
    universiteDestination?: StringNullableFilter<"TransactionBlockchain"> | string | null
    dateTransaction?: DateTimeFilter<"TransactionBlockchain"> | Date | string
    statut?: EnumStatutTransactionFilter<"TransactionBlockchain"> | $Enums.StatutTransaction
    donneesTechniques?: JsonNullableFilter<"TransactionBlockchain">
  }, "id" | "referenceBlockchain" | "hashTransaction">

  export type TransactionBlockchainOrderByWithAggregationInput = {
    id?: SortOrder
    referenceBlockchain?: SortOrder
    typeTransaction?: SortOrder
    ressourceId?: SortOrderInput | SortOrder
    universiteOrigine?: SortOrder
    universiteDestination?: SortOrderInput | SortOrder
    dateTransaction?: SortOrder
    statut?: SortOrder
    hashTransaction?: SortOrder
    donneesTechniques?: SortOrderInput | SortOrder
    _count?: TransactionBlockchainCountOrderByAggregateInput
    _max?: TransactionBlockchainMaxOrderByAggregateInput
    _min?: TransactionBlockchainMinOrderByAggregateInput
  }

  export type TransactionBlockchainScalarWhereWithAggregatesInput = {
    AND?: TransactionBlockchainScalarWhereWithAggregatesInput | TransactionBlockchainScalarWhereWithAggregatesInput[]
    OR?: TransactionBlockchainScalarWhereWithAggregatesInput[]
    NOT?: TransactionBlockchainScalarWhereWithAggregatesInput | TransactionBlockchainScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TransactionBlockchain"> | string
    referenceBlockchain?: StringWithAggregatesFilter<"TransactionBlockchain"> | string
    typeTransaction?: EnumTypeTransactionWithAggregatesFilter<"TransactionBlockchain"> | $Enums.TypeTransaction
    ressourceId?: StringNullableWithAggregatesFilter<"TransactionBlockchain"> | string | null
    universiteOrigine?: StringWithAggregatesFilter<"TransactionBlockchain"> | string
    universiteDestination?: StringNullableWithAggregatesFilter<"TransactionBlockchain"> | string | null
    dateTransaction?: DateTimeWithAggregatesFilter<"TransactionBlockchain"> | Date | string
    statut?: EnumStatutTransactionWithAggregatesFilter<"TransactionBlockchain"> | $Enums.StatutTransaction
    hashTransaction?: StringWithAggregatesFilter<"TransactionBlockchain"> | string
    donneesTechniques?: JsonNullableWithAggregatesFilter<"TransactionBlockchain">
  }

  export type UserCreateInput = {
    id?: string
    email: string
    motDePasse: string
    nom: string
    prenom: string
    image?: string | null
    role: $Enums.RoleUser
    departement: string
    faculte: string
    specialite?: string | null
    niveauEtudes?: string | null
    dateInscription?: Date | string
    derniereConnexion?: Date | string | null
    estActif?: boolean
    universite: UniversiteCreateNestedOneWithoutUsersInput
    contributions?: RessourceCreateNestedManyWithoutAuteurInput
    favoris?: FavoriCreateNestedManyWithoutUserInput
    commentaires?: CommentaireCreateNestedManyWithoutUserInput
    notations?: NotationCreateNestedManyWithoutUserInput
    historiques?: HistoriqueAccesCreateNestedManyWithoutUserInput
    collections?: CollectionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    motDePasse: string
    nom: string
    prenom: string
    image?: string | null
    role: $Enums.RoleUser
    departement: string
    faculte: string
    specialite?: string | null
    niveauEtudes?: string | null
    dateInscription?: Date | string
    derniereConnexion?: Date | string | null
    estActif?: boolean
    universiteId: string
    contributions?: RessourceUncheckedCreateNestedManyWithoutAuteurInput
    favoris?: FavoriUncheckedCreateNestedManyWithoutUserInput
    commentaires?: CommentaireUncheckedCreateNestedManyWithoutUserInput
    notations?: NotationUncheckedCreateNestedManyWithoutUserInput
    historiques?: HistoriqueAccesUncheckedCreateNestedManyWithoutUserInput
    collections?: CollectionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleUserFieldUpdateOperationsInput | $Enums.RoleUser
    departement?: StringFieldUpdateOperationsInput | string
    faculte?: StringFieldUpdateOperationsInput | string
    specialite?: NullableStringFieldUpdateOperationsInput | string | null
    niveauEtudes?: NullableStringFieldUpdateOperationsInput | string | null
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    derniereConnexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estActif?: BoolFieldUpdateOperationsInput | boolean
    universite?: UniversiteUpdateOneRequiredWithoutUsersNestedInput
    contributions?: RessourceUpdateManyWithoutAuteurNestedInput
    favoris?: FavoriUpdateManyWithoutUserNestedInput
    commentaires?: CommentaireUpdateManyWithoutUserNestedInput
    notations?: NotationUpdateManyWithoutUserNestedInput
    historiques?: HistoriqueAccesUpdateManyWithoutUserNestedInput
    collections?: CollectionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleUserFieldUpdateOperationsInput | $Enums.RoleUser
    departement?: StringFieldUpdateOperationsInput | string
    faculte?: StringFieldUpdateOperationsInput | string
    specialite?: NullableStringFieldUpdateOperationsInput | string | null
    niveauEtudes?: NullableStringFieldUpdateOperationsInput | string | null
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    derniereConnexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estActif?: BoolFieldUpdateOperationsInput | boolean
    universiteId?: StringFieldUpdateOperationsInput | string
    contributions?: RessourceUncheckedUpdateManyWithoutAuteurNestedInput
    favoris?: FavoriUncheckedUpdateManyWithoutUserNestedInput
    commentaires?: CommentaireUncheckedUpdateManyWithoutUserNestedInput
    notations?: NotationUncheckedUpdateManyWithoutUserNestedInput
    historiques?: HistoriqueAccesUncheckedUpdateManyWithoutUserNestedInput
    collections?: CollectionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    motDePasse: string
    nom: string
    prenom: string
    image?: string | null
    role: $Enums.RoleUser
    departement: string
    faculte: string
    specialite?: string | null
    niveauEtudes?: string | null
    dateInscription?: Date | string
    derniereConnexion?: Date | string | null
    estActif?: boolean
    universiteId: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleUserFieldUpdateOperationsInput | $Enums.RoleUser
    departement?: StringFieldUpdateOperationsInput | string
    faculte?: StringFieldUpdateOperationsInput | string
    specialite?: NullableStringFieldUpdateOperationsInput | string | null
    niveauEtudes?: NullableStringFieldUpdateOperationsInput | string | null
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    derniereConnexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estActif?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleUserFieldUpdateOperationsInput | $Enums.RoleUser
    departement?: StringFieldUpdateOperationsInput | string
    faculte?: StringFieldUpdateOperationsInput | string
    specialite?: NullableStringFieldUpdateOperationsInput | string | null
    niveauEtudes?: NullableStringFieldUpdateOperationsInput | string | null
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    derniereConnexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estActif?: BoolFieldUpdateOperationsInput | boolean
    universiteId?: StringFieldUpdateOperationsInput | string
  }

  export type RessourceCreateInput = {
    id?: string
    titre: string
    description: string
    type: $Enums.TypeRessource
    langue?: string
    urlFichier: string
    urlFichierLocal?: string | null
    format: string
    dateCreation?: Date | string
    dateModification?: Date | string
    estPublique?: boolean
    motsCles: string
    image?: string | null
    niveauAcces?: $Enums.NiveauAcces
    datePublication?: Date | string | null
    estValide?: boolean
    estArchive?: boolean
    nomAuteurExterne?: string | null
    prenomAuteurExterne?: string | null
    affiliationAuteurExterne?: string | null
    auteur?: UserCreateNestedOneWithoutContributionsInput
    universite: UniversiteCreateNestedOneWithoutRessourcesInput
    favoris?: FavoriCreateNestedManyWithoutRessourceInput
    commentaires?: CommentaireCreateNestedManyWithoutRessourceInput
    notations?: NotationCreateNestedManyWithoutRessourceInput
    historiques?: HistoriqueAccesCreateNestedManyWithoutRessourceInput
    collections?: CollectionRessourceCreateNestedManyWithoutRessourceInput
    partages?: PartageUniversiteCreateNestedManyWithoutRessourceInput
  }

  export type RessourceUncheckedCreateInput = {
    id?: string
    titre: string
    description: string
    type: $Enums.TypeRessource
    langue?: string
    urlFichier: string
    urlFichierLocal?: string | null
    format: string
    dateCreation?: Date | string
    dateModification?: Date | string
    estPublique?: boolean
    motsCles: string
    auteurId?: string | null
    universiteId: string
    image?: string | null
    niveauAcces?: $Enums.NiveauAcces
    datePublication?: Date | string | null
    estValide?: boolean
    estArchive?: boolean
    nomAuteurExterne?: string | null
    prenomAuteurExterne?: string | null
    affiliationAuteurExterne?: string | null
    favoris?: FavoriUncheckedCreateNestedManyWithoutRessourceInput
    commentaires?: CommentaireUncheckedCreateNestedManyWithoutRessourceInput
    notations?: NotationUncheckedCreateNestedManyWithoutRessourceInput
    historiques?: HistoriqueAccesUncheckedCreateNestedManyWithoutRessourceInput
    collections?: CollectionRessourceUncheckedCreateNestedManyWithoutRessourceInput
    partages?: PartageUniversiteUncheckedCreateNestedManyWithoutRessourceInput
  }

  export type RessourceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeRessourceFieldUpdateOperationsInput | $Enums.TypeRessource
    langue?: StringFieldUpdateOperationsInput | string
    urlFichier?: StringFieldUpdateOperationsInput | string
    urlFichierLocal?: NullableStringFieldUpdateOperationsInput | string | null
    format?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateModification?: DateTimeFieldUpdateOperationsInput | Date | string
    estPublique?: BoolFieldUpdateOperationsInput | boolean
    motsCles?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    niveauAcces?: EnumNiveauAccesFieldUpdateOperationsInput | $Enums.NiveauAcces
    datePublication?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estValide?: BoolFieldUpdateOperationsInput | boolean
    estArchive?: BoolFieldUpdateOperationsInput | boolean
    nomAuteurExterne?: NullableStringFieldUpdateOperationsInput | string | null
    prenomAuteurExterne?: NullableStringFieldUpdateOperationsInput | string | null
    affiliationAuteurExterne?: NullableStringFieldUpdateOperationsInput | string | null
    auteur?: UserUpdateOneWithoutContributionsNestedInput
    universite?: UniversiteUpdateOneRequiredWithoutRessourcesNestedInput
    favoris?: FavoriUpdateManyWithoutRessourceNestedInput
    commentaires?: CommentaireUpdateManyWithoutRessourceNestedInput
    notations?: NotationUpdateManyWithoutRessourceNestedInput
    historiques?: HistoriqueAccesUpdateManyWithoutRessourceNestedInput
    collections?: CollectionRessourceUpdateManyWithoutRessourceNestedInput
    partages?: PartageUniversiteUpdateManyWithoutRessourceNestedInput
  }

  export type RessourceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeRessourceFieldUpdateOperationsInput | $Enums.TypeRessource
    langue?: StringFieldUpdateOperationsInput | string
    urlFichier?: StringFieldUpdateOperationsInput | string
    urlFichierLocal?: NullableStringFieldUpdateOperationsInput | string | null
    format?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateModification?: DateTimeFieldUpdateOperationsInput | Date | string
    estPublique?: BoolFieldUpdateOperationsInput | boolean
    motsCles?: StringFieldUpdateOperationsInput | string
    auteurId?: NullableStringFieldUpdateOperationsInput | string | null
    universiteId?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    niveauAcces?: EnumNiveauAccesFieldUpdateOperationsInput | $Enums.NiveauAcces
    datePublication?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estValide?: BoolFieldUpdateOperationsInput | boolean
    estArchive?: BoolFieldUpdateOperationsInput | boolean
    nomAuteurExterne?: NullableStringFieldUpdateOperationsInput | string | null
    prenomAuteurExterne?: NullableStringFieldUpdateOperationsInput | string | null
    affiliationAuteurExterne?: NullableStringFieldUpdateOperationsInput | string | null
    favoris?: FavoriUncheckedUpdateManyWithoutRessourceNestedInput
    commentaires?: CommentaireUncheckedUpdateManyWithoutRessourceNestedInput
    notations?: NotationUncheckedUpdateManyWithoutRessourceNestedInput
    historiques?: HistoriqueAccesUncheckedUpdateManyWithoutRessourceNestedInput
    collections?: CollectionRessourceUncheckedUpdateManyWithoutRessourceNestedInput
    partages?: PartageUniversiteUncheckedUpdateManyWithoutRessourceNestedInput
  }

  export type RessourceCreateManyInput = {
    id?: string
    titre: string
    description: string
    type: $Enums.TypeRessource
    langue?: string
    urlFichier: string
    urlFichierLocal?: string | null
    format: string
    dateCreation?: Date | string
    dateModification?: Date | string
    estPublique?: boolean
    motsCles: string
    auteurId?: string | null
    universiteId: string
    image?: string | null
    niveauAcces?: $Enums.NiveauAcces
    datePublication?: Date | string | null
    estValide?: boolean
    estArchive?: boolean
    nomAuteurExterne?: string | null
    prenomAuteurExterne?: string | null
    affiliationAuteurExterne?: string | null
  }

  export type RessourceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeRessourceFieldUpdateOperationsInput | $Enums.TypeRessource
    langue?: StringFieldUpdateOperationsInput | string
    urlFichier?: StringFieldUpdateOperationsInput | string
    urlFichierLocal?: NullableStringFieldUpdateOperationsInput | string | null
    format?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateModification?: DateTimeFieldUpdateOperationsInput | Date | string
    estPublique?: BoolFieldUpdateOperationsInput | boolean
    motsCles?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    niveauAcces?: EnumNiveauAccesFieldUpdateOperationsInput | $Enums.NiveauAcces
    datePublication?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estValide?: BoolFieldUpdateOperationsInput | boolean
    estArchive?: BoolFieldUpdateOperationsInput | boolean
    nomAuteurExterne?: NullableStringFieldUpdateOperationsInput | string | null
    prenomAuteurExterne?: NullableStringFieldUpdateOperationsInput | string | null
    affiliationAuteurExterne?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RessourceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeRessourceFieldUpdateOperationsInput | $Enums.TypeRessource
    langue?: StringFieldUpdateOperationsInput | string
    urlFichier?: StringFieldUpdateOperationsInput | string
    urlFichierLocal?: NullableStringFieldUpdateOperationsInput | string | null
    format?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateModification?: DateTimeFieldUpdateOperationsInput | Date | string
    estPublique?: BoolFieldUpdateOperationsInput | boolean
    motsCles?: StringFieldUpdateOperationsInput | string
    auteurId?: NullableStringFieldUpdateOperationsInput | string | null
    universiteId?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    niveauAcces?: EnumNiveauAccesFieldUpdateOperationsInput | $Enums.NiveauAcces
    datePublication?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estValide?: BoolFieldUpdateOperationsInput | boolean
    estArchive?: BoolFieldUpdateOperationsInput | boolean
    nomAuteurExterne?: NullableStringFieldUpdateOperationsInput | string | null
    prenomAuteurExterne?: NullableStringFieldUpdateOperationsInput | string | null
    affiliationAuteurExterne?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FavoriCreateInput = {
    id?: string
    dateAjout?: Date | string
    note?: string | null
    user: UserCreateNestedOneWithoutFavorisInput
    ressource: RessourceCreateNestedOneWithoutFavorisInput
  }

  export type FavoriUncheckedCreateInput = {
    id?: string
    userId: string
    ressourceId: string
    dateAjout?: Date | string
    note?: string | null
  }

  export type FavoriUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateAjout?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutFavorisNestedInput
    ressource?: RessourceUpdateOneRequiredWithoutFavorisNestedInput
  }

  export type FavoriUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ressourceId?: StringFieldUpdateOperationsInput | string
    dateAjout?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FavoriCreateManyInput = {
    id?: string
    userId: string
    ressourceId: string
    dateAjout?: Date | string
    note?: string | null
  }

  export type FavoriUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateAjout?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FavoriUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ressourceId?: StringFieldUpdateOperationsInput | string
    dateAjout?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UniversiteCreateInput = {
    id?: string
    nom: string
    adresse?: string | null
    ville: string
    pays: string
    siteWeb?: string | null
    dateCreation?: Date | string
    adresseBlockchain?: string | null
    estActive?: boolean
    users?: UserCreateNestedManyWithoutUniversiteInput
    ressources?: RessourceCreateNestedManyWithoutUniversiteInput
  }

  export type UniversiteUncheckedCreateInput = {
    id?: string
    nom: string
    adresse?: string | null
    ville: string
    pays: string
    siteWeb?: string | null
    dateCreation?: Date | string
    adresseBlockchain?: string | null
    estActive?: boolean
    users?: UserUncheckedCreateNestedManyWithoutUniversiteInput
    ressources?: RessourceUncheckedCreateNestedManyWithoutUniversiteInput
  }

  export type UniversiteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    ville?: StringFieldUpdateOperationsInput | string
    pays?: StringFieldUpdateOperationsInput | string
    siteWeb?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    adresseBlockchain?: NullableStringFieldUpdateOperationsInput | string | null
    estActive?: BoolFieldUpdateOperationsInput | boolean
    users?: UserUpdateManyWithoutUniversiteNestedInput
    ressources?: RessourceUpdateManyWithoutUniversiteNestedInput
  }

  export type UniversiteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    ville?: StringFieldUpdateOperationsInput | string
    pays?: StringFieldUpdateOperationsInput | string
    siteWeb?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    adresseBlockchain?: NullableStringFieldUpdateOperationsInput | string | null
    estActive?: BoolFieldUpdateOperationsInput | boolean
    users?: UserUncheckedUpdateManyWithoutUniversiteNestedInput
    ressources?: RessourceUncheckedUpdateManyWithoutUniversiteNestedInput
  }

  export type UniversiteCreateManyInput = {
    id?: string
    nom: string
    adresse?: string | null
    ville: string
    pays: string
    siteWeb?: string | null
    dateCreation?: Date | string
    adresseBlockchain?: string | null
    estActive?: boolean
  }

  export type UniversiteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    ville?: StringFieldUpdateOperationsInput | string
    pays?: StringFieldUpdateOperationsInput | string
    siteWeb?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    adresseBlockchain?: NullableStringFieldUpdateOperationsInput | string | null
    estActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UniversiteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    ville?: StringFieldUpdateOperationsInput | string
    pays?: StringFieldUpdateOperationsInput | string
    siteWeb?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    adresseBlockchain?: NullableStringFieldUpdateOperationsInput | string | null
    estActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CommentaireCreateInput = {
    id?: string
    contenu: string
    dateCreation?: Date | string
    estModere?: boolean
    user: UserCreateNestedOneWithoutCommentairesInput
    ressource: RessourceCreateNestedOneWithoutCommentairesInput
  }

  export type CommentaireUncheckedCreateInput = {
    id?: string
    userId: string
    ressourceId: string
    contenu: string
    dateCreation?: Date | string
    estModere?: boolean
  }

  export type CommentaireUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenu?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    estModere?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutCommentairesNestedInput
    ressource?: RessourceUpdateOneRequiredWithoutCommentairesNestedInput
  }

  export type CommentaireUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ressourceId?: StringFieldUpdateOperationsInput | string
    contenu?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    estModere?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CommentaireCreateManyInput = {
    id?: string
    userId: string
    ressourceId: string
    contenu: string
    dateCreation?: Date | string
    estModere?: boolean
  }

  export type CommentaireUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenu?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    estModere?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CommentaireUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ressourceId?: StringFieldUpdateOperationsInput | string
    contenu?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    estModere?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotationCreateInput = {
    id?: string
    note: number
    dateNotation?: Date | string
    user: UserCreateNestedOneWithoutNotationsInput
    ressource: RessourceCreateNestedOneWithoutNotationsInput
  }

  export type NotationUncheckedCreateInput = {
    id?: string
    userId: string
    ressourceId: string
    note: number
    dateNotation?: Date | string
  }

  export type NotationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    note?: IntFieldUpdateOperationsInput | number
    dateNotation?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotationsNestedInput
    ressource?: RessourceUpdateOneRequiredWithoutNotationsNestedInput
  }

  export type NotationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ressourceId?: StringFieldUpdateOperationsInput | string
    note?: IntFieldUpdateOperationsInput | number
    dateNotation?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotationCreateManyInput = {
    id?: string
    userId: string
    ressourceId: string
    note: number
    dateNotation?: Date | string
  }

  export type NotationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    note?: IntFieldUpdateOperationsInput | number
    dateNotation?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ressourceId?: StringFieldUpdateOperationsInput | string
    note?: IntFieldUpdateOperationsInput | number
    dateNotation?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoriqueAccesCreateInput = {
    id?: string
    dateAcces?: Date | string
    typeAcces: $Enums.TypeAcces
    ipAcces: string
    universiteSrc?: string | null
    user: UserCreateNestedOneWithoutHistoriquesInput
    ressource: RessourceCreateNestedOneWithoutHistoriquesInput
  }

  export type HistoriqueAccesUncheckedCreateInput = {
    id?: string
    userId: string
    ressourceId: string
    dateAcces?: Date | string
    typeAcces: $Enums.TypeAcces
    ipAcces: string
    universiteSrc?: string | null
  }

  export type HistoriqueAccesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateAcces?: DateTimeFieldUpdateOperationsInput | Date | string
    typeAcces?: EnumTypeAccesFieldUpdateOperationsInput | $Enums.TypeAcces
    ipAcces?: StringFieldUpdateOperationsInput | string
    universiteSrc?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutHistoriquesNestedInput
    ressource?: RessourceUpdateOneRequiredWithoutHistoriquesNestedInput
  }

  export type HistoriqueAccesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ressourceId?: StringFieldUpdateOperationsInput | string
    dateAcces?: DateTimeFieldUpdateOperationsInput | Date | string
    typeAcces?: EnumTypeAccesFieldUpdateOperationsInput | $Enums.TypeAcces
    ipAcces?: StringFieldUpdateOperationsInput | string
    universiteSrc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HistoriqueAccesCreateManyInput = {
    id?: string
    userId: string
    ressourceId: string
    dateAcces?: Date | string
    typeAcces: $Enums.TypeAcces
    ipAcces: string
    universiteSrc?: string | null
  }

  export type HistoriqueAccesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateAcces?: DateTimeFieldUpdateOperationsInput | Date | string
    typeAcces?: EnumTypeAccesFieldUpdateOperationsInput | $Enums.TypeAcces
    ipAcces?: StringFieldUpdateOperationsInput | string
    universiteSrc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HistoriqueAccesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ressourceId?: StringFieldUpdateOperationsInput | string
    dateAcces?: DateTimeFieldUpdateOperationsInput | Date | string
    typeAcces?: EnumTypeAccesFieldUpdateOperationsInput | $Enums.TypeAcces
    ipAcces?: StringFieldUpdateOperationsInput | string
    universiteSrc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DonneesRecommandationCreateInput = {
    id?: string
    userId: string
    ressourceId: string
    score: number
    typeInteraction: $Enums.TypeInteraction
    dateDonnee?: Date | string
  }

  export type DonneesRecommandationUncheckedCreateInput = {
    id?: string
    userId: string
    ressourceId: string
    score: number
    typeInteraction: $Enums.TypeInteraction
    dateDonnee?: Date | string
  }

  export type DonneesRecommandationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ressourceId?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    typeInteraction?: EnumTypeInteractionFieldUpdateOperationsInput | $Enums.TypeInteraction
    dateDonnee?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonneesRecommandationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ressourceId?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    typeInteraction?: EnumTypeInteractionFieldUpdateOperationsInput | $Enums.TypeInteraction
    dateDonnee?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonneesRecommandationCreateManyInput = {
    id?: string
    userId: string
    ressourceId: string
    score: number
    typeInteraction: $Enums.TypeInteraction
    dateDonnee?: Date | string
  }

  export type DonneesRecommandationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ressourceId?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    typeInteraction?: EnumTypeInteractionFieldUpdateOperationsInput | $Enums.TypeInteraction
    dateDonnee?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonneesRecommandationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ressourceId?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    typeInteraction?: EnumTypeInteractionFieldUpdateOperationsInput | $Enums.TypeInteraction
    dateDonnee?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionCreateInput = {
    id?: string
    nom: string
    description?: string | null
    estPublique?: boolean
    dateCreation?: Date | string
    user: UserCreateNestedOneWithoutCollectionsInput
    ressources?: CollectionRessourceCreateNestedManyWithoutCollectionInput
  }

  export type CollectionUncheckedCreateInput = {
    id?: string
    userId: string
    nom: string
    description?: string | null
    estPublique?: boolean
    dateCreation?: Date | string
    ressources?: CollectionRessourceUncheckedCreateNestedManyWithoutCollectionInput
  }

  export type CollectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    estPublique?: BoolFieldUpdateOperationsInput | boolean
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCollectionsNestedInput
    ressources?: CollectionRessourceUpdateManyWithoutCollectionNestedInput
  }

  export type CollectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    estPublique?: BoolFieldUpdateOperationsInput | boolean
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    ressources?: CollectionRessourceUncheckedUpdateManyWithoutCollectionNestedInput
  }

  export type CollectionCreateManyInput = {
    id?: string
    userId: string
    nom: string
    description?: string | null
    estPublique?: boolean
    dateCreation?: Date | string
  }

  export type CollectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    estPublique?: BoolFieldUpdateOperationsInput | boolean
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    estPublique?: BoolFieldUpdateOperationsInput | boolean
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionRessourceCreateInput = {
    id?: string
    dateAjout?: Date | string
    notes?: string | null
    collection: CollectionCreateNestedOneWithoutRessourcesInput
    ressource: RessourceCreateNestedOneWithoutCollectionsInput
  }

  export type CollectionRessourceUncheckedCreateInput = {
    id?: string
    collectionId: string
    ressourceId: string
    dateAjout?: Date | string
    notes?: string | null
  }

  export type CollectionRessourceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateAjout?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    collection?: CollectionUpdateOneRequiredWithoutRessourcesNestedInput
    ressource?: RessourceUpdateOneRequiredWithoutCollectionsNestedInput
  }

  export type CollectionRessourceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    collectionId?: StringFieldUpdateOperationsInput | string
    ressourceId?: StringFieldUpdateOperationsInput | string
    dateAjout?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CollectionRessourceCreateManyInput = {
    id?: string
    collectionId: string
    ressourceId: string
    dateAjout?: Date | string
    notes?: string | null
  }

  export type CollectionRessourceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateAjout?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CollectionRessourceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    collectionId?: StringFieldUpdateOperationsInput | string
    ressourceId?: StringFieldUpdateOperationsInput | string
    dateAjout?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PartageUniversiteCreateInput = {
    id?: string
    universiteSource: string
    universiteDestination: string
    datePartage?: Date | string
    estActif?: boolean
    ressource: RessourceCreateNestedOneWithoutPartagesInput
  }

  export type PartageUniversiteUncheckedCreateInput = {
    id?: string
    ressourceId: string
    universiteSource: string
    universiteDestination: string
    datePartage?: Date | string
    estActif?: boolean
  }

  export type PartageUniversiteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    universiteSource?: StringFieldUpdateOperationsInput | string
    universiteDestination?: StringFieldUpdateOperationsInput | string
    datePartage?: DateTimeFieldUpdateOperationsInput | Date | string
    estActif?: BoolFieldUpdateOperationsInput | boolean
    ressource?: RessourceUpdateOneRequiredWithoutPartagesNestedInput
  }

  export type PartageUniversiteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ressourceId?: StringFieldUpdateOperationsInput | string
    universiteSource?: StringFieldUpdateOperationsInput | string
    universiteDestination?: StringFieldUpdateOperationsInput | string
    datePartage?: DateTimeFieldUpdateOperationsInput | Date | string
    estActif?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PartageUniversiteCreateManyInput = {
    id?: string
    ressourceId: string
    universiteSource: string
    universiteDestination: string
    datePartage?: Date | string
    estActif?: boolean
  }

  export type PartageUniversiteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    universiteSource?: StringFieldUpdateOperationsInput | string
    universiteDestination?: StringFieldUpdateOperationsInput | string
    datePartage?: DateTimeFieldUpdateOperationsInput | Date | string
    estActif?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PartageUniversiteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ressourceId?: StringFieldUpdateOperationsInput | string
    universiteSource?: StringFieldUpdateOperationsInput | string
    universiteDestination?: StringFieldUpdateOperationsInput | string
    datePartage?: DateTimeFieldUpdateOperationsInput | Date | string
    estActif?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TransactionBlockchainCreateInput = {
    id?: string
    referenceBlockchain: string
    typeTransaction: $Enums.TypeTransaction
    ressourceId?: string | null
    universiteOrigine: string
    universiteDestination?: string | null
    dateTransaction?: Date | string
    statut: $Enums.StatutTransaction
    hashTransaction: string
    donneesTechniques?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TransactionBlockchainUncheckedCreateInput = {
    id?: string
    referenceBlockchain: string
    typeTransaction: $Enums.TypeTransaction
    ressourceId?: string | null
    universiteOrigine: string
    universiteDestination?: string | null
    dateTransaction?: Date | string
    statut: $Enums.StatutTransaction
    hashTransaction: string
    donneesTechniques?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TransactionBlockchainUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceBlockchain?: StringFieldUpdateOperationsInput | string
    typeTransaction?: EnumTypeTransactionFieldUpdateOperationsInput | $Enums.TypeTransaction
    ressourceId?: NullableStringFieldUpdateOperationsInput | string | null
    universiteOrigine?: StringFieldUpdateOperationsInput | string
    universiteDestination?: NullableStringFieldUpdateOperationsInput | string | null
    dateTransaction?: DateTimeFieldUpdateOperationsInput | Date | string
    statut?: EnumStatutTransactionFieldUpdateOperationsInput | $Enums.StatutTransaction
    hashTransaction?: StringFieldUpdateOperationsInput | string
    donneesTechniques?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TransactionBlockchainUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceBlockchain?: StringFieldUpdateOperationsInput | string
    typeTransaction?: EnumTypeTransactionFieldUpdateOperationsInput | $Enums.TypeTransaction
    ressourceId?: NullableStringFieldUpdateOperationsInput | string | null
    universiteOrigine?: StringFieldUpdateOperationsInput | string
    universiteDestination?: NullableStringFieldUpdateOperationsInput | string | null
    dateTransaction?: DateTimeFieldUpdateOperationsInput | Date | string
    statut?: EnumStatutTransactionFieldUpdateOperationsInput | $Enums.StatutTransaction
    hashTransaction?: StringFieldUpdateOperationsInput | string
    donneesTechniques?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TransactionBlockchainCreateManyInput = {
    id?: string
    referenceBlockchain: string
    typeTransaction: $Enums.TypeTransaction
    ressourceId?: string | null
    universiteOrigine: string
    universiteDestination?: string | null
    dateTransaction?: Date | string
    statut: $Enums.StatutTransaction
    hashTransaction: string
    donneesTechniques?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TransactionBlockchainUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceBlockchain?: StringFieldUpdateOperationsInput | string
    typeTransaction?: EnumTypeTransactionFieldUpdateOperationsInput | $Enums.TypeTransaction
    ressourceId?: NullableStringFieldUpdateOperationsInput | string | null
    universiteOrigine?: StringFieldUpdateOperationsInput | string
    universiteDestination?: NullableStringFieldUpdateOperationsInput | string | null
    dateTransaction?: DateTimeFieldUpdateOperationsInput | Date | string
    statut?: EnumStatutTransactionFieldUpdateOperationsInput | $Enums.StatutTransaction
    hashTransaction?: StringFieldUpdateOperationsInput | string
    donneesTechniques?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TransactionBlockchainUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceBlockchain?: StringFieldUpdateOperationsInput | string
    typeTransaction?: EnumTypeTransactionFieldUpdateOperationsInput | $Enums.TypeTransaction
    ressourceId?: NullableStringFieldUpdateOperationsInput | string | null
    universiteOrigine?: StringFieldUpdateOperationsInput | string
    universiteDestination?: NullableStringFieldUpdateOperationsInput | string | null
    dateTransaction?: DateTimeFieldUpdateOperationsInput | Date | string
    statut?: EnumStatutTransactionFieldUpdateOperationsInput | $Enums.StatutTransaction
    hashTransaction?: StringFieldUpdateOperationsInput | string
    donneesTechniques?: NullableJsonNullValueInput | InputJsonValue
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleUserFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleUser | EnumRoleUserFieldRefInput<$PrismaModel>
    in?: $Enums.RoleUser[]
    notIn?: $Enums.RoleUser[]
    not?: NestedEnumRoleUserFilter<$PrismaModel> | $Enums.RoleUser
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UniversiteScalarRelationFilter = {
    is?: UniversiteWhereInput
    isNot?: UniversiteWhereInput
  }

  export type RessourceListRelationFilter = {
    every?: RessourceWhereInput
    some?: RessourceWhereInput
    none?: RessourceWhereInput
  }

  export type FavoriListRelationFilter = {
    every?: FavoriWhereInput
    some?: FavoriWhereInput
    none?: FavoriWhereInput
  }

  export type CommentaireListRelationFilter = {
    every?: CommentaireWhereInput
    some?: CommentaireWhereInput
    none?: CommentaireWhereInput
  }

  export type NotationListRelationFilter = {
    every?: NotationWhereInput
    some?: NotationWhereInput
    none?: NotationWhereInput
  }

  export type HistoriqueAccesListRelationFilter = {
    every?: HistoriqueAccesWhereInput
    some?: HistoriqueAccesWhereInput
    none?: HistoriqueAccesWhereInput
  }

  export type CollectionListRelationFilter = {
    every?: CollectionWhereInput
    some?: CollectionWhereInput
    none?: CollectionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RessourceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FavoriOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentaireOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HistoriqueAccesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CollectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    motDePasse?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    image?: SortOrder
    role?: SortOrder
    departement?: SortOrder
    faculte?: SortOrder
    specialite?: SortOrder
    niveauEtudes?: SortOrder
    dateInscription?: SortOrder
    derniereConnexion?: SortOrder
    estActif?: SortOrder
    universiteId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    motDePasse?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    image?: SortOrder
    role?: SortOrder
    departement?: SortOrder
    faculte?: SortOrder
    specialite?: SortOrder
    niveauEtudes?: SortOrder
    dateInscription?: SortOrder
    derniereConnexion?: SortOrder
    estActif?: SortOrder
    universiteId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    motDePasse?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    image?: SortOrder
    role?: SortOrder
    departement?: SortOrder
    faculte?: SortOrder
    specialite?: SortOrder
    niveauEtudes?: SortOrder
    dateInscription?: SortOrder
    derniereConnexion?: SortOrder
    estActif?: SortOrder
    universiteId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleUserWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleUser | EnumRoleUserFieldRefInput<$PrismaModel>
    in?: $Enums.RoleUser[]
    notIn?: $Enums.RoleUser[]
    not?: NestedEnumRoleUserWithAggregatesFilter<$PrismaModel> | $Enums.RoleUser
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleUserFilter<$PrismaModel>
    _max?: NestedEnumRoleUserFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumTypeRessourceFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeRessource | EnumTypeRessourceFieldRefInput<$PrismaModel>
    in?: $Enums.TypeRessource[]
    notIn?: $Enums.TypeRessource[]
    not?: NestedEnumTypeRessourceFilter<$PrismaModel> | $Enums.TypeRessource
  }

  export type EnumNiveauAccesFilter<$PrismaModel = never> = {
    equals?: $Enums.NiveauAcces | EnumNiveauAccesFieldRefInput<$PrismaModel>
    in?: $Enums.NiveauAcces[]
    notIn?: $Enums.NiveauAcces[]
    not?: NestedEnumNiveauAccesFilter<$PrismaModel> | $Enums.NiveauAcces
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type CollectionRessourceListRelationFilter = {
    every?: CollectionRessourceWhereInput
    some?: CollectionRessourceWhereInput
    none?: CollectionRessourceWhereInput
  }

  export type PartageUniversiteListRelationFilter = {
    every?: PartageUniversiteWhereInput
    some?: PartageUniversiteWhereInput
    none?: PartageUniversiteWhereInput
  }

  export type CollectionRessourceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PartageUniversiteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RessourceOrderByRelevanceInput = {
    fields: RessourceOrderByRelevanceFieldEnum | RessourceOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RessourceCountOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    description?: SortOrder
    type?: SortOrder
    langue?: SortOrder
    urlFichier?: SortOrder
    urlFichierLocal?: SortOrder
    format?: SortOrder
    dateCreation?: SortOrder
    dateModification?: SortOrder
    estPublique?: SortOrder
    motsCles?: SortOrder
    auteurId?: SortOrder
    universiteId?: SortOrder
    image?: SortOrder
    niveauAcces?: SortOrder
    datePublication?: SortOrder
    estValide?: SortOrder
    estArchive?: SortOrder
    nomAuteurExterne?: SortOrder
    prenomAuteurExterne?: SortOrder
    affiliationAuteurExterne?: SortOrder
  }

  export type RessourceMaxOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    description?: SortOrder
    type?: SortOrder
    langue?: SortOrder
    urlFichier?: SortOrder
    urlFichierLocal?: SortOrder
    format?: SortOrder
    dateCreation?: SortOrder
    dateModification?: SortOrder
    estPublique?: SortOrder
    motsCles?: SortOrder
    auteurId?: SortOrder
    universiteId?: SortOrder
    image?: SortOrder
    niveauAcces?: SortOrder
    datePublication?: SortOrder
    estValide?: SortOrder
    estArchive?: SortOrder
    nomAuteurExterne?: SortOrder
    prenomAuteurExterne?: SortOrder
    affiliationAuteurExterne?: SortOrder
  }

  export type RessourceMinOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    description?: SortOrder
    type?: SortOrder
    langue?: SortOrder
    urlFichier?: SortOrder
    urlFichierLocal?: SortOrder
    format?: SortOrder
    dateCreation?: SortOrder
    dateModification?: SortOrder
    estPublique?: SortOrder
    motsCles?: SortOrder
    auteurId?: SortOrder
    universiteId?: SortOrder
    image?: SortOrder
    niveauAcces?: SortOrder
    datePublication?: SortOrder
    estValide?: SortOrder
    estArchive?: SortOrder
    nomAuteurExterne?: SortOrder
    prenomAuteurExterne?: SortOrder
    affiliationAuteurExterne?: SortOrder
  }

  export type EnumTypeRessourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeRessource | EnumTypeRessourceFieldRefInput<$PrismaModel>
    in?: $Enums.TypeRessource[]
    notIn?: $Enums.TypeRessource[]
    not?: NestedEnumTypeRessourceWithAggregatesFilter<$PrismaModel> | $Enums.TypeRessource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeRessourceFilter<$PrismaModel>
    _max?: NestedEnumTypeRessourceFilter<$PrismaModel>
  }

  export type EnumNiveauAccesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NiveauAcces | EnumNiveauAccesFieldRefInput<$PrismaModel>
    in?: $Enums.NiveauAcces[]
    notIn?: $Enums.NiveauAcces[]
    not?: NestedEnumNiveauAccesWithAggregatesFilter<$PrismaModel> | $Enums.NiveauAcces
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNiveauAccesFilter<$PrismaModel>
    _max?: NestedEnumNiveauAccesFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RessourceScalarRelationFilter = {
    is?: RessourceWhereInput
    isNot?: RessourceWhereInput
  }

  export type FavoriOrderByRelevanceInput = {
    fields: FavoriOrderByRelevanceFieldEnum | FavoriOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FavoriUserIdRessourceIdCompoundUniqueInput = {
    userId: string
    ressourceId: string
  }

  export type FavoriCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ressourceId?: SortOrder
    dateAjout?: SortOrder
    note?: SortOrder
  }

  export type FavoriMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ressourceId?: SortOrder
    dateAjout?: SortOrder
    note?: SortOrder
  }

  export type FavoriMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ressourceId?: SortOrder
    dateAjout?: SortOrder
    note?: SortOrder
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UniversiteOrderByRelevanceInput = {
    fields: UniversiteOrderByRelevanceFieldEnum | UniversiteOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UniversiteCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    adresse?: SortOrder
    ville?: SortOrder
    pays?: SortOrder
    siteWeb?: SortOrder
    dateCreation?: SortOrder
    adresseBlockchain?: SortOrder
    estActive?: SortOrder
  }

  export type UniversiteMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    adresse?: SortOrder
    ville?: SortOrder
    pays?: SortOrder
    siteWeb?: SortOrder
    dateCreation?: SortOrder
    adresseBlockchain?: SortOrder
    estActive?: SortOrder
  }

  export type UniversiteMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    adresse?: SortOrder
    ville?: SortOrder
    pays?: SortOrder
    siteWeb?: SortOrder
    dateCreation?: SortOrder
    adresseBlockchain?: SortOrder
    estActive?: SortOrder
  }

  export type CommentaireOrderByRelevanceInput = {
    fields: CommentaireOrderByRelevanceFieldEnum | CommentaireOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CommentaireCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ressourceId?: SortOrder
    contenu?: SortOrder
    dateCreation?: SortOrder
    estModere?: SortOrder
  }

  export type CommentaireMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ressourceId?: SortOrder
    contenu?: SortOrder
    dateCreation?: SortOrder
    estModere?: SortOrder
  }

  export type CommentaireMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ressourceId?: SortOrder
    contenu?: SortOrder
    dateCreation?: SortOrder
    estModere?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NotationOrderByRelevanceInput = {
    fields: NotationOrderByRelevanceFieldEnum | NotationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type NotationUserIdRessourceIdCompoundUniqueInput = {
    userId: string
    ressourceId: string
  }

  export type NotationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ressourceId?: SortOrder
    note?: SortOrder
    dateNotation?: SortOrder
  }

  export type NotationAvgOrderByAggregateInput = {
    note?: SortOrder
  }

  export type NotationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ressourceId?: SortOrder
    note?: SortOrder
    dateNotation?: SortOrder
  }

  export type NotationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ressourceId?: SortOrder
    note?: SortOrder
    dateNotation?: SortOrder
  }

  export type NotationSumOrderByAggregateInput = {
    note?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumTypeAccesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeAcces | EnumTypeAccesFieldRefInput<$PrismaModel>
    in?: $Enums.TypeAcces[]
    notIn?: $Enums.TypeAcces[]
    not?: NestedEnumTypeAccesFilter<$PrismaModel> | $Enums.TypeAcces
  }

  export type HistoriqueAccesOrderByRelevanceInput = {
    fields: HistoriqueAccesOrderByRelevanceFieldEnum | HistoriqueAccesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type HistoriqueAccesCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ressourceId?: SortOrder
    dateAcces?: SortOrder
    typeAcces?: SortOrder
    ipAcces?: SortOrder
    universiteSrc?: SortOrder
  }

  export type HistoriqueAccesMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ressourceId?: SortOrder
    dateAcces?: SortOrder
    typeAcces?: SortOrder
    ipAcces?: SortOrder
    universiteSrc?: SortOrder
  }

  export type HistoriqueAccesMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ressourceId?: SortOrder
    dateAcces?: SortOrder
    typeAcces?: SortOrder
    ipAcces?: SortOrder
    universiteSrc?: SortOrder
  }

  export type EnumTypeAccesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeAcces | EnumTypeAccesFieldRefInput<$PrismaModel>
    in?: $Enums.TypeAcces[]
    notIn?: $Enums.TypeAcces[]
    not?: NestedEnumTypeAccesWithAggregatesFilter<$PrismaModel> | $Enums.TypeAcces
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeAccesFilter<$PrismaModel>
    _max?: NestedEnumTypeAccesFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumTypeInteractionFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeInteraction | EnumTypeInteractionFieldRefInput<$PrismaModel>
    in?: $Enums.TypeInteraction[]
    notIn?: $Enums.TypeInteraction[]
    not?: NestedEnumTypeInteractionFilter<$PrismaModel> | $Enums.TypeInteraction
  }

  export type DonneesRecommandationOrderByRelevanceInput = {
    fields: DonneesRecommandationOrderByRelevanceFieldEnum | DonneesRecommandationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DonneesRecommandationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ressourceId?: SortOrder
    score?: SortOrder
    typeInteraction?: SortOrder
    dateDonnee?: SortOrder
  }

  export type DonneesRecommandationAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type DonneesRecommandationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ressourceId?: SortOrder
    score?: SortOrder
    typeInteraction?: SortOrder
    dateDonnee?: SortOrder
  }

  export type DonneesRecommandationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ressourceId?: SortOrder
    score?: SortOrder
    typeInteraction?: SortOrder
    dateDonnee?: SortOrder
  }

  export type DonneesRecommandationSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumTypeInteractionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeInteraction | EnumTypeInteractionFieldRefInput<$PrismaModel>
    in?: $Enums.TypeInteraction[]
    notIn?: $Enums.TypeInteraction[]
    not?: NestedEnumTypeInteractionWithAggregatesFilter<$PrismaModel> | $Enums.TypeInteraction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeInteractionFilter<$PrismaModel>
    _max?: NestedEnumTypeInteractionFilter<$PrismaModel>
  }

  export type CollectionOrderByRelevanceInput = {
    fields: CollectionOrderByRelevanceFieldEnum | CollectionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CollectionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    estPublique?: SortOrder
    dateCreation?: SortOrder
  }

  export type CollectionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    estPublique?: SortOrder
    dateCreation?: SortOrder
  }

  export type CollectionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    estPublique?: SortOrder
    dateCreation?: SortOrder
  }

  export type CollectionScalarRelationFilter = {
    is?: CollectionWhereInput
    isNot?: CollectionWhereInput
  }

  export type CollectionRessourceOrderByRelevanceInput = {
    fields: CollectionRessourceOrderByRelevanceFieldEnum | CollectionRessourceOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CollectionRessourceCollectionIdRessourceIdCompoundUniqueInput = {
    collectionId: string
    ressourceId: string
  }

  export type CollectionRessourceCountOrderByAggregateInput = {
    id?: SortOrder
    collectionId?: SortOrder
    ressourceId?: SortOrder
    dateAjout?: SortOrder
    notes?: SortOrder
  }

  export type CollectionRessourceMaxOrderByAggregateInput = {
    id?: SortOrder
    collectionId?: SortOrder
    ressourceId?: SortOrder
    dateAjout?: SortOrder
    notes?: SortOrder
  }

  export type CollectionRessourceMinOrderByAggregateInput = {
    id?: SortOrder
    collectionId?: SortOrder
    ressourceId?: SortOrder
    dateAjout?: SortOrder
    notes?: SortOrder
  }

  export type PartageUniversiteOrderByRelevanceInput = {
    fields: PartageUniversiteOrderByRelevanceFieldEnum | PartageUniversiteOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PartageUniversiteRessourceIdUniversiteDestinationCompoundUniqueInput = {
    ressourceId: string
    universiteDestination: string
  }

  export type PartageUniversiteCountOrderByAggregateInput = {
    id?: SortOrder
    ressourceId?: SortOrder
    universiteSource?: SortOrder
    universiteDestination?: SortOrder
    datePartage?: SortOrder
    estActif?: SortOrder
  }

  export type PartageUniversiteMaxOrderByAggregateInput = {
    id?: SortOrder
    ressourceId?: SortOrder
    universiteSource?: SortOrder
    universiteDestination?: SortOrder
    datePartage?: SortOrder
    estActif?: SortOrder
  }

  export type PartageUniversiteMinOrderByAggregateInput = {
    id?: SortOrder
    ressourceId?: SortOrder
    universiteSource?: SortOrder
    universiteDestination?: SortOrder
    datePartage?: SortOrder
    estActif?: SortOrder
  }

  export type EnumTypeTransactionFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeTransaction | EnumTypeTransactionFieldRefInput<$PrismaModel>
    in?: $Enums.TypeTransaction[]
    notIn?: $Enums.TypeTransaction[]
    not?: NestedEnumTypeTransactionFilter<$PrismaModel> | $Enums.TypeTransaction
  }

  export type EnumStatutTransactionFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutTransaction | EnumStatutTransactionFieldRefInput<$PrismaModel>
    in?: $Enums.StatutTransaction[]
    notIn?: $Enums.StatutTransaction[]
    not?: NestedEnumStatutTransactionFilter<$PrismaModel> | $Enums.StatutTransaction
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type TransactionBlockchainOrderByRelevanceInput = {
    fields: TransactionBlockchainOrderByRelevanceFieldEnum | TransactionBlockchainOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TransactionBlockchainCountOrderByAggregateInput = {
    id?: SortOrder
    referenceBlockchain?: SortOrder
    typeTransaction?: SortOrder
    ressourceId?: SortOrder
    universiteOrigine?: SortOrder
    universiteDestination?: SortOrder
    dateTransaction?: SortOrder
    statut?: SortOrder
    hashTransaction?: SortOrder
    donneesTechniques?: SortOrder
  }

  export type TransactionBlockchainMaxOrderByAggregateInput = {
    id?: SortOrder
    referenceBlockchain?: SortOrder
    typeTransaction?: SortOrder
    ressourceId?: SortOrder
    universiteOrigine?: SortOrder
    universiteDestination?: SortOrder
    dateTransaction?: SortOrder
    statut?: SortOrder
    hashTransaction?: SortOrder
  }

  export type TransactionBlockchainMinOrderByAggregateInput = {
    id?: SortOrder
    referenceBlockchain?: SortOrder
    typeTransaction?: SortOrder
    ressourceId?: SortOrder
    universiteOrigine?: SortOrder
    universiteDestination?: SortOrder
    dateTransaction?: SortOrder
    statut?: SortOrder
    hashTransaction?: SortOrder
  }

  export type EnumTypeTransactionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeTransaction | EnumTypeTransactionFieldRefInput<$PrismaModel>
    in?: $Enums.TypeTransaction[]
    notIn?: $Enums.TypeTransaction[]
    not?: NestedEnumTypeTransactionWithAggregatesFilter<$PrismaModel> | $Enums.TypeTransaction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeTransactionFilter<$PrismaModel>
    _max?: NestedEnumTypeTransactionFilter<$PrismaModel>
  }

  export type EnumStatutTransactionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutTransaction | EnumStatutTransactionFieldRefInput<$PrismaModel>
    in?: $Enums.StatutTransaction[]
    notIn?: $Enums.StatutTransaction[]
    not?: NestedEnumStatutTransactionWithAggregatesFilter<$PrismaModel> | $Enums.StatutTransaction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutTransactionFilter<$PrismaModel>
    _max?: NestedEnumStatutTransactionFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type UniversiteCreateNestedOneWithoutUsersInput = {
    create?: XOR<UniversiteCreateWithoutUsersInput, UniversiteUncheckedCreateWithoutUsersInput>
    connectOrCreate?: UniversiteCreateOrConnectWithoutUsersInput
    connect?: UniversiteWhereUniqueInput
  }

  export type RessourceCreateNestedManyWithoutAuteurInput = {
    create?: XOR<RessourceCreateWithoutAuteurInput, RessourceUncheckedCreateWithoutAuteurInput> | RessourceCreateWithoutAuteurInput[] | RessourceUncheckedCreateWithoutAuteurInput[]
    connectOrCreate?: RessourceCreateOrConnectWithoutAuteurInput | RessourceCreateOrConnectWithoutAuteurInput[]
    createMany?: RessourceCreateManyAuteurInputEnvelope
    connect?: RessourceWhereUniqueInput | RessourceWhereUniqueInput[]
  }

  export type FavoriCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoriCreateWithoutUserInput, FavoriUncheckedCreateWithoutUserInput> | FavoriCreateWithoutUserInput[] | FavoriUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriCreateOrConnectWithoutUserInput | FavoriCreateOrConnectWithoutUserInput[]
    createMany?: FavoriCreateManyUserInputEnvelope
    connect?: FavoriWhereUniqueInput | FavoriWhereUniqueInput[]
  }

  export type CommentaireCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentaireCreateWithoutUserInput, CommentaireUncheckedCreateWithoutUserInput> | CommentaireCreateWithoutUserInput[] | CommentaireUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentaireCreateOrConnectWithoutUserInput | CommentaireCreateOrConnectWithoutUserInput[]
    createMany?: CommentaireCreateManyUserInputEnvelope
    connect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
  }

  export type NotationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotationCreateWithoutUserInput, NotationUncheckedCreateWithoutUserInput> | NotationCreateWithoutUserInput[] | NotationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotationCreateOrConnectWithoutUserInput | NotationCreateOrConnectWithoutUserInput[]
    createMany?: NotationCreateManyUserInputEnvelope
    connect?: NotationWhereUniqueInput | NotationWhereUniqueInput[]
  }

  export type HistoriqueAccesCreateNestedManyWithoutUserInput = {
    create?: XOR<HistoriqueAccesCreateWithoutUserInput, HistoriqueAccesUncheckedCreateWithoutUserInput> | HistoriqueAccesCreateWithoutUserInput[] | HistoriqueAccesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HistoriqueAccesCreateOrConnectWithoutUserInput | HistoriqueAccesCreateOrConnectWithoutUserInput[]
    createMany?: HistoriqueAccesCreateManyUserInputEnvelope
    connect?: HistoriqueAccesWhereUniqueInput | HistoriqueAccesWhereUniqueInput[]
  }

  export type CollectionCreateNestedManyWithoutUserInput = {
    create?: XOR<CollectionCreateWithoutUserInput, CollectionUncheckedCreateWithoutUserInput> | CollectionCreateWithoutUserInput[] | CollectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutUserInput | CollectionCreateOrConnectWithoutUserInput[]
    createMany?: CollectionCreateManyUserInputEnvelope
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
  }

  export type RessourceUncheckedCreateNestedManyWithoutAuteurInput = {
    create?: XOR<RessourceCreateWithoutAuteurInput, RessourceUncheckedCreateWithoutAuteurInput> | RessourceCreateWithoutAuteurInput[] | RessourceUncheckedCreateWithoutAuteurInput[]
    connectOrCreate?: RessourceCreateOrConnectWithoutAuteurInput | RessourceCreateOrConnectWithoutAuteurInput[]
    createMany?: RessourceCreateManyAuteurInputEnvelope
    connect?: RessourceWhereUniqueInput | RessourceWhereUniqueInput[]
  }

  export type FavoriUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoriCreateWithoutUserInput, FavoriUncheckedCreateWithoutUserInput> | FavoriCreateWithoutUserInput[] | FavoriUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriCreateOrConnectWithoutUserInput | FavoriCreateOrConnectWithoutUserInput[]
    createMany?: FavoriCreateManyUserInputEnvelope
    connect?: FavoriWhereUniqueInput | FavoriWhereUniqueInput[]
  }

  export type CommentaireUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentaireCreateWithoutUserInput, CommentaireUncheckedCreateWithoutUserInput> | CommentaireCreateWithoutUserInput[] | CommentaireUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentaireCreateOrConnectWithoutUserInput | CommentaireCreateOrConnectWithoutUserInput[]
    createMany?: CommentaireCreateManyUserInputEnvelope
    connect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
  }

  export type NotationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotationCreateWithoutUserInput, NotationUncheckedCreateWithoutUserInput> | NotationCreateWithoutUserInput[] | NotationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotationCreateOrConnectWithoutUserInput | NotationCreateOrConnectWithoutUserInput[]
    createMany?: NotationCreateManyUserInputEnvelope
    connect?: NotationWhereUniqueInput | NotationWhereUniqueInput[]
  }

  export type HistoriqueAccesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<HistoriqueAccesCreateWithoutUserInput, HistoriqueAccesUncheckedCreateWithoutUserInput> | HistoriqueAccesCreateWithoutUserInput[] | HistoriqueAccesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HistoriqueAccesCreateOrConnectWithoutUserInput | HistoriqueAccesCreateOrConnectWithoutUserInput[]
    createMany?: HistoriqueAccesCreateManyUserInputEnvelope
    connect?: HistoriqueAccesWhereUniqueInput | HistoriqueAccesWhereUniqueInput[]
  }

  export type CollectionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CollectionCreateWithoutUserInput, CollectionUncheckedCreateWithoutUserInput> | CollectionCreateWithoutUserInput[] | CollectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutUserInput | CollectionCreateOrConnectWithoutUserInput[]
    createMany?: CollectionCreateManyUserInputEnvelope
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleUserFieldUpdateOperationsInput = {
    set?: $Enums.RoleUser
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UniversiteUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<UniversiteCreateWithoutUsersInput, UniversiteUncheckedCreateWithoutUsersInput>
    connectOrCreate?: UniversiteCreateOrConnectWithoutUsersInput
    upsert?: UniversiteUpsertWithoutUsersInput
    connect?: UniversiteWhereUniqueInput
    update?: XOR<XOR<UniversiteUpdateToOneWithWhereWithoutUsersInput, UniversiteUpdateWithoutUsersInput>, UniversiteUncheckedUpdateWithoutUsersInput>
  }

  export type RessourceUpdateManyWithoutAuteurNestedInput = {
    create?: XOR<RessourceCreateWithoutAuteurInput, RessourceUncheckedCreateWithoutAuteurInput> | RessourceCreateWithoutAuteurInput[] | RessourceUncheckedCreateWithoutAuteurInput[]
    connectOrCreate?: RessourceCreateOrConnectWithoutAuteurInput | RessourceCreateOrConnectWithoutAuteurInput[]
    upsert?: RessourceUpsertWithWhereUniqueWithoutAuteurInput | RessourceUpsertWithWhereUniqueWithoutAuteurInput[]
    createMany?: RessourceCreateManyAuteurInputEnvelope
    set?: RessourceWhereUniqueInput | RessourceWhereUniqueInput[]
    disconnect?: RessourceWhereUniqueInput | RessourceWhereUniqueInput[]
    delete?: RessourceWhereUniqueInput | RessourceWhereUniqueInput[]
    connect?: RessourceWhereUniqueInput | RessourceWhereUniqueInput[]
    update?: RessourceUpdateWithWhereUniqueWithoutAuteurInput | RessourceUpdateWithWhereUniqueWithoutAuteurInput[]
    updateMany?: RessourceUpdateManyWithWhereWithoutAuteurInput | RessourceUpdateManyWithWhereWithoutAuteurInput[]
    deleteMany?: RessourceScalarWhereInput | RessourceScalarWhereInput[]
  }

  export type FavoriUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoriCreateWithoutUserInput, FavoriUncheckedCreateWithoutUserInput> | FavoriCreateWithoutUserInput[] | FavoriUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriCreateOrConnectWithoutUserInput | FavoriCreateOrConnectWithoutUserInput[]
    upsert?: FavoriUpsertWithWhereUniqueWithoutUserInput | FavoriUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoriCreateManyUserInputEnvelope
    set?: FavoriWhereUniqueInput | FavoriWhereUniqueInput[]
    disconnect?: FavoriWhereUniqueInput | FavoriWhereUniqueInput[]
    delete?: FavoriWhereUniqueInput | FavoriWhereUniqueInput[]
    connect?: FavoriWhereUniqueInput | FavoriWhereUniqueInput[]
    update?: FavoriUpdateWithWhereUniqueWithoutUserInput | FavoriUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoriUpdateManyWithWhereWithoutUserInput | FavoriUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoriScalarWhereInput | FavoriScalarWhereInput[]
  }

  export type CommentaireUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentaireCreateWithoutUserInput, CommentaireUncheckedCreateWithoutUserInput> | CommentaireCreateWithoutUserInput[] | CommentaireUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentaireCreateOrConnectWithoutUserInput | CommentaireCreateOrConnectWithoutUserInput[]
    upsert?: CommentaireUpsertWithWhereUniqueWithoutUserInput | CommentaireUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentaireCreateManyUserInputEnvelope
    set?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    disconnect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    delete?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    connect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    update?: CommentaireUpdateWithWhereUniqueWithoutUserInput | CommentaireUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentaireUpdateManyWithWhereWithoutUserInput | CommentaireUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentaireScalarWhereInput | CommentaireScalarWhereInput[]
  }

  export type NotationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotationCreateWithoutUserInput, NotationUncheckedCreateWithoutUserInput> | NotationCreateWithoutUserInput[] | NotationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotationCreateOrConnectWithoutUserInput | NotationCreateOrConnectWithoutUserInput[]
    upsert?: NotationUpsertWithWhereUniqueWithoutUserInput | NotationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotationCreateManyUserInputEnvelope
    set?: NotationWhereUniqueInput | NotationWhereUniqueInput[]
    disconnect?: NotationWhereUniqueInput | NotationWhereUniqueInput[]
    delete?: NotationWhereUniqueInput | NotationWhereUniqueInput[]
    connect?: NotationWhereUniqueInput | NotationWhereUniqueInput[]
    update?: NotationUpdateWithWhereUniqueWithoutUserInput | NotationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotationUpdateManyWithWhereWithoutUserInput | NotationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotationScalarWhereInput | NotationScalarWhereInput[]
  }

  export type HistoriqueAccesUpdateManyWithoutUserNestedInput = {
    create?: XOR<HistoriqueAccesCreateWithoutUserInput, HistoriqueAccesUncheckedCreateWithoutUserInput> | HistoriqueAccesCreateWithoutUserInput[] | HistoriqueAccesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HistoriqueAccesCreateOrConnectWithoutUserInput | HistoriqueAccesCreateOrConnectWithoutUserInput[]
    upsert?: HistoriqueAccesUpsertWithWhereUniqueWithoutUserInput | HistoriqueAccesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HistoriqueAccesCreateManyUserInputEnvelope
    set?: HistoriqueAccesWhereUniqueInput | HistoriqueAccesWhereUniqueInput[]
    disconnect?: HistoriqueAccesWhereUniqueInput | HistoriqueAccesWhereUniqueInput[]
    delete?: HistoriqueAccesWhereUniqueInput | HistoriqueAccesWhereUniqueInput[]
    connect?: HistoriqueAccesWhereUniqueInput | HistoriqueAccesWhereUniqueInput[]
    update?: HistoriqueAccesUpdateWithWhereUniqueWithoutUserInput | HistoriqueAccesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HistoriqueAccesUpdateManyWithWhereWithoutUserInput | HistoriqueAccesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HistoriqueAccesScalarWhereInput | HistoriqueAccesScalarWhereInput[]
  }

  export type CollectionUpdateManyWithoutUserNestedInput = {
    create?: XOR<CollectionCreateWithoutUserInput, CollectionUncheckedCreateWithoutUserInput> | CollectionCreateWithoutUserInput[] | CollectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutUserInput | CollectionCreateOrConnectWithoutUserInput[]
    upsert?: CollectionUpsertWithWhereUniqueWithoutUserInput | CollectionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CollectionCreateManyUserInputEnvelope
    set?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    disconnect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    delete?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    update?: CollectionUpdateWithWhereUniqueWithoutUserInput | CollectionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CollectionUpdateManyWithWhereWithoutUserInput | CollectionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CollectionScalarWhereInput | CollectionScalarWhereInput[]
  }

  export type RessourceUncheckedUpdateManyWithoutAuteurNestedInput = {
    create?: XOR<RessourceCreateWithoutAuteurInput, RessourceUncheckedCreateWithoutAuteurInput> | RessourceCreateWithoutAuteurInput[] | RessourceUncheckedCreateWithoutAuteurInput[]
    connectOrCreate?: RessourceCreateOrConnectWithoutAuteurInput | RessourceCreateOrConnectWithoutAuteurInput[]
    upsert?: RessourceUpsertWithWhereUniqueWithoutAuteurInput | RessourceUpsertWithWhereUniqueWithoutAuteurInput[]
    createMany?: RessourceCreateManyAuteurInputEnvelope
    set?: RessourceWhereUniqueInput | RessourceWhereUniqueInput[]
    disconnect?: RessourceWhereUniqueInput | RessourceWhereUniqueInput[]
    delete?: RessourceWhereUniqueInput | RessourceWhereUniqueInput[]
    connect?: RessourceWhereUniqueInput | RessourceWhereUniqueInput[]
    update?: RessourceUpdateWithWhereUniqueWithoutAuteurInput | RessourceUpdateWithWhereUniqueWithoutAuteurInput[]
    updateMany?: RessourceUpdateManyWithWhereWithoutAuteurInput | RessourceUpdateManyWithWhereWithoutAuteurInput[]
    deleteMany?: RessourceScalarWhereInput | RessourceScalarWhereInput[]
  }

  export type FavoriUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoriCreateWithoutUserInput, FavoriUncheckedCreateWithoutUserInput> | FavoriCreateWithoutUserInput[] | FavoriUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriCreateOrConnectWithoutUserInput | FavoriCreateOrConnectWithoutUserInput[]
    upsert?: FavoriUpsertWithWhereUniqueWithoutUserInput | FavoriUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoriCreateManyUserInputEnvelope
    set?: FavoriWhereUniqueInput | FavoriWhereUniqueInput[]
    disconnect?: FavoriWhereUniqueInput | FavoriWhereUniqueInput[]
    delete?: FavoriWhereUniqueInput | FavoriWhereUniqueInput[]
    connect?: FavoriWhereUniqueInput | FavoriWhereUniqueInput[]
    update?: FavoriUpdateWithWhereUniqueWithoutUserInput | FavoriUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoriUpdateManyWithWhereWithoutUserInput | FavoriUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoriScalarWhereInput | FavoriScalarWhereInput[]
  }

  export type CommentaireUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentaireCreateWithoutUserInput, CommentaireUncheckedCreateWithoutUserInput> | CommentaireCreateWithoutUserInput[] | CommentaireUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentaireCreateOrConnectWithoutUserInput | CommentaireCreateOrConnectWithoutUserInput[]
    upsert?: CommentaireUpsertWithWhereUniqueWithoutUserInput | CommentaireUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentaireCreateManyUserInputEnvelope
    set?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    disconnect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    delete?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    connect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    update?: CommentaireUpdateWithWhereUniqueWithoutUserInput | CommentaireUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentaireUpdateManyWithWhereWithoutUserInput | CommentaireUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentaireScalarWhereInput | CommentaireScalarWhereInput[]
  }

  export type NotationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotationCreateWithoutUserInput, NotationUncheckedCreateWithoutUserInput> | NotationCreateWithoutUserInput[] | NotationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotationCreateOrConnectWithoutUserInput | NotationCreateOrConnectWithoutUserInput[]
    upsert?: NotationUpsertWithWhereUniqueWithoutUserInput | NotationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotationCreateManyUserInputEnvelope
    set?: NotationWhereUniqueInput | NotationWhereUniqueInput[]
    disconnect?: NotationWhereUniqueInput | NotationWhereUniqueInput[]
    delete?: NotationWhereUniqueInput | NotationWhereUniqueInput[]
    connect?: NotationWhereUniqueInput | NotationWhereUniqueInput[]
    update?: NotationUpdateWithWhereUniqueWithoutUserInput | NotationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotationUpdateManyWithWhereWithoutUserInput | NotationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotationScalarWhereInput | NotationScalarWhereInput[]
  }

  export type HistoriqueAccesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<HistoriqueAccesCreateWithoutUserInput, HistoriqueAccesUncheckedCreateWithoutUserInput> | HistoriqueAccesCreateWithoutUserInput[] | HistoriqueAccesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HistoriqueAccesCreateOrConnectWithoutUserInput | HistoriqueAccesCreateOrConnectWithoutUserInput[]
    upsert?: HistoriqueAccesUpsertWithWhereUniqueWithoutUserInput | HistoriqueAccesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HistoriqueAccesCreateManyUserInputEnvelope
    set?: HistoriqueAccesWhereUniqueInput | HistoriqueAccesWhereUniqueInput[]
    disconnect?: HistoriqueAccesWhereUniqueInput | HistoriqueAccesWhereUniqueInput[]
    delete?: HistoriqueAccesWhereUniqueInput | HistoriqueAccesWhereUniqueInput[]
    connect?: HistoriqueAccesWhereUniqueInput | HistoriqueAccesWhereUniqueInput[]
    update?: HistoriqueAccesUpdateWithWhereUniqueWithoutUserInput | HistoriqueAccesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HistoriqueAccesUpdateManyWithWhereWithoutUserInput | HistoriqueAccesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HistoriqueAccesScalarWhereInput | HistoriqueAccesScalarWhereInput[]
  }

  export type CollectionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CollectionCreateWithoutUserInput, CollectionUncheckedCreateWithoutUserInput> | CollectionCreateWithoutUserInput[] | CollectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutUserInput | CollectionCreateOrConnectWithoutUserInput[]
    upsert?: CollectionUpsertWithWhereUniqueWithoutUserInput | CollectionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CollectionCreateManyUserInputEnvelope
    set?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    disconnect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    delete?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    update?: CollectionUpdateWithWhereUniqueWithoutUserInput | CollectionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CollectionUpdateManyWithWhereWithoutUserInput | CollectionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CollectionScalarWhereInput | CollectionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutContributionsInput = {
    create?: XOR<UserCreateWithoutContributionsInput, UserUncheckedCreateWithoutContributionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutContributionsInput
    connect?: UserWhereUniqueInput
  }

  export type UniversiteCreateNestedOneWithoutRessourcesInput = {
    create?: XOR<UniversiteCreateWithoutRessourcesInput, UniversiteUncheckedCreateWithoutRessourcesInput>
    connectOrCreate?: UniversiteCreateOrConnectWithoutRessourcesInput
    connect?: UniversiteWhereUniqueInput
  }

  export type FavoriCreateNestedManyWithoutRessourceInput = {
    create?: XOR<FavoriCreateWithoutRessourceInput, FavoriUncheckedCreateWithoutRessourceInput> | FavoriCreateWithoutRessourceInput[] | FavoriUncheckedCreateWithoutRessourceInput[]
    connectOrCreate?: FavoriCreateOrConnectWithoutRessourceInput | FavoriCreateOrConnectWithoutRessourceInput[]
    createMany?: FavoriCreateManyRessourceInputEnvelope
    connect?: FavoriWhereUniqueInput | FavoriWhereUniqueInput[]
  }

  export type CommentaireCreateNestedManyWithoutRessourceInput = {
    create?: XOR<CommentaireCreateWithoutRessourceInput, CommentaireUncheckedCreateWithoutRessourceInput> | CommentaireCreateWithoutRessourceInput[] | CommentaireUncheckedCreateWithoutRessourceInput[]
    connectOrCreate?: CommentaireCreateOrConnectWithoutRessourceInput | CommentaireCreateOrConnectWithoutRessourceInput[]
    createMany?: CommentaireCreateManyRessourceInputEnvelope
    connect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
  }

  export type NotationCreateNestedManyWithoutRessourceInput = {
    create?: XOR<NotationCreateWithoutRessourceInput, NotationUncheckedCreateWithoutRessourceInput> | NotationCreateWithoutRessourceInput[] | NotationUncheckedCreateWithoutRessourceInput[]
    connectOrCreate?: NotationCreateOrConnectWithoutRessourceInput | NotationCreateOrConnectWithoutRessourceInput[]
    createMany?: NotationCreateManyRessourceInputEnvelope
    connect?: NotationWhereUniqueInput | NotationWhereUniqueInput[]
  }

  export type HistoriqueAccesCreateNestedManyWithoutRessourceInput = {
    create?: XOR<HistoriqueAccesCreateWithoutRessourceInput, HistoriqueAccesUncheckedCreateWithoutRessourceInput> | HistoriqueAccesCreateWithoutRessourceInput[] | HistoriqueAccesUncheckedCreateWithoutRessourceInput[]
    connectOrCreate?: HistoriqueAccesCreateOrConnectWithoutRessourceInput | HistoriqueAccesCreateOrConnectWithoutRessourceInput[]
    createMany?: HistoriqueAccesCreateManyRessourceInputEnvelope
    connect?: HistoriqueAccesWhereUniqueInput | HistoriqueAccesWhereUniqueInput[]
  }

  export type CollectionRessourceCreateNestedManyWithoutRessourceInput = {
    create?: XOR<CollectionRessourceCreateWithoutRessourceInput, CollectionRessourceUncheckedCreateWithoutRessourceInput> | CollectionRessourceCreateWithoutRessourceInput[] | CollectionRessourceUncheckedCreateWithoutRessourceInput[]
    connectOrCreate?: CollectionRessourceCreateOrConnectWithoutRessourceInput | CollectionRessourceCreateOrConnectWithoutRessourceInput[]
    createMany?: CollectionRessourceCreateManyRessourceInputEnvelope
    connect?: CollectionRessourceWhereUniqueInput | CollectionRessourceWhereUniqueInput[]
  }

  export type PartageUniversiteCreateNestedManyWithoutRessourceInput = {
    create?: XOR<PartageUniversiteCreateWithoutRessourceInput, PartageUniversiteUncheckedCreateWithoutRessourceInput> | PartageUniversiteCreateWithoutRessourceInput[] | PartageUniversiteUncheckedCreateWithoutRessourceInput[]
    connectOrCreate?: PartageUniversiteCreateOrConnectWithoutRessourceInput | PartageUniversiteCreateOrConnectWithoutRessourceInput[]
    createMany?: PartageUniversiteCreateManyRessourceInputEnvelope
    connect?: PartageUniversiteWhereUniqueInput | PartageUniversiteWhereUniqueInput[]
  }

  export type FavoriUncheckedCreateNestedManyWithoutRessourceInput = {
    create?: XOR<FavoriCreateWithoutRessourceInput, FavoriUncheckedCreateWithoutRessourceInput> | FavoriCreateWithoutRessourceInput[] | FavoriUncheckedCreateWithoutRessourceInput[]
    connectOrCreate?: FavoriCreateOrConnectWithoutRessourceInput | FavoriCreateOrConnectWithoutRessourceInput[]
    createMany?: FavoriCreateManyRessourceInputEnvelope
    connect?: FavoriWhereUniqueInput | FavoriWhereUniqueInput[]
  }

  export type CommentaireUncheckedCreateNestedManyWithoutRessourceInput = {
    create?: XOR<CommentaireCreateWithoutRessourceInput, CommentaireUncheckedCreateWithoutRessourceInput> | CommentaireCreateWithoutRessourceInput[] | CommentaireUncheckedCreateWithoutRessourceInput[]
    connectOrCreate?: CommentaireCreateOrConnectWithoutRessourceInput | CommentaireCreateOrConnectWithoutRessourceInput[]
    createMany?: CommentaireCreateManyRessourceInputEnvelope
    connect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
  }

  export type NotationUncheckedCreateNestedManyWithoutRessourceInput = {
    create?: XOR<NotationCreateWithoutRessourceInput, NotationUncheckedCreateWithoutRessourceInput> | NotationCreateWithoutRessourceInput[] | NotationUncheckedCreateWithoutRessourceInput[]
    connectOrCreate?: NotationCreateOrConnectWithoutRessourceInput | NotationCreateOrConnectWithoutRessourceInput[]
    createMany?: NotationCreateManyRessourceInputEnvelope
    connect?: NotationWhereUniqueInput | NotationWhereUniqueInput[]
  }

  export type HistoriqueAccesUncheckedCreateNestedManyWithoutRessourceInput = {
    create?: XOR<HistoriqueAccesCreateWithoutRessourceInput, HistoriqueAccesUncheckedCreateWithoutRessourceInput> | HistoriqueAccesCreateWithoutRessourceInput[] | HistoriqueAccesUncheckedCreateWithoutRessourceInput[]
    connectOrCreate?: HistoriqueAccesCreateOrConnectWithoutRessourceInput | HistoriqueAccesCreateOrConnectWithoutRessourceInput[]
    createMany?: HistoriqueAccesCreateManyRessourceInputEnvelope
    connect?: HistoriqueAccesWhereUniqueInput | HistoriqueAccesWhereUniqueInput[]
  }

  export type CollectionRessourceUncheckedCreateNestedManyWithoutRessourceInput = {
    create?: XOR<CollectionRessourceCreateWithoutRessourceInput, CollectionRessourceUncheckedCreateWithoutRessourceInput> | CollectionRessourceCreateWithoutRessourceInput[] | CollectionRessourceUncheckedCreateWithoutRessourceInput[]
    connectOrCreate?: CollectionRessourceCreateOrConnectWithoutRessourceInput | CollectionRessourceCreateOrConnectWithoutRessourceInput[]
    createMany?: CollectionRessourceCreateManyRessourceInputEnvelope
    connect?: CollectionRessourceWhereUniqueInput | CollectionRessourceWhereUniqueInput[]
  }

  export type PartageUniversiteUncheckedCreateNestedManyWithoutRessourceInput = {
    create?: XOR<PartageUniversiteCreateWithoutRessourceInput, PartageUniversiteUncheckedCreateWithoutRessourceInput> | PartageUniversiteCreateWithoutRessourceInput[] | PartageUniversiteUncheckedCreateWithoutRessourceInput[]
    connectOrCreate?: PartageUniversiteCreateOrConnectWithoutRessourceInput | PartageUniversiteCreateOrConnectWithoutRessourceInput[]
    createMany?: PartageUniversiteCreateManyRessourceInputEnvelope
    connect?: PartageUniversiteWhereUniqueInput | PartageUniversiteWhereUniqueInput[]
  }

  export type EnumTypeRessourceFieldUpdateOperationsInput = {
    set?: $Enums.TypeRessource
  }

  export type EnumNiveauAccesFieldUpdateOperationsInput = {
    set?: $Enums.NiveauAcces
  }

  export type UserUpdateOneWithoutContributionsNestedInput = {
    create?: XOR<UserCreateWithoutContributionsInput, UserUncheckedCreateWithoutContributionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutContributionsInput
    upsert?: UserUpsertWithoutContributionsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutContributionsInput, UserUpdateWithoutContributionsInput>, UserUncheckedUpdateWithoutContributionsInput>
  }

  export type UniversiteUpdateOneRequiredWithoutRessourcesNestedInput = {
    create?: XOR<UniversiteCreateWithoutRessourcesInput, UniversiteUncheckedCreateWithoutRessourcesInput>
    connectOrCreate?: UniversiteCreateOrConnectWithoutRessourcesInput
    upsert?: UniversiteUpsertWithoutRessourcesInput
    connect?: UniversiteWhereUniqueInput
    update?: XOR<XOR<UniversiteUpdateToOneWithWhereWithoutRessourcesInput, UniversiteUpdateWithoutRessourcesInput>, UniversiteUncheckedUpdateWithoutRessourcesInput>
  }

  export type FavoriUpdateManyWithoutRessourceNestedInput = {
    create?: XOR<FavoriCreateWithoutRessourceInput, FavoriUncheckedCreateWithoutRessourceInput> | FavoriCreateWithoutRessourceInput[] | FavoriUncheckedCreateWithoutRessourceInput[]
    connectOrCreate?: FavoriCreateOrConnectWithoutRessourceInput | FavoriCreateOrConnectWithoutRessourceInput[]
    upsert?: FavoriUpsertWithWhereUniqueWithoutRessourceInput | FavoriUpsertWithWhereUniqueWithoutRessourceInput[]
    createMany?: FavoriCreateManyRessourceInputEnvelope
    set?: FavoriWhereUniqueInput | FavoriWhereUniqueInput[]
    disconnect?: FavoriWhereUniqueInput | FavoriWhereUniqueInput[]
    delete?: FavoriWhereUniqueInput | FavoriWhereUniqueInput[]
    connect?: FavoriWhereUniqueInput | FavoriWhereUniqueInput[]
    update?: FavoriUpdateWithWhereUniqueWithoutRessourceInput | FavoriUpdateWithWhereUniqueWithoutRessourceInput[]
    updateMany?: FavoriUpdateManyWithWhereWithoutRessourceInput | FavoriUpdateManyWithWhereWithoutRessourceInput[]
    deleteMany?: FavoriScalarWhereInput | FavoriScalarWhereInput[]
  }

  export type CommentaireUpdateManyWithoutRessourceNestedInput = {
    create?: XOR<CommentaireCreateWithoutRessourceInput, CommentaireUncheckedCreateWithoutRessourceInput> | CommentaireCreateWithoutRessourceInput[] | CommentaireUncheckedCreateWithoutRessourceInput[]
    connectOrCreate?: CommentaireCreateOrConnectWithoutRessourceInput | CommentaireCreateOrConnectWithoutRessourceInput[]
    upsert?: CommentaireUpsertWithWhereUniqueWithoutRessourceInput | CommentaireUpsertWithWhereUniqueWithoutRessourceInput[]
    createMany?: CommentaireCreateManyRessourceInputEnvelope
    set?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    disconnect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    delete?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    connect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    update?: CommentaireUpdateWithWhereUniqueWithoutRessourceInput | CommentaireUpdateWithWhereUniqueWithoutRessourceInput[]
    updateMany?: CommentaireUpdateManyWithWhereWithoutRessourceInput | CommentaireUpdateManyWithWhereWithoutRessourceInput[]
    deleteMany?: CommentaireScalarWhereInput | CommentaireScalarWhereInput[]
  }

  export type NotationUpdateManyWithoutRessourceNestedInput = {
    create?: XOR<NotationCreateWithoutRessourceInput, NotationUncheckedCreateWithoutRessourceInput> | NotationCreateWithoutRessourceInput[] | NotationUncheckedCreateWithoutRessourceInput[]
    connectOrCreate?: NotationCreateOrConnectWithoutRessourceInput | NotationCreateOrConnectWithoutRessourceInput[]
    upsert?: NotationUpsertWithWhereUniqueWithoutRessourceInput | NotationUpsertWithWhereUniqueWithoutRessourceInput[]
    createMany?: NotationCreateManyRessourceInputEnvelope
    set?: NotationWhereUniqueInput | NotationWhereUniqueInput[]
    disconnect?: NotationWhereUniqueInput | NotationWhereUniqueInput[]
    delete?: NotationWhereUniqueInput | NotationWhereUniqueInput[]
    connect?: NotationWhereUniqueInput | NotationWhereUniqueInput[]
    update?: NotationUpdateWithWhereUniqueWithoutRessourceInput | NotationUpdateWithWhereUniqueWithoutRessourceInput[]
    updateMany?: NotationUpdateManyWithWhereWithoutRessourceInput | NotationUpdateManyWithWhereWithoutRessourceInput[]
    deleteMany?: NotationScalarWhereInput | NotationScalarWhereInput[]
  }

  export type HistoriqueAccesUpdateManyWithoutRessourceNestedInput = {
    create?: XOR<HistoriqueAccesCreateWithoutRessourceInput, HistoriqueAccesUncheckedCreateWithoutRessourceInput> | HistoriqueAccesCreateWithoutRessourceInput[] | HistoriqueAccesUncheckedCreateWithoutRessourceInput[]
    connectOrCreate?: HistoriqueAccesCreateOrConnectWithoutRessourceInput | HistoriqueAccesCreateOrConnectWithoutRessourceInput[]
    upsert?: HistoriqueAccesUpsertWithWhereUniqueWithoutRessourceInput | HistoriqueAccesUpsertWithWhereUniqueWithoutRessourceInput[]
    createMany?: HistoriqueAccesCreateManyRessourceInputEnvelope
    set?: HistoriqueAccesWhereUniqueInput | HistoriqueAccesWhereUniqueInput[]
    disconnect?: HistoriqueAccesWhereUniqueInput | HistoriqueAccesWhereUniqueInput[]
    delete?: HistoriqueAccesWhereUniqueInput | HistoriqueAccesWhereUniqueInput[]
    connect?: HistoriqueAccesWhereUniqueInput | HistoriqueAccesWhereUniqueInput[]
    update?: HistoriqueAccesUpdateWithWhereUniqueWithoutRessourceInput | HistoriqueAccesUpdateWithWhereUniqueWithoutRessourceInput[]
    updateMany?: HistoriqueAccesUpdateManyWithWhereWithoutRessourceInput | HistoriqueAccesUpdateManyWithWhereWithoutRessourceInput[]
    deleteMany?: HistoriqueAccesScalarWhereInput | HistoriqueAccesScalarWhereInput[]
  }

  export type CollectionRessourceUpdateManyWithoutRessourceNestedInput = {
    create?: XOR<CollectionRessourceCreateWithoutRessourceInput, CollectionRessourceUncheckedCreateWithoutRessourceInput> | CollectionRessourceCreateWithoutRessourceInput[] | CollectionRessourceUncheckedCreateWithoutRessourceInput[]
    connectOrCreate?: CollectionRessourceCreateOrConnectWithoutRessourceInput | CollectionRessourceCreateOrConnectWithoutRessourceInput[]
    upsert?: CollectionRessourceUpsertWithWhereUniqueWithoutRessourceInput | CollectionRessourceUpsertWithWhereUniqueWithoutRessourceInput[]
    createMany?: CollectionRessourceCreateManyRessourceInputEnvelope
    set?: CollectionRessourceWhereUniqueInput | CollectionRessourceWhereUniqueInput[]
    disconnect?: CollectionRessourceWhereUniqueInput | CollectionRessourceWhereUniqueInput[]
    delete?: CollectionRessourceWhereUniqueInput | CollectionRessourceWhereUniqueInput[]
    connect?: CollectionRessourceWhereUniqueInput | CollectionRessourceWhereUniqueInput[]
    update?: CollectionRessourceUpdateWithWhereUniqueWithoutRessourceInput | CollectionRessourceUpdateWithWhereUniqueWithoutRessourceInput[]
    updateMany?: CollectionRessourceUpdateManyWithWhereWithoutRessourceInput | CollectionRessourceUpdateManyWithWhereWithoutRessourceInput[]
    deleteMany?: CollectionRessourceScalarWhereInput | CollectionRessourceScalarWhereInput[]
  }

  export type PartageUniversiteUpdateManyWithoutRessourceNestedInput = {
    create?: XOR<PartageUniversiteCreateWithoutRessourceInput, PartageUniversiteUncheckedCreateWithoutRessourceInput> | PartageUniversiteCreateWithoutRessourceInput[] | PartageUniversiteUncheckedCreateWithoutRessourceInput[]
    connectOrCreate?: PartageUniversiteCreateOrConnectWithoutRessourceInput | PartageUniversiteCreateOrConnectWithoutRessourceInput[]
    upsert?: PartageUniversiteUpsertWithWhereUniqueWithoutRessourceInput | PartageUniversiteUpsertWithWhereUniqueWithoutRessourceInput[]
    createMany?: PartageUniversiteCreateManyRessourceInputEnvelope
    set?: PartageUniversiteWhereUniqueInput | PartageUniversiteWhereUniqueInput[]
    disconnect?: PartageUniversiteWhereUniqueInput | PartageUniversiteWhereUniqueInput[]
    delete?: PartageUniversiteWhereUniqueInput | PartageUniversiteWhereUniqueInput[]
    connect?: PartageUniversiteWhereUniqueInput | PartageUniversiteWhereUniqueInput[]
    update?: PartageUniversiteUpdateWithWhereUniqueWithoutRessourceInput | PartageUniversiteUpdateWithWhereUniqueWithoutRessourceInput[]
    updateMany?: PartageUniversiteUpdateManyWithWhereWithoutRessourceInput | PartageUniversiteUpdateManyWithWhereWithoutRessourceInput[]
    deleteMany?: PartageUniversiteScalarWhereInput | PartageUniversiteScalarWhereInput[]
  }

  export type FavoriUncheckedUpdateManyWithoutRessourceNestedInput = {
    create?: XOR<FavoriCreateWithoutRessourceInput, FavoriUncheckedCreateWithoutRessourceInput> | FavoriCreateWithoutRessourceInput[] | FavoriUncheckedCreateWithoutRessourceInput[]
    connectOrCreate?: FavoriCreateOrConnectWithoutRessourceInput | FavoriCreateOrConnectWithoutRessourceInput[]
    upsert?: FavoriUpsertWithWhereUniqueWithoutRessourceInput | FavoriUpsertWithWhereUniqueWithoutRessourceInput[]
    createMany?: FavoriCreateManyRessourceInputEnvelope
    set?: FavoriWhereUniqueInput | FavoriWhereUniqueInput[]
    disconnect?: FavoriWhereUniqueInput | FavoriWhereUniqueInput[]
    delete?: FavoriWhereUniqueInput | FavoriWhereUniqueInput[]
    connect?: FavoriWhereUniqueInput | FavoriWhereUniqueInput[]
    update?: FavoriUpdateWithWhereUniqueWithoutRessourceInput | FavoriUpdateWithWhereUniqueWithoutRessourceInput[]
    updateMany?: FavoriUpdateManyWithWhereWithoutRessourceInput | FavoriUpdateManyWithWhereWithoutRessourceInput[]
    deleteMany?: FavoriScalarWhereInput | FavoriScalarWhereInput[]
  }

  export type CommentaireUncheckedUpdateManyWithoutRessourceNestedInput = {
    create?: XOR<CommentaireCreateWithoutRessourceInput, CommentaireUncheckedCreateWithoutRessourceInput> | CommentaireCreateWithoutRessourceInput[] | CommentaireUncheckedCreateWithoutRessourceInput[]
    connectOrCreate?: CommentaireCreateOrConnectWithoutRessourceInput | CommentaireCreateOrConnectWithoutRessourceInput[]
    upsert?: CommentaireUpsertWithWhereUniqueWithoutRessourceInput | CommentaireUpsertWithWhereUniqueWithoutRessourceInput[]
    createMany?: CommentaireCreateManyRessourceInputEnvelope
    set?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    disconnect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    delete?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    connect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    update?: CommentaireUpdateWithWhereUniqueWithoutRessourceInput | CommentaireUpdateWithWhereUniqueWithoutRessourceInput[]
    updateMany?: CommentaireUpdateManyWithWhereWithoutRessourceInput | CommentaireUpdateManyWithWhereWithoutRessourceInput[]
    deleteMany?: CommentaireScalarWhereInput | CommentaireScalarWhereInput[]
  }

  export type NotationUncheckedUpdateManyWithoutRessourceNestedInput = {
    create?: XOR<NotationCreateWithoutRessourceInput, NotationUncheckedCreateWithoutRessourceInput> | NotationCreateWithoutRessourceInput[] | NotationUncheckedCreateWithoutRessourceInput[]
    connectOrCreate?: NotationCreateOrConnectWithoutRessourceInput | NotationCreateOrConnectWithoutRessourceInput[]
    upsert?: NotationUpsertWithWhereUniqueWithoutRessourceInput | NotationUpsertWithWhereUniqueWithoutRessourceInput[]
    createMany?: NotationCreateManyRessourceInputEnvelope
    set?: NotationWhereUniqueInput | NotationWhereUniqueInput[]
    disconnect?: NotationWhereUniqueInput | NotationWhereUniqueInput[]
    delete?: NotationWhereUniqueInput | NotationWhereUniqueInput[]
    connect?: NotationWhereUniqueInput | NotationWhereUniqueInput[]
    update?: NotationUpdateWithWhereUniqueWithoutRessourceInput | NotationUpdateWithWhereUniqueWithoutRessourceInput[]
    updateMany?: NotationUpdateManyWithWhereWithoutRessourceInput | NotationUpdateManyWithWhereWithoutRessourceInput[]
    deleteMany?: NotationScalarWhereInput | NotationScalarWhereInput[]
  }

  export type HistoriqueAccesUncheckedUpdateManyWithoutRessourceNestedInput = {
    create?: XOR<HistoriqueAccesCreateWithoutRessourceInput, HistoriqueAccesUncheckedCreateWithoutRessourceInput> | HistoriqueAccesCreateWithoutRessourceInput[] | HistoriqueAccesUncheckedCreateWithoutRessourceInput[]
    connectOrCreate?: HistoriqueAccesCreateOrConnectWithoutRessourceInput | HistoriqueAccesCreateOrConnectWithoutRessourceInput[]
    upsert?: HistoriqueAccesUpsertWithWhereUniqueWithoutRessourceInput | HistoriqueAccesUpsertWithWhereUniqueWithoutRessourceInput[]
    createMany?: HistoriqueAccesCreateManyRessourceInputEnvelope
    set?: HistoriqueAccesWhereUniqueInput | HistoriqueAccesWhereUniqueInput[]
    disconnect?: HistoriqueAccesWhereUniqueInput | HistoriqueAccesWhereUniqueInput[]
    delete?: HistoriqueAccesWhereUniqueInput | HistoriqueAccesWhereUniqueInput[]
    connect?: HistoriqueAccesWhereUniqueInput | HistoriqueAccesWhereUniqueInput[]
    update?: HistoriqueAccesUpdateWithWhereUniqueWithoutRessourceInput | HistoriqueAccesUpdateWithWhereUniqueWithoutRessourceInput[]
    updateMany?: HistoriqueAccesUpdateManyWithWhereWithoutRessourceInput | HistoriqueAccesUpdateManyWithWhereWithoutRessourceInput[]
    deleteMany?: HistoriqueAccesScalarWhereInput | HistoriqueAccesScalarWhereInput[]
  }

  export type CollectionRessourceUncheckedUpdateManyWithoutRessourceNestedInput = {
    create?: XOR<CollectionRessourceCreateWithoutRessourceInput, CollectionRessourceUncheckedCreateWithoutRessourceInput> | CollectionRessourceCreateWithoutRessourceInput[] | CollectionRessourceUncheckedCreateWithoutRessourceInput[]
    connectOrCreate?: CollectionRessourceCreateOrConnectWithoutRessourceInput | CollectionRessourceCreateOrConnectWithoutRessourceInput[]
    upsert?: CollectionRessourceUpsertWithWhereUniqueWithoutRessourceInput | CollectionRessourceUpsertWithWhereUniqueWithoutRessourceInput[]
    createMany?: CollectionRessourceCreateManyRessourceInputEnvelope
    set?: CollectionRessourceWhereUniqueInput | CollectionRessourceWhereUniqueInput[]
    disconnect?: CollectionRessourceWhereUniqueInput | CollectionRessourceWhereUniqueInput[]
    delete?: CollectionRessourceWhereUniqueInput | CollectionRessourceWhereUniqueInput[]
    connect?: CollectionRessourceWhereUniqueInput | CollectionRessourceWhereUniqueInput[]
    update?: CollectionRessourceUpdateWithWhereUniqueWithoutRessourceInput | CollectionRessourceUpdateWithWhereUniqueWithoutRessourceInput[]
    updateMany?: CollectionRessourceUpdateManyWithWhereWithoutRessourceInput | CollectionRessourceUpdateManyWithWhereWithoutRessourceInput[]
    deleteMany?: CollectionRessourceScalarWhereInput | CollectionRessourceScalarWhereInput[]
  }

  export type PartageUniversiteUncheckedUpdateManyWithoutRessourceNestedInput = {
    create?: XOR<PartageUniversiteCreateWithoutRessourceInput, PartageUniversiteUncheckedCreateWithoutRessourceInput> | PartageUniversiteCreateWithoutRessourceInput[] | PartageUniversiteUncheckedCreateWithoutRessourceInput[]
    connectOrCreate?: PartageUniversiteCreateOrConnectWithoutRessourceInput | PartageUniversiteCreateOrConnectWithoutRessourceInput[]
    upsert?: PartageUniversiteUpsertWithWhereUniqueWithoutRessourceInput | PartageUniversiteUpsertWithWhereUniqueWithoutRessourceInput[]
    createMany?: PartageUniversiteCreateManyRessourceInputEnvelope
    set?: PartageUniversiteWhereUniqueInput | PartageUniversiteWhereUniqueInput[]
    disconnect?: PartageUniversiteWhereUniqueInput | PartageUniversiteWhereUniqueInput[]
    delete?: PartageUniversiteWhereUniqueInput | PartageUniversiteWhereUniqueInput[]
    connect?: PartageUniversiteWhereUniqueInput | PartageUniversiteWhereUniqueInput[]
    update?: PartageUniversiteUpdateWithWhereUniqueWithoutRessourceInput | PartageUniversiteUpdateWithWhereUniqueWithoutRessourceInput[]
    updateMany?: PartageUniversiteUpdateManyWithWhereWithoutRessourceInput | PartageUniversiteUpdateManyWithWhereWithoutRessourceInput[]
    deleteMany?: PartageUniversiteScalarWhereInput | PartageUniversiteScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutFavorisInput = {
    create?: XOR<UserCreateWithoutFavorisInput, UserUncheckedCreateWithoutFavorisInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavorisInput
    connect?: UserWhereUniqueInput
  }

  export type RessourceCreateNestedOneWithoutFavorisInput = {
    create?: XOR<RessourceCreateWithoutFavorisInput, RessourceUncheckedCreateWithoutFavorisInput>
    connectOrCreate?: RessourceCreateOrConnectWithoutFavorisInput
    connect?: RessourceWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFavorisNestedInput = {
    create?: XOR<UserCreateWithoutFavorisInput, UserUncheckedCreateWithoutFavorisInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavorisInput
    upsert?: UserUpsertWithoutFavorisInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFavorisInput, UserUpdateWithoutFavorisInput>, UserUncheckedUpdateWithoutFavorisInput>
  }

  export type RessourceUpdateOneRequiredWithoutFavorisNestedInput = {
    create?: XOR<RessourceCreateWithoutFavorisInput, RessourceUncheckedCreateWithoutFavorisInput>
    connectOrCreate?: RessourceCreateOrConnectWithoutFavorisInput
    upsert?: RessourceUpsertWithoutFavorisInput
    connect?: RessourceWhereUniqueInput
    update?: XOR<XOR<RessourceUpdateToOneWithWhereWithoutFavorisInput, RessourceUpdateWithoutFavorisInput>, RessourceUncheckedUpdateWithoutFavorisInput>
  }

  export type UserCreateNestedManyWithoutUniversiteInput = {
    create?: XOR<UserCreateWithoutUniversiteInput, UserUncheckedCreateWithoutUniversiteInput> | UserCreateWithoutUniversiteInput[] | UserUncheckedCreateWithoutUniversiteInput[]
    connectOrCreate?: UserCreateOrConnectWithoutUniversiteInput | UserCreateOrConnectWithoutUniversiteInput[]
    createMany?: UserCreateManyUniversiteInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type RessourceCreateNestedManyWithoutUniversiteInput = {
    create?: XOR<RessourceCreateWithoutUniversiteInput, RessourceUncheckedCreateWithoutUniversiteInput> | RessourceCreateWithoutUniversiteInput[] | RessourceUncheckedCreateWithoutUniversiteInput[]
    connectOrCreate?: RessourceCreateOrConnectWithoutUniversiteInput | RessourceCreateOrConnectWithoutUniversiteInput[]
    createMany?: RessourceCreateManyUniversiteInputEnvelope
    connect?: RessourceWhereUniqueInput | RessourceWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutUniversiteInput = {
    create?: XOR<UserCreateWithoutUniversiteInput, UserUncheckedCreateWithoutUniversiteInput> | UserCreateWithoutUniversiteInput[] | UserUncheckedCreateWithoutUniversiteInput[]
    connectOrCreate?: UserCreateOrConnectWithoutUniversiteInput | UserCreateOrConnectWithoutUniversiteInput[]
    createMany?: UserCreateManyUniversiteInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type RessourceUncheckedCreateNestedManyWithoutUniversiteInput = {
    create?: XOR<RessourceCreateWithoutUniversiteInput, RessourceUncheckedCreateWithoutUniversiteInput> | RessourceCreateWithoutUniversiteInput[] | RessourceUncheckedCreateWithoutUniversiteInput[]
    connectOrCreate?: RessourceCreateOrConnectWithoutUniversiteInput | RessourceCreateOrConnectWithoutUniversiteInput[]
    createMany?: RessourceCreateManyUniversiteInputEnvelope
    connect?: RessourceWhereUniqueInput | RessourceWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutUniversiteNestedInput = {
    create?: XOR<UserCreateWithoutUniversiteInput, UserUncheckedCreateWithoutUniversiteInput> | UserCreateWithoutUniversiteInput[] | UserUncheckedCreateWithoutUniversiteInput[]
    connectOrCreate?: UserCreateOrConnectWithoutUniversiteInput | UserCreateOrConnectWithoutUniversiteInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutUniversiteInput | UserUpsertWithWhereUniqueWithoutUniversiteInput[]
    createMany?: UserCreateManyUniversiteInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutUniversiteInput | UserUpdateWithWhereUniqueWithoutUniversiteInput[]
    updateMany?: UserUpdateManyWithWhereWithoutUniversiteInput | UserUpdateManyWithWhereWithoutUniversiteInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type RessourceUpdateManyWithoutUniversiteNestedInput = {
    create?: XOR<RessourceCreateWithoutUniversiteInput, RessourceUncheckedCreateWithoutUniversiteInput> | RessourceCreateWithoutUniversiteInput[] | RessourceUncheckedCreateWithoutUniversiteInput[]
    connectOrCreate?: RessourceCreateOrConnectWithoutUniversiteInput | RessourceCreateOrConnectWithoutUniversiteInput[]
    upsert?: RessourceUpsertWithWhereUniqueWithoutUniversiteInput | RessourceUpsertWithWhereUniqueWithoutUniversiteInput[]
    createMany?: RessourceCreateManyUniversiteInputEnvelope
    set?: RessourceWhereUniqueInput | RessourceWhereUniqueInput[]
    disconnect?: RessourceWhereUniqueInput | RessourceWhereUniqueInput[]
    delete?: RessourceWhereUniqueInput | RessourceWhereUniqueInput[]
    connect?: RessourceWhereUniqueInput | RessourceWhereUniqueInput[]
    update?: RessourceUpdateWithWhereUniqueWithoutUniversiteInput | RessourceUpdateWithWhereUniqueWithoutUniversiteInput[]
    updateMany?: RessourceUpdateManyWithWhereWithoutUniversiteInput | RessourceUpdateManyWithWhereWithoutUniversiteInput[]
    deleteMany?: RessourceScalarWhereInput | RessourceScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutUniversiteNestedInput = {
    create?: XOR<UserCreateWithoutUniversiteInput, UserUncheckedCreateWithoutUniversiteInput> | UserCreateWithoutUniversiteInput[] | UserUncheckedCreateWithoutUniversiteInput[]
    connectOrCreate?: UserCreateOrConnectWithoutUniversiteInput | UserCreateOrConnectWithoutUniversiteInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutUniversiteInput | UserUpsertWithWhereUniqueWithoutUniversiteInput[]
    createMany?: UserCreateManyUniversiteInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutUniversiteInput | UserUpdateWithWhereUniqueWithoutUniversiteInput[]
    updateMany?: UserUpdateManyWithWhereWithoutUniversiteInput | UserUpdateManyWithWhereWithoutUniversiteInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type RessourceUncheckedUpdateManyWithoutUniversiteNestedInput = {
    create?: XOR<RessourceCreateWithoutUniversiteInput, RessourceUncheckedCreateWithoutUniversiteInput> | RessourceCreateWithoutUniversiteInput[] | RessourceUncheckedCreateWithoutUniversiteInput[]
    connectOrCreate?: RessourceCreateOrConnectWithoutUniversiteInput | RessourceCreateOrConnectWithoutUniversiteInput[]
    upsert?: RessourceUpsertWithWhereUniqueWithoutUniversiteInput | RessourceUpsertWithWhereUniqueWithoutUniversiteInput[]
    createMany?: RessourceCreateManyUniversiteInputEnvelope
    set?: RessourceWhereUniqueInput | RessourceWhereUniqueInput[]
    disconnect?: RessourceWhereUniqueInput | RessourceWhereUniqueInput[]
    delete?: RessourceWhereUniqueInput | RessourceWhereUniqueInput[]
    connect?: RessourceWhereUniqueInput | RessourceWhereUniqueInput[]
    update?: RessourceUpdateWithWhereUniqueWithoutUniversiteInput | RessourceUpdateWithWhereUniqueWithoutUniversiteInput[]
    updateMany?: RessourceUpdateManyWithWhereWithoutUniversiteInput | RessourceUpdateManyWithWhereWithoutUniversiteInput[]
    deleteMany?: RessourceScalarWhereInput | RessourceScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCommentairesInput = {
    create?: XOR<UserCreateWithoutCommentairesInput, UserUncheckedCreateWithoutCommentairesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentairesInput
    connect?: UserWhereUniqueInput
  }

  export type RessourceCreateNestedOneWithoutCommentairesInput = {
    create?: XOR<RessourceCreateWithoutCommentairesInput, RessourceUncheckedCreateWithoutCommentairesInput>
    connectOrCreate?: RessourceCreateOrConnectWithoutCommentairesInput
    connect?: RessourceWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCommentairesNestedInput = {
    create?: XOR<UserCreateWithoutCommentairesInput, UserUncheckedCreateWithoutCommentairesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentairesInput
    upsert?: UserUpsertWithoutCommentairesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentairesInput, UserUpdateWithoutCommentairesInput>, UserUncheckedUpdateWithoutCommentairesInput>
  }

  export type RessourceUpdateOneRequiredWithoutCommentairesNestedInput = {
    create?: XOR<RessourceCreateWithoutCommentairesInput, RessourceUncheckedCreateWithoutCommentairesInput>
    connectOrCreate?: RessourceCreateOrConnectWithoutCommentairesInput
    upsert?: RessourceUpsertWithoutCommentairesInput
    connect?: RessourceWhereUniqueInput
    update?: XOR<XOR<RessourceUpdateToOneWithWhereWithoutCommentairesInput, RessourceUpdateWithoutCommentairesInput>, RessourceUncheckedUpdateWithoutCommentairesInput>
  }

  export type UserCreateNestedOneWithoutNotationsInput = {
    create?: XOR<UserCreateWithoutNotationsInput, UserUncheckedCreateWithoutNotationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotationsInput
    connect?: UserWhereUniqueInput
  }

  export type RessourceCreateNestedOneWithoutNotationsInput = {
    create?: XOR<RessourceCreateWithoutNotationsInput, RessourceUncheckedCreateWithoutNotationsInput>
    connectOrCreate?: RessourceCreateOrConnectWithoutNotationsInput
    connect?: RessourceWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutNotationsNestedInput = {
    create?: XOR<UserCreateWithoutNotationsInput, UserUncheckedCreateWithoutNotationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotationsInput
    upsert?: UserUpsertWithoutNotationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotationsInput, UserUpdateWithoutNotationsInput>, UserUncheckedUpdateWithoutNotationsInput>
  }

  export type RessourceUpdateOneRequiredWithoutNotationsNestedInput = {
    create?: XOR<RessourceCreateWithoutNotationsInput, RessourceUncheckedCreateWithoutNotationsInput>
    connectOrCreate?: RessourceCreateOrConnectWithoutNotationsInput
    upsert?: RessourceUpsertWithoutNotationsInput
    connect?: RessourceWhereUniqueInput
    update?: XOR<XOR<RessourceUpdateToOneWithWhereWithoutNotationsInput, RessourceUpdateWithoutNotationsInput>, RessourceUncheckedUpdateWithoutNotationsInput>
  }

  export type UserCreateNestedOneWithoutHistoriquesInput = {
    create?: XOR<UserCreateWithoutHistoriquesInput, UserUncheckedCreateWithoutHistoriquesInput>
    connectOrCreate?: UserCreateOrConnectWithoutHistoriquesInput
    connect?: UserWhereUniqueInput
  }

  export type RessourceCreateNestedOneWithoutHistoriquesInput = {
    create?: XOR<RessourceCreateWithoutHistoriquesInput, RessourceUncheckedCreateWithoutHistoriquesInput>
    connectOrCreate?: RessourceCreateOrConnectWithoutHistoriquesInput
    connect?: RessourceWhereUniqueInput
  }

  export type EnumTypeAccesFieldUpdateOperationsInput = {
    set?: $Enums.TypeAcces
  }

  export type UserUpdateOneRequiredWithoutHistoriquesNestedInput = {
    create?: XOR<UserCreateWithoutHistoriquesInput, UserUncheckedCreateWithoutHistoriquesInput>
    connectOrCreate?: UserCreateOrConnectWithoutHistoriquesInput
    upsert?: UserUpsertWithoutHistoriquesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHistoriquesInput, UserUpdateWithoutHistoriquesInput>, UserUncheckedUpdateWithoutHistoriquesInput>
  }

  export type RessourceUpdateOneRequiredWithoutHistoriquesNestedInput = {
    create?: XOR<RessourceCreateWithoutHistoriquesInput, RessourceUncheckedCreateWithoutHistoriquesInput>
    connectOrCreate?: RessourceCreateOrConnectWithoutHistoriquesInput
    upsert?: RessourceUpsertWithoutHistoriquesInput
    connect?: RessourceWhereUniqueInput
    update?: XOR<XOR<RessourceUpdateToOneWithWhereWithoutHistoriquesInput, RessourceUpdateWithoutHistoriquesInput>, RessourceUncheckedUpdateWithoutHistoriquesInput>
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumTypeInteractionFieldUpdateOperationsInput = {
    set?: $Enums.TypeInteraction
  }

  export type UserCreateNestedOneWithoutCollectionsInput = {
    create?: XOR<UserCreateWithoutCollectionsInput, UserUncheckedCreateWithoutCollectionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCollectionsInput
    connect?: UserWhereUniqueInput
  }

  export type CollectionRessourceCreateNestedManyWithoutCollectionInput = {
    create?: XOR<CollectionRessourceCreateWithoutCollectionInput, CollectionRessourceUncheckedCreateWithoutCollectionInput> | CollectionRessourceCreateWithoutCollectionInput[] | CollectionRessourceUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: CollectionRessourceCreateOrConnectWithoutCollectionInput | CollectionRessourceCreateOrConnectWithoutCollectionInput[]
    createMany?: CollectionRessourceCreateManyCollectionInputEnvelope
    connect?: CollectionRessourceWhereUniqueInput | CollectionRessourceWhereUniqueInput[]
  }

  export type CollectionRessourceUncheckedCreateNestedManyWithoutCollectionInput = {
    create?: XOR<CollectionRessourceCreateWithoutCollectionInput, CollectionRessourceUncheckedCreateWithoutCollectionInput> | CollectionRessourceCreateWithoutCollectionInput[] | CollectionRessourceUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: CollectionRessourceCreateOrConnectWithoutCollectionInput | CollectionRessourceCreateOrConnectWithoutCollectionInput[]
    createMany?: CollectionRessourceCreateManyCollectionInputEnvelope
    connect?: CollectionRessourceWhereUniqueInput | CollectionRessourceWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCollectionsNestedInput = {
    create?: XOR<UserCreateWithoutCollectionsInput, UserUncheckedCreateWithoutCollectionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCollectionsInput
    upsert?: UserUpsertWithoutCollectionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCollectionsInput, UserUpdateWithoutCollectionsInput>, UserUncheckedUpdateWithoutCollectionsInput>
  }

  export type CollectionRessourceUpdateManyWithoutCollectionNestedInput = {
    create?: XOR<CollectionRessourceCreateWithoutCollectionInput, CollectionRessourceUncheckedCreateWithoutCollectionInput> | CollectionRessourceCreateWithoutCollectionInput[] | CollectionRessourceUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: CollectionRessourceCreateOrConnectWithoutCollectionInput | CollectionRessourceCreateOrConnectWithoutCollectionInput[]
    upsert?: CollectionRessourceUpsertWithWhereUniqueWithoutCollectionInput | CollectionRessourceUpsertWithWhereUniqueWithoutCollectionInput[]
    createMany?: CollectionRessourceCreateManyCollectionInputEnvelope
    set?: CollectionRessourceWhereUniqueInput | CollectionRessourceWhereUniqueInput[]
    disconnect?: CollectionRessourceWhereUniqueInput | CollectionRessourceWhereUniqueInput[]
    delete?: CollectionRessourceWhereUniqueInput | CollectionRessourceWhereUniqueInput[]
    connect?: CollectionRessourceWhereUniqueInput | CollectionRessourceWhereUniqueInput[]
    update?: CollectionRessourceUpdateWithWhereUniqueWithoutCollectionInput | CollectionRessourceUpdateWithWhereUniqueWithoutCollectionInput[]
    updateMany?: CollectionRessourceUpdateManyWithWhereWithoutCollectionInput | CollectionRessourceUpdateManyWithWhereWithoutCollectionInput[]
    deleteMany?: CollectionRessourceScalarWhereInput | CollectionRessourceScalarWhereInput[]
  }

  export type CollectionRessourceUncheckedUpdateManyWithoutCollectionNestedInput = {
    create?: XOR<CollectionRessourceCreateWithoutCollectionInput, CollectionRessourceUncheckedCreateWithoutCollectionInput> | CollectionRessourceCreateWithoutCollectionInput[] | CollectionRessourceUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: CollectionRessourceCreateOrConnectWithoutCollectionInput | CollectionRessourceCreateOrConnectWithoutCollectionInput[]
    upsert?: CollectionRessourceUpsertWithWhereUniqueWithoutCollectionInput | CollectionRessourceUpsertWithWhereUniqueWithoutCollectionInput[]
    createMany?: CollectionRessourceCreateManyCollectionInputEnvelope
    set?: CollectionRessourceWhereUniqueInput | CollectionRessourceWhereUniqueInput[]
    disconnect?: CollectionRessourceWhereUniqueInput | CollectionRessourceWhereUniqueInput[]
    delete?: CollectionRessourceWhereUniqueInput | CollectionRessourceWhereUniqueInput[]
    connect?: CollectionRessourceWhereUniqueInput | CollectionRessourceWhereUniqueInput[]
    update?: CollectionRessourceUpdateWithWhereUniqueWithoutCollectionInput | CollectionRessourceUpdateWithWhereUniqueWithoutCollectionInput[]
    updateMany?: CollectionRessourceUpdateManyWithWhereWithoutCollectionInput | CollectionRessourceUpdateManyWithWhereWithoutCollectionInput[]
    deleteMany?: CollectionRessourceScalarWhereInput | CollectionRessourceScalarWhereInput[]
  }

  export type CollectionCreateNestedOneWithoutRessourcesInput = {
    create?: XOR<CollectionCreateWithoutRessourcesInput, CollectionUncheckedCreateWithoutRessourcesInput>
    connectOrCreate?: CollectionCreateOrConnectWithoutRessourcesInput
    connect?: CollectionWhereUniqueInput
  }

  export type RessourceCreateNestedOneWithoutCollectionsInput = {
    create?: XOR<RessourceCreateWithoutCollectionsInput, RessourceUncheckedCreateWithoutCollectionsInput>
    connectOrCreate?: RessourceCreateOrConnectWithoutCollectionsInput
    connect?: RessourceWhereUniqueInput
  }

  export type CollectionUpdateOneRequiredWithoutRessourcesNestedInput = {
    create?: XOR<CollectionCreateWithoutRessourcesInput, CollectionUncheckedCreateWithoutRessourcesInput>
    connectOrCreate?: CollectionCreateOrConnectWithoutRessourcesInput
    upsert?: CollectionUpsertWithoutRessourcesInput
    connect?: CollectionWhereUniqueInput
    update?: XOR<XOR<CollectionUpdateToOneWithWhereWithoutRessourcesInput, CollectionUpdateWithoutRessourcesInput>, CollectionUncheckedUpdateWithoutRessourcesInput>
  }

  export type RessourceUpdateOneRequiredWithoutCollectionsNestedInput = {
    create?: XOR<RessourceCreateWithoutCollectionsInput, RessourceUncheckedCreateWithoutCollectionsInput>
    connectOrCreate?: RessourceCreateOrConnectWithoutCollectionsInput
    upsert?: RessourceUpsertWithoutCollectionsInput
    connect?: RessourceWhereUniqueInput
    update?: XOR<XOR<RessourceUpdateToOneWithWhereWithoutCollectionsInput, RessourceUpdateWithoutCollectionsInput>, RessourceUncheckedUpdateWithoutCollectionsInput>
  }

  export type RessourceCreateNestedOneWithoutPartagesInput = {
    create?: XOR<RessourceCreateWithoutPartagesInput, RessourceUncheckedCreateWithoutPartagesInput>
    connectOrCreate?: RessourceCreateOrConnectWithoutPartagesInput
    connect?: RessourceWhereUniqueInput
  }

  export type RessourceUpdateOneRequiredWithoutPartagesNestedInput = {
    create?: XOR<RessourceCreateWithoutPartagesInput, RessourceUncheckedCreateWithoutPartagesInput>
    connectOrCreate?: RessourceCreateOrConnectWithoutPartagesInput
    upsert?: RessourceUpsertWithoutPartagesInput
    connect?: RessourceWhereUniqueInput
    update?: XOR<XOR<RessourceUpdateToOneWithWhereWithoutPartagesInput, RessourceUpdateWithoutPartagesInput>, RessourceUncheckedUpdateWithoutPartagesInput>
  }

  export type EnumTypeTransactionFieldUpdateOperationsInput = {
    set?: $Enums.TypeTransaction
  }

  export type EnumStatutTransactionFieldUpdateOperationsInput = {
    set?: $Enums.StatutTransaction
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleUserFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleUser | EnumRoleUserFieldRefInput<$PrismaModel>
    in?: $Enums.RoleUser[]
    notIn?: $Enums.RoleUser[]
    not?: NestedEnumRoleUserFilter<$PrismaModel> | $Enums.RoleUser
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleUserWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleUser | EnumRoleUserFieldRefInput<$PrismaModel>
    in?: $Enums.RoleUser[]
    notIn?: $Enums.RoleUser[]
    not?: NestedEnumRoleUserWithAggregatesFilter<$PrismaModel> | $Enums.RoleUser
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleUserFilter<$PrismaModel>
    _max?: NestedEnumRoleUserFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumTypeRessourceFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeRessource | EnumTypeRessourceFieldRefInput<$PrismaModel>
    in?: $Enums.TypeRessource[]
    notIn?: $Enums.TypeRessource[]
    not?: NestedEnumTypeRessourceFilter<$PrismaModel> | $Enums.TypeRessource
  }

  export type NestedEnumNiveauAccesFilter<$PrismaModel = never> = {
    equals?: $Enums.NiveauAcces | EnumNiveauAccesFieldRefInput<$PrismaModel>
    in?: $Enums.NiveauAcces[]
    notIn?: $Enums.NiveauAcces[]
    not?: NestedEnumNiveauAccesFilter<$PrismaModel> | $Enums.NiveauAcces
  }

  export type NestedEnumTypeRessourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeRessource | EnumTypeRessourceFieldRefInput<$PrismaModel>
    in?: $Enums.TypeRessource[]
    notIn?: $Enums.TypeRessource[]
    not?: NestedEnumTypeRessourceWithAggregatesFilter<$PrismaModel> | $Enums.TypeRessource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeRessourceFilter<$PrismaModel>
    _max?: NestedEnumTypeRessourceFilter<$PrismaModel>
  }

  export type NestedEnumNiveauAccesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NiveauAcces | EnumNiveauAccesFieldRefInput<$PrismaModel>
    in?: $Enums.NiveauAcces[]
    notIn?: $Enums.NiveauAcces[]
    not?: NestedEnumNiveauAccesWithAggregatesFilter<$PrismaModel> | $Enums.NiveauAcces
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNiveauAccesFilter<$PrismaModel>
    _max?: NestedEnumNiveauAccesFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumTypeAccesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeAcces | EnumTypeAccesFieldRefInput<$PrismaModel>
    in?: $Enums.TypeAcces[]
    notIn?: $Enums.TypeAcces[]
    not?: NestedEnumTypeAccesFilter<$PrismaModel> | $Enums.TypeAcces
  }

  export type NestedEnumTypeAccesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeAcces | EnumTypeAccesFieldRefInput<$PrismaModel>
    in?: $Enums.TypeAcces[]
    notIn?: $Enums.TypeAcces[]
    not?: NestedEnumTypeAccesWithAggregatesFilter<$PrismaModel> | $Enums.TypeAcces
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeAccesFilter<$PrismaModel>
    _max?: NestedEnumTypeAccesFilter<$PrismaModel>
  }

  export type NestedEnumTypeInteractionFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeInteraction | EnumTypeInteractionFieldRefInput<$PrismaModel>
    in?: $Enums.TypeInteraction[]
    notIn?: $Enums.TypeInteraction[]
    not?: NestedEnumTypeInteractionFilter<$PrismaModel> | $Enums.TypeInteraction
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumTypeInteractionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeInteraction | EnumTypeInteractionFieldRefInput<$PrismaModel>
    in?: $Enums.TypeInteraction[]
    notIn?: $Enums.TypeInteraction[]
    not?: NestedEnumTypeInteractionWithAggregatesFilter<$PrismaModel> | $Enums.TypeInteraction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeInteractionFilter<$PrismaModel>
    _max?: NestedEnumTypeInteractionFilter<$PrismaModel>
  }

  export type NestedEnumTypeTransactionFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeTransaction | EnumTypeTransactionFieldRefInput<$PrismaModel>
    in?: $Enums.TypeTransaction[]
    notIn?: $Enums.TypeTransaction[]
    not?: NestedEnumTypeTransactionFilter<$PrismaModel> | $Enums.TypeTransaction
  }

  export type NestedEnumStatutTransactionFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutTransaction | EnumStatutTransactionFieldRefInput<$PrismaModel>
    in?: $Enums.StatutTransaction[]
    notIn?: $Enums.StatutTransaction[]
    not?: NestedEnumStatutTransactionFilter<$PrismaModel> | $Enums.StatutTransaction
  }

  export type NestedEnumTypeTransactionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeTransaction | EnumTypeTransactionFieldRefInput<$PrismaModel>
    in?: $Enums.TypeTransaction[]
    notIn?: $Enums.TypeTransaction[]
    not?: NestedEnumTypeTransactionWithAggregatesFilter<$PrismaModel> | $Enums.TypeTransaction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeTransactionFilter<$PrismaModel>
    _max?: NestedEnumTypeTransactionFilter<$PrismaModel>
  }

  export type NestedEnumStatutTransactionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutTransaction | EnumStatutTransactionFieldRefInput<$PrismaModel>
    in?: $Enums.StatutTransaction[]
    notIn?: $Enums.StatutTransaction[]
    not?: NestedEnumStatutTransactionWithAggregatesFilter<$PrismaModel> | $Enums.StatutTransaction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutTransactionFilter<$PrismaModel>
    _max?: NestedEnumStatutTransactionFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UniversiteCreateWithoutUsersInput = {
    id?: string
    nom: string
    adresse?: string | null
    ville: string
    pays: string
    siteWeb?: string | null
    dateCreation?: Date | string
    adresseBlockchain?: string | null
    estActive?: boolean
    ressources?: RessourceCreateNestedManyWithoutUniversiteInput
  }

  export type UniversiteUncheckedCreateWithoutUsersInput = {
    id?: string
    nom: string
    adresse?: string | null
    ville: string
    pays: string
    siteWeb?: string | null
    dateCreation?: Date | string
    adresseBlockchain?: string | null
    estActive?: boolean
    ressources?: RessourceUncheckedCreateNestedManyWithoutUniversiteInput
  }

  export type UniversiteCreateOrConnectWithoutUsersInput = {
    where: UniversiteWhereUniqueInput
    create: XOR<UniversiteCreateWithoutUsersInput, UniversiteUncheckedCreateWithoutUsersInput>
  }

  export type RessourceCreateWithoutAuteurInput = {
    id?: string
    titre: string
    description: string
    type: $Enums.TypeRessource
    langue?: string
    urlFichier: string
    urlFichierLocal?: string | null
    format: string
    dateCreation?: Date | string
    dateModification?: Date | string
    estPublique?: boolean
    motsCles: string
    image?: string | null
    niveauAcces?: $Enums.NiveauAcces
    datePublication?: Date | string | null
    estValide?: boolean
    estArchive?: boolean
    nomAuteurExterne?: string | null
    prenomAuteurExterne?: string | null
    affiliationAuteurExterne?: string | null
    universite: UniversiteCreateNestedOneWithoutRessourcesInput
    favoris?: FavoriCreateNestedManyWithoutRessourceInput
    commentaires?: CommentaireCreateNestedManyWithoutRessourceInput
    notations?: NotationCreateNestedManyWithoutRessourceInput
    historiques?: HistoriqueAccesCreateNestedManyWithoutRessourceInput
    collections?: CollectionRessourceCreateNestedManyWithoutRessourceInput
    partages?: PartageUniversiteCreateNestedManyWithoutRessourceInput
  }

  export type RessourceUncheckedCreateWithoutAuteurInput = {
    id?: string
    titre: string
    description: string
    type: $Enums.TypeRessource
    langue?: string
    urlFichier: string
    urlFichierLocal?: string | null
    format: string
    dateCreation?: Date | string
    dateModification?: Date | string
    estPublique?: boolean
    motsCles: string
    universiteId: string
    image?: string | null
    niveauAcces?: $Enums.NiveauAcces
    datePublication?: Date | string | null
    estValide?: boolean
    estArchive?: boolean
    nomAuteurExterne?: string | null
    prenomAuteurExterne?: string | null
    affiliationAuteurExterne?: string | null
    favoris?: FavoriUncheckedCreateNestedManyWithoutRessourceInput
    commentaires?: CommentaireUncheckedCreateNestedManyWithoutRessourceInput
    notations?: NotationUncheckedCreateNestedManyWithoutRessourceInput
    historiques?: HistoriqueAccesUncheckedCreateNestedManyWithoutRessourceInput
    collections?: CollectionRessourceUncheckedCreateNestedManyWithoutRessourceInput
    partages?: PartageUniversiteUncheckedCreateNestedManyWithoutRessourceInput
  }

  export type RessourceCreateOrConnectWithoutAuteurInput = {
    where: RessourceWhereUniqueInput
    create: XOR<RessourceCreateWithoutAuteurInput, RessourceUncheckedCreateWithoutAuteurInput>
  }

  export type RessourceCreateManyAuteurInputEnvelope = {
    data: RessourceCreateManyAuteurInput | RessourceCreateManyAuteurInput[]
    skipDuplicates?: boolean
  }

  export type FavoriCreateWithoutUserInput = {
    id?: string
    dateAjout?: Date | string
    note?: string | null
    ressource: RessourceCreateNestedOneWithoutFavorisInput
  }

  export type FavoriUncheckedCreateWithoutUserInput = {
    id?: string
    ressourceId: string
    dateAjout?: Date | string
    note?: string | null
  }

  export type FavoriCreateOrConnectWithoutUserInput = {
    where: FavoriWhereUniqueInput
    create: XOR<FavoriCreateWithoutUserInput, FavoriUncheckedCreateWithoutUserInput>
  }

  export type FavoriCreateManyUserInputEnvelope = {
    data: FavoriCreateManyUserInput | FavoriCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CommentaireCreateWithoutUserInput = {
    id?: string
    contenu: string
    dateCreation?: Date | string
    estModere?: boolean
    ressource: RessourceCreateNestedOneWithoutCommentairesInput
  }

  export type CommentaireUncheckedCreateWithoutUserInput = {
    id?: string
    ressourceId: string
    contenu: string
    dateCreation?: Date | string
    estModere?: boolean
  }

  export type CommentaireCreateOrConnectWithoutUserInput = {
    where: CommentaireWhereUniqueInput
    create: XOR<CommentaireCreateWithoutUserInput, CommentaireUncheckedCreateWithoutUserInput>
  }

  export type CommentaireCreateManyUserInputEnvelope = {
    data: CommentaireCreateManyUserInput | CommentaireCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotationCreateWithoutUserInput = {
    id?: string
    note: number
    dateNotation?: Date | string
    ressource: RessourceCreateNestedOneWithoutNotationsInput
  }

  export type NotationUncheckedCreateWithoutUserInput = {
    id?: string
    ressourceId: string
    note: number
    dateNotation?: Date | string
  }

  export type NotationCreateOrConnectWithoutUserInput = {
    where: NotationWhereUniqueInput
    create: XOR<NotationCreateWithoutUserInput, NotationUncheckedCreateWithoutUserInput>
  }

  export type NotationCreateManyUserInputEnvelope = {
    data: NotationCreateManyUserInput | NotationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type HistoriqueAccesCreateWithoutUserInput = {
    id?: string
    dateAcces?: Date | string
    typeAcces: $Enums.TypeAcces
    ipAcces: string
    universiteSrc?: string | null
    ressource: RessourceCreateNestedOneWithoutHistoriquesInput
  }

  export type HistoriqueAccesUncheckedCreateWithoutUserInput = {
    id?: string
    ressourceId: string
    dateAcces?: Date | string
    typeAcces: $Enums.TypeAcces
    ipAcces: string
    universiteSrc?: string | null
  }

  export type HistoriqueAccesCreateOrConnectWithoutUserInput = {
    where: HistoriqueAccesWhereUniqueInput
    create: XOR<HistoriqueAccesCreateWithoutUserInput, HistoriqueAccesUncheckedCreateWithoutUserInput>
  }

  export type HistoriqueAccesCreateManyUserInputEnvelope = {
    data: HistoriqueAccesCreateManyUserInput | HistoriqueAccesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CollectionCreateWithoutUserInput = {
    id?: string
    nom: string
    description?: string | null
    estPublique?: boolean
    dateCreation?: Date | string
    ressources?: CollectionRessourceCreateNestedManyWithoutCollectionInput
  }

  export type CollectionUncheckedCreateWithoutUserInput = {
    id?: string
    nom: string
    description?: string | null
    estPublique?: boolean
    dateCreation?: Date | string
    ressources?: CollectionRessourceUncheckedCreateNestedManyWithoutCollectionInput
  }

  export type CollectionCreateOrConnectWithoutUserInput = {
    where: CollectionWhereUniqueInput
    create: XOR<CollectionCreateWithoutUserInput, CollectionUncheckedCreateWithoutUserInput>
  }

  export type CollectionCreateManyUserInputEnvelope = {
    data: CollectionCreateManyUserInput | CollectionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UniversiteUpsertWithoutUsersInput = {
    update: XOR<UniversiteUpdateWithoutUsersInput, UniversiteUncheckedUpdateWithoutUsersInput>
    create: XOR<UniversiteCreateWithoutUsersInput, UniversiteUncheckedCreateWithoutUsersInput>
    where?: UniversiteWhereInput
  }

  export type UniversiteUpdateToOneWithWhereWithoutUsersInput = {
    where?: UniversiteWhereInput
    data: XOR<UniversiteUpdateWithoutUsersInput, UniversiteUncheckedUpdateWithoutUsersInput>
  }

  export type UniversiteUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    ville?: StringFieldUpdateOperationsInput | string
    pays?: StringFieldUpdateOperationsInput | string
    siteWeb?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    adresseBlockchain?: NullableStringFieldUpdateOperationsInput | string | null
    estActive?: BoolFieldUpdateOperationsInput | boolean
    ressources?: RessourceUpdateManyWithoutUniversiteNestedInput
  }

  export type UniversiteUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    ville?: StringFieldUpdateOperationsInput | string
    pays?: StringFieldUpdateOperationsInput | string
    siteWeb?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    adresseBlockchain?: NullableStringFieldUpdateOperationsInput | string | null
    estActive?: BoolFieldUpdateOperationsInput | boolean
    ressources?: RessourceUncheckedUpdateManyWithoutUniversiteNestedInput
  }

  export type RessourceUpsertWithWhereUniqueWithoutAuteurInput = {
    where: RessourceWhereUniqueInput
    update: XOR<RessourceUpdateWithoutAuteurInput, RessourceUncheckedUpdateWithoutAuteurInput>
    create: XOR<RessourceCreateWithoutAuteurInput, RessourceUncheckedCreateWithoutAuteurInput>
  }

  export type RessourceUpdateWithWhereUniqueWithoutAuteurInput = {
    where: RessourceWhereUniqueInput
    data: XOR<RessourceUpdateWithoutAuteurInput, RessourceUncheckedUpdateWithoutAuteurInput>
  }

  export type RessourceUpdateManyWithWhereWithoutAuteurInput = {
    where: RessourceScalarWhereInput
    data: XOR<RessourceUpdateManyMutationInput, RessourceUncheckedUpdateManyWithoutAuteurInput>
  }

  export type RessourceScalarWhereInput = {
    AND?: RessourceScalarWhereInput | RessourceScalarWhereInput[]
    OR?: RessourceScalarWhereInput[]
    NOT?: RessourceScalarWhereInput | RessourceScalarWhereInput[]
    id?: StringFilter<"Ressource"> | string
    titre?: StringFilter<"Ressource"> | string
    description?: StringFilter<"Ressource"> | string
    type?: EnumTypeRessourceFilter<"Ressource"> | $Enums.TypeRessource
    langue?: StringFilter<"Ressource"> | string
    urlFichier?: StringFilter<"Ressource"> | string
    urlFichierLocal?: StringNullableFilter<"Ressource"> | string | null
    format?: StringFilter<"Ressource"> | string
    dateCreation?: DateTimeFilter<"Ressource"> | Date | string
    dateModification?: DateTimeFilter<"Ressource"> | Date | string
    estPublique?: BoolFilter<"Ressource"> | boolean
    motsCles?: StringFilter<"Ressource"> | string
    auteurId?: StringNullableFilter<"Ressource"> | string | null
    universiteId?: StringFilter<"Ressource"> | string
    image?: StringNullableFilter<"Ressource"> | string | null
    niveauAcces?: EnumNiveauAccesFilter<"Ressource"> | $Enums.NiveauAcces
    datePublication?: DateTimeNullableFilter<"Ressource"> | Date | string | null
    estValide?: BoolFilter<"Ressource"> | boolean
    estArchive?: BoolFilter<"Ressource"> | boolean
    nomAuteurExterne?: StringNullableFilter<"Ressource"> | string | null
    prenomAuteurExterne?: StringNullableFilter<"Ressource"> | string | null
    affiliationAuteurExterne?: StringNullableFilter<"Ressource"> | string | null
  }

  export type FavoriUpsertWithWhereUniqueWithoutUserInput = {
    where: FavoriWhereUniqueInput
    update: XOR<FavoriUpdateWithoutUserInput, FavoriUncheckedUpdateWithoutUserInput>
    create: XOR<FavoriCreateWithoutUserInput, FavoriUncheckedCreateWithoutUserInput>
  }

  export type FavoriUpdateWithWhereUniqueWithoutUserInput = {
    where: FavoriWhereUniqueInput
    data: XOR<FavoriUpdateWithoutUserInput, FavoriUncheckedUpdateWithoutUserInput>
  }

  export type FavoriUpdateManyWithWhereWithoutUserInput = {
    where: FavoriScalarWhereInput
    data: XOR<FavoriUpdateManyMutationInput, FavoriUncheckedUpdateManyWithoutUserInput>
  }

  export type FavoriScalarWhereInput = {
    AND?: FavoriScalarWhereInput | FavoriScalarWhereInput[]
    OR?: FavoriScalarWhereInput[]
    NOT?: FavoriScalarWhereInput | FavoriScalarWhereInput[]
    id?: StringFilter<"Favori"> | string
    userId?: StringFilter<"Favori"> | string
    ressourceId?: StringFilter<"Favori"> | string
    dateAjout?: DateTimeFilter<"Favori"> | Date | string
    note?: StringNullableFilter<"Favori"> | string | null
  }

  export type CommentaireUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentaireWhereUniqueInput
    update: XOR<CommentaireUpdateWithoutUserInput, CommentaireUncheckedUpdateWithoutUserInput>
    create: XOR<CommentaireCreateWithoutUserInput, CommentaireUncheckedCreateWithoutUserInput>
  }

  export type CommentaireUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentaireWhereUniqueInput
    data: XOR<CommentaireUpdateWithoutUserInput, CommentaireUncheckedUpdateWithoutUserInput>
  }

  export type CommentaireUpdateManyWithWhereWithoutUserInput = {
    where: CommentaireScalarWhereInput
    data: XOR<CommentaireUpdateManyMutationInput, CommentaireUncheckedUpdateManyWithoutUserInput>
  }

  export type CommentaireScalarWhereInput = {
    AND?: CommentaireScalarWhereInput | CommentaireScalarWhereInput[]
    OR?: CommentaireScalarWhereInput[]
    NOT?: CommentaireScalarWhereInput | CommentaireScalarWhereInput[]
    id?: StringFilter<"Commentaire"> | string
    userId?: StringFilter<"Commentaire"> | string
    ressourceId?: StringFilter<"Commentaire"> | string
    contenu?: StringFilter<"Commentaire"> | string
    dateCreation?: DateTimeFilter<"Commentaire"> | Date | string
    estModere?: BoolFilter<"Commentaire"> | boolean
  }

  export type NotationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotationWhereUniqueInput
    update: XOR<NotationUpdateWithoutUserInput, NotationUncheckedUpdateWithoutUserInput>
    create: XOR<NotationCreateWithoutUserInput, NotationUncheckedCreateWithoutUserInput>
  }

  export type NotationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotationWhereUniqueInput
    data: XOR<NotationUpdateWithoutUserInput, NotationUncheckedUpdateWithoutUserInput>
  }

  export type NotationUpdateManyWithWhereWithoutUserInput = {
    where: NotationScalarWhereInput
    data: XOR<NotationUpdateManyMutationInput, NotationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotationScalarWhereInput = {
    AND?: NotationScalarWhereInput | NotationScalarWhereInput[]
    OR?: NotationScalarWhereInput[]
    NOT?: NotationScalarWhereInput | NotationScalarWhereInput[]
    id?: StringFilter<"Notation"> | string
    userId?: StringFilter<"Notation"> | string
    ressourceId?: StringFilter<"Notation"> | string
    note?: IntFilter<"Notation"> | number
    dateNotation?: DateTimeFilter<"Notation"> | Date | string
  }

  export type HistoriqueAccesUpsertWithWhereUniqueWithoutUserInput = {
    where: HistoriqueAccesWhereUniqueInput
    update: XOR<HistoriqueAccesUpdateWithoutUserInput, HistoriqueAccesUncheckedUpdateWithoutUserInput>
    create: XOR<HistoriqueAccesCreateWithoutUserInput, HistoriqueAccesUncheckedCreateWithoutUserInput>
  }

  export type HistoriqueAccesUpdateWithWhereUniqueWithoutUserInput = {
    where: HistoriqueAccesWhereUniqueInput
    data: XOR<HistoriqueAccesUpdateWithoutUserInput, HistoriqueAccesUncheckedUpdateWithoutUserInput>
  }

  export type HistoriqueAccesUpdateManyWithWhereWithoutUserInput = {
    where: HistoriqueAccesScalarWhereInput
    data: XOR<HistoriqueAccesUpdateManyMutationInput, HistoriqueAccesUncheckedUpdateManyWithoutUserInput>
  }

  export type HistoriqueAccesScalarWhereInput = {
    AND?: HistoriqueAccesScalarWhereInput | HistoriqueAccesScalarWhereInput[]
    OR?: HistoriqueAccesScalarWhereInput[]
    NOT?: HistoriqueAccesScalarWhereInput | HistoriqueAccesScalarWhereInput[]
    id?: StringFilter<"HistoriqueAcces"> | string
    userId?: StringFilter<"HistoriqueAcces"> | string
    ressourceId?: StringFilter<"HistoriqueAcces"> | string
    dateAcces?: DateTimeFilter<"HistoriqueAcces"> | Date | string
    typeAcces?: EnumTypeAccesFilter<"HistoriqueAcces"> | $Enums.TypeAcces
    ipAcces?: StringFilter<"HistoriqueAcces"> | string
    universiteSrc?: StringNullableFilter<"HistoriqueAcces"> | string | null
  }

  export type CollectionUpsertWithWhereUniqueWithoutUserInput = {
    where: CollectionWhereUniqueInput
    update: XOR<CollectionUpdateWithoutUserInput, CollectionUncheckedUpdateWithoutUserInput>
    create: XOR<CollectionCreateWithoutUserInput, CollectionUncheckedCreateWithoutUserInput>
  }

  export type CollectionUpdateWithWhereUniqueWithoutUserInput = {
    where: CollectionWhereUniqueInput
    data: XOR<CollectionUpdateWithoutUserInput, CollectionUncheckedUpdateWithoutUserInput>
  }

  export type CollectionUpdateManyWithWhereWithoutUserInput = {
    where: CollectionScalarWhereInput
    data: XOR<CollectionUpdateManyMutationInput, CollectionUncheckedUpdateManyWithoutUserInput>
  }

  export type CollectionScalarWhereInput = {
    AND?: CollectionScalarWhereInput | CollectionScalarWhereInput[]
    OR?: CollectionScalarWhereInput[]
    NOT?: CollectionScalarWhereInput | CollectionScalarWhereInput[]
    id?: StringFilter<"Collection"> | string
    userId?: StringFilter<"Collection"> | string
    nom?: StringFilter<"Collection"> | string
    description?: StringNullableFilter<"Collection"> | string | null
    estPublique?: BoolFilter<"Collection"> | boolean
    dateCreation?: DateTimeFilter<"Collection"> | Date | string
  }

  export type UserCreateWithoutContributionsInput = {
    id?: string
    email: string
    motDePasse: string
    nom: string
    prenom: string
    image?: string | null
    role: $Enums.RoleUser
    departement: string
    faculte: string
    specialite?: string | null
    niveauEtudes?: string | null
    dateInscription?: Date | string
    derniereConnexion?: Date | string | null
    estActif?: boolean
    universite: UniversiteCreateNestedOneWithoutUsersInput
    favoris?: FavoriCreateNestedManyWithoutUserInput
    commentaires?: CommentaireCreateNestedManyWithoutUserInput
    notations?: NotationCreateNestedManyWithoutUserInput
    historiques?: HistoriqueAccesCreateNestedManyWithoutUserInput
    collections?: CollectionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutContributionsInput = {
    id?: string
    email: string
    motDePasse: string
    nom: string
    prenom: string
    image?: string | null
    role: $Enums.RoleUser
    departement: string
    faculte: string
    specialite?: string | null
    niveauEtudes?: string | null
    dateInscription?: Date | string
    derniereConnexion?: Date | string | null
    estActif?: boolean
    universiteId: string
    favoris?: FavoriUncheckedCreateNestedManyWithoutUserInput
    commentaires?: CommentaireUncheckedCreateNestedManyWithoutUserInput
    notations?: NotationUncheckedCreateNestedManyWithoutUserInput
    historiques?: HistoriqueAccesUncheckedCreateNestedManyWithoutUserInput
    collections?: CollectionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutContributionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutContributionsInput, UserUncheckedCreateWithoutContributionsInput>
  }

  export type UniversiteCreateWithoutRessourcesInput = {
    id?: string
    nom: string
    adresse?: string | null
    ville: string
    pays: string
    siteWeb?: string | null
    dateCreation?: Date | string
    adresseBlockchain?: string | null
    estActive?: boolean
    users?: UserCreateNestedManyWithoutUniversiteInput
  }

  export type UniversiteUncheckedCreateWithoutRessourcesInput = {
    id?: string
    nom: string
    adresse?: string | null
    ville: string
    pays: string
    siteWeb?: string | null
    dateCreation?: Date | string
    adresseBlockchain?: string | null
    estActive?: boolean
    users?: UserUncheckedCreateNestedManyWithoutUniversiteInput
  }

  export type UniversiteCreateOrConnectWithoutRessourcesInput = {
    where: UniversiteWhereUniqueInput
    create: XOR<UniversiteCreateWithoutRessourcesInput, UniversiteUncheckedCreateWithoutRessourcesInput>
  }

  export type FavoriCreateWithoutRessourceInput = {
    id?: string
    dateAjout?: Date | string
    note?: string | null
    user: UserCreateNestedOneWithoutFavorisInput
  }

  export type FavoriUncheckedCreateWithoutRessourceInput = {
    id?: string
    userId: string
    dateAjout?: Date | string
    note?: string | null
  }

  export type FavoriCreateOrConnectWithoutRessourceInput = {
    where: FavoriWhereUniqueInput
    create: XOR<FavoriCreateWithoutRessourceInput, FavoriUncheckedCreateWithoutRessourceInput>
  }

  export type FavoriCreateManyRessourceInputEnvelope = {
    data: FavoriCreateManyRessourceInput | FavoriCreateManyRessourceInput[]
    skipDuplicates?: boolean
  }

  export type CommentaireCreateWithoutRessourceInput = {
    id?: string
    contenu: string
    dateCreation?: Date | string
    estModere?: boolean
    user: UserCreateNestedOneWithoutCommentairesInput
  }

  export type CommentaireUncheckedCreateWithoutRessourceInput = {
    id?: string
    userId: string
    contenu: string
    dateCreation?: Date | string
    estModere?: boolean
  }

  export type CommentaireCreateOrConnectWithoutRessourceInput = {
    where: CommentaireWhereUniqueInput
    create: XOR<CommentaireCreateWithoutRessourceInput, CommentaireUncheckedCreateWithoutRessourceInput>
  }

  export type CommentaireCreateManyRessourceInputEnvelope = {
    data: CommentaireCreateManyRessourceInput | CommentaireCreateManyRessourceInput[]
    skipDuplicates?: boolean
  }

  export type NotationCreateWithoutRessourceInput = {
    id?: string
    note: number
    dateNotation?: Date | string
    user: UserCreateNestedOneWithoutNotationsInput
  }

  export type NotationUncheckedCreateWithoutRessourceInput = {
    id?: string
    userId: string
    note: number
    dateNotation?: Date | string
  }

  export type NotationCreateOrConnectWithoutRessourceInput = {
    where: NotationWhereUniqueInput
    create: XOR<NotationCreateWithoutRessourceInput, NotationUncheckedCreateWithoutRessourceInput>
  }

  export type NotationCreateManyRessourceInputEnvelope = {
    data: NotationCreateManyRessourceInput | NotationCreateManyRessourceInput[]
    skipDuplicates?: boolean
  }

  export type HistoriqueAccesCreateWithoutRessourceInput = {
    id?: string
    dateAcces?: Date | string
    typeAcces: $Enums.TypeAcces
    ipAcces: string
    universiteSrc?: string | null
    user: UserCreateNestedOneWithoutHistoriquesInput
  }

  export type HistoriqueAccesUncheckedCreateWithoutRessourceInput = {
    id?: string
    userId: string
    dateAcces?: Date | string
    typeAcces: $Enums.TypeAcces
    ipAcces: string
    universiteSrc?: string | null
  }

  export type HistoriqueAccesCreateOrConnectWithoutRessourceInput = {
    where: HistoriqueAccesWhereUniqueInput
    create: XOR<HistoriqueAccesCreateWithoutRessourceInput, HistoriqueAccesUncheckedCreateWithoutRessourceInput>
  }

  export type HistoriqueAccesCreateManyRessourceInputEnvelope = {
    data: HistoriqueAccesCreateManyRessourceInput | HistoriqueAccesCreateManyRessourceInput[]
    skipDuplicates?: boolean
  }

  export type CollectionRessourceCreateWithoutRessourceInput = {
    id?: string
    dateAjout?: Date | string
    notes?: string | null
    collection: CollectionCreateNestedOneWithoutRessourcesInput
  }

  export type CollectionRessourceUncheckedCreateWithoutRessourceInput = {
    id?: string
    collectionId: string
    dateAjout?: Date | string
    notes?: string | null
  }

  export type CollectionRessourceCreateOrConnectWithoutRessourceInput = {
    where: CollectionRessourceWhereUniqueInput
    create: XOR<CollectionRessourceCreateWithoutRessourceInput, CollectionRessourceUncheckedCreateWithoutRessourceInput>
  }

  export type CollectionRessourceCreateManyRessourceInputEnvelope = {
    data: CollectionRessourceCreateManyRessourceInput | CollectionRessourceCreateManyRessourceInput[]
    skipDuplicates?: boolean
  }

  export type PartageUniversiteCreateWithoutRessourceInput = {
    id?: string
    universiteSource: string
    universiteDestination: string
    datePartage?: Date | string
    estActif?: boolean
  }

  export type PartageUniversiteUncheckedCreateWithoutRessourceInput = {
    id?: string
    universiteSource: string
    universiteDestination: string
    datePartage?: Date | string
    estActif?: boolean
  }

  export type PartageUniversiteCreateOrConnectWithoutRessourceInput = {
    where: PartageUniversiteWhereUniqueInput
    create: XOR<PartageUniversiteCreateWithoutRessourceInput, PartageUniversiteUncheckedCreateWithoutRessourceInput>
  }

  export type PartageUniversiteCreateManyRessourceInputEnvelope = {
    data: PartageUniversiteCreateManyRessourceInput | PartageUniversiteCreateManyRessourceInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutContributionsInput = {
    update: XOR<UserUpdateWithoutContributionsInput, UserUncheckedUpdateWithoutContributionsInput>
    create: XOR<UserCreateWithoutContributionsInput, UserUncheckedCreateWithoutContributionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutContributionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutContributionsInput, UserUncheckedUpdateWithoutContributionsInput>
  }

  export type UserUpdateWithoutContributionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleUserFieldUpdateOperationsInput | $Enums.RoleUser
    departement?: StringFieldUpdateOperationsInput | string
    faculte?: StringFieldUpdateOperationsInput | string
    specialite?: NullableStringFieldUpdateOperationsInput | string | null
    niveauEtudes?: NullableStringFieldUpdateOperationsInput | string | null
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    derniereConnexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estActif?: BoolFieldUpdateOperationsInput | boolean
    universite?: UniversiteUpdateOneRequiredWithoutUsersNestedInput
    favoris?: FavoriUpdateManyWithoutUserNestedInput
    commentaires?: CommentaireUpdateManyWithoutUserNestedInput
    notations?: NotationUpdateManyWithoutUserNestedInput
    historiques?: HistoriqueAccesUpdateManyWithoutUserNestedInput
    collections?: CollectionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutContributionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleUserFieldUpdateOperationsInput | $Enums.RoleUser
    departement?: StringFieldUpdateOperationsInput | string
    faculte?: StringFieldUpdateOperationsInput | string
    specialite?: NullableStringFieldUpdateOperationsInput | string | null
    niveauEtudes?: NullableStringFieldUpdateOperationsInput | string | null
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    derniereConnexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estActif?: BoolFieldUpdateOperationsInput | boolean
    universiteId?: StringFieldUpdateOperationsInput | string
    favoris?: FavoriUncheckedUpdateManyWithoutUserNestedInput
    commentaires?: CommentaireUncheckedUpdateManyWithoutUserNestedInput
    notations?: NotationUncheckedUpdateManyWithoutUserNestedInput
    historiques?: HistoriqueAccesUncheckedUpdateManyWithoutUserNestedInput
    collections?: CollectionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UniversiteUpsertWithoutRessourcesInput = {
    update: XOR<UniversiteUpdateWithoutRessourcesInput, UniversiteUncheckedUpdateWithoutRessourcesInput>
    create: XOR<UniversiteCreateWithoutRessourcesInput, UniversiteUncheckedCreateWithoutRessourcesInput>
    where?: UniversiteWhereInput
  }

  export type UniversiteUpdateToOneWithWhereWithoutRessourcesInput = {
    where?: UniversiteWhereInput
    data: XOR<UniversiteUpdateWithoutRessourcesInput, UniversiteUncheckedUpdateWithoutRessourcesInput>
  }

  export type UniversiteUpdateWithoutRessourcesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    ville?: StringFieldUpdateOperationsInput | string
    pays?: StringFieldUpdateOperationsInput | string
    siteWeb?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    adresseBlockchain?: NullableStringFieldUpdateOperationsInput | string | null
    estActive?: BoolFieldUpdateOperationsInput | boolean
    users?: UserUpdateManyWithoutUniversiteNestedInput
  }

  export type UniversiteUncheckedUpdateWithoutRessourcesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    ville?: StringFieldUpdateOperationsInput | string
    pays?: StringFieldUpdateOperationsInput | string
    siteWeb?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    adresseBlockchain?: NullableStringFieldUpdateOperationsInput | string | null
    estActive?: BoolFieldUpdateOperationsInput | boolean
    users?: UserUncheckedUpdateManyWithoutUniversiteNestedInput
  }

  export type FavoriUpsertWithWhereUniqueWithoutRessourceInput = {
    where: FavoriWhereUniqueInput
    update: XOR<FavoriUpdateWithoutRessourceInput, FavoriUncheckedUpdateWithoutRessourceInput>
    create: XOR<FavoriCreateWithoutRessourceInput, FavoriUncheckedCreateWithoutRessourceInput>
  }

  export type FavoriUpdateWithWhereUniqueWithoutRessourceInput = {
    where: FavoriWhereUniqueInput
    data: XOR<FavoriUpdateWithoutRessourceInput, FavoriUncheckedUpdateWithoutRessourceInput>
  }

  export type FavoriUpdateManyWithWhereWithoutRessourceInput = {
    where: FavoriScalarWhereInput
    data: XOR<FavoriUpdateManyMutationInput, FavoriUncheckedUpdateManyWithoutRessourceInput>
  }

  export type CommentaireUpsertWithWhereUniqueWithoutRessourceInput = {
    where: CommentaireWhereUniqueInput
    update: XOR<CommentaireUpdateWithoutRessourceInput, CommentaireUncheckedUpdateWithoutRessourceInput>
    create: XOR<CommentaireCreateWithoutRessourceInput, CommentaireUncheckedCreateWithoutRessourceInput>
  }

  export type CommentaireUpdateWithWhereUniqueWithoutRessourceInput = {
    where: CommentaireWhereUniqueInput
    data: XOR<CommentaireUpdateWithoutRessourceInput, CommentaireUncheckedUpdateWithoutRessourceInput>
  }

  export type CommentaireUpdateManyWithWhereWithoutRessourceInput = {
    where: CommentaireScalarWhereInput
    data: XOR<CommentaireUpdateManyMutationInput, CommentaireUncheckedUpdateManyWithoutRessourceInput>
  }

  export type NotationUpsertWithWhereUniqueWithoutRessourceInput = {
    where: NotationWhereUniqueInput
    update: XOR<NotationUpdateWithoutRessourceInput, NotationUncheckedUpdateWithoutRessourceInput>
    create: XOR<NotationCreateWithoutRessourceInput, NotationUncheckedCreateWithoutRessourceInput>
  }

  export type NotationUpdateWithWhereUniqueWithoutRessourceInput = {
    where: NotationWhereUniqueInput
    data: XOR<NotationUpdateWithoutRessourceInput, NotationUncheckedUpdateWithoutRessourceInput>
  }

  export type NotationUpdateManyWithWhereWithoutRessourceInput = {
    where: NotationScalarWhereInput
    data: XOR<NotationUpdateManyMutationInput, NotationUncheckedUpdateManyWithoutRessourceInput>
  }

  export type HistoriqueAccesUpsertWithWhereUniqueWithoutRessourceInput = {
    where: HistoriqueAccesWhereUniqueInput
    update: XOR<HistoriqueAccesUpdateWithoutRessourceInput, HistoriqueAccesUncheckedUpdateWithoutRessourceInput>
    create: XOR<HistoriqueAccesCreateWithoutRessourceInput, HistoriqueAccesUncheckedCreateWithoutRessourceInput>
  }

  export type HistoriqueAccesUpdateWithWhereUniqueWithoutRessourceInput = {
    where: HistoriqueAccesWhereUniqueInput
    data: XOR<HistoriqueAccesUpdateWithoutRessourceInput, HistoriqueAccesUncheckedUpdateWithoutRessourceInput>
  }

  export type HistoriqueAccesUpdateManyWithWhereWithoutRessourceInput = {
    where: HistoriqueAccesScalarWhereInput
    data: XOR<HistoriqueAccesUpdateManyMutationInput, HistoriqueAccesUncheckedUpdateManyWithoutRessourceInput>
  }

  export type CollectionRessourceUpsertWithWhereUniqueWithoutRessourceInput = {
    where: CollectionRessourceWhereUniqueInput
    update: XOR<CollectionRessourceUpdateWithoutRessourceInput, CollectionRessourceUncheckedUpdateWithoutRessourceInput>
    create: XOR<CollectionRessourceCreateWithoutRessourceInput, CollectionRessourceUncheckedCreateWithoutRessourceInput>
  }

  export type CollectionRessourceUpdateWithWhereUniqueWithoutRessourceInput = {
    where: CollectionRessourceWhereUniqueInput
    data: XOR<CollectionRessourceUpdateWithoutRessourceInput, CollectionRessourceUncheckedUpdateWithoutRessourceInput>
  }

  export type CollectionRessourceUpdateManyWithWhereWithoutRessourceInput = {
    where: CollectionRessourceScalarWhereInput
    data: XOR<CollectionRessourceUpdateManyMutationInput, CollectionRessourceUncheckedUpdateManyWithoutRessourceInput>
  }

  export type CollectionRessourceScalarWhereInput = {
    AND?: CollectionRessourceScalarWhereInput | CollectionRessourceScalarWhereInput[]
    OR?: CollectionRessourceScalarWhereInput[]
    NOT?: CollectionRessourceScalarWhereInput | CollectionRessourceScalarWhereInput[]
    id?: StringFilter<"CollectionRessource"> | string
    collectionId?: StringFilter<"CollectionRessource"> | string
    ressourceId?: StringFilter<"CollectionRessource"> | string
    dateAjout?: DateTimeFilter<"CollectionRessource"> | Date | string
    notes?: StringNullableFilter<"CollectionRessource"> | string | null
  }

  export type PartageUniversiteUpsertWithWhereUniqueWithoutRessourceInput = {
    where: PartageUniversiteWhereUniqueInput
    update: XOR<PartageUniversiteUpdateWithoutRessourceInput, PartageUniversiteUncheckedUpdateWithoutRessourceInput>
    create: XOR<PartageUniversiteCreateWithoutRessourceInput, PartageUniversiteUncheckedCreateWithoutRessourceInput>
  }

  export type PartageUniversiteUpdateWithWhereUniqueWithoutRessourceInput = {
    where: PartageUniversiteWhereUniqueInput
    data: XOR<PartageUniversiteUpdateWithoutRessourceInput, PartageUniversiteUncheckedUpdateWithoutRessourceInput>
  }

  export type PartageUniversiteUpdateManyWithWhereWithoutRessourceInput = {
    where: PartageUniversiteScalarWhereInput
    data: XOR<PartageUniversiteUpdateManyMutationInput, PartageUniversiteUncheckedUpdateManyWithoutRessourceInput>
  }

  export type PartageUniversiteScalarWhereInput = {
    AND?: PartageUniversiteScalarWhereInput | PartageUniversiteScalarWhereInput[]
    OR?: PartageUniversiteScalarWhereInput[]
    NOT?: PartageUniversiteScalarWhereInput | PartageUniversiteScalarWhereInput[]
    id?: StringFilter<"PartageUniversite"> | string
    ressourceId?: StringFilter<"PartageUniversite"> | string
    universiteSource?: StringFilter<"PartageUniversite"> | string
    universiteDestination?: StringFilter<"PartageUniversite"> | string
    datePartage?: DateTimeFilter<"PartageUniversite"> | Date | string
    estActif?: BoolFilter<"PartageUniversite"> | boolean
  }

  export type UserCreateWithoutFavorisInput = {
    id?: string
    email: string
    motDePasse: string
    nom: string
    prenom: string
    image?: string | null
    role: $Enums.RoleUser
    departement: string
    faculte: string
    specialite?: string | null
    niveauEtudes?: string | null
    dateInscription?: Date | string
    derniereConnexion?: Date | string | null
    estActif?: boolean
    universite: UniversiteCreateNestedOneWithoutUsersInput
    contributions?: RessourceCreateNestedManyWithoutAuteurInput
    commentaires?: CommentaireCreateNestedManyWithoutUserInput
    notations?: NotationCreateNestedManyWithoutUserInput
    historiques?: HistoriqueAccesCreateNestedManyWithoutUserInput
    collections?: CollectionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFavorisInput = {
    id?: string
    email: string
    motDePasse: string
    nom: string
    prenom: string
    image?: string | null
    role: $Enums.RoleUser
    departement: string
    faculte: string
    specialite?: string | null
    niveauEtudes?: string | null
    dateInscription?: Date | string
    derniereConnexion?: Date | string | null
    estActif?: boolean
    universiteId: string
    contributions?: RessourceUncheckedCreateNestedManyWithoutAuteurInput
    commentaires?: CommentaireUncheckedCreateNestedManyWithoutUserInput
    notations?: NotationUncheckedCreateNestedManyWithoutUserInput
    historiques?: HistoriqueAccesUncheckedCreateNestedManyWithoutUserInput
    collections?: CollectionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFavorisInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavorisInput, UserUncheckedCreateWithoutFavorisInput>
  }

  export type RessourceCreateWithoutFavorisInput = {
    id?: string
    titre: string
    description: string
    type: $Enums.TypeRessource
    langue?: string
    urlFichier: string
    urlFichierLocal?: string | null
    format: string
    dateCreation?: Date | string
    dateModification?: Date | string
    estPublique?: boolean
    motsCles: string
    image?: string | null
    niveauAcces?: $Enums.NiveauAcces
    datePublication?: Date | string | null
    estValide?: boolean
    estArchive?: boolean
    nomAuteurExterne?: string | null
    prenomAuteurExterne?: string | null
    affiliationAuteurExterne?: string | null
    auteur?: UserCreateNestedOneWithoutContributionsInput
    universite: UniversiteCreateNestedOneWithoutRessourcesInput
    commentaires?: CommentaireCreateNestedManyWithoutRessourceInput
    notations?: NotationCreateNestedManyWithoutRessourceInput
    historiques?: HistoriqueAccesCreateNestedManyWithoutRessourceInput
    collections?: CollectionRessourceCreateNestedManyWithoutRessourceInput
    partages?: PartageUniversiteCreateNestedManyWithoutRessourceInput
  }

  export type RessourceUncheckedCreateWithoutFavorisInput = {
    id?: string
    titre: string
    description: string
    type: $Enums.TypeRessource
    langue?: string
    urlFichier: string
    urlFichierLocal?: string | null
    format: string
    dateCreation?: Date | string
    dateModification?: Date | string
    estPublique?: boolean
    motsCles: string
    auteurId?: string | null
    universiteId: string
    image?: string | null
    niveauAcces?: $Enums.NiveauAcces
    datePublication?: Date | string | null
    estValide?: boolean
    estArchive?: boolean
    nomAuteurExterne?: string | null
    prenomAuteurExterne?: string | null
    affiliationAuteurExterne?: string | null
    commentaires?: CommentaireUncheckedCreateNestedManyWithoutRessourceInput
    notations?: NotationUncheckedCreateNestedManyWithoutRessourceInput
    historiques?: HistoriqueAccesUncheckedCreateNestedManyWithoutRessourceInput
    collections?: CollectionRessourceUncheckedCreateNestedManyWithoutRessourceInput
    partages?: PartageUniversiteUncheckedCreateNestedManyWithoutRessourceInput
  }

  export type RessourceCreateOrConnectWithoutFavorisInput = {
    where: RessourceWhereUniqueInput
    create: XOR<RessourceCreateWithoutFavorisInput, RessourceUncheckedCreateWithoutFavorisInput>
  }

  export type UserUpsertWithoutFavorisInput = {
    update: XOR<UserUpdateWithoutFavorisInput, UserUncheckedUpdateWithoutFavorisInput>
    create: XOR<UserCreateWithoutFavorisInput, UserUncheckedCreateWithoutFavorisInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFavorisInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFavorisInput, UserUncheckedUpdateWithoutFavorisInput>
  }

  export type UserUpdateWithoutFavorisInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleUserFieldUpdateOperationsInput | $Enums.RoleUser
    departement?: StringFieldUpdateOperationsInput | string
    faculte?: StringFieldUpdateOperationsInput | string
    specialite?: NullableStringFieldUpdateOperationsInput | string | null
    niveauEtudes?: NullableStringFieldUpdateOperationsInput | string | null
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    derniereConnexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estActif?: BoolFieldUpdateOperationsInput | boolean
    universite?: UniversiteUpdateOneRequiredWithoutUsersNestedInput
    contributions?: RessourceUpdateManyWithoutAuteurNestedInput
    commentaires?: CommentaireUpdateManyWithoutUserNestedInput
    notations?: NotationUpdateManyWithoutUserNestedInput
    historiques?: HistoriqueAccesUpdateManyWithoutUserNestedInput
    collections?: CollectionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFavorisInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleUserFieldUpdateOperationsInput | $Enums.RoleUser
    departement?: StringFieldUpdateOperationsInput | string
    faculte?: StringFieldUpdateOperationsInput | string
    specialite?: NullableStringFieldUpdateOperationsInput | string | null
    niveauEtudes?: NullableStringFieldUpdateOperationsInput | string | null
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    derniereConnexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estActif?: BoolFieldUpdateOperationsInput | boolean
    universiteId?: StringFieldUpdateOperationsInput | string
    contributions?: RessourceUncheckedUpdateManyWithoutAuteurNestedInput
    commentaires?: CommentaireUncheckedUpdateManyWithoutUserNestedInput
    notations?: NotationUncheckedUpdateManyWithoutUserNestedInput
    historiques?: HistoriqueAccesUncheckedUpdateManyWithoutUserNestedInput
    collections?: CollectionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RessourceUpsertWithoutFavorisInput = {
    update: XOR<RessourceUpdateWithoutFavorisInput, RessourceUncheckedUpdateWithoutFavorisInput>
    create: XOR<RessourceCreateWithoutFavorisInput, RessourceUncheckedCreateWithoutFavorisInput>
    where?: RessourceWhereInput
  }

  export type RessourceUpdateToOneWithWhereWithoutFavorisInput = {
    where?: RessourceWhereInput
    data: XOR<RessourceUpdateWithoutFavorisInput, RessourceUncheckedUpdateWithoutFavorisInput>
  }

  export type RessourceUpdateWithoutFavorisInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeRessourceFieldUpdateOperationsInput | $Enums.TypeRessource
    langue?: StringFieldUpdateOperationsInput | string
    urlFichier?: StringFieldUpdateOperationsInput | string
    urlFichierLocal?: NullableStringFieldUpdateOperationsInput | string | null
    format?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateModification?: DateTimeFieldUpdateOperationsInput | Date | string
    estPublique?: BoolFieldUpdateOperationsInput | boolean
    motsCles?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    niveauAcces?: EnumNiveauAccesFieldUpdateOperationsInput | $Enums.NiveauAcces
    datePublication?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estValide?: BoolFieldUpdateOperationsInput | boolean
    estArchive?: BoolFieldUpdateOperationsInput | boolean
    nomAuteurExterne?: NullableStringFieldUpdateOperationsInput | string | null
    prenomAuteurExterne?: NullableStringFieldUpdateOperationsInput | string | null
    affiliationAuteurExterne?: NullableStringFieldUpdateOperationsInput | string | null
    auteur?: UserUpdateOneWithoutContributionsNestedInput
    universite?: UniversiteUpdateOneRequiredWithoutRessourcesNestedInput
    commentaires?: CommentaireUpdateManyWithoutRessourceNestedInput
    notations?: NotationUpdateManyWithoutRessourceNestedInput
    historiques?: HistoriqueAccesUpdateManyWithoutRessourceNestedInput
    collections?: CollectionRessourceUpdateManyWithoutRessourceNestedInput
    partages?: PartageUniversiteUpdateManyWithoutRessourceNestedInput
  }

  export type RessourceUncheckedUpdateWithoutFavorisInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeRessourceFieldUpdateOperationsInput | $Enums.TypeRessource
    langue?: StringFieldUpdateOperationsInput | string
    urlFichier?: StringFieldUpdateOperationsInput | string
    urlFichierLocal?: NullableStringFieldUpdateOperationsInput | string | null
    format?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateModification?: DateTimeFieldUpdateOperationsInput | Date | string
    estPublique?: BoolFieldUpdateOperationsInput | boolean
    motsCles?: StringFieldUpdateOperationsInput | string
    auteurId?: NullableStringFieldUpdateOperationsInput | string | null
    universiteId?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    niveauAcces?: EnumNiveauAccesFieldUpdateOperationsInput | $Enums.NiveauAcces
    datePublication?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estValide?: BoolFieldUpdateOperationsInput | boolean
    estArchive?: BoolFieldUpdateOperationsInput | boolean
    nomAuteurExterne?: NullableStringFieldUpdateOperationsInput | string | null
    prenomAuteurExterne?: NullableStringFieldUpdateOperationsInput | string | null
    affiliationAuteurExterne?: NullableStringFieldUpdateOperationsInput | string | null
    commentaires?: CommentaireUncheckedUpdateManyWithoutRessourceNestedInput
    notations?: NotationUncheckedUpdateManyWithoutRessourceNestedInput
    historiques?: HistoriqueAccesUncheckedUpdateManyWithoutRessourceNestedInput
    collections?: CollectionRessourceUncheckedUpdateManyWithoutRessourceNestedInput
    partages?: PartageUniversiteUncheckedUpdateManyWithoutRessourceNestedInput
  }

  export type UserCreateWithoutUniversiteInput = {
    id?: string
    email: string
    motDePasse: string
    nom: string
    prenom: string
    image?: string | null
    role: $Enums.RoleUser
    departement: string
    faculte: string
    specialite?: string | null
    niveauEtudes?: string | null
    dateInscription?: Date | string
    derniereConnexion?: Date | string | null
    estActif?: boolean
    contributions?: RessourceCreateNestedManyWithoutAuteurInput
    favoris?: FavoriCreateNestedManyWithoutUserInput
    commentaires?: CommentaireCreateNestedManyWithoutUserInput
    notations?: NotationCreateNestedManyWithoutUserInput
    historiques?: HistoriqueAccesCreateNestedManyWithoutUserInput
    collections?: CollectionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUniversiteInput = {
    id?: string
    email: string
    motDePasse: string
    nom: string
    prenom: string
    image?: string | null
    role: $Enums.RoleUser
    departement: string
    faculte: string
    specialite?: string | null
    niveauEtudes?: string | null
    dateInscription?: Date | string
    derniereConnexion?: Date | string | null
    estActif?: boolean
    contributions?: RessourceUncheckedCreateNestedManyWithoutAuteurInput
    favoris?: FavoriUncheckedCreateNestedManyWithoutUserInput
    commentaires?: CommentaireUncheckedCreateNestedManyWithoutUserInput
    notations?: NotationUncheckedCreateNestedManyWithoutUserInput
    historiques?: HistoriqueAccesUncheckedCreateNestedManyWithoutUserInput
    collections?: CollectionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUniversiteInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUniversiteInput, UserUncheckedCreateWithoutUniversiteInput>
  }

  export type UserCreateManyUniversiteInputEnvelope = {
    data: UserCreateManyUniversiteInput | UserCreateManyUniversiteInput[]
    skipDuplicates?: boolean
  }

  export type RessourceCreateWithoutUniversiteInput = {
    id?: string
    titre: string
    description: string
    type: $Enums.TypeRessource
    langue?: string
    urlFichier: string
    urlFichierLocal?: string | null
    format: string
    dateCreation?: Date | string
    dateModification?: Date | string
    estPublique?: boolean
    motsCles: string
    image?: string | null
    niveauAcces?: $Enums.NiveauAcces
    datePublication?: Date | string | null
    estValide?: boolean
    estArchive?: boolean
    nomAuteurExterne?: string | null
    prenomAuteurExterne?: string | null
    affiliationAuteurExterne?: string | null
    auteur?: UserCreateNestedOneWithoutContributionsInput
    favoris?: FavoriCreateNestedManyWithoutRessourceInput
    commentaires?: CommentaireCreateNestedManyWithoutRessourceInput
    notations?: NotationCreateNestedManyWithoutRessourceInput
    historiques?: HistoriqueAccesCreateNestedManyWithoutRessourceInput
    collections?: CollectionRessourceCreateNestedManyWithoutRessourceInput
    partages?: PartageUniversiteCreateNestedManyWithoutRessourceInput
  }

  export type RessourceUncheckedCreateWithoutUniversiteInput = {
    id?: string
    titre: string
    description: string
    type: $Enums.TypeRessource
    langue?: string
    urlFichier: string
    urlFichierLocal?: string | null
    format: string
    dateCreation?: Date | string
    dateModification?: Date | string
    estPublique?: boolean
    motsCles: string
    auteurId?: string | null
    image?: string | null
    niveauAcces?: $Enums.NiveauAcces
    datePublication?: Date | string | null
    estValide?: boolean
    estArchive?: boolean
    nomAuteurExterne?: string | null
    prenomAuteurExterne?: string | null
    affiliationAuteurExterne?: string | null
    favoris?: FavoriUncheckedCreateNestedManyWithoutRessourceInput
    commentaires?: CommentaireUncheckedCreateNestedManyWithoutRessourceInput
    notations?: NotationUncheckedCreateNestedManyWithoutRessourceInput
    historiques?: HistoriqueAccesUncheckedCreateNestedManyWithoutRessourceInput
    collections?: CollectionRessourceUncheckedCreateNestedManyWithoutRessourceInput
    partages?: PartageUniversiteUncheckedCreateNestedManyWithoutRessourceInput
  }

  export type RessourceCreateOrConnectWithoutUniversiteInput = {
    where: RessourceWhereUniqueInput
    create: XOR<RessourceCreateWithoutUniversiteInput, RessourceUncheckedCreateWithoutUniversiteInput>
  }

  export type RessourceCreateManyUniversiteInputEnvelope = {
    data: RessourceCreateManyUniversiteInput | RessourceCreateManyUniversiteInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutUniversiteInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutUniversiteInput, UserUncheckedUpdateWithoutUniversiteInput>
    create: XOR<UserCreateWithoutUniversiteInput, UserUncheckedCreateWithoutUniversiteInput>
  }

  export type UserUpdateWithWhereUniqueWithoutUniversiteInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutUniversiteInput, UserUncheckedUpdateWithoutUniversiteInput>
  }

  export type UserUpdateManyWithWhereWithoutUniversiteInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutUniversiteInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    motDePasse?: StringFilter<"User"> | string
    nom?: StringFilter<"User"> | string
    prenom?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleUserFilter<"User"> | $Enums.RoleUser
    departement?: StringFilter<"User"> | string
    faculte?: StringFilter<"User"> | string
    specialite?: StringNullableFilter<"User"> | string | null
    niveauEtudes?: StringNullableFilter<"User"> | string | null
    dateInscription?: DateTimeFilter<"User"> | Date | string
    derniereConnexion?: DateTimeNullableFilter<"User"> | Date | string | null
    estActif?: BoolFilter<"User"> | boolean
    universiteId?: StringFilter<"User"> | string
  }

  export type RessourceUpsertWithWhereUniqueWithoutUniversiteInput = {
    where: RessourceWhereUniqueInput
    update: XOR<RessourceUpdateWithoutUniversiteInput, RessourceUncheckedUpdateWithoutUniversiteInput>
    create: XOR<RessourceCreateWithoutUniversiteInput, RessourceUncheckedCreateWithoutUniversiteInput>
  }

  export type RessourceUpdateWithWhereUniqueWithoutUniversiteInput = {
    where: RessourceWhereUniqueInput
    data: XOR<RessourceUpdateWithoutUniversiteInput, RessourceUncheckedUpdateWithoutUniversiteInput>
  }

  export type RessourceUpdateManyWithWhereWithoutUniversiteInput = {
    where: RessourceScalarWhereInput
    data: XOR<RessourceUpdateManyMutationInput, RessourceUncheckedUpdateManyWithoutUniversiteInput>
  }

  export type UserCreateWithoutCommentairesInput = {
    id?: string
    email: string
    motDePasse: string
    nom: string
    prenom: string
    image?: string | null
    role: $Enums.RoleUser
    departement: string
    faculte: string
    specialite?: string | null
    niveauEtudes?: string | null
    dateInscription?: Date | string
    derniereConnexion?: Date | string | null
    estActif?: boolean
    universite: UniversiteCreateNestedOneWithoutUsersInput
    contributions?: RessourceCreateNestedManyWithoutAuteurInput
    favoris?: FavoriCreateNestedManyWithoutUserInput
    notations?: NotationCreateNestedManyWithoutUserInput
    historiques?: HistoriqueAccesCreateNestedManyWithoutUserInput
    collections?: CollectionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommentairesInput = {
    id?: string
    email: string
    motDePasse: string
    nom: string
    prenom: string
    image?: string | null
    role: $Enums.RoleUser
    departement: string
    faculte: string
    specialite?: string | null
    niveauEtudes?: string | null
    dateInscription?: Date | string
    derniereConnexion?: Date | string | null
    estActif?: boolean
    universiteId: string
    contributions?: RessourceUncheckedCreateNestedManyWithoutAuteurInput
    favoris?: FavoriUncheckedCreateNestedManyWithoutUserInput
    notations?: NotationUncheckedCreateNestedManyWithoutUserInput
    historiques?: HistoriqueAccesUncheckedCreateNestedManyWithoutUserInput
    collections?: CollectionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommentairesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentairesInput, UserUncheckedCreateWithoutCommentairesInput>
  }

  export type RessourceCreateWithoutCommentairesInput = {
    id?: string
    titre: string
    description: string
    type: $Enums.TypeRessource
    langue?: string
    urlFichier: string
    urlFichierLocal?: string | null
    format: string
    dateCreation?: Date | string
    dateModification?: Date | string
    estPublique?: boolean
    motsCles: string
    image?: string | null
    niveauAcces?: $Enums.NiveauAcces
    datePublication?: Date | string | null
    estValide?: boolean
    estArchive?: boolean
    nomAuteurExterne?: string | null
    prenomAuteurExterne?: string | null
    affiliationAuteurExterne?: string | null
    auteur?: UserCreateNestedOneWithoutContributionsInput
    universite: UniversiteCreateNestedOneWithoutRessourcesInput
    favoris?: FavoriCreateNestedManyWithoutRessourceInput
    notations?: NotationCreateNestedManyWithoutRessourceInput
    historiques?: HistoriqueAccesCreateNestedManyWithoutRessourceInput
    collections?: CollectionRessourceCreateNestedManyWithoutRessourceInput
    partages?: PartageUniversiteCreateNestedManyWithoutRessourceInput
  }

  export type RessourceUncheckedCreateWithoutCommentairesInput = {
    id?: string
    titre: string
    description: string
    type: $Enums.TypeRessource
    langue?: string
    urlFichier: string
    urlFichierLocal?: string | null
    format: string
    dateCreation?: Date | string
    dateModification?: Date | string
    estPublique?: boolean
    motsCles: string
    auteurId?: string | null
    universiteId: string
    image?: string | null
    niveauAcces?: $Enums.NiveauAcces
    datePublication?: Date | string | null
    estValide?: boolean
    estArchive?: boolean
    nomAuteurExterne?: string | null
    prenomAuteurExterne?: string | null
    affiliationAuteurExterne?: string | null
    favoris?: FavoriUncheckedCreateNestedManyWithoutRessourceInput
    notations?: NotationUncheckedCreateNestedManyWithoutRessourceInput
    historiques?: HistoriqueAccesUncheckedCreateNestedManyWithoutRessourceInput
    collections?: CollectionRessourceUncheckedCreateNestedManyWithoutRessourceInput
    partages?: PartageUniversiteUncheckedCreateNestedManyWithoutRessourceInput
  }

  export type RessourceCreateOrConnectWithoutCommentairesInput = {
    where: RessourceWhereUniqueInput
    create: XOR<RessourceCreateWithoutCommentairesInput, RessourceUncheckedCreateWithoutCommentairesInput>
  }

  export type UserUpsertWithoutCommentairesInput = {
    update: XOR<UserUpdateWithoutCommentairesInput, UserUncheckedUpdateWithoutCommentairesInput>
    create: XOR<UserCreateWithoutCommentairesInput, UserUncheckedCreateWithoutCommentairesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentairesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentairesInput, UserUncheckedUpdateWithoutCommentairesInput>
  }

  export type UserUpdateWithoutCommentairesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleUserFieldUpdateOperationsInput | $Enums.RoleUser
    departement?: StringFieldUpdateOperationsInput | string
    faculte?: StringFieldUpdateOperationsInput | string
    specialite?: NullableStringFieldUpdateOperationsInput | string | null
    niveauEtudes?: NullableStringFieldUpdateOperationsInput | string | null
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    derniereConnexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estActif?: BoolFieldUpdateOperationsInput | boolean
    universite?: UniversiteUpdateOneRequiredWithoutUsersNestedInput
    contributions?: RessourceUpdateManyWithoutAuteurNestedInput
    favoris?: FavoriUpdateManyWithoutUserNestedInput
    notations?: NotationUpdateManyWithoutUserNestedInput
    historiques?: HistoriqueAccesUpdateManyWithoutUserNestedInput
    collections?: CollectionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentairesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleUserFieldUpdateOperationsInput | $Enums.RoleUser
    departement?: StringFieldUpdateOperationsInput | string
    faculte?: StringFieldUpdateOperationsInput | string
    specialite?: NullableStringFieldUpdateOperationsInput | string | null
    niveauEtudes?: NullableStringFieldUpdateOperationsInput | string | null
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    derniereConnexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estActif?: BoolFieldUpdateOperationsInput | boolean
    universiteId?: StringFieldUpdateOperationsInput | string
    contributions?: RessourceUncheckedUpdateManyWithoutAuteurNestedInput
    favoris?: FavoriUncheckedUpdateManyWithoutUserNestedInput
    notations?: NotationUncheckedUpdateManyWithoutUserNestedInput
    historiques?: HistoriqueAccesUncheckedUpdateManyWithoutUserNestedInput
    collections?: CollectionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RessourceUpsertWithoutCommentairesInput = {
    update: XOR<RessourceUpdateWithoutCommentairesInput, RessourceUncheckedUpdateWithoutCommentairesInput>
    create: XOR<RessourceCreateWithoutCommentairesInput, RessourceUncheckedCreateWithoutCommentairesInput>
    where?: RessourceWhereInput
  }

  export type RessourceUpdateToOneWithWhereWithoutCommentairesInput = {
    where?: RessourceWhereInput
    data: XOR<RessourceUpdateWithoutCommentairesInput, RessourceUncheckedUpdateWithoutCommentairesInput>
  }

  export type RessourceUpdateWithoutCommentairesInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeRessourceFieldUpdateOperationsInput | $Enums.TypeRessource
    langue?: StringFieldUpdateOperationsInput | string
    urlFichier?: StringFieldUpdateOperationsInput | string
    urlFichierLocal?: NullableStringFieldUpdateOperationsInput | string | null
    format?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateModification?: DateTimeFieldUpdateOperationsInput | Date | string
    estPublique?: BoolFieldUpdateOperationsInput | boolean
    motsCles?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    niveauAcces?: EnumNiveauAccesFieldUpdateOperationsInput | $Enums.NiveauAcces
    datePublication?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estValide?: BoolFieldUpdateOperationsInput | boolean
    estArchive?: BoolFieldUpdateOperationsInput | boolean
    nomAuteurExterne?: NullableStringFieldUpdateOperationsInput | string | null
    prenomAuteurExterne?: NullableStringFieldUpdateOperationsInput | string | null
    affiliationAuteurExterne?: NullableStringFieldUpdateOperationsInput | string | null
    auteur?: UserUpdateOneWithoutContributionsNestedInput
    universite?: UniversiteUpdateOneRequiredWithoutRessourcesNestedInput
    favoris?: FavoriUpdateManyWithoutRessourceNestedInput
    notations?: NotationUpdateManyWithoutRessourceNestedInput
    historiques?: HistoriqueAccesUpdateManyWithoutRessourceNestedInput
    collections?: CollectionRessourceUpdateManyWithoutRessourceNestedInput
    partages?: PartageUniversiteUpdateManyWithoutRessourceNestedInput
  }

  export type RessourceUncheckedUpdateWithoutCommentairesInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeRessourceFieldUpdateOperationsInput | $Enums.TypeRessource
    langue?: StringFieldUpdateOperationsInput | string
    urlFichier?: StringFieldUpdateOperationsInput | string
    urlFichierLocal?: NullableStringFieldUpdateOperationsInput | string | null
    format?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateModification?: DateTimeFieldUpdateOperationsInput | Date | string
    estPublique?: BoolFieldUpdateOperationsInput | boolean
    motsCles?: StringFieldUpdateOperationsInput | string
    auteurId?: NullableStringFieldUpdateOperationsInput | string | null
    universiteId?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    niveauAcces?: EnumNiveauAccesFieldUpdateOperationsInput | $Enums.NiveauAcces
    datePublication?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estValide?: BoolFieldUpdateOperationsInput | boolean
    estArchive?: BoolFieldUpdateOperationsInput | boolean
    nomAuteurExterne?: NullableStringFieldUpdateOperationsInput | string | null
    prenomAuteurExterne?: NullableStringFieldUpdateOperationsInput | string | null
    affiliationAuteurExterne?: NullableStringFieldUpdateOperationsInput | string | null
    favoris?: FavoriUncheckedUpdateManyWithoutRessourceNestedInput
    notations?: NotationUncheckedUpdateManyWithoutRessourceNestedInput
    historiques?: HistoriqueAccesUncheckedUpdateManyWithoutRessourceNestedInput
    collections?: CollectionRessourceUncheckedUpdateManyWithoutRessourceNestedInput
    partages?: PartageUniversiteUncheckedUpdateManyWithoutRessourceNestedInput
  }

  export type UserCreateWithoutNotationsInput = {
    id?: string
    email: string
    motDePasse: string
    nom: string
    prenom: string
    image?: string | null
    role: $Enums.RoleUser
    departement: string
    faculte: string
    specialite?: string | null
    niveauEtudes?: string | null
    dateInscription?: Date | string
    derniereConnexion?: Date | string | null
    estActif?: boolean
    universite: UniversiteCreateNestedOneWithoutUsersInput
    contributions?: RessourceCreateNestedManyWithoutAuteurInput
    favoris?: FavoriCreateNestedManyWithoutUserInput
    commentaires?: CommentaireCreateNestedManyWithoutUserInput
    historiques?: HistoriqueAccesCreateNestedManyWithoutUserInput
    collections?: CollectionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotationsInput = {
    id?: string
    email: string
    motDePasse: string
    nom: string
    prenom: string
    image?: string | null
    role: $Enums.RoleUser
    departement: string
    faculte: string
    specialite?: string | null
    niveauEtudes?: string | null
    dateInscription?: Date | string
    derniereConnexion?: Date | string | null
    estActif?: boolean
    universiteId: string
    contributions?: RessourceUncheckedCreateNestedManyWithoutAuteurInput
    favoris?: FavoriUncheckedCreateNestedManyWithoutUserInput
    commentaires?: CommentaireUncheckedCreateNestedManyWithoutUserInput
    historiques?: HistoriqueAccesUncheckedCreateNestedManyWithoutUserInput
    collections?: CollectionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotationsInput, UserUncheckedCreateWithoutNotationsInput>
  }

  export type RessourceCreateWithoutNotationsInput = {
    id?: string
    titre: string
    description: string
    type: $Enums.TypeRessource
    langue?: string
    urlFichier: string
    urlFichierLocal?: string | null
    format: string
    dateCreation?: Date | string
    dateModification?: Date | string
    estPublique?: boolean
    motsCles: string
    image?: string | null
    niveauAcces?: $Enums.NiveauAcces
    datePublication?: Date | string | null
    estValide?: boolean
    estArchive?: boolean
    nomAuteurExterne?: string | null
    prenomAuteurExterne?: string | null
    affiliationAuteurExterne?: string | null
    auteur?: UserCreateNestedOneWithoutContributionsInput
    universite: UniversiteCreateNestedOneWithoutRessourcesInput
    favoris?: FavoriCreateNestedManyWithoutRessourceInput
    commentaires?: CommentaireCreateNestedManyWithoutRessourceInput
    historiques?: HistoriqueAccesCreateNestedManyWithoutRessourceInput
    collections?: CollectionRessourceCreateNestedManyWithoutRessourceInput
    partages?: PartageUniversiteCreateNestedManyWithoutRessourceInput
  }

  export type RessourceUncheckedCreateWithoutNotationsInput = {
    id?: string
    titre: string
    description: string
    type: $Enums.TypeRessource
    langue?: string
    urlFichier: string
    urlFichierLocal?: string | null
    format: string
    dateCreation?: Date | string
    dateModification?: Date | string
    estPublique?: boolean
    motsCles: string
    auteurId?: string | null
    universiteId: string
    image?: string | null
    niveauAcces?: $Enums.NiveauAcces
    datePublication?: Date | string | null
    estValide?: boolean
    estArchive?: boolean
    nomAuteurExterne?: string | null
    prenomAuteurExterne?: string | null
    affiliationAuteurExterne?: string | null
    favoris?: FavoriUncheckedCreateNestedManyWithoutRessourceInput
    commentaires?: CommentaireUncheckedCreateNestedManyWithoutRessourceInput
    historiques?: HistoriqueAccesUncheckedCreateNestedManyWithoutRessourceInput
    collections?: CollectionRessourceUncheckedCreateNestedManyWithoutRessourceInput
    partages?: PartageUniversiteUncheckedCreateNestedManyWithoutRessourceInput
  }

  export type RessourceCreateOrConnectWithoutNotationsInput = {
    where: RessourceWhereUniqueInput
    create: XOR<RessourceCreateWithoutNotationsInput, RessourceUncheckedCreateWithoutNotationsInput>
  }

  export type UserUpsertWithoutNotationsInput = {
    update: XOR<UserUpdateWithoutNotationsInput, UserUncheckedUpdateWithoutNotationsInput>
    create: XOR<UserCreateWithoutNotationsInput, UserUncheckedCreateWithoutNotationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotationsInput, UserUncheckedUpdateWithoutNotationsInput>
  }

  export type UserUpdateWithoutNotationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleUserFieldUpdateOperationsInput | $Enums.RoleUser
    departement?: StringFieldUpdateOperationsInput | string
    faculte?: StringFieldUpdateOperationsInput | string
    specialite?: NullableStringFieldUpdateOperationsInput | string | null
    niveauEtudes?: NullableStringFieldUpdateOperationsInput | string | null
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    derniereConnexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estActif?: BoolFieldUpdateOperationsInput | boolean
    universite?: UniversiteUpdateOneRequiredWithoutUsersNestedInput
    contributions?: RessourceUpdateManyWithoutAuteurNestedInput
    favoris?: FavoriUpdateManyWithoutUserNestedInput
    commentaires?: CommentaireUpdateManyWithoutUserNestedInput
    historiques?: HistoriqueAccesUpdateManyWithoutUserNestedInput
    collections?: CollectionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleUserFieldUpdateOperationsInput | $Enums.RoleUser
    departement?: StringFieldUpdateOperationsInput | string
    faculte?: StringFieldUpdateOperationsInput | string
    specialite?: NullableStringFieldUpdateOperationsInput | string | null
    niveauEtudes?: NullableStringFieldUpdateOperationsInput | string | null
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    derniereConnexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estActif?: BoolFieldUpdateOperationsInput | boolean
    universiteId?: StringFieldUpdateOperationsInput | string
    contributions?: RessourceUncheckedUpdateManyWithoutAuteurNestedInput
    favoris?: FavoriUncheckedUpdateManyWithoutUserNestedInput
    commentaires?: CommentaireUncheckedUpdateManyWithoutUserNestedInput
    historiques?: HistoriqueAccesUncheckedUpdateManyWithoutUserNestedInput
    collections?: CollectionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RessourceUpsertWithoutNotationsInput = {
    update: XOR<RessourceUpdateWithoutNotationsInput, RessourceUncheckedUpdateWithoutNotationsInput>
    create: XOR<RessourceCreateWithoutNotationsInput, RessourceUncheckedCreateWithoutNotationsInput>
    where?: RessourceWhereInput
  }

  export type RessourceUpdateToOneWithWhereWithoutNotationsInput = {
    where?: RessourceWhereInput
    data: XOR<RessourceUpdateWithoutNotationsInput, RessourceUncheckedUpdateWithoutNotationsInput>
  }

  export type RessourceUpdateWithoutNotationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeRessourceFieldUpdateOperationsInput | $Enums.TypeRessource
    langue?: StringFieldUpdateOperationsInput | string
    urlFichier?: StringFieldUpdateOperationsInput | string
    urlFichierLocal?: NullableStringFieldUpdateOperationsInput | string | null
    format?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateModification?: DateTimeFieldUpdateOperationsInput | Date | string
    estPublique?: BoolFieldUpdateOperationsInput | boolean
    motsCles?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    niveauAcces?: EnumNiveauAccesFieldUpdateOperationsInput | $Enums.NiveauAcces
    datePublication?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estValide?: BoolFieldUpdateOperationsInput | boolean
    estArchive?: BoolFieldUpdateOperationsInput | boolean
    nomAuteurExterne?: NullableStringFieldUpdateOperationsInput | string | null
    prenomAuteurExterne?: NullableStringFieldUpdateOperationsInput | string | null
    affiliationAuteurExterne?: NullableStringFieldUpdateOperationsInput | string | null
    auteur?: UserUpdateOneWithoutContributionsNestedInput
    universite?: UniversiteUpdateOneRequiredWithoutRessourcesNestedInput
    favoris?: FavoriUpdateManyWithoutRessourceNestedInput
    commentaires?: CommentaireUpdateManyWithoutRessourceNestedInput
    historiques?: HistoriqueAccesUpdateManyWithoutRessourceNestedInput
    collections?: CollectionRessourceUpdateManyWithoutRessourceNestedInput
    partages?: PartageUniversiteUpdateManyWithoutRessourceNestedInput
  }

  export type RessourceUncheckedUpdateWithoutNotationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeRessourceFieldUpdateOperationsInput | $Enums.TypeRessource
    langue?: StringFieldUpdateOperationsInput | string
    urlFichier?: StringFieldUpdateOperationsInput | string
    urlFichierLocal?: NullableStringFieldUpdateOperationsInput | string | null
    format?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateModification?: DateTimeFieldUpdateOperationsInput | Date | string
    estPublique?: BoolFieldUpdateOperationsInput | boolean
    motsCles?: StringFieldUpdateOperationsInput | string
    auteurId?: NullableStringFieldUpdateOperationsInput | string | null
    universiteId?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    niveauAcces?: EnumNiveauAccesFieldUpdateOperationsInput | $Enums.NiveauAcces
    datePublication?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estValide?: BoolFieldUpdateOperationsInput | boolean
    estArchive?: BoolFieldUpdateOperationsInput | boolean
    nomAuteurExterne?: NullableStringFieldUpdateOperationsInput | string | null
    prenomAuteurExterne?: NullableStringFieldUpdateOperationsInput | string | null
    affiliationAuteurExterne?: NullableStringFieldUpdateOperationsInput | string | null
    favoris?: FavoriUncheckedUpdateManyWithoutRessourceNestedInput
    commentaires?: CommentaireUncheckedUpdateManyWithoutRessourceNestedInput
    historiques?: HistoriqueAccesUncheckedUpdateManyWithoutRessourceNestedInput
    collections?: CollectionRessourceUncheckedUpdateManyWithoutRessourceNestedInput
    partages?: PartageUniversiteUncheckedUpdateManyWithoutRessourceNestedInput
  }

  export type UserCreateWithoutHistoriquesInput = {
    id?: string
    email: string
    motDePasse: string
    nom: string
    prenom: string
    image?: string | null
    role: $Enums.RoleUser
    departement: string
    faculte: string
    specialite?: string | null
    niveauEtudes?: string | null
    dateInscription?: Date | string
    derniereConnexion?: Date | string | null
    estActif?: boolean
    universite: UniversiteCreateNestedOneWithoutUsersInput
    contributions?: RessourceCreateNestedManyWithoutAuteurInput
    favoris?: FavoriCreateNestedManyWithoutUserInput
    commentaires?: CommentaireCreateNestedManyWithoutUserInput
    notations?: NotationCreateNestedManyWithoutUserInput
    collections?: CollectionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutHistoriquesInput = {
    id?: string
    email: string
    motDePasse: string
    nom: string
    prenom: string
    image?: string | null
    role: $Enums.RoleUser
    departement: string
    faculte: string
    specialite?: string | null
    niveauEtudes?: string | null
    dateInscription?: Date | string
    derniereConnexion?: Date | string | null
    estActif?: boolean
    universiteId: string
    contributions?: RessourceUncheckedCreateNestedManyWithoutAuteurInput
    favoris?: FavoriUncheckedCreateNestedManyWithoutUserInput
    commentaires?: CommentaireUncheckedCreateNestedManyWithoutUserInput
    notations?: NotationUncheckedCreateNestedManyWithoutUserInput
    collections?: CollectionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutHistoriquesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHistoriquesInput, UserUncheckedCreateWithoutHistoriquesInput>
  }

  export type RessourceCreateWithoutHistoriquesInput = {
    id?: string
    titre: string
    description: string
    type: $Enums.TypeRessource
    langue?: string
    urlFichier: string
    urlFichierLocal?: string | null
    format: string
    dateCreation?: Date | string
    dateModification?: Date | string
    estPublique?: boolean
    motsCles: string
    image?: string | null
    niveauAcces?: $Enums.NiveauAcces
    datePublication?: Date | string | null
    estValide?: boolean
    estArchive?: boolean
    nomAuteurExterne?: string | null
    prenomAuteurExterne?: string | null
    affiliationAuteurExterne?: string | null
    auteur?: UserCreateNestedOneWithoutContributionsInput
    universite: UniversiteCreateNestedOneWithoutRessourcesInput
    favoris?: FavoriCreateNestedManyWithoutRessourceInput
    commentaires?: CommentaireCreateNestedManyWithoutRessourceInput
    notations?: NotationCreateNestedManyWithoutRessourceInput
    collections?: CollectionRessourceCreateNestedManyWithoutRessourceInput
    partages?: PartageUniversiteCreateNestedManyWithoutRessourceInput
  }

  export type RessourceUncheckedCreateWithoutHistoriquesInput = {
    id?: string
    titre: string
    description: string
    type: $Enums.TypeRessource
    langue?: string
    urlFichier: string
    urlFichierLocal?: string | null
    format: string
    dateCreation?: Date | string
    dateModification?: Date | string
    estPublique?: boolean
    motsCles: string
    auteurId?: string | null
    universiteId: string
    image?: string | null
    niveauAcces?: $Enums.NiveauAcces
    datePublication?: Date | string | null
    estValide?: boolean
    estArchive?: boolean
    nomAuteurExterne?: string | null
    prenomAuteurExterne?: string | null
    affiliationAuteurExterne?: string | null
    favoris?: FavoriUncheckedCreateNestedManyWithoutRessourceInput
    commentaires?: CommentaireUncheckedCreateNestedManyWithoutRessourceInput
    notations?: NotationUncheckedCreateNestedManyWithoutRessourceInput
    collections?: CollectionRessourceUncheckedCreateNestedManyWithoutRessourceInput
    partages?: PartageUniversiteUncheckedCreateNestedManyWithoutRessourceInput
  }

  export type RessourceCreateOrConnectWithoutHistoriquesInput = {
    where: RessourceWhereUniqueInput
    create: XOR<RessourceCreateWithoutHistoriquesInput, RessourceUncheckedCreateWithoutHistoriquesInput>
  }

  export type UserUpsertWithoutHistoriquesInput = {
    update: XOR<UserUpdateWithoutHistoriquesInput, UserUncheckedUpdateWithoutHistoriquesInput>
    create: XOR<UserCreateWithoutHistoriquesInput, UserUncheckedCreateWithoutHistoriquesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHistoriquesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHistoriquesInput, UserUncheckedUpdateWithoutHistoriquesInput>
  }

  export type UserUpdateWithoutHistoriquesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleUserFieldUpdateOperationsInput | $Enums.RoleUser
    departement?: StringFieldUpdateOperationsInput | string
    faculte?: StringFieldUpdateOperationsInput | string
    specialite?: NullableStringFieldUpdateOperationsInput | string | null
    niveauEtudes?: NullableStringFieldUpdateOperationsInput | string | null
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    derniereConnexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estActif?: BoolFieldUpdateOperationsInput | boolean
    universite?: UniversiteUpdateOneRequiredWithoutUsersNestedInput
    contributions?: RessourceUpdateManyWithoutAuteurNestedInput
    favoris?: FavoriUpdateManyWithoutUserNestedInput
    commentaires?: CommentaireUpdateManyWithoutUserNestedInput
    notations?: NotationUpdateManyWithoutUserNestedInput
    collections?: CollectionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutHistoriquesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleUserFieldUpdateOperationsInput | $Enums.RoleUser
    departement?: StringFieldUpdateOperationsInput | string
    faculte?: StringFieldUpdateOperationsInput | string
    specialite?: NullableStringFieldUpdateOperationsInput | string | null
    niveauEtudes?: NullableStringFieldUpdateOperationsInput | string | null
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    derniereConnexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estActif?: BoolFieldUpdateOperationsInput | boolean
    universiteId?: StringFieldUpdateOperationsInput | string
    contributions?: RessourceUncheckedUpdateManyWithoutAuteurNestedInput
    favoris?: FavoriUncheckedUpdateManyWithoutUserNestedInput
    commentaires?: CommentaireUncheckedUpdateManyWithoutUserNestedInput
    notations?: NotationUncheckedUpdateManyWithoutUserNestedInput
    collections?: CollectionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RessourceUpsertWithoutHistoriquesInput = {
    update: XOR<RessourceUpdateWithoutHistoriquesInput, RessourceUncheckedUpdateWithoutHistoriquesInput>
    create: XOR<RessourceCreateWithoutHistoriquesInput, RessourceUncheckedCreateWithoutHistoriquesInput>
    where?: RessourceWhereInput
  }

  export type RessourceUpdateToOneWithWhereWithoutHistoriquesInput = {
    where?: RessourceWhereInput
    data: XOR<RessourceUpdateWithoutHistoriquesInput, RessourceUncheckedUpdateWithoutHistoriquesInput>
  }

  export type RessourceUpdateWithoutHistoriquesInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeRessourceFieldUpdateOperationsInput | $Enums.TypeRessource
    langue?: StringFieldUpdateOperationsInput | string
    urlFichier?: StringFieldUpdateOperationsInput | string
    urlFichierLocal?: NullableStringFieldUpdateOperationsInput | string | null
    format?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateModification?: DateTimeFieldUpdateOperationsInput | Date | string
    estPublique?: BoolFieldUpdateOperationsInput | boolean
    motsCles?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    niveauAcces?: EnumNiveauAccesFieldUpdateOperationsInput | $Enums.NiveauAcces
    datePublication?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estValide?: BoolFieldUpdateOperationsInput | boolean
    estArchive?: BoolFieldUpdateOperationsInput | boolean
    nomAuteurExterne?: NullableStringFieldUpdateOperationsInput | string | null
    prenomAuteurExterne?: NullableStringFieldUpdateOperationsInput | string | null
    affiliationAuteurExterne?: NullableStringFieldUpdateOperationsInput | string | null
    auteur?: UserUpdateOneWithoutContributionsNestedInput
    universite?: UniversiteUpdateOneRequiredWithoutRessourcesNestedInput
    favoris?: FavoriUpdateManyWithoutRessourceNestedInput
    commentaires?: CommentaireUpdateManyWithoutRessourceNestedInput
    notations?: NotationUpdateManyWithoutRessourceNestedInput
    collections?: CollectionRessourceUpdateManyWithoutRessourceNestedInput
    partages?: PartageUniversiteUpdateManyWithoutRessourceNestedInput
  }

  export type RessourceUncheckedUpdateWithoutHistoriquesInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeRessourceFieldUpdateOperationsInput | $Enums.TypeRessource
    langue?: StringFieldUpdateOperationsInput | string
    urlFichier?: StringFieldUpdateOperationsInput | string
    urlFichierLocal?: NullableStringFieldUpdateOperationsInput | string | null
    format?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateModification?: DateTimeFieldUpdateOperationsInput | Date | string
    estPublique?: BoolFieldUpdateOperationsInput | boolean
    motsCles?: StringFieldUpdateOperationsInput | string
    auteurId?: NullableStringFieldUpdateOperationsInput | string | null
    universiteId?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    niveauAcces?: EnumNiveauAccesFieldUpdateOperationsInput | $Enums.NiveauAcces
    datePublication?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estValide?: BoolFieldUpdateOperationsInput | boolean
    estArchive?: BoolFieldUpdateOperationsInput | boolean
    nomAuteurExterne?: NullableStringFieldUpdateOperationsInput | string | null
    prenomAuteurExterne?: NullableStringFieldUpdateOperationsInput | string | null
    affiliationAuteurExterne?: NullableStringFieldUpdateOperationsInput | string | null
    favoris?: FavoriUncheckedUpdateManyWithoutRessourceNestedInput
    commentaires?: CommentaireUncheckedUpdateManyWithoutRessourceNestedInput
    notations?: NotationUncheckedUpdateManyWithoutRessourceNestedInput
    collections?: CollectionRessourceUncheckedUpdateManyWithoutRessourceNestedInput
    partages?: PartageUniversiteUncheckedUpdateManyWithoutRessourceNestedInput
  }

  export type UserCreateWithoutCollectionsInput = {
    id?: string
    email: string
    motDePasse: string
    nom: string
    prenom: string
    image?: string | null
    role: $Enums.RoleUser
    departement: string
    faculte: string
    specialite?: string | null
    niveauEtudes?: string | null
    dateInscription?: Date | string
    derniereConnexion?: Date | string | null
    estActif?: boolean
    universite: UniversiteCreateNestedOneWithoutUsersInput
    contributions?: RessourceCreateNestedManyWithoutAuteurInput
    favoris?: FavoriCreateNestedManyWithoutUserInput
    commentaires?: CommentaireCreateNestedManyWithoutUserInput
    notations?: NotationCreateNestedManyWithoutUserInput
    historiques?: HistoriqueAccesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCollectionsInput = {
    id?: string
    email: string
    motDePasse: string
    nom: string
    prenom: string
    image?: string | null
    role: $Enums.RoleUser
    departement: string
    faculte: string
    specialite?: string | null
    niveauEtudes?: string | null
    dateInscription?: Date | string
    derniereConnexion?: Date | string | null
    estActif?: boolean
    universiteId: string
    contributions?: RessourceUncheckedCreateNestedManyWithoutAuteurInput
    favoris?: FavoriUncheckedCreateNestedManyWithoutUserInput
    commentaires?: CommentaireUncheckedCreateNestedManyWithoutUserInput
    notations?: NotationUncheckedCreateNestedManyWithoutUserInput
    historiques?: HistoriqueAccesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCollectionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCollectionsInput, UserUncheckedCreateWithoutCollectionsInput>
  }

  export type CollectionRessourceCreateWithoutCollectionInput = {
    id?: string
    dateAjout?: Date | string
    notes?: string | null
    ressource: RessourceCreateNestedOneWithoutCollectionsInput
  }

  export type CollectionRessourceUncheckedCreateWithoutCollectionInput = {
    id?: string
    ressourceId: string
    dateAjout?: Date | string
    notes?: string | null
  }

  export type CollectionRessourceCreateOrConnectWithoutCollectionInput = {
    where: CollectionRessourceWhereUniqueInput
    create: XOR<CollectionRessourceCreateWithoutCollectionInput, CollectionRessourceUncheckedCreateWithoutCollectionInput>
  }

  export type CollectionRessourceCreateManyCollectionInputEnvelope = {
    data: CollectionRessourceCreateManyCollectionInput | CollectionRessourceCreateManyCollectionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCollectionsInput = {
    update: XOR<UserUpdateWithoutCollectionsInput, UserUncheckedUpdateWithoutCollectionsInput>
    create: XOR<UserCreateWithoutCollectionsInput, UserUncheckedCreateWithoutCollectionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCollectionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCollectionsInput, UserUncheckedUpdateWithoutCollectionsInput>
  }

  export type UserUpdateWithoutCollectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleUserFieldUpdateOperationsInput | $Enums.RoleUser
    departement?: StringFieldUpdateOperationsInput | string
    faculte?: StringFieldUpdateOperationsInput | string
    specialite?: NullableStringFieldUpdateOperationsInput | string | null
    niveauEtudes?: NullableStringFieldUpdateOperationsInput | string | null
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    derniereConnexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estActif?: BoolFieldUpdateOperationsInput | boolean
    universite?: UniversiteUpdateOneRequiredWithoutUsersNestedInput
    contributions?: RessourceUpdateManyWithoutAuteurNestedInput
    favoris?: FavoriUpdateManyWithoutUserNestedInput
    commentaires?: CommentaireUpdateManyWithoutUserNestedInput
    notations?: NotationUpdateManyWithoutUserNestedInput
    historiques?: HistoriqueAccesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCollectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleUserFieldUpdateOperationsInput | $Enums.RoleUser
    departement?: StringFieldUpdateOperationsInput | string
    faculte?: StringFieldUpdateOperationsInput | string
    specialite?: NullableStringFieldUpdateOperationsInput | string | null
    niveauEtudes?: NullableStringFieldUpdateOperationsInput | string | null
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    derniereConnexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estActif?: BoolFieldUpdateOperationsInput | boolean
    universiteId?: StringFieldUpdateOperationsInput | string
    contributions?: RessourceUncheckedUpdateManyWithoutAuteurNestedInput
    favoris?: FavoriUncheckedUpdateManyWithoutUserNestedInput
    commentaires?: CommentaireUncheckedUpdateManyWithoutUserNestedInput
    notations?: NotationUncheckedUpdateManyWithoutUserNestedInput
    historiques?: HistoriqueAccesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CollectionRessourceUpsertWithWhereUniqueWithoutCollectionInput = {
    where: CollectionRessourceWhereUniqueInput
    update: XOR<CollectionRessourceUpdateWithoutCollectionInput, CollectionRessourceUncheckedUpdateWithoutCollectionInput>
    create: XOR<CollectionRessourceCreateWithoutCollectionInput, CollectionRessourceUncheckedCreateWithoutCollectionInput>
  }

  export type CollectionRessourceUpdateWithWhereUniqueWithoutCollectionInput = {
    where: CollectionRessourceWhereUniqueInput
    data: XOR<CollectionRessourceUpdateWithoutCollectionInput, CollectionRessourceUncheckedUpdateWithoutCollectionInput>
  }

  export type CollectionRessourceUpdateManyWithWhereWithoutCollectionInput = {
    where: CollectionRessourceScalarWhereInput
    data: XOR<CollectionRessourceUpdateManyMutationInput, CollectionRessourceUncheckedUpdateManyWithoutCollectionInput>
  }

  export type CollectionCreateWithoutRessourcesInput = {
    id?: string
    nom: string
    description?: string | null
    estPublique?: boolean
    dateCreation?: Date | string
    user: UserCreateNestedOneWithoutCollectionsInput
  }

  export type CollectionUncheckedCreateWithoutRessourcesInput = {
    id?: string
    userId: string
    nom: string
    description?: string | null
    estPublique?: boolean
    dateCreation?: Date | string
  }

  export type CollectionCreateOrConnectWithoutRessourcesInput = {
    where: CollectionWhereUniqueInput
    create: XOR<CollectionCreateWithoutRessourcesInput, CollectionUncheckedCreateWithoutRessourcesInput>
  }

  export type RessourceCreateWithoutCollectionsInput = {
    id?: string
    titre: string
    description: string
    type: $Enums.TypeRessource
    langue?: string
    urlFichier: string
    urlFichierLocal?: string | null
    format: string
    dateCreation?: Date | string
    dateModification?: Date | string
    estPublique?: boolean
    motsCles: string
    image?: string | null
    niveauAcces?: $Enums.NiveauAcces
    datePublication?: Date | string | null
    estValide?: boolean
    estArchive?: boolean
    nomAuteurExterne?: string | null
    prenomAuteurExterne?: string | null
    affiliationAuteurExterne?: string | null
    auteur?: UserCreateNestedOneWithoutContributionsInput
    universite: UniversiteCreateNestedOneWithoutRessourcesInput
    favoris?: FavoriCreateNestedManyWithoutRessourceInput
    commentaires?: CommentaireCreateNestedManyWithoutRessourceInput
    notations?: NotationCreateNestedManyWithoutRessourceInput
    historiques?: HistoriqueAccesCreateNestedManyWithoutRessourceInput
    partages?: PartageUniversiteCreateNestedManyWithoutRessourceInput
  }

  export type RessourceUncheckedCreateWithoutCollectionsInput = {
    id?: string
    titre: string
    description: string
    type: $Enums.TypeRessource
    langue?: string
    urlFichier: string
    urlFichierLocal?: string | null
    format: string
    dateCreation?: Date | string
    dateModification?: Date | string
    estPublique?: boolean
    motsCles: string
    auteurId?: string | null
    universiteId: string
    image?: string | null
    niveauAcces?: $Enums.NiveauAcces
    datePublication?: Date | string | null
    estValide?: boolean
    estArchive?: boolean
    nomAuteurExterne?: string | null
    prenomAuteurExterne?: string | null
    affiliationAuteurExterne?: string | null
    favoris?: FavoriUncheckedCreateNestedManyWithoutRessourceInput
    commentaires?: CommentaireUncheckedCreateNestedManyWithoutRessourceInput
    notations?: NotationUncheckedCreateNestedManyWithoutRessourceInput
    historiques?: HistoriqueAccesUncheckedCreateNestedManyWithoutRessourceInput
    partages?: PartageUniversiteUncheckedCreateNestedManyWithoutRessourceInput
  }

  export type RessourceCreateOrConnectWithoutCollectionsInput = {
    where: RessourceWhereUniqueInput
    create: XOR<RessourceCreateWithoutCollectionsInput, RessourceUncheckedCreateWithoutCollectionsInput>
  }

  export type CollectionUpsertWithoutRessourcesInput = {
    update: XOR<CollectionUpdateWithoutRessourcesInput, CollectionUncheckedUpdateWithoutRessourcesInput>
    create: XOR<CollectionCreateWithoutRessourcesInput, CollectionUncheckedCreateWithoutRessourcesInput>
    where?: CollectionWhereInput
  }

  export type CollectionUpdateToOneWithWhereWithoutRessourcesInput = {
    where?: CollectionWhereInput
    data: XOR<CollectionUpdateWithoutRessourcesInput, CollectionUncheckedUpdateWithoutRessourcesInput>
  }

  export type CollectionUpdateWithoutRessourcesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    estPublique?: BoolFieldUpdateOperationsInput | boolean
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCollectionsNestedInput
  }

  export type CollectionUncheckedUpdateWithoutRessourcesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    estPublique?: BoolFieldUpdateOperationsInput | boolean
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RessourceUpsertWithoutCollectionsInput = {
    update: XOR<RessourceUpdateWithoutCollectionsInput, RessourceUncheckedUpdateWithoutCollectionsInput>
    create: XOR<RessourceCreateWithoutCollectionsInput, RessourceUncheckedCreateWithoutCollectionsInput>
    where?: RessourceWhereInput
  }

  export type RessourceUpdateToOneWithWhereWithoutCollectionsInput = {
    where?: RessourceWhereInput
    data: XOR<RessourceUpdateWithoutCollectionsInput, RessourceUncheckedUpdateWithoutCollectionsInput>
  }

  export type RessourceUpdateWithoutCollectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeRessourceFieldUpdateOperationsInput | $Enums.TypeRessource
    langue?: StringFieldUpdateOperationsInput | string
    urlFichier?: StringFieldUpdateOperationsInput | string
    urlFichierLocal?: NullableStringFieldUpdateOperationsInput | string | null
    format?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateModification?: DateTimeFieldUpdateOperationsInput | Date | string
    estPublique?: BoolFieldUpdateOperationsInput | boolean
    motsCles?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    niveauAcces?: EnumNiveauAccesFieldUpdateOperationsInput | $Enums.NiveauAcces
    datePublication?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estValide?: BoolFieldUpdateOperationsInput | boolean
    estArchive?: BoolFieldUpdateOperationsInput | boolean
    nomAuteurExterne?: NullableStringFieldUpdateOperationsInput | string | null
    prenomAuteurExterne?: NullableStringFieldUpdateOperationsInput | string | null
    affiliationAuteurExterne?: NullableStringFieldUpdateOperationsInput | string | null
    auteur?: UserUpdateOneWithoutContributionsNestedInput
    universite?: UniversiteUpdateOneRequiredWithoutRessourcesNestedInput
    favoris?: FavoriUpdateManyWithoutRessourceNestedInput
    commentaires?: CommentaireUpdateManyWithoutRessourceNestedInput
    notations?: NotationUpdateManyWithoutRessourceNestedInput
    historiques?: HistoriqueAccesUpdateManyWithoutRessourceNestedInput
    partages?: PartageUniversiteUpdateManyWithoutRessourceNestedInput
  }

  export type RessourceUncheckedUpdateWithoutCollectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeRessourceFieldUpdateOperationsInput | $Enums.TypeRessource
    langue?: StringFieldUpdateOperationsInput | string
    urlFichier?: StringFieldUpdateOperationsInput | string
    urlFichierLocal?: NullableStringFieldUpdateOperationsInput | string | null
    format?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateModification?: DateTimeFieldUpdateOperationsInput | Date | string
    estPublique?: BoolFieldUpdateOperationsInput | boolean
    motsCles?: StringFieldUpdateOperationsInput | string
    auteurId?: NullableStringFieldUpdateOperationsInput | string | null
    universiteId?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    niveauAcces?: EnumNiveauAccesFieldUpdateOperationsInput | $Enums.NiveauAcces
    datePublication?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estValide?: BoolFieldUpdateOperationsInput | boolean
    estArchive?: BoolFieldUpdateOperationsInput | boolean
    nomAuteurExterne?: NullableStringFieldUpdateOperationsInput | string | null
    prenomAuteurExterne?: NullableStringFieldUpdateOperationsInput | string | null
    affiliationAuteurExterne?: NullableStringFieldUpdateOperationsInput | string | null
    favoris?: FavoriUncheckedUpdateManyWithoutRessourceNestedInput
    commentaires?: CommentaireUncheckedUpdateManyWithoutRessourceNestedInput
    notations?: NotationUncheckedUpdateManyWithoutRessourceNestedInput
    historiques?: HistoriqueAccesUncheckedUpdateManyWithoutRessourceNestedInput
    partages?: PartageUniversiteUncheckedUpdateManyWithoutRessourceNestedInput
  }

  export type RessourceCreateWithoutPartagesInput = {
    id?: string
    titre: string
    description: string
    type: $Enums.TypeRessource
    langue?: string
    urlFichier: string
    urlFichierLocal?: string | null
    format: string
    dateCreation?: Date | string
    dateModification?: Date | string
    estPublique?: boolean
    motsCles: string
    image?: string | null
    niveauAcces?: $Enums.NiveauAcces
    datePublication?: Date | string | null
    estValide?: boolean
    estArchive?: boolean
    nomAuteurExterne?: string | null
    prenomAuteurExterne?: string | null
    affiliationAuteurExterne?: string | null
    auteur?: UserCreateNestedOneWithoutContributionsInput
    universite: UniversiteCreateNestedOneWithoutRessourcesInput
    favoris?: FavoriCreateNestedManyWithoutRessourceInput
    commentaires?: CommentaireCreateNestedManyWithoutRessourceInput
    notations?: NotationCreateNestedManyWithoutRessourceInput
    historiques?: HistoriqueAccesCreateNestedManyWithoutRessourceInput
    collections?: CollectionRessourceCreateNestedManyWithoutRessourceInput
  }

  export type RessourceUncheckedCreateWithoutPartagesInput = {
    id?: string
    titre: string
    description: string
    type: $Enums.TypeRessource
    langue?: string
    urlFichier: string
    urlFichierLocal?: string | null
    format: string
    dateCreation?: Date | string
    dateModification?: Date | string
    estPublique?: boolean
    motsCles: string
    auteurId?: string | null
    universiteId: string
    image?: string | null
    niveauAcces?: $Enums.NiveauAcces
    datePublication?: Date | string | null
    estValide?: boolean
    estArchive?: boolean
    nomAuteurExterne?: string | null
    prenomAuteurExterne?: string | null
    affiliationAuteurExterne?: string | null
    favoris?: FavoriUncheckedCreateNestedManyWithoutRessourceInput
    commentaires?: CommentaireUncheckedCreateNestedManyWithoutRessourceInput
    notations?: NotationUncheckedCreateNestedManyWithoutRessourceInput
    historiques?: HistoriqueAccesUncheckedCreateNestedManyWithoutRessourceInput
    collections?: CollectionRessourceUncheckedCreateNestedManyWithoutRessourceInput
  }

  export type RessourceCreateOrConnectWithoutPartagesInput = {
    where: RessourceWhereUniqueInput
    create: XOR<RessourceCreateWithoutPartagesInput, RessourceUncheckedCreateWithoutPartagesInput>
  }

  export type RessourceUpsertWithoutPartagesInput = {
    update: XOR<RessourceUpdateWithoutPartagesInput, RessourceUncheckedUpdateWithoutPartagesInput>
    create: XOR<RessourceCreateWithoutPartagesInput, RessourceUncheckedCreateWithoutPartagesInput>
    where?: RessourceWhereInput
  }

  export type RessourceUpdateToOneWithWhereWithoutPartagesInput = {
    where?: RessourceWhereInput
    data: XOR<RessourceUpdateWithoutPartagesInput, RessourceUncheckedUpdateWithoutPartagesInput>
  }

  export type RessourceUpdateWithoutPartagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeRessourceFieldUpdateOperationsInput | $Enums.TypeRessource
    langue?: StringFieldUpdateOperationsInput | string
    urlFichier?: StringFieldUpdateOperationsInput | string
    urlFichierLocal?: NullableStringFieldUpdateOperationsInput | string | null
    format?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateModification?: DateTimeFieldUpdateOperationsInput | Date | string
    estPublique?: BoolFieldUpdateOperationsInput | boolean
    motsCles?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    niveauAcces?: EnumNiveauAccesFieldUpdateOperationsInput | $Enums.NiveauAcces
    datePublication?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estValide?: BoolFieldUpdateOperationsInput | boolean
    estArchive?: BoolFieldUpdateOperationsInput | boolean
    nomAuteurExterne?: NullableStringFieldUpdateOperationsInput | string | null
    prenomAuteurExterne?: NullableStringFieldUpdateOperationsInput | string | null
    affiliationAuteurExterne?: NullableStringFieldUpdateOperationsInput | string | null
    auteur?: UserUpdateOneWithoutContributionsNestedInput
    universite?: UniversiteUpdateOneRequiredWithoutRessourcesNestedInput
    favoris?: FavoriUpdateManyWithoutRessourceNestedInput
    commentaires?: CommentaireUpdateManyWithoutRessourceNestedInput
    notations?: NotationUpdateManyWithoutRessourceNestedInput
    historiques?: HistoriqueAccesUpdateManyWithoutRessourceNestedInput
    collections?: CollectionRessourceUpdateManyWithoutRessourceNestedInput
  }

  export type RessourceUncheckedUpdateWithoutPartagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeRessourceFieldUpdateOperationsInput | $Enums.TypeRessource
    langue?: StringFieldUpdateOperationsInput | string
    urlFichier?: StringFieldUpdateOperationsInput | string
    urlFichierLocal?: NullableStringFieldUpdateOperationsInput | string | null
    format?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateModification?: DateTimeFieldUpdateOperationsInput | Date | string
    estPublique?: BoolFieldUpdateOperationsInput | boolean
    motsCles?: StringFieldUpdateOperationsInput | string
    auteurId?: NullableStringFieldUpdateOperationsInput | string | null
    universiteId?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    niveauAcces?: EnumNiveauAccesFieldUpdateOperationsInput | $Enums.NiveauAcces
    datePublication?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estValide?: BoolFieldUpdateOperationsInput | boolean
    estArchive?: BoolFieldUpdateOperationsInput | boolean
    nomAuteurExterne?: NullableStringFieldUpdateOperationsInput | string | null
    prenomAuteurExterne?: NullableStringFieldUpdateOperationsInput | string | null
    affiliationAuteurExterne?: NullableStringFieldUpdateOperationsInput | string | null
    favoris?: FavoriUncheckedUpdateManyWithoutRessourceNestedInput
    commentaires?: CommentaireUncheckedUpdateManyWithoutRessourceNestedInput
    notations?: NotationUncheckedUpdateManyWithoutRessourceNestedInput
    historiques?: HistoriqueAccesUncheckedUpdateManyWithoutRessourceNestedInput
    collections?: CollectionRessourceUncheckedUpdateManyWithoutRessourceNestedInput
  }

  export type RessourceCreateManyAuteurInput = {
    id?: string
    titre: string
    description: string
    type: $Enums.TypeRessource
    langue?: string
    urlFichier: string
    urlFichierLocal?: string | null
    format: string
    dateCreation?: Date | string
    dateModification?: Date | string
    estPublique?: boolean
    motsCles: string
    universiteId: string
    image?: string | null
    niveauAcces?: $Enums.NiveauAcces
    datePublication?: Date | string | null
    estValide?: boolean
    estArchive?: boolean
    nomAuteurExterne?: string | null
    prenomAuteurExterne?: string | null
    affiliationAuteurExterne?: string | null
  }

  export type FavoriCreateManyUserInput = {
    id?: string
    ressourceId: string
    dateAjout?: Date | string
    note?: string | null
  }

  export type CommentaireCreateManyUserInput = {
    id?: string
    ressourceId: string
    contenu: string
    dateCreation?: Date | string
    estModere?: boolean
  }

  export type NotationCreateManyUserInput = {
    id?: string
    ressourceId: string
    note: number
    dateNotation?: Date | string
  }

  export type HistoriqueAccesCreateManyUserInput = {
    id?: string
    ressourceId: string
    dateAcces?: Date | string
    typeAcces: $Enums.TypeAcces
    ipAcces: string
    universiteSrc?: string | null
  }

  export type CollectionCreateManyUserInput = {
    id?: string
    nom: string
    description?: string | null
    estPublique?: boolean
    dateCreation?: Date | string
  }

  export type RessourceUpdateWithoutAuteurInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeRessourceFieldUpdateOperationsInput | $Enums.TypeRessource
    langue?: StringFieldUpdateOperationsInput | string
    urlFichier?: StringFieldUpdateOperationsInput | string
    urlFichierLocal?: NullableStringFieldUpdateOperationsInput | string | null
    format?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateModification?: DateTimeFieldUpdateOperationsInput | Date | string
    estPublique?: BoolFieldUpdateOperationsInput | boolean
    motsCles?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    niveauAcces?: EnumNiveauAccesFieldUpdateOperationsInput | $Enums.NiveauAcces
    datePublication?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estValide?: BoolFieldUpdateOperationsInput | boolean
    estArchive?: BoolFieldUpdateOperationsInput | boolean
    nomAuteurExterne?: NullableStringFieldUpdateOperationsInput | string | null
    prenomAuteurExterne?: NullableStringFieldUpdateOperationsInput | string | null
    affiliationAuteurExterne?: NullableStringFieldUpdateOperationsInput | string | null
    universite?: UniversiteUpdateOneRequiredWithoutRessourcesNestedInput
    favoris?: FavoriUpdateManyWithoutRessourceNestedInput
    commentaires?: CommentaireUpdateManyWithoutRessourceNestedInput
    notations?: NotationUpdateManyWithoutRessourceNestedInput
    historiques?: HistoriqueAccesUpdateManyWithoutRessourceNestedInput
    collections?: CollectionRessourceUpdateManyWithoutRessourceNestedInput
    partages?: PartageUniversiteUpdateManyWithoutRessourceNestedInput
  }

  export type RessourceUncheckedUpdateWithoutAuteurInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeRessourceFieldUpdateOperationsInput | $Enums.TypeRessource
    langue?: StringFieldUpdateOperationsInput | string
    urlFichier?: StringFieldUpdateOperationsInput | string
    urlFichierLocal?: NullableStringFieldUpdateOperationsInput | string | null
    format?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateModification?: DateTimeFieldUpdateOperationsInput | Date | string
    estPublique?: BoolFieldUpdateOperationsInput | boolean
    motsCles?: StringFieldUpdateOperationsInput | string
    universiteId?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    niveauAcces?: EnumNiveauAccesFieldUpdateOperationsInput | $Enums.NiveauAcces
    datePublication?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estValide?: BoolFieldUpdateOperationsInput | boolean
    estArchive?: BoolFieldUpdateOperationsInput | boolean
    nomAuteurExterne?: NullableStringFieldUpdateOperationsInput | string | null
    prenomAuteurExterne?: NullableStringFieldUpdateOperationsInput | string | null
    affiliationAuteurExterne?: NullableStringFieldUpdateOperationsInput | string | null
    favoris?: FavoriUncheckedUpdateManyWithoutRessourceNestedInput
    commentaires?: CommentaireUncheckedUpdateManyWithoutRessourceNestedInput
    notations?: NotationUncheckedUpdateManyWithoutRessourceNestedInput
    historiques?: HistoriqueAccesUncheckedUpdateManyWithoutRessourceNestedInput
    collections?: CollectionRessourceUncheckedUpdateManyWithoutRessourceNestedInput
    partages?: PartageUniversiteUncheckedUpdateManyWithoutRessourceNestedInput
  }

  export type RessourceUncheckedUpdateManyWithoutAuteurInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeRessourceFieldUpdateOperationsInput | $Enums.TypeRessource
    langue?: StringFieldUpdateOperationsInput | string
    urlFichier?: StringFieldUpdateOperationsInput | string
    urlFichierLocal?: NullableStringFieldUpdateOperationsInput | string | null
    format?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateModification?: DateTimeFieldUpdateOperationsInput | Date | string
    estPublique?: BoolFieldUpdateOperationsInput | boolean
    motsCles?: StringFieldUpdateOperationsInput | string
    universiteId?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    niveauAcces?: EnumNiveauAccesFieldUpdateOperationsInput | $Enums.NiveauAcces
    datePublication?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estValide?: BoolFieldUpdateOperationsInput | boolean
    estArchive?: BoolFieldUpdateOperationsInput | boolean
    nomAuteurExterne?: NullableStringFieldUpdateOperationsInput | string | null
    prenomAuteurExterne?: NullableStringFieldUpdateOperationsInput | string | null
    affiliationAuteurExterne?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FavoriUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateAjout?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    ressource?: RessourceUpdateOneRequiredWithoutFavorisNestedInput
  }

  export type FavoriUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ressourceId?: StringFieldUpdateOperationsInput | string
    dateAjout?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FavoriUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ressourceId?: StringFieldUpdateOperationsInput | string
    dateAjout?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommentaireUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenu?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    estModere?: BoolFieldUpdateOperationsInput | boolean
    ressource?: RessourceUpdateOneRequiredWithoutCommentairesNestedInput
  }

  export type CommentaireUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ressourceId?: StringFieldUpdateOperationsInput | string
    contenu?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    estModere?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CommentaireUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ressourceId?: StringFieldUpdateOperationsInput | string
    contenu?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    estModere?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    note?: IntFieldUpdateOperationsInput | number
    dateNotation?: DateTimeFieldUpdateOperationsInput | Date | string
    ressource?: RessourceUpdateOneRequiredWithoutNotationsNestedInput
  }

  export type NotationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ressourceId?: StringFieldUpdateOperationsInput | string
    note?: IntFieldUpdateOperationsInput | number
    dateNotation?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ressourceId?: StringFieldUpdateOperationsInput | string
    note?: IntFieldUpdateOperationsInput | number
    dateNotation?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoriqueAccesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateAcces?: DateTimeFieldUpdateOperationsInput | Date | string
    typeAcces?: EnumTypeAccesFieldUpdateOperationsInput | $Enums.TypeAcces
    ipAcces?: StringFieldUpdateOperationsInput | string
    universiteSrc?: NullableStringFieldUpdateOperationsInput | string | null
    ressource?: RessourceUpdateOneRequiredWithoutHistoriquesNestedInput
  }

  export type HistoriqueAccesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ressourceId?: StringFieldUpdateOperationsInput | string
    dateAcces?: DateTimeFieldUpdateOperationsInput | Date | string
    typeAcces?: EnumTypeAccesFieldUpdateOperationsInput | $Enums.TypeAcces
    ipAcces?: StringFieldUpdateOperationsInput | string
    universiteSrc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HistoriqueAccesUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ressourceId?: StringFieldUpdateOperationsInput | string
    dateAcces?: DateTimeFieldUpdateOperationsInput | Date | string
    typeAcces?: EnumTypeAccesFieldUpdateOperationsInput | $Enums.TypeAcces
    ipAcces?: StringFieldUpdateOperationsInput | string
    universiteSrc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CollectionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    estPublique?: BoolFieldUpdateOperationsInput | boolean
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    ressources?: CollectionRessourceUpdateManyWithoutCollectionNestedInput
  }

  export type CollectionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    estPublique?: BoolFieldUpdateOperationsInput | boolean
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    ressources?: CollectionRessourceUncheckedUpdateManyWithoutCollectionNestedInput
  }

  export type CollectionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    estPublique?: BoolFieldUpdateOperationsInput | boolean
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriCreateManyRessourceInput = {
    id?: string
    userId: string
    dateAjout?: Date | string
    note?: string | null
  }

  export type CommentaireCreateManyRessourceInput = {
    id?: string
    userId: string
    contenu: string
    dateCreation?: Date | string
    estModere?: boolean
  }

  export type NotationCreateManyRessourceInput = {
    id?: string
    userId: string
    note: number
    dateNotation?: Date | string
  }

  export type HistoriqueAccesCreateManyRessourceInput = {
    id?: string
    userId: string
    dateAcces?: Date | string
    typeAcces: $Enums.TypeAcces
    ipAcces: string
    universiteSrc?: string | null
  }

  export type CollectionRessourceCreateManyRessourceInput = {
    id?: string
    collectionId: string
    dateAjout?: Date | string
    notes?: string | null
  }

  export type PartageUniversiteCreateManyRessourceInput = {
    id?: string
    universiteSource: string
    universiteDestination: string
    datePartage?: Date | string
    estActif?: boolean
  }

  export type FavoriUpdateWithoutRessourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateAjout?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutFavorisNestedInput
  }

  export type FavoriUncheckedUpdateWithoutRessourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    dateAjout?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FavoriUncheckedUpdateManyWithoutRessourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    dateAjout?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommentaireUpdateWithoutRessourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenu?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    estModere?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutCommentairesNestedInput
  }

  export type CommentaireUncheckedUpdateWithoutRessourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contenu?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    estModere?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CommentaireUncheckedUpdateManyWithoutRessourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contenu?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    estModere?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotationUpdateWithoutRessourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    note?: IntFieldUpdateOperationsInput | number
    dateNotation?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotationsNestedInput
  }

  export type NotationUncheckedUpdateWithoutRessourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    note?: IntFieldUpdateOperationsInput | number
    dateNotation?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotationUncheckedUpdateManyWithoutRessourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    note?: IntFieldUpdateOperationsInput | number
    dateNotation?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoriqueAccesUpdateWithoutRessourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateAcces?: DateTimeFieldUpdateOperationsInput | Date | string
    typeAcces?: EnumTypeAccesFieldUpdateOperationsInput | $Enums.TypeAcces
    ipAcces?: StringFieldUpdateOperationsInput | string
    universiteSrc?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutHistoriquesNestedInput
  }

  export type HistoriqueAccesUncheckedUpdateWithoutRessourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    dateAcces?: DateTimeFieldUpdateOperationsInput | Date | string
    typeAcces?: EnumTypeAccesFieldUpdateOperationsInput | $Enums.TypeAcces
    ipAcces?: StringFieldUpdateOperationsInput | string
    universiteSrc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HistoriqueAccesUncheckedUpdateManyWithoutRessourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    dateAcces?: DateTimeFieldUpdateOperationsInput | Date | string
    typeAcces?: EnumTypeAccesFieldUpdateOperationsInput | $Enums.TypeAcces
    ipAcces?: StringFieldUpdateOperationsInput | string
    universiteSrc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CollectionRessourceUpdateWithoutRessourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateAjout?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    collection?: CollectionUpdateOneRequiredWithoutRessourcesNestedInput
  }

  export type CollectionRessourceUncheckedUpdateWithoutRessourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    collectionId?: StringFieldUpdateOperationsInput | string
    dateAjout?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CollectionRessourceUncheckedUpdateManyWithoutRessourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    collectionId?: StringFieldUpdateOperationsInput | string
    dateAjout?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PartageUniversiteUpdateWithoutRessourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    universiteSource?: StringFieldUpdateOperationsInput | string
    universiteDestination?: StringFieldUpdateOperationsInput | string
    datePartage?: DateTimeFieldUpdateOperationsInput | Date | string
    estActif?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PartageUniversiteUncheckedUpdateWithoutRessourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    universiteSource?: StringFieldUpdateOperationsInput | string
    universiteDestination?: StringFieldUpdateOperationsInput | string
    datePartage?: DateTimeFieldUpdateOperationsInput | Date | string
    estActif?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PartageUniversiteUncheckedUpdateManyWithoutRessourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    universiteSource?: StringFieldUpdateOperationsInput | string
    universiteDestination?: StringFieldUpdateOperationsInput | string
    datePartage?: DateTimeFieldUpdateOperationsInput | Date | string
    estActif?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserCreateManyUniversiteInput = {
    id?: string
    email: string
    motDePasse: string
    nom: string
    prenom: string
    image?: string | null
    role: $Enums.RoleUser
    departement: string
    faculte: string
    specialite?: string | null
    niveauEtudes?: string | null
    dateInscription?: Date | string
    derniereConnexion?: Date | string | null
    estActif?: boolean
  }

  export type RessourceCreateManyUniversiteInput = {
    id?: string
    titre: string
    description: string
    type: $Enums.TypeRessource
    langue?: string
    urlFichier: string
    urlFichierLocal?: string | null
    format: string
    dateCreation?: Date | string
    dateModification?: Date | string
    estPublique?: boolean
    motsCles: string
    auteurId?: string | null
    image?: string | null
    niveauAcces?: $Enums.NiveauAcces
    datePublication?: Date | string | null
    estValide?: boolean
    estArchive?: boolean
    nomAuteurExterne?: string | null
    prenomAuteurExterne?: string | null
    affiliationAuteurExterne?: string | null
  }

  export type UserUpdateWithoutUniversiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleUserFieldUpdateOperationsInput | $Enums.RoleUser
    departement?: StringFieldUpdateOperationsInput | string
    faculte?: StringFieldUpdateOperationsInput | string
    specialite?: NullableStringFieldUpdateOperationsInput | string | null
    niveauEtudes?: NullableStringFieldUpdateOperationsInput | string | null
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    derniereConnexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estActif?: BoolFieldUpdateOperationsInput | boolean
    contributions?: RessourceUpdateManyWithoutAuteurNestedInput
    favoris?: FavoriUpdateManyWithoutUserNestedInput
    commentaires?: CommentaireUpdateManyWithoutUserNestedInput
    notations?: NotationUpdateManyWithoutUserNestedInput
    historiques?: HistoriqueAccesUpdateManyWithoutUserNestedInput
    collections?: CollectionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUniversiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleUserFieldUpdateOperationsInput | $Enums.RoleUser
    departement?: StringFieldUpdateOperationsInput | string
    faculte?: StringFieldUpdateOperationsInput | string
    specialite?: NullableStringFieldUpdateOperationsInput | string | null
    niveauEtudes?: NullableStringFieldUpdateOperationsInput | string | null
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    derniereConnexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estActif?: BoolFieldUpdateOperationsInput | boolean
    contributions?: RessourceUncheckedUpdateManyWithoutAuteurNestedInput
    favoris?: FavoriUncheckedUpdateManyWithoutUserNestedInput
    commentaires?: CommentaireUncheckedUpdateManyWithoutUserNestedInput
    notations?: NotationUncheckedUpdateManyWithoutUserNestedInput
    historiques?: HistoriqueAccesUncheckedUpdateManyWithoutUserNestedInput
    collections?: CollectionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutUniversiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleUserFieldUpdateOperationsInput | $Enums.RoleUser
    departement?: StringFieldUpdateOperationsInput | string
    faculte?: StringFieldUpdateOperationsInput | string
    specialite?: NullableStringFieldUpdateOperationsInput | string | null
    niveauEtudes?: NullableStringFieldUpdateOperationsInput | string | null
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    derniereConnexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estActif?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RessourceUpdateWithoutUniversiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeRessourceFieldUpdateOperationsInput | $Enums.TypeRessource
    langue?: StringFieldUpdateOperationsInput | string
    urlFichier?: StringFieldUpdateOperationsInput | string
    urlFichierLocal?: NullableStringFieldUpdateOperationsInput | string | null
    format?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateModification?: DateTimeFieldUpdateOperationsInput | Date | string
    estPublique?: BoolFieldUpdateOperationsInput | boolean
    motsCles?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    niveauAcces?: EnumNiveauAccesFieldUpdateOperationsInput | $Enums.NiveauAcces
    datePublication?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estValide?: BoolFieldUpdateOperationsInput | boolean
    estArchive?: BoolFieldUpdateOperationsInput | boolean
    nomAuteurExterne?: NullableStringFieldUpdateOperationsInput | string | null
    prenomAuteurExterne?: NullableStringFieldUpdateOperationsInput | string | null
    affiliationAuteurExterne?: NullableStringFieldUpdateOperationsInput | string | null
    auteur?: UserUpdateOneWithoutContributionsNestedInput
    favoris?: FavoriUpdateManyWithoutRessourceNestedInput
    commentaires?: CommentaireUpdateManyWithoutRessourceNestedInput
    notations?: NotationUpdateManyWithoutRessourceNestedInput
    historiques?: HistoriqueAccesUpdateManyWithoutRessourceNestedInput
    collections?: CollectionRessourceUpdateManyWithoutRessourceNestedInput
    partages?: PartageUniversiteUpdateManyWithoutRessourceNestedInput
  }

  export type RessourceUncheckedUpdateWithoutUniversiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeRessourceFieldUpdateOperationsInput | $Enums.TypeRessource
    langue?: StringFieldUpdateOperationsInput | string
    urlFichier?: StringFieldUpdateOperationsInput | string
    urlFichierLocal?: NullableStringFieldUpdateOperationsInput | string | null
    format?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateModification?: DateTimeFieldUpdateOperationsInput | Date | string
    estPublique?: BoolFieldUpdateOperationsInput | boolean
    motsCles?: StringFieldUpdateOperationsInput | string
    auteurId?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    niveauAcces?: EnumNiveauAccesFieldUpdateOperationsInput | $Enums.NiveauAcces
    datePublication?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estValide?: BoolFieldUpdateOperationsInput | boolean
    estArchive?: BoolFieldUpdateOperationsInput | boolean
    nomAuteurExterne?: NullableStringFieldUpdateOperationsInput | string | null
    prenomAuteurExterne?: NullableStringFieldUpdateOperationsInput | string | null
    affiliationAuteurExterne?: NullableStringFieldUpdateOperationsInput | string | null
    favoris?: FavoriUncheckedUpdateManyWithoutRessourceNestedInput
    commentaires?: CommentaireUncheckedUpdateManyWithoutRessourceNestedInput
    notations?: NotationUncheckedUpdateManyWithoutRessourceNestedInput
    historiques?: HistoriqueAccesUncheckedUpdateManyWithoutRessourceNestedInput
    collections?: CollectionRessourceUncheckedUpdateManyWithoutRessourceNestedInput
    partages?: PartageUniversiteUncheckedUpdateManyWithoutRessourceNestedInput
  }

  export type RessourceUncheckedUpdateManyWithoutUniversiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeRessourceFieldUpdateOperationsInput | $Enums.TypeRessource
    langue?: StringFieldUpdateOperationsInput | string
    urlFichier?: StringFieldUpdateOperationsInput | string
    urlFichierLocal?: NullableStringFieldUpdateOperationsInput | string | null
    format?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateModification?: DateTimeFieldUpdateOperationsInput | Date | string
    estPublique?: BoolFieldUpdateOperationsInput | boolean
    motsCles?: StringFieldUpdateOperationsInput | string
    auteurId?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    niveauAcces?: EnumNiveauAccesFieldUpdateOperationsInput | $Enums.NiveauAcces
    datePublication?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estValide?: BoolFieldUpdateOperationsInput | boolean
    estArchive?: BoolFieldUpdateOperationsInput | boolean
    nomAuteurExterne?: NullableStringFieldUpdateOperationsInput | string | null
    prenomAuteurExterne?: NullableStringFieldUpdateOperationsInput | string | null
    affiliationAuteurExterne?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CollectionRessourceCreateManyCollectionInput = {
    id?: string
    ressourceId: string
    dateAjout?: Date | string
    notes?: string | null
  }

  export type CollectionRessourceUpdateWithoutCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateAjout?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    ressource?: RessourceUpdateOneRequiredWithoutCollectionsNestedInput
  }

  export type CollectionRessourceUncheckedUpdateWithoutCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    ressourceId?: StringFieldUpdateOperationsInput | string
    dateAjout?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CollectionRessourceUncheckedUpdateManyWithoutCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    ressourceId?: StringFieldUpdateOperationsInput | string
    dateAjout?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}