declare namespace java {
    namespace lang {
        // @ts-ignore
         class EnumConstantNotPresentException extends java.lang.RuntimeException {
            /**
             * Constructs an <tt>EnumConstantNotPresentException</tt> for the
             * specified constant.
             */
            // @ts-ignore
            constructor(enumType: java.lang.Class, constantName: string)
            /**
             * Returns the type of the missing enum constant.
             */
            // @ts-ignore
            public enumType(): java.lang.Class;
            /**
             * Returns the name of the missing enum constant.
             */
            // @ts-ignore
            public constantName(): string;
        }
    }
}
