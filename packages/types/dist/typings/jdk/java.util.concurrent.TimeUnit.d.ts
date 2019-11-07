declare namespace java {
    namespace util {
        namespace concurrent {
            // @ts-ignore
             class TimeUnit extends java.lang.Enum {
                // @ts-ignore
                public static NANOSECONDS: java.util.concurrent.TimeUnit;
                // @ts-ignore
                public static MICROSECONDS: java.util.concurrent.TimeUnit;
                // @ts-ignore
                public static MILLISECONDS: java.util.concurrent.TimeUnit;
                // @ts-ignore
                public static SECONDS: java.util.concurrent.TimeUnit;
                // @ts-ignore
                public static MINUTES: java.util.concurrent.TimeUnit;
                // @ts-ignore
                public static HOURS: java.util.concurrent.TimeUnit;
                // @ts-ignore
                public static DAYS: java.util.concurrent.TimeUnit;
                // @ts-ignore
                public static values(): java.util.concurrent.TimeUnit[];
                // @ts-ignore
                public static valueOf(name: string): java.util.concurrent.TimeUnit;
                /**
                 * Converts the given time duration in the given unit to this unit.
                 * Conversions from finer to coarser granularities truncate, so
                 * lose precision. For example, converting {@code 999} milliseconds
                 * to seconds results in {@code 0}. Conversions from coarser to
                 * finer granularities with arguments that would numerically
                 * overflow saturate to {@code Long.MIN_VALUE} if negative or
                 * {@code Long.MAX_VALUE} if positive.
                 * <p>For example, to convert 10 minutes to milliseconds, use:
                 * {@code TimeUnit.MILLISECONDS.convert(10L, TimeUnit.MINUTES)}
                 */
                // @ts-ignore
                public convert(sourceDuration: number, sourceUnit: java.util.concurrent.TimeUnit): number;
                /**
                 * Equivalent to
                 * {@link #convert(long, TimeUnit) NANOSECONDS.convert(duration, this)}.
                 */
                // @ts-ignore
                public toNanos(duration: number): number;
                /**
                 * Equivalent to
                 * {@link #convert(long, TimeUnit) MICROSECONDS.convert(duration, this)}.
                 */
                // @ts-ignore
                public toMicros(duration: number): number;
                /**
                 * Equivalent to
                 * {@link #convert(long, TimeUnit) MILLISECONDS.convert(duration, this)}.
                 */
                // @ts-ignore
                public toMillis(duration: number): number;
                /**
                 * Equivalent to
                 * {@link #convert(long, TimeUnit) SECONDS.convert(duration, this)}.
                 */
                // @ts-ignore
                public toSeconds(duration: number): number;
                /**
                 * Equivalent to
                 * {@link #convert(long, TimeUnit) MINUTES.convert(duration, this)}.
                 */
                // @ts-ignore
                public toMinutes(duration: number): number;
                /**
                 * Equivalent to
                 * {@link #convert(long, TimeUnit) HOURS.convert(duration, this)}.
                 */
                // @ts-ignore
                public toHours(duration: number): number;
                /**
                 * Equivalent to
                 * {@link #convert(long, TimeUnit) DAYS.convert(duration, this)}.
                 */
                // @ts-ignore
                public toDays(duration: number): number;
                /**
                 * Performs a timed {@link Object#wait(long, int) Object.wait}
                 * using this time unit.
                 * This is a convenience method that converts timeout arguments
                 * into the form required by the {@code Object.wait} method.
                 * <p>For example, you could implement a blocking {@code poll}
                 * method (see {@link BlockingQueue#poll BlockingQueue.poll})
                 * using:
                 * <pre> {@code
                 * public synchronized Object poll(long timeout, TimeUnit unit)
                 * throws InterruptedException {
                 * while (empty) {
                 * unit.timedWait(this, timeout);
                 * ...
                 * }
                 * }}</pre>
                 */
                // @ts-ignore
                public timedWait(obj: java.lang.Object, timeout: number): void;
                /**
                 * Performs a timed {@link Thread#join(long, int) Thread.join}
                 * using this time unit.
                 * This is a convenience method that converts time arguments into the
                 * form required by the {@code Thread.join} method.
                 */
                // @ts-ignore
                public timedJoin(thread: java.lang.Thread, timeout: number): void;
                /**
                 * Performs a {@link Thread#sleep(long, int) Thread.sleep} using
                 * this time unit.
                 * This is a convenience method that converts time arguments into the
                 * form required by the {@code Thread.sleep} method.
                 */
                // @ts-ignore
                public sleep(timeout: number): void;
            }
        }
    }
}
