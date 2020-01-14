declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace jni {
                namespace cipher {
                    // @ts-ignore
                    interface BungeeCipher {
                        // @ts-ignore
                         init(forEncryption: boolean, key: any /*javax.crypto.SecretKey*/): void;
                        // @ts-ignore
                         free(): void;
                        // @ts-ignore
                         cipher(input: ByteBuf, out: ByteBuf): void;
                        // @ts-ignore
                         cipher(ctx: ChannelHandlerContext, input: ByteBuf): ByteBuf;
                    }
                }
            }
        }
    }
}
