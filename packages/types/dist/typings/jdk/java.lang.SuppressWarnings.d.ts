// @ts-nocheck
declare namespace java {
    namespace lang {
        // @ts-ignore
        interface SuppressWarnings {
            /**
             * The set of warnings that are to be suppressed by the compiler in the
             * annotated element.  Duplicate names are permitted.  The second and
             * successive occurrences of a name are ignored.  The presence of
             * unrecognized warning names is <i>not</i> an error: Compilers must
             * ignore any warning names they do not recognize.  They are, however,
             * free to emit a warning if an annotation contains an unrecognized
             * warning name.
             * <p> The string {@code "unchecked"} is used to suppress
             * unchecked warnings. Compiler vendors should document the
             * additional warning names they support in conjunction with this
             * annotation type. They are encouraged to cooperate to ensure
             * that the same names work across multiple compilers.
             */
            // @ts-ignore
             value(): java.lang.String[];
        }
    }
}
