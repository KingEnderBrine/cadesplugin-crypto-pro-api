/**
 * @constant {Number} CADESCOM_STRING_TO_UCS2LE Данные будут перекодированы в UCS - 2 little endian.
 */
export const CADESCOM_STRING_TO_UCS2LE = 0x00;
/**
 * @constant {Number} CADESCOM_BASE64_TO_BINARY Данные будут перекодированы из Base64 в бинарный массив.
 */
export const CADESCOM_BASE64_TO_BINARY = 0x01;
/**
 * @constant {Number} CADESCOM_MEMORY_STORE Хранилище сертификатов в памяти компьютера.
 */
export const CADESCOM_MEMORY_STORE = 0;
/**
 * @constant {Number} CADESCOM_LOCAL_MACHINE_STORE Локальное хранилище компьютера.
 */
export const CADESCOM_LOCAL_MACHINE_STORE = 1;
/**
 * @constant {Number} CADESCOM_CURRENT_USER_STORE Хранилище текущего пользователя.
 */
export const CADESCOM_CURRENT_USER_STORE = 2;
/**
 * @constant {Number} CADESCOM_CONTAINER_STORE
 * Хранилище сертификатов в контейнерах закрытых ключей.
 * В данный Store попадут все сертификаты из контейнеров закрытых ключей которые
 * доступны в системе в момент открытия.
 */
export const CADESCOM_CONTAINER_STORE = 100;
/**
 * @constant {Number} CADESCOM_CADES_DEFAULT Тип подписи по умолчанию(CAdES - X Long Type 1).
 */
export const CADESCOM_CADES_DEFAULT = 0;
/**
 * @constant {Number} CADESCOM_CADES_BES Тип подписи CAdES BES.
 */
export const CADESCOM_CADES_BES = 1;
/**
 * @constant {Number} CADESCOM_CADES_T Тип подписи CAdES - T.
 */
export const CADESCOM_CADES_T = 0x5;
/**
 * @constant {Number} CADESCOM_CADES_X_LONG_TYPE_1 Тип подписи CAdES - X Long Type 1.
 */
export const CADESCOM_CADES_X_LONG_TYPE_1 = 0x5d;
/**
 * @constant {Number} CADESCOM_PKCS7_TYPE Тип подписи PKCS7.
 */
export const CADESCOM_PKCS7_TYPE = 0xffff;
/**
 * @constant {Number} CADESCOM_ENCODE_BASE64 Кодировка BASE64.
 */
export const CADESCOM_ENCODE_BASE64 = 0;
/**
 * @constant {Number} CADESCOM_ENCODE_BINARY Бинарные данные.
 */
export const CADESCOM_ENCODE_BINARY = 1;
/**
 * @constant {Number} CADESCOM_ENCODE_ANY Любые данные.
 */
export const CADESCOM_ENCODE_ANY = -1;
/**
 * @constant {Number} CADESCOM_AUTHENTICATED_ATTRIBUTE_DOCUMENT_NAME Название документа.
 */
export const CADESCOM_AUTHENTICATED_ATTRIBUTE_DOCUMENT_NAME = 1;
/**
 * @constant {Number} CADESCOM_AUTHENTICATED_ATTRIBUTE_DOCUMENT_DESCRIPTION Описание документа.
 */
export const CADESCOM_AUTHENTICATED_ATTRIBUTE_DOCUMENT_DESCRIPTION = 2;
/**
 * @constant {Number} CADESCOM_ATTRIBUTE_OTHER Прочие атрибуты.
 */
export const CADESCOM_ATTRIBUTE_OTHER = -1;
/**
 * @constant {Number} CADESCOM_DISPLAY_DATA_NONE Данные не будут пересылаться в устройство.
 */
export const CADESCOM_DISPLAY_DATA_NONE = 0;
/**
 * @constant {Number} CADESCOM_DISPLAY_DATA_CONTENT Отображаемые данные лежат в теле сообщения.
 */
