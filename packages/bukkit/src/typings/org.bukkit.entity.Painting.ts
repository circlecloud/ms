declare namespace org {
    namespace bukkit {
        namespace entity {
            class Painting {
                /**
                 * Get the art on this painting
                 */
                public getArt(): org.bukkit.Art;
                /**
                 * Set the art on this painting
                 */
                public setArt(art: org.bukkit.Art): boolean;
                /**
                 * Set the art on this painting
                 */
                public setArt(art: org.bukkit.Art, force: boolean): boolean;
            }
        }
    }
}
