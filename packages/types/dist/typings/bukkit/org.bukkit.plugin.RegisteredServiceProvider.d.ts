declare namespace org {
    namespace bukkit {
        namespace plugin {
            // @ts-ignore
             class RegisteredServiceProvider extends java.lang.Object {
                // @ts-ignore
                constructor(service: java.lang.Class, provider: java.lang.Object, priority: org.bukkit.plugin.ServicePriority, plugin: org.bukkit.plugin.Plugin)
                // @ts-ignore
                public getService(): java.lang.Class;
                // @ts-ignore
                public getPlugin(): org.bukkit.plugin.Plugin;
                // @ts-ignore
                public getProvider(): java.lang.Object;
                // @ts-ignore
                public getPriority(): org.bukkit.plugin.ServicePriority;
                // @ts-ignore
                public compareTo(other: org.bukkit.plugin.RegisteredServiceProvider): number;
            }
        }
    }
}