export const CADESCOM_DISPLAY_DATA_CONTENT = 1;
/**
 * @constant {Number} CADESCOM_DISPLAY_DATA_ATTRIBUTE Отображаемые данные лежат в подписанном атрибуте сообщения.
 */
export const CADESCOM_DISPLAY_DATA_ATTRIBUTE = 2;
/**
 * @constant {Object} Алгоритм RSA
 */
export const CADESCOM_ENCRYPTION_ALGORITHM_RC = {
    /**
     * @constant {Number} RC2 Алгоритм RSA RC2.
     */
    RC2: 0,
    /**
     * @constant {Number} RC4 Алгоритм RSA RC4.
     */
    RC4: 1,
};
/**
 * @constant {Number} CADESCOM_ENCRYPTION_ALGORITHM_DES Алгоритм DES.
 */
export const CADESCOM_ENCRYPTION_ALGORITHM_DES = 2;
/**
 * @constant {Number} CADESCOM_ENCRYPTION_ALGORITHM_3DES Алгоритм 3 DES.
 */
export const CADESCOM_ENCRYPTION_ALGORITHM_3DES = 3;
/**
 * @constant {Number} CADESCOM_ENCRYPTION_ALGORITHM_AES Алгоритм AES.
 */
export const CADESCOM_ENCRYPTION_ALGORITHM_AES = 4;
/**
 * @constant {Number} CADESCOM_ENCRYPTION_ALGORITHM_GOST_28147_89 Алгоритм ГОСТ 28147 - 89.
 */
export const CADESCOM_ENCRYPTION_ALGORITHM_GOST_28147_89 = 25;
/**
 * @constant {Number} CADESCOM_HASH_ALGORITHM_SHA1 Алгоритм SHA1.
 */
export const CADESCOM_HASH_ALGORITHM_SHA1 = 0;
/**
 * @constant {Number} CADESCOM_HASH_ALGORITHM Алгоритм MD.
 */
export const CADESCOM_HASH_ALGORITHM = {
    /**
     * @constant {Number} CADESCOM_HASH_ALGORITHM_MD2 Алгоритм MD2.
     */
    MD2: 1,
    /**
     * @constant {Number} CADESCOM_HASH_ALGORITHM_MD4 Алгоритм MD4.
     */
    MD4: 2,
    /**
     * @constant {Number} CADESCOM_HASH_ALGORITHM_MD5 Алгоритм MD5.
     */
    MD5: 3,
};
/**
 * @constant {Number} CADESCOM_HASH_ALGORITHM_SHA_256 Алгоритм SHA1 с длиной ключа 256 бит.
 */
export const CADESCOM_HASH_ALGORITHM_SHA_256 = 4;
/**
 * @constant {Number} CADESCOM_HASH_ALGORITHM_SHA_384 Алгоритм SHA1 с длиной ключа 384 бита.
 */
export const CADESCOM_HASH_ALGORITHM_SHA_384 = 5;
/**
 * @constant {Number} CADESCOM_HASH_ALGORITHM_SHA_512 Алгоритм SHA1 с длиной ключа 512 бит.
 */
export const CADESCOM_HASH_ALGORITHM_SHA_512 = 6;
/**
 * @constant {Number} CADESCOM_HASH_ALGORITHM_CP_GOST_3411 Алгоритм ГОСТ Р 34.11 - 94.
 */
export const CADESCOM_HASH_ALGORITHM_CP_GOST_3411 = 100;
/**
 * @constant {Number} CADESCOM_HASH_ALGORITHM_CP_GOST_3411_2012_256 Алгоритм ГОСТ Р 34.10 - 2012.
 */
export const CADESCOM_HASH_ALGORITHM_CP_GOST_3411_2012_256 = 101;
/**
 * @constant {Number} CADESCOM_HASH_ALGORITHM_CP_GOST_3411_2012_512 Алгоритм ГОСТ Р 34.10 - 2012.
 */
