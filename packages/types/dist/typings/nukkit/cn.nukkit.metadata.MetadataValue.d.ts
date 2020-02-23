declare namespace cn {
    namespace nukkit {
        namespace metadata {
            // @ts-ignore
            abstract class MetadataValue extends java.lang.Object {
                // @ts-ignore
                constructor(owningPlugin: cn.nukkit.plugin.Plugin)
                // @ts-ignore
                protected owningPlugin: java.lang.ref.WeakReference;
                // @ts-ignore
                public getOwningPlugin(): cn.nukkit.plugin.Plugin;
                // @ts-ignore
                public abstract value(): java.lang.Object;
                // @ts-ignore
                public abstract invalidate(): void;
            }
        }
    }
}
