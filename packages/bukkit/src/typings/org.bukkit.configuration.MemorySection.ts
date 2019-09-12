declare namespace org {
    namespace bukkit {
        namespace configuration {
            class MemorySection {
                /**
                 * Creates an empty MemorySection for use as a root {@link Configuration}
                 * section.
                 * <p>
                 * Note that calling this without being yourself a {@link Configuration}
                 * will throw an exception!
                 */
                constructor()
                /**
                 * Creates an empty MemorySection with the specified parent and path.
                 */
                constructor(parent: org.bukkit.configuration.ConfigurationSection, path: string)
                public getKeys(deep: boolean): any[] /*java.util.Set*/;
                public getValues(deep: boolean): Map<any, any> /*java.util.Map*/;
                public contains(path: string): boolean;
                public contains(path: string, ignoreDefault: boolean): boolean;
                public isSet(path: string): boolean;
                public getCurrentPath(): string;
                public getName(): string;
                public getRoot(): org.bukkit.configuration.Configuration;
                public getParent(): org.bukkit.configuration.ConfigurationSection;
                public addDefault(path: string, value: any): void;
                public getDefaultSection(): org.bukkit.configuration.ConfigurationSection;
                public set(path: string, value: any): void;
                public get(path: string): any;
                public get(path: string, def: any): any;
                public createSection(path: string): org.bukkit.configuration.ConfigurationSection;
                public createSection(path: string, map: Map<any, any> /*java.util.Map*/): org.bukkit.configuration.ConfigurationSection;
                public getString(path: string): string;
                public getString(path: string, def: string): string;
                public isString(path: string): boolean;
                public getInt(path: string): number;
                public getInt(path: string, def: number): number;
                public isInt(path: string): boolean;
                public getBoolean(path: string): boolean;
                public getBoolean(path: string, def: boolean): boolean;
                public isBoolean(path: string): boolean;
                public getDouble(path: string): number;
                public getDouble(path: string, def: number): number;
                public isDouble(path: string): boolean;
                public getLong(path: string): number;
                public getLong(path: string, def: number): number;
                public isLong(path: string): boolean;
                public getList(path: string): any[] /*java.util.List*/;
                public getList(path: string, def: any[] /*java.util.List*/): any[] /*java.util.List*/;
                public isList(path: string): boolean;
                public getStringList(path: string): any[] /*java.util.List*/;
                public getIntegerList(path: string): any[] /*java.util.List*/;
                public getBooleanList(path: string): any[] /*java.util.List*/;
                public getDoubleList(path: string): any[] /*java.util.List*/;
                public getFloatList(path: string): any[] /*java.util.List*/;
                public getLongList(path: string): any[] /*java.util.List*/;
                public getByteList(path: string): any[] /*java.util.List*/;
                public getCharacterList(path: string): any[] /*java.util.List*/;
                public getShortList(path: string): any[] /*java.util.List*/;
                public getMapList(path: string): any[] /*java.util.List*/;
                public getObject(path: string, clazz: any): any;
                public getObject(path: string, clazz: any, def: any): any;
                public getSerializable(path: string, clazz: any): org.bukkit.configuration.serialization.ConfigurationSerializable;
                public getSerializable(path: string, clazz: any, def: org.bukkit.configuration.serialization.ConfigurationSerializable): org.bukkit.configuration.serialization.ConfigurationSerializable;
                public getVector(path: string): org.bukkit.util.Vector;
                public getVector(path: string, def: org.bukkit.util.Vector): org.bukkit.util.Vector;
                public isVector(path: string): boolean;
                public getOfflinePlayer(path: string): org.bukkit.OfflinePlayer;
                public getOfflinePlayer(path: string, def: org.bukkit.OfflinePlayer): org.bukkit.OfflinePlayer;
                public isOfflinePlayer(path: string): boolean;
                public getItemStack(path: string): org.bukkit.inventory.ItemStack;
                public getItemStack(path: string, def: org.bukkit.inventory.ItemStack): org.bukkit.inventory.ItemStack;
                public isItemStack(path: string): boolean;
                public getColor(path: string): org.bukkit.Color;
                public getColor(path: string, def: org.bukkit.Color): org.bukkit.Color;
                public isColor(path: string): boolean;
                public getConfigurationSection(path: string): org.bukkit.configuration.ConfigurationSection;
                public isConfigurationSection(path: string): boolean;
                protected isPrimitiveWrapper(input: any): boolean;
                protected getDefault(path: string): any;
                protected mapChildrenKeys(output: any[] /*java.util.Set*/, section: org.bukkit.configuration.ConfigurationSection, deep: boolean): void;
                protected mapChildrenValues(output: Map<any, any> /*java.util.Map*/, section: org.bukkit.configuration.ConfigurationSection, deep: boolean): void;
                /**
                 * Creates a full path to the given {@link ConfigurationSection} from its
                 * root {@link Configuration}.
                 * <p>
                 * You may use this method for any given {@link ConfigurationSection}, not
                 * only {@link MemorySection}.
                 */
                public static createPath(section: org.bukkit.configuration.ConfigurationSection, key: string): string;
                /**
                 * Creates a relative path to the given {@link ConfigurationSection} from
                 * the given relative section.
                 * <p>
                 * You may use this method for any given {@link ConfigurationSection}, not
                 * only {@link MemorySection}.
                 */
                public static createPath(section: org.bukkit.configuration.ConfigurationSection, key: string, relativeTo: org.bukkit.configuration.ConfigurationSection): string;
                public toString(): string;
            }
        }
    }
}
