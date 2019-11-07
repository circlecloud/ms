// @ts-nocheck
declare namespace java {
    namespace time {
        namespace zone {
            // @ts-ignore
            abstract class ZoneRulesProvider extends java.lang.Object {
                /**
                 * Constructor.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Gets the set of available zone IDs.
                 * <p>
                 * These IDs are the string form of a {@link ZoneId}.
                 */
                // @ts-ignore
                public static getAvailableZoneIds(): java.util.Set;
                /**
                 * Gets the rules for the zone ID.
                 * <p>
                 * This returns the latest available rules for the zone ID.
                 * <p>
                 * This method relies on time-zone data provider files that are configured.
                 * These are loaded using a {@code ServiceLoader}.
                 * <p>
                 * The caching flag is designed to allow provider implementations to
                 * prevent the rules being cached in {@code ZoneId}.
                 * Under normal circumstances, the caching of zone rules is highly desirable
                 * as it will provide greater performance. However, there is a use case where
                 * the caching would not be desirable, see {@link #provideRules}.
                 */
                // @ts-ignore
                public static getRules(zoneId: string, forCaching: boolean): java.time.zone.ZoneRules;
                /**
                 * Gets the history of rules for the zone ID.
                 * <p>
                 * Time-zones are defined by governments and change frequently.
                 * This method allows applications to find the history of changes to the
                 * rules for a single zone ID. The map is keyed by a string, which is the
                 * version string associated with the rules.
                 * <p>
                 * The exact meaning and format of the version is provider specific.
                 * The version must follow lexicographical order, thus the returned map will
                 * be order from the oldest known rules to the newest available rules.
                 * The default 'TZDB' group uses version numbering consisting of the year
                 * followed by a letter, such as '2009e' or '2012f'.
                 * <p>
                 * Implementations must provide a result for each valid zone ID, however
                 * they do not have to provide a history of rules.
                 * Thus the map will always contain one element, and will only contain more
                 * than one element if historical rule information is available.
                 */
                // @ts-ignore
                public static getVersions(zoneId: string): java.util.NavigableMap;
                /**
                 * Registers a zone rules provider.
                 * <p>
                 * This adds a new provider to those currently available.
                 * A provider supplies rules for one or more zone IDs.
                 * A provider cannot be registered if it supplies a zone ID that has already been
                 * registered. See the notes on time-zone IDs in {@link ZoneId}, especially
                 * the section on using the concept of a "group" to make IDs unique.
                 * <p>
                 * To ensure the integrity of time-zones already created, there is no way
                 * to deregister providers.
                 */
                // @ts-ignore
                public static registerProvider(provider: java.time.zone.ZoneRulesProvider): void;
                /**
                 * Refreshes the rules from the underlying data provider.
                 * <p>
                 * This method allows an application to request that the providers check
                 * for any updates to the provided rules.
                 * After calling this method, the offset stored in any {@link ZonedDateTime}
                 * may be invalid for the zone ID.
                 * <p>
                 * Dynamic update of rules is a complex problem and most applications
                 * should not use this method or dynamic rules.
                 * To achieve dynamic rules, a provider implementation will have to be written
                 * as per the specification of this class.
                 * In addition, instances of {@code ZoneRules} must not be cached in the
                 * application as they will become stale. However, the boolean flag on
                 * {@link #provideRules(String, boolean)} allows provider implementations
                 * to control the caching of {@code ZoneId}, potentially ensuring that
                 * all objects in the system see the new rules.
                 * Note that there is likely to be a cost in performance of a dynamic rules
                 * provider. Note also that no dynamic rules provider is in this specification.
                 */
                // @ts-ignore
                public static refresh(): boolean;
                /**
                 * SPI method to get the available zone IDs.
                 * <p>
                 * This obtains the IDs that this {@code ZoneRulesProvider} provides.
                 * A provider should provide data for at least one zone ID.
                 * <p>
                 * The returned zone IDs remain available and valid for the lifetime of the application.
                 * A dynamic provider may increase the set of IDs as more data becomes available.
                 */
                // @ts-ignore
                protected abstract provideZoneIds(): java.util.Set;
                /**
                 * SPI method to get the rules for the zone ID.
                 * <p>
                 * This loads the rules for the specified zone ID.
                 * The provider implementation must validate that the zone ID is valid and
                 * available, throwing a {@code ZoneRulesException} if it is not.
                 * The result of the method in the valid case depends on the caching flag.
                 * <p>
                 * If the provider implementation is not dynamic, then the result of the
                 * method must be the non-null set of rules selected by the ID.
                 * <p>
                 * If the provider implementation is dynamic, then the flag gives the option
                 * of preventing the returned rules from being cached in {@link ZoneId}.
                 * When the flag is true, the provider is permitted to return null, where
                 * null will prevent the rules from being cached in {@code ZoneId}.
                 * When the flag is false, the provider must return non-null rules.
                 */
                // @ts-ignore
                protected abstract provideRules(zoneId: string, forCaching: boolean): java.time.zone.ZoneRules;
                /**
                 * SPI method to get the history of rules for the zone ID.
                 * <p>
                 * This returns a map of historical rules keyed by a version string.
                 * The exact meaning and format of the version is provider specific.
                 * The version must follow lexicographical order, thus the returned map will
                 * be order from the oldest known rules to the newest available rules.
                 * The default 'TZDB' group uses version numbering consisting of the year
                 * followed by a letter, such as '2009e' or '2012f'.
                 * <p>
                 * Implementations must provide a result for each valid zone ID, however
                 * they do not have to provide a history of rules.
                 * Thus the map will contain at least one element, and will only contain
                 * more than one element if historical rule information is available.
                 * <p>
                 * The returned versions remain available and valid for the lifetime of the application.
                 * A dynamic provider may increase the set of versions as more data becomes available.
                 */
                // @ts-ignore
                protected abstract provideVersions(zoneId: string): java.util.NavigableMap;
                /**
                 * SPI method to refresh the rules from the underlying data provider.
                 * <p>
                 * This method provides the opportunity for a provider to dynamically
                 * recheck the underlying data provider to find the latest rules.
                 * This could be used to load new rules without stopping the JVM.
                 * Dynamic behavior is entirely optional and most providers do not support it.
                 * <p>
                 * This implementation returns false.
                 */
                // @ts-ignore
                protected provideRefresh(): boolean;
            }
        }
    }
}
