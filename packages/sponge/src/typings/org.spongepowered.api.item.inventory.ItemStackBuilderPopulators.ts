declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    // @ts-ignore
                     class ItemStackBuilderPopulators {
                        /**
                         * Creates a new {@link BiConsumer} to set the {@link ItemStack.Builder}
                         * to use the provided {@link ItemStackSnapshot} as a "default". Note
                         * that the normal behavior of the builder is to reset according to
                         * the snapshot.
                         */
                        // @ts-ignore
                        public static itemStack(snapshot: org.spongepowered.api.item.inventory.ItemStackSnapshot): any;
                        /**
                         * Creates a new {@link BiConsumer} that uses a randomized selection
                         * of the provided {@link ItemStackSnapshot}s. The builder, when called will
                         * only use one at random selection to default to.
                         */
                        // @ts-ignore
                        public static itemStacks(snapshot: org.spongepowered.api.item.inventory.ItemStackSnapshot, snapshots: org.spongepowered.api.item.inventory.ItemStackSnapshot): any;
                        /**
                         * Creates a new {@link BiConsumer} that defines the provided
                         * {@link ItemType}.
                         */
                        // @ts-ignore
                        public static item(itemType: org.spongepowered.api.item.ItemType): any;
                        /**
                         * Creates a new {@link BiConsumer} that defines the provided
                         * {@link ItemType}, provided that the {@link Supplier} does not
                         * return null.
                         * <p>Note that the {@link Supplier} is not queried for an
                         * {@link ItemType} until the generated {@link BiConsumer} is
                         * called.</p>
                         */
                        // @ts-ignore
                        public static item(supplier: any): any;
                        /**
                         * Creates a new {@link BiConsumer} that provides a random
                         * {@link ItemType} of the provided item types.
                         * <p>Note that the desired {@link ItemType} given to the builder is only
                         * defined at the time of calling {@link BiConsumer#accept(Object, Object)}.
                         * </p>
                         */
                        // @ts-ignore
                        public static items(itemType: org.spongepowered.api.item.ItemType, itemTypes: org.spongepowered.api.item.ItemType): any;
                        /**
                         * Creates a new {@link BiConsumer} that provides a random
                         * {@link ItemType} from the provided collection of item types.
                         */
                        // @ts-ignore
                        public static items(itemTypes: any[] /*java.util.Collection*/): any;
                        /**
                         * Creates a new {@link BiConsumer} that sets the desired quantity
                         * for creating an {@link ItemStack}.
                         * <p>Note that the default behavior of the item stack builder is still
                         * expected to take place. Negative values are not allowed.</p>
                         */
                        // @ts-ignore
                        public static quantity(amount: org.spongepowered.api.util.weighted.VariableAmount): any;
                        /**
                         * Creates a new {@link BiConsumer} that sets the desired quantity
                         * for creating an {@link ItemStack}. The supplier is not queried for
                         * a {@link VariableAmount} until the generated bi consumer is
                         * called on.
                         * <p>Note that the default behavior of an item stack builder is still
                         * expected to take place. Negative values are not allowed.</p>
                         */
                        // @ts-ignore
                        public static quantity(supplier: any): any;
                        /**
                         * Creates a new {@link BiConsumer} that sets the provided {@link Key}'ed
                         * object where the value is possibly ignored or not supported. No checks
                         * on whether the key or object is supported until called upon.
                         * <p>Note that custom data is not supported through this method, use
                         * {@link #data(Collection)} or any variant thereof for applying custom data.</p>
                         */
                        // @ts-ignore
                        public static keyValue(key: org.spongepowered.api.data.key.Key, value: any): any;
                        /**
                         * Creates a new {@link BiConsumer} that sets a single provided
                         * value with the provided {@link Key}. Only a single value is chosen
                         * to provide to the itemstack builder.
                         * <p>Note that custom data is not supported through this method, use
                         * {@link #data(Collection)} or any variant thereof for applying custom data.</p>
                         */
                        // @ts-ignore
                        public static keyValues(key: org.spongepowered.api.data.key.Key, values: any): any;
                        /**
                         * Creates a new {@link BiConsumer} where the {@link Key} is responsible
                         * for a {@link List} based {@link Value}. Given that the provided elements
                         * are chosen with a {@link Random}, it's not clear that the elements will
                         * be added in bundles or in the same iteration order.
                         * <p>Note that custom data is not supported through this method, use
                         * {@link #data(Collection)} or any variant thereof for applying custom data.</p>
                         */
                        // @ts-ignore
                        public static listValues(key: org.spongepowered.api.data.key.Key, elementPool: any[] /*java.util.List*/, amount: org.spongepowered.api.util.weighted.VariableAmount): any;
                        /**
                         * Creates a new {@link BiConsumer} where the {@link Key} is responsible
                         * for a {@link List} based {@link Value}. Given that the provided elements
                         * are chosen with a {@link Random}, it's not clear that the elements will
                         * be added in bundles or in the same iteration order. The default variance
                         * is provided as {@link VariableAmount#baseWithRandomAddition(double, double)}
                         * where at the least, a single element is chosen, and at most the entire
                         * collection is chosen.
                         * <p>Note that custom data is not supported through this method, use
                         * {@link #data(Collection)} or any variant thereof for applying custom data.</p>
                         */
                        // @ts-ignore
                        public static listValues(key: org.spongepowered.api.data.key.Key, elementPool: any[] /*java.util.List*/): any;
                        /**
                         * Creates a new {@link BiConsumer} where the {@link Key} is responsible
                         * for a {@link List} based {@link Value}. Given the {@link WeightedTable}
                         * is already generated, the values requested are only retrieved when
                         * the generated biconsumer is called upon.
                         * <p>Note that custom data is not supported through this method, use
                         * {@link #data(Collection)} or any variant thereof for applying custom data.</p>
                         */
                        // @ts-ignore
                        public static listValues(key: org.spongepowered.api.data.key.Key, weightedTable: org.spongepowered.api.util.weighted.WeightedTable): any;
                        /**
                         * Creates a new {@link BiConsumer} where the {@link Key} is responsible
                         * for a {@link List} based {@link Value}. Given the
                         * {@link WeightedTable} is exclusively used with {@link Function}s,
                         * the {@link Function}s themselves are queried with a {@link Random}
                         * and expected to present a singular element of the defined type. It's
                         * expected that there are multiple functions to provide additional
                         * elements for a particular key'ed {@link ListValue}.
                         * <p>An example usage of this can be for generating a randomized list
                         * of {@link Enchantment}s with varying enchantment levels.</p>
                         * <p>Note that custom data is not supported through this method, use
                         * {@link #data(Collection)} or any variant thereof for applying custom data.</p>
                         */
                        // @ts-ignore
                        public static listValueSuppliers(key: org.spongepowered.api.data.key.Key, weightedTable: org.spongepowered.api.util.weighted.WeightedTable): any;
                        /**
                         * Creates a new {@link BiConsumer} where the {@link Key} is responsible
                         * for a {@link Set} based {@link Value}. Given the {@link Set} of element
                         * to act as a pool, the consumer will pull a random amount of the
                         * given pool and apply it as a new {@link Set}.
                         * <p>Note that custom data is not supported through this method, use
                         * {@link #data(Collection)} or any variant thereof for applying custom data.</p>
                         */
                        // @ts-ignore
                        public static setValues(key: org.spongepowered.api.data.key.Key, elementPool: any[] /*java.util.Set*/): any;
                        /**
                         * Creates a new {@link BiConsumer} where the {@link Key} is responsible
                         * for a {@link Set} based {@link Value}. Given the {@link Set} of
                         * elements to act as a pool, the consumer will pull a variable amount
                         * based on the provided {@link VariableAmount}, and apply it as a new
                         * {@link Set}.
                         * <p>Note that custom data is not supported through this method, use
                         * {@link #data(Collection)} or any variant thereof for applying custom data.</p>
                         */
                        // @ts-ignore
                        public static setValues(key: org.spongepowered.api.data.key.Key, elementPool: any[] /*java.util.Set*/, amount: org.spongepowered.api.util.weighted.VariableAmount): any;
                        /**
                         * Creates a new {@link BiConsumer} where the {@link Key} is
                         * responsible for a {@link Set} based {@link Value}. Given
                         * the provided {@link WeightedTable}, the consumer will retrieve
                         * a {@link List} of values and add them as a new {@link Set}.
                         * <p>Note that custom data is not supported through this method, use
                         * {@link #data(Collection)} or any variant thereof for applying custom data.</p>
                         */
                        // @ts-ignore
                        public static setValues(key: org.spongepowered.api.data.key.Key, weightedTable: org.spongepowered.api.util.weighted.WeightedTable): any;
                        /**
                         * Creates a new {@link BiConsumer} that applies the provided {@link Value}
                         * to the generated {@link ItemStack}.
                         * <p>Note that custom data is not supported through this method, use
                         * {@link #data(Collection)} or any variant thereof for applying custom data.</p>
                         */
                        // @ts-ignore
                        public static value(value: org.spongepowered.api.data.value.BaseValue): any;
                        /**
                         * Creates a new {@link BiConsumer} that applies a random selection of the
                         * provided {@link BaseValue}s.
                         * <p>Note that custom data is not supported through this method, use
                         * {@link #data(Collection)} or any variant thereof for applying custom data.</p>
                         */
                        // @ts-ignore
                        public static values(values: any): any;
                        /**
                         * Creates a new {@link BiConsumer} that sets a particular
                         * {@link DataManipulator} onto an {@link ItemStack}. Note
                         * that no validation can be performed, however the builder
                         * will ignore unsupported data. This can be used to provide
                         * custom data manipulators.
                         */
                        // @ts-ignore
                        public static data(manipulator: org.spongepowered.api.data.manipulator.DataManipulator): any;
                        /**
                         * Creates a new {@link BiConsumer} that sets a single
                         * {@link DataManipulator} form the provided collection of manipulators.
                         * Note that no validation can be performed, however the builder will
                         * ignore unsupported data. This can be used to provide custom data
                         * manipulators. To apply multiple manipulators, use
                         * {@link #data(Collection, VariableAmount)}.
                         */
                        // @ts-ignore
                        public static data(manipulators: any[] /*java.util.Collection*/): any;
                        /**
                         * Creates a new {@link BiConsumer} that provides a {@link VariableAmount}
                         * of {@link DataManipulator}s from the provided pool. Note that no
                         * validation can be performed, however the builder will ignore unsupported
                         * data. This can be used to provide custom data manipulators.
                         */
                        // @ts-ignore
                        public static data(manipulators: any[] /*java.util.Collection*/, rolls: org.spongepowered.api.util.weighted.VariableAmount): any;
                        /**
                         * Creates a new {@link BiConsumer} that provides a variable
                         * amount of {@link DataManipulator}s from the provided
                         * {@link WeightedTable}. Note that no validation can be performed, however
                         * the builder will ignore unsupported data. This can be used to provide
                         * custom data manipulators.
                         */
                        // @ts-ignore
                        public static data(weightedTable: org.spongepowered.api.util.weighted.WeightedTable): any;
                        /**
                         * Creates a new {@link BiConsumer} that takes the provided
                         * {@link EnchantmentType} and applies it to the generated {@link ItemStack}.
                         * The enchantmentType level is varied based on vanilla mechanics.
                         */
                        // @ts-ignore
                        public static enchantment(enchantmentType: org.spongepowered.api.item.enchantment.EnchantmentType): any;
                        /**
                         * Creates a new {@link BiConsumer} that takes the provided
                         * {@link EnchantmentType} and applies it to the generated {@link ItemStack}.
                         * The enchantmentType level is defined by the variable amount provided.
                         */
                        // @ts-ignore
                        public static enchantment(level: org.spongepowered.api.util.weighted.VariableAmount, enchantmentType: org.spongepowered.api.item.enchantment.EnchantmentType): any;
                        /**
                         * Creates a new {@link BiConsumer} that takes the provided
                         * {@link Collection} of {@link EnchantmentType}s and applies a
                         * singular {@link EnchantmentType} with varying levels to the generated
                         * {@link ItemStack}.
                         */
                        // @ts-ignore
                        public static enchantmentsWithVanillaLevelVariance(enchantmentTypes: any[] /*java.util.Collection*/): any;
                        /**
                         * Creates a new {@link BiConsumer} that takes the provided
                         * {@link EnchantmentType}s and applies a variable amount of enchantmentTypes
                         * with varying levels to the generated {@link ItemStack}.
                         */
                        // @ts-ignore
                        public static enchantmentsWithVanillaLevelVariance(amount: org.spongepowered.api.util.weighted.VariableAmount, enchantmentType: org.spongepowered.api.item.enchantment.EnchantmentType, enchantmentTypes: org.spongepowered.api.item.enchantment.EnchantmentType): any;
                        /**
                         * Creates a new {@link BiConsumer} that takes the provided
                         * {@link Collection} of {@link EnchantmentType}s and applies a varying amount
                         * of generated enchantments to the generated {@link ItemStack}.
                         */
                        // @ts-ignore
                        public static enchantmentsWithVanillaLevelVariance(amount: org.spongepowered.api.util.weighted.VariableAmount, itemEnchantmentTypes: any[] /*java.util.Collection*/): any;
                        /**
                         * Creates a new {@link BiConsumer} that takes the provided
                         * {@link Collection} of coupled {@link EnchantmentType} and
                         * {@link VariableAmount} to apply varying enchantments of varying amounts
                         * to the generated {@link ItemStack}.
                         */
                        // @ts-ignore
                        public static enchantments(amount: org.spongepowered.api.util.weighted.VariableAmount, enchantments: any[] /*java.util.Collection*/): any;
                    }
                }
            }
        }
    }
}
