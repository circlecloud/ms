// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class Step extends org.bukkit.material.TexturedMaterial {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(type: org.bukkit.Material)
                // @ts-ignore
                constructor(type: org.bukkit.Material, data: number)
                // @ts-ignore
                public getTextures(): java.util.List;
                /**
                 * Test if step is inverted
                 */
                // @ts-ignore
                public isInverted(): boolean;
                /**
                 * Set step inverted state
                 */
                // @ts-ignore
                public setInverted(inv: boolean): void;
                // @ts-ignore
                protected getTextureIndex(): number;
                // @ts-ignore
                protected setTextureIndex(idx: number): void;
                // @ts-ignore
                public clone(): org.bukkit.material.Step;
                // @ts-ignore
                public toString(): string;
            }
        }
    }
}
