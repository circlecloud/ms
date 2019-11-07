declare namespace java {
    namespace lang {
        // @ts-ignore
        abstract class VirtualMachineError extends java.lang.Error {
            /**
             * Constructs a <code>VirtualMachineError</code> with no detail message.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a <code>VirtualMachineError</code> with the specified
             * detail message.
             */
            // @ts-ignore
            constructor(message: string)
            /**
             * Constructs a {@code VirtualMachineError} with the specified
             * detail message and cause.  <p>Note that the detail message
             * associated with {@code cause} is <i>not</i> automatically
             * incorporated in this error's detail message.
             */
            // @ts-ignore
            constructor(message: string, cause: java.lang.Throwable)
            /**
             * Constructs an a {@code VirtualMachineError} with the specified
             * cause and a detail message of {@code (cause==null ? null :
             * cause.toString())} (which typically contains the class and
             * detail message of {@code cause}).
             */
            // @ts-ignore
            constructor(cause: java.lang.Throwable)
        }
    }
}
