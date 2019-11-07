declare namespace java {
    namespace awt {
        // @ts-ignore
         class Color extends java.lang.Object {
            /**
             * Creates an opaque sRGB color with the specified red, green,
             * and blue values in the range (0 - 255).
             * The actual color used in rendering depends
             * on finding the best match given the color space
             * available for a given output device.
             * Alpha is defaulted to 255.
             */
            // @ts-ignore
            constructor(r: number, g: number, b: number)
            /**
             * Creates an sRGB color with the specified red, green, blue, and alpha
             * values in the range (0 - 255).
             */
            // @ts-ignore
            constructor(r: number, g: number, b: number, a: number)
            /**
             * Creates an opaque sRGB color with the specified combined RGB value
             * consisting of the red component in bits 16-23, the green component
             * in bits 8-15, and the blue component in bits 0-7.  The actual color
             * used in rendering depends on finding the best match given the
             * color space available for a particular output device.  Alpha is
             * defaulted to 255.
             */
            // @ts-ignore
            constructor(rgb: number)
            /**
             * Creates an sRGB color with the specified combined RGBA value consisting
             * of the alpha component in bits 24-31, the red component in bits 16-23,
             * the green component in bits 8-15, and the blue component in bits 0-7.
             * If the <code>hasalpha</code> argument is <code>false</code>, alpha
             * is defaulted to 255.
             */
            // @ts-ignore
            constructor(rgba: number, hasalpha: boolean)
            /**
             * Creates an opaque sRGB color with the specified red, green, and blue
             * values in the range (0.0 - 1.0).  Alpha is defaulted to 1.0.  The
             * actual color used in rendering depends on finding the best
             * match given the color space available for a particular output
             * device.
             */
            // @ts-ignore
            constructor(r: number, g: number, b: number)
            /**
             * Creates an sRGB color with the specified red, green, blue, and
             * alpha values in the range (0.0 - 1.0).  The actual color
             * used in rendering depends on finding the best match given the
             * color space available for a particular output device.
             */
            // @ts-ignore
            constructor(r: number, g: number, b: number, a: number)
            /**
             * Creates a color in the specified <code>ColorSpace</code>
             * with the color components specified in the <code>float</code>
             * array and the specified alpha.  The number of components is
             * determined by the type of the <code>ColorSpace</code>.  For
             * example, RGB requires 3 components, but CMYK requires 4
             * components.
             */
            // @ts-ignore
            constructor(cspace: java.awt.color.ColorSpace, components: number, alpha: number)
            // @ts-ignore
            public static white: java.awt.Color;
            // @ts-ignore
            public static WHITE: java.awt.Color;
            // @ts-ignore
            public static lightGray: java.awt.Color;
            // @ts-ignore
            public static LIGHT_GRAY: java.awt.Color;
            // @ts-ignore
            public static gray: java.awt.Color;
            // @ts-ignore
            public static GRAY: java.awt.Color;
            // @ts-ignore
            public static darkGray: java.awt.Color;
            // @ts-ignore
            public static DARK_GRAY: java.awt.Color;
            // @ts-ignore
            public static black: java.awt.Color;
            // @ts-ignore
            public static BLACK: java.awt.Color;
            // @ts-ignore
            public static red: java.awt.Color;
            // @ts-ignore
            public static RED: java.awt.Color;
            // @ts-ignore
            public static pink: java.awt.Color;
            // @ts-ignore
            public static PINK: java.awt.Color;
            // @ts-ignore
            public static orange: java.awt.Color;
            // @ts-ignore
            public static ORANGE: java.awt.Color;
            // @ts-ignore
            public static yellow: java.awt.Color;
            // @ts-ignore
            public static YELLOW: java.awt.Color;
            // @ts-ignore
            public static green: java.awt.Color;
            // @ts-ignore
            public static GREEN: java.awt.Color;
            // @ts-ignore
            public static magenta: java.awt.Color;
            // @ts-ignore
            public static MAGENTA: java.awt.Color;
            // @ts-ignore
            public static cyan: java.awt.Color;
            // @ts-ignore
            public static CYAN: java.awt.Color;
            // @ts-ignore
            public static blue: java.awt.Color;
            // @ts-ignore
            public static BLUE: java.awt.Color;
            /**
             * Returns the red component in the range 0-255 in the default sRGB
             * space.
             */
            // @ts-ignore
            public getRed(): number;
            /**
             * Returns the green component in the range 0-255 in the default sRGB
             * space.
             */
            // @ts-ignore
            public getGreen(): number;
            /**
             * Returns the blue component in the range 0-255 in the default sRGB
             * space.
             */
            // @ts-ignore
            public getBlue(): number;
            /**
             * Returns the alpha component in the range 0-255.
             */
            // @ts-ignore
            public getAlpha(): number;
            /**
             * Returns the RGB value representing the color in the default sRGB
             * {@link ColorModel}.
             * (Bits 24-31 are alpha, 16-23 are red, 8-15 are green, 0-7 are
             * blue).
             */
            // @ts-ignore
            public getRGB(): number;
            /**
             * Creates a new <code>Color</code> that is a brighter version of this
             * <code>Color</code>.
             * <p>
             * This method applies an arbitrary scale factor to each of the three RGB
             * components of this <code>Color</code> to create a brighter version
             * of this <code>Color</code>.
             * The {@code alpha} value is preserved.
             * Although <code>brighter</code> and
             * <code>darker</code> are inverse operations, the results of a
             * series of invocations of these two methods might be inconsistent
             * because of rounding errors.
             */
            // @ts-ignore
            public brighter(): java.awt.Color;
            /**
             * Creates a new <code>Color</code> that is a darker version of this
             * <code>Color</code>.
             * <p>
             * This method applies an arbitrary scale factor to each of the three RGB
             * components of this <code>Color</code> to create a darker version of
             * this <code>Color</code>.
             * The {@code alpha} value is preserved.
             * Although <code>brighter</code> and
             * <code>darker</code> are inverse operations, the results of a series
             * of invocations of these two methods might be inconsistent because
             * of rounding errors.
             */
            // @ts-ignore
            public darker(): java.awt.Color;
            /**
             * Computes the hash code for this <code>Color</code>.
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Determines whether another object is equal to this
             * <code>Color</code>.
             * <p>
             * The result is <code>true</code> if and only if the argument is not
             * <code>null</code> and is a <code>Color</code> object that has the same
             * red, green, blue, and alpha values as this object.
             */
            // @ts-ignore
            public equals(obj: java.lang.Object): boolean;
            /**
             * Returns a string representation of this <code>Color</code>. This
             * method is intended to be used only for debugging purposes.  The
             * content and format of the returned string might vary between
             * implementations. The returned string might be empty but cannot
             * be <code>null</code>.
             */
            // @ts-ignore
            public toString(): string;
            /**
             * Converts a <code>String</code> to an integer and returns the
             * specified opaque <code>Color</code>. This method handles string
             * formats that are used to represent octal and hexadecimal numbers.
             */
            // @ts-ignore
            public static decode(nm: string): java.awt.Color;
            /**
             * Finds a color in the system properties.
             * <p>
             * The argument is treated as the name of a system property to
             * be obtained. The string value of this property is then interpreted
             * as an integer which is then converted to a <code>Color</code>
             * object.
             * <p>
             * If the specified property is not found or could not be parsed as
             * an integer then <code>null</code> is returned.
             */
            // @ts-ignore
            public static getColor(nm: string): java.awt.Color;
            /**
             * Finds a color in the system properties.
             * <p>
             * The first argument is treated as the name of a system property to
             * be obtained. The string value of this property is then interpreted
             * as an integer which is then converted to a <code>Color</code>
             * object.
             * <p>
             * If the specified property is not found or cannot be parsed as
             * an integer then the <code>Color</code> specified by the second
             * argument is returned instead.
             */
            // @ts-ignore
            public static getColor(nm: string, v: java.awt.Color): java.awt.Color;
            /**
             * Finds a color in the system properties.
             * <p>
             * The first argument is treated as the name of a system property to
             * be obtained. The string value of this property is then interpreted
             * as an integer which is then converted to a <code>Color</code>
             * object.
             * <p>
             * If the specified property is not found or could not be parsed as
             * an integer then the integer value <code>v</code> is used instead,
             * and is converted to a <code>Color</code> object.
             */
            // @ts-ignore
            public static getColor(nm: string, v: number): java.awt.Color;
            /**
             * Converts the components of a color, as specified by the HSB
             * model, to an equivalent set of values for the default RGB model.
             * <p>
             * The <code>saturation</code> and <code>brightness</code> components
             * should be floating-point values between zero and one
             * (numbers in the range 0.0-1.0).  The <code>hue</code> component
             * can be any floating-point number.  The floor of this number is
             * subtracted from it to create a fraction between 0 and 1.  This
             * fractional number is then multiplied by 360 to produce the hue
             * angle in the HSB color model.
             * <p>
             * The integer that is returned by <code>HSBtoRGB</code> encodes the
             * value of a color in bits 0-23 of an integer value that is the same
             * format used by the method {@link #getRGB() getRGB}.
             * This integer can be supplied as an argument to the
             * <code>Color</code> constructor that takes a single integer argument.
             */
            // @ts-ignore
            public static HSBtoRGB(hue: number, saturation: number, brightness: number): number;
            /**
             * Converts the components of a color, as specified by the default RGB
             * model, to an equivalent set of values for hue, saturation, and
             * brightness that are the three components of the HSB model.
             * <p>
             * If the <code>hsbvals</code> argument is <code>null</code>, then a
             * new array is allocated to return the result. Otherwise, the method
             * returns the array <code>hsbvals</code>, with the values put into
             * that array.
             */
            // @ts-ignore
            public static RGBtoHSB(r: number, g: number, b: number, hsbvals: number): number[];
            /**
             * Creates a <code>Color</code> object based on the specified values
             * for the HSB color model.
             * <p>
             * The <code>s</code> and <code>b</code> components should be
             * floating-point values between zero and one
             * (numbers in the range 0.0-1.0).  The <code>h</code> component
             * can be any floating-point number.  The floor of this number is
             * subtracted from it to create a fraction between 0 and 1.  This
             * fractional number is then multiplied by 360 to produce the hue
             * angle in the HSB color model.
             */
            // @ts-ignore
            public static getHSBColor(h: number, s: number, b: number): java.awt.Color;
            /**
             * Returns a <code>float</code> array containing the color and alpha
             * components of the <code>Color</code>, as represented in the default
             * sRGB color space.
             * If <code>compArray</code> is <code>null</code>, an array of length
             * 4 is created for the return value.  Otherwise,
             * <code>compArray</code> must have length 4 or greater,
             * and it is filled in with the components and returned.
             */
            // @ts-ignore
            public getRGBComponents(compArray: number): number[];
            /**
             * Returns a <code>float</code> array containing only the color
             * components of the <code>Color</code>, in the default sRGB color
             * space.  If <code>compArray</code> is <code>null</code>, an array of
             * length 3 is created for the return value.  Otherwise,
             * <code>compArray</code> must have length 3 or greater, and it is
             * filled in with the components and returned.
             */
            // @ts-ignore
            public getRGBColorComponents(compArray: number): number[];
            /**
             * Returns a <code>float</code> array containing the color and alpha
             * components of the <code>Color</code>, in the
             * <code>ColorSpace</code> of the <code>Color</code>.
             * If <code>compArray</code> is <code>null</code>, an array with
             * length equal to the number of components in the associated
             * <code>ColorSpace</code> plus one is created for
             * the return value.  Otherwise, <code>compArray</code> must have at
             * least this length and it is filled in with the components and
             * returned.
             */
            // @ts-ignore
            public getComponents(compArray: number): number[];
            /**
             * Returns a <code>float</code> array containing only the color
             * components of the <code>Color</code>, in the
             * <code>ColorSpace</code> of the <code>Color</code>.
             * If <code>compArray</code> is <code>null</code>, an array with
             * length equal to the number of components in the associated
             * <code>ColorSpace</code> is created for
             * the return value.  Otherwise, <code>compArray</code> must have at
             * least this length and it is filled in with the components and
             * returned.
             */
            // @ts-ignore
            public getColorComponents(compArray: number): number[];
            /**
             * Returns a <code>float</code> array containing the color and alpha
             * components of the <code>Color</code>, in the
             * <code>ColorSpace</code> specified by the <code>cspace</code>
             * parameter.  If <code>compArray</code> is <code>null</code>, an
             * array with length equal to the number of components in
             * <code>cspace</code> plus one is created for the return value.
             * Otherwise, <code>compArray</code> must have at least this
             * length, and it is filled in with the components and returned.
             */
            // @ts-ignore
            public getComponents(cspace: java.awt.color.ColorSpace, compArray: number): number[];
            /**
             * Returns a <code>float</code> array containing only the color
             * components of the <code>Color</code> in the
             * <code>ColorSpace</code> specified by the <code>cspace</code>
             * parameter. If <code>compArray</code> is <code>null</code>, an array
             * with length equal to the number of components in
             * <code>cspace</code> is created for the return value.  Otherwise,
             * <code>compArray</code> must have at least this length, and it is
             * filled in with the components and returned.
             */
            // @ts-ignore
            public getColorComponents(cspace: java.awt.color.ColorSpace, compArray: number): number[];
            /**
             * Returns the <code>ColorSpace</code> of this <code>Color</code>.
             */
            // @ts-ignore
            public getColorSpace(): java.awt.color.ColorSpace;
            /**
             * Creates and returns a {@link PaintContext} used to
             * generate a solid color field pattern.
             * See the {@link Paint#createContext specification} of the
             * method in the {@link Paint} interface for information
             * on null parameter handling.
             */
            // @ts-ignore
            public createContext(cm: java.awt.image.ColorModel, r: java.awt.Rectangle, r2d: java.awt.geom.Rectangle2D, xform: java.awt.geom.AffineTransform, hints: java.awt.RenderingHints): java.awt.PaintContext;
            /**
             * Returns the transparency mode for this <code>Color</code>.  This is
             * required to implement the <code>Paint</code> interface.
             */
            // @ts-ignore
            public getTransparency(): number;
        }
    }
}
