declare namespace cn {
    namespace nukkit {
        namespace lang {
            // @ts-ignore
             class TranslationContainer extends cn.nukkit.lang.TextContainer {
                // @ts-ignore
                constructor(text: string)
                // @ts-ignore
                constructor(text: string, params: string)
                // @ts-ignore
                constructor(text: string, params: string)
                // @ts-ignore
                protected params: java.lang.String[];
                // @ts-ignore
                public getParameters(): java.lang.String[];
                // @ts-ignore
                public setParameters(params: string): void;
                // @ts-ignore
                public getParameter(i: number): string;
                // @ts-ignore
                public setParameter(i: number, str: string): void;
                // @ts-ignore
                public clone(): cn.nukkit.lang.TranslationContainer;
            }
        }
    }
}
