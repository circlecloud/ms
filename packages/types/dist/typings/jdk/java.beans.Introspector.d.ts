// @ts-nocheck
declare namespace java {
    namespace beans {
        // @ts-ignore
         class Introspector extends java.lang.Object {
            // @ts-ignore
            public static USE_ALL_BEANINFO: number;
            // @ts-ignore
            public static IGNORE_IMMEDIATE_BEANINFO: number;
            // @ts-ignore
            public static IGNORE_ALL_BEANINFO: number;
            /**
             * Introspect on a Java Bean and learn about all its properties, exposed
             * methods, and events.
             * <p>
             * If the BeanInfo class for a Java Bean has been previously Introspected
             * then the BeanInfo class is retrieved from the BeanInfo cache.
             */
            // @ts-ignore
            public static getBeanInfo(beanClass: java.lang.Class): java.beans.BeanInfo;
            /**
             * Introspect on a Java bean and learn about all its properties, exposed
             * methods, and events, subject to some control flags.
             * <p>
             * If the BeanInfo class for a Java Bean has been previously Introspected
             * based on the same arguments then the BeanInfo class is retrieved
             * from the BeanInfo cache.
             */
            // @ts-ignore
            public static getBeanInfo(beanClass: java.lang.Class, flags: number): java.beans.BeanInfo;
            /**
             * Introspect on a Java bean and learn all about its properties, exposed
             * methods, below a given "stop" point.
             * <p>
             * If the BeanInfo class for a Java Bean has been previously Introspected
             * based on the same arguments, then the BeanInfo class is retrieved
             * from the BeanInfo cache.
             */
            // @ts-ignore
            public static getBeanInfo(beanClass: java.lang.Class, stopClass: java.lang.Class): java.beans.BeanInfo;
            /**
             * Introspect on a Java Bean and learn about all its properties,
             * exposed methods and events, below a given {@code stopClass} point
             * subject to some control {@code flags}.
             * <dl>
             * <dt>USE_ALL_BEANINFO</dt>
             * <dd>Any BeanInfo that can be discovered will be used.</dd>
             * <dt>IGNORE_IMMEDIATE_BEANINFO</dt>
             * <dd>Any BeanInfo associated with the specified {@code beanClass} will be ignored.</dd>
             * <dt>IGNORE_ALL_BEANINFO</dt>
             * <dd>Any BeanInfo associated with the specified {@code beanClass}
             * or any of its parent classes will be ignored.</dd>
             * </dl>
             * Any methods/properties/events in the {@code stopClass}
             * or in its parent classes will be ignored in the analysis.
             * <p>
             * If the BeanInfo class for a Java Bean has been
             * previously introspected based on the same arguments then
             * the BeanInfo class is retrieved from the BeanInfo cache.
             */
            // @ts-ignore
            public static getBeanInfo(beanClass: java.lang.Class, stopClass: java.lang.Class, flags: number): java.beans.BeanInfo;
            /**
             * Utility method to take a string and convert it to normal Java variable
             * name capitalization.  This normally means converting the first
             * character from upper case to lower case, but in the (unusual) special
             * case when there is more than one character and both the first and
             * second characters are upper case, we leave it alone.
             * <p>
             * Thus "FooBah" becomes "fooBah" and "X" becomes "x", but "URL" stays
             * as "URL".
             */
            // @ts-ignore
            public static decapitalize(name: string): string;
            /**
             * Gets the list of package names that will be used for
             * finding BeanInfo classes.
             */
            // @ts-ignore
            public static getBeanInfoSearchPath(): java.lang.String[];
            /**
             * Change the list of package names that will be used for
             * finding BeanInfo classes.  The behaviour of
             * this method is undefined if parameter path
             * is null.
             * <p>First, if there is a security manager, its <code>checkPropertiesAccess</code>
             * method is called. This could result in a SecurityException.
             */
            // @ts-ignore
            public static setBeanInfoSearchPath(path: string): void;
            /**
             * Flush all of the Introspector's internal caches.  This method is
             * not normally required.  It is normally only needed by advanced
             * tools that update existing "Class" objects in-place and need
             * to make the Introspector re-analyze existing Class objects.
             */
            // @ts-ignore
            public static flushCaches(): void;
            /**
             * Flush the Introspector's internal cached information for a given class.
             * This method is not normally required.  It is normally only needed
             * by advanced tools that update existing "Class" objects in-place
             * and need to make the Introspector re-analyze an existing Class object.
             * Note that only the direct state associated with the target Class
             * object is flushed.  We do not flush state for other Class objects
             * with the same name, nor do we flush state for any related Class
             * objects (such as subclasses), even though their state may include
             * information indirectly obtained from the target Class object.
             */
            // @ts-ignore
            public static flushFromCaches(clz: java.lang.Class): void;
        }
    }
}
