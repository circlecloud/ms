declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class Diode implements org.bukkit.material.Directional, org.bukkit.material.Redstone {
                /**
                 * Constructs a diode switched on, with a delay of 1 and facing the default
                 * direction (north).
                 * By default this constructor creates a diode that is switched on for
                 * backwards compatibility with past implementations.
                 */
                constructor()
                /**
                 * Constructs a diode switched off, with a delay of 1 and facing the
                 * specified direction.
                 */
                constructor(facingDirection: org.bukkit.block.BlockFace)
                /**
                 * Constructs a diode switched off, with the specified delay and facing the
                 * specified direction.
                 */
                constructor(facingDirection: org.bukkit.block.BlockFace, delay: number)
                /**
                 * Constructs a diode switched on or off, with the specified delay and
                 * facing the specified direction.
                 */
                constructor(facingDirection: org.bukkit.block.BlockFace, delay: number, state: boolean)
                constructor(type: org.bukkit.Material)
                constructor(type: org.bukkit.Material, data: number)
                protected static DEFAULT_DIRECTION: org.bukkit.block.BlockFace;
                protected static DEFAULT_DELAY: number;
                protected static DEFAULT_STATE: boolean;
                /**
                 * Sets the delay of the repeater.
                 */
                public setDelay(delay: number): void;
                /**
                 * Gets the delay of the repeater in ticks.
                 */
                public getDelay(): number;
                /**
                 * Sets the direction this diode is facing.
                 */
                public setFacingDirection(face: org.bukkit.block.BlockFace): void;
                /**
                 * Gets the direction this diode is facing
                 */
                public getFacing(): org.bukkit.block.BlockFace;
                public toString(): string;
                public clone(): org.bukkit.material.Diode;
                /**
                 * Checks if the diode is powered.
                 */
                public isPowered(): boolean;
            }
        }
    }
}
