declare namespace java {
    namespace time {
        // @ts-ignore
        abstract class Clock extends java.lang.Object {
            /**
             * Constructor accessible by subclasses.
             */
            // @ts-ignore
            constructor()
            /**
             * Obtains a clock that returns the current instant using the best available
             * system clock, converting to date and time using the UTC time-zone.
             * <p>
             * This clock, rather than {@link #systemDefaultZone()}, should be used when
             * you need the current instant without the date or time.
             * <p>
             * This clock is based on the best available system clock.
             * This may use {@link System#currentTimeMillis()}, or a higher resolution
             * clock if one is available.
             * <p>
             * Conversion from instant to date or time uses the {@linkplain ZoneOffset#UTC UTC time-zone}.
             * <p>
             * The returned implementation is immutable, thread-safe and {@code Serializable}.
             * It is equivalent to {@code system(ZoneOffset.UTC)}.
             */
            // @ts-ignore
            public static systemUTC(): java.time.Clock;
            /**
             * Obtains a clock that returns the current instant using the best available
             * system clock, converting to date and time using the default time-zone.
             * <p>
             * This clock is based on the best available system clock.
             * This may use {@link System#currentTimeMillis()}, or a higher resolution
             * clock if one is available.
             * <p>
             * Using this method hard codes a dependency to the default time-zone into your application.
             * It is recommended to avoid this and use a specific time-zone whenever possible.
             * The {@link #systemUTC() UTC clock} should be used when you need the current instant
             * without the date or time.
             * <p>
             * The returned implementation is immutable, thread-safe and {@code Serializable}.
             * It is equivalent to {@code system(ZoneId.systemDefault())}.
             */
            // @ts-ignore
            public static systemDefaultZone(): java.time.Clock;
            /**
             * Obtains a clock that returns the current instant using best available
             * system clock.
             * <p>
             * This clock is based on the best available system clock.
             * This may use {@link System#currentTimeMillis()}, or a higher resolution
             * clock if one is available.
             * <p>
             * Conversion from instant to date or time uses the specified time-zone.
             * <p>
             * The returned implementation is immutable, thread-safe and {@code Serializable}.
             */
            // @ts-ignore
            public static system(zone: java.time.ZoneId): java.time.Clock;
            /**
             * Obtains a clock that returns the current instant ticking in whole seconds
             * using best available system clock.
             * <p>
             * This clock will always have the nano-of-second field set to zero.
             * This ensures that the visible time ticks in whole seconds.
             * The underlying clock is the best available system clock, equivalent to
             * using {@link #system(ZoneId)}.
             * <p>
             * Implementations may use a caching strategy for performance reasons.
             * As such, it is possible that the start of the second observed via this
             * clock will be later than that observed directly via the underlying clock.
             * <p>
             * The returned implementation is immutable, thread-safe and {@code Serializable}.
             * It is equivalent to {@code tick(system(zone), Duration.ofSeconds(1))}.
             */
            // @ts-ignore
            public static tickSeconds(zone: java.time.ZoneId): java.time.Clock;
            /**
             * Obtains a clock that returns the current instant ticking in whole minutes
             * using best available system clock.
             * <p>
             * This clock will always have the nano-of-second and second-of-minute fields set to zero.
             * This ensures that the visible time ticks in whole minutes.
             * The underlying clock is the best available system clock, equivalent to
             * using {@link #system(ZoneId)}.
             * <p>
             * Implementations may use a caching strategy for performance reasons.
             * As such, it is possible that the start of the minute observed via this
             * clock will be later than that observed directly via the underlying clock.
             * <p>
             * The returned implementation is immutable, thread-safe and {@code Serializable}.
             * It is equivalent to {@code tick(system(zone), Duration.ofMinutes(1))}.
             */
            // @ts-ignore
            public static tickMinutes(zone: java.time.ZoneId): java.time.Clock;
            /**
             * Obtains a clock that returns instants from the specified clock truncated
             * to the nearest occurrence of the specified duration.
             * <p>
             * This clock will only tick as per the specified duration. Thus, if the duration
             * is half a second, the clock will return instants truncated to the half second.
             * <p>
             * The tick duration must be positive. If it has a part smaller than a whole
             * millisecond, then the whole duration must divide into one second without
             * leaving a remainder. All normal tick durations will match these criteria,
             * including any multiple of hours, minutes, seconds and milliseconds, and
             * sensible nanosecond durations, such as 20ns, 250,000ns and 500,000ns.
             * <p>
             * A duration of zero or one nanosecond would have no truncation effect.
             * Passing one of these will return the underlying clock.
             * <p>
             * Implementations may use a caching strategy for performance reasons.
             * As such, it is possible that the start of the requested duration observed
             * via this clock will be later than that observed directly via the underlying clock.
             * <p>
             * The returned implementation is immutable, thread-safe and {@code Serializable}
             * providing that the base clock is.
             */
            // @ts-ignore
            public static tick(baseClock: java.time.Clock, tickDuration: java.time.Duration): java.time.Clock;
            /**
             * Obtains a clock that always returns the same instant.
             * <p>
             * This clock simply returns the specified instant.
             * As such, it is not a clock in the conventional sense.
             * The main use case for this is in testing, where the fixed clock ensures
             * tests are not dependent on the current clock.
             * <p>
             * The returned implementation is immutable, thread-safe and {@code Serializable}.
             */
            // @ts-ignore
            public static fixed(fixedInstant: java.time.Instant, zone: java.time.ZoneId): java.time.Clock;
            /**
             * Obtains a clock that returns instants from the specified clock with the
             * specified duration added
             * <p>
             * This clock wraps another clock, returning instants that are later by the
             * specified duration. If the duration is negative, the instants will be
             * earlier than the current date and time.
             * The main use case for this is to simulate running in the future or in the past.
             * <p>
             * A duration of zero would have no offsetting effect.
             * Passing zero will return the underlying clock.
             * <p>
             * The returned implementation is immutable, thread-safe and {@code Serializable}
             * providing that the base clock is.
             */
            // @ts-ignore
            public static offset(baseClock: java.time.Clock, offsetDuration: java.time.Duration): java.time.Clock;
            /**
             * Gets the time-zone being used to create dates and times.
             * <p>
             * A clock will typically obtain the current instant and then convert that
             * to a date or time using a time-zone. This method returns the time-zone used.
             */
            // @ts-ignore
            public abstract getZone(): java.time.ZoneId;
            /**
             * Returns a copy of this clock with a different time-zone.
             * <p>
             * A clock will typically obtain the current instant and then convert that
             * to a date or time using a time-zone. This method returns a clock with
             * similar properties but using a different time-zone.
             */
            // @ts-ignore
            public abstract withZone(zone: java.time.ZoneId): java.time.Clock;
            /**
             * Gets the current millisecond instant of the clock.
             * <p>
             * This returns the millisecond-based instant, measured from 1970-01-01T00:00Z (UTC).
             * This is equivalent to the definition of {@link System#currentTimeMillis()}.
             * <p>
             * Most applications should avoid this method and use {@link Instant} to represent
             * an instant on the time-line rather than a raw millisecond value.
             * This method is provided to allow the use of the clock in high performance use cases
             * where the creation of an object would be unacceptable.
             * <p>
             * The default implementation currently calls {@link #instant}.
             */
            // @ts-ignore
            public millis(): number;
            /**
             * Gets the current instant of the clock.
             * <p>
             * This returns an instant representing the current instant as defined by the clock.
             */
            // @ts-ignore
            public abstract instant(): java.time.Instant;
            /**
             * Checks if this clock is equal to another clock.
             * <p>
             * Clocks should override this method to compare equals based on
             * their state and to meet the contract of {@link Object#equals}.
             * If not overridden, the behavior is defined by {@link Object#equals}
             */
            // @ts-ignore
            public equals(obj: java.lang.Object): boolean;
            /**
             * A hash code for this clock.
             * <p>
             * Clocks should override this method based on
             * their state and to meet the contract of {@link Object#hashCode}.
             * If not overridden, the behavior is defined by {@link Object#hashCode}
             */
            // @ts-ignore
            public hashCode(): number;
        }
    }
}
