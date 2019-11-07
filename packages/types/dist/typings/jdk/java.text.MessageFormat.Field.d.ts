declare namespace java {
    namespace text {
        namespace MessageFormat {
            // @ts-ignore
             class Field extends java.text.Format.Field {
                /**
                 * Creates a Field with the specified name.
                 */
                // @ts-ignore
                constructor(name: string)
                // @ts-ignore
                public static ARGUMENT: java.text.MessageFormat.Field;
                /**
                 * Resolves instances being deserialized to the predefined constants.
                 */
                // @ts-ignore
                protected readResolve(): java.lang.Object;
            }
        }
    }
}
