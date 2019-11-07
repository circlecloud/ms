declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace transform {
                    // @ts-ignore
                    interface TextFormatter extends org.spongepowered.api.text.TextRepresentable {
                        /**
                         * Returns an {@link ImmutableList} of this formatter's elements.
                         */
                        // @ts-ignore
                         getAll(): any;
                        /**
                         * Returns the element at the specified index.
                         */
                        // @ts-ignore
                         get(i: number): org.spongepowered.api.text.TextRepresentable;
                        /**
                         * Returns the first element of the specified type after the specified
                         * index.
                         */
                        // @ts-ignore
                         firstAfter(index: number, clazz: java.lang.Class): java.util.Optional;
                        /**
                         * Returns the first element of the specified type.
                         */
                        // @ts-ignore
                         first(clazz: java.lang.Class): java.util.Optional;
                        /**
                         * Applies the specified consumer to each element of the specified type
                         * after the specified index.
                         */
                        // @ts-ignore
                         forEachAfter(index: number, clazz: java.lang.Class, consumer: java.util.function$.Consumer): void;
                        /**
                         * Applies the specified consumer to each element of the specified type
                         * after the specified index.
                         */
                        // @ts-ignore
                         forEach(clazz: java.lang.Class, consumer: java.util.function$.Consumer): void;
                        /**
                         * Replaces the element previously at the specified index with the
                         * specified element.
                         */
                        // @ts-ignore
                         set(i: number, e: org.spongepowered.api.text.TextRepresentable): org.spongepowered.api.text.TextRepresentable;
                        /**
                         * Returns the amount of elements in this formatter.
                         */
                        // @ts-ignore
                         size(): number;
                        /**
                         * Returns true if the formatter contains no elements.
                         */
                        // @ts-ignore
                         isEmpty(): boolean;
                        /**
                         * Returns true if the specified element is in the formatter.
                         */
                        // @ts-ignore
                         contains(e: org.spongepowered.api.text.TextRepresentable): boolean;
                        /**
                         * Clears all elements from this formatter.
                         */
                        // @ts-ignore
                         clear(): void;
                        /**
                         * Adds the specified element to the end of this formatter.
                         */
                        // @ts-ignore
                         add(element: org.spongepowered.api.text.TextRepresentable): boolean;
                        /**
                         * Adds the specified elements to the end of this formatter.
                         */
                        // @ts-ignore
                         add(elements: java.util.Collection): boolean;
                        /**
                         * Adds the specified elements to the end of this formatter.
                         */
                        // @ts-ignore
                         add(elements: java.lang.Iterable): boolean;
                        /**
                         * Adds the specified elements to the end of this formatter.
                         */
                        // @ts-ignore
                         add(elements: java.util.Iterator): boolean;
                        /**
                         * Inserts the specified element at the specified index within the
                         * formatter.
                         */
                        // @ts-ignore
                         insert(i: number, element: org.spongepowered.api.text.TextRepresentable): void;
                        /**
                         * Inserts the specified elements at the specified index within the
                         * formatter.
                         */
                        // @ts-ignore
                         insert(i: number, elements: java.util.Collection): void;
                        /**
                         * Inserts the specified elements at the specified index within the
                         * formatter.
                         */
                        // @ts-ignore
                         insert(i: number, elements: java.lang.Iterable): void;
                        /**
                         * Inserts the specified elements at the specified index within the
                         * formatter.
                         */
                        // @ts-ignore
                         insert(i: number, elements: java.util.Iterator): void;
                        /**
                         * Removes the specified element from the formatter.
                         */
                        // @ts-ignore
                         remove(element: org.spongepowered.api.text.TextRepresentable): boolean;
                        /**
                         * Removes the specified elements from the formatter.
                         */
                        // @ts-ignore
                         remove(elements: java.util.Collection): boolean;
                        /**
                         * Removes the specified elements from the formatter.
                         */
                        // @ts-ignore
                         remove(elements: java.lang.Iterable): boolean;
                        /**
                         * Removes the specified elements from the formatter.
                         */
                        // @ts-ignore
                         remove(elements: java.util.Iterator): boolean;
                        /**
                         * Removes all elements from the formatter except for these specified
                         * elements.
                         */
                        // @ts-ignore
                         retain(elements: java.util.Collection): boolean;
                        /**
                         * Removes all elements from the formatter except for these specified
                         * elements.
                         */
                        // @ts-ignore
                         retain(elements: java.lang.Iterable): boolean;
                        /**
                         * Removes all elements from the formatter except for these specified
                         * elements.
                         */
                        // @ts-ignore
                         retain(elements: java.util.Iterator): boolean;
                        /**
                         * Builds the result {@link Text} for this formatter using the current
                         * configuration of each element. The result of each element is
                         * concatenated to an empty {@link Text} to yield the result.
                         */
                        // @ts-ignore
                         format(): org.spongepowered.api.text.Text;
                        // @ts-ignore
                         iterator(): java.util.Iterator;
                        // @ts-ignore
                         toText(): org.spongepowered.api.text.Text;
                    }
                }
            }
        }
    }
}
