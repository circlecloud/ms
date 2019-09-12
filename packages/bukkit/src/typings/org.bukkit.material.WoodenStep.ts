declare namespace org {
    namespace bukkit {
        namespace material {
            class WoodenStep {
                /**
                 * Constructs a wooden step.
                 */
                constructor()
                /**
                 * Constructs a wooden step of the given tree species.
                 */
                constructor(species: org.bukkit.TreeSpecies)
                /**
                 * Constructs a wooden step of the given type and tree species, either
                 * inverted or not.
                 */
                constructor(species: org.bukkit.TreeSpecies, inv: boolean)
                constructor(type: org.bukkit.Material, data: number)
                protected static DEFAULT_TYPE: org.bukkit.Material;
                protected static DEFAULT_INVERTED: boolean;
                /**
                 * Test if step is inverted
                 */
                public isInverted(): boolean;
                /**
                 * Set step inverted state
                 */
                public setInverted(inv: boolean): void;
                public clone(): org.bukkit.material.WoodenStep;
                public toString(): string;
            }
        }
    }
}
