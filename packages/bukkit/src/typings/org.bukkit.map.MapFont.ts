declare namespace org {
    namespace bukkit {
        namespace map {
            class MapFont {
                constructor()
                protected malleable: boolean;
                /**
                 * Set the sprite for a given character.
                 */
                public setChar(ch: string, sprite: org.bukkit.map.MapFont.CharacterSprite): void;
                /**
                 * Get the sprite for a given character.
                 */
                public getChar(ch: string): org.bukkit.map.MapFont.CharacterSprite;
                /**
                 * Get the width of the given text as it would be rendered using this
                 * font.
                 */
                public getWidth(text: string): number;
                /**
                 * Get the height of this font.
                 */
                public getHeight(): number;
                /**
                 * Check whether the given text is valid.
                 */
                public isValid(text: string): boolean;
            }
        }
    }
}
