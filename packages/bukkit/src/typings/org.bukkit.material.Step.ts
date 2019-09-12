declare namespace org {
    namespace bukkit {
        namespace material {
            class Step {
                constructor()
                constructor(type: org.bukkit.Material)
                constructor(type: org.bukkit.Material, data: number)
                public getTextures(): any[] /*java.util.List*/;
                /**
                 * Test if step is inverted
                 */
                public isInverted(): boolean;
                /**
                 * Set step inverted state
                 */
                public setInverted(inv: boolean): void;
                protected getTextureIndex(): number;
                protected setTextureIndex(idx: number): void;
                public clone(): org.bukkit.material.Step;
                public toString(): string;
            }
        }
    }
}
