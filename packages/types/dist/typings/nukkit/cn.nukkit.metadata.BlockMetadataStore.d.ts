declare namespace cn {
    namespace nukkit {
        namespace metadata {
            // @ts-ignore
             class BlockMetadataStore extends cn.nukkit.metadata.MetadataStore {
                // @ts-ignore
                constructor(owningLevel: cn.nukkit.level.Level)
                // @ts-ignore
                protected disambiguate(block: cn.nukkit.metadata.Metadatable, metadataKey: string): string;
                // @ts-ignore
                public getMetadata(block: java.lang.Object, metadataKey: string): java.util.List;
                // @ts-ignore
                public hasMetadata(block: java.lang.Object, metadataKey: string): boolean;
                // @ts-ignore
                public removeMetadata(block: java.lang.Object, metadataKey: string, owningPlugin: cn.nukkit.plugin.Plugin): void;
                // @ts-ignore
                public setMetadata(block: java.lang.Object, metadataKey: string, newMetadataValue: cn.nukkit.metadata.MetadataValue): void;
            }
        }
    }
}
