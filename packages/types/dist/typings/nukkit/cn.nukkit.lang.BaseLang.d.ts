declare namespace cn {
    namespace nukkit {
        namespace lang {
            // @ts-ignore
             class BaseLang extends java.lang.Object {
                // @ts-ignore
                constructor(lang: string)
                // @ts-ignore
                constructor(lang: string, path: string)
                // @ts-ignore
                constructor(lang: string, path: string, fallback: string)
                // @ts-ignore
                public static FALLBACK_LANGUAGE: string;
                // @ts-ignore
                protected langName: string;
                // @ts-ignore
                protected lang: java.util.Map;
                // @ts-ignore
                protected fallbackLang: java.util.Map;
                // @ts-ignore
                public getLangMap(): java.util.Map;
                // @ts-ignore
                public getFallbackLangMap(): java.util.Map;
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                public getLang(): string;
                // @ts-ignore
                protected loadLang(path: string): java.util.Map;
                // @ts-ignore
                protected loadLang(stream: java.io.InputStream): java.util.Map;
                // @ts-ignore
                public translateString(str: string): string;
                // @ts-ignore
                public translateString(str: string, params: string): string;
                // @ts-ignore
                public translateString(str: string, params: java.lang.Object): string;
                // @ts-ignore
                public translateString(str: string, param: string, onlyPrefix: string): string;
                // @ts-ignore
                public translateString(str: string, params: string, onlyPrefix: string): string;
                // @ts-ignore
                public translate(c: cn.nukkit.lang.TextContainer): string;
                // @ts-ignore
                public internalGet(id: string): string;
                // @ts-ignore
                public get(id: string): string;
                // @ts-ignore
                protected parseTranslation(text: string): string;
                // @ts-ignore
                protected parseTranslation(text: string, onlyPrefix: string): string;
            }
        }
    }
}
