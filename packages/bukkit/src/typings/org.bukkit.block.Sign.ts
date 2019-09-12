declare namespace org {
    namespace bukkit {
        namespace block {
            class Sign {
                /**
                 * Gets all the lines of text currently on this sign.
                 */
                public getLines(): any;
                /**
                 * Gets the line of text at the specified index.
                 * <p>
                 * For example, getLine(0) will return the first line of text.
                 */
                public getLine(index: number): string;
                /**
                 * Sets the line of text at the specified index.
                 * <p>
                 * For example, setLine(0, "Line One") will set the first line of text to
                 * "Line One".
                 */
                public setLine(index: number, line: string): void;
                /**
                 * Marks whether this sign can be edited by players.
                 * <br>
                 * This is a special value, which is not persisted. It should only be set if
                 * a placed sign is manipulated during the BlockPlaceEvent. Behaviour
                 * outside of this event is undefined.
                 */
                public isEditable(): boolean;
                /**
                 * Marks whether this sign can be edited by players.
                 * <br>
                 * This is a special value, which is not persisted. It should only be set if
                 * a placed sign is manipulated during the BlockPlaceEvent. Behaviour
                 * outside of this event is undefined.
                 */
                public setEditable(editable: boolean): void;
            }
        }
    }
}
