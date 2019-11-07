declare namespace java {
    namespace awt {
        namespace image {
            // @ts-ignore
            abstract class LookupTable extends java.lang.Object {
                /**
                 * Constructs a new LookupTable from the number of components and an offset
                 * into the lookup table.
                 */
                // @ts-ignore
                constructor(offset: number, numComponents: number)
                /**
                 * Returns the number of components in the lookup table.
                 */
                // @ts-ignore
                public getNumComponents(): number;
                /**
                 * Returns the offset.
                 */
                // @ts-ignore
                public getOffset(): number;
                /**
                 * Returns an <code>int</code> array of components for
                 * one pixel.  The <code>dest</code> array contains the
                 * result of the lookup and is returned.  If dest is
                 * <code>null</code>, a new array is allocated.  The
                 * source and destination can be equal.
                 */
                // @ts-ignore
                public abstract lookupPixel(src: number, dest: number): number[];
            }
        }
    }
}
