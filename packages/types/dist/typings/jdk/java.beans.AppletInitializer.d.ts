declare namespace java {
    namespace beans {
        // @ts-ignore
        interface AppletInitializer {
            /**
             * <p>
             * If passed to the appropriate variant of java.beans.Beans.instantiate
             * this method will be called in order to associate the newly instantiated
             * Applet (JavaBean) with its AppletContext, AppletStub, and Container.
             * </p>
             * <p>
             * Conformant implementations shall:
             * <ol>
             * <li> Associate the newly instantiated Applet with the appropriate
             * AppletContext.
             * <li> Instantiate an AppletStub() and associate that AppletStub with
             * the Applet via an invocation of setStub().
             * <li> If BeanContext parameter is null, then it shall associate the
             * Applet with its appropriate Container by adding that Applet to its
             * Container via an invocation of add(). If the BeanContext parameter is
             * non-null, then it is the responsibility of the BeanContext to associate
             * the Applet with its Container during the subsequent invocation of its
             * addChildren() method.
             * </ol>
             */
            // @ts-ignore
             initialize(newAppletBean: java.applet.Applet, bCtxt: java.beans.beancontext.BeanContext): void;
            /**
             * <p>
             * Activate, and/or mark Applet active. Implementors of this interface
             * shall mark this Applet as active, and optionally invoke its start()
             * method.
             * </p>
             */
            // @ts-ignore
             activate(newApplet: java.applet.Applet): void;
        }
    }
}
