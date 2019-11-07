declare namespace org {
    namespace bukkit {
        namespace map {
            // @ts-ignore
             class MapCursor extends java.lang.Object {
                /**
                 * Initialize the map cursor.
                 */
                // @ts-ignore
                constructor(x: number, y: number, direction: number, type: number, visible: boolean)
                /**
                 * Initialize the map cursor.
                 */
                // @ts-ignore
                constructor(x: number, y: number, direction: number, type: org.bukkit.map.MapCursor.Type, visible: boolean)
                /**
                 * Initialize the map cursor.
                 */
                // @ts-ignore
                constructor(x: number, y: number, direction: number, type: number, visible: boolean, caption: string)
                /**
                 * Initialize the map cursor.
                 */
                // @ts-ignore
                constructor(x: number, y: number, direction: number, type: org.bukkit.map.MapCursor.Type, visible: boolean, caption: string)
                /**
                 * Get the X position of this cursor.
                 */
                // @ts-ignore
                public getX(): number;
                /**
                 * Get the Y position of this cursor.
                 */
                // @ts-ignore
                public getY(): number;
                /**
                 * Get the direction of this cursor.
                 */
                // @ts-ignore
                public getDirection(): number;
                /**
                 * Get the type of this cursor.
                 */
                // @ts-ignore
                public getType(): org.bukkit.map.MapCursor.Type;
                /**
                 * Get the type of this cursor.
                 */
                // @ts-ignore
                public getRawType(): number;
                /**
                 * Get the visibility status of this cursor.
                 */
                // @ts-ignore
                public isVisible(): boolean;
                /**
                 * Set the X position of this cursor.
                 */
                // @ts-ignore
                public setX(x: number): void;
                /**
                 * Set the Y position of this cursor.
                 */
                // @ts-ignore
                public setY(y: number): void;
                /**
                 * Set the direction of this cursor.
                 */
                // @ts-ignore
                public setDirection(direction: number): void;
                /**
                 * Set the type of this cursor.
                 */
                // @ts-ignore
                public setType(type: org.bukkit.map.MapCursor.Type): void;
                /**
                 * Set the type of this cursor.
                 */
                // @ts-ignore
                public setRawType(type: number): void;
                /**
                 * Set the visibility status of this cursor.
                 */
                // @ts-ignore
                public setVisible(visible: boolean): void;
                /**
                 * Gets the caption on this cursor.
                 */
                // @ts-ignore
                public getCaption(): string;
                /**
                 * Sets the caption on this cursor.
                 */
                // @ts-ignore
                public setCaption(caption: string): void;
            }
        }
    }
}
