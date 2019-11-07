// @ts-nocheck
declare namespace java {
    namespace beans {
        // @ts-ignore
         class Beans extends java.lang.Object {
            // @ts-ignore
            constructor()
            /**
             * <p>
             * Instantiate a JavaBean.
             * </p>
             */
            // @ts-ignore
            public static instantiate(cls: java.lang.ClassLoader, beanName: string): java.lang.Object;
            /**
             * <p>
             * Instantiate a JavaBean.
             * </p>
             */
            // @ts-ignore
            public static instantiate(cls: java.lang.ClassLoader, beanName: string, beanContext: java.beans.beancontext.BeanContext): java.lang.Object;
            /**
             * Instantiate a bean.
             * <p>
             * The bean is created based on a name relative to a class-loader.
             * This name should be a dot-separated name such as "a.b.c".
             * <p>
             * In Beans 1.0 the given name can indicate either a serialized object
             * or a class.  Other mechanisms may be added in the future.  In
             * beans 1.0 we first try to treat the beanName as a serialized object
             * name then as a class name.
             * <p>
             * When using the beanName as a serialized object name we convert the
             * given beanName to a resource pathname and add a trailing ".ser" suffix.
             * We then try to load a serialized object from that resource.
             * <p>
             * For example, given a beanName of "x.y", Beans.instantiate would first
             * try to read a serialized object from the resource "x/y.ser" and if
             * that failed it would try to load the class "x.y" and create an
             * instance of that class.
             * <p>
             * If the bean is a subtype of java.applet.Applet, then it is given
             * some special initialization.  First, it is supplied with a default
             * AppletStub and AppletContext.  Second, if it was instantiated from
             * a classname the applet's "init" method is called.  (If the bean was
             * deserialized this step is skipped.)
             * <p>
             * Note that for beans which are applets, it is the caller's responsiblity
             * to call "start" on the applet.  For correct behaviour, this should be done
             * after the applet has been added into a visible AWT container.
             * <p>
             * Note that applets created via beans.instantiate run in a slightly
             * different environment than applets running inside browsers.  In
             * particular, bean applets have no access to "parameters", so they may
             * wish to provide property get/set methods to set parameter values.  We
             * advise bean-applet developers to test their bean-applets against both
             * the JDK appletviewer (for a reference browser environment) and the
             * BDK BeanBox (for a reference bean container).
             */
            // @ts-ignore
            public static instantiate(cls: java.lang.ClassLoader, beanName: string, beanContext: java.beans.beancontext.BeanContext, initializer: java.beans.AppletInitializer): java.lang.Object;
            /**
             * From a given bean, obtain an object representing a specified
             * type view of that source object.
             * <p>
             * The result may be the same object or a different object.  If
             * the requested target view isn't available then the given
             * bean is returned.
             * <p>
             * This method is provided in Beans 1.0 as a hook to allow the
             * addition of more flexible bean behaviour in the future.
             */
            // @ts-ignore
            public static getInstanceOf(bean: java.lang.Object, targetType: java.lang.Class): java.lang.Object;
            /**
             * Check if a bean can be viewed as a given target type.
             * The result will be true if the Beans.getInstanceof method
             * can be used on the given bean to obtain an object that
             * represents the specified targetType type view.
             */
            // @ts-ignore
            public static isInstanceOf(bean: java.lang.Object, targetType: java.lang.Class): boolean;
            /**
             * Test if we are in design-mode.
             */
            // @ts-ignore
            public static isDesignTime(): boolean;
            /**
             * Determines whether beans can assume a GUI is available.
             */
            // @ts-ignore
            public static isGuiAvailable(): boolean;
            /**
             * Used to indicate whether of not we are running in an application
             * builder environment.
             * <p>Note that this method is security checked
             * and is not available to (for example) untrusted applets.
             * More specifically, if there is a security manager,
             * its <code>checkPropertiesAccess</code>
             * method is called. This could result in a SecurityException.
             */
            // @ts-ignore
            public static setDesignTime(isDesignTime: boolean): void;
            /**
             * Used to indicate whether of not we are running in an environment
             * where GUI interaction is available.
             * <p>Note that this method is security checked
             * and is not available to (for example) untrusted applets.
             * More specifically, if there is a security manager,
             * its <code>checkPropertiesAccess</code>
             * method is called. This could result in a SecurityException.
             */
            // @ts-ignore
            public static setGuiAvailable(isGuiAvailable: boolean): void;
        }
    }
}
