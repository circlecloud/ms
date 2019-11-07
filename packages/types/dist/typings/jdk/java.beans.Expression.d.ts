// @ts-nocheck
declare namespace java {
    namespace beans {
        // @ts-ignore
         class Expression extends java.beans.Statement {
            /**
             * Creates a new {@link Expression} object
             * for the specified target object to invoke the method
             * specified by the name and by the array of arguments.
             * <p>
             * The {@code target} and the {@code methodName} values should not be {@code null}.
             * Otherwise an attempt to execute this {@code Expression}
             * will result in a {@code NullPointerException}.
             * If the {@code arguments} value is {@code null},
             * an empty array is used as the value of the {@code arguments} property.
             */
            // @ts-ignore
            constructor(target: java.lang.Object, methodName: string, arguments: java.lang.Object)
            /**
             * Creates a new {@link Expression} object with the specified value
             * for the specified target object to invoke the  method
             * specified by the name and by the array of arguments.
             * The {@code value} value is used as the value of the {@code value} property,
             * so the {@link #getValue} method will return it
             * without executing this {@code Expression}.
             * <p>
             * The {@code target} and the {@code methodName} values should not be {@code null}.
             * Otherwise an attempt to execute this {@code Expression}
             * will result in a {@code NullPointerException}.
             * If the {@code arguments} value is {@code null},
             * an empty array is used as the value of the {@code arguments} property.
             */
            // @ts-ignore
            constructor(value: java.lang.Object, target: java.lang.Object, methodName: string, arguments: java.lang.Object)
            /**
             * {@inheritDoc}
             * <p>
             * If the invoked method completes normally,
             * the value it returns is copied in the {@code value} property.
             * Note that the {@code value} property is set to {@code null},
             * if the return type of the underlying method is {@code void}.
             */
            // @ts-ignore
            public execute(): void;
            /**
             * If the value property of this instance is not already set,
             * this method dynamically finds the method with the specified
             * methodName on this target with these arguments and calls it.
             * The result of the method invocation is first copied
             * into the value property of this expression and then returned
             * as the result of <code>getValue</code>. If the value property
             * was already set, either by a call to <code>setValue</code>
             * or a previous call to <code>getValue</code> then the value
             * property is returned without either looking up or calling the method.
             * <p>
             * The value property of an <code>Expression</code> is set to
             * a unique private (non-<code>null</code>) value by default and
             * this value is used as an internal indication that the method
             * has not yet been called. A return value of <code>null</code>
             * replaces this default value in the same way that any other value
             * would, ensuring that expressions are never evaluated more than once.
             * <p>
             * See the <code>execute</code> method for details on how
             * methods are chosen using the dynamic types of the target
             * and arguments.
             */
            // @ts-ignore
            public getValue(): java.lang.Object;
            /**
             * Sets the value of this expression to <code>value</code>.
             * This value will be returned by the getValue method
             * without calling the method associated with this
             * expression.
             */
            // @ts-ignore
            public setValue(value: java.lang.Object): void;
            /**
             * Prints the value of this expression using a Java-style syntax.
             */
            // @ts-ignore
            public toString(): string;
        }
    }
}
