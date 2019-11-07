declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                // @ts-ignore
                interface Property {
                    /**
                     * Gets the key for this property. Key is only used if an item stack can
                     * have more than one property of a particular type. If the property has no
                     * specific key, the property class name is returned so that properties of
                     * the same type are implicitly comparable.
                     */
                    // @ts-ignore
                     getKey(): java.lang.Object;
                    /**
                     * Gets the "value" of this property. "Value" may have different meanings
                     * depending on the exact type of this property.
                     */
                    // @ts-ignore
                     getValue(): java.lang.Object;
                    /**
                     * Gets the operator to use when comparing another property with this
                     * property.
                     */
                    // @ts-ignore
                     getOperator(): org.spongepowered.api.data.Property.Operator;
                    /**
                     * <p>Compares this property to <code>other</code> using this property's
                     * operator. This is equivalent to the code:</p>
                     * <blockquote>
                     * <pre>thisObject.getOperator().compare(thisObject, other);</pre>
                     * </blockquote>
                     * <p>The order of the operands is important, since {@link Operator} treats
                     * its type as infix between the two operands, and thus (for example) if
                     * this property's operator is set to GREATER, then when calling this method
                     * we want to know whether <b>this</b> is <em>GREATER</em> than <b>other</b>
                     * and must pass in the operands in the corresponding order.</p>
                     */
                    // @ts-ignore
                     matches(other: org.spongepowered.api.data.Property): boolean;
                }
            }
        }
    }
}
