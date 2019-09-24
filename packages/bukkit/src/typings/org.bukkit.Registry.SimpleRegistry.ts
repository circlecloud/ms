declare namespace org {
    namespace bukkit {
        namespace Registry {
            // @ts-ignore
             class SimpleRegistry implements org.bukkit.Registry {
                constructor(type: any)
                constructor(type: any, predicate: any)
                public get(key: org.bukkit.NamespacedKey): any;
                public iterator(): any;
            }
        }
    }
}
