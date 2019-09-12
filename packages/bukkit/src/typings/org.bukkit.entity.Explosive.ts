declare namespace org {
    namespace bukkit {
        namespace entity {
            class Explosive {
                /**
                 * Set the radius affected by this explosive's explosion
                 */
                public setYield(yield: number): void;
                /**
                 * Return the radius or yield of this explosive's explosion
                 */
                public getYield(): number;
                /**
                 * Set whether or not this explosive's explosion causes fire
                 */
                public setIsIncendiary(isIncendiary: boolean): void;
                /**
                 * Return whether or not this explosive creates a fire when exploding
                 */
                public isIncendiary(): boolean;
            }
        }
    }
}
