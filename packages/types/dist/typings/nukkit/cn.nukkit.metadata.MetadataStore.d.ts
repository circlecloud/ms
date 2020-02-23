declare namespace cn {
    namespace nukkit {
        namespace metadata {
            // @ts-ignore
            abstract class MetadataStore extends java.lang.Object {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public setMetadata(subject: java.lang.Object, metadataKey: string, newMetadataValue: cn.nukkit.metadata.MetadataValue): void;
                // @ts-ignore
                public getMetadata(subject: java.lang.Object, metadataKey: string): java.util.List;
                // @ts-ignore
                public hasMetadata(subject: java.lang.Object, metadataKey: string): boolean;
                // @ts-ignore
                public removeMetadata(subject: java.lang.Object, metadataKey: string, owningPlugin: cn.nukkit.plugin.Plugin): void;
                // @ts-ignore
                public invalidateAll(owningPlugin: cn.nukkit.plugin.Plugin): void;
                // @ts-ignore
                protected abstract disambiguate(subject: cn.nukkit.metadata.Metadatable, metadataKey: string): string;
            }
        }
    }
}
