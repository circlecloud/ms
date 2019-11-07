declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface Fireball extends org.bukkit.entity.Projectile, org.bukkit.entity.Explosive {
                /**
                 * Fireballs fly straight and do not take setVelocity(...) well.
                 */
                // @ts-ignore
                 setDirection(direction: org.bukkit.util.Vector): void;
                /**
                 * Retrieve the direction this fireball is heading toward
                 */
                // @ts-ignore
                 getDirection(): org.bukkit.util.Vector;
            }
        }
    }
}
