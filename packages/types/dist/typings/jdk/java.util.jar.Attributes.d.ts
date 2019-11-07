declare namespace java {
    namespace util {
        namespace jar {
            // @ts-ignore
             class Attributes extends java.lang.Object {
                /**
                 * Constructs a new, empty Attributes object with default size.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a new, empty Attributes object with the specified
                 * initial size.
                 */
                // @ts-ignore
                constructor(size: number)
                /**
                 * Constructs a new Attributes object with the same attribute name-value
                 * mappings as in the specified Attributes.
                 */
                // @ts-ignore
                constructor(attr: java.util.jar.Attributes)
                /**
                 * Returns the value of the specified attribute name, or null if the
                 * attribute name was not found.
                 */
                // @ts-ignore
                public get(name: java.lang.Object): java.lang.Object;
                /**
                 * Returns the value of the specified attribute name, specified as
                 * a string, or null if the attribute was not found. The attribute
                 * name is case-insensitive.
                 * <p>
                 * This method is defined as:
                 * <pre>
                 * return (String)get(new Attributes.Name((String)name));
                 * </pre>
                 */
                // @ts-ignore
                public getValue(name: string): string;
                /**
                 * Returns the value of the specified Attributes.Name, or null if the
                 * attribute was not found.
                 * <p>
                 * This method is defined as:
                 * <pre>
                 * return (String)get(name);
                 * </pre>
                 */
                // @ts-ignore
                public getValue(name: java.util.jar.Attributes.Name): string;
                /**
                 * Associates the specified value with the specified attribute name
                 * (key) in this Map. If the Map previously contained a mapping for
                 * the attribute name, the old value is replaced.
                 */
                // @ts-ignore
                public put(name: java.lang.Object, value: java.lang.Object): java.lang.Object;
                /**
                 * Associates the specified value with the specified attribute name,
                 * specified as a String. The attributes name is case-insensitive.
                 * If the Map previously contained a mapping for the attribute name,
                 * the old value is replaced.
                 * <p>
                 * This method is defined as:
                 * <pre>
                 * return (String)put(new Attributes.Name(name), value);
                 * </pre>
                 */
                // @ts-ignore
                public putValue(name: string, value: string): string;
                /**
                 * Removes the attribute with the specified name (key) from this Map.
                 * Returns the previous attribute value, or null if none.
                 */
                // @ts-ignore
                public remove(name: java.lang.Object): java.lang.Object;
                /**
                 * Returns true if this Map maps one or more attribute names (keys)
                 * to the specified value.
                 */
                // @ts-ignore
                public containsValue(value: java.lang.Object): boolean;
                /**
                 * Returns true if this Map contains the specified attribute name (key).
                 */
                // @ts-ignore
                public containsKey(name: java.lang.Object): boolean;
                /**
                 * Copies all of the attribute name-value mappings from the specified
                 * Attributes to this Map. Duplicate mappings will be replaced.
                 */
                // @ts-ignore
                public putAll(attr: java.util.Map): void;
                /**
                 * Removes all attributes from this Map.
                 */
                // @ts-ignore
                public clear(): void;
                /**
                 * Returns the number of attributes in this Map.
                 */
                // @ts-ignore
                public size(): number;
                /**
                 * Returns true if this Map contains no attributes.
                 */
                // @ts-ignore
                public isEmpty(): boolean;
                /**
                 * Returns a Set view of the attribute names (keys) contained in this Map.
                 */
                // @ts-ignore
                public keySet(): java.util.Set;
                /**
                 * Returns a Collection view of the attribute values contained in this Map.
                 */
                // @ts-ignore
                public values(): java.util.Collection;
                /**
                 * Returns a Collection view of the attribute name-value mappings
                 * contained in this Map.
                 */
                // @ts-ignore
                public entrySet(): java.util.Set;
                /**
                 * Compares the specified Attributes object with this Map for equality.
                 * Returns true if the given object is also an instance of Attributes
                 * and the two Attributes objects represent the same mappings.
                 */
                // @ts-ignore
                public equals(o: java.lang.Object): boolean;
                /**
                 * Returns the hash code value for this Map.
                 */
                // @ts-ignore
                public hashCode(): number;
                /**
                 * Returns a copy of the Attributes, implemented as follows:
                 * <pre>
                 * public Object clone() { return new Attributes(this); }
                 * </pre>
                 * Since the attribute names and values are themselves immutable,
                 * the Attributes returned can be safely modified without affecting
                 * the original.
                 */
                // @ts-ignore
                public clone(): java.lang.Object;
            }
        }
    }
}
