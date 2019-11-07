declare namespace java {
    namespace nio {
        namespace file {
            // @ts-ignore
             class FileSystemException extends java.io.IOException {
                /**
                 * Constructs an instance of this class. This constructor should be used
                 * when an operation involving one file fails and there isn't any additional
                 * information to explain the reason.
                 */
                // @ts-ignore
                constructor(file: string)
                /**
                 * Constructs an instance of this class. This constructor should be used
                 * when an operation involving two files fails, or there is additional
                 * information to explain the reason.
                 */
                // @ts-ignore
                constructor(file: string, other: string, reason: string)
                /**
                 * Returns the file used to create this exception.
                 */
                // @ts-ignore
                public getFile(): string;
                /**
                 * Returns the other file used to create this exception.
                 */
                // @ts-ignore
                public getOtherFile(): string;
                /**
                 * Returns the string explaining why the file system operation failed.
                 */
                // @ts-ignore
                public getReason(): string;
                /**
                 * Returns the detail message string.
                 */
                // @ts-ignore
                public getMessage(): string;
            }
        }
    }
}
