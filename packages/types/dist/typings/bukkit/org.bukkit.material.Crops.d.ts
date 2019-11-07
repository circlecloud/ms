declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class Crops extends org.bukkit.material.MaterialData {
                /**
                 * Constructs a wheat crop block in the seeded state.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a wheat crop block in the given growth state
                 */
                // @ts-ignore
                constructor(state: org.bukkit.CropState)
                /**
                 * Constructs a crop block of the given type and in the given growth state
                 */
                // @ts-ignore
                constructor(type: org.bukkit.Material, state: org.bukkit.CropState)
                /**
                 * Constructs a crop block of the given type and in the seeded state
                 */
                // @ts-ignore
                constructor(type: org.bukkit.Material)
                // @ts-ignore
                constructor(type: org.bukkit.Material, data: number)
                // @ts-ignore
                protected static DEFAULT_TYPE: org.bukkit.Material;
                // @ts-ignore
                protected static DEFAULT_STATE: org.bukkit.CropState;
                /**
                 * Gets the current growth state of this crop
                 * For crops with only four growth states such as beetroot, only the values SEEDED, SMALL, TALL and RIPE will be
                 * returned.
                 */
                // @ts-ignore
                public getState(): org.bukkit.CropState;
                /**
                 * Sets the growth state of this crop
                 * For crops with only four growth states such as beetroot, the 8 CropStates are mapped into four states:
                 * SEEDED, SMALL, TALL and RIPE
                 * GERMINATED will change to SEEDED
                 * VERY_SMALL will change to SMALL
                 * MEDIUM will change to TALL
                 * VERY_TALL will change to RIPE
                 */
                // @ts-ignore
                public setState(state: org.bukkit.CropState): void;
                // @ts-ignore
                public toString(): string;
                // @ts-ignore
                public clone(): org.bukkit.material.Crops;
            }
        }
    }
}
