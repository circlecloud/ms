declare namespace java {
    namespace time {
        // @ts-ignore
        abstract class ZoneId extends java.lang.Object {
            // @ts-ignore
            public static SHORT_IDS: java.util.Map;
            /**
             * Gets the system default time-zone.
             * <p>
             * This queries {@link TimeZone#getDefault()} to find the default time-zone
             * and converts it to a {@code ZoneId}. If the system default time-zone is changed,
             * then the result of this method will also change.
             */
            // @ts-ignore
            public static systemDefault(): java.time.ZoneId;
            /**
             * Gets the set of available zone IDs.
             * <p>
             * This set includes the string form of all available region-based IDs.
             * Offset-based zone IDs are not included in the returned set.
             * The ID can be passed to {@link #of(String)} to create a {@code ZoneId}.
             * <p>
             * The set of zone IDs can increase over time, although in a typical application
             * the set of IDs is fixed. Each call to this method is thread-safe.
             */
            // @ts-ignore
            public static getAvailableZoneIds(): java.util.Set;
            /**
             * Obtains an instance of {@code ZoneId} using its ID using a map
             * of aliases to supplement the standard zone IDs.
             * <p>
             * Many users of time-zones use short abbreviations, such as PST for
             * 'Pacific Standard Time' and PDT for 'Pacific Daylight Time'.
             * These abbreviations are not unique, and so cannot be used as IDs.
             * This method allows a map of string to time-zone to be setup and reused
             * within an application.
             */
            // @ts-ignore
            public static of(zoneId: string, aliasMap: java.util.Map): java.time.ZoneId;
            /**
             * Obtains an instance of {@code ZoneId} from an ID ensuring that the
             * ID is valid and available for use.
             * <p>
             * This method parses the ID producing a {@code ZoneId} or {@code ZoneOffset}.
             * A {@code ZoneOffset} is returned if the ID is 'Z', or starts with '+' or '-'.
             * The result will always be a valid ID for which {@link ZoneRules} can be obtained.
             * <p>
             * Parsing matches the zone ID step by step as follows.
             * <ul>
             * <li>If the zone ID equals 'Z', the result is {@code ZoneOffset.UTC}.
             * <li>If the zone ID consists of a single letter, the zone ID is invalid
             * and {@code DateTimeException} is thrown.
             * <li>If the zone ID starts with '+' or '-', the ID is parsed as a
             * {@code ZoneOffset} using {@link ZoneOffset#of(String)}.
             * <li>If the zone ID equals 'GMT', 'UTC' or 'UT' then the result is a {@code ZoneId}
             * with the same ID and rules equivalent to {@code ZoneOffset.UTC}.
             * <li>If the zone ID starts with 'UTC+', 'UTC-', 'GMT+', 'GMT-', 'UT+' or 'UT-'
             * then the ID is a prefixed offset-based ID. The ID is split in two, with
             * a two or three letter prefix and a suffix starting with the sign.
             * The suffix is parsed as a {@link ZoneOffset#of(String) ZoneOffset}.
             * The result will be a {@code ZoneId} with the specified UTC/GMT/UT prefix
             * and the normalized offset ID as per {@link ZoneOffset#getId()}.
             * The rules of the returned {@code ZoneId} will be equivalent to the
             * parsed {@code ZoneOffset}.
             * <li>All other IDs are parsed as region-based zone IDs. Region IDs must
             * match the regular expression <code>[A-Za-z][A-Za-z0-9~/._+-]+</code>
             * otherwise a {@code DateTimeException} is thrown. If the zone ID is not
             * in the configured set of IDs, {@code ZoneRulesException} is thrown.
             * The detailed format of the region ID depends on the group supplying the data.
             * The default set of data is supplied by the IANA Time Zone Database (TZDB).
             * This has region IDs of the form '{area}/{city}', such as 'Europe/Paris' or 'America/New_York'.
             * This is compatible with most IDs from {@link java.util.TimeZone}.
             * </ul>
             */
            // @ts-ignore
            public static of(zoneId: string): java.time.ZoneId;
            /**
             * Obtains an instance of {@code ZoneId} wrapping an offset.
             * <p>
             * If the prefix is "GMT", "UTC", or "UT" a {@code ZoneId}
             * with the prefix and the non-zero offset is returned.
             * If the prefix is empty {@code ""} the {@code ZoneOffset} is returned.
             */
            // @ts-ignore
            public static ofOffset(prefix: string, offset: java.time.ZoneOffset): java.time.ZoneId;
            /**
             * Obtains an instance of {@code ZoneId} from a temporal object.
             * <p>
             * This obtains a zone based on the specified temporal.
             * A {@code TemporalAccessor} represents an arbitrary set of date and time information,
             * which this factory converts to an instance of {@code ZoneId}.
             * <p>
             * A {@code TemporalAccessor} represents some form of date and time information.
             * This factory converts the arbitrary temporal object to an instance of {@code ZoneId}.
             * <p>
             * The conversion will try to obtain the zone in a way that favours region-based
             * zones over offset-based zones using {@link TemporalQueries#zone()}.
             * <p>
             * This method matches the signature of the functional interface {@link TemporalQuery}
             * allowing it to be used as a query via method reference, {@code ZoneId::from}.
             */
            // @ts-ignore
            public static from(temporal: java.time.temporal.TemporalAccessor): java.time.ZoneId;
            /**
             * Gets the unique time-zone ID.
             * <p>
             * This ID uniquely defines this object.
             * The format of an offset based ID is defined by {@link ZoneOffset#getId()}.
             */
            // @ts-ignore
            public abstract getId(): string;
            /**
             * Gets the textual representation of the zone, such as 'British Time' or
             * '+02:00'.
             * <p>
             * This returns the textual name used to identify the time-zone ID,
             * suitable for presentation to the user.
             * The parameters control the style of the returned text and the locale.
             * <p>
             * If no textual mapping is found then the {@link #getId() full ID} is returned.
             */
            // @ts-ignore
            public getDisplayName(style: java.time.format.TextStyle, locale: java.util.Locale): string;
            /**
             * Gets the time-zone rules for this ID allowing calculations to be performed.
             * <p>
             * The rules provide the functionality associated with a time-zone,
             * such as finding the offset for a given instant or local date-time.
             * <p>
             * A time-zone can be invalid if it is deserialized in a Java Runtime which
             * does not have the same rules loaded as the Java Runtime that stored it.
             * In this case, calling this method will throw a {@code ZoneRulesException}.
             * <p>
             * The rules are supplied by {@link ZoneRulesProvider}. An advanced provider may
             * support dynamic updates to the rules without restarting the Java Runtime.
             * If so, then the result of this method may change over time.
             * Each individual call will be still remain thread-safe.
             * <p>
             * {@link ZoneOffset} will always return a set of rules where the offset never changes.
             */
            // @ts-ignore
            public abstract getRules(): java.time.zone.ZoneRules;
            /**
             * Normalizes the time-zone ID, returning a {@code ZoneOffset} where possible.
             * <p>
             * The returns a normalized {@code ZoneId} that can be used in place of this ID.
             * The result will have {@code ZoneRules} equivalent to those returned by this object,
             * however the ID returned by {@code getId()} may be different.
             * <p>
             * The normalization checks if the rules of this {@code ZoneId} have a fixed offset.
             * If they do, then the {@code ZoneOffset} equal to that offset is returned.
             * Otherwise {@code this} is returned.
             */
            // @ts-ignore
            public normalized(): java.time.ZoneId;
            /**
             * Checks if this time-zone ID is equal to another time-zone ID.
             * <p>
             * The comparison is based on the ID.
             */
            // @ts-ignore
            public equals(obj: java.lang.Object): boolean;
            /**
             * A hash code for this time-zone ID.
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Outputs this zone as a {@code String}, using the ID.
             */
            // @ts-ignore
            public toString(): string;
        }
    }
}
