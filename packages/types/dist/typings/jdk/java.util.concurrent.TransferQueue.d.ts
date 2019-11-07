// @ts-nocheck
declare namespace java {
    namespace util {
        namespace concurrent {
            // @ts-ignore
            interface TransferQueue {
                /**
                 * Transfers the element to a waiting consumer immediately, if possible.
                 * <p>More precisely, transfers the specified element immediately
                 * if there exists a consumer already waiting to receive it (in
                 * {@link #take} or timed {@link #poll(long,TimeUnit) poll}),
                 * otherwise returning {@code false} without enqueuing the element.
                 */
                // @ts-ignore
                 tryTransfer(e: java.lang.Object): boolean;
                /**
                 * Transfers the element to a consumer, waiting if necessary to do so.
                 * <p>More precisely, transfers the specified element immediately
                 * if there exists a consumer already waiting to receive it (in
                 * {@link #take} or timed {@link #poll(long,TimeUnit) poll}),
                 * else waits until the element is received by a consumer.
                 */
                // @ts-ignore
                 transfer(e: java.lang.Object): void;
                /**
                 * Transfers the element to a consumer if it is possible to do so
                 * before the timeout elapses.
                 * <p>More precisely, transfers the specified element immediately
                 * if there exists a consumer already waiting to receive it (in
                 * {@link #take} or timed {@link #poll(long,TimeUnit) poll}),
                 * else waits until the element is received by a consumer,
                 * returning {@code false} if the specified wait time elapses
                 * before the element can be transferred.
                 */
                // @ts-ignore
                 tryTransfer(e: java.lang.Object, timeout: number, unit: java.util.concurrent.TimeUnit): boolean;
                /**
                 * Returns {@code true} if there is at least one consumer waiting
                 * to receive an element via {@link #take} or
                 * timed {@link #poll(long,TimeUnit) poll}.
                 * The return value represents a momentary state of affairs.
                 */
                // @ts-ignore
                 hasWaitingConsumer(): boolean;
                /**
                 * Returns an estimate of the number of consumers waiting to
                 * receive elements via {@link #take} or timed
                 * {@link #poll(long,TimeUnit) poll}.  The return value is an
                 * approximation of a momentary state of affairs, that may be
                 * inaccurate if consumers have completed or given up waiting.
                 * The value may be useful for monitoring and heuristics, but
                 * not for synchronization control.  Implementations of this
                 * method are likely to be noticeably slower than those for
                 * {@link #hasWaitingConsumer}.
                 */
                // @ts-ignore
                 getWaitingConsumerCount(): number;
            }
        }
    }
}
