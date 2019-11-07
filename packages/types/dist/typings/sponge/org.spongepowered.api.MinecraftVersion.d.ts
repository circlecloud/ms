declare namespace org {
    namespace spongepowered {
        namespace api {
            // @ts-ignore
            interface MinecraftVersion {
                /**
                 * Gets the name of this Minecraft version.
                 * <p>
                 * <strong>Note:</strong> The returned name does not necessarily represent
                 * the name of a Minecraft version. Depending on the client and
                 * implementation, this may also just return a numeric value.
                 * </p>
                 */
                // @ts-ignore
                 getName(): string;
                /**
                 * Returns whether this version is an older version that doesn't support
                 * all of the features in {@link StatusResponse}. These versions are only
                 * supported for the {@link ClientPingServerEvent}, normally they should not be
                 * able to join the server.
                 * <p>
                 * For Vanilla, this returns {@code true} for all clients older than 1.7.
                 * </p>
                 */
                // @ts-ignore
                 isLegacy(): boolean;
            }
        }
    }
}
