declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class Diode extends org.bukkit.material.MaterialData implements org.bukkit.material.Directional, org.bukkit.material.Redstone {
                /**
                 * Constructs a diode switched on, with a delay of 1 and facing the default
                 * direction (north).
                 * By default this constructor creates a diode that is switched on for
                 * backwards compatibility with past implementations.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a diode switched off, with a delay of 1 and facing the
                 * specified direction.
                 */
                // @ts-ignore
                constructor(facingDirection: org.bukkit.block.BlockFace)
                /**
                 * Constructs a diode switched off, with the specified delay and facing the
                 * specified direction.
                 */
                // @ts-ignore
                constructor(facingDirection: org.bukkit.block.BlockFace, delay: number)
                /**
                 * Constructs a diode switched on or off, with the specified delay and
                 * facing the specified direction.
                 */
                // @ts-ignore
                constructor(facingDirection: org.bukkit.block.BlockFace, delay: number, state: boolean)
                // @ts-ignore
                constructor(type: org.bukkit.Material)
                // @ts-ignore
                constructor(type: org.bukkit.Material, data: number)
                // @ts-ignore
                protected static DEFAULT_DIRECTION: org.bukkit.block.BlockFace;
                // @ts-ignore
                protected static DEFAULT_DELAY: number;
                // @ts-ignore
                protected static DEFAULT_STATE: boolean;
                /**
                 * Sets the delay of the repeater.
                 */
                // @ts-ignore
                public setDelay(delay: number): void;
                /**
                 * Gets the delay of the repeater in ticks.
                 */
                // @ts-ignore
                public getDelay(): number;
                /**
                 * Sets the direction this diode is facing.
                 */
                // @ts-ignore
                public setFacingDirection(face: org.bukkit.block.BlockFace): void;
                /**
                 * Gets the direction this diode is facing
                 */
                // @ts-ignore
                public getFacing(): org.bukkit.block.BlockFace;
                // @ts-ignore
                public toString(): string;
                // @ts-ignore
                public clone(): org.bukkit.material.Diode;
                /**
                 * Checks if the diode is powered.
                 */
                // @ts-ignore
                public isPowered(): boolean;
            }
        }
    }
}
