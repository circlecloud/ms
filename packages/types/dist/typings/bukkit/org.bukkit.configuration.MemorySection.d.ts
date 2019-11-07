declare namespace org {
    namespace bukkit {
        namespace configuration {
            // @ts-ignore
             class MemorySection extends java.lang.Object implements org.bukkit.configuration.ConfigurationSection {
                /**
                 * Creates an empty MemorySection for use as a root {@link Configuration}
                 * section.
                 * <p>
                 * Note that calling this without being yourself a {@link Configuration}
                 * will throw an exception!
                 */
                // @ts-ignore
                constructor()
                /**
                 * Creates an empty MemorySection with the specified parent and path.
                 */
                // @ts-ignore
                constructor(parent: org.bukkit.configuration.ConfigurationSection, path: string)
                // @ts-ignore
                public getKeys(deep: boolean): java.util.Set;
                // @ts-ignore
                public getValues(deep: boolean): java.util.Map;
                // @ts-ignore
                public contains(path: string): boolean;
                // @ts-ignore
                public contains(path: string, ignoreDefault: boolean): boolean;
                // @ts-ignore
                public isSet(path: string): boolean;
                // @ts-ignore
                public getCurrentPath(): string;
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                public getRoot(): org.bukkit.configuration.Configuration;
                // @ts-ignore
                public getParent(): org.bukkit.configuration.ConfigurationSection;
                // @ts-ignore
                public addDefault(path: string, value: java.lang.Object): void;
                // @ts-ignore
                public getDefaultSection(): org.bukkit.configuration.ConfigurationSection;
                // @ts-ignore
                public set(path: string, value: java.lang.Object): void;
                // @ts-ignore
                public get(path: string): java.lang.Object;
                // @ts-ignore
                public get(path: string, def: java.lang.Object): java.lang.Object;
                // @ts-ignore
                public createSection(path: string): org.bukkit.configuration.ConfigurationSection;
                // @ts-ignore
                public createSection(path: string, map: java.util.Map): org.bukkit.configuration.ConfigurationSection;
                // @ts-ignore
                public getString(path: string): string;
                // @ts-ignore
                public getString(path: string, def: string): string;
                // @ts-ignore
                public isString(path: string): boolean;
                // @ts-ignore
                public getInt(path: string): number;
                // @ts-ignore
                public getInt(path: string, def: number): number;
                // @ts-ignore
                public isInt(path: string): boolean;
                // @ts-ignore
                public getBoolean(path: string): boolean;
                // @ts-ignore
                public getBoolean(path: string, def: boolean): boolean;
                // @ts-ignore
                public isBoolean(path: string): boolean;
                // @ts-ignore
                public getDouble(path: string): number;
                // @ts-ignore
                public getDouble(path: string, def: number): number;
                // @ts-ignore
                public isDouble(path: string): boolean;
                // @ts-ignore
                public getLong(path: string): number;
                // @ts-ignore
                public getLong(path: string, def: number): number;
                // @ts-ignore
                public isLong(path: string): boolean;
                // @ts-ignore
                public getList(path: string): java.util.List;
                // @ts-ignore
                public getList(path: string, def: java.util.List): java.util.List;
                // @ts-ignore
                public isList(path: string): boolean;
                // @ts-ignore
                public getStringList(path: string): java.util.List;
                // @ts-ignore
                public getIntegerList(path: string): java.util.List;
                // @ts-ignore
                public getBooleanList(path: string): java.util.List;
                // @ts-ignore
                public getDoubleList(path: string): java.util.List;
                // @ts-ignore
                public getFloatList(path: string): java.util.List;
                // @ts-ignore
                public getLongList(path: string): java.util.List;
                // @ts-ignore
                public getByteList(path: string): java.util.List;
                // @ts-ignore
                public getCharacterList(path: string): java.util.List;
                // @ts-ignore
                public getShortList(path: string): java.util.List;
                // @ts-ignore
                public getMapList(path: string): java.util.List;
                // @ts-ignore
                public getObject(path: string, clazz: java.lang.Class): java.lang.Object;
                // @ts-ignore
                public getObject(path: string, clazz: java.lang.Class, def: java.lang.Object): java.lang.Object;
                // @ts-ignore
                public getSerializable(path: string, clazz: java.lang.Class): org.bukkit.configuration.serialization.ConfigurationSerializable;
                // @ts-ignore
                public getSerializable(path: string, clazz: java.lang.Class, def: org.bukkit.configuration.serialization.ConfigurationSerializable): org.bukkit.configuration.serialization.ConfigurationSerializable;
                // @ts-ignore
                public getVector(path: string): org.bukkit.util.Vector;
                // @ts-ignore
                public getVector(path: string, def: org.bukkit.util.Vector): org.bukkit.util.Vector;
                // @ts-ignore
                public isVector(path: string): boolean;
                // @ts-ignore
                public getOfflinePlayer(path: string): org.bukkit.OfflinePlayer;
                // @ts-ignore
                public getOfflinePlayer(path: string, def: org.bukkit.OfflinePlayer): org.bukkit.OfflinePlayer;
                // @ts-ignore
                public isOfflinePlayer(path: string): boolean;
                // @ts-ignore
                public getItemStack(path: string): org.bukkit.inventory.ItemStack;
                // @ts-ignore
                public getItemStack(path: string, def: org.bukkit.inventory.ItemStack): org.bukkit.inventory.ItemStack;
                // @ts-ignore
                public isItemStack(path: string): boolean;
                // @ts-ignore
                public getColor(path: string): org.bukkit.Color;
                // @ts-ignore
                public getColor(path: string, def: org.bukkit.Color): org.bukkit.Color;
                // @ts-ignore
                public isColor(path: string): boolean;
                // @ts-ignore
                public getConfigurationSection(path: string): org.bukkit.configuration.ConfigurationSection;
                // @ts-ignore
                public isConfigurationSection(path: string): boolean;
                // @ts-ignore
                protected isPrimitiveWrapper(input: java.lang.Object): boolean;
                // @ts-ignore
                protected getDefault(path: string): java.lang.Object;
                // @ts-ignore
                protected mapChildrenKeys(output: java.util.Set, section: org.bukkit.configuration.ConfigurationSection, deep: boolean): void;
                // @ts-ignore
                protected mapChildrenValues(output: java.util.Map, section: org.bukkit.configuration.ConfigurationSection, deep: boolean): void;
                /**
                 * Creates a full path to the given {@link ConfigurationSection} from its
                 * root {@link Configuration}.
                 * <p>
                 * You may use this method for any given {@link ConfigurationSection}, not
                 * only {@link MemorySection}.
                 */
                // @ts-ignore
                public static createPath(section: org.bukkit.configuration.ConfigurationSection, key: string): string;
                /**
                 * Creates a relative path to the given {@link ConfigurationSection} from
                 * the given relative section.
                 * <p>
                 * You may use this method for any given {@link ConfigurationSection}, not
                 * only {@link MemorySection}.
                 */
                // @ts-ignore
                public static createPath(section: org.bukkit.configuration.ConfigurationSection, key: string, relativeTo: org.bukkit.configuration.ConfigurationSection): string;
                // @ts-ignore
                public toString(): string;
            }
        }
    }
}
