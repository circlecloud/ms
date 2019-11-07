declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace service {
                namespace economy {
                    // @ts-ignore
                    interface Currency extends org.spongepowered.api.CatalogType {
                        /**
                         * The currency's display name, in singular form. Ex: Dollar.
                         * <p>This should be preferred over {@link CatalogType#getName()}
                         * for display purposes.</p>
                         */
                        // @ts-ignore
                         getDisplayName(): org.spongepowered.api.text.Text;
                        /**
                         * The currency's display name in plural form. Ex: Dollars.
                         * <p>Not all currencies will have a plural name that differs from the
                         * display name.</p>
                         */
                        // @ts-ignore
                         getPluralDisplayName(): org.spongepowered.api.text.Text;
                        /**
                         * The currency's symbol. Ex. $
                         */
                        // @ts-ignore
                         getSymbol(): org.spongepowered.api.text.Text;
                        /**
                         * Formats the given amount using the default number of fractional digits.
                         * <p>Should include the symbol if it is present</p>
                         */
                        // @ts-ignore
                         format(amount: java.math.BigDecimal): org.spongepowered.api.text.Text;
                        /**
                         * Formats the given amount using the specified number of fractional digits.
                         * <p>Should include the symbol if it is present</p>
                         */
                        // @ts-ignore
                         format(amount: java.math.BigDecimal, numFractionDigits: number): org.spongepowered.api.text.Text;
                        /**
                         * This is the default number of fractional digits that is utilized for
                         * formatting purposes.
                         */
                        // @ts-ignore
                         getDefaultFractionDigits(): number;
                        /**
                         * Returns true if this currency is the default currency for the economy,
                         * otherwise false.
                         */
                        // @ts-ignore
                         isDefault(): boolean;
                    }
                }
            }
        }
    }
}
