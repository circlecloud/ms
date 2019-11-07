// @ts-nocheck
declare namespace java {
    namespace sql {
        // @ts-ignore
        interface ParameterMetaData {
            // @ts-ignore
             parameterNoNulls: number;
            // @ts-ignore
             parameterNullable: number;
            // @ts-ignore
             parameterNullableUnknown: number;
            // @ts-ignore
             parameterModeUnknown: number;
            // @ts-ignore
             parameterModeIn: number;
            // @ts-ignore
             parameterModeInOut: number;
            // @ts-ignore
             parameterModeOut: number;
            /**
             * Retrieves the number of parameters in the <code>PreparedStatement</code>
             * object for which this <code>ParameterMetaData</code> object contains
             * information.
             */
            // @ts-ignore
             getParameterCount(): number;
            /**
             * Retrieves whether null values are allowed in the designated parameter.
             */
            // @ts-ignore
             isNullable(param: number): number;
            /**
             * Retrieves whether values for the designated parameter can be signed numbers.
             */
            // @ts-ignore
             isSigned(param: number): boolean;
            /**
             * Retrieves the designated parameter's specified column size.
             * <P>The returned value represents the maximum column size for the given parameter.
             * For numeric data, this is the maximum precision.  For character data, this is the length in characters.
             * For datetime datatypes, this is the length in characters of the String representation (assuming the
             * maximum allowed precision of the fractional seconds component). For binary data, this is the length in bytes.  For the ROWID datatype,
             * this is the length in bytes. 0 is returned for data types where the
             * column size is not applicable.
             */
            // @ts-ignore
             getPrecision(param: number): number;
            /**
             * Retrieves the designated parameter's number of digits to right of the decimal point.
             * 0 is returned for data types where the scale is not applicable.
             */
            // @ts-ignore
             getScale(param: number): number;
            /**
             * Retrieves the designated parameter's SQL type.
             */
            // @ts-ignore
             getParameterType(param: number): number;
            /**
             * Retrieves the designated parameter's database-specific type name.
             */
            // @ts-ignore
             getParameterTypeName(param: number): string;
            /**
             * Retrieves the fully-qualified name of the Java class whose instances
             * should be passed to the method <code>PreparedStatement.setObject</code>.
             */
            // @ts-ignore
             getParameterClassName(param: number): string;
            /**
             * Retrieves the designated parameter's mode.
             */
            // @ts-ignore
             getParameterMode(param: number): number;
        }
    }
}
