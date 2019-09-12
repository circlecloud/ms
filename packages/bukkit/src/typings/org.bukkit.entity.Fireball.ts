declare namespace org {
    namespace bukkit {
        namespace entity {
            class Fireball {
                /**
                 * Fireballs fly straight and do not take setVelocity(...) well.
                 */
                public setDirection(direction: org.bukkit.util.Vector): void;
                /**
                 * Retrieve the direction this fireball is heading toward
                 */
                public getDirection(): org.bukkit.util.Vector;
            }
        }
    }
}
