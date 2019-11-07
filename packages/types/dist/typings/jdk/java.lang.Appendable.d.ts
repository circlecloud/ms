declare namespace java {
    namespace lang {
        // @ts-ignore
        interface Appendable {
            /**
             * Appends the specified character sequence to this <tt>Appendable</tt>.
             * <p> Depending on which class implements the character sequence
             * <tt>csq</tt>, the entire sequence may not be appended.  For
             * instance, if <tt>csq</tt> is a {@link java.nio.CharBuffer} then
             * the subsequence to append is defined by the buffer's position and limit.
             */
            // @ts-ignore
             append(csq: java.lang.CharSequence): java.lang.Appendable;
            /**
             * Appends a subsequence of the specified character sequence to this
             * <tt>Appendable</tt>.
             * <p> An invocation of this method of the form <tt>out.append(csq, start,
             * end)</tt> when <tt>csq</tt> is not <tt>null</tt>, behaves in
             * exactly the same way as the invocation
             * <pre>
             * out.append(csq.subSequence(start, end)) </pre>
             */
            // @ts-ignore
             append(csq: java.lang.CharSequence, start: number, end: number): java.lang.Appendable;
            /**
             * Appends the specified character to this <tt>Appendable</tt>.
             */
            // @ts-ignore
             append(c: string): java.lang.Appendable;
        }
    }
}
