declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace profile {
                // @ts-ignore
                interface GameProfile extends org.spongepowered.api.util.Identifiable, org.spongepowered.api.data.DataSerializable {
                    /**
                     * Creates a {@link GameProfile} from the provided ID.
                     * <p>The name of the created profile will be {@code null}.</p>
                     */
                    // @ts-ignore
                     of(uniqueId: java.util.UUID): org.spongepowered.api.profile.GameProfile;
                    /**
                     * Creates a {@link GameProfile} from the provided ID and name.
                     */
                    // @ts-ignore
                     of(uniqueId: java.util.UUID, name: string): org.spongepowered.api.profile.GameProfile;
                    /**
                     * Gets the name associated with this profile.
                     */
                    // @ts-ignore
                     getName(): java.util.Optional;
                    /**
                     * Gets the property map for this profile.
                     * <p>This is a mutable map.</p>
                     */
                    // @ts-ignore
                     getPropertyMap(): any;
                    /**
                     * Adds a profile property to this game profile.
                     * <p>The {@link ProfileProperty#getName() name} of the property is used when
                     * adding the profile property to the {@link #getPropertyMap() property map}.</p>
                     */
                    // @ts-ignore
                     addProperty(property: org.spongepowered.api.profile.property.ProfileProperty): org.spongepowered.api.profile.GameProfile;
                    /**
                     * Adds a profile property to this game profile.
                     */
                    // @ts-ignore
                     addProperty(name: string, property: org.spongepowered.api.profile.property.ProfileProperty): org.spongepowered.api.profile.GameProfile;
                    /**
                     * Removes a profile property to this game profile.
                     * <p>The {@link ProfileProperty#getName() name} of the property is used when
                     * removing the profile property from the {@link #getPropertyMap() property map}.</p>
                     */
                    // @ts-ignore
                     removeProperty(property: org.spongepowered.api.profile.property.ProfileProperty): boolean;
                    /**
                     * Removes a profile property to this game profile.
                     */
                    // @ts-ignore
                     removeProperty(name: string, property: org.spongepowered.api.profile.property.ProfileProperty): boolean;
                    /**
                     * Checks if this profile is filled.
                     * <p>A filled profile contains both a unique id and name.</p>
                     */
                    // @ts-ignore
                     isFilled(): boolean;
                }
            }
        }
    }
}
