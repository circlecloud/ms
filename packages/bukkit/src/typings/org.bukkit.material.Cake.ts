declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class Cake {
                constructor()
                constructor(type: org.bukkit.Material)
                constructor(type: org.bukkit.Material, data: number)
                /**
                 * Gets the number of slices eaten from this cake
                 */
                public getSlicesEaten(): number;
                /**
                 * Gets the number of slices remaining on this cake
                 */
                public getSlicesRemaining(): number;
                /**
                 * Sets the number of slices eaten from this cake
                 */
                public setSlicesEaten(n: number): void;
                /**
                 * Sets the number of slices remaining on this cake
                 */
                public setSlicesRemaining(n: number): void;
                public toString(): string;
                public clone(): org.bukkit.material.Cake;
            }
        }
    }
}
