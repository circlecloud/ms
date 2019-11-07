declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                // @ts-ignore
                interface WorldBorder {
                    /**
                     * Creates a new {@link Builder} instance for making {@link WorldBorder}s.
                     */
                    // @ts-ignore
                     builder(): org.spongepowered.api.world.WorldBorder.Builder;
                    /**
                     * Gets the diameter the world border is expanding or contracting to.
                     * <p>This will return the same value as {@link #getDiameter} unless
                     * {@link #getTimeRemaining} is greater than 0.</p>
                     */
                    // @ts-ignore
                     getNewDiameter(): number;
                    /**
                     * Gets the diameter of the world border.
                     * <p>The returned diameter applies to the x and z axis. The world border
                     * extends over the entire y-axis.</p>
                     */
                    // @ts-ignore
                     getDiameter(): number;
                    /**
                     * Sets the diameter of the world border.
                     * <p>The specified diameter applies to the x and z axis. The world border
                     * extends over the entire y-axis.</p>
                     */
                    // @ts-ignore
                     setDiameter(diameter: number): void;
                    /**
                     * Sets the diameter of the world border, over the given period of time.
                     * <p>The world border diameter increases/decrease linearly over the
                     * specified time. The specified diameter applies to the x and z axis. The
                     * world border extends over the entire y-axis.</p>
                     */
                    // @ts-ignore
                     setDiameter(diameter: number, time: number): void;
                    /**
                     * Sets the starting diameter and the ending diameter of the world border,
                     * over the given period of time.
                     * <p>The world border diameter increases/diameter linearly over the
                     * specified time. The specified diameter applies to the x and z axis. The
                     * world border extends over the entire y-axis.</p>
                     */
                    // @ts-ignore
                     setDiameter(startDiameter: number, endDiameter: number, time: number): void;
                    /**
                     * Gets the time remaining until the world border stops expanding or
                     * contracting.
                     */
                    // @ts-ignore
                     getTimeRemaining(): number;
                    /**
                     * Sets the center of the world border.
                     */
                    // @ts-ignore
                     setCenter(x: number, z: number): void;
                    /**
                     * Gets the center of the world border.
                     * <p>The returned position is three-dimensional. As the world border
                     * extends over the entire y-axis, the returned position will always have a
                     * {@code y} set to 0.</p>
                     */
                    // @ts-ignore
                     getCenter(): any /*Vector3d*/;
                    /**
                     * Gets the time when a contracting world border will warn a player for whom
                     * the world border will reach in {@code time} seconds.
                     * <p>In Minecraft, the warning is displayed in the form of a reddish
                     * tint.</p>
                     */
                    // @ts-ignore
                     getWarningTime(): number;
                    /**
                     * Sets the time when a contracting world border will warn a player for whom
                     * the world border will reach in {@code time} seconds.
                     * <p>In Minecraft, the warning is displayed in the form of a reddish
                     * tint.</p>
                     */
                    // @ts-ignore
                     setWarningTime(time: number): void;
                    /**
                     * Gets the distance when a contracting world border will warn a player for
                     * whom the world border is {@code distance} blocks away.
                     * <p>In Minecraft, the warning is displayed in the form of a reddish
                     * tint.</p>
                     */
                    // @ts-ignore
                     getWarningDistance(): number;
                    /**
                     * Sets the distance when a contracting world border will warn a player for
                     * whom the world border is {@code distance} blocks away.
                     * <p>In Minecraft, the warning is displayed in the form of a reddish
                     * tint.</p>
                     */
                    // @ts-ignore
                     setWarningDistance(distance: number): void;
                    /**
                     * Gets the distance a player may be outside the world border before taking
                     * damage.
                     */
                    // @ts-ignore
                     getDamageThreshold(): number;
                    /**
                     * Sets the distance a player may be be outside the world border before
                     * taking damage.
                     */
                    // @ts-ignore
                     setDamageThreshold(distance: number): void;
                    /**
                     * Gets the damage done to a player per block per tick when outside the
                     * buffer.
                     */
                    // @ts-ignore
                     getDamageAmount(): number;
                    /**
                     * Sets the damage done to a player per block per tick when outside the
                     * buffer.
                     */
                    // @ts-ignore
                     setDamageAmount(damage: number): void;
                    /**
                     * Returns a new builder for creating a task to pre-generate the chunks
                     * inside the border. The current state of the border is "snapshotted" for
                     * the builder. It is not backed by this instance. If the border size is
                     * changing then the target size is used.
                     */
                    // @ts-ignore
                     newChunkPreGenerate(world: org.spongepowered.api.world.World): org.spongepowered.api.world.ChunkPreGenerate.Builder;
                    /**
                     * Copies the properties of the passed border onto this border.
                     */
                    // @ts-ignore
                     copyPropertiesFrom(border: org.spongepowered.api.world.WorldBorder): void;
                }
            }
        }
    }
}
