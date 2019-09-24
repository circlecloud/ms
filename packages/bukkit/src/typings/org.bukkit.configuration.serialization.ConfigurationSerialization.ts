declare namespace org {
    namespace bukkit {
        namespace configuration {
            namespace serialization {
                // @ts-ignore
                 class ConfigurationSerialization {
                    constructor(clazz: any)
                    public static SERIALIZED_TYPE_KEY: string;
                    protected getMethod(name: string, isStatic: boolean): any;
                    protected getConstructor(): any;
                    protected deserializeViaMethod(method: any, args: Map<any, any> /*java.util.Map*/): org.bukkit.configuration.serialization.ConfigurationSerializable;
                    protected deserializeViaCtor(ctor: any, args: Map<any, any> /*java.util.Map*/): org.bukkit.configuration.serialization.ConfigurationSerializable;
                    public deserialize(args: Map<any, any> /*java.util.Map*/): org.bukkit.configuration.serialization.ConfigurationSerializable;
                    /**
                     * Attempts to deserialize the given arguments into a new instance of the
                     * given class.
                     * <p>
                     * The class must implement {@link ConfigurationSerializable}, including
                     * the extra methods as specified in the javadoc of
                     * ConfigurationSerializable.
                     * <p>
                     * If a new instance could not be made, an example being the class not
                     * fully implementing the interface, null will be returned.
                     */
                    public static deserializeObject(args: Map<any, any> /*java.util.Map*/, clazz: any): org.bukkit.configuration.serialization.ConfigurationSerializable;
                    /**
                     * Attempts to deserialize the given arguments into a new instance of the
                     * given class.
                     * <p>
                     * The class must implement {@link ConfigurationSerializable}, including
                     * the extra methods as specified in the javadoc of
                     * ConfigurationSerializable.
                     * <p>
                     * If a new instance could not be made, an example being the class not
                     * fully implementing the interface, null will be returned.
                     */
                    public static deserializeObject(args: Map<any, any> /*java.util.Map*/): org.bukkit.configuration.serialization.ConfigurationSerializable;
                    /**
                     * Registers the given {@link ConfigurationSerializable} class by its
                     * alias
                     */
                    public static registerClass(clazz: any): void;
                    /**
                     * Registers the given alias to the specified {@link
                     * ConfigurationSerializable} class
                     */
                    public static registerClass(clazz: any, alias: string): void;
                    /**
                     * Unregisters the specified alias to a {@link ConfigurationSerializable}
                     */
                    public static unregisterClass(alias: string): void;
                    /**
                     * Unregisters any aliases for the specified {@link
                     * ConfigurationSerializable} class
                     */
                    public static unregisterClass(clazz: any): void;
                    /**
                     * Attempts to get a registered {@link ConfigurationSerializable} class by
                     * its alias
                     */
                    public static getClassByAlias(alias: string): any;
                    /**
                     * Gets the correct alias for the given {@link ConfigurationSerializable}
                     * class
                     */
                    public static getAlias(clazz: any): string;
                }
            }
        }
    }
}
