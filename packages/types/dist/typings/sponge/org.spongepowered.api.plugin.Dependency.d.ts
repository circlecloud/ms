// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace plugin {
                // @ts-ignore
                interface Dependency {
                    /**
                     * The plugin ID of the dependency.
                     */
                    // @ts-ignore
                     id(): string;
                    /**
                     * The required version range of the dependency.
                     * <p>The version range will be specified in <b>Maven version range
                     * syntax</b>:</p>
                     * <table>
                     * <tr><th>Range</th><th>Meaning</th></tr>
                     * <tr><td>1.0</td><td>Any dependency version, 1.0 is recommended</td></tr>
                     * <tr><td>[1.0]</td><td>x == 1.0</td></tr>
                     * <tr><td>[1.0,)</td><td>x &gt;= 1.0</td></tr>
                     * <tr><td>(1.0,)</td><td>x &gt; 1.0</td></tr>
                     * <tr><td>(,1.0]</td><td>x &lt;= 1.0</td></tr>
                     * <tr><td>(,1.0)</td><td>x &lt; 1.0</td></tr>
                     * <tr><td>(1.0,2.0)</td><td>1.0 &lt; x &lt; 2.0</td></tr>
                     * <tr><td>[1.0,2.0]</td><td>1.0 &lt;= x &lt;= 2.0</td></tr>
                     * </table>
                     */
                    // @ts-ignore
                     version(): string;
                    /**
                     * If this dependency is optional for the plugin to work. By default
                     * this is {@code false}.
                     */
                    // @ts-ignore
                     optional(): boolean;
                }
            }
        }
    }
}
