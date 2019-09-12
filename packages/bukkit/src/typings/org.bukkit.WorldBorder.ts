declare namespace org {
    namespace bukkit {
        class WorldBorder {
            /**
             * Resets the border to default values.
             */
            public reset(): void;
            /**
             * Gets the current side length of the border.
             */
            public getSize(): number;
            /**
             * Sets the border to a square region with the specified side length in blocks.
             */
            public setSize(newSize: number): void;
            /**
             * Sets the border to a square region with the specified side length in blocks.
             */
            public setSize(newSize: number, seconds: number): void;
            /**
             * Gets the current border center.
             */
            public getCenter(): org.bukkit.Location;
            /**
             * Sets the new border center.
             */
            public setCenter(x: number, z: number): void;
            /**
             * Sets the new border center.
             */
            public setCenter(location: org.bukkit.Location): void;
            /**
             * Gets the current border damage buffer.
             */
            public getDamageBuffer(): number;
            /**
             * Sets the amount of blocks a player may safely be outside the border before taking damage.
             */
            public setDamageBuffer(blocks: number): void;
            /**
             * Gets the current border damage amount.
             */
            public getDamageAmount(): number;
            /**
             * Sets the amount of damage a player takes when outside the border plus the border buffer.
             */
            public setDamageAmount(damage: number): void;
            /**
             * Gets the current border warning time in seconds.
             */
            public getWarningTime(): number;
            /**
             * Sets the warning time that causes the screen to be tinted red when a contracting border will reach the player within the specified time.
             */
            public setWarningTime(seconds: number): void;
            /**
             * Gets the current border warning distance.
             */
            public getWarningDistance(): number;
            /**
             * Sets the warning distance that causes the screen to be tinted red when the player is within the specified number of blocks from the border.
             */
            public setWarningDistance(distance: number): void;
            /**
             * Check if the specified location is inside this border.
             */
            public isInside(location: org.bukkit.Location): boolean;
        }
    }
}
