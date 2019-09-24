declare namespace org {
    namespace bukkit {
        namespace Particle {
            // @ts-ignore
             class DustOptions {
                constructor(color: org.bukkit.Color, size: number)
                /**
                 * The color of the particles to be displayed.
                 */
                public getColor(): org.bukkit.Color;
                /**
                 * Relative size of the particle.
                 */
                public getSize(): number;
            }
        }
    }
}
