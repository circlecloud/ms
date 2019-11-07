// @ts-nocheck
declare namespace java {
    namespace beans {
        // @ts-ignore
         class MethodDescriptor extends java.beans.FeatureDescriptor {
            /**
             * Constructs a <code>MethodDescriptor</code> from a
             * <code>Method</code>.
             */
            // @ts-ignore
            constructor(method: java.lang.reflect.Method)
            /**
             * Constructs a <code>MethodDescriptor</code> from a
             * <code>Method</code> providing descriptive information for each
             * of the method's parameters.
             */
            // @ts-ignore
            constructor(method: java.lang.reflect.Method, parameterDescriptors: java.beans.ParameterDescriptor)
            /**
             * Gets the method that this MethodDescriptor encapsulates.
             */
            // @ts-ignore
            public getMethod(): java.lang.reflect.Method;
            /**
             * Gets the ParameterDescriptor for each of this MethodDescriptor's
             * method's parameters.
             */
            // @ts-ignore
            public getParameterDescriptors(): java.beans.ParameterDescriptor[];
        }
    }
}
