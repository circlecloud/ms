// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace map {
            // @ts-ignore
             class MapFont extends java.lang.Object {
                // @ts-ignore
                constructor()
                // @ts-ignore
                protected malleable: boolean;
                /**
                 * Set the sprite for a given character.
                 */
                // @ts-ignore
                public setChar(ch: string, sprite: org.bukkit.map.MapFont.CharacterSprite): void;
                /**
                 * Get the sprite for a given character.
                 */
                // @ts-ignore
                public getChar(ch: string): org.bukkit.map.MapFont.CharacterSprite;
                /**
                 * Get the width of the given text as it would be rendered using this
                 * font.
                 */
                // @ts-ignore
                public getWidth(text: string): number;
                /**
                 * Get the height of this font.
                 */
                // @ts-ignore
                public getHeight(): number;
                /**
                 * Check whether the given text is valid.
                 */
                // @ts-ignore
                public isValid(text: string): boolean;
            }
        }
    }
}
