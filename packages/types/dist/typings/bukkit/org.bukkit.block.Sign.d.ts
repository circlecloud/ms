// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace block {
            // @ts-ignore
            interface Sign extends org.bukkit.block.TileState, org.bukkit.material.Colorable {
                /**
                 * Gets all the lines of text currently on this sign.
                 */
                // @ts-ignore
                 getLines(): java.lang.String[];
                /**
                 * Gets the line of text at the specified index.
                 * <p>
                 * For example, getLine(0) will return the first line of text.
                 */
                // @ts-ignore
                 getLine(index: number): string;
                /**
                 * Sets the line of text at the specified index.
                 * <p>
                 * For example, setLine(0, "Line One") will set the first line of text to
                 * "Line One".
                 */
                // @ts-ignore
                 setLine(index: number, line: string): void;
                /**
                 * Marks whether this sign can be edited by players.
                 * <br>
                 * This is a special value, which is not persisted. It should only be set if
                 * a placed sign is manipulated during the BlockPlaceEvent. Behaviour
                 * outside of this event is undefined.
                 */
                // @ts-ignore
                 isEditable(): boolean;
                /**
                 * Marks whether this sign can be edited by players.
                 * <br>
                 * This is a special value, which is not persisted. It should only be set if
                 * a placed sign is manipulated during the BlockPlaceEvent. Behaviour
                 * outside of this event is undefined.
                 */
                // @ts-ignore
                 setEditable(editable: boolean): void;
            }
        }
    }
}
