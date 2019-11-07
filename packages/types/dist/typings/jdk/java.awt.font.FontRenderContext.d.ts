declare namespace java {
    namespace awt {
        namespace font {
            // @ts-ignore
             class FontRenderContext extends java.lang.Object {
                /**
                 * Constructs a new <code>FontRenderContext</code>
                 * object.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a <code>FontRenderContext</code> object from an
                 * optional {@link AffineTransform} and two <code>boolean</code>
                 * values that determine if the newly constructed object has
                 * anti-aliasing or fractional metrics.
                 * In each case the boolean values <CODE>true</CODE> and <CODE>false</CODE>
                 * correspond to the rendering hint values <CODE>ON</CODE> and
                 * <CODE>OFF</CODE> respectively.
                 * <p>
                 * To specify other hint values, use the constructor which
                 * specifies the rendering hint values as parameters :
                 * {@link #FontRenderContext(AffineTransform, Object, Object)}.
                 */
                // @ts-ignore
                constructor(tx: java.awt.geom.AffineTransform, isAntiAliased: boolean, usesFractionalMetrics: boolean)
                /**
                 * Constructs a <code>FontRenderContext</code> object from an
                 * optional {@link AffineTransform} and two <code>Object</code>
                 * values that determine if the newly constructed object has
                 * anti-aliasing or fractional metrics.
                 */
                // @ts-ignore
                constructor(tx: java.awt.geom.AffineTransform, aaHint: java.lang.Object, fmHint: java.lang.Object)
                /**
                 * Indicates whether or not this <code>FontRenderContext</code> object
                 * measures text in a transformed render context.
                 */
                // @ts-ignore
                public isTransformed(): boolean;
                /**
                 * Returns the integer type of the affine transform for this
                 * <code>FontRenderContext</code> as specified by
                 * {@link java.awt.geom.AffineTransform#getType()}
                 */
                // @ts-ignore
                public getTransformType(): number;
                /**
                 * Gets the transform that is used to scale typographical points
                 * to pixels in this <code>FontRenderContext</code>.
                 */
                // @ts-ignore
                public getTransform(): java.awt.geom.AffineTransform;
                /**
                 * Returns a boolean which indicates whether or not some form of
                 * antialiasing is specified by this <code>FontRenderContext</code>.
                 * Call {@link #getAntiAliasingHint() getAntiAliasingHint()}
                 * for the specific rendering hint value.
                 */
                // @ts-ignore
                public isAntiAliased(): boolean;
                /**
                 * Returns a boolean which whether text fractional metrics mode
                 * is used in this <code>FontRenderContext</code>.
                 * Call {@link #getFractionalMetricsHint() getFractionalMetricsHint()}
                 * to obtain the corresponding rendering hint value.
                 */
                // @ts-ignore
                public usesFractionalMetrics(): boolean;
                /**
                 * Return the text anti-aliasing rendering mode hint used in this
                 * <code>FontRenderContext</code>.
                 * This will be one of the text antialiasing rendering hint values
                 * defined in {@link java.awt.RenderingHints java.awt.RenderingHints}.
                 */
                // @ts-ignore
                public getAntiAliasingHint(): java.lang.Object;
                /**
                 * Return the text fractional metrics rendering mode hint used in this
                 * <code>FontRenderContext</code>.
                 * This will be one of the text fractional metrics rendering hint values
                 * defined in {@link java.awt.RenderingHints java.awt.RenderingHints}.
                 */
                // @ts-ignore
                public getFractionalMetricsHint(): java.lang.Object;
                /**
                 * Return true if obj is an instance of FontRenderContext and has the same
                 * transform, antialiasing, and fractional metrics values as this.
                 */
                // @ts-ignore
                public equals(obj: java.lang.Object): boolean;
                /**
                 * Return true if rhs has the same transform, antialiasing,
                 * and fractional metrics values as this.
                 */
                // @ts-ignore
                public equals(rhs: java.awt.font.FontRenderContext): boolean;
                /**
                 * Return a hashcode for this FontRenderContext.
                 */
                // @ts-ignore
                public hashCode(): number;
            }
        }
    }
}
