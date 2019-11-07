// @ts-nocheck
declare namespace java {
    namespace time {
        namespace format {
            // @ts-ignore
             class DateTimeFormatter extends java.lang.Object {
                // @ts-ignore
                public static ISO_LOCAL_DATE: java.time.format.DateTimeFormatter;
                // @ts-ignore
                public static ISO_OFFSET_DATE: java.time.format.DateTimeFormatter;
                // @ts-ignore
                public static ISO_DATE: java.time.format.DateTimeFormatter;
                // @ts-ignore
                public static ISO_LOCAL_TIME: java.time.format.DateTimeFormatter;
                // @ts-ignore
                public static ISO_OFFSET_TIME: java.time.format.DateTimeFormatter;
                // @ts-ignore
                public static ISO_TIME: java.time.format.DateTimeFormatter;
                // @ts-ignore
                public static ISO_LOCAL_DATE_TIME: java.time.format.DateTimeFormatter;
                // @ts-ignore
                public static ISO_OFFSET_DATE_TIME: java.time.format.DateTimeFormatter;
                // @ts-ignore
                public static ISO_ZONED_DATE_TIME: java.time.format.DateTimeFormatter;
                // @ts-ignore
                public static ISO_DATE_TIME: java.time.format.DateTimeFormatter;
                // @ts-ignore
                public static ISO_ORDINAL_DATE: java.time.format.DateTimeFormatter;
                // @ts-ignore
                public static ISO_WEEK_DATE: java.time.format.DateTimeFormatter;
                // @ts-ignore
                public static ISO_INSTANT: java.time.format.DateTimeFormatter;
                // @ts-ignore
                public static BASIC_ISO_DATE: java.time.format.DateTimeFormatter;
                // @ts-ignore
                public static RFC_1123_DATE_TIME: java.time.format.DateTimeFormatter;
                /**
                 * Creates a formatter using the specified pattern.
                 * <p>
                 * This method will create a formatter based on a simple
                 * <a href="#patterns">pattern of letters and symbols</a>
                 * as described in the class documentation.
                 * For example, {@code d MMM uuuu} will format 2011-12-03 as '3 Dec 2011'.
                 * <p>
                 * The formatter will use the {@link Locale#getDefault(Locale.Category) default FORMAT locale}.
                 * This can be changed using {@link DateTimeFormatter#withLocale(Locale)} on the returned formatter
                 * Alternatively use the {@link #ofPattern(String, Locale)} variant of this method.
                 * <p>
                 * The returned formatter has no override chronology or zone.
                 * It uses {@link ResolverStyle#SMART SMART} resolver style.
                 */
                // @ts-ignore
                public static ofPattern(pattern: string): java.time.format.DateTimeFormatter;
                /**
                 * Creates a formatter using the specified pattern and locale.
                 * <p>
                 * This method will create a formatter based on a simple
                 * <a href="#patterns">pattern of letters and symbols</a>
                 * as described in the class documentation.
                 * For example, {@code d MMM uuuu} will format 2011-12-03 as '3 Dec 2011'.
                 * <p>
                 * The formatter will use the specified locale.
                 * This can be changed using {@link DateTimeFormatter#withLocale(Locale)} on the returned formatter
                 * <p>
                 * The returned formatter has no override chronology or zone.
                 * It uses {@link ResolverStyle#SMART SMART} resolver style.
                 */
                // @ts-ignore
                public static ofPattern(pattern: string, locale: java.util.Locale): java.time.format.DateTimeFormatter;
                /**
                 * Returns a locale specific date format for the ISO chronology.
                 * <p>
                 * This returns a formatter that will format or parse a date.
                 * The exact format pattern used varies by locale.
                 * <p>
                 * The locale is determined from the formatter. The formatter returned directly by
                 * this method will use the {@link Locale#getDefault(Locale.Category) default FORMAT locale}.
                 * The locale can be controlled using {@link DateTimeFormatter#withLocale(Locale) withLocale(Locale)}
                 * on the result of this method.
                 * <p>
                 * Note that the localized pattern is looked up lazily.
                 * This {@code DateTimeFormatter} holds the style required and the locale,
                 * looking up the pattern required on demand.
                 * <p>
                 * The returned formatter has a chronology of ISO set to ensure dates in
                 * other calendar systems are correctly converted.
                 * It has no override zone and uses the {@link ResolverStyle#SMART SMART} resolver style.
                 */
                // @ts-ignore
                public static ofLocalizedDate(dateStyle: java.time.format.FormatStyle): java.time.format.DateTimeFormatter;
                /**
                 * Returns a locale specific time format for the ISO chronology.
                 * <p>
                 * This returns a formatter that will format or parse a time.
                 * The exact format pattern used varies by locale.
                 * <p>
                 * The locale is determined from the formatter. The formatter returned directly by
                 * this method will use the {@link Locale#getDefault(Locale.Category) default FORMAT locale}.
                 * The locale can be controlled using {@link DateTimeFormatter#withLocale(Locale) withLocale(Locale)}
                 * on the result of this method.
                 * <p>
                 * Note that the localized pattern is looked up lazily.
                 * This {@code DateTimeFormatter} holds the style required and the locale,
                 * looking up the pattern required on demand.
                 * <p>
                 * The returned formatter has a chronology of ISO set to ensure dates in
                 * other calendar systems are correctly converted.
                 * It has no override zone and uses the {@link ResolverStyle#SMART SMART} resolver style.
                 */
                // @ts-ignore
                public static ofLocalizedTime(timeStyle: java.time.format.FormatStyle): java.time.format.DateTimeFormatter;
                /**
                 * Returns a locale specific date-time formatter for the ISO chronology.
                 * <p>
                 * This returns a formatter that will format or parse a date-time.
                 * The exact format pattern used varies by locale.
                 * <p>
                 * The locale is determined from the formatter. The formatter returned directly by
                 * this method will use the {@link Locale#getDefault(Locale.Category) default FORMAT locale}.
                 * The locale can be controlled using {@link DateTimeFormatter#withLocale(Locale) withLocale(Locale)}
                 * on the result of this method.
                 * <p>
                 * Note that the localized pattern is looked up lazily.
                 * This {@code DateTimeFormatter} holds the style required and the locale,
                 * looking up the pattern required on demand.
                 * <p>
                 * The returned formatter has a chronology of ISO set to ensure dates in
                 * other calendar systems are correctly converted.
                 * It has no override zone and uses the {@link ResolverStyle#SMART SMART} resolver style.
                 */
                // @ts-ignore
                public static ofLocalizedDateTime(dateTimeStyle: java.time.format.FormatStyle): java.time.format.DateTimeFormatter;
                /**
                 * Returns a locale specific date and time format for the ISO chronology.
                 * <p>
                 * This returns a formatter that will format or parse a date-time.
                 * The exact format pattern used varies by locale.
                 * <p>
                 * The locale is determined from the formatter. The formatter returned directly by
                 * this method will use the {@link Locale#getDefault() default FORMAT locale}.
                 * The locale can be controlled using {@link DateTimeFormatter#withLocale(Locale) withLocale(Locale)}
                 * on the result of this method.
                 * <p>
                 * Note that the localized pattern is looked up lazily.
                 * This {@code DateTimeFormatter} holds the style required and the locale,
                 * looking up the pattern required on demand.
                 * <p>
                 * The returned formatter has a chronology of ISO set to ensure dates in
                 * other calendar systems are correctly converted.
                 * It has no override zone and uses the {@link ResolverStyle#SMART SMART} resolver style.
                 */
                // @ts-ignore
                public static ofLocalizedDateTime(dateStyle: java.time.format.FormatStyle, timeStyle: java.time.format.FormatStyle): java.time.format.DateTimeFormatter;
                /**
                 * A query that provides access to the excess days that were parsed.
                 * <p>
                 * This returns a singleton {@linkplain TemporalQuery query} that provides
                 * access to additional information from the parse. The query always returns
                 * a non-null period, with a zero period returned instead of null.
                 * <p>
                 * There are two situations where this query may return a non-zero period.
                 * <ul>
                 * <li>If the {@code ResolverStyle} is {@code LENIENT} and a time is parsed
                 * without a date, then the complete result of the parse consists of a
                 * {@code LocalTime} and an excess {@code Period} in days.
                 * <li>If the {@code ResolverStyle} is {@code SMART} and a time is parsed
                 * without a date where the time is 24:00:00, then the complete result of
                 * the parse consists of a {@code LocalTime} of 00:00:00 and an excess
                 * {@code Period} of one day.
                 * </ul>
                 * <p>
                 * In both cases, if a complete {@code ChronoLocalDateTime} or {@code Instant}
                 * is parsed, then the excess days are added to the date part.
                 * As a result, this query will return a zero period.
                 * <p>
                 * The {@code SMART} behaviour handles the common "end of day" 24:00 value.
                 * Processing in {@code LENIENT} mode also produces the same result:
                 * <pre>
                 * Text to parse        Parsed object                         Excess days
                 * "2012-12-03T00:00"   LocalDateTime.of(2012, 12, 3, 0, 0)   ZERO
                 * "2012-12-03T24:00"   LocalDateTime.of(2012, 12, 4, 0, 0)   ZERO
                 * "00:00"              LocalTime.of(0, 0)                    ZERO
                 * "24:00"              LocalTime.of(0, 0)                    Period.ofDays(1)
                 * </pre>
                 * The query can be used as follows:
                 * <pre>
                 * TemporalAccessor parsed = formatter.parse(str);
                 * LocalTime time = parsed.query(LocalTime::from);
                 * Period extraDays = parsed.query(DateTimeFormatter.parsedExcessDays());
                 * </pre>
                 */
                // @ts-ignore
                public static parsedExcessDays(): java.time.temporal.TemporalQuery;
                /**
                 * A query that provides access to whether a leap-second was parsed.
                 * <p>
                 * This returns a singleton {@linkplain TemporalQuery query} that provides
                 * access to additional information from the parse. The query always returns
                 * a non-null boolean, true if parsing saw a leap-second, false if not.
                 * <p>
                 * Instant parsing handles the special "leap second" time of '23:59:60'.
                 * Leap seconds occur at '23:59:60' in the UTC time-zone, but at other
                 * local times in different time-zones. To avoid this potential ambiguity,
                 * the handling of leap-seconds is limited to
                 * {@link DateTimeFormatterBuilder#appendInstant()}, as that method
                 * always parses the instant with the UTC zone offset.
                 * <p>
                 * If the time '23:59:60' is received, then a simple conversion is applied,
                 * replacing the second-of-minute of 60 with 59. This query can be used
                 * on the parse result to determine if the leap-second adjustment was made.
                 * The query will return {@code true} if it did adjust to remove the
                 * leap-second, and {@code false} if not. Note that applying a leap-second
                 * smoothing mechanism, such as UTC-SLS, is the responsibility of the
                 * application, as follows:
                 * <pre>
                 * TemporalAccessor parsed = formatter.parse(str);
                 * Instant instant = parsed.query(Instant::from);
                 * if (parsed.query(DateTimeFormatter.parsedLeapSecond())) {
                 * // validate leap-second is correct and apply correct smoothing
                 * }
                 * </pre>
                 */
                // @ts-ignore
                public static parsedLeapSecond(): java.time.temporal.TemporalQuery;
                /**
                 * Gets the locale to be used during formatting.
                 * <p>
                 * This is used to lookup any part of the formatter needing specific
                 * localization, such as the text or localized pattern.
                 */
                // @ts-ignore
                public getLocale(): java.util.Locale;
                /**
                 * Returns a copy of this formatter with a new locale.
                 * <p>
                 * This is used to lookup any part of the formatter needing specific
                 * localization, such as the text or localized pattern.
                 * <p>
                 * This instance is immutable and unaffected by this method call.
                 */
                // @ts-ignore
                public withLocale(locale: java.util.Locale): java.time.format.DateTimeFormatter;
                /**
                 * Gets the DecimalStyle to be used during formatting.
                 */
                // @ts-ignore
                public getDecimalStyle(): java.time.format.DecimalStyle;
                /**
                 * Returns a copy of this formatter with a new DecimalStyle.
                 * <p>
                 * This instance is immutable and unaffected by this method call.
                 */
                // @ts-ignore
                public withDecimalStyle(decimalStyle: java.time.format.DecimalStyle): java.time.format.DateTimeFormatter;
                /**
                 * Gets the overriding chronology to be used during formatting.
                 * <p>
                 * This returns the override chronology, used to convert dates.
                 * By default, a formatter has no override chronology, returning null.
                 * See {@link #withChronology(Chronology)} for more details on overriding.
                 */
                // @ts-ignore
                public getChronology(): java.time.chrono.Chronology;
                /**
                 * Returns a copy of this formatter with a new override chronology.
                 * <p>
                 * This returns a formatter with similar state to this formatter but
                 * with the override chronology set.
                 * By default, a formatter has no override chronology, returning null.
                 * <p>
                 * If an override is added, then any date that is formatted or parsed will be affected.
                 * <p>
                 * When formatting, if the temporal object contains a date, then it will
                 * be converted to a date in the override chronology.
                 * Whether the temporal contains a date is determined by querying the
                 * {@link ChronoField#EPOCH_DAY EPOCH_DAY} field.
                 * Any time or zone will be retained unaltered unless overridden.
                 * <p>
                 * If the temporal object does not contain a date, but does contain one
                 * or more {@code ChronoField} date fields, then a {@code DateTimeException}
                 * is thrown. In all other cases, the override chronology is added to the temporal,
                 * replacing any previous chronology, but without changing the date/time.
                 * <p>
                 * When parsing, there are two distinct cases to consider.
                 * If a chronology has been parsed directly from the text, perhaps because
                 * {@link DateTimeFormatterBuilder#appendChronologyId()} was used, then
                 * this override chronology has no effect.
                 * If no zone has been parsed, then this override chronology will be used
                 * to interpret the {@code ChronoField} values into a date according to the
                 * date resolving rules of the chronology.
                 * <p>
                 * This instance is immutable and unaffected by this method call.
                 */
                // @ts-ignore
                public withChronology(chrono: java.time.chrono.Chronology): java.time.format.DateTimeFormatter;
                /**
                 * Gets the overriding zone to be used during formatting.
                 * <p>
                 * This returns the override zone, used to convert instants.
                 * By default, a formatter has no override zone, returning null.
                 * See {@link #withZone(ZoneId)} for more details on overriding.
                 */
                // @ts-ignore
                public getZone(): java.time.ZoneId;
                /**
                 * Returns a copy of this formatter with a new override zone.
                 * <p>
                 * This returns a formatter with similar state to this formatter but
                 * with the override zone set.
                 * By default, a formatter has no override zone, returning null.
                 * <p>
                 * If an override is added, then any instant that is formatted or parsed will be affected.
                 * <p>
                 * When formatting, if the temporal object contains an instant, then it will
                 * be converted to a zoned date-time using the override zone.
                 * Whether the temporal is an instant is determined by querying the
                 * {@link ChronoField#INSTANT_SECONDS INSTANT_SECONDS} field.
                 * If the input has a chronology then it will be retained unless overridden.
                 * If the input does not have a chronology, such as {@code Instant}, then
                 * the ISO chronology will be used.
                 * <p>
                 * If the temporal object does not contain an instant, but does contain
                 * an offset then an additional check is made. If the normalized override
                 * zone is an offset that differs from the offset of the temporal, then
                 * a {@code DateTimeException} is thrown. In all other cases, the override
                 * zone is added to the temporal, replacing any previous zone, but without
                 * changing the date/time.
                 * <p>
                 * When parsing, there are two distinct cases to consider.
                 * If a zone has been parsed directly from the text, perhaps because
                 * {@link DateTimeFormatterBuilder#appendZoneId()} was used, then
                 * this override zone has no effect.
                 * If no zone has been parsed, then this override zone will be included in
                 * the result of the parse where it can be used to build instants and date-times.
                 * <p>
                 * This instance is immutable and unaffected by this method call.
                 */
                // @ts-ignore
                public withZone(zone: java.time.ZoneId): java.time.format.DateTimeFormatter;
                /**
                 * Gets the resolver style to use during parsing.
                 * <p>
                 * This returns the resolver style, used during the second phase of parsing
                 * when fields are resolved into dates and times.
                 * By default, a formatter has the {@link ResolverStyle#SMART SMART} resolver style.
                 * See {@link #withResolverStyle(ResolverStyle)} for more details.
                 */
                // @ts-ignore
                public getResolverStyle(): java.time.format.ResolverStyle;
                /**
                 * Returns a copy of this formatter with a new resolver style.
                 * <p>
                 * This returns a formatter with similar state to this formatter but
                 * with the resolver style set. By default, a formatter has the
                 * {@link ResolverStyle#SMART SMART} resolver style.
                 * <p>
                 * Changing the resolver style only has an effect during parsing.
                 * Parsing a text string occurs in two phases.
                 * Phase 1 is a basic text parse according to the fields added to the builder.
                 * Phase 2 resolves the parsed field-value pairs into date and/or time objects.
                 * The resolver style is used to control how phase 2, resolving, happens.
                 * See {@code ResolverStyle} for more information on the options available.
                 * <p>
                 * This instance is immutable and unaffected by this method call.
                 */
                // @ts-ignore
                public withResolverStyle(resolverStyle: java.time.format.ResolverStyle): java.time.format.DateTimeFormatter;
                /**
                 * Gets the resolver fields to use during parsing.
                 * <p>
                 * This returns the resolver fields, used during the second phase of parsing
                 * when fields are resolved into dates and times.
                 * By default, a formatter has no resolver fields, and thus returns null.
                 * See {@link #withResolverFields(Set)} for more details.
                 */
                // @ts-ignore
                public getResolverFields(): java.util.Set;
                /**
                 * Returns a copy of this formatter with a new set of resolver fields.
                 * <p>
                 * This returns a formatter with similar state to this formatter but with
                 * the resolver fields set. By default, a formatter has no resolver fields.
                 * <p>
                 * Changing the resolver fields only has an effect during parsing.
                 * Parsing a text string occurs in two phases.
                 * Phase 1 is a basic text parse according to the fields added to the builder.
                 * Phase 2 resolves the parsed field-value pairs into date and/or time objects.
                 * The resolver fields are used to filter the field-value pairs between phase 1 and 2.
                 * <p>
                 * This can be used to select between two or more ways that a date or time might
                 * be resolved. For example, if the formatter consists of year, month, day-of-month
                 * and day-of-year, then there are two ways to resolve a date.
                 * Calling this method with the arguments {@link ChronoField#YEAR YEAR} and
                 * {@link ChronoField#DAY_OF_YEAR DAY_OF_YEAR} will ensure that the date is
                 * resolved using the year and day-of-year, effectively meaning that the month
                 * and day-of-month are ignored during the resolving phase.
                 * <p>
                 * In a similar manner, this method can be used to ignore secondary fields that
                 * would otherwise be cross-checked. For example, if the formatter consists of year,
                 * month, day-of-month and day-of-week, then there is only one way to resolve a
                 * date, but the parsed value for day-of-week will be cross-checked against the
                 * resolved date. Calling this method with the arguments {@link ChronoField#YEAR YEAR},
                 * {@link ChronoField#MONTH_OF_YEAR MONTH_OF_YEAR} and
                 * {@link ChronoField#DAY_OF_MONTH DAY_OF_MONTH} will ensure that the date is
                 * resolved correctly, but without any cross-check for the day-of-week.
                 * <p>
                 * In implementation terms, this method behaves as follows. The result of the
                 * parsing phase can be considered to be a map of field to value. The behavior
                 * of this method is to cause that map to be filtered between phase 1 and 2,
                 * removing all fields other than those specified as arguments to this method.
                 * <p>
                 * This instance is immutable and unaffected by this method call.
                 */
                // @ts-ignore
                public withResolverFields(resolverFields: java.time.temporal.TemporalField): java.time.format.DateTimeFormatter;
                /**
                 * Returns a copy of this formatter with a new set of resolver fields.
                 * <p>
                 * This returns a formatter with similar state to this formatter but with
                 * the resolver fields set. By default, a formatter has no resolver fields.
                 * <p>
                 * Changing the resolver fields only has an effect during parsing.
                 * Parsing a text string occurs in two phases.
                 * Phase 1 is a basic text parse according to the fields added to the builder.
                 * Phase 2 resolves the parsed field-value pairs into date and/or time objects.
                 * The resolver fields are used to filter the field-value pairs between phase 1 and 2.
                 * <p>
                 * This can be used to select between two or more ways that a date or time might
                 * be resolved. For example, if the formatter consists of year, month, day-of-month
                 * and day-of-year, then there are two ways to resolve a date.
                 * Calling this method with the arguments {@link ChronoField#YEAR YEAR} and
                 * {@link ChronoField#DAY_OF_YEAR DAY_OF_YEAR} will ensure that the date is
                 * resolved using the year and day-of-year, effectively meaning that the month
                 * and day-of-month are ignored during the resolving phase.
                 * <p>
                 * In a similar manner, this method can be used to ignore secondary fields that
                 * would otherwise be cross-checked. For example, if the formatter consists of year,
                 * month, day-of-month and day-of-week, then there is only one way to resolve a
                 * date, but the parsed value for day-of-week will be cross-checked against the
                 * resolved date. Calling this method with the arguments {@link ChronoField#YEAR YEAR},
                 * {@link ChronoField#MONTH_OF_YEAR MONTH_OF_YEAR} and
                 * {@link ChronoField#DAY_OF_MONTH DAY_OF_MONTH} will ensure that the date is
                 * resolved correctly, but without any cross-check for the day-of-week.
                 * <p>
                 * In implementation terms, this method behaves as follows. The result of the
                 * parsing phase can be considered to be a map of field to value. The behavior
                 * of this method is to cause that map to be filtered between phase 1 and 2,
                 * removing all fields other than those specified as arguments to this method.
                 * <p>
                 * This instance is immutable and unaffected by this method call.
                 */
                // @ts-ignore
                public withResolverFields(resolverFields: java.util.Set): java.time.format.DateTimeFormatter;
                /**
                 * Formats a date-time object using this formatter.
                 * <p>
                 * This formats the date-time to a String using the rules of the formatter.
                 */
                // @ts-ignore
                public format(temporal: java.time.temporal.TemporalAccessor): string;
                /**
                 * Formats a date-time object to an {@code Appendable} using this formatter.
                 * <p>
                 * This outputs the formatted date-time to the specified destination.
                 * {@link Appendable} is a general purpose interface that is implemented by all
                 * key character output classes including {@code StringBuffer}, {@code StringBuilder},
                 * {@code PrintStream} and {@code Writer}.
                 * <p>
                 * Although {@code Appendable} methods throw an {@code IOException}, this method does not.
                 * Instead, any {@code IOException} is wrapped in a runtime exception.
                 */
                // @ts-ignore
                public formatTo(temporal: java.time.temporal.TemporalAccessor, appendable: java.lang.Appendable): void;
                /**
                 * Fully parses the text producing a temporal object.
                 * <p>
                 * This parses the entire text producing a temporal object.
                 * It is typically more useful to use {@link #parse(CharSequence, TemporalQuery)}.
                 * The result of this method is {@code TemporalAccessor} which has been resolved,
                 * applying basic validation checks to help ensure a valid date-time.
                 * <p>
                 * If the parse completes without reading the entire length of the text,
                 * or a problem occurs during parsing or merging, then an exception is thrown.
                 */
                // @ts-ignore
                public parse(text: java.lang.CharSequence): java.time.temporal.TemporalAccessor;
                /**
                 * Parses the text using this formatter, providing control over the text position.
                 * <p>
                 * This parses the text without requiring the parse to start from the beginning
                 * of the string or finish at the end.
                 * The result of this method is {@code TemporalAccessor} which has been resolved,
                 * applying basic validation checks to help ensure a valid date-time.
                 * <p>
                 * The text will be parsed from the specified start {@code ParsePosition}.
                 * The entire length of the text does not have to be parsed, the {@code ParsePosition}
                 * will be updated with the index at the end of parsing.
                 * <p>
                 * The operation of this method is slightly different to similar methods using
                 * {@code ParsePosition} on {@code java.text.Format}. That class will return
                 * errors using the error index on the {@code ParsePosition}. By contrast, this
                 * method will throw a {@link DateTimeParseException} if an error occurs, with
                 * the exception containing the error index.
                 * This change in behavior is necessary due to the increased complexity of
                 * parsing and resolving dates/times in this API.
                 * <p>
                 * If the formatter parses the same field more than once with different values,
                 * the result will be an error.
                 */
                // @ts-ignore
                public parse(text: java.lang.CharSequence, position: java.text.ParsePosition): java.time.temporal.TemporalAccessor;
                /**
                 * Fully parses the text producing an object of the specified type.
                 * <p>
                 * Most applications should use this method for parsing.
                 * It parses the entire text to produce the required date-time.
                 * The query is typically a method reference to a {@code from(TemporalAccessor)} method.
                 * For example:
                 * <pre>
                 * LocalDateTime dt = parser.parse(str, LocalDateTime::from);
                 * </pre>
                 * If the parse completes without reading the entire length of the text,
                 * or a problem occurs during parsing or merging, then an exception is thrown.
                 */
                // @ts-ignore
                public parse(text: java.lang.CharSequence, query: java.time.temporal.TemporalQuery): java.lang.Object;
                /**
                 * Fully parses the text producing an object of one of the specified types.
                 * <p>
                 * This parse method is convenient for use when the parser can handle optional elements.
                 * For example, a pattern of 'uuuu-MM-dd HH.mm[ VV]' can be fully parsed to a {@code ZonedDateTime},
                 * or partially parsed to a {@code LocalDateTime}.
                 * The queries must be specified in order, starting from the best matching full-parse option
                 * and ending with the worst matching minimal parse option.
                 * The query is typically a method reference to a {@code from(TemporalAccessor)} method.
                 * <p>
                 * The result is associated with the first type that successfully parses.
                 * Normally, applications will use {@code instanceof} to check the result.
                 * For example:
                 * <pre>
                 * TemporalAccessor dt = parser.parseBest(str, ZonedDateTime::from, LocalDateTime::from);
                 * if (dt instanceof ZonedDateTime) {
                 * ...
                 * } else {
                 * ...
                 * }
                 * </pre>
                 * If the parse completes without reading the entire length of the text,
                 * or a problem occurs during parsing or merging, then an exception is thrown.
                 */
                // @ts-ignore
                public parseBest(text: java.lang.CharSequence, queries: java.time.temporal.TemporalQuery): java.time.temporal.TemporalAccessor;
                /**
                 * Parses the text using this formatter, without resolving the result, intended
                 * for advanced use cases.
                 * <p>
                 * Parsing is implemented as a two-phase operation.
                 * First, the text is parsed using the layout defined by the formatter, producing
                 * a {@code Map} of field to value, a {@code ZoneId} and a {@code Chronology}.
                 * Second, the parsed data is <em>resolved</em>, by validating, combining and
                 * simplifying the various fields into more useful ones.
                 * This method performs the parsing stage but not the resolving stage.
                 * <p>
                 * The result of this method is {@code TemporalAccessor} which represents the
                 * data as seen in the input. Values are not validated, thus parsing a date string
                 * of '2012-00-65' would result in a temporal with three fields - year of '2012',
                 * month of '0' and day-of-month of '65'.
                 * <p>
                 * The text will be parsed from the specified start {@code ParsePosition}.
                 * The entire length of the text does not have to be parsed, the {@code ParsePosition}
                 * will be updated with the index at the end of parsing.
                 * <p>
                 * Errors are returned using the error index field of the {@code ParsePosition}
                 * instead of {@code DateTimeParseException}.
                 * The returned error index will be set to an index indicative of the error.
                 * Callers must check for errors before using the result.
                 * <p>
                 * If the formatter parses the same field more than once with different values,
                 * the result will be an error.
                 * <p>
                 * This method is intended for advanced use cases that need access to the
                 * internal state during parsing. Typical application code should use
                 * {@link #parse(CharSequence, TemporalQuery)} or the parse method on the target type.
                 */
                // @ts-ignore
                public parseUnresolved(text: java.lang.CharSequence, position: java.text.ParsePosition): java.time.temporal.TemporalAccessor;
                /**
                 * Returns this formatter as a {@code java.text.Format} instance.
                 * <p>
                 * The returned {@link Format} instance will format any {@link TemporalAccessor}
                 * and parses to a resolved {@link TemporalAccessor}.
                 * <p>
                 * Exceptions will follow the definitions of {@code Format}, see those methods
                 * for details about {@code IllegalArgumentException} during formatting and
                 * {@code ParseException} or null during parsing.
                 * The format does not support attributing of the returned format string.
                 */
                // @ts-ignore
                public toFormat(): java.text.Format;
                /**
                 * Returns this formatter as a {@code java.text.Format} instance that will
                 * parse using the specified query.
                 * <p>
                 * The returned {@link Format} instance will format any {@link TemporalAccessor}
                 * and parses to the type specified.
                 * The type must be one that is supported by {@link #parse}.
                 * <p>
                 * Exceptions will follow the definitions of {@code Format}, see those methods
                 * for details about {@code IllegalArgumentException} during formatting and
                 * {@code ParseException} or null during parsing.
                 * The format does not support attributing of the returned format string.
                 */
                // @ts-ignore
                public toFormat(parseQuery: java.time.temporal.TemporalQuery): java.text.Format;
                /**
                 * Returns a description of the underlying formatters.
                 */
                // @ts-ignore
                public toString(): string;
            }
        }
    }
}
