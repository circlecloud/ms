declare namespace cn {
    namespace nukkit {
        namespace utils {
            // @ts-ignore
             class Config extends java.lang.Object {
                /**
                 * Constructor for Config instance with undefined file object
                 */
                // @ts-ignore
                constructor(type: number)
                /**
                 * Constructor for Config (YAML) instance with undefined file object
                 */
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(file: string)
                // @ts-ignore
                constructor(file: java.io.File)
                // @ts-ignore
                constructor(file: string, type: number)
                // @ts-ignore
                constructor(file: java.io.File, type: number)
                // @ts-ignore
                constructor(file: string, type: number, defaultMap: java.util.LinkedHashMap)
                // @ts-ignore
                constructor(file: string, type: number, defaultMap: cn.nukkit.utils.ConfigSection)
                // @ts-ignore
                constructor(file: java.io.File, type: number, defaultMap: cn.nukkit.utils.ConfigSection)
                // @ts-ignore
                constructor(file: java.io.File, type: number, defaultMap: java.util.LinkedHashMap)
                // @ts-ignore
                public static DETECT: number;
                // @ts-ignore
                public static PROPERTIES: number;
                // @ts-ignore
                public static CNF: number;
                // @ts-ignore
                public static JSON: number;
                // @ts-ignore
                public static YAML: number;
                // @ts-ignore
                public static ENUM: number;
                // @ts-ignore
                public static ENUMERATION: number;
                // @ts-ignore
                public static format: java.util.Map;
                // @ts-ignore
                public reload(): void;
                // @ts-ignore
                public load(file: string): boolean;
                // @ts-ignore
                public load(file: string, type: number): boolean;
                // @ts-ignore
                public load(file: string, type: number, defaultMap: cn.nukkit.utils.ConfigSection): boolean;
                // @ts-ignore
                public load(inputStream: java.io.InputStream): boolean;
                // @ts-ignore
                public check(): boolean;
                // @ts-ignore
                public isCorrect(): boolean;
                /**
                 * Save configuration into provided file. Internal file object will be set to new file.
                 */
                // @ts-ignore
                public save(file: java.io.File, async: boolean): boolean;
                // @ts-ignore
                public save(file: java.io.File): boolean;
                // @ts-ignore
                public save(): boolean;
                // @ts-ignore
                public save(async: java.lang.Boolean): boolean;
                // @ts-ignore
                public set(key: string, value: java.lang.Object): void;
                // @ts-ignore
                public get(key: string): java.lang.Object;
                // @ts-ignore
                public get(key: string, defaultValue: java.lang.Object): java.lang.Object;
                // @ts-ignore
                public getSection(key: string): cn.nukkit.utils.ConfigSection;
                // @ts-ignore
                public isSection(key: string): boolean;
                // @ts-ignore
                public getSections(key: string): cn.nukkit.utils.ConfigSection;
                // @ts-ignore
                public getSections(): cn.nukkit.utils.ConfigSection;
                // @ts-ignore
                public getInt(key: string): number;
                // @ts-ignore
                public getInt(key: string, defaultValue: number): number;
                // @ts-ignore
                public isInt(key: string): boolean;
                // @ts-ignore
                public getLong(key: string): number;
                // @ts-ignore
                public getLong(key: string, defaultValue: number): number;
                // @ts-ignore
                public isLong(key: string): boolean;
                // @ts-ignore
                public getDouble(key: string): number;
                // @ts-ignore
                public getDouble(key: string, defaultValue: number): number;
                // @ts-ignore
                public isDouble(key: string): boolean;
                // @ts-ignore
                public getString(key: string): string;
                // @ts-ignore
                public getString(key: string, defaultValue: string): string;
                // @ts-ignore
                public isString(key: string): boolean;
                // @ts-ignore
                public getBoolean(key: string): boolean;
                // @ts-ignore
                public getBoolean(key: string, defaultValue: boolean): boolean;
                // @ts-ignore
                public isBoolean(key: string): boolean;
                // @ts-ignore
                public getList(key: string): java.util.List;
                // @ts-ignore
                public getList(key: string, defaultList: java.util.List): java.util.List;
                // @ts-ignore
                public isList(key: string): boolean;
                // @ts-ignore
                public getStringList(key: string): java.util.List;
                // @ts-ignore
                public getIntegerList(key: string): java.util.List;
                // @ts-ignore
                public getBooleanList(key: string): java.util.List;
                // @ts-ignore
                public getDoubleList(key: string): java.util.List;
                // @ts-ignore
                public getFloatList(key: string): java.util.List;
                // @ts-ignore
                public getLongList(key: string): java.util.List;
                // @ts-ignore
                public getByteList(key: string): java.util.List;
                // @ts-ignore
                public getCharacterList(key: string): java.util.List;
                // @ts-ignore
                public getShortList(key: string): java.util.List;
                // @ts-ignore
                public getMapList(key: string): java.util.List;
                // @ts-ignore
                public setAll(map: java.util.LinkedHashMap): void;
                // @ts-ignore
                public setAll(section: cn.nukkit.utils.ConfigSection): void;
                // @ts-ignore
                public exists(key: string): boolean;
                // @ts-ignore
                public exists(key: string, ignoreCase: boolean): boolean;
                // @ts-ignore
                public remove(key: string): void;
                // @ts-ignore
                public getAll(): java.util.Map;
                /**
                 * Get root (main) config section of the Config
                 */
                // @ts-ignore
                public getRootSection(): cn.nukkit.utils.ConfigSection;
                // @ts-ignore
                public setDefault(map: java.util.LinkedHashMap): number;
                // @ts-ignore
                public setDefault(map: cn.nukkit.utils.ConfigSection): number;
                // @ts-ignore
                public getNested(key: string): java.lang.Object;
                // @ts-ignore
                public getNested(key: string, defaultValue: java.lang.Object): java.lang.Object;
                // @ts-ignore
                public getNestedAs(key: string, type: java.lang.Class): java.lang.Object;
                // @ts-ignore
                public removeNested(key: string): void;
                // @ts-ignore
                public getKeys(): java.util.Set;
                // @ts-ignore
                public getKeys(child: boolean): java.util.Set;
            }
        }
    }
}
