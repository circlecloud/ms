declare namespace java {
    namespace lang {
        namespace invoke {
            // @ts-ignore
             class SerializedLambda extends java.lang.Object {
                /**
                 * Create a {@code SerializedLambda} from the low-level information present
                 * at the lambda factory site.
                 */
                // @ts-ignore
                constructor(capturingClass: java.lang.Class, functionalInterfaceClass: string, functionalInterfaceMethodName: string, functionalInterfaceMethodSignature: string, implMethodKind: number, implClass: string, implMethodName: string, implMethodSignature: string, instantiatedMethodType: string, capturedArgs: java.lang.Object)
                /**
                 * Get the name of the class that captured this lambda.
                 */
                // @ts-ignore
                public getCapturingClass(): string;
                /**
                 * Get the name of the invoked type to which this
                 * lambda has been converted
                 */
                // @ts-ignore
                public getFunctionalInterfaceClass(): string;
                /**
                 * Get the name of the primary method for the functional interface
                 * to which this lambda has been converted.
                 */
                // @ts-ignore
                public getFunctionalInterfaceMethodName(): string;
                /**
                 * Get the signature of the primary method for the functional
                 * interface to which this lambda has been converted.
                 */
                // @ts-ignore
                public getFunctionalInterfaceMethodSignature(): string;
                /**
                 * Get the name of the class containing the implementation
                 * method.
                 */
                // @ts-ignore
                public getImplClass(): string;
                /**
                 * Get the name of the implementation method.
                 */
                // @ts-ignore
                public getImplMethodName(): string;
                /**
                 * Get the signature of the implementation method.
                 */
                // @ts-ignore
                public getImplMethodSignature(): string;
                /**
                 * Get the method handle kind (see {@link MethodHandleInfo}) of
                 * the implementation method.
                 */
                // @ts-ignore
                public getImplMethodKind(): number;
                /**
                 * Get the signature of the primary functional interface method
                 * after type variables are substituted with their instantiation
                 * from the capture site.
                 */
                // @ts-ignore
                public getInstantiatedMethodType(): string;
                /**
                 * Get the count of dynamic arguments to the lambda capture site.
                 */
                // @ts-ignore
                public getCapturedArgCount(): number;
                /**
                 * Get a dynamic argument to the lambda capture site.
                 */
                // @ts-ignore
                public getCapturedArg(i: number): java.lang.Object;
                // @ts-ignore
                public toString(): string;
            }
        }
    }
}
