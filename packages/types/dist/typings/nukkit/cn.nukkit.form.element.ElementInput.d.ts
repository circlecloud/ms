declare namespace cn {
    namespace nukkit {
        namespace form {
            namespace element {
                // @ts-ignore
                 class ElementInput extends cn.nukkit.form.element.Element {
                    // @ts-ignore
                    constructor(text: string)
                    // @ts-ignore
                    constructor(text: string, placeholder: string)
                    // @ts-ignore
                    constructor(text: string, placeholder: string, defaultText: string)
                    // @ts-ignore
                    public getText(): string;
                    // @ts-ignore
                    public setText(text: string): void;
                    // @ts-ignore
                    public getPlaceHolder(): string;
                    // @ts-ignore
                    public setPlaceHolder(placeholder: string): void;
                    // @ts-ignore
                    public getDefaultText(): string;
                    // @ts-ignore
                    public setDefaultText(defaultText: string): void;
                }
            }
        }
    }
}
