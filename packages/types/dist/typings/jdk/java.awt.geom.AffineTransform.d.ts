// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace geom {
            // @ts-ignore
             class AffineTransform extends java.lang.Object {
                /**
                 * Constructs a new <code>AffineTransform</code> representing the
                 * Identity transformation.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a new <code>AffineTransform</code> that is a copy of
                 * the specified <code>AffineTransform</code> object.
                 */
                // @ts-ignore
                constructor(Tx: java.awt.geom.AffineTransform)
                /**
                 * Constructs a new <code>AffineTransform</code> from 6 floating point
                 * values representing the 6 specifiable entries of the 3x3
                 * transformation matrix.
                 */
                // @ts-ignore
                constructor(m00: number, m10: number, m01: number, m11: number, m02: number, m12: number)
                /**
                 * Constructs a new <code>AffineTransform</code> from an array of
                 * floating point values representing either the 4 non-translation
                 * entries or the 6 specifiable entries of the 3x3 transformation
                 * matrix.  The values are retrieved from the array as
                 * {&nbsp;m00&nbsp;m10&nbsp;m01&nbsp;m11&nbsp;[m02&nbsp;m12]}.
                 */
                // @ts-ignore
                constructor(flatmatrix: number)
                /**
                 * Constructs a new <code>AffineTransform</code> from 6 double
                 * precision values representing the 6 specifiable entries of the 3x3
                 * transformation matrix.
                 */
                // @ts-ignore
                constructor(m00: number, m10: number, m01: number, m11: number, m02: number, m12: number)
                /**
                 * Constructs a new <code>AffineTransform</code> from an array of
                 * double precision values representing either the 4 non-translation
                 * entries or the 6 specifiable entries of the 3x3 transformation
                 * matrix. The values are retrieved from the array as
                 * {&nbsp;m00&nbsp;m10&nbsp;m01&nbsp;m11&nbsp;[m02&nbsp;m12]}.
                 */
                // @ts-ignore
                constructor(flatmatrix: number)
                // @ts-ignore
                public static TYPE_IDENTITY: number;
                // @ts-ignore
                public static TYPE_TRANSLATION: number;
                // @ts-ignore
                public static TYPE_UNIFORM_SCALE: number;
                // @ts-ignore
                public static TYPE_GENERAL_SCALE: number;
                // @ts-ignore
                public static TYPE_MASK_SCALE: number;
                // @ts-ignore
                public static TYPE_FLIP: number;
                // @ts-ignore
                public static TYPE_QUADRANT_ROTATION: number;
                // @ts-ignore
                public static TYPE_GENERAL_ROTATION: number;
                // @ts-ignore
                public static TYPE_MASK_ROTATION: number;
                // @ts-ignore
                public static TYPE_GENERAL_TRANSFORM: number;
                /**
                 * Returns a transform representing a translation transformation.
                 * The matrix representing the returned transform is:
                 * <pre>
                 * [   1    0    tx  ]
                 * [   0    1    ty  ]
                 * [   0    0    1   ]
                 * </pre>
                 */
                // @ts-ignore
                public static getTranslateInstance(tx: number, ty: number): java.awt.geom.AffineTransform;
                /**
                 * Returns a transform representing a rotation transformation.
                 * The matrix representing the returned transform is:
                 * <pre>
                 * [   cos(theta)    -sin(theta)    0   ]
                 * [   sin(theta)     cos(theta)    0   ]
                 * [       0              0         1   ]
                 * </pre>
                 * Rotating by a positive angle theta rotates points on the positive
                 * X axis toward the positive Y axis.
                 * Note also the discussion of
                 * <a href="#quadrantapproximation">Handling 90-Degree Rotations</a>
                 * above.
                 */
                // @ts-ignore
                public static getRotateInstance(theta: number): java.awt.geom.AffineTransform;
                /**
                 * Returns a transform that rotates coordinates around an anchor point.
                 * This operation is equivalent to translating the coordinates so
                 * that the anchor point is at the origin (S1), then rotating them
                 * about the new origin (S2), and finally translating so that the
                 * intermediate origin is restored to the coordinates of the original
                 * anchor point (S3).
                 * <p>
                 * This operation is equivalent to the following sequence of calls:
                 * <pre>
                 * AffineTransform Tx = new AffineTransform();
                 * Tx.translate(anchorx, anchory);    // S3: final translation
                 * Tx.rotate(theta);                  // S2: rotate around anchor
                 * Tx.translate(-anchorx, -anchory);  // S1: translate anchor to origin
                 * </pre>
                 * The matrix representing the returned transform is:
                 * <pre>
                 * [   cos(theta)    -sin(theta)    x-x*cos+y*sin  ]
                 * [   sin(theta)     cos(theta)    y-x*sin-y*cos  ]
                 * [       0              0               1        ]
                 * </pre>
                 * Rotating by a positive angle theta rotates points on the positive
                 * X axis toward the positive Y axis.
                 * Note also the discussion of
                 * <a href="#quadrantapproximation">Handling 90-Degree Rotations</a>
                 * above.
                 */
                // @ts-ignore
                public static getRotateInstance(theta: number, anchorx: number, anchory: number): java.awt.geom.AffineTransform;
                /**
                 * Returns a transform that rotates coordinates according to
                 * a rotation vector.
                 * All coordinates rotate about the origin by the same amount.
                 * The amount of rotation is such that coordinates along the former
                 * positive X axis will subsequently align with the vector pointing
                 * from the origin to the specified vector coordinates.
                 * If both <code>vecx</code> and <code>vecy</code> are 0.0,
                 * an identity transform is returned.
                 * This operation is equivalent to calling:
                 * <pre>
                 * AffineTransform.getRotateInstance(Math.atan2(vecy, vecx));
                 * </pre>
                 */
                // @ts-ignore
                public static getRotateInstance(vecx: number, vecy: number): java.awt.geom.AffineTransform;
                /**
                 * Returns a transform that rotates coordinates around an anchor
                 * point according to a rotation vector.
                 * All coordinates rotate about the specified anchor coordinates
                 * by the same amount.
                 * The amount of rotation is such that coordinates along the former
                 * positive X axis will subsequently align with the vector pointing
                 * from the origin to the specified vector coordinates.
                 * If both <code>vecx</code> and <code>vecy</code> are 0.0,
                 * an identity transform is returned.
                 * This operation is equivalent to calling:
                 * <pre>
                 * AffineTransform.getRotateInstance(Math.atan2(vecy, vecx),
                 * anchorx, anchory);
                 * </pre>
                 */
                // @ts-ignore
                public static getRotateInstance(vecx: number, vecy: number, anchorx: number, anchory: number): java.awt.geom.AffineTransform;
                /**
                 * Returns a transform that rotates coordinates by the specified
                 * number of quadrants.
                 * This operation is equivalent to calling:
                 * <pre>
                 * AffineTransform.getRotateInstance(numquadrants * Math.PI / 2.0);
                 * </pre>
                 * Rotating by a positive number of quadrants rotates points on
                 * the positive X axis toward the positive Y axis.
                 */
                // @ts-ignore
                public static getQuadrantRotateInstance(numquadrants: number): java.awt.geom.AffineTransform;
                /**
                 * Returns a transform that rotates coordinates by the specified
                 * number of quadrants around the specified anchor point.
                 * This operation is equivalent to calling:
                 * <pre>
                 * AffineTransform.getRotateInstance(numquadrants * Math.PI / 2.0,
                 * anchorx, anchory);
                 * </pre>
                 * Rotating by a positive number of quadrants rotates points on
                 * the positive X axis toward the positive Y axis.
                 */
                // @ts-ignore
                public static getQuadrantRotateInstance(numquadrants: number, anchorx: number, anchory: number): java.awt.geom.AffineTransform;
                /**
                 * Returns a transform representing a scaling transformation.
                 * The matrix representing the returned transform is:
                 * <pre>
                 * [   sx   0    0   ]
                 * [   0    sy   0   ]
                 * [   0    0    1   ]
                 * </pre>
                 */
                // @ts-ignore
                public static getScaleInstance(sx: number, sy: number): java.awt.geom.AffineTransform;
                /**
                 * Returns a transform representing a shearing transformation.
                 * The matrix representing the returned transform is:
                 * <pre>
                 * [   1   shx   0   ]
                 * [  shy   1    0   ]
                 * [   0    0    1   ]
                 * </pre>
                 */
                // @ts-ignore
                public static getShearInstance(shx: number, shy: number): java.awt.geom.AffineTransform;
                /**
                 * Retrieves the flag bits describing the conversion properties of
                 * this transform.
                 * The return value is either one of the constants TYPE_IDENTITY
                 * or TYPE_GENERAL_TRANSFORM, or a combination of the
                 * appropriate flag bits.
                 * A valid combination of flag bits is an exclusive OR operation
                 * that can combine
                 * the TYPE_TRANSLATION flag bit
                 * in addition to either of the
                 * TYPE_UNIFORM_SCALE or TYPE_GENERAL_SCALE flag bits
                 * as well as either of the
                 * TYPE_QUADRANT_ROTATION or TYPE_GENERAL_ROTATION flag bits.
                 */
                // @ts-ignore
                public getType(): number;
                /**
                 * Returns the determinant of the matrix representation of the transform.
                 * The determinant is useful both to determine if the transform can
                 * be inverted and to get a single value representing the
                 * combined X and Y scaling of the transform.
                 * <p>
                 * If the determinant is non-zero, then this transform is
                 * invertible and the various methods that depend on the inverse
                 * transform do not need to throw a
                 * {@link NoninvertibleTransformException}.
                 * If the determinant is zero then this transform can not be
                 * inverted since the transform maps all input coordinates onto
                 * a line or a point.
                 * If the determinant is near enough to zero then inverse transform
                 * operations might not carry enough precision to produce meaningful
                 * results.
                 * <p>
                 * If this transform represents a uniform scale, as indicated by
                 * the <code>getType</code> method then the determinant also
                 * represents the square of the uniform scale factor by which all of
                 * the points are expanded from or contracted towards the origin.
                 * If this transform represents a non-uniform scale or more general
                 * transform then the determinant is not likely to represent a
                 * value useful for any purpose other than determining if inverse
                 * transforms are possible.
                 * <p>
                 * Mathematically, the determinant is calculated using the formula:
                 * <pre>
                 * |  m00  m01  m02  |
                 * |  m10  m11  m12  |  =  m00 * m11 - m01 * m10
                 * |   0    0    1   |
                 * </pre>
                 */
                // @ts-ignore
                public getDeterminant(): number;
                /**
                 * Retrieves the 6 specifiable values in the 3x3 affine transformation
                 * matrix and places them into an array of double precisions values.
                 * The values are stored in the array as
                 * {&nbsp;m00&nbsp;m10&nbsp;m01&nbsp;m11&nbsp;m02&nbsp;m12&nbsp;}.
                 * An array of 4 doubles can also be specified, in which case only the
                 * first four elements representing the non-transform
                 * parts of the array are retrieved and the values are stored into
                 * the array as {&nbsp;m00&nbsp;m10&nbsp;m01&nbsp;m11&nbsp;}
                 */
                // @ts-ignore
                public getMatrix(flatmatrix: number): void;
                /**
                 * Returns the X coordinate scaling element (m00) of the 3x3
                 * affine transformation matrix.
                 */
                // @ts-ignore
                public getScaleX(): number;
                /**
                 * Returns the Y coordinate scaling element (m11) of the 3x3
                 * affine transformation matrix.
                 */
                // @ts-ignore
                public getScaleY(): number;
                /**
                 * Returns the X coordinate shearing element (m01) of the 3x3
                 * affine transformation matrix.
                 */
                // @ts-ignore
                public getShearX(): number;
                /**
                 * Returns the Y coordinate shearing element (m10) of the 3x3
                 * affine transformation matrix.
                 */
                // @ts-ignore
                public getShearY(): number;
                /**
                 * Returns the X coordinate of the translation element (m02) of the
                 * 3x3 affine transformation matrix.
                 */
                // @ts-ignore
                public getTranslateX(): number;
                /**
                 * Returns the Y coordinate of the translation element (m12) of the
                 * 3x3 affine transformation matrix.
                 */
                // @ts-ignore
                public getTranslateY(): number;
                /**
                 * Concatenates this transform with a translation transformation.
                 * This is equivalent to calling concatenate(T), where T is an
                 * <code>AffineTransform</code> represented by the following matrix:
                 * <pre>
                 * [   1    0    tx  ]
                 * [   0    1    ty  ]
                 * [   0    0    1   ]
                 * </pre>
                 */
                // @ts-ignore
                public translate(tx: number, ty: number): void;
                /**
                 * Concatenates this transform with a rotation transformation.
                 * This is equivalent to calling concatenate(R), where R is an
                 * <code>AffineTransform</code> represented by the following matrix:
                 * <pre>
                 * [   cos(theta)    -sin(theta)    0   ]
                 * [   sin(theta)     cos(theta)    0   ]
                 * [       0              0         1   ]
                 * </pre>
                 * Rotating by a positive angle theta rotates points on the positive
                 * X axis toward the positive Y axis.
                 * Note also the discussion of
                 * <a href="#quadrantapproximation">Handling 90-Degree Rotations</a>
                 * above.
                 */
                // @ts-ignore
                public rotate(theta: number): void;
                /**
                 * Concatenates this transform with a transform that rotates
                 * coordinates around an anchor point.
                 * This operation is equivalent to translating the coordinates so
                 * that the anchor point is at the origin (S1), then rotating them
                 * about the new origin (S2), and finally translating so that the
                 * intermediate origin is restored to the coordinates of the original
                 * anchor point (S3).
                 * <p>
                 * This operation is equivalent to the following sequence of calls:
                 * <pre>
                 * translate(anchorx, anchory);      // S3: final translation
                 * rotate(theta);                    // S2: rotate around anchor
                 * translate(-anchorx, -anchory);    // S1: translate anchor to origin
                 * </pre>
                 * Rotating by a positive angle theta rotates points on the positive
                 * X axis toward the positive Y axis.
                 * Note also the discussion of
                 * <a href="#quadrantapproximation">Handling 90-Degree Rotations</a>
                 * above.
                 */
                // @ts-ignore
                public rotate(theta: number, anchorx: number, anchory: number): void;
                /**
                 * Concatenates this transform with a transform that rotates
                 * coordinates according to a rotation vector.
                 * All coordinates rotate about the origin by the same amount.
                 * The amount of rotation is such that coordinates along the former
                 * positive X axis will subsequently align with the vector pointing
                 * from the origin to the specified vector coordinates.
                 * If both <code>vecx</code> and <code>vecy</code> are 0.0,
                 * no additional rotation is added to this transform.
                 * This operation is equivalent to calling:
                 * <pre>
                 * rotate(Math.atan2(vecy, vecx));
                 * </pre>
                 */
                // @ts-ignore
                public rotate(vecx: number, vecy: number): void;
                /**
                 * Concatenates this transform with a transform that rotates
                 * coordinates around an anchor point according to a rotation
                 * vector.
                 * All coordinates rotate about the specified anchor coordinates
                 * by the same amount.
                 * The amount of rotation is such that coordinates along the former
                 * positive X axis will subsequently align with the vector pointing
                 * from the origin to the specified vector coordinates.
                 * If both <code>vecx</code> and <code>vecy</code> are 0.0,
                 * the transform is not modified in any way.
                 * This method is equivalent to calling:
                 * <pre>
                 * rotate(Math.atan2(vecy, vecx), anchorx, anchory);
                 * </pre>
                 */
                // @ts-ignore
                public rotate(vecx: number, vecy: number, anchorx: number, anchory: number): void;
                /**
                 * Concatenates this transform with a transform that rotates
                 * coordinates by the specified number of quadrants.
                 * This is equivalent to calling:
                 * <pre>
                 * rotate(numquadrants * Math.PI / 2.0);
                 * </pre>
                 * Rotating by a positive number of quadrants rotates points on
                 * the positive X axis toward the positive Y axis.
                 */
                // @ts-ignore
                public quadrantRotate(numquadrants: number): void;
                /**
                 * Concatenates this transform with a transform that rotates
                 * coordinates by the specified number of quadrants around
                 * the specified anchor point.
                 * This method is equivalent to calling:
                 * <pre>
                 * rotate(numquadrants * Math.PI / 2.0, anchorx, anchory);
                 * </pre>
                 * Rotating by a positive number of quadrants rotates points on
                 * the positive X axis toward the positive Y axis.
                 */
                // @ts-ignore
                public quadrantRotate(numquadrants: number, anchorx: number, anchory: number): void;
                /**
                 * Concatenates this transform with a scaling transformation.
                 * This is equivalent to calling concatenate(S), where S is an
                 * <code>AffineTransform</code> represented by the following matrix:
                 * <pre>
                 * [   sx   0    0   ]
                 * [   0    sy   0   ]
                 * [   0    0    1   ]
                 * </pre>
                 */
                // @ts-ignore
                public scale(sx: number, sy: number): void;
                /**
                 * Concatenates this transform with a shearing transformation.
                 * This is equivalent to calling concatenate(SH), where SH is an
                 * <code>AffineTransform</code> represented by the following matrix:
                 * <pre>
                 * [   1   shx   0   ]
                 * [  shy   1    0   ]
                 * [   0    0    1   ]
                 * </pre>
                 */
                // @ts-ignore
                public shear(shx: number, shy: number): void;
                /**
                 * Resets this transform to the Identity transform.
                 */
                // @ts-ignore
                public setToIdentity(): void;
                /**
                 * Sets this transform to a translation transformation.
                 * The matrix representing this transform becomes:
                 * <pre>
                 * [   1    0    tx  ]
                 * [   0    1    ty  ]
                 * [   0    0    1   ]
                 * </pre>
                 */
                // @ts-ignore
                public setToTranslation(tx: number, ty: number): void;
                /**
                 * Sets this transform to a rotation transformation.
                 * The matrix representing this transform becomes:
                 * <pre>
                 * [   cos(theta)    -sin(theta)    0   ]
                 * [   sin(theta)     cos(theta)    0   ]
                 * [       0              0         1   ]
                 * </pre>
                 * Rotating by a positive angle theta rotates points on the positive
                 * X axis toward the positive Y axis.
                 * Note also the discussion of
                 * <a href="#quadrantapproximation">Handling 90-Degree Rotations</a>
                 * above.
                 */
                // @ts-ignore
                public setToRotation(theta: number): void;
                /**
                 * Sets this transform to a translated rotation transformation.
                 * This operation is equivalent to translating the coordinates so
                 * that the anchor point is at the origin (S1), then rotating them
                 * about the new origin (S2), and finally translating so that the
                 * intermediate origin is restored to the coordinates of the original
                 * anchor point (S3).
                 * <p>
                 * This operation is equivalent to the following sequence of calls:
                 * <pre>
                 * setToTranslation(anchorx, anchory); // S3: final translation
                 * rotate(theta);                      // S2: rotate around anchor
                 * translate(-anchorx, -anchory);      // S1: translate anchor to origin
                 * </pre>
                 * The matrix representing this transform becomes:
                 * <pre>
                 * [   cos(theta)    -sin(theta)    x-x*cos+y*sin  ]
                 * [   sin(theta)     cos(theta)    y-x*sin-y*cos  ]
                 * [       0              0               1        ]
                 * </pre>
                 * Rotating by a positive angle theta rotates points on the positive
                 * X axis toward the positive Y axis.
                 * Note also the discussion of
                 * <a href="#quadrantapproximation">Handling 90-Degree Rotations</a>
                 * above.
                 */
                // @ts-ignore
                public setToRotation(theta: number, anchorx: number, anchory: number): void;
                /**
                 * Sets this transform to a rotation transformation that rotates
                 * coordinates according to a rotation vector.
                 * All coordinates rotate about the origin by the same amount.
                 * The amount of rotation is such that coordinates along the former
                 * positive X axis will subsequently align with the vector pointing
                 * from the origin to the specified vector coordinates.
                 * If both <code>vecx</code> and <code>vecy</code> are 0.0,
                 * the transform is set to an identity transform.
                 * This operation is equivalent to calling:
                 * <pre>
                 * setToRotation(Math.atan2(vecy, vecx));
                 * </pre>
                 */
                // @ts-ignore
                public setToRotation(vecx: number, vecy: number): void;
                /**
                 * Sets this transform to a rotation transformation that rotates
                 * coordinates around an anchor point according to a rotation
                 * vector.
                 * All coordinates rotate about the specified anchor coordinates
                 * by the same amount.
                 * The amount of rotation is such that coordinates along the former
                 * positive X axis will subsequently align with the vector pointing
                 * from the origin to the specified vector coordinates.
                 * If both <code>vecx</code> and <code>vecy</code> are 0.0,
                 * the transform is set to an identity transform.
                 * This operation is equivalent to calling:
                 * <pre>
                 * setToTranslation(Math.atan2(vecy, vecx), anchorx, anchory);
                 * </pre>
                 */
                // @ts-ignore
                public setToRotation(vecx: number, vecy: number, anchorx: number, anchory: number): void;
                /**
                 * Sets this transform to a rotation transformation that rotates
                 * coordinates by the specified number of quadrants.
                 * This operation is equivalent to calling:
                 * <pre>
                 * setToRotation(numquadrants * Math.PI / 2.0);
                 * </pre>
                 * Rotating by a positive number of quadrants rotates points on
                 * the positive X axis toward the positive Y axis.
                 */
                // @ts-ignore
                public setToQuadrantRotation(numquadrants: number): void;
                /**
                 * Sets this transform to a translated rotation transformation
                 * that rotates coordinates by the specified number of quadrants
                 * around the specified anchor point.
                 * This operation is equivalent to calling:
                 * <pre>
                 * setToRotation(numquadrants * Math.PI / 2.0, anchorx, anchory);
                 * </pre>
                 * Rotating by a positive number of quadrants rotates points on
                 * the positive X axis toward the positive Y axis.
                 */
                // @ts-ignore
                public setToQuadrantRotation(numquadrants: number, anchorx: number, anchory: number): void;
                /**
                 * Sets this transform to a scaling transformation.
                 * The matrix representing this transform becomes:
                 * <pre>
                 * [   sx   0    0   ]
                 * [   0    sy   0   ]
                 * [   0    0    1   ]
                 * </pre>
                 */
                // @ts-ignore
                public setToScale(sx: number, sy: number): void;
                /**
                 * Sets this transform to a shearing transformation.
                 * The matrix representing this transform becomes:
                 * <pre>
                 * [   1   shx   0   ]
                 * [  shy   1    0   ]
                 * [   0    0    1   ]
                 * </pre>
                 */
                // @ts-ignore
                public setToShear(shx: number, shy: number): void;
                /**
                 * Sets this transform to a copy of the transform in the specified
                 * <code>AffineTransform</code> object.
                 */
                // @ts-ignore
                public setTransform(Tx: java.awt.geom.AffineTransform): void;
                /**
                 * Sets this transform to the matrix specified by the 6
                 * double precision values.
                 */
                // @ts-ignore
                public setTransform(m00: number, m10: number, m01: number, m11: number, m02: number, m12: number): void;
                /**
                 * Concatenates an <code>AffineTransform</code> <code>Tx</code> to
                 * this <code>AffineTransform</code> Cx in the most commonly useful
                 * way to provide a new user space
                 * that is mapped to the former user space by <code>Tx</code>.
                 * Cx is updated to perform the combined transformation.
                 * Transforming a point p by the updated transform Cx' is
                 * equivalent to first transforming p by <code>Tx</code> and then
                 * transforming the result by the original transform Cx like this:
                 * Cx'(p) = Cx(Tx(p))
                 * In matrix notation, if this transform Cx is
                 * represented by the matrix [this] and <code>Tx</code> is represented
                 * by the matrix [Tx] then this method does the following:
                 * <pre>
                 * [this] = [this] x [Tx]
                 * </pre>
                 */
                // @ts-ignore
                public concatenate(Tx: java.awt.geom.AffineTransform): void;
                /**
                 * Concatenates an <code>AffineTransform</code> <code>Tx</code> to
                 * this <code>AffineTransform</code> Cx
                 * in a less commonly used way such that <code>Tx</code> modifies the
                 * coordinate transformation relative to the absolute pixel
                 * space rather than relative to the existing user space.
                 * Cx is updated to perform the combined transformation.
                 * Transforming a point p by the updated transform Cx' is
                 * equivalent to first transforming p by the original transform
                 * Cx and then transforming the result by
                 * <code>Tx</code> like this:
                 * Cx'(p) = Tx(Cx(p))
                 * In matrix notation, if this transform Cx
                 * is represented by the matrix [this] and <code>Tx</code> is
                 * represented by the matrix [Tx] then this method does the
                 * following:
                 * <pre>
                 * [this] = [Tx] x [this]
                 * </pre>
                 */
                // @ts-ignore
                public preConcatenate(Tx: java.awt.geom.AffineTransform): void;
                /**
                 * Returns an <code>AffineTransform</code> object representing the
                 * inverse transformation.
                 * The inverse transform Tx' of this transform Tx
                 * maps coordinates transformed by Tx back
                 * to their original coordinates.
                 * In other words, Tx'(Tx(p)) = p = Tx(Tx'(p)).
                 * <p>
                 * If this transform maps all coordinates onto a point or a line
                 * then it will not have an inverse, since coordinates that do
                 * not lie on the destination point or line will not have an inverse
                 * mapping.
                 * The <code>getDeterminant</code> method can be used to determine if this
                 * transform has no inverse, in which case an exception will be
                 * thrown if the <code>createInverse</code> method is called.
                 */
                // @ts-ignore
                public createInverse(): java.awt.geom.AffineTransform;
                /**
                 * Sets this transform to the inverse of itself.
                 * The inverse transform Tx' of this transform Tx
                 * maps coordinates transformed by Tx back
                 * to their original coordinates.
                 * In other words, Tx'(Tx(p)) = p = Tx(Tx'(p)).
                 * <p>
                 * If this transform maps all coordinates onto a point or a line
                 * then it will not have an inverse, since coordinates that do
                 * not lie on the destination point or line will not have an inverse
                 * mapping.
                 * The <code>getDeterminant</code> method can be used to determine if this
                 * transform has no inverse, in which case an exception will be
                 * thrown if the <code>invert</code> method is called.
                 */
                // @ts-ignore
                public invert(): void;
                /**
                 * Transforms the specified <code>ptSrc</code> and stores the result
                 * in <code>ptDst</code>.
                 * If <code>ptDst</code> is <code>null</code>, a new {@link Point2D}
                 * object is allocated and then the result of the transformation is
                 * stored in this object.
                 * In either case, <code>ptDst</code>, which contains the
                 * transformed point, is returned for convenience.
                 * If <code>ptSrc</code> and <code>ptDst</code> are the same
                 * object, the input point is correctly overwritten with
                 * the transformed point.
                 */
                // @ts-ignore
                public transform(ptSrc: java.awt.geom.Point2D, ptDst: java.awt.geom.Point2D): java.awt.geom.Point2D;
                /**
                 * Transforms an array of point objects by this transform.
                 * If any element of the <code>ptDst</code> array is
                 * <code>null</code>, a new <code>Point2D</code> object is allocated
                 * and stored into that element before storing the results of the
                 * transformation.
                 * <p>
                 * Note that this method does not take any precautions to
                 * avoid problems caused by storing results into <code>Point2D</code>
                 * objects that will be used as the source for calculations
                 * further down the source array.
                 * This method does guarantee that if a specified <code>Point2D</code>
                 * object is both the source and destination for the same single point
                 * transform operation then the results will not be stored until
                 * the calculations are complete to avoid storing the results on
                 * top of the operands.
                 * If, however, the destination <code>Point2D</code> object for one
                 * operation is the same object as the source <code>Point2D</code>
                 * object for another operation further down the source array then
                 * the original coordinates in that point are overwritten before
                 * they can be converted.
                 */
                // @ts-ignore
                public transform(ptSrc: java.awt.geom.Point2D, srcOff: number, ptDst: java.awt.geom.Point2D, dstOff: number, numPts: number): void;
                /**
                 * Transforms an array of floating point coordinates by this transform.
                 * The two coordinate array sections can be exactly the same or
                 * can be overlapping sections of the same array without affecting the
                 * validity of the results.
                 * This method ensures that no source coordinates are overwritten by a
                 * previous operation before they can be transformed.
                 * The coordinates are stored in the arrays starting at the specified
                 * offset in the order <code>[x0, y0, x1, y1, ..., xn, yn]</code>.
                 */
                // @ts-ignore
                public transform(srcPts: number, srcOff: number, dstPts: number, dstOff: number, numPts: number): void;
                /**
                 * Transforms an array of double precision coordinates by this transform.
                 * The two coordinate array sections can be exactly the same or
                 * can be overlapping sections of the same array without affecting the
                 * validity of the results.
                 * This method ensures that no source coordinates are
                 * overwritten by a previous operation before they can be transformed.
                 * The coordinates are stored in the arrays starting at the indicated
                 * offset in the order <code>[x0, y0, x1, y1, ..., xn, yn]</code>.
                 */
                // @ts-ignore
                public transform(srcPts: number, srcOff: number, dstPts: number, dstOff: number, numPts: number): void;
                /**
                 * Transforms an array of floating point coordinates by this transform
                 * and stores the results into an array of doubles.
                 * The coordinates are stored in the arrays starting at the specified
                 * offset in the order <code>[x0, y0, x1, y1, ..., xn, yn]</code>.
                 */
                // @ts-ignore
                public transform(srcPts: number, srcOff: number, dstPts: number, dstOff: number, numPts: number): void;
                /**
                 * Transforms an array of double precision coordinates by this transform
                 * and stores the results into an array of floats.
                 * The coordinates are stored in the arrays starting at the specified
                 * offset in the order <code>[x0, y0, x1, y1, ..., xn, yn]</code>.
                 */
                // @ts-ignore
                public transform(srcPts: number, srcOff: number, dstPts: number, dstOff: number, numPts: number): void;
                /**
                 * Inverse transforms the specified <code>ptSrc</code> and stores the
                 * result in <code>ptDst</code>.
                 * If <code>ptDst</code> is <code>null</code>, a new
                 * <code>Point2D</code> object is allocated and then the result of the
                 * transform is stored in this object.
                 * In either case, <code>ptDst</code>, which contains the transformed
                 * point, is returned for convenience.
                 * If <code>ptSrc</code> and <code>ptDst</code> are the same
                 * object, the input point is correctly overwritten with the
                 * transformed point.
                 */
                // @ts-ignore
                public inverseTransform(ptSrc: java.awt.geom.Point2D, ptDst: java.awt.geom.Point2D): java.awt.geom.Point2D;
                /**
                 * Inverse transforms an array of double precision coordinates by
                 * this transform.
                 * The two coordinate array sections can be exactly the same or
                 * can be overlapping sections of the same array without affecting the
                 * validity of the results.
                 * This method ensures that no source coordinates are
                 * overwritten by a previous operation before they can be transformed.
                 * The coordinates are stored in the arrays starting at the specified
                 * offset in the order <code>[x0, y0, x1, y1, ..., xn, yn]</code>.
                 */
                // @ts-ignore
                public inverseTransform(srcPts: number, srcOff: number, dstPts: number, dstOff: number, numPts: number): void;
                /**
                 * Transforms the relative distance vector specified by
                 * <code>ptSrc</code> and stores the result in <code>ptDst</code>.
                 * A relative distance vector is transformed without applying the
                 * translation components of the affine transformation matrix
                 * using the following equations:
                 * <pre>
                 * [  x' ]   [  m00  m01 (m02) ] [  x  ]   [ m00x + m01y ]
                 * [  y' ] = [  m10  m11 (m12) ] [  y  ] = [ m10x + m11y ]
                 * [ (1) ]   [  (0)  (0) ( 1 ) ] [ (1) ]   [     (1)     ]
                 * </pre>
                 * If <code>ptDst</code> is <code>null</code>, a new
                 * <code>Point2D</code> object is allocated and then the result of the
                 * transform is stored in this object.
                 * In either case, <code>ptDst</code>, which contains the
                 * transformed point, is returned for convenience.
                 * If <code>ptSrc</code> and <code>ptDst</code> are the same object,
                 * the input point is correctly overwritten with the transformed
                 * point.
                 */
                // @ts-ignore
                public deltaTransform(ptSrc: java.awt.geom.Point2D, ptDst: java.awt.geom.Point2D): java.awt.geom.Point2D;
                /**
                 * Transforms an array of relative distance vectors by this
                 * transform.
                 * A relative distance vector is transformed without applying the
                 * translation components of the affine transformation matrix
                 * using the following equations:
                 * <pre>
                 * [  x' ]   [  m00  m01 (m02) ] [  x  ]   [ m00x + m01y ]
                 * [  y' ] = [  m10  m11 (m12) ] [  y  ] = [ m10x + m11y ]
                 * [ (1) ]   [  (0)  (0) ( 1 ) ] [ (1) ]   [     (1)     ]
                 * </pre>
                 * The two coordinate array sections can be exactly the same or
                 * can be overlapping sections of the same array without affecting the
                 * validity of the results.
                 * This method ensures that no source coordinates are
                 * overwritten by a previous operation before they can be transformed.
                 * The coordinates are stored in the arrays starting at the indicated
                 * offset in the order <code>[x0, y0, x1, y1, ..., xn, yn]</code>.
                 */
                // @ts-ignore
                public deltaTransform(srcPts: number, srcOff: number, dstPts: number, dstOff: number, numPts: number): void;
                /**
                 * Returns a new {@link Shape} object defined by the geometry of the
                 * specified <code>Shape</code> after it has been transformed by
                 * this transform.
                 */
                // @ts-ignore
                public createTransformedShape(pSrc: java.awt.Shape): java.awt.Shape;
                /**
                 * Returns a <code>String</code> that represents the value of this
                 * {@link Object}.
                 */
                // @ts-ignore
                public toString(): string;
                /**
                 * Returns <code>true</code> if this <code>AffineTransform</code> is
                 * an identity transform.
                 */
                // @ts-ignore
                public isIdentity(): boolean;
                /**
                 * Returns a copy of this <code>AffineTransform</code> object.
                 */
                // @ts-ignore
                public clone(): java.lang.Object;
                /**
                 * Returns the hashcode for this transform.
                 */
                // @ts-ignore
                public hashCode(): number;
                /**
                 * Returns <code>true</code> if this <code>AffineTransform</code>
                 * represents the same affine coordinate transform as the specified
                 * argument.
                 */
                // @ts-ignore
                public equals(obj: java.lang.Object): boolean;
            }
        }
    }
}
