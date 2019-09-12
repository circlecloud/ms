declare namespace org {
    namespace bukkit {
        namespace Registry {
            class SimpleRegistry {
                constructor(type: any)
                constructor(type: any, predicate: any)
                public get(key: org.bukkit.NamespacedKey): any;
                public iterator(): any;
            }
        }
    }
}
