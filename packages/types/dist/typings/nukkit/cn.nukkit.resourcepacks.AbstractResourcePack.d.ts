declare namespace cn {
    namespace nukkit {
        namespace resourcepacks {
            // @ts-ignore
            abstract class AbstractResourcePack extends java.lang.Object implements cn.nukkit.resourcepacks.ResourcePack {
                // @ts-ignore
                constructor()
                // @ts-ignore
                protected manifest: JsonObject;
                // @ts-ignore
                protected verifyManifest(): boolean;
                // @ts-ignore
                public getPackName(): string;
                // @ts-ignore
                public getPackId(): java.util.UUID;
                // @ts-ignore
                public getPackVersion(): string;
            }
        }
    }
}
