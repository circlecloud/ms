declare namespace java {
    namespace nio {
        namespace file {
            // @ts-ignore
            interface PathMatcher {
                /**
                 * Tells if given path matches this matcher's pattern.
                 */
                // @ts-ignore
                 matches(path: java.nio.file.Path): boolean;
            }
        }
    }
}
