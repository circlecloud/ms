declare namespace cn {
    namespace nukkit {
        namespace form {
            namespace element {
                // @ts-ignore
                 class ElementDropdown extends cn.nukkit.form.element.Element {
                    // @ts-ignore
                    constructor(text: string)
                    // @ts-ignore
                    constructor(text: string, options: java.util.List)
                    // @ts-ignore
                    constructor(text: string, options: java.util.List, defaultOption: number)
                    // @ts-ignore
                    public getDefaultOptionIndex(): number;
                    // @ts-ignore
                    public setDefaultOptionIndex(index: number): void;
                    // @ts-ignore
                    public getOptions(): java.util.List;
                    // @ts-ignore
                    public getText(): string;
                    // @ts-ignore
                    public setText(text: string): void;
                    // @ts-ignore
                    public addOption(option: string): void;
                    // @ts-ignore
                    public addOption(option: string, isDefault: boolean): void;
                }
            }
        }
    }
}
