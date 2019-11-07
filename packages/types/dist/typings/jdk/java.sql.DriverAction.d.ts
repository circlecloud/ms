declare namespace java {
    namespace sql {
        // @ts-ignore
        interface DriverAction {
            /**
             * Method called by
             * {@linkplain DriverManager#deregisterDriver(Driver) }
             * to notify the JDBC driver that it was de-registered.
             * <p>
             * The {@code deregister} method is intended only to be used by JDBC Drivers
             * and not by applications.  JDBC drivers are recommended to not implement
             * {@code DriverAction} in a public class.  If there are active
             * connections to the database at the time that the {@code deregister}
             * method is called, it is implementation specific as to whether the
             * connections are closed or allowed to continue. Once this method is
             * called, it is implementation specific as to whether the driver may
             * limit the ability to create new connections to the database, invoke
             * other {@code Driver} methods or throw a {@code SQLException}.
             * Consult your JDBC driver's documentation for additional information
             * on its behavior.
             */
            // @ts-ignore
             deregister(): void;
        }
    }
}
