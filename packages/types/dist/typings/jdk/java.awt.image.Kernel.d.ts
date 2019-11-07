// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace image {
            // @ts-ignore
             class Kernel extends java.lang.Object {
                /**
                 * Constructs a <code>Kernel</code> object from an array of floats.
                 * The first <code>width</code>*<code>height</code> elements of
                 * the <code>data</code> array are copied.
                 * If the length of the <code>data</code> array is less
                 * than width*height, an <code>IllegalArgumentException</code> is thrown.
                 * The X origin is (width-1)/2 and the Y origin is (height-1)/2.
                 */
                // @ts-ignore
                constructor(width: number, height: number, data: number)
                /**
                 * Returns the X origin of this <code>Kernel</code>.
                 */
                // @ts-ignore
                public getXOrigin(): number;
                /**
                 * Returns the Y origin of this <code>Kernel</code>.
                 */
                // @ts-ignore
                public getYOrigin(): number;
                /**
                 * Returns the width of this <code>Kernel</code>.
                 */
                // @ts-ignore
                public getWidth(): number;
                /**
                 * Returns the height of this <code>Kernel</code>.
                 */
                // @ts-ignore
                public getHeight(): number;
                /**
                 * Returns the kernel data in row major order.
                 * The <code>data</code> array is returned.  If <code>data</code>
                 * is <code>null</code>, a new array is allocated.
                 */
                // @ts-ignore
                public getKernelData(data: number): number[];
                /**
                 * Clones this object.
                 */
                // @ts-ignore
                public clone(): java.lang.Object;
            }
        }
    }
}
