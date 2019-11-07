// @ts-nocheck
declare namespace java {
    namespace util {
        namespace concurrent {
            namespace ConcurrentHashMap {
                // @ts-ignore
                 class KeySetView extends java.util.concurrent.ConcurrentHashMap.CollectionView {
                    /**
                     * Returns the default mapped value for additions,
                     * or {@code null} if additions are not supported.
                     */
                    // @ts-ignore
                    public getMappedValue(): java.lang.Object;
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public contains(o: java.lang.Object): boolean;
                    /**
                     * Removes the key from this map view, by removing the key (and its
                     * corresponding value) from the backing map.  This method does
                     * nothing if the key is not in the map.
                     */
                    // @ts-ignore
                    public remove(o: java.lang.Object): boolean;
                    // @ts-ignore
                    public iterator(): java.util.Iterator;
                    /**
                     * Adds the specified key to this set view by mapping the key to
                     * the default mapped value in the backing map, if defined.
                     */
                    // @ts-ignore
                    public add(e: java.lang.Object): boolean;
                    /**
                     * Adds all of the elements in the specified collection to this set,
                     * as if by calling {@link #add} on each one.
                     */
                    // @ts-ignore
                    public addAll(c: java.util.Collection): boolean;
                    // @ts-ignore
                    public hashCode(): number;
                    // @ts-ignore
                    public equals(o: java.lang.Object): boolean;
                    // @ts-ignore
                    public spliterator(): java.util.Spliterator;
                    // @ts-ignore
                    public forEach(action: java.util.function$.Consumer): void;
                }
            }
        }
    }
}
