declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace service {
                namespace sql {
                    // @ts-ignore
                    interface SqlService {
                        /**
                         * Returns a data source for the provided JDBC connection string or
                         * an alias.
                         * <p>A jdbc connection url is expected to be of the form:
                         * jdbc:&lt;engine&gt;://[&lt;username&gt;[:&lt;password&gt;]@]&lt;host
                         * &gt;/&lt;database&gt; or an alias (available aliases are known only by
                         * the service provider)</p>
                         */
                        // @ts-ignore
                         getDataSource(jdbcConnection: string): any;
                        /**
                         * Returns a data source for the provided JDBC connection string or an
                         * alias.
                         * <p>A jdbc connection url is expected to be of the form:
                         * jdbc:&lt;engine&gt;://[&lt;username&gt;[:&lt;password&gt;]@]
                         * &lt;host&gt;/&lt;database&gt;
                         * or an alias (available aliases are known only by the service
                         * provider)</p>
                         */
                        // @ts-ignore
                         getDataSource(plugin: any, jdbcConnection: string): any;
                        /**
                         * Returns a possible connection URL for a given alias.
                         */
                        // @ts-ignore
                         getConnectionUrlFromAlias(alias: string): any;
                    }
                }
            }
        }
    }
}
