declare namespace org {
    namespace bukkit {
        namespace map {
            namespace MapFont {
                // @ts-ignore
                 class CharacterSprite {
                    constructor(width: number, height: number, data: boolean)
                    /**
                     * Get the value of a pixel of the character.
                     */
                    public get(row: number, col: number): boolean;
                    /**
                     * Get the width of the character sprite.
                     */
                    public getWidth(): number;
                    /**
                     * Get the height of the character sprite.
                     */
                    public getHeight(): number;
                }
            }
        }
    }
}
