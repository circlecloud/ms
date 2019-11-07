// @ts-nocheck
declare namespace java {
    namespace beans {
        // @ts-ignore
         class BeanDescriptor extends java.beans.FeatureDescriptor {
            /**
             * Create a BeanDescriptor for a bean that doesn't have a customizer.
             */
            // @ts-ignore
            constructor(beanClass: java.lang.Class)
            /**
             * Create a BeanDescriptor for a bean that has a customizer.
             */
            // @ts-ignore
            constructor(beanClass: java.lang.Class, customizerClass: java.lang.Class)
            /**
             * Gets the bean's Class object.
             */
            // @ts-ignore
            public getBeanClass(): java.lang.Class;
            /**
             * Gets the Class object for the bean's customizer.
             */
            // @ts-ignore
            public getCustomizerClass(): java.lang.Class;
        }
    }
}
