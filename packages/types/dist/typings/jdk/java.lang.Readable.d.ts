declare namespace java {
    namespace lang {
        // @ts-ignore
        interface Readable {
            /**
             * Attempts to read characters into the specified character buffer.
             * The buffer is used as a repository of characters as-is: the only
             * changes made are the results of a put operation. No flipping or
             * rewinding of the buffer is performed.
             */
            // @ts-ignore
             read(cb: java.nio.CharBuffer): number;
        }
    }
}
