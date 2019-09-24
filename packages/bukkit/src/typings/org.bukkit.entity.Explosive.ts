declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface Explosive extends org.bukkit.entity.Entity {
                /**
                 * Set the radius affected by this explosive's explosion
                 */
                 setYield(yield: number): void;
                /**
                 * Return the radius or yield of this explosive's explosion
                 */
                 getYield(): number;
                /**
                 * Set whether or not this explosive's explosion causes fire
                 */
                 setIsIncendiary(isIncendiary: boolean): void;
                /**
                 * Return whether or not this explosive creates a fire when exploding
                 */
                 isIncendiary(): boolean;
            }
        }
    }
}
