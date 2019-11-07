declare namespace java {
    namespace time {
        namespace zone {
            namespace ZoneOffsetTransitionRule {
                // @ts-ignore
                 class TimeDefinition extends java.lang.Enum {
                    // @ts-ignore
                    public static UTC: java.time.zone.ZoneOffsetTransitionRule.TimeDefinition;
                    // @ts-ignore
                    public static WALL: java.time.zone.ZoneOffsetTransitionRule.TimeDefinition;
                    // @ts-ignore
                    public static STANDARD: java.time.zone.ZoneOffsetTransitionRule.TimeDefinition;
                    // @ts-ignore
                    public static values(): java.time.zone.ZoneOffsetTransitionRule.TimeDefinition[];
                    // @ts-ignore
                    public static valueOf(name: string): java.time.zone.ZoneOffsetTransitionRule.TimeDefinition;
                    /**
                     * Converts the specified local date-time to the local date-time actually
                     * seen on a wall clock.
                     * <p>
                     * This method converts using the type of this enum.
                     * The output is defined relative to the 'before' offset of the transition.
                     * <p>
                     * The UTC type uses the UTC offset.
                     * The STANDARD type uses the standard offset.
                     * The WALL type returns the input date-time.
                     * The result is intended for use with the wall-offset.
                     */
                    // @ts-ignore
                    public createDateTime(dateTime: java.time.LocalDateTime, standardOffset: java.time.ZoneOffset, wallOffset: java.time.ZoneOffset): java.time.LocalDateTime;
                }
            }
        }
    }
}
