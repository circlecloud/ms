// @ts-nocheck
declare namespace java {
    namespace net {
        // @ts-ignore
         class HttpRetryException extends java.io.IOException {
            /**
             * Constructs a new {@code HttpRetryException} from the
             * specified response code and exception detail message
             */
            // @ts-ignore
            constructor(detail: string, code: number)
            /**
             * Constructs a new {@code HttpRetryException} with detail message
             * responseCode and the contents of the Location response header field.
             */
            // @ts-ignore
            constructor(detail: string, code: number, location: string)
            /**
             * Returns the http response code
             */
            // @ts-ignore
            public responseCode(): number;
            /**
             * Returns a string explaining why the http request could
             * not be retried.
             */
            // @ts-ignore
            public getReason(): string;
            /**
             * Returns the value of the Location header field if the
             * error resulted from redirection.
             */
            // @ts-ignore
            public getLocation(): string;
        }
    }
}
