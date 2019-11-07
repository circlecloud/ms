declare namespace java {
    namespace time {
        namespace format {
            // @ts-ignore
             class DateTimeFormatterBuilder extends java.lang.Object {
                /**
                 * Constructs a new instance of the builder.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Gets the formatting pattern for date and time styles for a locale and chronology.
                 * The locale and chronology are used to lookup the locale specific format
                 * for the requested dateStyle and/or timeStyle.
                 */
                // @ts-ignore
                public static getLocalizedDateTimePattern(dateStyle: java.time.format.FormatStyle, timeStyle: java.time.format.FormatStyle, chrono: java.time.chrono.Chronology, locale: java.util.Locale): string;
                /**
                 * Changes the parse style to be case sensitive for the remainder of the formatter.
                 * <p>
                 * Parsing can be case sensitive or insensitive - by default it is case sensitive.
                 * This method allows the case sensitivity setting of parsing to be changed.
                 * <p>
                 * Calling this method changes the state of the builder such that all
                 * subsequent builder method calls will parse text in case sensitive mode.
                 * See {@link #parseCaseInsensitive} for the opposite setting.
                 * The parse case sensitive/insensitive methods may be called at any point
                 * in the builder, thus the parser can swap between case parsing modes
                 * multiple times during the parse.
                 * <p>
                 * Since the default is case sensitive, this method should only be used after
                 * a previous call to {@code #parseCaseInsensitive}.
                 */
                // @ts-ignore
                public parseCaseSensitive(): java.time.format.DateTimeFormatterBuilder;
                /**
                 * Changes the parse style to be case insensitive for the remainder of the formatter.
                 * <p>
                 * Parsing can be case sensitive or insensitive - by default it is case sensitive.
                 * This method allows the case sensitivity setting of parsing to be changed.
                 * <p>
                 * Calling this method changes the state of the builder such that all
                 * subsequent builder method calls will parse text in case insensitive mode.
                 * See {@link #parseCaseSensitive()} for the opposite setting.
                 * The parse case sensitive/insensitive methods may be called at any point
                 * in the builder, thus the parser can swap between case parsing modes
                 * multiple times during the parse.
                 */
                // @ts-ignore
                public parseCaseInsensitive(): java.time.format.DateTimeFormatterBuilder;
                /**
                 * Changes the parse style to be strict for the remainder of the formatter.
                 * <p>
                 * Parsing can be strict or lenient - by default its strict.
                 * This controls the degree of flexibility in matching the text and sign styles.
                 * <p>
                 * When used, this method changes the parsing to be strict from this point onwards.
                 * As strict is the default, this is normally only needed after calling {@link #parseLenient()}.
                 * The change will remain in force until the end of the formatter that is eventually
                 * constructed or until {@code parseLenient} is called.
                 */
                // @ts-ignore
                public parseStrict(): java.time.format.DateTimeFormatterBuilder;
                /**
                 * Changes the parse style to be lenient for the remainder of the formatter.
                 * Note that case sensitivity is set separately to this method.
                 * <p>
                 * Parsing can be strict or lenient - by default its strict.
                 * This controls the degree of flexibility in matching the text and sign styles.
                 * Applications calling this method should typically also call {@link #parseCaseInsensitive()}.
                 * <p>
                 * When used, this method changes the parsing to be lenient from this point onwards.
                 * The change will remain in force until the end of the formatter that is eventually
                 * constructed or until {@code parseStrict} is called.
                 */
                // @ts-ignore
                public parseLenient(): java.time.format.DateTimeFormatterBuilder;
                /**
                 * Appends a default value for a field to the formatter for use in parsing.
                 * <p>
                 * This appends an instruction to the builder to inject a default value
                 * into the parsed result. This is especially useful in conjunction with
                 * optional parts of the formatter.
                 * <p>
                 * For example, consider a formatter that parses the year, followed by
                 * an optional month, with a further optional day-of-month. Using such a
                 * formatter would require the calling code to check whether a full date,
                 * year-month or just a year had been parsed. This method can be used to
                 * default the month and day-of-month to a sensible value, such as the
                 * first of the month, allowing the calling code to always get a date.
                 * <p>
                 * During formatting, this method has no effect.
                 * <p>
                 * During parsing, the current state of the parse is inspected.
                 * If the specified field has no associated value, because it has not been
                 * parsed successfully at that point, then the specified value is injected
                 * into the parse result. Injection is immediate, thus the field-value pair
                 * will be visible to any subsequent elements in the formatter.
                 * As such, this method is normally called at the end of the builder.
                 */
                // @ts-ignore
                public parseDefaulting(field: java.time.temporal.TemporalField, value: number): java.time.format.DateTimeFormatterBuilder;
                /**
                 * Appends the value of a date-time field to the formatter using a normal
                 * output style.
                 * <p>
                 * The value of the field will be output during a format.
                 * If the value cannot be obtained then an exception will be thrown.
                 * <p>
                 * The value will be printed as per the normal format of an integer value.
                 * Only negative numbers will be signed. No padding will be added.
                 * <p>
                 * The parser for a variable width value such as this normally behaves greedily,
                 * requiring one digit, but accepting as many digits as possible.
                 * This behavior can be affected by 'adjacent value parsing'.
                 * See {@link #appendValue(java.time.temporal.TemporalField, int)} for full details.
                 */
                // @ts-ignore
                public appendValue(field: java.time.temporal.TemporalField): java.time.format.DateTimeFormatterBuilder;
                /**
                 * Appends the value of a date-time field to the formatter using a fixed
                 * width, zero-padded approach.
                 * <p>
                 * The value of the field will be output during a format.
                 * If the value cannot be obtained then an exception will be thrown.
                 * <p>
                 * The value will be zero-padded on the left. If the size of the value
                 * means that it cannot be printed within the width then an exception is thrown.
                 * If the value of the field is negative then an exception is thrown during formatting.
                 * <p>
                 * This method supports a special technique of parsing known as 'adjacent value parsing'.
                 * This technique solves the problem where a value, variable or fixed width, is followed by one or more
                 * fixed length values. The standard parser is greedy, and thus it would normally
                 * steal the digits that are needed by the fixed width value parsers that follow the
                 * variable width one.
                 * <p>
                 * No action is required to initiate 'adjacent value parsing'.
                 * When a call to {@code appendValue} is made, the builder
                 * enters adjacent value parsing setup mode. If the immediately subsequent method
                 * call or calls on the same builder are for a fixed width value, then the parser will reserve
                 * space so that the fixed width values can be parsed.
                 * <p>
                 * For example, consider {@code builder.appendValue(YEAR).appendValue(MONTH_OF_YEAR, 2);}
                 * The year is a variable width parse of between 1 and 19 digits.
                 * The month is a fixed width parse of 2 digits.
                 * Because these were appended to the same builder immediately after one another,
                 * the year parser will reserve two digits for the month to parse.
                 * Thus, the text '201106' will correctly parse to a year of 2011 and a month of 6.
                 * Without adjacent value parsing, the year would greedily parse all six digits and leave
                 * nothing for the month.
                 * <p>
                 * Adjacent value parsing applies to each set of fixed width not-negative values in the parser
                 * that immediately follow any kind of value, variable or fixed width.
                 * Calling any other append method will end the setup of adjacent value parsing.
                 * Thus, in the unlikely event that you need to avoid adjacent value parsing behavior,
                 * simply add the {@code appendValue} to another {@code DateTimeFormatterBuilder}
                 * and add that to this builder.
                 * <p>
                 * If adjacent parsing is active, then parsing must match exactly the specified
                 * number of digits in both strict and lenient modes.
                 * In addition, no positive or negative sign is permitted.
                 */
                // @ts-ignore
                public appendValue(field: java.time.temporal.TemporalField, width: number): java.time.format.DateTimeFormatterBuilder;
                /**
                 * Appends the value of a date-time field to the formatter providing full
                 * control over formatting.
                 * <p>
                 * The value of the field will be output during a format.
                 * If the value cannot be obtained then an exception will be thrown.
                 * <p>
                 * This method provides full control of the numeric formatting, including
                 * zero-padding and the positive/negative sign.
                 * <p>
                 * The parser for a variable width value such as this normally behaves greedily,
                 * accepting as many digits as possible.
                 * This behavior can be affected by 'adjacent value parsing'.
                 * See {@link #appendValue(java.time.temporal.TemporalField, int)} for full details.
                 * <p>
                 * In strict parsing mode, the minimum number of parsed digits is {@code minWidth}
                 * and the maximum is {@code maxWidth}.
                 * In lenient parsing mode, the minimum number of parsed digits is one
                 * and the maximum is 19 (except as limited by adjacent value parsing).
                 * <p>
                 * If this method is invoked with equal minimum and maximum widths and a sign style of
                 * {@code NOT_NEGATIVE} then it delegates to {@code appendValue(TemporalField,int)}.
                 * In this scenario, the formatting and parsing behavior described there occur.
                 */
                // @ts-ignore
                public appendValue(field: java.time.temporal.TemporalField, minWidth: number, maxWidth: number, signStyle: java.time.format.SignStyle): java.time.format.DateTimeFormatterBuilder;
                /**
                 * Appends the reduced value of a date-time field to the formatter.
                 * <p>
                 * Since fields such as year vary by chronology, it is recommended to use the
                 * {@link #appendValueReduced(TemporalField, int, int, ChronoLocalDate)} date}
                 * variant of this method in most cases. This variant is suitable for
                 * simple fields or working with only the ISO chronology.
                 * <p>
                 * For formatting, the {@code width} and {@code maxWidth} are used to
                 * determine the number of characters to format.
                 * If they are equal then the format is fixed width.
                 * If the value of the field is within the range of the {@code baseValue} using
                 * {@code width} characters then the reduced value is formatted otherwise the value is
                 * truncated to fit {@code maxWidth}.
                 * The rightmost characters are output to match the width, left padding with zero.
                 * <p>
                 * For strict parsing, the number of characters allowed by {@code width} to {@code maxWidth} are parsed.
                 * For lenient parsing, the number of characters must be at least 1 and less than 10.
                 * If the number of digits parsed is equal to {@code width} and the value is positive,
                 * the value of the field is computed to be the first number greater than
                 * or equal to the {@code baseValue} with the same least significant characters,
                 * otherwise the value parsed is the field value.
                 * This allows a reduced value to be entered for values in range of the baseValue
                 * and width and absolute values can be entered for values outside the range.
                 * <p>
                 * For example, a base value of {@code 1980} and a width of {@code 2} will have
                 * valid values from {@code 1980} to {@code 2079}.
                 * During parsing, the text {@code "12"} will result in the value {@code 2012} as that
                 * is the value within the range where the last two characters are "12".
                 * By contrast, parsing the text {@code "1915"} will result in the value {@code 1915}.
                 */
                // @ts-ignore
                public appendValueReduced(field: java.time.temporal.TemporalField, width: number, maxWidth: number, baseValue: number): java.time.format.DateTimeFormatterBuilder;
                /**
                 * Appends the reduced value of a date-time field to the formatter.
                 * <p>
                 * This is typically used for formatting and parsing a two digit year.
                 * <p>
                 * The base date is used to calculate the full value during parsing.
                 * For example, if the base date is 1950-01-01 then parsed values for
                 * a two digit year parse will be in the range 1950-01-01 to 2049-12-31.
                 * Only the year would be extracted from the date, thus a base date of
                 * 1950-08-25 would also parse to the range 1950-01-01 to 2049-12-31.
                 * This behavior is necessary to support fields such as week-based-year
                 * or other calendar systems where the parsed value does not align with
                 * standard ISO years.
                 * <p>
                 * The exact behavior is as follows. Parse the full set of fields and
                 * determine the effective chronology using the last chronology if
                 * it appears more than once. Then convert the base date to the
                 * effective chronology. Then extract the specified field from the
                 * chronology-specific base date and use it to determine the
                 * {@code baseValue} used below.
                 * <p>
                 * For formatting, the {@code width} and {@code maxWidth} are used to
                 * determine the number of characters to format.
                 * If they are equal then the format is fixed width.
                 * If the value of the field is within the range of the {@code baseValue} using
                 * {@code width} characters then the reduced value is formatted otherwise the value is
                 * truncated to fit {@code maxWidth}.
                 * The rightmost characters are output to match the width, left padding with zero.
                 * <p>
                 * For strict parsing, the number of characters allowed by {@code width} to {@code maxWidth} are parsed.
                 * For lenient parsing, the number of characters must be at least 1 and less than 10.
                 * If the number of digits parsed is equal to {@code width} and the value is positive,
                 * the value of the field is computed to be the first number greater than
                 * or equal to the {@code baseValue} with the same least significant characters,
                 * otherwise the value parsed is the field value.
                 * This allows a reduced value to be entered for values in range of the baseValue
                 * and width and absolute values can be entered for values outside the range.
                 * <p>
                 * For example, a base value of {@code 1980} and a width of {@code 2} will have
                 * valid values from {@code 1980} to {@code 2079}.
                 * During parsing, the text {@code "12"} will result in the value {@code 2012} as that
                 * is the value within the range where the last two characters are "12".
                 * By contrast, parsing the text {@code "1915"} will result in the value {@code 1915}.
                 */
                // @ts-ignore
                public appendValueReduced(field: java.time.temporal.TemporalField, width: number, maxWidth: number, baseDate: java.time.chrono.ChronoLocalDate): java.time.format.DateTimeFormatterBuilder;
                /**
                 * Appends the fractional value of a date-time field to the formatter.
                 * <p>
                 * The fractional value of the field will be output including the
                 * preceding decimal point. The preceding value is not output.
                 * For example, the second-of-minute value of 15 would be output as {@code .25}.
                 * <p>
                 * The width of the printed fraction can be controlled. Setting the
                 * minimum width to zero will cause no output to be generated.
                 * The printed fraction will have the minimum width necessary between
                 * the minimum and maximum widths - trailing zeroes are omitted.
                 * No rounding occurs due to the maximum width - digits are simply dropped.
                 * <p>
                 * When parsing in strict mode, the number of parsed digits must be between
                 * the minimum and maximum width. When parsing in lenient mode, the minimum
                 * width is considered to be zero and the maximum is nine.
                 * <p>
                 * If the value cannot be obtained then an exception will be thrown.
                 * If the value is negative an exception will be thrown.
                 * If the field does not have a fixed set of valid values then an
                 * exception will be thrown.
                 * If the field value in the date-time to be printed is invalid it
                 * cannot be printed and an exception will be thrown.
                 */
                // @ts-ignore
                public appendFraction(field: java.time.temporal.TemporalField, minWidth: number, maxWidth: number, decimalPoint: boolean): java.time.format.DateTimeFormatterBuilder;
                /**
                 * Appends the text of a date-time field to the formatter using the full
                 * text style.
                 * <p>
                 * The text of the field will be output during a format.
                 * The value must be within the valid range of the field.
                 * If the value cannot be obtained then an exception will be thrown.
                 * If the field has no textual representation, then the numeric value will be used.
                 * <p>
                 * The value will be printed as per the normal format of an integer value.
                 * Only negative numbers will be signed. No padding will be added.
                 */
                // @ts-ignore
                public appendText(field: java.time.temporal.TemporalField): java.time.format.DateTimeFormatterBuilder;
                /**
                 * Appends the text of a date-time field to the formatter.
                 * <p>
                 * The text of the field will be output during a format.
                 * The value must be within the valid range of the field.
                 * If the value cannot be obtained then an exception will be thrown.
                 * If the field has no textual representation, then the numeric value will be used.
                 * <p>
                 * The value will be printed as per the normal format of an integer value.
                 * Only negative numbers will be signed. No padding will be added.
                 */
                // @ts-ignore
                public appendText(field: java.time.temporal.TemporalField, textStyle: java.time.format.TextStyle): java.time.format.DateTimeFormatterBuilder;
                /**
                 * Appends the text of a date-time field to the formatter using the specified
                 * map to supply the text.
                 * <p>
                 * The standard text outputting methods use the localized text in the JDK.
                 * This method allows that text to be specified directly.
                 * The supplied map is not validated by the builder to ensure that formatting or
                 * parsing is possible, thus an invalid map may throw an error during later use.
                 * <p>
                 * Supplying the map of text provides considerable flexibility in formatting and parsing.
                 * For example, a legacy application might require or supply the months of the
                 * year as "JNY", "FBY", "MCH" etc. These do not match the standard set of text
                 * for localized month names. Using this method, a map can be created which
                 * defines the connection between each value and the text:
                 * <pre>
                 * Map&lt;Long, String&gt; map = new HashMap&lt;&gt;();
                 * map.put(1L, "JNY");
                 * map.put(2L, "FBY");
                 * map.put(3L, "MCH");
                 * ...
                 * builder.appendText(MONTH_OF_YEAR, map);
                 * </pre>
                 * <p>
                 * Other uses might be to output the value with a suffix, such as "1st", "2nd", "3rd",
                 * or as Roman numerals "I", "II", "III", "IV".
                 * <p>
                 * During formatting, the value is obtained and checked that it is in the valid range.
                 * If text is not available for the value then it is output as a number.
                 * During parsing, the parser will match against the map of text and numeric values.
                 */
                // @ts-ignore
                public appendText(field: java.time.temporal.TemporalField, textLookup: java.util.Map): java.time.format.DateTimeFormatterBuilder;
                /**
                 * Appends an instant using ISO-8601 to the formatter, formatting fractional
                 * digits in groups of three.
                 * <p>
                 * Instants have a fixed output format.
                 * They are converted to a date-time with a zone-offset of UTC and formatted
                 * using the standard ISO-8601 format.
                 * With this method, formatting nano-of-second outputs zero, three, six
                 * or nine digits digits as necessary.
                 * The localized decimal style is not used.
                 * <p>
                 * The instant is obtained using {@link ChronoField#INSTANT_SECONDS INSTANT_SECONDS}
                 * and optionally (@code NANO_OF_SECOND). The value of {@code INSTANT_SECONDS}
                 * may be outside the maximum range of {@code LocalDateTime}.
                 * <p>
                 * The {@linkplain ResolverStyle resolver style} has no effect on instant parsing.
                 * The end-of-day time of '24:00' is handled as midnight at the start of the following day.
                 * The leap-second time of '23:59:59' is handled to some degree, see
                 * {@link DateTimeFormatter#parsedLeapSecond()} for full details.
                 * <p>
                 * An alternative to this method is to format/parse the instant as a single
                 * epoch-seconds value. That is achieved using {@code appendValue(INSTANT_SECONDS)}.
                 */
                // @ts-ignore
                public appendInstant(): java.time.format.DateTimeFormatterBuilder;
                /**
                 * Appends an instant using ISO-8601 to the formatter with control over
                 * the number of fractional digits.
                 * <p>
                 * Instants have a fixed output format, although this method provides some
                 * control over the fractional digits. They are converted to a date-time
                 * with a zone-offset of UTC and printed using the standard ISO-8601 format.
                 * The localized decimal style is not used.
                 * <p>
                 * The {@code fractionalDigits} parameter allows the output of the fractional
                 * second to be controlled. Specifying zero will cause no fractional digits
                 * to be output. From 1 to 9 will output an increasing number of digits, using
                 * zero right-padding if necessary. The special value -1 is used to output as
                 * many digits as necessary to avoid any trailing zeroes.
                 * <p>
                 * When parsing in strict mode, the number of parsed digits must match the
                 * fractional digits. When parsing in lenient mode, any number of fractional
                 * digits from zero to nine are accepted.
                 * <p>
                 * The instant is obtained using {@link ChronoField#INSTANT_SECONDS INSTANT_SECONDS}
                 * and optionally (@code NANO_OF_SECOND). The value of {@code INSTANT_SECONDS}
                 * may be outside the maximum range of {@code LocalDateTime}.
                 * <p>
                 * The {@linkplain ResolverStyle resolver style} has no effect on instant parsing.
                 * The end-of-day time of '24:00' is handled as midnight at the start of the following day.
                 * The leap-second time of '23:59:60' is handled to some degree, see
                 * {@link DateTimeFormatter#parsedLeapSecond()} for full details.
                 * <p>
                 * An alternative to this method is to format/parse the instant as a single
                 * epoch-seconds value. That is achieved using {@code appendValue(INSTANT_SECONDS)}.
                 */
                // @ts-ignore
                public appendInstant(fractionalDigits: number): java.time.format.DateTimeFormatterBuilder;
                /**
                 * Appends the zone offset, such as '+01:00', to the formatter.
                 * <p>
                 * This appends an instruction to format/parse the offset ID to the builder.
                 * This is equivalent to calling {@code appendOffset("+HH:MM:ss", "Z")}.
                 */
                // @ts-ignore
                public appendOffsetId(): java.time.format.DateTimeFormatterBuilder;
                /**
                 * Appends the zone offset, such as '+01:00', to the formatter.
                 * <p>
                 * This appends an instruction to format/parse the offset ID to the builder.
                 * <p>
                 * During formatting, the offset is obtained using a mechanism equivalent
                 * to querying the temporal with {@link TemporalQueries#offset()}.
                 * It will be printed using the format defined below.
                 * If the offset cannot be obtained then an exception is thrown unless the
                 * section of the formatter is optional.
                 * <p>
                 * During parsing, the offset is parsed using the format defined below.
                 * If the offset cannot be parsed then an exception is thrown unless the
                 * section of the formatter is optional.
                 * <p>
                 * The format of the offset is controlled by a pattern which must be one
                 * of the following:
                 * <ul>
                 * <li>{@code +HH} - hour only, ignoring minute and second
                 * <li>{@code +HHmm} - hour, with minute if non-zero, ignoring second, no colon
                 * <li>{@code +HH:mm} - hour, with minute if non-zero, ignoring second, with colon
                 * <li>{@code +HHMM} - hour and minute, ignoring second, no colon
                 * <li>{@code +HH:MM} - hour and minute, ignoring second, with colon
                 * <li>{@code +HHMMss} - hour and minute, with second if non-zero, no colon
                 * <li>{@code +HH:MM:ss} - hour and minute, with second if non-zero, with colon
                 * <li>{@code +HHMMSS} - hour, minute and second, no colon
                 * <li>{@code +HH:MM:SS} - hour, minute and second, with colon
                 * </ul>
                 * The "no offset" text controls what text is printed when the total amount of
                 * the offset fields to be output is zero.
                 * Example values would be 'Z', '+00:00', 'UTC' or 'GMT'.
                 * Three formats are accepted for parsing UTC - the "no offset" text, and the
                 * plus and minus versions of zero defined by the pattern.
                 */
                // @ts-ignore
                public appendOffset(pattern: string, noOffsetText: string): java.time.format.DateTimeFormatterBuilder;
                /**
                 * Appends the localized zone offset, such as 'GMT+01:00', to the formatter.
                 * <p>
                 * This appends a localized zone offset to the builder, the format of the
                 * localized offset is controlled by the specified {@link FormatStyle style}
                 * to this method:
                 * <ul>
                 * <li>{@link TextStyle#FULL full} - formats with localized offset text, such
                 * as 'GMT, 2-digit hour and minute field, optional second field if non-zero,
                 * and colon.
                 * <li>{@link TextStyle#SHORT short} - formats with localized offset text,
                 * such as 'GMT, hour without leading zero, optional 2-digit minute and
                 * second if non-zero, and colon.
                 * </ul>
                 * <p>
                 * During formatting, the offset is obtained using a mechanism equivalent
                 * to querying the temporal with {@link TemporalQueries#offset()}.
                 * If the offset cannot be obtained then an exception is thrown unless the
                 * section of the formatter is optional.
                 * <p>
                 * During parsing, the offset is parsed using the format defined above.
                 * If the offset cannot be parsed then an exception is thrown unless the
                 * section of the formatter is optional.
                 * <p>
                 */
                // @ts-ignore
                public appendLocalizedOffset(style: java.time.format.TextStyle): java.time.format.DateTimeFormatterBuilder;
                /**
                 * Appends the time-zone ID, such as 'Europe/Paris' or '+02:00', to the formatter.
                 * <p>
                 * This appends an instruction to format/parse the zone ID to the builder.
                 * The zone ID is obtained in a strict manner suitable for {@code ZonedDateTime}.
                 * By contrast, {@code OffsetDateTime} does not have a zone ID suitable
                 * for use with this method, see {@link #appendZoneOrOffsetId()}.
                 * <p>
                 * During formatting, the zone is obtained using a mechanism equivalent
                 * to querying the temporal with {@link TemporalQueries#zoneId()}.
                 * It will be printed using the result of {@link ZoneId#getId()}.
                 * If the zone cannot be obtained then an exception is thrown unless the
                 * section of the formatter is optional.
                 * <p>
                 * During parsing, the text must match a known zone or offset.
                 * There are two types of zone ID, offset-based, such as '+01:30' and
                 * region-based, such as 'Europe/London'. These are parsed differently.
                 * If the parse starts with '+', '-', 'UT', 'UTC' or 'GMT', then the parser
                 * expects an offset-based zone and will not match region-based zones.
                 * The offset ID, such as '+02:30', may be at the start of the parse,
                 * or prefixed by  'UT', 'UTC' or 'GMT'. The offset ID parsing is
                 * equivalent to using {@link #appendOffset(String, String)} using the
                 * arguments 'HH:MM:ss' and the no offset string '0'.
                 * If the parse starts with 'UT', 'UTC' or 'GMT', and the parser cannot
                 * match a following offset ID, then {@link ZoneOffset#UTC} is selected.
                 * In all other cases, the list of known region-based zones is used to
                 * find the longest available match. If no match is found, and the parse
                 * starts with 'Z', then {@code ZoneOffset.UTC} is selected.
                 * The parser uses the {@linkplain #parseCaseInsensitive() case sensitive} setting.
                 * <p>
                 * For example, the following will parse:
                 * <pre>
                 * "Europe/London"           -- ZoneId.of("Europe/London")
                 * "Z"                       -- ZoneOffset.UTC
                 * "UT"                      -- ZoneId.of("UT")
                 * "UTC"                     -- ZoneId.of("UTC")
                 * "GMT"                     -- ZoneId.of("GMT")
                 * "+01:30"                  -- ZoneOffset.of("+01:30")
                 * "UT+01:30"                -- ZoneOffset.of("+01:30")
                 * "UTC+01:30"               -- ZoneOffset.of("+01:30")
                 * "GMT+01:30"               -- ZoneOffset.of("+01:30")
                 * </pre>
                 */
                // @ts-ignore
                public appendZoneId(): java.time.format.DateTimeFormatterBuilder;
                /**
                 * Appends the time-zone region ID, such as 'Europe/Paris', to the formatter,
                 * rejecting the zone ID if it is a {@code ZoneOffset}.
                 * <p>
                 * This appends an instruction to format/parse the zone ID to the builder
                 * only if it is a region-based ID.
                 * <p>
                 * During formatting, the zone is obtained using a mechanism equivalent
                 * to querying the temporal with {@link TemporalQueries#zoneId()}.
                 * If the zone is a {@code ZoneOffset} or it cannot be obtained then
                 * an exception is thrown unless the section of the formatter is optional.
                 * If the zone is not an offset, then the zone will be printed using
                 * the zone ID from {@link ZoneId#getId()}.
                 * <p>
                 * During parsing, the text must match a known zone or offset.
                 * There are two types of zone ID, offset-based, such as '+01:30' and
                 * region-based, such as 'Europe/London'. These are parsed differently.
                 * If the parse starts with '+', '-', 'UT', 'UTC' or 'GMT', then the parser
                 * expects an offset-based zone and will not match region-based zones.
                 * The offset ID, such as '+02:30', may be at the start of the parse,
                 * or prefixed by  'UT', 'UTC' or 'GMT'. The offset ID parsing is
                 * equivalent to using {@link #appendOffset(String, String)} using the
                 * arguments 'HH:MM:ss' and the no offset string '0'.
                 * If the parse starts with 'UT', 'UTC' or 'GMT', and the parser cannot
                 * match a following offset ID, then {@link ZoneOffset#UTC} is selected.
                 * In all other cases, the list of known region-based zones is used to
                 * find the longest available match. If no match is found, and the parse
                 * starts with 'Z', then {@code ZoneOffset.UTC} is selected.
                 * The parser uses the {@linkplain #parseCaseInsensitive() case sensitive} setting.
                 * <p>
                 * For example, the following will parse:
                 * <pre>
                 * "Europe/London"           -- ZoneId.of("Europe/London")
                 * "Z"                       -- ZoneOffset.UTC
                 * "UT"                      -- ZoneId.of("UT")
                 * "UTC"                     -- ZoneId.of("UTC")
                 * "GMT"                     -- ZoneId.of("GMT")
                 * "+01:30"                  -- ZoneOffset.of("+01:30")
                 * "UT+01:30"                -- ZoneOffset.of("+01:30")
                 * "UTC+01:30"               -- ZoneOffset.of("+01:30")
                 * "GMT+01:30"               -- ZoneOffset.of("+01:30")
                 * </pre>
                 * <p>
                 * Note that this method is identical to {@code appendZoneId()} except
                 * in the mechanism used to obtain the zone.
                 * Note also that parsing accepts offsets, whereas formatting will never
                 * produce one.
                 */
                // @ts-ignore
                public appendZoneRegionId(): java.time.format.DateTimeFormatterBuilder;
                /**
                 * Appends the time-zone ID, such as 'Europe/Paris' or '+02:00', to
                 * the formatter, using the best available zone ID.
                 * <p>
                 * This appends an instruction to format/parse the best available
                 * zone or offset ID to the builder.
                 * The zone ID is obtained in a lenient manner that first attempts to
                 * find a true zone ID, such as that on {@code ZonedDateTime}, and
                 * then attempts to find an offset, such as that on {@code OffsetDateTime}.
                 * <p>
                 * During formatting, the zone is obtained using a mechanism equivalent
                 * to querying the temporal with {@link TemporalQueries#zone()}.
                 * It will be printed using the result of {@link ZoneId#getId()}.
                 * If the zone cannot be obtained then an exception is thrown unless the
                 * section of the formatter is optional.
                 * <p>
                 * During parsing, the text must match a known zone or offset.
                 * There are two types of zone ID, offset-based, such as '+01:30' and
                 * region-based, such as 'Europe/London'. These are parsed differently.
                 * If the parse starts with '+', '-', 'UT', 'UTC' or 'GMT', then the parser
                 * expects an offset-based zone and will not match region-based zones.
                 * The offset ID, such as '+02:30', may be at the start of the parse,
                 * or prefixed by  'UT', 'UTC' or 'GMT'. The offset ID parsing is
                 * equivalent to using {@link #appendOffset(String, String)} using the
                 * arguments 'HH:MM:ss' and the no offset string '0'.
                 * If the parse starts with 'UT', 'UTC' or 'GMT', and the parser cannot
                 * match a following offset ID, then {@link ZoneOffset#UTC} is selected.
                 * In all other cases, the list of known region-based zones is used to
                 * find the longest available match. If no match is found, and the parse
                 * starts with 'Z', then {@code ZoneOffset.UTC} is selected.
                 * The parser uses the {@linkplain #parseCaseInsensitive() case sensitive} setting.
                 * <p>
                 * For example, the following will parse:
                 * <pre>
                 * "Europe/London"           -- ZoneId.of("Europe/London")
                 * "Z"                       -- ZoneOffset.UTC
                 * "UT"                      -- ZoneId.of("UT")
                 * "UTC"                     -- ZoneId.of("UTC")
                 * "GMT"                     -- ZoneId.of("GMT")
                 * "+01:30"                  -- ZoneOffset.of("+01:30")
                 * "UT+01:30"                -- ZoneOffset.of("UT+01:30")
                 * "UTC+01:30"               -- ZoneOffset.of("UTC+01:30")
                 * "GMT+01:30"               -- ZoneOffset.of("GMT+01:30")
                 * </pre>
                 * <p>
                 * Note that this method is identical to {@code appendZoneId()} except
                 * in the mechanism used to obtain the zone.
                 */
                // @ts-ignore
                public appendZoneOrOffsetId(): java.time.format.DateTimeFormatterBuilder;
                /**
                 * Appends the time-zone name, such as 'British Summer Time', to the formatter.
                 * <p>
                 * This appends an instruction to format/parse the textual name of the zone to
                 * the builder.
                 * <p>
                 * During formatting, the zone is obtained using a mechanism equivalent
                 * to querying the temporal with {@link TemporalQueries#zoneId()}.
                 * If the zone is a {@code ZoneOffset} it will be printed using the
                 * result of {@link ZoneOffset#getId()}.
                 * If the zone is not an offset, the textual name will be looked up
                 * for the locale set in the {@link DateTimeFormatter}.
                 * If the temporal object being printed represents an instant, then the text
                 * will be the summer or winter time text as appropriate.
                 * If the lookup for text does not find any suitable result, then the
                 * {@link ZoneId#getId() ID} will be printed instead.
                 * If the zone cannot be obtained then an exception is thrown unless the
                 * section of the formatter is optional.
                 * <p>
                 * During parsing, either the textual zone name, the zone ID or the offset
                 * is accepted. Many textual zone names are not unique, such as CST can be
                 * for both "Central Standard Time" and "China Standard Time". In this
                 * situation, the zone id will be determined by the region information from
                 * formatter's  {@link DateTimeFormatter#getLocale() locale} and the standard
                 * zone id for that area, for example, America/New_York for the America Eastern
                 * zone. The {@link #appendZoneText(TextStyle, Set)} may be used
                 * to specify a set of preferred {@link ZoneId} in this situation.
                 */
                // @ts-ignore
                public appendZoneText(textStyle: java.time.format.TextStyle): java.time.format.DateTimeFormatterBuilder;
                /**
                 * Appends the time-zone name, such as 'British Summer Time', to the formatter.
                 * <p>
                 * This appends an instruction to format/parse the textual name of the zone to
                 * the builder.
                 * <p>
                 * During formatting, the zone is obtained using a mechanism equivalent
                 * to querying the temporal with {@link TemporalQueries#zoneId()}.
                 * If the zone is a {@code ZoneOffset} it will be printed using the
                 * result of {@link ZoneOffset#getId()}.
                 * If the zone is not an offset, the textual name will be looked up
                 * for the locale set in the {@link DateTimeFormatter}.
                 * If the temporal object being printed represents an instant, then the text
                 * will be the summer or winter time text as appropriate.
                 * If the lookup for text does not find any suitable result, then the
                 * {@link ZoneId#getId() ID} will be printed instead.
                 * If the zone cannot be obtained then an exception is thrown unless the
                 * section of the formatter is optional.
                 * <p>
                 * During parsing, either the textual zone name, the zone ID or the offset
                 * is accepted. Many textual zone names are not unique, such as CST can be
                 * for both "Central Standard Time" and "China Standard Time". In this
                 * situation, the zone id will be determined by the region information from
                 * formatter's  {@link DateTimeFormatter#getLocale() locale} and the standard
                 * zone id for that area, for example, America/New_York for the America Eastern
                 * zone. This method also allows a set of preferred {@link ZoneId} to be
                 * specified for parsing. The matched preferred zone id will be used if the
                 * textural zone name being parsed is not unique.
                 * <p>
                 * If the zone cannot be parsed then an exception is thrown unless the
                 * section of the formatter is optional.
                 */
                // @ts-ignore
                public appendZoneText(textStyle: java.time.format.TextStyle, preferredZones: java.util.Set): java.time.format.DateTimeFormatterBuilder;
                /**
                 * Appends the chronology ID, such as 'ISO' or 'ThaiBuddhist', to the formatter.
                 * <p>
                 * This appends an instruction to format/parse the chronology ID to the builder.
                 * <p>
                 * During formatting, the chronology is obtained using a mechanism equivalent
                 * to querying the temporal with {@link TemporalQueries#chronology()}.
                 * It will be printed using the result of {@link Chronology#getId()}.
                 * If the chronology cannot be obtained then an exception is thrown unless the
                 * section of the formatter is optional.
                 * <p>
                 * During parsing, the chronology is parsed and must match one of the chronologies
                 * in {@link Chronology#getAvailableChronologies()}.
                 * If the chronology cannot be parsed then an exception is thrown unless the
                 * section of the formatter is optional.
                 * The parser uses the {@linkplain #parseCaseInsensitive() case sensitive} setting.
                 */
                // @ts-ignore
                public appendChronologyId(): java.time.format.DateTimeFormatterBuilder;
                /**
                 * Appends the chronology name to the formatter.
                 * <p>
                 * The calendar system name will be output during a format.
                 * If the chronology cannot be obtained then an exception will be thrown.
                 */
                // @ts-ignore
                public appendChronologyText(textStyle: java.time.format.TextStyle): java.time.format.DateTimeFormatterBuilder;
                /**
                 * Appends a localized date-time pattern to the formatter.
                 * <p>
                 * This appends a localized section to the builder, suitable for outputting
                 * a date, time or date-time combination. The format of the localized
                 * section is lazily looked up based on four items:
                 * <ul>
                 * <li>the {@code dateStyle} specified to this method
                 * <li>the {@code timeStyle} specified to this method
                 * <li>the {@code Locale} of the {@code DateTimeFormatter}
                 * <li>the {@code Chronology}, selecting the best available
                 * </ul>
                 * During formatting, the chronology is obtained from the temporal object
                 * being formatted, which may have been overridden by
                 * {@link DateTimeFormatter#withChronology(Chronology)}.
                 * <p>
                 * During parsing, if a chronology has already been parsed, then it is used.
                 * Otherwise the default from {@code DateTimeFormatter.withChronology(Chronology)}
                 * is used, with {@code IsoChronology} as the fallback.
                 * <p>
                 * Note that this method provides similar functionality to methods on
                 * {@code DateFormat} such as {@link java.text.DateFormat#getDateTimeInstance(int, int)}.
                 */
                // @ts-ignore
                public appendLocalized(dateStyle: java.time.format.FormatStyle, timeStyle: java.time.format.FormatStyle): java.time.format.DateTimeFormatterBuilder;
                /**
                 * Appends a character literal to the formatter.
                 * <p>
                 * This character will be output during a format.
                 */
                // @ts-ignore
                public appendLiteral(literal: string): java.time.format.DateTimeFormatterBuilder;
                /**
                 * Appends a string literal to the formatter.
                 * <p>
                 * This string will be output during a format.
                 * <p>
                 * If the literal is empty, nothing is added to the formatter.
                 */
                // @ts-ignore
                public appendLiteral(literal: string): java.time.format.DateTimeFormatterBuilder;
                /**
                 * Appends all the elements of a formatter to the builder.
                 * <p>
                 * This method has the same effect as appending each of the constituent
                 * parts of the formatter directly to this builder.
                 */
                // @ts-ignore
                public append(formatter: java.time.format.DateTimeFormatter): java.time.format.DateTimeFormatterBuilder;
                /**
                 * Appends a formatter to the builder which will optionally format/parse.
                 * <p>
                 * This method has the same effect as appending each of the constituent
                 * parts directly to this builder surrounded by an {@link #optionalStart()} and
                 * {@link #optionalEnd()}.
                 * <p>
                 * The formatter will format if data is available for all the fields contained within it.
                 * The formatter will parse if the string matches, otherwise no error is returned.
                 */
                // @ts-ignore
                public appendOptional(formatter: java.time.format.DateTimeFormatter): java.time.format.DateTimeFormatterBuilder;
                /**
                 * Appends the elements defined by the specified pattern to the builder.
                 * <p>
                 * All letters 'A' to 'Z' and 'a' to 'z' are reserved as pattern letters.
                 * The characters '#', '{' and '}' are reserved for future use.
                 * The characters '[' and ']' indicate optional patterns.
                 * The following pattern letters are defined:
                 * <pre>
                 * Symbol  Meaning                     Presentation      Examples
                 * ------  -------                     ------------      -------
                 * G       era                         text              AD; Anno Domini; A
                 * u       year                        year              2004; 04
                 * y       year-of-era                 year              2004; 04
                 * D       day-of-year                 number            189
                 * M/L     month-of-year               number/text       7; 07; Jul; July; J
                 * d       day-of-month                number            10
                 * Q/q     quarter-of-year             number/text       3; 03; Q3; 3rd quarter
                 * Y       week-based-year             year              1996; 96
                 * w       week-of-week-based-year     number            27
                 * W       week-of-month               number            4
                 * E       day-of-week                 text              Tue; Tuesday; T
                 * e/c     localized day-of-week       number/text       2; 02; Tue; Tuesday; T
                 * F       week-of-month               number            3
                 * a       am-pm-of-day                text              PM
                 * h       clock-hour-of-am-pm (1-12)  number            12
                 * K       hour-of-am-pm (0-11)        number            0
                 * k       clock-hour-of-am-pm (1-24)  number            0
                 * H       hour-of-day (0-23)          number            0
                 * m       minute-of-hour              number            30
                 * s       second-of-minute            number            55
                 * S       fraction-of-second          fraction          978
                 * A       milli-of-day                number            1234
                 * n       nano-of-second              number            987654321
                 * N       nano-of-day                 number            1234000000
                 * V       time-zone ID                zone-id           America/Los_Angeles; Z; -08:30
                 * z       time-zone name              zone-name         Pacific Standard Time; PST
                 * O       localized zone-offset       offset-O          GMT+8; GMT+08:00; UTC-08:00;
                 * X       zone-offset 'Z' for zero    offset-X          Z; -08; -0830; -08:30; -083015; -08:30:15;
                 * x       zone-offset                 offset-x          +0000; -08; -0830; -08:30; -083015; -08:30:15;
                 * Z       zone-offset                 offset-Z          +0000; -0800; -08:00;
                 * p       pad next                    pad modifier      1
                 * '       escape for text             delimiter
                 * ''      single quote                literal           '
                 * [       optional section start
                 * ]       optional section end
                 * #       reserved for future use
                 * {       reserved for future use
                 * }       reserved for future use
                 * </pre>
                 * <p>
                 * The count of pattern letters determine the format.
                 * See <a href="DateTimeFormatter.html#patterns">DateTimeFormatter</a> for a user-focused description of the patterns.
                 * The following tables define how the pattern letters map to the builder.
                 * <p>
                 * <b>Date fields</b>: Pattern letters to output a date.
                 * <pre>
                 * Pattern  Count  Equivalent builder methods
                 * -------  -----  --------------------------
                 * G       1      appendText(ChronoField.ERA, TextStyle.SHORT)
                 * GG      2      appendText(ChronoField.ERA, TextStyle.SHORT)
                 * GGG     3      appendText(ChronoField.ERA, TextStyle.SHORT)
                 * GGGG    4      appendText(ChronoField.ERA, TextStyle.FULL)
                 * GGGGG   5      appendText(ChronoField.ERA, TextStyle.NARROW)
                 * u       1      appendValue(ChronoField.YEAR, 1, 19, SignStyle.NORMAL);
                 * uu      2      appendValueReduced(ChronoField.YEAR, 2, 2000);
                 * uuu     3      appendValue(ChronoField.YEAR, 3, 19, SignStyle.NORMAL);
                 * u..u    4..n   appendValue(ChronoField.YEAR, n, 19, SignStyle.EXCEEDS_PAD);
                 * y       1      appendValue(ChronoField.YEAR_OF_ERA, 1, 19, SignStyle.NORMAL);
                 * yy      2      appendValueReduced(ChronoField.YEAR_OF_ERA, 2, 2000);
                 * yyy     3      appendValue(ChronoField.YEAR_OF_ERA, 3, 19, SignStyle.NORMAL);
                 * y..y    4..n   appendValue(ChronoField.YEAR_OF_ERA, n, 19, SignStyle.EXCEEDS_PAD);
                 * Y       1      append special localized WeekFields element for numeric week-based-year
                 * YY      2      append special localized WeekFields element for reduced numeric week-based-year 2 digits;
                 * YYY     3      append special localized WeekFields element for numeric week-based-year (3, 19, SignStyle.NORMAL);
                 * Y..Y    4..n   append special localized WeekFields element for numeric week-based-year (n, 19, SignStyle.EXCEEDS_PAD);
                 * Q       1      appendValue(IsoFields.QUARTER_OF_YEAR);
                 * QQ      2      appendValue(IsoFields.QUARTER_OF_YEAR, 2);
                 * QQQ     3      appendText(IsoFields.QUARTER_OF_YEAR, TextStyle.SHORT)
                 * QQQQ    4      appendText(IsoFields.QUARTER_OF_YEAR, TextStyle.FULL)
                 * QQQQQ   5      appendText(IsoFields.QUARTER_OF_YEAR, TextStyle.NARROW)
                 * q       1      appendValue(IsoFields.QUARTER_OF_YEAR);
                 * qq      2      appendValue(IsoFields.QUARTER_OF_YEAR, 2);
                 * qqq     3      appendText(IsoFields.QUARTER_OF_YEAR, TextStyle.SHORT_STANDALONE)
                 * qqqq    4      appendText(IsoFields.QUARTER_OF_YEAR, TextStyle.FULL_STANDALONE)
                 * qqqqq   5      appendText(IsoFields.QUARTER_OF_YEAR, TextStyle.NARROW_STANDALONE)
                 * M       1      appendValue(ChronoField.MONTH_OF_YEAR);
                 * MM      2      appendValue(ChronoField.MONTH_OF_YEAR, 2);
                 * MMM     3      appendText(ChronoField.MONTH_OF_YEAR, TextStyle.SHORT)
                 * MMMM    4      appendText(ChronoField.MONTH_OF_YEAR, TextStyle.FULL)
                 * MMMMM   5      appendText(ChronoField.MONTH_OF_YEAR, TextStyle.NARROW)
                 * L       1      appendValue(ChronoField.MONTH_OF_YEAR);
                 * LL      2      appendValue(ChronoField.MONTH_OF_YEAR, 2);
                 * LLL     3      appendText(ChronoField.MONTH_OF_YEAR, TextStyle.SHORT_STANDALONE)
                 * LLLL    4      appendText(ChronoField.MONTH_OF_YEAR, TextStyle.FULL_STANDALONE)
                 * LLLLL   5      appendText(ChronoField.MONTH_OF_YEAR, TextStyle.NARROW_STANDALONE)
                 * w       1      append special localized WeekFields element for numeric week-of-year
                 * ww      2      append special localized WeekFields element for numeric week-of-year, zero-padded
                 * W       1      append special localized WeekFields element for numeric week-of-month
                 * d       1      appendValue(ChronoField.DAY_OF_MONTH)
                 * dd      2      appendValue(ChronoField.DAY_OF_MONTH, 2)
                 * D       1      appendValue(ChronoField.DAY_OF_YEAR)
                 * DD      2      appendValue(ChronoField.DAY_OF_YEAR, 2)
                 * DDD     3      appendValue(ChronoField.DAY_OF_YEAR, 3)
                 * F       1      appendValue(ChronoField.ALIGNED_DAY_OF_WEEK_IN_MONTH)
                 * E       1      appendText(ChronoField.DAY_OF_WEEK, TextStyle.SHORT)
                 * EE      2      appendText(ChronoField.DAY_OF_WEEK, TextStyle.SHORT)
                 * EEE     3      appendText(ChronoField.DAY_OF_WEEK, TextStyle.SHORT)
                 * EEEE    4      appendText(ChronoField.DAY_OF_WEEK, TextStyle.FULL)
                 * EEEEE   5      appendText(ChronoField.DAY_OF_WEEK, TextStyle.NARROW)
                 * e       1      append special localized WeekFields element for numeric day-of-week
                 * ee      2      append special localized WeekFields element for numeric day-of-week, zero-padded
                 * eee     3      appendText(ChronoField.DAY_OF_WEEK, TextStyle.SHORT)
                 * eeee    4      appendText(ChronoField.DAY_OF_WEEK, TextStyle.FULL)
                 * eeeee   5      appendText(ChronoField.DAY_OF_WEEK, TextStyle.NARROW)
                 * c       1      append special localized WeekFields element for numeric day-of-week
                 * ccc     3      appendText(ChronoField.DAY_OF_WEEK, TextStyle.SHORT_STANDALONE)
                 * cccc    4      appendText(ChronoField.DAY_OF_WEEK, TextStyle.FULL_STANDALONE)
                 * ccccc   5      appendText(ChronoField.DAY_OF_WEEK, TextStyle.NARROW_STANDALONE)
                 * </pre>
                 * <p>
                 * <b>Time fields</b>: Pattern letters to output a time.
                 * <pre>
                 * Pattern  Count  Equivalent builder methods
                 * -------  -----  --------------------------
                 * a       1      appendText(ChronoField.AMPM_OF_DAY, TextStyle.SHORT)
                 * h       1      appendValue(ChronoField.CLOCK_HOUR_OF_AMPM)
                 * hh      2      appendValue(ChronoField.CLOCK_HOUR_OF_AMPM, 2)
                 * H       1      appendValue(ChronoField.HOUR_OF_DAY)
                 * HH      2      appendValue(ChronoField.HOUR_OF_DAY, 2)
                 * k       1      appendValue(ChronoField.CLOCK_HOUR_OF_DAY)
                 * kk      2      appendValue(ChronoField.CLOCK_HOUR_OF_DAY, 2)
                 * K       1      appendValue(ChronoField.HOUR_OF_AMPM)
                 * KK      2      appendValue(ChronoField.HOUR_OF_AMPM, 2)
                 * m       1      appendValue(ChronoField.MINUTE_OF_HOUR)
                 * mm      2      appendValue(ChronoField.MINUTE_OF_HOUR, 2)
                 * s       1      appendValue(ChronoField.SECOND_OF_MINUTE)
                 * ss      2      appendValue(ChronoField.SECOND_OF_MINUTE, 2)
                 * S..S    1..n   appendFraction(ChronoField.NANO_OF_SECOND, n, n, false)
                 * A       1      appendValue(ChronoField.MILLI_OF_DAY)
                 * A..A    2..n   appendValue(ChronoField.MILLI_OF_DAY, n)
                 * n       1      appendValue(ChronoField.NANO_OF_SECOND)
                 * n..n    2..n   appendValue(ChronoField.NANO_OF_SECOND, n)
                 * N       1      appendValue(ChronoField.NANO_OF_DAY)
                 * N..N    2..n   appendValue(ChronoField.NANO_OF_DAY, n)
                 * </pre>
                 * <p>
                 * <b>Zone ID</b>: Pattern letters to output {@code ZoneId}.
                 * <pre>
                 * Pattern  Count  Equivalent builder methods
                 * -------  -----  --------------------------
                 * VV      2      appendZoneId()
                 * z       1      appendZoneText(TextStyle.SHORT)
                 * zz      2      appendZoneText(TextStyle.SHORT)
                 * zzz     3      appendZoneText(TextStyle.SHORT)
                 * zzzz    4      appendZoneText(TextStyle.FULL)
                 * </pre>
                 * <p>
                 * <b>Zone offset</b>: Pattern letters to output {@code ZoneOffset}.
                 * <pre>
                 * Pattern  Count  Equivalent builder methods
                 * -------  -----  --------------------------
                 * O       1      appendLocalizedOffsetPrefixed(TextStyle.SHORT);
                 * OOOO    4      appendLocalizedOffsetPrefixed(TextStyle.FULL);
                 * X       1      appendOffset("+HHmm","Z")
                 * XX      2      appendOffset("+HHMM","Z")
                 * XXX     3      appendOffset("+HH:MM","Z")
                 * XXXX    4      appendOffset("+HHMMss","Z")
                 * XXXXX   5      appendOffset("+HH:MM:ss","Z")
                 * x       1      appendOffset("+HHmm","+00")
                 * xx      2      appendOffset("+HHMM","+0000")
                 * xxx     3      appendOffset("+HH:MM","+00:00")
                 * xxxx    4      appendOffset("+HHMMss","+0000")
                 * xxxxx   5      appendOffset("+HH:MM:ss","+00:00")
                 * Z       1      appendOffset("+HHMM","+0000")
                 * ZZ      2      appendOffset("+HHMM","+0000")
                 * ZZZ     3      appendOffset("+HHMM","+0000")
                 * ZZZZ    4      appendLocalizedOffset(TextStyle.FULL);
                 * ZZZZZ   5      appendOffset("+HH:MM:ss","Z")
                 * </pre>
                 * <p>
                 * <b>Modifiers</b>: Pattern letters that modify the rest of the pattern:
                 * <pre>
                 * Pattern  Count  Equivalent builder methods
                 * -------  -----  --------------------------
                 * [       1      optionalStart()
                 * ]       1      optionalEnd()
                 * p..p    1..n   padNext(n)
                 * </pre>
                 * <p>
                 * Any sequence of letters not specified above, unrecognized letter or
                 * reserved character will throw an exception.
                 * Future versions may add to the set of patterns.
                 * It is recommended to use single quotes around all characters that you want
                 * to output directly to ensure that future changes do not break your application.
                 * <p>
                 * Note that the pattern string is similar, but not identical, to
                 * {@link java.text.SimpleDateFormat SimpleDateFormat}.
                 * The pattern string is also similar, but not identical, to that defined by the
                 * Unicode Common Locale Data Repository (CLDR/LDML).
                 * Pattern letters 'X' and 'u' are aligned with Unicode CLDR/LDML.
                 * By contrast, {@code SimpleDateFormat} uses 'u' for the numeric day of week.
                 * Pattern letters 'y' and 'Y' parse years of two digits and more than 4 digits differently.
                 * Pattern letters 'n', 'A', 'N', and 'p' are added.
                 * Number types will reject large numbers.
                 */
                // @ts-ignore
                public appendPattern(pattern: string): java.time.format.DateTimeFormatterBuilder;
                /**
                 * Causes the next added printer/parser to pad to a fixed width using a space.
                 * <p>
                 * This padding will pad to a fixed width using spaces.
                 * <p>
                 * During formatting, the decorated element will be output and then padded
                 * to the specified width. An exception will be thrown during formatting if
                 * the pad width is exceeded.
                 * <p>
                 * During parsing, the padding and decorated element are parsed.
                 * If parsing is lenient, then the pad width is treated as a maximum.
                 * The padding is parsed greedily. Thus, if the decorated element starts with
                 * the pad character, it will not be parsed.
                 */
                // @ts-ignore
                public padNext(padWidth: number): java.time.format.DateTimeFormatterBuilder;
                /**
                 * Causes the next added printer/parser to pad to a fixed width.
                 * <p>
                 * This padding is intended for padding other than zero-padding.
                 * Zero-padding should be achieved using the appendValue methods.
                 * <p>
                 * During formatting, the decorated element will be output and then padded
                 * to the specified width. An exception will be thrown during formatting if
                 * the pad width is exceeded.
                 * <p>
                 * During parsing, the padding and decorated element are parsed.
                 * If parsing is lenient, then the pad width is treated as a maximum.
                 * If parsing is case insensitive, then the pad character is matched ignoring case.
                 * The padding is parsed greedily. Thus, if the decorated element starts with
                 * the pad character, it will not be parsed.
                 */
                // @ts-ignore
                public padNext(padWidth: number, padChar: string): java.time.format.DateTimeFormatterBuilder;
                /**
                 * Mark the start of an optional section.
                 * <p>
                 * The output of formatting can include optional sections, which may be nested.
                 * An optional section is started by calling this method and ended by calling
                 * {@link #optionalEnd()} or by ending the build process.
                 * <p>
                 * All elements in the optional section are treated as optional.
                 * During formatting, the section is only output if data is available in the
                 * {@code TemporalAccessor} for all the elements in the section.
                 * During parsing, the whole section may be missing from the parsed string.
                 * <p>
                 * For example, consider a builder setup as
                 * {@code builder.appendValue(HOUR_OF_DAY,2).optionalStart().appendValue(MINUTE_OF_HOUR,2)}.
                 * The optional section ends automatically at the end of the builder.
                 * During formatting, the minute will only be output if its value can be obtained from the date-time.
                 * During parsing, the input will be successfully parsed whether the minute is present or not.
                 */
                // @ts-ignore
                public optionalStart(): java.time.format.DateTimeFormatterBuilder;
                /**
                 * Ends an optional section.
                 * <p>
                 * The output of formatting can include optional sections, which may be nested.
                 * An optional section is started by calling {@link #optionalStart()} and ended
                 * using this method (or at the end of the builder).
                 * <p>
                 * Calling this method without having previously called {@code optionalStart}
                 * will throw an exception.
                 * Calling this method immediately after calling {@code optionalStart} has no effect
                 * on the formatter other than ending the (empty) optional section.
                 * <p>
                 * All elements in the optional section are treated as optional.
                 * During formatting, the section is only output if data is available in the
                 * {@code TemporalAccessor} for all the elements in the section.
                 * During parsing, the whole section may be missing from the parsed string.
                 * <p>
                 * For example, consider a builder setup as
                 * {@code builder.appendValue(HOUR_OF_DAY,2).optionalStart().appendValue(MINUTE_OF_HOUR,2).optionalEnd()}.
                 * During formatting, the minute will only be output if its value can be obtained from the date-time.
                 * During parsing, the input will be successfully parsed whether the minute is present or not.
                 */
                // @ts-ignore
                public optionalEnd(): java.time.format.DateTimeFormatterBuilder;
                /**
                 * Completes this builder by creating the {@code DateTimeFormatter}
                 * using the default locale.
                 * <p>
                 * This will create a formatter with the {@linkplain Locale#getDefault(Locale.Category) default FORMAT locale}.
                 * Numbers will be printed and parsed using the standard DecimalStyle.
                 * The resolver style will be {@link ResolverStyle#SMART SMART}.
                 * <p>
                 * Calling this method will end any open optional sections by repeatedly
                 * calling {@link #optionalEnd()} before creating the formatter.
                 * <p>
                 * This builder can still be used after creating the formatter if desired,
                 * although the state may have been changed by calls to {@code optionalEnd}.
                 */
                // @ts-ignore
                public toFormatter(): java.time.format.DateTimeFormatter;
                /**
                 * Completes this builder by creating the {@code DateTimeFormatter}
                 * using the specified locale.
                 * <p>
                 * This will create a formatter with the specified locale.
                 * Numbers will be printed and parsed using the standard DecimalStyle.
                 * The resolver style will be {@link ResolverStyle#SMART SMART}.
                 * <p>
                 * Calling this method will end any open optional sections by repeatedly
                 * calling {@link #optionalEnd()} before creating the formatter.
                 * <p>
                 * This builder can still be used after creating the formatter if desired,
                 * although the state may have been changed by calls to {@code optionalEnd}.
                 */
                // @ts-ignore
                public toFormatter(locale: java.util.Locale): java.time.format.DateTimeFormatter;
            }
        }
    }
}
