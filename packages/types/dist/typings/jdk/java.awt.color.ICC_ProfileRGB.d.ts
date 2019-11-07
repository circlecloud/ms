// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace color {
            // @ts-ignore
             class ICC_ProfileRGB extends java.awt.color.ICC_Profile {
                // @ts-ignore
                public static REDCOMPONENT: number;
                // @ts-ignore
                public static GREENCOMPONENT: number;
                // @ts-ignore
                public static BLUECOMPONENT: number;
                /**
                 * Returns an array that contains the components of the profile's
                 * <CODE>mediaWhitePointTag</CODE>.
                 */
                // @ts-ignore
                public getMediaWhitePoint(): number[];
                /**
                 * Returns a 3x3 <CODE>float</CODE> matrix constructed from the
                 * X, Y, and Z components of the profile's <CODE>redColorantTag</CODE>,
                 * <CODE>greenColorantTag</CODE>, and <CODE>blueColorantTag</CODE>.
                 * <p>
                 * This matrix can be used for color transforms in the forward
                 * direction of the profile--from the profile color space
                 * to the CIEXYZ PCS.
                 */
                // @ts-ignore
                public getMatrix(): float[][];
                /**
                 * Returns a gamma value representing the tone reproduction curve
                 * (TRC) for a particular component.  The component parameter
                 * must be one of REDCOMPONENT, GREENCOMPONENT, or BLUECOMPONENT.
                 * <p>
                 * If the profile
                 * represents the TRC for the corresponding component
                 * as a table rather than a single gamma value, an
                 * exception is thrown.  In this case the actual table
                 * can be obtained through the {@link #getTRC(int)} method.
                 * When using a gamma value,
                 * the linear component (R, G, or B) is computed as follows:
                 * <pre>
                 * &nbsp;                                         gamma
                 * &nbsp;        linearComponent = deviceComponent
                 * </pre>
                 */
                // @ts-ignore
                public getGamma(component: number): number;
                /**
                 * Returns the TRC for a particular component as an array.
                 * Component must be <code>REDCOMPONENT</code>,
                 * <code>GREENCOMPONENT</code>, or <code>BLUECOMPONENT</code>.
                 * Otherwise the returned array
                 * represents a lookup table where the input component value
                 * is conceptually in the range [0.0, 1.0].  Value 0.0 maps
                 * to array index 0 and value 1.0 maps to array index length-1.
                 * Interpolation might be used to generate output values for
                 * input values that do not map exactly to an index in the
                 * array.  Output values also map linearly to the range [0.0, 1.0].
                 * Value 0.0 is represented by an array value of 0x0000 and
                 * value 1.0 by 0xFFFF.  In other words, the values are really unsigned
                 * <code>short</code> values even though they are returned in a
                 * <code>short</code> array.
                 * If the profile has specified the corresponding TRC
                 * as linear (gamma = 1.0) or as a simple gamma value, this method
                 * throws an exception.  In this case, the {@link #getGamma(int)}
                 * method should be used to get the gamma value.
                 */
                // @ts-ignore
                public getTRC(component: number): number[];
            }
        }
    }
}
