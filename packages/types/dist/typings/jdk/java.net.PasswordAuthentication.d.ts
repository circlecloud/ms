declare namespace java {
    namespace net {
        // @ts-ignore
         class PasswordAuthentication extends java.lang.Object {
            /**
             * Creates a new {@code PasswordAuthentication} object from the given
             * user name and password.
             * <p> Note that the given user password is cloned before it is stored in
             * the new {@code PasswordAuthentication} object.
             */
            // @ts-ignore
            constructor(userName: string, password: string)
            /**
             * Returns the user name.
             */
            // @ts-ignore
            public getUserName(): string;
            /**
             * Returns the user password.
             * <p> Note that this method returns a reference to the password. It is
             * the caller's responsibility to zero out the password information after
             * it is no longer needed.
             */
            // @ts-ignore
            public getPassword(): string[];
        }
    }
}
