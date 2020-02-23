declare namespace cn {
    namespace nukkit {
        namespace metadata {
            // @ts-ignore
            interface Metadatable {
                // @ts-ignore
                 setMetadata(metadataKey: string, newMetadataValue: cn.nukkit.metadata.MetadataValue): void;
                // @ts-ignore
                 getMetadata(metadataKey: string): java.util.List;
                // @ts-ignore
                 hasMetadata(metadataKey: string): boolean;
                // @ts-ignore
                 removeMetadata(metadataKey: string, owningPlugin: cn.nukkit.plugin.Plugin): void;
            }
        }
    }
}
