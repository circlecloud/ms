declare namespace java {
    namespace awt {
        namespace color {
            // @ts-ignore
             class ICC_ProfileGray extends java.awt.color.ICC_Profile {
                /**
                 * Returns a float array of length 3 containing the X, Y, and Z
                 * components of the mediaWhitePointTag in the ICC profile.
                 */
                // @ts-ignore
                public getMediaWhitePoint(): number[];
                /**
                 * Returns a gamma value representing the tone reproduction
                 * curve (TRC).  If the profile represents the TRC as a table rather
                 * than a single gamma value, then an exception is thrown.  In this
                 * case the actual table can be obtained via getTRC().  When
                 * using a gamma value, the PCS Y component is computed as follows:
                 * <pre>
                 * &nbsp;                         gamma
                 * &nbsp;        PCSY = deviceGray
                 * </pre>
                 */
                // @ts-ignore
                public getGamma(): number;
                /**
                 * Returns the TRC as an array of shorts.  If the profile has
                 * specified the TRC as linear (gamma = 1.0) or as a simple gamma
                 * value, this method throws an exception, and the getGamma() method
                 * should be used to get the gamma value.  Otherwise the short array
                 * returned here represents a lookup table where the input Gray value
                 * is conceptually in the range [0.0, 1.0].  Value 0.0 maps
                 * to array index 0 and value 1.0 maps to array index length-1.
                 * Interpolation may be used to generate output values for
                 * input values which do not map exactly to an index in the
                 * array.  Output values also map linearly to the range [0.0, 1.0].
                 * Value 0.0 is represented by an array value of 0x0000 and
                 * value 1.0 by 0xFFFF, i.e. the values are really unsigned
                 * short values, although they are returned in a short array.
                 */
                // @ts-ignore
                public getTRC(): number[];
            }
        }
    }
}
