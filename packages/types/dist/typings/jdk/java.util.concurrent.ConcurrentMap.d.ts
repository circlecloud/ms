// @ts-nocheck
declare namespace java {
    namespace util {
        namespace concurrent {
            // @ts-ignore
            interface ConcurrentMap {
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                 getOrDefault(key: java.lang.Object, defaultValue: java.lang.Object): java.lang.Object;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                 forEach(action: java.util.function$.BiConsumer): void;
                /**
                 * If the specified key is not already associated
                 * with a value, associate it with the given value.
                 * This is equivalent to
                 * <pre> {@code
                 * if (!map.containsKey(key))
                 * return map.put(key, value);
                 * else
                 * return map.get(key);
                 * }</pre>
                 * except that the action is performed atomically.
                 */
                // @ts-ignore
                 putIfAbsent(key: java.lang.Object, value: java.lang.Object): java.lang.Object;
                /**
                 * Removes the entry for a key only if currently mapped to a given value.
                 * This is equivalent to
                 * <pre> {@code
                 * if (map.containsKey(key) && Objects.equals(map.get(key), value)) {
                 * map.remove(key);
                 * return true;
                 * } else
                 * return false;
                 * }</pre>
                 * except that the action is performed atomically.
                 */
                // @ts-ignore
                 remove(key: java.lang.Object, value: java.lang.Object): boolean;
                /**
                 * Replaces the entry for a key only if currently mapped to a given value.
                 * This is equivalent to
                 * <pre> {@code
                 * if (map.containsKey(key) && Objects.equals(map.get(key), oldValue)) {
                 * map.put(key, newValue);
                 * return true;
                 * } else
                 * return false;
                 * }</pre>
                 * except that the action is performed atomically.
                 */
                // @ts-ignore
                 replace(key: java.lang.Object, oldValue: java.lang.Object, newValue: java.lang.Object): boolean;
                /**
                 * Replaces the entry for a key only if currently mapped to some value.
                 * This is equivalent to
                 * <pre> {@code
                 * if (map.containsKey(key)) {
                 * return map.put(key, value);
                 * } else
                 * return null;
                 * }</pre>
                 * except that the action is performed atomically.
                 */
                // @ts-ignore
                 replace(key: java.lang.Object, value: java.lang.Object): java.lang.Object;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                 replaceAll(func: java.util.function$.BiFunction): void;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                 computeIfAbsent(key: java.lang.Object, mappingFunction: java.util.function$.Function): java.lang.Object;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                 computeIfPresent(key: java.lang.Object, remappingFunction: java.util.function$.BiFunction): java.lang.Object;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                 compute(key: java.lang.Object, remappingFunction: java.util.function$.BiFunction): java.lang.Object;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                 merge(key: java.lang.Object, value: java.lang.Object, remappingFunction: java.util.function$.BiFunction): java.lang.Object;
            }
        }
    }
}
