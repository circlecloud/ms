declare namespace java {
    namespace lang {
        namespace reflect {
            // @ts-ignore
             class Array extends java.lang.Object {
                /**
                 * Return the element of the array at the specified index.
                 * This reproduces the effect of <code>array[index]</code>
                 * If the array component is a base type, the result is
                 * automatically wrapped.
                 */
                // @ts-ignore
                public static get(array: java.lang.Object, index: number): java.lang.Object;
                /**
                 * Return the element of the array at the specified index,
                 * converted to a boolean if possible.
                 * This reproduces the effect of <code>array[index]</code>
                 */
                // @ts-ignore
                public static getBoolean(array: java.lang.Object, index: number): boolean;
                /**
                 * Return the element of the array at the specified index,
                 * converted to a byte if possible.
                 * This reproduces the effect of <code>array[index]</code>
                 */
                // @ts-ignore
                public static getByte(array: java.lang.Object, index: number): number;
                /**
                 * Return the element of the array at the specified index,
                 * converted to a char if possible.
                 * This reproduces the effect of <code>array[index]</code>
                 */
                // @ts-ignore
                public static getChar(array: java.lang.Object, index: number): string;
                /**
                 * Return the element of the array at the specified index,
                 * converted to a double if possible.
                 * This reproduces the effect of <code>array[index]</code>
                 */
                // @ts-ignore
                public static getDouble(array: java.lang.Object, index: number): number;
                /**
                 * Return the element of the array at the specified index,
                 * converted to a float if possible.
                 * This reproduces the effect of <code>array[index]</code>
                 */
                // @ts-ignore
                public static getFloat(array: java.lang.Object, index: number): number;
                /**
                 * Return the element of the array at the specified index,
                 * converted to an int if possible.
                 * This reproduces the effect of <code>array[index]</code>
                 */
                // @ts-ignore
                public static getInt(array: java.lang.Object, index: number): number;
                /**
                 * Return the length of the array.
                 * This reproduces the effect of <code>array.length</code>
                 */
                // @ts-ignore
                public static getLength(array: java.lang.Object): number;
                /**
                 * Return the element of the array at the specified index,
                 * converted to a long if possible.
                 * This reproduces the effect of <code>array[index]</code>
                 */
                // @ts-ignore
                public static getLong(array: java.lang.Object, index: number): number;
                /**
                 * Return the element of the array at the specified index,
                 * converted to a short if possible.
                 * This reproduces the effect of <code>array[index]</code>
                 */
                // @ts-ignore
                public static getShort(array: java.lang.Object, index: number): number;
                /**
                 * Return a new multidimensional array of the specified component type and dimensions.
                 * This reproduces the effect of <code>new componentType[d0][d1]...[dn]</code>
                 * for a dimensions array of { d0, d1, ... , dn }
                 */
                // @ts-ignore
                public static newInstance(componentType: java.lang.Class, dimensions: number): java.lang.Object;
                /**
                 * Return a new array of the specified component type and length.
                 * This reproduces the effect of <code>new componentType[size]</code>
                 */
                // @ts-ignore
                public static newInstance(componentType: java.lang.Class, size: number): java.lang.Object;
                /**
                 * Set the element of the array at the specified index to the value.
                 * This reproduces the effect of <code>array[index] = value</code>
                 * If the array component is a base type, the value is automatically
                 * unwrapped
                 */
                // @ts-ignore
                public static set(array: java.lang.Object, index: number, value: java.lang.Object): void;
                /**
                 * Set the element of the array at the specified index to the boolean
                 * value. This reproduces the effect of <code>array[index] = value</code>
                 */
                // @ts-ignore
                public static setBoolean(array: java.lang.Object, index: number, value: boolean): void;
                /**
                 * Set the element of the array at the specified index to the byte
                 * value. This reproduces the effect of <code>array[index] = value</code>
                 */
                // @ts-ignore
                public static setByte(array: java.lang.Object, index: number, value: number): void;
                /**
                 * Set the element of the array at the specified index to the char
                 * value. This reproduces the effect of <code>array[index] = value</code>
                 */
                // @ts-ignore
                public static setChar(array: java.lang.Object, index: number, value: string): void;
                /**
                 * Set the element of the array at the specified index to the double
                 * value. This reproduces the effect of <code>array[index] = value</code>
                 */
                // @ts-ignore
                public static setDouble(array: java.lang.Object, index: number, value: number): void;
                /**
                 * Set the element of the array at the specified index to the float
                 * value. This reproduces the effect of <code>array[index] = value</code>
                 */
                // @ts-ignore
                public static setFloat(array: java.lang.Object, index: number, value: number): void;
                /**
                 * Set the element of the array at the specified index to the int
                 * value. This reproduces the effect of <code>array[index] = value</code>
                 */
                // @ts-ignore
                public static setInt(array: java.lang.Object, index: number, value: number): void;
                /**
                 * Set the element of the array at the specified index to the long
                 * value. This reproduces the effect of <code>array[index] = value</code>
                 */
                // @ts-ignore
                public static setLong(array: java.lang.Object, index: number, value: number): void;
                /**
                 * Set the element of the array at the specified index to the short
                 * value. This reproduces the effect of <code>array[index] = value</code>
                 */
                // @ts-ignore
                public static setShort(array: java.lang.Object, index: number, value: number): void;
            }
        }
    }
}
