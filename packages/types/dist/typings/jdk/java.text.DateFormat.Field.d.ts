// @ts-nocheck
declare namespace java {
    namespace text {
        namespace DateFormat {
            // @ts-ignore
             class Field extends java.text.Format.Field {
                /**
                 * Creates a <code>Field</code>.
                 */
                // @ts-ignore
                constructor(name: string, calendarField: number)
                // @ts-ignore
                public static ERA: java.text.DateFormat.Field;
                // @ts-ignore
                public static YEAR: java.text.DateFormat.Field;
                // @ts-ignore
                public static MONTH: java.text.DateFormat.Field;
                // @ts-ignore
                public static DAY_OF_MONTH: java.text.DateFormat.Field;
                // @ts-ignore
                public static HOUR_OF_DAY1: java.text.DateFormat.Field;
                // @ts-ignore
                public static HOUR_OF_DAY0: java.text.DateFormat.Field;
                // @ts-ignore
                public static MINUTE: java.text.DateFormat.Field;
                // @ts-ignore
                public static SECOND: java.text.DateFormat.Field;
                // @ts-ignore
                public static MILLISECOND: java.text.DateFormat.Field;
                // @ts-ignore
                public static DAY_OF_WEEK: java.text.DateFormat.Field;
                // @ts-ignore
                public static DAY_OF_YEAR: java.text.DateFormat.Field;
                // @ts-ignore
                public static DAY_OF_WEEK_IN_MONTH: java.text.DateFormat.Field;
                // @ts-ignore
                public static WEEK_OF_YEAR: java.text.DateFormat.Field;
                // @ts-ignore
                public static WEEK_OF_MONTH: java.text.DateFormat.Field;
                // @ts-ignore
                public static AM_PM: java.text.DateFormat.Field;
                // @ts-ignore
                public static HOUR1: java.text.DateFormat.Field;
                // @ts-ignore
                public static HOUR0: java.text.DateFormat.Field;
                // @ts-ignore
                public static TIME_ZONE: java.text.DateFormat.Field;
                /**
                 * Returns the <code>Field</code> constant that corresponds to
                 * the <code>Calendar</code> constant <code>calendarField</code>.
                 * If there is no direct mapping between the <code>Calendar</code>
                 * constant and a <code>Field</code>, null is returned.
                 */
                // @ts-ignore
                public static ofCalendarField(calendarField: number): java.text.DateFormat.Field;
                /**
                 * Returns the <code>Calendar</code> field associated with this
                 * attribute. For example, if this represents the hours field of
                 * a <code>Calendar</code>, this would return
                 * <code>Calendar.HOUR</code>. If there is no corresponding
                 * <code>Calendar</code> constant, this will return -1.
                 */
                // @ts-ignore
                public getCalendarField(): number;
                /**
                 * Resolves instances being deserialized to the predefined constants.
                 */
                // @ts-ignore
                protected readResolve(): java.lang.Object;
            }
        }
    }
}
