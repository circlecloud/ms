// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class WoodenStep extends org.bukkit.material.Wood {
                /**
                 * Constructs a wooden step.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a wooden step of the given tree species.
                 */
                // @ts-ignore
                constructor(species: org.bukkit.TreeSpecies)
                /**
                 * Constructs a wooden step of the given type and tree species, either
                 * inverted or not.
                 */
                // @ts-ignore
                constructor(species: org.bukkit.TreeSpecies, inv: boolean)
                // @ts-ignore
                constructor(type: org.bukkit.Material, data: number)
                // @ts-ignore
                protected static DEFAULT_TYPE: org.bukkit.Material;
                // @ts-ignore
                protected static DEFAULT_INVERTED: boolean;
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
                public clone(): org.bukkit.material.WoodenStep;
                // @ts-ignore
                public toString(): string;
            }
        }
    }
}
