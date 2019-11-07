// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface Explosive extends org.bukkit.entity.Entity {
                /**
                 * Set the radius affected by this explosive's explosion
                 */
                // @ts-ignore
                 setYield(yield: number): void;
                /**
                 * Return the radius or yield of this explosive's explosion
                 */
                // @ts-ignore
                 getYield(): number;
                /**
                 * Set whether or not this explosive's explosion causes fire
                 */
                // @ts-ignore
                 setIsIncendiary(isIncendiary: boolean): void;
                /**
                 * Return whether or not this explosive creates a fire when exploding
                 */
                // @ts-ignore
                 isIncendiary(): boolean;
            }
        }
    }
}