export const CADESCOM_HASH_ALGORITHM_CP_GOST_3411_2012_512 = 102;
/**
 * @constant {Number} CADESCOM_HASH_ALGORITHM_CP_GOST_3411_HMAC Алгоритм ГОСТ Р 34.11-94 HMAC.
 */
export const CADESCOM_HASH_ALGORITHM_CP_GOST_3411_HMAC = 110;
/**
 * @constant {Number} CADESCOM_HASH_ALGORITHM_CP_GOST_3411_2012_256_HMAC Алгоритм ГОСТ Р 34.11-2012 HMAC.
 */
export const CADESCOM_HASH_ALGORITHM_CP_GOST_3411_2012_256_HMAC = 111;
/**
 * @constant {Number} CADESCOM_HASH_ALGORITHM_CP_GOST_3411_2012_512_HMAC Алгоритм ГОСТ Р 34.11-2012 HMAC.
 */
export const CADESCOM_HASH_ALGORITHM_CP_GOST_3411_2012_512_HMAC = 112;
/**
 * @constant {Number} CADESCOM_XML_SIGNATURE_TYPE_ENVELOPED Вложенная подпись.
 */
export const CADESCOM_XML_SIGNATURE_TYPE_ENVELOPED = 0;
/**
 * @constant {Number} CADESCOM_XML_SIGNATURE_TYPE_ENVELOPING Оборачивающая подпись.
 */
export const CADESCOM_XML_SIGNATURE_TYPE_ENVELOPING = 1;
/**
 * @constant {Number} CADESCOM_XML_SIGNATURE_TYPE_TEMPLATE Подпись по шаблону.
 */
export const CADESCOM_XML_SIGNATURE_TYPE_TEMPLATE = 2;
/**
 * @constant {Number} CADESCOM_XADES_DEFAULT Тип подписи по умолчанию (XAdES-X Long Type 1).
 */
export const CADESCOM_XADES_DEFAULT = 0x00000010;
/**
 * @constant {Number} CADESCOM_XADES_BES Тип подписи XAdES-BES.
 */
export const CADESCOM_XADES_BES = 0x00000020;
/**
 * @constant {Number} CADESCOM_XADES_T Тип подписи XAdES-T.
 */
export const CADESCOM_XADES_T = 0x00000050;
/**
 * @constant {Number} CADESCOM_XADES_X_LONG_TYPE_1 Тип подписи XAdES-X Long Type 1.
 */
export const CADESCOM_XADES_X_LONG_TYPE_1 = 0x000005d0;
/**
 * @constant {Number} CADESCOM_XMLDSIG_TYPE Тип подписи XAdES-A.
 */
export const CADESCOM_XMLDSIG_TYPE = 0x00000000;
/**
 * @constant {Number} CADESCOM_AllowNone Флаг запрета установки недоверенных сертификатов или сертификатов, для которых нет соответствующего запроса.
 */
 export const CADESCOM_AllowNone = 0;
/**
 * @constant {Number} CADESCOM_AllowNoOutstandingRequest 	Флаг создания закрытого ключа из ответа на запрос.
 */
 export const CADESCOM_AllowNoOutstandingRequest = 0x1;
/**
 * @constant {Number} CADESCOM_AllowUntrustedCertificate Флаг установки недоверенных сертификатов конечного пользователя и центров сертификации.
 */
 export const CADESCOM_AllowUntrustedCertificate = 0x2;
/**
 * @constant {Number} CADESCOM_AllowUntrustedRoot Флаг установки сертификата, даже если корневой центр сертификации для него не является доверенным.
 */
 export const CADESCOM_AllowUntrustedRoot = 0x4;
/**
 * @constant {Number} CADESCOM_SkipInstallToStore Флаг пропуска установки сертификата в хранилище сертификатов.
 */
export const CADESCOM_SkipInstallToStore = 0x10000000;
/**
 * @constant {Number} CADESCOM_InstallCertChainToContainer = 0x20000000	Флаг добавления цепочки сертификатов в контейнер.
 */
export const CADESCOM_InstallCertChainToContainer = 0x20000000;
