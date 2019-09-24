declare namespace org {
    namespace bukkit {
        // @ts-ignore
        interface WorldBorder {
            /**
             * Resets the border to default values.
             */
             reset(): void;
            /**
             * Gets the current side length of the border.
             */
             getSize(): number;
            /**
             * Sets the border to a square region with the specified side length in blocks.
             */
             setSize(newSize: number): void;
            /**
             * Sets the border to a square region with the specified side length in blocks.
             */
             setSize(newSize: number, seconds: number): void;
            /**
             * Gets the current border center.
             */
             getCenter(): org.bukkit.Location;
            /**
             * Sets the new border center.
             */
             setCenter(x: number, z: number): void;
            /**
             * Sets the new border center.
             */
             setCenter(location: org.bukkit.Location): void;
            /**
             * Gets the current border damage buffer.
             */
             getDamageBuffer(): number;
            /**
             * Sets the amount of blocks a player may safely be outside the border before taking damage.
             */
             setDamageBuffer(blocks: number): void;
            /**
             * Gets the current border damage amount.
             */
             getDamageAmount(): number;
            /**
             * Sets the amount of damage a player takes when outside the border plus the border buffer.
             */
             setDamageAmount(damage: number): void;
            /**
             * Gets the current border warning time in seconds.
             */
             getWarningTime(): number;
            /**
             * Sets the warning time that causes the screen to be tinted red when a contracting border will reach the player within the specified time.
             */
             setWarningTime(seconds: number): void;
            /**
             * Gets the current border warning distance.
             */
             getWarningDistance(): number;
            /**
             * Sets the warning distance that causes the screen to be tinted red when the player is within the specified number of blocks from the border.
             */
             setWarningDistance(distance: number): void;
            /**
             * Check if the specified location is inside this border.
             */
             isInside(location: org.bukkit.Location): boolean;
        }
    }
}
