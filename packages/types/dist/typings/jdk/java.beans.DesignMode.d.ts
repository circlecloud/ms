declare namespace java {
    namespace beans {
        // @ts-ignore
        interface DesignMode {
            // @ts-ignore
             PROPERTYNAME: string;
            /**
             * Sets the "value" of the "designTime" property.
             * <p>
             * If the implementing object is an instance of java.beans.beancontext.BeanContext,
             * or a subinterface thereof, then that BeanContext should fire a
             * PropertyChangeEvent, to its registered BeanContextMembershipListeners, with
             * parameters:
             * <ul>
             * <li><code>propertyName</code> - <code>java.beans.DesignMode.PROPERTYNAME</code>
             * <li><code>oldValue</code> - previous value of "designTime"
             * <li><code>newValue</code> - current value of "designTime"
             * </ul>
             * Note it is illegal for a BeanContextChild to invoke this method
             * associated with a BeanContext that it is nested within.
             */
            // @ts-ignore
             setDesignTime(designTime: boolean): void;
            /**
             * A value of true denotes that JavaBeans should behave in design time
             * mode, a value of false denotes runtime behavior.
             */
            // @ts-ignore
             isDesignTime(): boolean;
        }
    }
}
