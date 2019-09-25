declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace property {
                    // @ts-ignore
                    interface LocationBasePropertyHolder {
                        /**
                         * Attempts to retrieve a specific {@link Property} type of the block at the
                         * specific location. If the property is not applicable,
                         * {@link Optional#empty()} is returned.
                         * <p>{@link Property}s can define various immutable information about a
                         * {@link PropertyHolder} that is dependent on the instance of the holder.
                         * As {@link Property}s cannot be changed, the {@link PropertyHolder} can
                         * not change the information about it's own properties either.</p>
                         */
                        // @ts-ignore
                         getProperty(coords: any /*Vector3i*/, propertyClass: any): any;
                        /**
                         * Attempts to retrieve a specific {@link Property} type of this
                         * {@link PropertyHolder}. If the property is not applicable,
                         * {@link Optional#empty()} is returned.
                         * <p>{@link Property}s can define various immutable information about a
                         * {@link PropertyHolder} that is dependent on the instance of the holder.
                         * As {@link Property}s cannot be changed, the {@link PropertyHolder} can
                         * not change the information about it's own properties either.</p>
                         */
                        // @ts-ignore
                         getProperty(x: number, y: number, z: number, propertyClass: any): any;
                        /**
                         * Attempts to retrieve a specific {@link Property} type of the block at the
                         * specific location on the given block face. If the property is not
                         * applicable, {@link Optional#empty()} is returned.
                         * <p>{@link Property}s can define various immutable information about a
                         * {@link PropertyHolder} that is dependent on the instance of the holder.
                         * As {@link Property}s cannot be changed, the {@link PropertyHolder} can
                         * not change the information about it's own properties either.</p>
                         */
                        // @ts-ignore
                         getProperty(coords: any /*Vector3i*/, direction: org.spongepowered.api.util.Direction, propertyClass: any): any;
                        /**
                         * Attempts to retrieve a specific {@link Property} type of the block at the
                         * specific location on the given block face. If the property is not
                         * applicable, {@link Optional#empty()} is returned.
                         * <p>{@link Property}s can define various immutable information about a
                         * {@link PropertyHolder} that is dependent on the instance of the holder.
                         * As {@link Property}s cannot be changed, the {@link PropertyHolder} can
                         * not change the information about it's own properties either.</p>
                         */
                        // @ts-ignore
                         getProperty(x: number, y: number, z: number, direction: org.spongepowered.api.util.Direction, propertyClass: any): any;
                        /**
                         * Gets an immutable collection of all known {@link Property}s pertaining to
                         * this {@link PropertyHolder}.
                         * <p>{@link Property}s can not be changed such that the property is
                         * attached to the instance of the residing {@link PropertyHolder}.</p>
                         */
                        // @ts-ignore
                         getProperties(coords: any /*Vector3i*/): any[] /*java.util.Collection*/;
                        /**
                         * Gets an immutable collection of all known {@link Property}s pertaining to
                         * this {@link PropertyHolder}.
                         * <p>{@link Property}s can not be changed such that the property is
                         * attached to the instance of the residing {@link PropertyHolder}.</p>
                         */
                        // @ts-ignore
                         getProperties(x: number, y: number, z: number): any[] /*java.util.Collection*/;
                        /**
                         * Gets all the faces of this block that have the given property.
                         */
                        // @ts-ignore
                         getFacesWithProperty(coords: any /*Vector3i*/, propertyClass: any): any[] /*java.util.Collection*/;
                        /**
                         * Gets all the faces of this block that have the given property.
                         */
                        // @ts-ignore
                         getFacesWithProperty(x: number, y: number, z: number, propertyClass: any): any[] /*java.util.Collection*/;
                    }
                }
            }
        }
    }
}
