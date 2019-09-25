declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace asset {
                // @ts-ignore
                interface Asset {
                    // @ts-ignore
                     DEFAULT_CHARSET: any;
                    /**
                     * Returns the original {@link Plugin} owner of this Asset.
                     */
                    // @ts-ignore
                     getOwner(): org.spongepowered.api.plugin.PluginContainer;
                    /**
                     * Returns the {@link URL} to this Asset.
                     */
                    // @ts-ignore
                     getUrl(): any;
                    /**
                     * Copies this Asset to the specified 'output' {@link Path}.
                     */
                    // @ts-ignore
                     copyToFile(output: any): void;
                    /**
                     * Copies this Asset to the specified 'output' {@link Path}.
                     */
                    // @ts-ignore
                     copyToFile(output: any, overwrite: boolean): void;
                    /**
                     * Copies this Asset to the specified 'output' {@link Path}.
                     */
                    // @ts-ignore
                     copyToFile(output: any, overwrite: boolean, onlyIfAbsent: boolean): void;
                    /**
                     * Copies this Asset to the specified 'outputDirectory' {@link Path}.
                     */
                    // @ts-ignore
                     copyToDirectory(outputDirectory: any): void;
                    /**
                     * Copies this Asset to the specified 'outputDirectory' {@link Path}.
                     */
                    // @ts-ignore
                     copyToDirectory(outputDirectory: any, overwrite: boolean): void;
                    /**
                     * Copies this Asset to the specified 'outputDirectory' {@link Path}.
                     */
                    // @ts-ignore
                     copyToDirectory(outputDirectory: any, overwrite: boolean, onlyIfAbsent: boolean): void;
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
                     readString(charset: any): string;
                    /**
                     * Reads all lines from the asset and returns the result.
                     */
                    // @ts-ignore
                     readLines(): any[] /*java.util.List*/;
                    /**
                     * Reads all lines from the asset and returns the result.
                     */
                    // @ts-ignore
                     readLines(charset: any): any[] /*java.util.List*/;
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
