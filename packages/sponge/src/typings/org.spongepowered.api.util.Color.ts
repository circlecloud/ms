declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                // @ts-ignore
                 class Color implements org.spongepowered.api.data.DataSerializable {
                    // @ts-ignore
                    public static BLACK: org.spongepowered.api.util.Color;
                    // @ts-ignore
                    public static GRAY: org.spongepowered.api.util.Color;
                    // @ts-ignore
                    public static WHITE: org.spongepowered.api.util.Color;
                    // @ts-ignore
                    public static BLUE: org.spongepowered.api.util.Color;
                    // @ts-ignore
                    public static GREEN: org.spongepowered.api.util.Color;
                    // @ts-ignore
                    public static LIME: org.spongepowered.api.util.Color;
                    // @ts-ignore
                    public static RED: org.spongepowered.api.util.Color;
                    // @ts-ignore
                    public static YELLOW: org.spongepowered.api.util.Color;
                    // @ts-ignore
                    public static MAGENTA: org.spongepowered.api.util.Color;
                    // @ts-ignore
                    public static PURPLE: org.spongepowered.api.util.Color;
                    // @ts-ignore
                    public static DARK_CYAN: org.spongepowered.api.util.Color;
                    // @ts-ignore
                    public static DARK_GREEN: org.spongepowered.api.util.Color;
                    // @ts-ignore
                    public static DARK_MAGENTA: org.spongepowered.api.util.Color;
                    // @ts-ignore
                    public static CYAN: org.spongepowered.api.util.Color;
                    // @ts-ignore
                    public static NAVY: org.spongepowered.api.util.Color;
                    // @ts-ignore
                    public static PINK: org.spongepowered.api.util.Color;
                    /**
                     * Gets a new {@link Color} based on the hexadecimal value
                     * for a combined {@code red}, {@code green}, and {@code blue}
                     * color. Note that colors do not utilize an alpha modifier
                     */
                    // @ts-ignore
                    public static ofRgb(hex: number): org.spongepowered.api.util.Color;
                    /**
                     * Gets a new {@link Color} based on the hexadecimal value
                     * for a combined {@code red}, {@code green}, and {@code blue}
                     * color. Note that colors do not utilize an alpha modifier
                     */
                    // @ts-ignore
                    public static ofRgb(red: number, green: number, blue: number): org.spongepowered.api.util.Color;
                    /**
                     * Converts the provided {@link java.awt.Color} object into a valid
                     * {@link Color} object to be used throughout the API.
                     */
                    // @ts-ignore
                    public static of(color: any): org.spongepowered.api.util.Color;
                    /**
                     * Converts the provided {@link Vector3i} into a {@link Color} object.
                     */
                    // @ts-ignore
                    public static of(vector3i: any /*Vector3i*/): org.spongepowered.api.util.Color;
                    /**
                     * converts the provided {@link Vector3f} into a {@link Color} object.
                     */
                    // @ts-ignore
                    public static of(vector3f: any /*Vector3f*/): org.spongepowered.api.util.Color;
                    /**
                     * converts the provided {@link Vector3d} into a {@link Color} object.
                     */
                    // @ts-ignore
                    public static of(vector3d: any /*Vector3d*/): org.spongepowered.api.util.Color;
                    /**
                     * Creates a new {@link Color} combining the provided {@link DyeColor}
                     * objects. Since {@link DyeColor}s can be converted into {@link Color}
                     * objects themselves, their summation and average is taken into effect
                     * to properly mix the colors together.
                     */
                    // @ts-ignore
                    public static mixDyeColors(colors: org.spongepowered.api.data.type.DyeColor): org.spongepowered.api.util.Color;
                    /**
                     * Creates a new {@link Color} combining the provided {@link Color}
                     * objects, their summation and average is taken into effect
                     * to properly mix the colors together.
                     */
                    // @ts-ignore
                    public static mixColors(colors: org.spongepowered.api.util.Color): org.spongepowered.api.util.Color;
                    /**
                     * Gets the {@code red} value of this {@link Color}.
                     */
                    // @ts-ignore
                    public getRed(): number;
                    /**
                     * Creates a new {@link Color} by using the provided
                     * {@code red} color, while retaining the current {@link #getGreen()}
                     * and {@link #getBlue()} values.
                     */
                    // @ts-ignore
                    public withRed(red: number): org.spongepowered.api.util.Color;
                    /**
                     * Gets the {@code red} value of this {@link Color}.
                     */
                    // @ts-ignore
                    public getGreen(): number;
                    /**
                     * Creates a new {@link Color} by using the provided
                     * {@code green} color, while retaining the current {@link #getRed()}
                     * and {@link #getBlue()} values.
                     */
                    // @ts-ignore
                    public withGreen(green: number): org.spongepowered.api.util.Color;
                    /**
                     * Gets the current {@code blue} value of this {@link Color}.
                     */
                    // @ts-ignore
                    public getBlue(): number;
                    /**
                     * Creates a new {@link Color} by using the provided
                     * {@code blue} color, while retaining the current {@link #getGreen()}
                     * and {@link #getRed()} ()} values.
                     */
                    // @ts-ignore
                    public withBlue(blue: number): org.spongepowered.api.util.Color;
                    /**
                     * Converts this {@link Color} into a {@link java.awt.Color} object for use
                     * in other APIs.
                     */
                    // @ts-ignore
                    public asJavaColor(): any;
                    /**
                     * Gets the {@code red green blue} representation of this color in
                     * a "hexadecimal" format.
                     */
                    // @ts-ignore
                    public getRgb(): number;
                    /**
                     * Creates a new color with the provided {@code Colors}.
                     */
                    // @ts-ignore
                    public mixWithColors(colors: org.spongepowered.api.util.Color): org.spongepowered.api.util.Color;
                    /**
                     * Similar to {@link #mixWithColors(Color...)}, mixes the
                     * provided {@link DyeColor}s with this {@link Color}.
                     */
                    // @ts-ignore
                    public mixWithDyes(dyeColors: org.spongepowered.api.data.type.DyeColor): org.spongepowered.api.util.Color;
                    // @ts-ignore
                    public getContentVersion(): number;
                    // @ts-ignore
                    public toContainer(): org.spongepowered.api.data.DataContainer;
                    // @ts-ignore
                    public hashCode(): number;
                    // @ts-ignore
                    public equals(obj: any): boolean;
                    // @ts-ignore
                    public toString(): string;
                }
            }
        }
    }
}
