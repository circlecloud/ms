declare namespace org {
    namespace bukkit {
        namespace plugin {
            class RegisteredServiceProvider {
                constructor(service: any, provider: any, priority: org.bukkit.plugin.ServicePriority, plugin: org.bukkit.plugin.Plugin)
                public getService(): any;
                public getPlugin(): org.bukkit.plugin.Plugin;
                public getProvider(): any;
                public getPriority(): org.bukkit.plugin.ServicePriority;
                public compareTo(other: org.bukkit.plugin.RegisteredServiceProvider): number;
            }
        }
    }
}
