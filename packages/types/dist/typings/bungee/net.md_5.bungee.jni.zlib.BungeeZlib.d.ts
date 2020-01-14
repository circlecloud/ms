declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace jni {
                namespace zlib {
                    // @ts-ignore
                    interface BungeeZlib {
                        // @ts-ignore
                         init(compress: boolean, level: number): void;
                        // @ts-ignore
                         free(): void;
                        // @ts-ignore
                         process(input: ByteBuf, out: ByteBuf): void;
                    }
                }
            }
        }
    }
}
