declare namespace org {
    namespace bukkit {
        namespace configuration {
            namespace serialization {
                class ConfigurationSerializable {
                    /**
                     * Creates a Map representation of this class.
                     * <p>
                     * This class must provide a method to restore this class, as defined in
                     * the {@link ConfigurationSerializable} interface javadocs.
                     */
                    public serialize(): Map<any, any> /*java.util.Map*/;
                }
            }
        }
    }
}
