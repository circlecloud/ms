// @ts-nocheck
declare namespace java {
    namespace sql {
        // @ts-ignore
         class JDBCType extends java.lang.Enum {
            // @ts-ignore
            public static BIT: java.sql.JDBCType;
            // @ts-ignore
            public static TINYINT: java.sql.JDBCType;
            // @ts-ignore
            public static SMALLINT: java.sql.JDBCType;
            // @ts-ignore
            public static INTEGER: java.sql.JDBCType;
            // @ts-ignore
            public static BIGINT: java.sql.JDBCType;
            // @ts-ignore
            public static FLOAT: java.sql.JDBCType;
            // @ts-ignore
            public static REAL: java.sql.JDBCType;
            // @ts-ignore
            public static DOUBLE: java.sql.JDBCType;
            // @ts-ignore
            public static NUMERIC: java.sql.JDBCType;
            // @ts-ignore
            public static DECIMAL: java.sql.JDBCType;
            // @ts-ignore
            public static CHAR: java.sql.JDBCType;
            // @ts-ignore
            public static VARCHAR: java.sql.JDBCType;
            // @ts-ignore
            public static LONGVARCHAR: java.sql.JDBCType;
            // @ts-ignore
            public static DATE: java.sql.JDBCType;
            // @ts-ignore
            public static TIME: java.sql.JDBCType;
            // @ts-ignore
            public static TIMESTAMP: java.sql.JDBCType;
            // @ts-ignore
            public static BINARY: java.sql.JDBCType;
            // @ts-ignore
            public static VARBINARY: java.sql.JDBCType;
            // @ts-ignore
            public static LONGVARBINARY: java.sql.JDBCType;
            // @ts-ignore
            public static NULL: java.sql.JDBCType;
            // @ts-ignore
            public static OTHER: java.sql.JDBCType;
            // @ts-ignore
            public static JAVA_OBJECT: java.sql.JDBCType;
            // @ts-ignore
            public static DISTINCT: java.sql.JDBCType;
            // @ts-ignore
            public static STRUCT: java.sql.JDBCType;
            // @ts-ignore
            public static ARRAY: java.sql.JDBCType;
            // @ts-ignore
            public static BLOB: java.sql.JDBCType;
            // @ts-ignore
            public static CLOB: java.sql.JDBCType;
            // @ts-ignore
            public static REF: java.sql.JDBCType;
            // @ts-ignore
            public static DATALINK: java.sql.JDBCType;
            // @ts-ignore
            public static BOOLEAN: java.sql.JDBCType;
            // @ts-ignore
            public static ROWID: java.sql.JDBCType;
            // @ts-ignore
            public static NCHAR: java.sql.JDBCType;
            // @ts-ignore
            public static NVARCHAR: java.sql.JDBCType;
            // @ts-ignore
            public static LONGNVARCHAR: java.sql.JDBCType;
            // @ts-ignore
            public static NCLOB: java.sql.JDBCType;
            // @ts-ignore
            public static SQLXML: java.sql.JDBCType;
            // @ts-ignore
            public static REF_CURSOR: java.sql.JDBCType;
            // @ts-ignore
            public static TIME_WITH_TIMEZONE: java.sql.JDBCType;
            // @ts-ignore
            public static TIMESTAMP_WITH_TIMEZONE: java.sql.JDBCType;
            // @ts-ignore
            public static values(): java.sql.JDBCType[];
            // @ts-ignore
            public static valueOf(name: string): java.sql.JDBCType;
            /**
             * {@inheritDoc }
             */
            // @ts-ignore
            public getName(): string;
            /**
             * Returns the name of the vendor that supports this data type.
             */
            // @ts-ignore
            public getVendor(): string;
            /**
             * Returns the vendor specific type number for the data type.
             */
            // @ts-ignore
            public getVendorTypeNumber(): java.lang.Integer;
            /**
             * Returns the {@code JDBCType} that corresponds to the specified
             * {@code Types} value
             */
            // @ts-ignore
            public static valueOf(type: number): java.sql.JDBCType;
        }
    }
}
