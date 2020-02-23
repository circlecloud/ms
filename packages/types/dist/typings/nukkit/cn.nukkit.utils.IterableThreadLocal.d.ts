declare namespace cn {
    namespace nukkit {
        namespace utils {
            // @ts-ignore
            abstract class IterableThreadLocal extends java.lang.ThreadLocal {
                // @ts-ignore
                constructor()
                // @ts-ignore
                protected initialValue(): java.lang.Object;
                // @ts-ignore
                public iterator(): java.util.Iterator;
                // @ts-ignore
                public init(): java.lang.Object;
                // @ts-ignore
                public clean(): void;
                // @ts-ignore
                public static clean(instance: java.lang.ThreadLocal): void;
                // @ts-ignore
                public static cleanAll(): void;
                // @ts-ignore
                public getAll(): java.util.Collection;
                // @ts-ignore
                protected finalize(): void;
            }
        }
    }
}
