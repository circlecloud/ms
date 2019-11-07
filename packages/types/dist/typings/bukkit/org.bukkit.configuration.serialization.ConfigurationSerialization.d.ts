declare namespace org {
    namespace bukkit {
        namespace configuration {
            namespace serialization {
                // @ts-ignore
                 class ConfigurationSerialization extends java.lang.Object {
                    // @ts-ignore
                    constructor(clazz: java.lang.Class)
                    // @ts-ignore
                    public static SERIALIZED_TYPE_KEY: string;
                    // @ts-ignore
                    protected getMethod(name: string, isStatic: boolean): java.lang.reflect.Method;
                    // @ts-ignore
                    protected getConstructor(): java.lang.reflect.Constructor;
                    // @ts-ignore
                    protected deserializeViaMethod(method: java.lang.reflect.Method, args: java.util.Map): org.bukkit.configuration.serialization.ConfigurationSerializable;
                    // @ts-ignore
                    protected deserializeViaCtor(ctor: java.lang.reflect.Constructor, args: java.util.Map): org.bukkit.configuration.serialization.ConfigurationSerializable;
                    // @ts-ignore
                    public deserialize(args: java.util.Map): org.bukkit.configuration.serialization.ConfigurationSerializable;
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
                    // @ts-ignore
                    public static deserializeObject(args: java.util.Map, clazz: java.lang.Class): org.bukkit.configuration.serialization.ConfigurationSerializable;
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
                    // @ts-ignore
                    public static deserializeObject(args: java.util.Map): org.bukkit.configuration.serialization.ConfigurationSerializable;
                    /**
                     * Registers the given {@link ConfigurationSerializable} class by its
                     * alias
                     */
                    // @ts-ignore
                    public static registerClass(clazz: java.lang.Class): void;
                    /**
                     * Registers the given alias to the specified {@link
                     * ConfigurationSerializable} class
                     */
                    // @ts-ignore
                    public static registerClass(clazz: java.lang.Class, alias: string): void;
                    /**
                     * Unregisters the specified alias to a {@link ConfigurationSerializable}
                     */
                    // @ts-ignore
                    public static unregisterClass(alias: string): void;
                    /**
                     * Unregisters any aliases for the specified {@link
                     * ConfigurationSerializable} class
                     */
                    // @ts-ignore
                    public static unregisterClass(clazz: java.lang.Class): void;
                    /**
                     * Attempts to get a registered {@link ConfigurationSerializable} class by
                     * its alias
                     */
                    // @ts-ignore
                    public static getClassByAlias(alias: string): java.lang.Class;
                    /**
                     * Gets the correct alias for the given {@link ConfigurationSerializable}
                     * class
                     */
                    // @ts-ignore
                    public static getAlias(clazz: java.lang.Class): string;
                }
            }
        }
    }
}
