declare namespace java {
    namespace awt {
        namespace font {
            // @ts-ignore
            interface MultipleMaster {
                /**
                 * Returns the number of multiple master design controls.
                 * Design axes include things like width, weight and optical scaling.
                 */
                // @ts-ignore
                 getNumDesignAxes(): number;
                /**
                 * Returns an array of design limits interleaved in the form [from&rarr;to]
                 * for each axis.  For example,
                 * design limits for weight could be from 0.1 to 1.0. The values are
                 * returned in the same order returned by
                 * <code>getDesignAxisNames</code>.
                 */
                // @ts-ignore
                 getDesignAxisRanges(): number[];
                /**
                 * Returns an array of default design values for each axis.  For example,
                 * the default value for weight could be 1.6. The values are returned
                 * in the same order returned by <code>getDesignAxisNames</code>.
                 */
                // @ts-ignore
                 getDesignAxisDefaults(): number[];
                /**
                 * Returns the name for each design axis. This also determines the order in
                 * which the values for each axis are returned.
                 */
                // @ts-ignore
                 getDesignAxisNames(): java.lang.String[];
                /**
                 * Creates a new instance of a multiple master font based on the design
                 * axis values contained in the specified array. The size of the array
                 * must correspond to the value returned from
                 * <code>getNumDesignAxes</code> and the values of the array elements
                 * must fall within limits specified by
                 * <code>getDesignAxesLimits</code>. In case of an error,
                 * <code>null</code> is returned.
                 */
                // @ts-ignore
                 deriveMMFont(axes: number): java.awt.Font;
                /**
                 * Creates a new instance of a multiple master font based on detailed metric
                 * information. In case of an error, <code>null</code> is returned.
                 */
                // @ts-ignore
                 deriveMMFont(glyphWidths: number, avgStemWidth: number, typicalCapHeight: number, typicalXHeight: number, italicAngle: number): java.awt.Font;
            }
        }
    }
}
