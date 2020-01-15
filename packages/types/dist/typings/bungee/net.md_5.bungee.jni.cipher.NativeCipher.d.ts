declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace jni {
                namespace cipher {
                    // @ts-ignore
                     class NativeCipher extends java.lang.Object implements net.md_5.bungee.jni.cipher.BungeeCipher {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public init(forEncryption: boolean, key: any /*javax.crypto.SecretKey*/): void;
                        // @ts-ignore
                        public free(): void;
                        // @ts-ignore
                        public cipher(input: ByteBuf, out: ByteBuf): void;
                        // @ts-ignore
                        public cipher(ctx: ChannelHandlerContext, input: ByteBuf): ByteBuf;
                        // @ts-ignore
                        public getNativeCipher(): net.md_5.bungee.jni.cipher.NativeCipherImpl;
                    }
                }
            }
        }
    }
}
