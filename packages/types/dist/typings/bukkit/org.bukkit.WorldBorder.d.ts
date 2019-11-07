// @ts-nocheck
declare namespace org {
    namespace bukkit {
        // @ts-ignore
        interface WorldBorder {
            /**
             * Resets the border to default values.
             */
            // @ts-ignore
             reset(): void;
            /**
             * Gets the current side length of the border.
             */
            // @ts-ignore
             getSize(): number;
            /**
             * Sets the border to a square region with the specified side length in blocks.
             */
            // @ts-ignore
             setSize(newSize: number): void;
            /**
             * Sets the border to a square region with the specified side length in blocks.
             */
            // @ts-ignore
             setSize(newSize: number, seconds: number): void;
            /**
             * Gets the current border center.
             */
            // @ts-ignore
             getCenter(): org.bukkit.Location;
            /**
             * Sets the new border center.
             */
            // @ts-ignore
             setCenter(x: number, z: number): void;
            /**
             * Sets the new border center.
             */
            // @ts-ignore
             setCenter(location: org.bukkit.Location): void;
            /**
             * Gets the current border damage buffer.
             */
            // @ts-ignore
             getDamageBuffer(): number;
            /**
             * Sets the amount of blocks a player may safely be outside the border before taking damage.
             */
            // @ts-ignore
             setDamageBuffer(blocks: number): void;
            /**
             * Gets the current border damage amount.
             */
            // @ts-ignore
             getDamageAmount(): number;
            /**
             * Sets the amount of damage a player takes when outside the border plus the border buffer.
             */
            // @ts-ignore
             setDamageAmount(damage: number): void;
            /**
             * Gets the current border warning time in seconds.
             */
            // @ts-ignore
             getWarningTime(): number;
            /**
             * Sets the warning time that causes the screen to be tinted red when a contracting border will reach the player within the specified time.
             */
            // @ts-ignore
             setWarningTime(seconds: number): void;
            /**
             * Gets the current border warning distance.
             */
            // @ts-ignore
             getWarningDistance(): number;
            /**
             * Sets the warning distance that causes the screen to be tinted red when the player is within the specified number of blocks from the border.
             */
            // @ts-ignore
             setWarningDistance(distance: number): void;
            /**
             * Check if the specified location is inside this border.
             */
            // @ts-ignore
             isInside(location: org.bukkit.Location): boolean;
        }
    }
}
