declare namespace net {
    namespace md_5 {
        namespace bungee {
            // @ts-ignore
             class EncryptionUtil extends java.lang.Object {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public static nativeFactory: any;
                // @ts-ignore
                public static encryptRequest(): EncryptionRequest;
                // @ts-ignore
                public static getSecret(resp: EncryptionResponse, request: EncryptionRequest): any /*javax.crypto.SecretKey*/;
                // @ts-ignore
                public static getCipher(forEncryption: boolean, shared: any /*javax.crypto.SecretKey*/): BungeeCipher;
                // @ts-ignore
                public static getPubkey(request: EncryptionRequest): java.security.PublicKey;
                // @ts-ignore
                public static encrypt(key: java.security.Key, b: number): number[];
            }
        }
    }
}
