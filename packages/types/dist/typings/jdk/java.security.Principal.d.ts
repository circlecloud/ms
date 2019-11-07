// @ts-nocheck
declare namespace java {
    namespace security {
        // @ts-ignore
        interface Principal {
            /**
             * Compares this principal to the specified object.  Returns true
             * if the object passed in matches the principal represented by
             * the implementation of this interface.
             */
            // @ts-ignore
             equals(another: java.lang.Object): boolean;
            /**
             * Returns a string representation of this principal.
             */
            // @ts-ignore
             toString(): string;
            /**
             * Returns a hashcode for this principal.
             */
            // @ts-ignore
             hashCode(): number;
            /**
             * Returns the name of this principal.
             */
            // @ts-ignore
             getName(): string;
            /**
             * Returns true if the specified subject is implied by this principal.
             * <p>The default implementation of this method returns true if
             * {@code subject} is non-null and contains at least one principal that
             * is equal to this principal.
             * <p>Subclasses may override this with a different implementation, if
             * necessary.
             */
            // @ts-ignore
             implies(subject: any /*javax.security.auth.Subject*/): boolean;
        }
    }
}
