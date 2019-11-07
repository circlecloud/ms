declare namespace java {
    namespace awt {
        // @ts-ignore
         class RenderingHints extends java.lang.Object {
            /**
             * Constructs a new object with keys and values initialized
             * from the specified Map object which may be null.
             */
            // @ts-ignore
            constructor(init: java.util.Map)
            /**
             * Constructs a new object with the specified key/value pair.
             */
            // @ts-ignore
            constructor(key: java.awt.RenderingHints.Key, value: java.lang.Object)
            // @ts-ignore
            public static KEY_ANTIALIASING: java.awt.RenderingHints.Key;
            // @ts-ignore
            public static VALUE_ANTIALIAS_ON: java.lang.Object;
            // @ts-ignore
            public static VALUE_ANTIALIAS_OFF: java.lang.Object;
            // @ts-ignore
            public static VALUE_ANTIALIAS_DEFAULT: java.lang.Object;
            // @ts-ignore
            public static KEY_RENDERING: java.awt.RenderingHints.Key;
            // @ts-ignore
            public static VALUE_RENDER_SPEED: java.lang.Object;
            // @ts-ignore
            public static VALUE_RENDER_QUALITY: java.lang.Object;
            // @ts-ignore
            public static VALUE_RENDER_DEFAULT: java.lang.Object;
            // @ts-ignore
            public static KEY_DITHERING: java.awt.RenderingHints.Key;
            // @ts-ignore
            public static VALUE_DITHER_DISABLE: java.lang.Object;
            // @ts-ignore
            public static VALUE_DITHER_ENABLE: java.lang.Object;
            // @ts-ignore
            public static VALUE_DITHER_DEFAULT: java.lang.Object;
            // @ts-ignore
            public static KEY_TEXT_ANTIALIASING: java.awt.RenderingHints.Key;
            // @ts-ignore
            public static VALUE_TEXT_ANTIALIAS_ON: java.lang.Object;
            // @ts-ignore
            public static VALUE_TEXT_ANTIALIAS_OFF: java.lang.Object;
            // @ts-ignore
            public static VALUE_TEXT_ANTIALIAS_DEFAULT: java.lang.Object;
            // @ts-ignore
            public static VALUE_TEXT_ANTIALIAS_GASP: java.lang.Object;
            // @ts-ignore
            public static VALUE_TEXT_ANTIALIAS_LCD_HRGB: java.lang.Object;
            // @ts-ignore
            public static VALUE_TEXT_ANTIALIAS_LCD_HBGR: java.lang.Object;
            // @ts-ignore
            public static VALUE_TEXT_ANTIALIAS_LCD_VRGB: java.lang.Object;
            // @ts-ignore
            public static VALUE_TEXT_ANTIALIAS_LCD_VBGR: java.lang.Object;
            // @ts-ignore
            public static KEY_TEXT_LCD_CONTRAST: java.awt.RenderingHints.Key;
            // @ts-ignore
            public static KEY_FRACTIONALMETRICS: java.awt.RenderingHints.Key;
            // @ts-ignore
            public static VALUE_FRACTIONALMETRICS_OFF: java.lang.Object;
            // @ts-ignore
            public static VALUE_FRACTIONALMETRICS_ON: java.lang.Object;
            // @ts-ignore
            public static VALUE_FRACTIONALMETRICS_DEFAULT: java.lang.Object;
            // @ts-ignore
            public static KEY_INTERPOLATION: java.awt.RenderingHints.Key;
            // @ts-ignore
            public static VALUE_INTERPOLATION_NEAREST_NEIGHBOR: java.lang.Object;
            // @ts-ignore
            public static VALUE_INTERPOLATION_BILINEAR: java.lang.Object;
            // @ts-ignore
            public static VALUE_INTERPOLATION_BICUBIC: java.lang.Object;
            // @ts-ignore
            public static KEY_ALPHA_INTERPOLATION: java.awt.RenderingHints.Key;
            // @ts-ignore
            public static VALUE_ALPHA_INTERPOLATION_SPEED: java.lang.Object;
            // @ts-ignore
            public static VALUE_ALPHA_INTERPOLATION_QUALITY: java.lang.Object;
            // @ts-ignore
            public static VALUE_ALPHA_INTERPOLATION_DEFAULT: java.lang.Object;
            // @ts-ignore
            public static KEY_COLOR_RENDERING: java.awt.RenderingHints.Key;
            // @ts-ignore
            public static VALUE_COLOR_RENDER_SPEED: java.lang.Object;
            // @ts-ignore
            public static VALUE_COLOR_RENDER_QUALITY: java.lang.Object;
            // @ts-ignore
            public static VALUE_COLOR_RENDER_DEFAULT: java.lang.Object;
            // @ts-ignore
            public static KEY_STROKE_CONTROL: java.awt.RenderingHints.Key;
            // @ts-ignore
            public static VALUE_STROKE_DEFAULT: java.lang.Object;
            // @ts-ignore
            public static VALUE_STROKE_NORMALIZE: java.lang.Object;
            // @ts-ignore
            public static VALUE_STROKE_PURE: java.lang.Object;
            /**
             * Returns the number of key-value mappings in this
             * <code>RenderingHints</code>.
             */
            // @ts-ignore
            public size(): number;
            /**
             * Returns <code>true</code> if this
             * <code>RenderingHints</code> contains no key-value mappings.
             */
            // @ts-ignore
            public isEmpty(): boolean;
            /**
             * Returns {@code true} if this {@code RenderingHints}
             * contains a mapping for the specified key.
             */
            // @ts-ignore
            public containsKey(key: java.lang.Object): boolean;
            /**
             * Returns true if this RenderingHints maps one or more keys to the
             * specified value.
             * More formally, returns <code>true</code> if and only
             * if this <code>RenderingHints</code>
             * contains at least one mapping to a value <code>v</code> such that
             * <pre>
             * (value==null ? v==null : value.equals(v))
             * </pre>.
             * This operation will probably require time linear in the
             * <code>RenderingHints</code> size for most implementations
             * of <code>RenderingHints</code>.
             */
            // @ts-ignore
            public containsValue(value: java.lang.Object): boolean;
            /**
             * Returns the value to which the specified key is mapped.
             */
            // @ts-ignore
            public get(key: java.lang.Object): java.lang.Object;
            /**
             * Maps the specified {@code key} to the specified
             * {@code value} in this {@code RenderingHints} object.
             * Neither the key nor the value can be {@code null}.
             * The value can be retrieved by calling the {@code get} method
             * with a key that is equal to the original key.
             */
            // @ts-ignore
            public put(key: java.lang.Object, value: java.lang.Object): java.lang.Object;
            /**
             * Adds all of the keys and corresponding values from the specified
             * <code>RenderingHints</code> object to this
             * <code>RenderingHints</code> object. Keys that are present in
             * this <code>RenderingHints</code> object, but not in the specified
             * <code>RenderingHints</code> object are not affected.
             */
            // @ts-ignore
            public add(hints: java.awt.RenderingHints): void;
            /**
             * Clears this <code>RenderingHints</code> object of all key/value
             * pairs.
             */
            // @ts-ignore
            public clear(): void;
            /**
             * Removes the key and its corresponding value from this
             * {@code RenderingHints} object. This method does nothing if the
             * key is not in this {@code RenderingHints} object.
             */
            // @ts-ignore
            public remove(key: java.lang.Object): java.lang.Object;
            /**
             * Copies all of the mappings from the specified {@code Map}
             * to this {@code RenderingHints}.  These mappings replace
             * any mappings that this {@code RenderingHints} had for any
             * of the keys currently in the specified {@code Map}.
             */
            // @ts-ignore
            public putAll(m: java.util.Map): void;
            /**
             * Returns a <code>Set</code> view of the Keys contained in this
             * <code>RenderingHints</code>.  The Set is backed by the
             * <code>RenderingHints</code>, so changes to the
             * <code>RenderingHints</code> are reflected in the <code>Set</code>,
             * and vice-versa.  If the <code>RenderingHints</code> is modified
             * while an iteration over the <code>Set</code> is in progress,
             * the results of the iteration are undefined.  The <code>Set</code>
             * supports element removal, which removes the corresponding
             * mapping from the <code>RenderingHints</code>, via the
             * <code>Iterator.remove</code>, <code>Set.remove</code>,
             * <code>removeAll</code> <code>retainAll</code>, and
             * <code>clear</code> operations.  It does not support
             * the <code>add</code> or <code>addAll</code> operations.
             */
            // @ts-ignore
            public keySet(): java.util.Set;
            /**
             * Returns a <code>Collection</code> view of the values
             * contained in this <code>RenderinHints</code>.
             * The <code>Collection</code> is backed by the
             * <code>RenderingHints</code>, so changes to
             * the <code>RenderingHints</code> are reflected in
             * the <code>Collection</code>, and vice-versa.
             * If the <code>RenderingHints</code> is modified while
             * an iteration over the <code>Collection</code> is
             * in progress, the results of the iteration are undefined.
             * The <code>Collection</code> supports element removal,
             * which removes the corresponding mapping from the
             * <code>RenderingHints</code>, via the
             * <code>Iterator.remove</code>,
             * <code>Collection.remove</code>, <code>removeAll</code>,
             * <code>retainAll</code> and <code>clear</code> operations.
             * It does not support the <code>add</code> or
             * <code>addAll</code> operations.
             */
            // @ts-ignore
            public values(): java.util.Collection;
            /**
             * Returns a <code>Set</code> view of the mappings contained
             * in this <code>RenderingHints</code>.  Each element in the
             * returned <code>Set</code> is a <code>Map.Entry</code>.
             * The <code>Set</code> is backed by the <code>RenderingHints</code>,
             * so changes to the <code>RenderingHints</code> are reflected
             * in the <code>Set</code>, and vice-versa.  If the
             * <code>RenderingHints</code> is modified while
             * while an iteration over the <code>Set</code> is in progress,
             * the results of the iteration are undefined.
             * <p>
             * The entrySet returned from a <code>RenderingHints</code> object
             * is not modifiable.
             */
            // @ts-ignore
            public entrySet(): java.util.Set;
            /**
             * Compares the specified <code>Object</code> with this
             * <code>RenderingHints</code> for equality.
             * Returns <code>true</code> if the specified object is also a
             * <code>Map</code> and the two <code>Map</code> objects represent
             * the same mappings.  More formally, two <code>Map</code> objects
             * <code>t1</code> and <code>t2</code> represent the same mappings
             * if <code>t1.keySet().equals(t2.keySet())</code> and for every
             * key <code>k</code> in <code>t1.keySet()</code>,
             * <pre>
             * (t1.get(k)==null ? t2.get(k)==null : t1.get(k).equals(t2.get(k)))
             * </pre>.
             * This ensures that the <code>equals</code> method works properly across
             * different implementations of the <code>Map</code> interface.
             */
            // @ts-ignore
            public equals(o: java.lang.Object): boolean;
            /**
             * Returns the hash code value for this <code>RenderingHints</code>.
             * The hash code of a <code>RenderingHints</code> is defined to be
             * the sum of the hashCodes of each <code>Entry</code> in the
             * <code>RenderingHints</code> object's entrySet view.  This ensures that
             * <code>t1.equals(t2)</code> implies that
             * <code>t1.hashCode()==t2.hashCode()</code> for any two <code>Map</code>
             * objects <code>t1</code> and <code>t2</code>, as required by the general
             * contract of <code>Object.hashCode</code>.
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Creates a clone of this <code>RenderingHints</code> object
             * that has the same contents as this <code>RenderingHints</code>
             * object.
             */
            // @ts-ignore
            public clone(): java.lang.Object;
            /**
             * Returns a rather long string representation of the hashmap
             * which contains the mappings of keys to values for this
             * <code>RenderingHints</code> object.
             */
            // @ts-ignore
            public toString(): string;
        }
    }
}
