declare namespace cn {
    namespace nukkit {
        namespace utils {
            // @ts-ignore
             class ConfigSection extends java.util.LinkedHashMap {
                /**
                 * Empty ConfigSection constructor
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructor of ConfigSection that contains initial key/value data
                 */
                // @ts-ignore
                constructor(key: string, value: java.lang.Object)
                /**
                 * Constructor of ConfigSection, based on values stored in map.
                 */
                // @ts-ignore
                constructor(map: java.util.LinkedHashMap)
                /**
                 * Get root section as LinkedHashMap
                 */
                // @ts-ignore
                public getAllMap(): java.util.Map;
                /**
                 * Get new instance of config section
                 */
                // @ts-ignore
                public getAll(): cn.nukkit.utils.ConfigSection;
                /**
                 * Get object by key. If section does not contain value, return null
                 */
                // @ts-ignore
                public get(key: string): java.lang.Object;
                /**
                 * Get object by key. If section does not contain value, return default value
                 */
                // @ts-ignore
                public get(key: string, defaultValue: java.lang.Object): java.lang.Object;
                /**
                 * Store value into config section
                 */
                // @ts-ignore
                public set(key: string, value: java.lang.Object): void;
                /**
                 * Check type of section element defined by key. Return true this element is ConfigSection
                 */
                // @ts-ignore
                public isSection(key: string): boolean;
                /**
                 * Get config section element defined by key
                 */
                // @ts-ignore
                public getSection(key: string): cn.nukkit.utils.ConfigSection;
                /**
                 * Get all ConfigSections in root path.
                 * Example config:
                 * a1:
                 * b1:
                 * c1:
                 * c2:
                 * a2:
                 * b2:
                 * c3:
                 * c4:
                 * a3: true
                 * a4: "hello"
                 * a5: 100
                 * <p>
                 * getSections() will return new ConfigSection, that contains sections a1 and a2 only.
                 */
                // @ts-ignore
                public getSections(): cn.nukkit.utils.ConfigSection;
                /**
                 * Get sections (and only sections) from provided path
                 */
                // @ts-ignore
                public getSections(key: string): cn.nukkit.utils.ConfigSection;
                /**
                 * Get int value of config section element
                 */
                // @ts-ignore
                public getInt(key: string): number;
                /**
                 * Get int value of config section element
                 */
                // @ts-ignore
                public getInt(key: string, defaultValue: number): number;
                /**
                 * Check type of section element defined by key. Return true this element is Integer
                 */
                // @ts-ignore
                public isInt(key: string): boolean;
                /**
                 * Get long value of config section element
                 */
                // @ts-ignore
                public getLong(key: string): number;
                /**
                 * Get long value of config section element
                 */
                // @ts-ignore
                public getLong(key: string, defaultValue: number): number;
                /**
                 * Check type of section element defined by key. Return true this element is Long
                 */
                // @ts-ignore
                public isLong(key: string): boolean;
                /**
                 * Get double value of config section element
                 */
                // @ts-ignore
                public getDouble(key: string): number;
                /**
                 * Get double value of config section element
                 */
                // @ts-ignore
                public getDouble(key: string, defaultValue: number): number;
                /**
                 * Check type of section element defined by key. Return true this element is Double
                 */
                // @ts-ignore
                public isDouble(key: string): boolean;
                /**
                 * Get String value of config section element
                 */
                // @ts-ignore
                public getString(key: string): string;
                /**
                 * Get String value of config section element
                 */
                // @ts-ignore
                public getString(key: string, defaultValue: string): string;
                /**
                 * Check type of section element defined by key. Return true this element is String
                 */
                // @ts-ignore
                public isString(key: string): boolean;
                /**
                 * Get boolean value of config section element
                 */
                // @ts-ignore
                public getBoolean(key: string): boolean;
                /**
                 * Get boolean value of config section element
                 */
                // @ts-ignore
                public getBoolean(key: string, defaultValue: boolean): boolean;
                /**
                 * Check type of section element defined by key. Return true this element is Integer
                 */
                // @ts-ignore
                public isBoolean(key: string): boolean;
                /**
                 * Get List value of config section element
                 */
                // @ts-ignore
                public getList(key: string): java.util.List;
                /**
                 * Get List value of config section element
                 */
                // @ts-ignore
                public getList(key: string, defaultList: java.util.List): java.util.List;
                /**
                 * Check type of section element defined by key. Return true this element is List
                 */
                // @ts-ignore
                public isList(key: string): boolean;
                /**
                 * Get String List value of config section element
                 */
                // @ts-ignore
                public getStringList(key: string): java.util.List;
                /**
                 * Get Integer List value of config section element
                 */
                // @ts-ignore
                public getIntegerList(key: string): java.util.List;
                /**
                 * Get Boolean List value of config section element
                 */
                // @ts-ignore
                public getBooleanList(key: string): java.util.List;
                /**
                 * Get Double List value of config section element
                 */
                // @ts-ignore
                public getDoubleList(key: string): java.util.List;
                /**
                 * Get Float List value of config section element
                 */
                // @ts-ignore
                public getFloatList(key: string): java.util.List;
                /**
                 * Get Long List value of config section element
                 */
                // @ts-ignore
                public getLongList(key: string): java.util.List;
                /**
                 * Get Byte List value of config section element
                 */
                // @ts-ignore
                public getByteList(key: string): java.util.List;
                /**
                 * Get Character List value of config section element
                 */
                // @ts-ignore
                public getCharacterList(key: string): java.util.List;
                /**
                 * Get Short List value of config section element
                 */
                // @ts-ignore
                public getShortList(key: string): java.util.List;
                /**
                 * Get Map List value of config section element
                 */
                // @ts-ignore
                public getMapList(key: string): java.util.List;
                /**
                 * Check existence of config section element
                 */
                // @ts-ignore
                public exists(key: string, ignoreCase: boolean): boolean;
                /**
                 * Check existence of config section element
                 */
                // @ts-ignore
                public exists(key: string): boolean;
                /**
                 * Remove config section element
                 */
                // @ts-ignore
                public remove(key: string): void;
                /**
                 * Get all keys
                 */
                // @ts-ignore
                public getKeys(child: boolean): java.util.Set;
                /**
                 * Get all keys
                 */
                // @ts-ignore
                public getKeys(): java.util.Set;
            }
        }
    }
}
