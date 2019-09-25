declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                namespace file {
                    // @ts-ignore
                    abstract class ForwardingFileVisitor {
                        constructor(visitor: any)
                        // @ts-ignore
                        public preVisitDirectory(dir: any, attrs: any): any;
                        // @ts-ignore
                        public visitFile(file: any, attrs: any): any;
                        // @ts-ignore
                        public visitFileFailed(file: any, exc: any): any;
                        // @ts-ignore
                        public postVisitDirectory(dir: any, exc: any): any;
                    }
                }
            }
        }
    }
}
