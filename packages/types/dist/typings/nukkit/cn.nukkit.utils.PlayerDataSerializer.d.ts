declare namespace cn {
    namespace nukkit {
        namespace utils {
            // @ts-ignore
            interface PlayerDataSerializer {
                /**
                 * Reads player data from {@link InputStream} if the file exists otherwise it will create the default data.
                 */
                // @ts-ignore
                 read(name: string, uuid: java.util.UUID): java.util.Optional;
                /**
                 * Writes player data to given {@link OutputStream}.
                 */
                // @ts-ignore
                 write(name: string, uuid: java.util.UUID): java.io.OutputStream;
            }
        }
    }
}
