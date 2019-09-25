declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                // @ts-ignore
                 class RespawnLocation implements org.spongepowered.api.data.DataSerializable {
                    /**
                     * Creates a new {@link Builder} to build a {@link RespawnLocation}.
                     */
                    // @ts-ignore
                    public static builder(): org.spongepowered.api.util.RespawnLocation.Builder;
                    /**
                     * Gets the {@link UUID} of the world this position refers to.
                     */
                    // @ts-ignore
                    public getWorldUniqueId(): any;
                    /**
                     * Gets the position within the world of this spawn point.
                     */
                    // @ts-ignore
                    public getPosition(): any /*Vector3d*/;
                    /**
                     * Gets whether the spawn position is forced in the given world, if
                     * available. A forced position will spawn the player there even if a bed is
                     * missing or obstructed.
                     */
                    // @ts-ignore
                    public isForced(): boolean;
                    /**
                     * Gets this spawn position as a {@link Location} object, if the world is
                     * available.
                     */
                    // @ts-ignore
                    public asLocation(): any;
                    // @ts-ignore
                    public getContentVersion(): number;
                    // @ts-ignore
                    public toContainer(): org.spongepowered.api.data.DataContainer;
                    // @ts-ignore
                    public equals(o: any): boolean;
                    // @ts-ignore
                    public hashCode(): number;
                    // @ts-ignore
                    public toString(): string;
                }
            }
        }
    }
}
