declare namespace org {
    namespace spongepowered {
        namespace api {
            // @ts-ignore
            interface GameRegistry {
                /**
                 * Attempts to retrieve the specific type of {@link CatalogType} based on
                 * the string id given.
                 * <p>Some types may not be available for various reasons including but not
                 * restricted to: mods adding custom types, plugins providing custom types,
                 * game version changes.</p>
                 */
                // @ts-ignore
                 getType(typeClass: any, id: string): any;
                /**
                 * Gets a collection of all available found specific types of
                 * {@link CatalogType} requested.
                 * <p>The presented {@link CatalogType}s may not exist in default catalogs
                 * due to various reasons including but not restricted to: mods, plugins,
                 * game changes.</p>
                 */
                // @ts-ignore
                 getAllOf(typeClass: any): any[] /*java.util.Collection*/;
                /**
                 * Gets a collection of all available found specific types of
                 * {@link CatalogType} requested.
                 */
                // @ts-ignore
                 getAllFor(pluginId: string, typeClass: any): any[] /*java.util.Collection*/;
                /**
                 * Gets all {@link CatalogType} for Minecraft as a base mod. Note that
                 * some {@link CatalogType}s are not originally from the game itself, and
                 * may be provided by Sponge.
                 */
                // @ts-ignore
                 getAllForMinecraft(typeClass: any): any[] /*java.util.Collection*/;
                /**
                 * Gets all {@link CatalogType} for Sponge as a base mod. Note that
                 * some {@link CatalogType}s are not originally from the game itself, and
                 * may be provided by Sponge.
                 */
                // @ts-ignore
                 getAllForSponge(typeClass: any): any[] /*java.util.Collection*/;
                /**
                 * Registers the {@link CatalogRegistryModule} for dummy registration and
                 * handling.
                 * <p>By default, the only supported modules that can be registered are
                 * dependent that plugins are not attempting to register new modules for
                 * API-provided {@link CatalogType}s.</p>
                 */
                // @ts-ignore
                 registerModule(catalogClass: any, registryModule: org.spongepowered.api.registry.CatalogRegistryModule): org.spongepowered.api.GameRegistry;
                /**
                 * Registers the desired {@link RegistryModule}.
                 */
                // @ts-ignore
                 registerModule(module: org.spongepowered.api.registry.RegistryModule): org.spongepowered.api.GameRegistry;
                /**
                 * Registers a {@link Supplier} for creating the desired {@link ResettableBuilder}.
                 */
                // @ts-ignore
                 registerBuilderSupplier(builderClass: any, supplier: any): org.spongepowered.api.GameRegistry;
                /**
                 * Gets a builder of the desired class type, examples may include:
                 * {@link org.spongepowered.api.item.inventory.ItemStack.Builder}, etc.
                 */
                // @ts-ignore
                 createBuilder(builderClass: any): org.spongepowered.api.util.ResettableBuilder;
                /**
                 * Registers a new {@link CatalogType} instance if registration for that
                 * type is supported.
                 * <p>Note that this is intended only for registering new instances of
                 * already existing CatalogTypes, not for registering entirely new
                 * CatalogType classes.</p>
                 */
                // @ts-ignore
                 register(type: any, obj: org.spongepowered.api.CatalogType): org.spongepowered.api.CatalogType;
                /**
                 * Gets a {@link Collection} of the default GameRules.
                 */
                // @ts-ignore
                 getDefaultGameRules(): any[] /*java.util.Collection*/;
                /**
                 * Gets the {@link Statistic} for the given {@link StatisticType} and
                 * {@link EntityType}. If the statistic group is not a valid
                 * {@link EntityStatistic} group then {@link Optional#empty()} will be
                 * returned.
                 */
                // @ts-ignore
                 getEntityStatistic(statType: org.spongepowered.api.statistic.StatisticType, entityType: org.spongepowered.api.entity.EntityType): any;
                /**
                 * Gets the {@link Statistic} for the given {@link StatisticType} and
                 * {@link ItemType}. If the statistic group is not a valid
                 * {@link ItemStatistic} group then {@link Optional#empty()} will be
                 * returned.
                 */
                // @ts-ignore
                 getItemStatistic(statType: org.spongepowered.api.statistic.StatisticType, itemType: org.spongepowered.api.item.ItemType): any;
                /**
                 * Gets the {@link Statistic} for the given {@link StatisticType} and
                 * {@link BlockType}. If the statistic group is not a valid
                 * {@link BlockStatistic} group then {@link Optional#empty()} will be
                 * returned.
                 */
                // @ts-ignore
                 getBlockStatistic(statType: org.spongepowered.api.statistic.StatisticType, blockType: org.spongepowered.api.block.BlockType): any;
                /**
                 * Gets the {@link Rotation} with the provided degrees.
                 */
                // @ts-ignore
                 getRotationFromDegree(degrees: number): any;
                /**
                 * Loads a {@link Favicon} from the specified encoded string. The format of
                 * the input depends on the implementation.
                 */
                // @ts-ignore
                 loadFavicon(raw: string): org.spongepowered.api.network.status.Favicon;
                /**
                 * Loads a favicon from a specified {@link Path}.
                 */
                // @ts-ignore
                 loadFavicon(path: any): org.spongepowered.api.network.status.Favicon;
                /**
                 * Loads a favicon from a specified {@link URL}.
                 */
                // @ts-ignore
                 loadFavicon(url: any): org.spongepowered.api.network.status.Favicon;
                /**
                 * Loads a favicon from a specified {@link InputStream}.
                 */
                // @ts-ignore
                 loadFavicon(input: any): org.spongepowered.api.network.status.Favicon;
                /**
                 * Loads a favicon from a specified {@link BufferedImage}.
                 */
                // @ts-ignore
                 loadFavicon(image: any): org.spongepowered.api.network.status.Favicon;
                /**
                 * Retrieves the crafting RecipeRegistry for this GameRegistry.
                 */
                // @ts-ignore
                 getCraftingRecipeRegistry(): org.spongepowered.api.item.recipe.crafting.CraftingRecipeRegistry;
                /**
                 * Retrieves the smelting RecipeRegistry for this GameRegistry.
                 */
                // @ts-ignore
                 getSmeltingRecipeRegistry(): org.spongepowered.api.item.recipe.smelting.SmeltingRecipeRegistry;
                /**
                 * Gets a {@link ResourcePack} that's already been created by its ID.
                 */
                // @ts-ignore
                 getResourcePackById(id: string): any;
                /**
                 * Gets a {@link DisplaySlot} which displays only for teams with the
                 * provided color.
                 */
                // @ts-ignore
                 getDisplaySlotForColor(color: org.spongepowered.api.text.format.TextColor): any;
                /**
                 * Registers a new {@link AbstractAITask} with an {@link Agent} as the
                 * owner. The complete id will be in the format of
                 * <code>{@link PluginContainer#getId()}:id</code>.
                 */
                // @ts-ignore
                 registerAITaskType(plugin: any, id: string, name: string, aiClass: any): org.spongepowered.api.entity.ai.task.AITaskType;
                /**
                 * Gets the {@link ExtentBufferFactory} for creating buffers
                 * to store extent data.
                 */
                // @ts-ignore
                 getExtentBufferFactory(): org.spongepowered.api.world.extent.ExtentBufferFactory;
                /**
                 * Gets the {@link ValueFactory} for creating values.
                 */
                // @ts-ignore
                 getValueFactory(): org.spongepowered.api.data.value.ValueFactory;
                /**
                 * Gets the {@link VillagerRegistry} for the register mappings of
                 * {@link Career}s to {@link TradeOfferGenerator}s based on a level.
                 */
                // @ts-ignore
                 getVillagerRegistry(): org.spongepowered.api.item.merchant.VillagerRegistry;
                /**
                 * Gets the internal {@link TextSerializerFactory}.
                 */
                // @ts-ignore
                 getTextSerializerFactory(): org.spongepowered.api.text.serializer.TextSerializerFactory;
                /**
                 * Gets the internal {@link SelectorFactory}.
                 */
                // @ts-ignore
                 getSelectorFactory(): org.spongepowered.api.text.selector.SelectorFactory;
                /**
                 * Gets a locale for the specified locale code, e.g. {@code en_US}.
                 */
                // @ts-ignore
                 getLocale(locale: string): any;
                /**
                 * Gets the {@link Translation} with the provided ID.
                 */
                // @ts-ignore
                 getTranslationById(id: string): any;
            }
        }
    }
}
