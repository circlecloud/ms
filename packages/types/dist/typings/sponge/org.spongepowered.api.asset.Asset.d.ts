// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace asset {
                // @ts-ignore
                interface Asset {
                    // @ts-ignore
                     DEFAULT_CHARSET: java.nio.charset.Charset;
                    /**
                     * Returns the original {@link Plugin} owner of this Asset.
                     */
                    // @ts-ignore
                     getOwner(): org.spongepowered.api.plugin.PluginContainer;
                    /**
                     * Returns the {@link URL} to this Asset.
                     */
                    // @ts-ignore
                     getUrl(): java.net.URL;
                    /**
                     * Copies this Asset to the specified 'output' {@link Path}.
                     */
                    // @ts-ignore
                     copyToFile(output: java.nio.file.Path): void;
                    /**
                     * Copies this Asset to the specified 'output' {@link Path}.
                     */
                    // @ts-ignore
                     copyToFile(output: java.nio.file.Path, overwrite: boolean): void;
                    /**
                     * Copies this Asset to the specified 'output' {@link Path}.
                     */
                    // @ts-ignore
                     copyToFile(output: java.nio.file.Path, overwrite: boolean, onlyIfAbsent: boolean): void;
                    /**
                     * Copies this Asset to the specified 'outputDirectory' {@link Path}.
                     */
                    // @ts-ignore
                     copyToDirectory(outputDirectory: java.nio.file.Path): void;
                    /**
                     * Copies this Asset to the specified 'outputDirectory' {@link Path}.
                     */
                    // @ts-ignore
                     copyToDirectory(outputDirectory: java.nio.file.Path, overwrite: boolean): void;
                    /**
                     * Copies this Asset to the specified 'outputDirectory' {@link Path}.
                     */
                    // @ts-ignore
                     copyToDirectory(outputDirectory: java.nio.file.Path, overwrite: boolean, onlyIfAbsent: boolean): void;
                    /**
                     * Returns the the last portion of the Asset URL, e.g. the file name.
                     */
                    // @ts-ignore
                     getFileName(): string;
                    /**
                     * Reads this Asset in it's entirety as a {@link String} and returns the
                     * result.
                     */
                    // @ts-ignore
                     readString(): string;
                    /**
                     * Reads this Asset in it's entirety as a {@link String} and returns the
                     * result.
                     */
                    // @ts-ignore
                     readString(charset: java.nio.charset.Charset): string;
                    /**
                     * Reads all lines from the asset and returns the result.
                     */
                    // @ts-ignore
                     readLines(): java.util.List;
                    /**
                     * Reads all lines from the asset and returns the result.
                     */
                    // @ts-ignore
                     readLines(charset: java.nio.charset.Charset): java.util.List;
                    /**
                     * Reads this Asset in it's entirety as a byte array and returns the
                     * result.
                     */
                    // @ts-ignore
                     readBytes(): number[];
                }
            }
        }
    }
}
