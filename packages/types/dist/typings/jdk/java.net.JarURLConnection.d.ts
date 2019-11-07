declare namespace java {
    namespace net {
        // @ts-ignore
        abstract class JarURLConnection extends java.net.URLConnection {
            /**
             * Creates the new JarURLConnection to the specified URL.
             */
            // @ts-ignore
            constructor(url: java.net.URL)
            // @ts-ignore
            protected jarFileURLConnection: java.net.URLConnection;
            /**
             * Returns the URL for the Jar file for this connection.
             */
            // @ts-ignore
            public getJarFileURL(): java.net.URL;
            /**
             * Return the entry name for this connection. This method
             * returns null if the JAR file URL corresponding to this
             * connection points to a JAR file and not a JAR file entry.
             */
            // @ts-ignore
            public getEntryName(): string;
            /**
             * Return the JAR file for this connection.
             */
            // @ts-ignore
            public abstract getJarFile(): java.util.jar.JarFile;
            /**
             * Returns the Manifest for this connection, or null if none.
             */
            // @ts-ignore
            public getManifest(): java.util.jar.Manifest;
            /**
             * Return the JAR entry object for this connection, if any. This
             * method returns null if the JAR file URL corresponding to this
             * connection points to a JAR file and not a JAR file entry.
             */
            // @ts-ignore
            public getJarEntry(): java.util.jar.JarEntry;
            /**
             * Return the Attributes object for this connection if the URL
             * for it points to a JAR file entry, null otherwise.
             */
            // @ts-ignore
            public getAttributes(): java.util.jar.Attributes;
            /**
             * Returns the main Attributes for the JAR file for this
             * connection.
             */
            // @ts-ignore
            public getMainAttributes(): java.util.jar.Attributes;
            /**
             * Return the Certificate object for this connection if the URL
             * for it points to a JAR file entry, null otherwise. This method
             * can only be called once
             * the connection has been completely verified by reading
             * from the input stream until the end of the stream has been
             * reached. Otherwise, this method will return {@code null}
             */
            // @ts-ignore
            public getCertificates(): java.security.cert.Certificate[];
        }
    }
}
