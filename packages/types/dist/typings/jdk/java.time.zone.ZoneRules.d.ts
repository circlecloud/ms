// @ts-nocheck
declare namespace java {
    namespace time {
        namespace zone {
            // @ts-ignore
             class ZoneRules extends java.lang.Object {
                /**
                 * Obtains an instance of a ZoneRules.
                 */
                // @ts-ignore
                public static of(baseStandardOffset: java.time.ZoneOffset, baseWallOffset: java.time.ZoneOffset, standardOffsetTransitionList: java.util.List, transitionList: java.util.List, lastRules: java.util.List): java.time.zone.ZoneRules;
                /**
                 * Obtains an instance of ZoneRules that has fixed zone rules.
                 */
                // @ts-ignore
                public static of(offset: java.time.ZoneOffset): java.time.zone.ZoneRules;
                /**
                 * Checks of the zone rules are fixed, such that the offset never varies.
                 */
                // @ts-ignore
                public isFixedOffset(): boolean;
                /**
                 * Gets the offset applicable at the specified instant in these rules.
                 * <p>
                 * The mapping from an instant to an offset is simple, there is only
                 * one valid offset for each instant.
                 * This method returns that offset.
                 */
                // @ts-ignore
                public getOffset(instant: java.time.Instant): java.time.ZoneOffset;
                /**
                 * Gets a suitable offset for the specified local date-time in these rules.
                 * <p>
                 * The mapping from a local date-time to an offset is not straightforward.
                 * There are three cases:
                 * <ul>
                 * <li>Normal, with one valid offset. For the vast majority of the year, the normal
                 * case applies, where there is a single valid offset for the local date-time.</li>
                 * <li>Gap, with zero valid offsets. This is when clocks jump forward typically
                 * due to the spring daylight savings change from "winter" to "summer".
                 * In a gap there are local date-time values with no valid offset.</li>
                 * <li>Overlap, with two valid offsets. This is when clocks are set back typically
                 * due to the autumn daylight savings change from "summer" to "winter".
                 * In an overlap there are local date-time values with two valid offsets.</li>
                 * </ul>
                 * Thus, for any given local date-time there can be zero, one or two valid offsets.
                 * This method returns the single offset in the Normal case, and in the Gap or Overlap
                 * case it returns the offset before the transition.
                 * <p>
                 * Since, in the case of Gap and Overlap, the offset returned is a "best" value, rather
                 * than the "correct" value, it should be treated with care. Applications that care
                 * about the correct offset should use a combination of this method,
                 * {@link #getValidOffsets(LocalDateTime)} and {@link #getTransition(LocalDateTime)}.
                 */
                // @ts-ignore
                public getOffset(localDateTime: java.time.LocalDateTime): java.time.ZoneOffset;
                /**
                 * Gets the offset applicable at the specified local date-time in these rules.
                 * <p>
                 * The mapping from a local date-time to an offset is not straightforward.
                 * There are three cases:
                 * <ul>
                 * <li>Normal, with one valid offset. For the vast majority of the year, the normal
                 * case applies, where there is a single valid offset for the local date-time.</li>
                 * <li>Gap, with zero valid offsets. This is when clocks jump forward typically
                 * due to the spring daylight savings change from "winter" to "summer".
                 * In a gap there are local date-time values with no valid offset.</li>
                 * <li>Overlap, with two valid offsets. This is when clocks are set back typically
                 * due to the autumn daylight savings change from "summer" to "winter".
                 * In an overlap there are local date-time values with two valid offsets.</li>
                 * </ul>
                 * Thus, for any given local date-time there can be zero, one or two valid offsets.
                 * This method returns that list of valid offsets, which is a list of size 0, 1 or 2.
                 * In the case where there are two offsets, the earlier offset is returned at index 0
                 * and the later offset at index 1.
                 * <p>
                 * There are various ways to handle the conversion from a {@code LocalDateTime}.
                 * One technique, using this method, would be:
                 * <pre>
                 * List&lt;ZoneOffset&gt; validOffsets = rules.getOffset(localDT);
                 * if (validOffsets.size() == 1) {
                 * // Normal case: only one valid offset
                 * zoneOffset = validOffsets.get(0);
                 * } else {
                 * // Gap or Overlap: determine what to do from transition (which will be non-null)
                 * ZoneOffsetTransition trans = rules.getTransition(localDT);
                 * }
                 * </pre>
                 * <p>
                 * In theory, it is possible for there to be more than two valid offsets.
                 * This would happen if clocks to be put back more than once in quick succession.
                 * This has never happened in the history of time-zones and thus has no special handling.
                 * However, if it were to happen, then the list would return more than 2 entries.
                 */
                // @ts-ignore
                public getValidOffsets(localDateTime: java.time.LocalDateTime): java.util.List;
                /**
                 * Gets the offset transition applicable at the specified local date-time in these rules.
                 * <p>
                 * The mapping from a local date-time to an offset is not straightforward.
                 * There are three cases:
                 * <ul>
                 * <li>Normal, with one valid offset. For the vast majority of the year, the normal
                 * case applies, where there is a single valid offset for the local date-time.</li>
                 * <li>Gap, with zero valid offsets. This is when clocks jump forward typically
                 * due to the spring daylight savings change from "winter" to "summer".
                 * In a gap there are local date-time values with no valid offset.</li>
                 * <li>Overlap, with two valid offsets. This is when clocks are set back typically
                 * due to the autumn daylight savings change from "summer" to "winter".
                 * In an overlap there are local date-time values with two valid offsets.</li>
                 * </ul>
                 * A transition is used to model the cases of a Gap or Overlap.
                 * The Normal case will return null.
                 * <p>
                 * There are various ways to handle the conversion from a {@code LocalDateTime}.
                 * One technique, using this method, would be:
                 * <pre>
                 * ZoneOffsetTransition trans = rules.getTransition(localDT);
                 * if (trans == null) {
                 * // Gap or Overlap: determine what to do from transition
                 * } else {
                 * // Normal case: only one valid offset
                 * zoneOffset = rule.getOffset(localDT);
                 * }
                 * </pre>
                 */
                // @ts-ignore
                public getTransition(localDateTime: java.time.LocalDateTime): java.time.zone.ZoneOffsetTransition;
                /**
                 * Gets the standard offset for the specified instant in this zone.
                 * <p>
                 * This provides access to historic information on how the standard offset
                 * has changed over time.
                 * The standard offset is the offset before any daylight saving time is applied.
                 * This is typically the offset applicable during winter.
                 */
                // @ts-ignore
                public getStandardOffset(instant: java.time.Instant): java.time.ZoneOffset;
                /**
                 * Gets the amount of daylight savings in use for the specified instant in this zone.
                 * <p>
                 * This provides access to historic information on how the amount of daylight
                 * savings has changed over time.
                 * This is the difference between the standard offset and the actual offset.
                 * Typically the amount is zero during winter and one hour during summer.
                 * Time-zones are second-based, so the nanosecond part of the duration will be zero.
                 * <p>
                 * This default implementation calculates the duration from the
                 * {@link #getOffset(java.time.Instant) actual} and
                 * {@link #getStandardOffset(java.time.Instant) standard} offsets.
                 */
                // @ts-ignore
                public getDaylightSavings(instant: java.time.Instant): java.time.Duration;
                /**
                 * Checks if the specified instant is in daylight savings.
                 * <p>
                 * This checks if the standard offset and the actual offset are the same
                 * for the specified instant.
                 * If they are not, it is assumed that daylight savings is in operation.
                 * <p>
                 * This default implementation compares the {@link #getOffset(java.time.Instant) actual}
                 * and {@link #getStandardOffset(java.time.Instant) standard} offsets.
                 */
                // @ts-ignore
                public isDaylightSavings(instant: java.time.Instant): boolean;
                /**
                 * Checks if the offset date-time is valid for these rules.
                 * <p>
                 * To be valid, the local date-time must not be in a gap and the offset
                 * must match one of the valid offsets.
                 * <p>
                 * This default implementation checks if {@link #getValidOffsets(java.time.LocalDateTime)}
                 * contains the specified offset.
                 */
                // @ts-ignore
                public isValidOffset(localDateTime: java.time.LocalDateTime, offset: java.time.ZoneOffset): boolean;
                /**
                 * Gets the next transition after the specified instant.
                 * <p>
                 * This returns details of the next transition after the specified instant.
                 * For example, if the instant represents a point where "Summer" daylight savings time
                 * applies, then the method will return the transition to the next "Winter" time.
                 */
                // @ts-ignore
                public nextTransition(instant: java.time.Instant): java.time.zone.ZoneOffsetTransition;
                /**
                 * Gets the previous transition before the specified instant.
                 * <p>
                 * This returns details of the previous transition after the specified instant.
                 * For example, if the instant represents a point where "summer" daylight saving time
                 * applies, then the method will return the transition from the previous "winter" time.
                 */
                // @ts-ignore
                public previousTransition(instant: java.time.Instant): java.time.zone.ZoneOffsetTransition;
                /**
                 * Gets the complete list of fully defined transitions.
                 * <p>
                 * The complete set of transitions for this rules instance is defined by this method
                 * and {@link #getTransitionRules()}. This method returns those transitions that have
                 * been fully defined. These are typically historical, but may be in the future.
                 * <p>
                 * The list will be empty for fixed offset rules and for any time-zone where there has
                 * only ever been a single offset. The list will also be empty if the transition rules are unknown.
                 */
                // @ts-ignore
                public getTransitions(): java.util.List;
                /**
                 * Gets the list of transition rules for years beyond those defined in the transition list.
                 * <p>
                 * The complete set of transitions for this rules instance is defined by this method
                 * and {@link #getTransitions()}. This method returns instances of {@link ZoneOffsetTransitionRule}
                 * that define an algorithm for when transitions will occur.
                 * <p>
                 * For any given {@code ZoneRules}, this list contains the transition rules for years
                 * beyond those years that have been fully defined. These rules typically refer to future
                 * daylight saving time rule changes.
                 * <p>
                 * If the zone defines daylight savings into the future, then the list will normally
                 * be of size two and hold information about entering and exiting daylight savings.
                 * If the zone does not have daylight savings, or information about future changes
                 * is uncertain, then the list will be empty.
                 * <p>
                 * The list will be empty for fixed offset rules and for any time-zone where there is no
                 * daylight saving time. The list will also be empty if the transition rules are unknown.
                 */
                // @ts-ignore
                public getTransitionRules(): java.util.List;
                /**
                 * Checks if this set of rules equals another.
                 * <p>
                 * Two rule sets are equal if they will always result in the same output
                 * for any given input instant or local date-time.
                 * Rules from two different groups may return false even if they are in fact the same.
                 * <p>
                 * This definition should result in implementations comparing their entire state.
                 */
                // @ts-ignore
                public equals(otherRules: java.lang.Object): boolean;
                /**
                 * Returns a suitable hash code given the definition of {@code #equals}.
                 */
                // @ts-ignore
                public hashCode(): number;
                /**
                 * Returns a string describing this object.
                 */
                // @ts-ignore
                public toString(): string;
            }
        }
    }
}
