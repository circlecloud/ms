declare namespace java {
    namespace sql {
        // @ts-ignore
        interface SQLType {
            /**
             * Returns the {@code SQLType} name that represents a SQL data type.
             */
            // @ts-ignore
             getName(): string;
            /**
             * Returns the name of the vendor that supports this data type. The value
             * returned typically is the package name for this vendor.
             */
            // @ts-ignore
             getVendor(): string;
            /**
             * Returns the vendor specific type number for the data type.
             */
            // @ts-ignore
             getVendorTypeNumber(): java.lang.Integer;
        }
    }
}
