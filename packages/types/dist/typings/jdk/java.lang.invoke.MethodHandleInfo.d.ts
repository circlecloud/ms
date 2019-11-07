declare namespace java {
    namespace lang {
        namespace invoke {
            // @ts-ignore
            interface MethodHandleInfo {
                // @ts-ignore
                 REF_getField: number;
                // @ts-ignore
                 REF_getStatic: number;
                // @ts-ignore
                 REF_putField: number;
                // @ts-ignore
                 REF_putStatic: number;
                // @ts-ignore
                 REF_invokeVirtual: number;
                // @ts-ignore
                 REF_invokeStatic: number;
                // @ts-ignore
                 REF_invokeSpecial: number;
                // @ts-ignore
                 REF_newInvokeSpecial: number;
                // @ts-ignore
                 REF_invokeInterface: number;
                /**
                 * Returns the Class where the cracked MethodHandle's underlying method, field or constructor is declared.
                 */
                // @ts-ignore
                 getDeclaringClass(): java.lang.Class;
                /**
                 * Returns the simple name of the MethodHandle's underlying member.
                 */
                // @ts-ignore
                 getName(): string;
                /**
                 * Returns the type of the MethodHandle's underlying member as a MethodType.
                 * If the underlying member is non-static, the receiver parameter will not be included.
                 * If the underlying member is field getter, the MethodType will take no parameters, and the return type will be the field type.
                 * If the underlying member is field setter, the MethodType will take one parameter of the field type, and the return type will be void.
                 */
                // @ts-ignore
                 getMethodType(): java.lang.invoke.MethodType;
                /**
                 * Returns the modifiers of the MethodHandle's underlying member.
                 */
                // @ts-ignore
                 getModifiers(): number;
                /**
                 * Returns the reference kind of the MethodHandle. The possible reference kinds are the declared MethodHandleInfo.REF fields.
                 */
                // @ts-ignore
                 getReferenceKind(): number;
                /**
                 * Returns whether the MethodHandle's underlying method or constructor has variable argument arity.
                 */
                // @ts-ignore
                 isVarArgs(): boolean;
                /**
                 * Reflects the underlying member as a Method, Field or Constructor. The member must be accessible to the provided lookup object.
                 * Public members are reflected as if by <code>getMethod</code>, <code>getField</code> or <code>getConstructor</code>.
                 * Non-public members are reflected as if by <code>getDeclearedMethod</code>, <code>getDeclaredField</code> or <code>getDeclaredConstructor</code>.
                 */
                // @ts-ignore
                 reflectAs(expected: java.lang.Class, lookup: java.lang.invoke.MethodHandles.Lookup): java.lang.reflect.Member;
                /**
                 * Returns a string representing the equivalent bytecode for the referenceKind.
                 */
                // @ts-ignore
                 referenceKindToString(referenceKind: number): string;
                /**
                 * Answers a string containing a concise, human-readable description of the receiver.
                 */
                // @ts-ignore
                 toString(kind: number, defc: java.lang.Class, name: string, type: java.lang.invoke.MethodType): string;
            }
        }
    }
}
