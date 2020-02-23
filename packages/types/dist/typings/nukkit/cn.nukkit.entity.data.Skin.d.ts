declare namespace cn {
    namespace nukkit {
        namespace entity {
            namespace data {
                // @ts-ignore
                 class Skin extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static SINGLE_SKIN_SIZE: number;
                    // @ts-ignore
                    public static DOUBLE_SKIN_SIZE: number;
                    // @ts-ignore
                    public static SKIN_128_64_SIZE: number;
                    // @ts-ignore
                    public static SKIN_128_128_SIZE: number;
                    // @ts-ignore
                    public static GEOMETRY_CUSTOM: string;
                    // @ts-ignore
                    public static GEOMETRY_CUSTOM_SLIM: string;
                    // @ts-ignore
                    public isValid(): boolean;
                    // @ts-ignore
                    public getSkinData(): cn.nukkit.utils.SerializedImage;
                    // @ts-ignore
                    public getSkinId(): string;
                    // @ts-ignore
                    public setSkinId(skinId: string): void;
                    // @ts-ignore
                    public generateSkinId(name: string): void;
                    // @ts-ignore
                    public setSkinData(skinData: number): void;
                    // @ts-ignore
                    public setSkinData(image: java.awt.image.BufferedImage): void;
                    // @ts-ignore
                    public setSkinData(skinData: cn.nukkit.utils.SerializedImage): void;
                    // @ts-ignore
                    public setSkinResourcePatch(skinResourcePatch: string): void;
                    // @ts-ignore
                    public setGeometryName(geometryName: string): void;
                    // @ts-ignore
                    public getSkinResourcePatch(): string;
                    // @ts-ignore
                    public getCapeData(): cn.nukkit.utils.SerializedImage;
                    // @ts-ignore
                    public getCapeId(): string;
                    // @ts-ignore
                    public setCapeId(capeId: string): void;
                    // @ts-ignore
                    public setCapeData(capeData: number): void;
                    // @ts-ignore
                    public setCapeData(image: java.awt.image.BufferedImage): void;
                    // @ts-ignore
                    public setCapeData(capeData: cn.nukkit.utils.SerializedImage): void;
                    // @ts-ignore
                    public getGeometryData(): string;
                    // @ts-ignore
                    public setGeometryData(geometryData: string): void;
                    // @ts-ignore
                    public getAnimationData(): string;
                    // @ts-ignore
                    public setAnimationData(animationData: string): void;
                    // @ts-ignore
                    public getAnimations(): java.util.List;
                    // @ts-ignore
                    public isPremium(): boolean;
                    // @ts-ignore
                    public setPremium(premium: boolean): void;
                    // @ts-ignore
                    public isPersona(): boolean;
                    // @ts-ignore
                    public setPersona(persona: boolean): void;
                    // @ts-ignore
                    public isCapeOnClassic(): boolean;
                    // @ts-ignore
                    public setCapeOnClassic(capeOnClassic: boolean): void;
                    // @ts-ignore
                    public getFullSkinId(): string;
                }
            }
        }
    }
}
