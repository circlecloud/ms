declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                // @ts-ignore
                 class BookView extends java.lang.Object implements org.spongepowered.api.data.DataSerializable {
                    /**
                     * Returns the title of the book to be displayed.
                     */
                    // @ts-ignore
                    public getTitle(): org.spongepowered.api.text.Text;
                    /**
                     * Returns the author of the book to be displayed.
                     */
                    // @ts-ignore
                    public getAuthor(): org.spongepowered.api.text.Text;
                    /**
                     * Returns a list of pages that will be displayed to the client.
                     */
                    // @ts-ignore
                    public getPages(): any;
                    /**
                     * Returns a new {@link Builder} for chaining.
                     */
                    // @ts-ignore
                    public static builder(): org.spongepowered.api.text.BookView.Builder;
                    // @ts-ignore
                    public getContentVersion(): number;
                    // @ts-ignore
                    public toContainer(): org.spongepowered.api.data.DataContainer;
                    // @ts-ignore
                    public toString(): string;
                    // @ts-ignore
                    public equals(obj: java.lang.Object): boolean;
                    // @ts-ignore
                    public hashCode(): number;
                }
            }
        }
    }
}
