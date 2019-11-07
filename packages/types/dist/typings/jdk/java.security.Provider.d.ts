// @ts-nocheck
declare namespace java {
    namespace security {
        // @ts-ignore
        abstract class Provider extends java.util.Properties {
            /**
             * Constructs a provider with the specified name, version number,
             * and information.
             */
            // @ts-ignore
            constructor(name: string, version: number, info: string)
            /**
             * Returns the name of this provider.
             */
            // @ts-ignore
            public getName(): string;
            /**
             * Returns the version number for this provider.
             */
            // @ts-ignore
            public getVersion(): number;
            /**
             * Returns a human-readable description of the provider and its
             * services.  This may return an HTML page, with relevant links.
             */
            // @ts-ignore
            public getInfo(): string;
            /**
             * Returns a string with the name and the version number
             * of this provider.
             */
            // @ts-ignore
            public toString(): string;
            /**
             * Clears this provider so that it no longer contains the properties
             * used to look up facilities implemented by the provider.
             * <p>If a security manager is enabled, its {@code checkSecurityAccess}
             * method is called with the string {@code "clearProviderProperties."+name}
             * (where {@code name} is the provider name) to see if it's ok to clear
             * this provider.
             */
            // @ts-ignore
            public clear(): void;
            /**
             * Reads a property list (key and element pairs) from the input stream.
             */
            // @ts-ignore
            public load(inStream: java.io.InputStream): void;
            /**
             * Copies all of the mappings from the specified Map to this provider.
             * These mappings will replace any properties that this provider had
             * for any of the keys currently in the specified Map.
             */
            // @ts-ignore
            public putAll(t: java.util.Map): void;
            /**
             * Returns an unmodifiable Set view of the property entries contained
             * in this Provider.
             */
            // @ts-ignore
            public entrySet(): java.util.Set;
            /**
             * Returns an unmodifiable Set view of the property keys contained in
             * this provider.
             */
            // @ts-ignore
            public keySet(): java.util.Set;
            /**
             * Returns an unmodifiable Collection view of the property values
             * contained in this provider.
             */
            // @ts-ignore
            public values(): java.util.Collection;
            /**
             * Sets the {@code key} property to have the specified
             * {@code value}.
             * <p>If a security manager is enabled, its {@code checkSecurityAccess}
             * method is called with the string {@code "putProviderProperty."+name},
             * where {@code name} is the provider name, to see if it's ok to set this
             * provider's property values.
             */
            // @ts-ignore
            public put(key: java.lang.Object, value: java.lang.Object): java.lang.Object;
            /**
             * If the specified key is not already associated with a value (or is mapped
             * to {@code null}) associates it with the given value and returns
             * {@code null}, else returns the current value.
             * <p>If a security manager is enabled, its {@code checkSecurityAccess}
             * method is called with the string {@code "putProviderProperty."+name},
             * where {@code name} is the provider name, to see if it's ok to set this
             * provider's property values.
             */
            // @ts-ignore
            public putIfAbsent(key: java.lang.Object, value: java.lang.Object): java.lang.Object;
            /**
             * Removes the {@code key} property (and its corresponding
             * {@code value}).
             * <p>If a security manager is enabled, its {@code checkSecurityAccess}
             * method is called with the string {@code "removeProviderProperty."+name},
             * where {@code name} is the provider name, to see if it's ok to remove this
             * provider's properties.
             */
            // @ts-ignore
            public remove(key: java.lang.Object): java.lang.Object;
            /**
             * Removes the entry for the specified key only if it is currently
             * mapped to the specified value.
             * <p>If a security manager is enabled, its {@code checkSecurityAccess}
             * method is called with the string {@code "removeProviderProperty."+name},
             * where {@code name} is the provider name, to see if it's ok to remove this
             * provider's properties.
             */
            // @ts-ignore
            public remove(key: java.lang.Object, value: java.lang.Object): boolean;
            /**
             * Replaces the entry for the specified key only if currently
             * mapped to the specified value.
             * <p>If a security manager is enabled, its {@code checkSecurityAccess}
             * method is called with the string {@code "putProviderProperty."+name},
             * where {@code name} is the provider name, to see if it's ok to set this
             * provider's property values.
             */
            // @ts-ignore
            public replace(key: java.lang.Object, oldValue: java.lang.Object, newValue: java.lang.Object): boolean;
            /**
             * Replaces the entry for the specified key only if it is
             * currently mapped to some value.
             * <p>If a security manager is enabled, its {@code checkSecurityAccess}
             * method is called with the string {@code "putProviderProperty."+name},
             * where {@code name} is the provider name, to see if it's ok to set this
             * provider's property values.
             */
            // @ts-ignore
            public replace(key: java.lang.Object, value: java.lang.Object): java.lang.Object;
            /**
             * Replaces each entry's value with the result of invoking the given
             * function on that entry, in the order entries are returned by an entry
             * set iterator, until all entries have been processed or the function
             * throws an exception.
             * <p>If a security manager is enabled, its {@code checkSecurityAccess}
             * method is called with the string {@code "putProviderProperty."+name},
             * where {@code name} is the provider name, to see if it's ok to set this
             * provider's property values.
             */
            // @ts-ignore
            public replaceAll(func: java.util.function$.BiFunction): void;
            /**
             * Attempts to compute a mapping for the specified key and its
             * current mapped value (or {@code null} if there is no current
             * mapping).
             * <p>If a security manager is enabled, its {@code checkSecurityAccess}
             * method is called with the strings {@code "putProviderProperty."+name}
             * and {@code "removeProviderProperty."+name}, where {@code name} is the
             * provider name, to see if it's ok to set this provider's property values
             * and remove this provider's properties.
             */
            // @ts-ignore
            public compute(key: java.lang.Object, remappingFunction: java.util.function$.BiFunction): java.lang.Object;
            /**
             * If the specified key is not already associated with a value (or
             * is mapped to {@code null}), attempts to compute its value using
             * the given mapping function and enters it into this map unless
             * {@code null}.
             * <p>If a security manager is enabled, its {@code checkSecurityAccess}
             * method is called with the strings {@code "putProviderProperty."+name}
             * and {@code "removeProviderProperty."+name}, where {@code name} is the
             * provider name, to see if it's ok to set this provider's property values
             * and remove this provider's properties.
             */
            // @ts-ignore
            public computeIfAbsent(key: java.lang.Object, mappingFunction: java.util.function$.Function): java.lang.Object;
            /**
             * If the value for the specified key is present and non-null, attempts to
             * compute a new mapping given the key and its current mapped value.
             * <p>If a security manager is enabled, its {@code checkSecurityAccess}
             * method is called with the strings {@code "putProviderProperty."+name}
             * and {@code "removeProviderProperty."+name}, where {@code name} is the
             * provider name, to see if it's ok to set this provider's property values
             * and remove this provider's properties.
             */
            // @ts-ignore
            public computeIfPresent(key: java.lang.Object, remappingFunction: java.util.function$.BiFunction): java.lang.Object;
            /**
             * If the specified key is not already associated with a value or is
             * associated with null, associates it with the given value. Otherwise,
             * replaces the value with the results of the given remapping function,
             * or removes if the result is null. This method may be of use when
             * combining multiple mapped values for a key.
             * <p>If a security manager is enabled, its {@code checkSecurityAccess}
             * method is called with the strings {@code "putProviderProperty."+name}
             * and {@code "removeProviderProperty."+name}, where {@code name} is the
             * provider name, to see if it's ok to set this provider's property values
             * and remove this provider's properties.
             */
            // @ts-ignore
            public merge(key: java.lang.Object, value: java.lang.Object, remappingFunction: java.util.function$.BiFunction): java.lang.Object;
            // @ts-ignore
            public get(key: java.lang.Object): java.lang.Object;
            // @ts-ignore
            public getOrDefault(key: java.lang.Object, defaultValue: java.lang.Object): java.lang.Object;
            // @ts-ignore
            public forEach(action: java.util.function$.BiConsumer): void;
            // @ts-ignore
            public keys(): java.util.Enumeration;
            // @ts-ignore
            public elements(): java.util.Enumeration;
            // @ts-ignore
            public getProperty(key: string): string;
            /**
             * Get the service describing this Provider's implementation of the
             * specified type of this algorithm or alias. If no such
             * implementation exists, this method returns null. If there are two
             * matching services, one added to this provider using
             * {@link #putService putService()} and one added via {@link #put put()},
             * the service added via {@link #putService putService()} is returned.
             */
            // @ts-ignore
            public getService(type: string, algorithm: string): java.security.Provider.Service;
            /**
             * Get an unmodifiable Set of all services supported by
             * this Provider.
             */
            // @ts-ignore
            public getServices(): java.util.Set;
            /**
             * Add a service. If a service of the same type with the same algorithm
             * name exists and it was added using {@link #putService putService()},
             * it is replaced by the new service.
             * This method also places information about this service
             * in the provider's Hashtable values in the format described in the
             * <a href="../../../technotes/guides/security/crypto/CryptoSpec.html">
             * Java Cryptography Architecture API Specification &amp; Reference </a>.
             * <p>Also, if there is a security manager, its
             * {@code checkSecurityAccess} method is called with the string
             * {@code "putProviderProperty."+name}, where {@code name} is
             * the provider name, to see if it's ok to set this provider's property
             * values. If the default implementation of {@code checkSecurityAccess}
             * is used (that is, that method is not overriden), then this results in
             * a call to the security manager's {@code checkPermission} method with
             * a {@code SecurityPermission("putProviderProperty."+name)}
             * permission.
             */
            // @ts-ignore
            protected putService(s: java.security.Provider.Service): void;
            /**
             * Remove a service previously added using
             * {@link #putService putService()}. The specified service is removed from
             * this provider. It will no longer be returned by
             * {@link #getService getService()} and its information will be removed
             * from this provider's Hashtable.
             * <p>Also, if there is a security manager, its
             * {@code checkSecurityAccess} method is called with the string
             * {@code "removeProviderProperty."+name}, where {@code name} is
             * the provider name, to see if it's ok to remove this provider's
             * properties. If the default implementation of
             * {@code checkSecurityAccess} is used (that is, that method is not
             * overriden), then this results in a call to the security manager's
             * {@code checkPermission} method with a
             * {@code SecurityPermission("removeProviderProperty."+name)}
             * permission.
             */
            // @ts-ignore
            protected removeService(s: java.security.Provider.Service): void;
        }
    }
}
