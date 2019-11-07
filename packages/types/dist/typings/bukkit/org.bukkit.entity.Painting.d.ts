declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface Painting extends org.bukkit.entity.Hanging {
                /**
                 * Get the art on this painting
                 */
                // @ts-ignore
                 getArt(): org.bukkit.Art;
                /**
                 * Set the art on this painting
                 */
                // @ts-ignore
                 setArt(art: org.bukkit.Art): boolean;
                /**
                 * Set the art on this painting
                 */
                // @ts-ignore
                 setArt(art: org.bukkit.Art, force: boolean): boolean;
            }
        }
    }
}
