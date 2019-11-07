// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                // @ts-ignore
                interface DataHolder extends org.spongepowered.api.data.DataSerializable, org.spongepowered.api.data.property.PropertyHolder, org.spongepowered.api.data.value.mutable.CompositeValueStore {
                    /**
                     * Validates the container with known data required to set the raw data to
                     * this {@link DataHolder}. If the container is incomplete or contains
                     * invalid data, <code>false</code> is returned.
                     * <p>This validation should be checked prior to calling
                     * {@link #setRawData(DataView)} to avoid exceptions.</p>
                     */
                    // @ts-ignore
                     validateRawData(container: org.spongepowered.api.data.DataView): boolean;
                    /**
                     * Attempts to set all data of this {@link DataHolder} according to the
                     * {@link DataContainer}'s held information. Using this to modify known
                     * {@link DataManipulator} is unsupported and if the data is invalid, an
                     * {@link InvalidDataException} is thrown.
                     * <p>This setter is used to provide setting custom data that is not
                     * represented by the Data API, including forge mods and other
                     * unknown data. Attempts at validating known {@link DataManipulator}s
                     * contained in the data container are made with the assumption that all
                     * necessary data exists.</p>
                     */
                    // @ts-ignore
                     setRawData(container: org.spongepowered.api.data.DataView): void;
                }
            }
        }
    }
}
