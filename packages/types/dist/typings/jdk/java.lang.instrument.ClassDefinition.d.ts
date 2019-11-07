// @ts-nocheck
declare namespace java {
    namespace lang {
        namespace instrument {
            // @ts-ignore
             class ClassDefinition extends java.lang.Object {
                /**
                 * Creates a new <code>ClassDefinition</code> binding using the supplied
                 * class and class file bytes. Does not copy the supplied buffer, just captures a reference to it.
                 */
                // @ts-ignore
                constructor(theClass: java.lang.Class, theClassFile: number)
                /**
                 * Returns the class.
                 */
                // @ts-ignore
                public getDefinitionClass(): java.lang.Class;
                /**
                 * Returns the array of bytes that contains the new class file.
                 */
                // @ts-ignore
                public getDefinitionClassFile(): number[];
            }
        }
    }
}
