// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface Pig extends org.bukkit.entity.Animals, org.bukkit.entity.Vehicle {
                /**
                 * Check if the pig has a saddle.
                 */
                // @ts-ignore
                 hasSaddle(): boolean;
                /**
                 * Sets if the pig has a saddle or not
                 */
                // @ts-ignore
                 setSaddle(saddled: boolean): void;
            }
        }
    }
}
