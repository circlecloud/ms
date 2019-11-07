declare namespace java {
    namespace util {
        // @ts-ignore
         class EnumMap extends java.util.AbstractMap {
            /**
             * Creates an empty enum map with the specified key type.
             */
            // @ts-ignore
            constructor(keyType: java.lang.Class)
            /**
             * Creates an enum map with the same key type as the specified enum
             * map, initially containing the same mappings (if any).
             */
            // @ts-ignore
            constructor(m: java.util.EnumMap)
            /**
             * Creates an enum map initialized from the specified map.  If the
             * specified map is an <tt>EnumMap</tt> instance, this constructor behaves
             * identically to {@link #EnumMap(EnumMap)}.  Otherwise, the specified map
             * must contain at least one mapping (in order to determine the new
             * enum map's key type).
             */
            // @ts-ignore
            constructor(m: java.util.Map)
            /**
             * Returns the number of key-value mappings in this map.
             */
            // @ts-ignore
            public size(): number;
            /**
             * Returns <tt>true</tt> if this map maps one or more keys to the
             * specified value.
             */
            // @ts-ignore
            public containsValue(value: java.lang.Object): boolean;
            /**
             * Returns <tt>true</tt> if this map contains a mapping for the specified
             * key.
             */
            // @ts-ignore
            public containsKey(key: java.lang.Object): boolean;
            /**
             * Returns the value to which the specified key is mapped,
             * or {@code null} if this map contains no mapping for the key.
             * <p>More formally, if this map contains a mapping from a key
             * {@code k} to a value {@code v} such that {@code (key == k)},
             * then this method returns {@code v}; otherwise it returns
             * {@code null}.  (There can be at most one such mapping.)
             * <p>A return value of {@code null} does not <i>necessarily</i>
             * indicate that the map contains no mapping for the key; it's also
             * possible that the map explicitly maps the key to {@code null}.
             * The {@link #containsKey containsKey} operation may be used to
             * distinguish these two cases.
             */
            // @ts-ignore
            public get(key: java.lang.Object): java.lang.Object;
            /**
             * Associates the specified value with the specified key in this map.
             * If the map previously contained a mapping for this key, the old
             * value is replaced.
             */
            // @ts-ignore
            public put(key: java.lang.Enum, value: java.lang.Object): java.lang.Object;
            /**
             * Removes the mapping for this key from this map if present.
             */
            // @ts-ignore
            public remove(key: java.lang.Object): java.lang.Object;
            /**
             * Copies all of the mappings from the specified map to this map.
             * These mappings will replace any mappings that this map had for
             * any of the keys currently in the specified map.
             */
            // @ts-ignore
            public putAll(m: java.util.Map): void;
            /**
             * Removes all mappings from this map.
             */
            // @ts-ignore
            public clear(): void;
            /**
             * Returns a {@link Set} view of the keys contained in this map.
             * The returned set obeys the general contract outlined in
             * {@link Map#keySet()}.  The set's iterator will return the keys
             * in their natural order (the order in which the enum constants
             * are declared).
             */
            // @ts-ignore
            public keySet(): java.util.Set;
            /**
             * Returns a {@link Collection} view of the values contained in this map.
             * The returned collection obeys the general contract outlined in
             * {@link Map#values()}.  The collection's iterator will return the
             * values in the order their corresponding keys appear in map,
             * which is their natural order (the order in which the enum constants
             * are declared).
             */
            // @ts-ignore
            public values(): java.util.Collection;
            /**
             * Returns a {@link Set} view of the mappings contained in this map.
             * The returned set obeys the general contract outlined in
             * {@link Map#keySet()}.  The set's iterator will return the
             * mappings in the order their keys appear in map, which is their
             * natural order (the order in which the enum constants are declared).
             */
            // @ts-ignore
            public entrySet(): java.util.Set;
            /**
             * Compares the specified object with this map for equality.  Returns
             * <tt>true</tt> if the given object is also a map and the two maps
             * represent the same mappings, as specified in the {@link
             * Map#equals(Object)} contract.
             */
            // @ts-ignore
            public equals(o: java.lang.Object): boolean;
            /**
             * Returns the hash code value for this map.  The hash code of a map is
             * defined to be the sum of the hash codes of each entry in the map.
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Returns a shallow copy of this enum map.  (The values themselves
             * are not cloned.
             */
            // @ts-ignore
            public clone(): java.util.EnumMap;
        }
    }
}
