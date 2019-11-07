// @ts-nocheck
declare namespace java {
    namespace sql {
        // @ts-ignore
         class DriverPropertyInfo extends java.lang.Object {
            /**
             * Constructs a <code>DriverPropertyInfo</code> object with a  given
             * name and value.  The <code>description</code> and <code>choices</code>
             * are initialized to <code>null</code> and <code>required</code> is initialized
             * to <code>false</code>.
             */
            // @ts-ignore
            constructor(name: string, value: string)
            // @ts-ignore
            public name: string;
            // @ts-ignore
            public description: string;
            // @ts-ignore
            public required: boolean;
            // @ts-ignore
            public value: string;
            // @ts-ignore
            public choices: java.lang.String[];
        }
    }
}
