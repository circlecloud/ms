// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                // @ts-ignore
                interface DataView {
                    /**
                     * Gets the parent container of this DataView.
                     * <p>Every DataView will always have a {@link DataContainer}.</p>
                     * <p>For any {@link DataContainer}, this will return itself.</p>
                     */
                    // @ts-ignore
                     getContainer(): org.spongepowered.api.data.DataContainer;
                    /**
                     * Gets the current path of this {@link DataView} from its root
                     * {@link DataContainer}.
                     * <p>For any {@link DataContainer} itself, this will return an
                     * empty string as it is the root of the path.</p>
                     * <p>The full path will always include this {@link DataView}s name
                     * at the end of the path.</p>
                     */
                    // @ts-ignore
                     getCurrentPath(): org.spongepowered.api.data.DataQuery;
                    /**
                     * Gets the name of this individual {@link DataView} in the path.
                     * <p>This will always be the final substring of the full path
                     * from {@link #getCurrentPath()}.</p>
                     */
                    // @ts-ignore
                     getName(): string;
                    /**
                     * Gets the parent {@link DataView} of this view. The parent directly
                     * contains this view according to the {@link #getCurrentPath()}.
                     * <p>For any {@link DataContainer}, this will return an absent parent.</p>
                     */
                    // @ts-ignore
                     getParent(): java.util.Optional;
                    /**
                     * Gets a collection containing all keys in this {@link DataView}.
                     * <p>If deep is set to true, then this will contain all the keys
                     * within any child {@link DataView}s (and their children, etc).
                     * These will be in a valid path notation for you to use.</p>
                     * <p>If deep is set to false, then this will contain only the keys
                     * of any direct children, and not their own children.</p>
                     */
                    // @ts-ignore
                     getKeys(deep: boolean): java.util.Set;
                    /**
                     * Gets a Map containing all keys and their values for this {@link DataView}.
                     * <p>If deep is set to true, then this will contain all the keys and
                     * values within any child {@link DataView}s (and their children,
                     * etc). These keys will be in a valid path notation for you to use.</p>
                     * <p>If deep is set to false, then this will contain only the keys and
                     * values of any direct children, and not their own children.</p>
                     */
                    // @ts-ignore
                     getValues(deep: boolean): java.util.Map;
                    /**
                     * Returns whether this {@link DataView} contains the given path.
                     */
                    // @ts-ignore
                     contains(path: org.spongepowered.api.data.DataQuery): boolean;
                    /**
                     * Returns whether this {@link DataView} contains an entry for all
                     * provided {@link DataQuery} objects.
                     */
                    // @ts-ignore
                     contains(path: org.spongepowered.api.data.DataQuery, paths: org.spongepowered.api.data.DataQuery): boolean;
                    /**
                     * Returns whether this {@link DataView} contains the given {@link Key}'s
                     * defaulted {@link DataQuery}.
                     */
                    // @ts-ignore
                     contains(key: org.spongepowered.api.data.key.Key): boolean;
                    /**
                     * Returns whether this {@link DataView} contains the given {@link Key}es
                     * defaulted {@link DataQuery}.
                     */
                    // @ts-ignore
                     contains(key: org.spongepowered.api.data.key.Key, keys: org.spongepowered.api.data.key.Key): boolean;
                    /**
                     * Gets an object from the desired path. If the path is not defined,
                     * an absent Optional is returned.
                     */
                    // @ts-ignore
                     get(path: org.spongepowered.api.data.DataQuery): java.util.Optional;
                    /**
                     * Sets the given Object value according to the given path relative to
                     * this {@link DataView}'s path.
                     */
                    // @ts-ignore
                     set(path: org.spongepowered.api.data.DataQuery, value: java.lang.Object): org.spongepowered.api.data.DataView;
                    /**
                     * Sets the given {@link Key}ed value according to the provided
                     * {@link Key}'s {@link Key#getQuery()}.
                     */
                    // @ts-ignore
                     set(key: org.spongepowered.api.data.key.Key, value: java.lang.Object): org.spongepowered.api.data.DataView;
                    /**
                     * Removes the data associated to the given path relative to this
                     * {@link DataView}'s path.
                     * <p>Path can not be empty, to remove this {@link DataView}, call
                     * the associated parent to remove this views name.</p>
                     */
                    // @ts-ignore
                     remove(path: org.spongepowered.api.data.DataQuery): org.spongepowered.api.data.DataView;
                    /**
                     * Creates a new {@link DataView} at the desired path.
                     * <p>If any data existed at the given path, that data will be
                     * overwritten with the newly constructed {@link DataView}.</p>
                     */
                    // @ts-ignore
                     createView(path: org.spongepowered.api.data.DataQuery): org.spongepowered.api.data.DataView;
                    /**
                     * Creates a new {@link DataView} with the given data at the desired
                     * path.
                     * <p>If any data existed at the given path, that data will be overwritten
                     * with the newly constructed {@link DataView}.</p>
                     */
                    // @ts-ignore
                     createView(path: org.spongepowered.api.data.DataQuery, map: java.util.Map): org.spongepowered.api.data.DataView;
                    /**
                     * Gets the {@link DataView} by path, if available.
                     * <p>If a {@link DataView} does not exist, or the data residing at
                     * the path is not an instance of a {@link DataView}, an absent is
                     * returned.</p>
                     */
                    // @ts-ignore
                     getView(path: org.spongepowered.api.data.DataQuery): java.util.Optional;
                    /**
                     * Gets the underlying {@link Map} by path, if available.
                     * <p>If a {@link Map} does not exist, or data residing at the path is not
                     * an instance of a {@link Map}, an absent is returned.</p>
                     */
                    // @ts-ignore
                     getMap(path: org.spongepowered.api.data.DataQuery): java.util.Optional;
                    /**
                     * Gets the {@link Boolean} by path, if available.
                     * <p>If a {@link Boolean} does not exist, or the data residing at
                     * the path is not an instance of a {@link Boolean}, an absent is
                     * returned.</p>
                     */
                    // @ts-ignore
                     getBoolean(path: org.spongepowered.api.data.DataQuery): java.util.Optional;
                    /**
                     * Gets the {@link Short} by path, if available.
                     * <p>If a {@link Short} does not exist, or the data residing at
                     * the path is not an instance of a {@link Short}, an absent is
                     * returned.</p>
                     */
                    // @ts-ignore
                     getShort(path: org.spongepowered.api.data.DataQuery): java.util.Optional;
                    /**
                     * Gets the {@link Byte} by path, if available.
                     * <p>If a {@link Byte} does not exist, or the data residing at
                     * the path is not an instance of a {@link Byte}, an absent is
                     * returned.</p>
                     */
                    // @ts-ignore
                     getByte(path: org.spongepowered.api.data.DataQuery): java.util.Optional;
                    /**
                     * Gets the {@link Integer} by path, if available.
                     * <p>If a {@link Integer} does not exist, or the data residing at
                     * the path is not an instance of a {@link Integer}, an absent is
                     * returned.</p>
                     */
                    // @ts-ignore
                     getInt(path: org.spongepowered.api.data.DataQuery): java.util.Optional;
                    /**
                     * Gets the {@link Long} by path, if available.
                     * <p>If a {@link Long} does not exist, or the data residing at
                     * the path is not an instance of a {@link Long}, an absent is
                     * returned.</p>
                     */
                    // @ts-ignore
                     getLong(path: org.spongepowered.api.data.DataQuery): java.util.Optional;
                    /**
                     * Gets the {@link Float} by path, if available.
                     * <p>If a {@link Float} does not exist, or the data residing at
                     * the path is not an instance of a {@link Float}, an absent is
                     * returned.</p>
                     */
                    // @ts-ignore
                     getFloat(path: org.spongepowered.api.data.DataQuery): java.util.Optional;
                    /**
                     * Gets the {@link Double} by path, if available.
                     * <p>If a {@link Double} does not exist, or the data residing at
                     * the path is not an instance of a {@link Double}, an absent is
                     * returned.</p>
                     */
                    // @ts-ignore
                     getDouble(path: org.spongepowered.api.data.DataQuery): java.util.Optional;
                    /**
                     * Gets the {@link String} by path, if available.
                     * <p>If a {@link String} does not exist, or the data residing at
                     * the path is not an instance of a {@link String}, an absent is
                     * returned.</p>
                     */
                    // @ts-ignore
                     getString(path: org.spongepowered.api.data.DataQuery): java.util.Optional;
                    /**
                     * Gets the {@link List} of something by path, if available.
                     * <p>If a {@link List} of something does not exist, or the data
                     * residing at the path is not an instance of a {@link List} of something,
                     * an absent is returned.</p>
                     */
                    // @ts-ignore
                     getList(path: org.spongepowered.api.data.DataQuery): java.util.Optional;
                    /**
                     * Gets the {@link List} of {@link String} by path, if available.
                     * <p>If a {@link List} of {@link String} does not exist, or the data
                     * residing at the path is not an instance of a {@link List} of
                     * {@link String}, an absent is returned.</p>
                     */
                    // @ts-ignore
                     getStringList(path: org.spongepowered.api.data.DataQuery): java.util.Optional;
                    /**
                     * Gets the {@link List} of {@link Character} by path, if available.
                     * <p>If a {@link List} of {@link Character} does not exist, or the data
                     * residing at the path is not an instance of a {@link List} of
                     * {@link Character}, an absent is returned.</p>
                     */
                    // @ts-ignore
                     getCharacterList(path: org.spongepowered.api.data.DataQuery): java.util.Optional;
                    /**
                     * Gets the {@link List} of {@link Boolean} by path, if available.
                     * <p>If a {@link List} of {@link Boolean} does not exist, or the data
                     * residing at the path is not an instance of a {@link List} of
                     * {@link Boolean}, an absent is returned.</p>
                     */
                    // @ts-ignore
                     getBooleanList(path: org.spongepowered.api.data.DataQuery): java.util.Optional;
                    /**
                     * Gets the {@link List} of {@link Byte} by path, if available.
                     * <p>If a {@link List} of {@link Byte} does not exist, or the data
                     * residing at the path is not an instance of a {@link List} of
                     * {@link Byte}, an absent is returned.</p>
                     */
                    // @ts-ignore
                     getByteList(path: org.spongepowered.api.data.DataQuery): java.util.Optional;
                    /**
                     * Gets the {@link List} of {@link Short} by path, if available.
                     * <p>If a {@link List} of {@link Short} does not exist, or the data
                     * residing at the path is not an instance of a {@link List} of
                     * {@link Short}, an absent is returned.</p>
                     */
                    // @ts-ignore
                     getShortList(path: org.spongepowered.api.data.DataQuery): java.util.Optional;
                    /**
                     * Gets the {@link List} of {@link Integer} by path, if available.
                     * <p>If a {@link List} of {@link Integer} does not exist, or the data
                     * residing at the path is not an instance of a {@link List} of
                     * {@link Integer}, an absent is returned.</p>
                     */
                    // @ts-ignore
                     getIntegerList(path: org.spongepowered.api.data.DataQuery): java.util.Optional;
                    /**
                     * Gets the {@link List} of {@link Long} by path, if available.
                     * <p>If a {@link List} of {@link Long} does not exist, or the data
                     * residing at the path is not an instance of a {@link List} of
                     * {@link Long}, an absent is returned.</p>
                     */
                    // @ts-ignore
                     getLongList(path: org.spongepowered.api.data.DataQuery): java.util.Optional;
                    /**
                     * Gets the {@link List} of {@link Float} by path, if available.
                     * <p>If a {@link List} of {@link Float} does not exist, or the data
                     * residing at the path is not an instance of a {@link List} of
                     * {@link Float}, an absent is returned.</p>
                     */
                    // @ts-ignore
                     getFloatList(path: org.spongepowered.api.data.DataQuery): java.util.Optional;
                    /**
                     * Gets the {@link List} of {@link Double} by path, if available.
                     * <p>If a {@link List} of {@link Double} does not exist, or the data
                     * residing at the path is not an instance of a {@link List} of
                     * {@link Double}, an absent is returned.</p>
                     */
                    // @ts-ignore
                     getDoubleList(path: org.spongepowered.api.data.DataQuery): java.util.Optional;
                    /**
                     * Gets the {@link List} of {@link Map} by path, if available.
                     * <p>If a {@link List} of {@link Map} does not exist, or the data
                     * residing at the path is not an instance of a {@link List} of
                     * {@link Map}, an absent is returned.</p>
                     */
                    // @ts-ignore
                     getMapList(path: org.spongepowered.api.data.DataQuery): java.util.Optional;
                    /**
                     * Gets the {@link List} of {@link DataView} by path, if available.
                     * <p>If a {@link List} of {@link DataView} does not exist, or the data
                     * residing at the path is not an instance of a {@link List} of
                     * {@link DataView}, an absent is returned.</p>
                     */
                    // @ts-ignore
                     getViewList(path: org.spongepowered.api.data.DataQuery): java.util.Optional;
                    /**
                     * Gets the {@link DataSerializable} object by path, if available.
                     * <p>If a {@link DataSerializable} exists, but is not the proper class
                     * type, or there is no data at the path given, an absent is returned.</p>
                     * <p>It is important that the {@link DataManager} provided is
                     * the same one that has registered many of the
                     * {@link DataBuilder}s to ensure the {@link DataSerializable}
                     * requested can be returned.</p>
                     */
                    // @ts-ignore
                     getSerializable(path: org.spongepowered.api.data.DataQuery, clazz: java.lang.Class): java.util.Optional;
                    /**
                     * Gets the {@link List} of {@link DataSerializable} by path, if available.
                     * <p>If a {@link List} exists, but the contents of the list are not
                     * considered {@link DataSerializable} or are not of the proper type of
                     * {@link DataSerializable}, an absent is returned.</p>
                     * <p>It is important that the {@link DataManager} provided is
                     * the same one that has registered many of the
                     * {@link DataBuilder}s to ensure the {@link DataSerializable}
                     * requested can be returned.</p>
                     */
                    // @ts-ignore
                     getSerializableList(path: org.spongepowered.api.data.DataQuery, clazz: java.lang.Class): java.util.Optional;
                    /**
                     * Gets the {@link Object} object by path, if available.
                     * <p>If a {@link Object} exists, but is not the proper class
                     * type, or there is no data at the path given, an absent is returned.</p>
                     * <p>It is important that the {@link DataManager} provided is
                     * the same one that has registered many of the
                     * {@link DataTranslator}s to ensure the {@link DataSerializable}
                     * requested can be returned.</p>
                     */
                    // @ts-ignore
                     getObject(path: org.spongepowered.api.data.DataQuery, objectClass: java.lang.Class): java.util.Optional;
                    /**
                     * Gets the {@link List} of {@link DataSerializable} by path, if available.
                     * <p>If a {@link List} exists, but the contents of the list are not
                     * considered {@link DataTranslator}"able" or are not of the proper type of
                     * {@link DataTranslator}, an absent is returned.</p>
                     * <p>It is important that the {@link DataManager} provided is
                     * the same one that has registered many of the
                     * {@link DataTranslator}s to ensure the {@link Object}
                     * requested can be returned.</p>
                     */
                    // @ts-ignore
                     getObjectList(path: org.spongepowered.api.data.DataQuery, objectClass: java.lang.Class): java.util.Optional;
                    /**
                     * Gets the {@link CatalogType} object by path, if available.
                     * <p>If a {@link CatalogType} exists, but is not named properly, not
                     * existing in a registry, or simply an invalid value will return
                     * an empty value.</p>
                     */
                    // @ts-ignore
                     getCatalogType(path: org.spongepowered.api.data.DataQuery, catalogType: java.lang.Class): java.util.Optional;
                    /**
                     * Gets the {@link List} of {@link CatalogType}s by path, if available.
                     * <p>If a {@link List} exists, but contents of the list are not
                     * considered {@link CatalogType}s or are not of the proper type
                     * of {@link CatalogType}, an absent is returned.</p>
                     */
                    // @ts-ignore
                     getCatalogTypeList(path: org.spongepowered.api.data.DataQuery, catalogType: java.lang.Class): java.util.Optional;
                    /**
                     * Copies this {@link DataView} and all of it's contents into a new
                     * {@link DataContainer}.
                     * <p>Note that the copy will not have the same path as this
                     * {@link DataView} since it will be constructed with the top level path
                     * being itself.</p>
                     */
                    // @ts-ignore
                     copy(): org.spongepowered.api.data.DataContainer;
                    /**
                     * Copies this {@link DataView} and all of it's contents into a new
                     * {@link DataContainer} with the given safety mode.
                     * <p>Note that the copy will not have the same path as this
                     * {@link DataView} since it will be constructed with the top level path
                     * being itself.</p>
                     */
                    // @ts-ignore
                     copy(safety: org.spongepowered.api.data.DataView.SafetyMode): org.spongepowered.api.data.DataContainer;
                    /**
                     * Gets if this view contains no data.
                     */
                    // @ts-ignore
                     isEmpty(): boolean;
                    /**
                     * Gets the {@link org.spongepowered.api.data.DataView.SafetyMode} of this data view.
                     */
                    // @ts-ignore
                     getSafetyMode(): org.spongepowered.api.data.DataView.SafetyMode;
                }
            }
        }
    }
}
