// @ts-nocheck
declare namespace java {
    namespace lang {
        namespace invoke {
            // @ts-ignore
             class SwitchPoint extends java.lang.Object {
                /**
                 * Creates a new switch point.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Determines if this switch point has been invalidated yet.
                 * <p style="font-size:smaller;">
                 * <em>Discussion:</em>
                 * Because of the one-way nature of invalidation, once a switch point begins
                 * to return true for {@code hasBeenInvalidated},
                 * it will always do so in the future.
                 * On the other hand, a valid switch point visible to other threads may
                 * be invalidated at any moment, due to a request by another thread.
                 * <p style="font-size:smaller;">
                 * Since invalidation is a global and immediate operation,
                 * the execution of this query, on a valid switchpoint,
                 * must be internally sequenced with any
                 * other threads that could cause invalidation.
                 * This query may therefore be expensive.
                 * The recommended way to build a boolean-valued method handle
                 * which queries the invalidation state of a switch point {@code s} is
                 * to call {@code s.guardWithTest} on
                 * {@link MethodHandles#constant constant} true and false method handles.
                 */
                // @ts-ignore
                public hasBeenInvalidated(): boolean;
                /**
                 * Returns a method handle which always delegates either to the target or the fallback.
                 * The method handle will delegate to the target exactly as long as the switch point is valid.
                 * After that, it will permanently delegate to the fallback.
                 * <p>
                 * The target and fallback must be of exactly the same method type,
                 * and the resulting combined method handle will also be of this type.
                 */
                // @ts-ignore
                public guardWithTest(target: java.lang.invoke.MethodHandle, fallback: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle;
                /**
                 * Sets all of the given switch points into the invalid state.
                 * After this call executes, no thread will observe any of the
                 * switch points to be in a valid state.
                 * <p>
                 * This operation is likely to be expensive and should be used sparingly.
                 * If possible, it should be buffered for batch processing on sets of switch points.
                 * <p>
                 * If {@code switchPoints} contains a null element,
                 * a {@code NullPointerException} will be raised.
                 * In this case, some non-null elements in the array may be
                 * processed before the method returns abnormally.
                 * Which elements these are (if any) is implementation-dependent.
                 * <p style="font-size:smaller;">
                 * <em>Discussion:</em>
                 * For performance reasons, {@code invalidateAll} is not a virtual method
                 * on a single switch point, but rather applies to a set of switch points.
                 * Some implementations may incur a large fixed overhead cost
                 * for processing one or more invalidation operations,
                 * but a small incremental cost for each additional invalidation.
                 * In any case, this operation is likely to be costly, since
                 * other threads may have to be somehow interrupted
                 * in order to make them notice the updated switch point state.
                 * However, it may be observed that a single call to invalidate
                 * several switch points has the same formal effect as many calls,
                 * each on just one of the switch points.
                 * <p style="font-size:smaller;">
                 * <em>Implementation Note:</em>
                 * Simple implementations of {@code SwitchPoint} may use
                 * a private {@link MutableCallSite} to publish the state of a switch point.
                 * In such an implementation, the {@code invalidateAll} method can
                 * simply change the call site's target, and issue one call to
                 * {@linkplain MutableCallSite#syncAll synchronize} all the
                 * private call sites.
                 */
                // @ts-ignore
                public static invalidateAll(switchPoints: java.lang.invoke.SwitchPoint): void;
            }
        }
    }
}
