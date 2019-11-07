declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                // @ts-ignore
                 class DataQuery extends java.lang.Object {
                    /**
                     * Gets an empty {@link DataQuery}. This query is constant and never
                     * changes and therefor can be called multiple times returning the
                     * same instance.
                     */
                    // @ts-ignore
                    public static of(): org.spongepowered.api.data.DataQuery;
                    /**
                     * Constructs a query using the given separator character and path.
                     * <p>As an example, {@code new DataQuery('/', "a/b/c")} and
                     * {@code new DataQuery('.', "a.b.c")} represent the same path but are
                     * constructed using different separators.</p>
                     */
                    // @ts-ignore
                    public static of(separator: string, path: string): org.spongepowered.api.data.DataQuery;
                    /**
                     * Constructs a query using the given parts.
                     */
                    // @ts-ignore
                    public static of(parts: string): org.spongepowered.api.data.DataQuery;
                    /**
                     * Constructs a query using the given parts.
                     */
                    // @ts-ignore
                    public static of(parts: java.util.List): org.spongepowered.api.data.DataQuery;
                    /**
                     * Gets the parts that make up this query. The returned list is immutable.
                     */
                    // @ts-ignore
                    public getParts(): java.util.List;
                    /**
                     * Returns a new query that is made up of this query's parts followed by the
                     * given query's parts.
                     */
                    // @ts-ignore
                    public then(that: org.spongepowered.api.data.DataQuery): org.spongepowered.api.data.DataQuery;
                    /**
                     * Returns a new query that is made up of this query's parts followed by the
                     * given query.
                     */
                    // @ts-ignore
                    public then(that: string): org.spongepowered.api.data.DataQuery;
                    /**
                     * Returns the parts of this query as individual queries. The returned list
                     * is immutable.
                     */
                    // @ts-ignore
                    public getQueryParts(): java.util.List;
                    /**
                     * Returns a {@link DataQuery} where the last node is "popped" off. If this
                     * query is already the top level query, then the {@link DataQuery#of()} is
                     * returned.
                     */
                    // @ts-ignore
                    public pop(): org.spongepowered.api.data.DataQuery;
                    /**
                     * Returns a {@link DataQuery} where the first node is "popped" off. If this
                     * query is already the top level query, then the {@link DataQuery#of()} is
                     * returned.
                     */
                    // @ts-ignore
                    public popFirst(): org.spongepowered.api.data.DataQuery;
                    /**
                     * Gets the last entry of this {@link DataQuery}. If this query is
                     * a single entry query or an empty query, it returns itself.
                     */
                    // @ts-ignore
                    public last(): org.spongepowered.api.data.DataQuery;
                    /**
                     * Gets this query as a string separated by the given separator.
                     */
                    // @ts-ignore
                    public asString(separator: string): string;
                    /**
                     * Gets this query as a string separated by the given separator character.
                     */
                    // @ts-ignore
                    public asString(separator: string): string;
                    // @ts-ignore
                    public toString(): string;
                    // @ts-ignore
                    public hashCode(): number;
                    // @ts-ignore
                    public equals(obj: java.lang.Object): boolean;
                }
            }
        }
    }
}
