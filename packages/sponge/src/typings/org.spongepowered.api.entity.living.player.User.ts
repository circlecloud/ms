declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace living {
                    namespace player {
                        // @ts-ignore
                        interface User extends org.spongepowered.api.data.DataHolder, org.spongepowered.api.entity.ArmorEquipable, org.spongepowered.api.entity.Tamer, org.spongepowered.api.service.permission.Subject {
                            /**
                             * Gets the associated {@link GameProfile} of this player.
                             */
                            // @ts-ignore
                             getProfile(): org.spongepowered.api.profile.GameProfile;
                            /**
                             * Gets the player's last known username.
                             */
                            // @ts-ignore
                             getName(): string;
                            /**
                             * Checks if this user is online or not.
                             */
                            // @ts-ignore
                             isOnline(): boolean;
                            /**
                             * Gets the related online {@link Player} if the player is
                             * in fact online.
                             */
                            // @ts-ignore
                             getPlayer(): any;
                            /**
                             * Gets the position of this User
                             */
                            // @ts-ignore
                             getPosition(): any /*Vector3d*/;
                            /**
                             * Gets the World UUID of this User.
                             * <p>May return empty when the world the player is in does not exist anymore</p>
                             */
                            // @ts-ignore
                             getWorldUniqueId(): any;
                            /**
                             * Sets the position and world of this User.
                             * <p>The UUID must belong to an existing world.</p>
                             * <p>When the User {@link #isOnline()} this redirects to {@link Entity#setLocation(Location)}</p>
                             */
                            // @ts-ignore
                             setLocation(position: any /*Vector3d*/, world: any): boolean;
                            /**
                             * Sets the rotation of this entity.
                             * <p>The format of the rotation is represented by:</p>
                             * <p>{@code x -> pitch}, {@code y -> yaw}, {@code z -> roll}</p>
                             */
                            // @ts-ignore
                             setRotation(rotation: any /*Vector3d*/): void;
                            /**
                             * Gets the rotation.
                             * <p>The format of the rotation is represented by:</p>
                             * <p>{@code x -> pitch}, {@code y -> yaw}, {@code z -> roll}</p>
                             */
                            // @ts-ignore
                             getRotation(): any /*Vector3d*/;
                            /**
                             * Gets a copy of the {@link StatisticData} for this user.
                             */
                            // @ts-ignore
                             getStatisticData(): org.spongepowered.api.data.manipulator.mutable.entity.StatisticData;
                            /**
                             * Gets the {@link Inventory} available for this Player's shared {@link EnderChest}
                             * contents.
                             */
                            // @ts-ignore
                             getEnderChestInventory(): org.spongepowered.api.item.inventory.Inventory;
                        }
                    }
                }
            }
        }
    }
}
