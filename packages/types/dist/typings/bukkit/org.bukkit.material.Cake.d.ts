declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class Cake extends org.bukkit.material.MaterialData {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(type: org.bukkit.Material)
                // @ts-ignore
                constructor(type: org.bukkit.Material, data: number)
                /**
                 * Gets the number of slices eaten from this cake
                 */
                // @ts-ignore
                public getSlicesEaten(): number;
                /**
                 * Gets the number of slices remaining on this cake
                 */
                // @ts-ignore
                public getSlicesRemaining(): number;
                /**
                 * Sets the number of slices eaten from this cake
                 */
                // @ts-ignore
                public setSlicesEaten(n: number): void;
                /**
                 * Sets the number of slices remaining on this cake
                 */
                // @ts-ignore
                public setSlicesRemaining(n: number): void;
                // @ts-ignore
                public toString(): string;
                // @ts-ignore
                public clone(): org.bukkit.material.Cake;
            }
        }
    }
}
