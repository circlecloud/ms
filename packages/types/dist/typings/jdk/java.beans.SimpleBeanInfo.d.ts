declare namespace java {
    namespace beans {
        // @ts-ignore
         class SimpleBeanInfo extends java.lang.Object {
            // @ts-ignore
            constructor()
            /**
             * Deny knowledge about the class and customizer of the bean.
             * You can override this if you wish to provide explicit info.
             */
            // @ts-ignore
            public getBeanDescriptor(): java.beans.BeanDescriptor;
            /**
             * Deny knowledge of properties. You can override this
             * if you wish to provide explicit property info.
             */
            // @ts-ignore
            public getPropertyDescriptors(): java.beans.PropertyDescriptor[];
            /**
             * Deny knowledge of a default property. You can override this
             * if you wish to define a default property for the bean.
             */
            // @ts-ignore
            public getDefaultPropertyIndex(): number;
            /**
             * Deny knowledge of event sets. You can override this
             * if you wish to provide explicit event set info.
             */
            // @ts-ignore
            public getEventSetDescriptors(): java.beans.EventSetDescriptor[];
            /**
             * Deny knowledge of a default event. You can override this
             * if you wish to define a default event for the bean.
             */
            // @ts-ignore
            public getDefaultEventIndex(): number;
            /**
             * Deny knowledge of methods. You can override this
             * if you wish to provide explicit method info.
             */
            // @ts-ignore
            public getMethodDescriptors(): java.beans.MethodDescriptor[];
            /**
             * Claim there are no other relevant BeanInfo objects.  You
             * may override this if you want to (for example) return a
             * BeanInfo for a base class.
             */
            // @ts-ignore
            public getAdditionalBeanInfo(): java.beans.BeanInfo[];
            /**
             * Claim there are no icons available.  You can override
             * this if you want to provide icons for your bean.
             */
            // @ts-ignore
            public getIcon(iconKind: number): java.awt.Image;
            /**
             * This is a utility method to help in loading icon images.
             * It takes the name of a resource file associated with the
             * current object's class file and loads an image object
             * from that file.  Typically images will be GIFs.
             * <p>
             */
            // @ts-ignore
            public loadImage(resourceName: string): java.awt.Image;
        }
    }
}
