declare namespace java {
    namespace beans {
        // @ts-ignore
        interface BeanInfo {
            // @ts-ignore
             ICON_COLOR_16x16: number;
            // @ts-ignore
             ICON_COLOR_32x32: number;
            // @ts-ignore
             ICON_MONO_16x16: number;
            // @ts-ignore
             ICON_MONO_32x32: number;
            /**
             * Returns the bean descriptor
             * that provides overall information about the bean,
             * such as its display name or its customizer.
             */
            // @ts-ignore
             getBeanDescriptor(): java.beans.BeanDescriptor;
            /**
             * Returns the event descriptors of the bean
             * that define the types of events fired by this bean.
             */
            // @ts-ignore
             getEventSetDescriptors(): java.beans.EventSetDescriptor[];
            /**
             * A bean may have a default event typically applied when this bean is used.
             */
            // @ts-ignore
             getDefaultEventIndex(): number;
            /**
             * Returns descriptors for all properties of the bean.
             * <p>
             * If a property is indexed, then its entry in the result array
             * belongs to the {@link IndexedPropertyDescriptor} subclass
             * of the {@link PropertyDescriptor} class.
             * A client of the {@code getPropertyDescriptors} method
             * can use the {@code instanceof} operator to check
             * whether a given {@code PropertyDescriptor}
             * is an {@code IndexedPropertyDescriptor}.
             */
            // @ts-ignore
             getPropertyDescriptors(): java.beans.PropertyDescriptor[];
            /**
             * A bean may have a default property commonly updated when this bean is customized.
             */
            // @ts-ignore
             getDefaultPropertyIndex(): number;
            /**
             * Returns the method descriptors of the bean
             * that define the externally visible methods supported by this bean.
             */
            // @ts-ignore
             getMethodDescriptors(): java.beans.MethodDescriptor[];
            /**
             * This method enables the current {@code BeanInfo} object
             * to return an arbitrary collection of other {@code BeanInfo} objects
             * that provide additional information about the current bean.
             * <p>
             * If there are conflicts or overlaps between the information
             * provided by different {@code BeanInfo} objects,
             * the current {@code BeanInfo} object takes priority
             * over the additional {@code BeanInfo} objects.
             * Array elements with higher indices take priority
             * over the elements with lower indices.
             */
            // @ts-ignore
             getAdditionalBeanInfo(): java.beans.BeanInfo[];
            /**
             * Returns an image that can be used to represent the bean in toolboxes or toolbars.
             * <p>
             * There are four possible types of icons:
             * 16 x 16 color, 32 x 32 color, 16 x 16 mono, and 32 x 32 mono.
             * If you implement a bean so that it supports a single icon,
             * it is recommended to use 16 x 16 color.
             * Another recommendation is to set a transparent background for the icons.
             */
            // @ts-ignore
             getIcon(iconKind: number): java.awt.Image;
        }
    }
}
