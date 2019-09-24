declare namespace org {
    namespace bukkit {
        namespace map {
            // @ts-ignore
             class MapCursor {
                /**
                 * Initialize the map cursor.
                 */
                constructor(x: number, y: number, direction: number, type: number, visible: boolean)
                /**
                 * Initialize the map cursor.
                 */
                constructor(x: number, y: number, direction: number, type: org.bukkit.map.MapCursor.Type, visible: boolean)
                /**
                 * Initialize the map cursor.
                 */
                constructor(x: number, y: number, direction: number, type: number, visible: boolean, caption: string)
                /**
                 * Initialize the map cursor.
                 */
                constructor(x: number, y: number, direction: number, type: org.bukkit.map.MapCursor.Type, visible: boolean, caption: string)
                /**
                 * Get the X position of this cursor.
                 */
                public getX(): number;
                /**
                 * Get the Y position of this cursor.
                 */
                public getY(): number;
                /**
                 * Get the direction of this cursor.
                 */
                public getDirection(): number;
                /**
                 * Get the type of this cursor.
                 */
                public getType(): org.bukkit.map.MapCursor.Type;
                /**
                 * Get the type of this cursor.
                 */
                public getRawType(): number;
                /**
                 * Get the visibility status of this cursor.
                 */
                public isVisible(): boolean;
                /**
                 * Set the X position of this cursor.
                 */
                public setX(x: number): void;
                /**
                 * Set the Y position of this cursor.
                 */
                public setY(y: number): void;
                /**
                 * Set the direction of this cursor.
                 */
                public setDirection(direction: number): void;
                /**
                 * Set the type of this cursor.
                 */
                public setType(type: org.bukkit.map.MapCursor.Type): void;
                /**
                 * Set the type of this cursor.
                 */
                public setRawType(type: number): void;
                /**
                 * Set the visibility status of this cursor.
                 */
                public setVisible(visible: boolean): void;
                /**
                 * Gets the caption on this cursor.
                 */
                public getCaption(): string;
                /**
                 * Sets the caption on this cursor.
                 */
                public setCaption(caption: string): void;
            }
        }
    }
}
