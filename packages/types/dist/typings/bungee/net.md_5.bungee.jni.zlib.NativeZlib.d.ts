declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace jni {
                namespace zlib {
                    // @ts-ignore
                     class NativeZlib extends java.lang.Object implements net.md_5.bungee.jni.zlib.BungeeZlib {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public init(compress: boolean, level: number): void;
                        // @ts-ignore
                        public free(): void;
                        // @ts-ignore
                        public process(input: ByteBuf, out: ByteBuf): void;
                    }
                }
            }
        }
    }
}
