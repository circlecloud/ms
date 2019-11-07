declare namespace java {
    namespace awt {
        namespace font {
            // @ts-ignore
             class TransformAttribute extends java.lang.Object {
                /**
                 * Wraps the specified transform.  The transform is cloned and a
                 * reference to the clone is kept.  The original transform is unchanged.
                 * If null is passed as the argument, this constructor behaves as though
                 * it were the identity transform.  (Note that it is preferable to use
                 * {@link #IDENTITY} in this case.)
                 */
                // @ts-ignore
                constructor(transform: java.awt.geom.AffineTransform)
                // @ts-ignore
                public static IDENTITY: java.awt.font.TransformAttribute;
                /**
                 * Returns a copy of the wrapped transform.
                 */
                // @ts-ignore
                public getTransform(): java.awt.geom.AffineTransform;
                /**
                 * Returns <code>true</code> if the wrapped transform is
                 * an identity transform.
                 */
                // @ts-ignore
                public isIdentity(): boolean;
                // @ts-ignore
                public hashCode(): number;
                /**
                 * Returns <code>true</code> if rhs is a <code>TransformAttribute</code>
                 * whose transform is equal to this <code>TransformAttribute</code>'s
                 * transform.
                 */
                // @ts-ignore
                public equals(rhs: java.lang.Object): boolean;
            }
        }
    }
}
