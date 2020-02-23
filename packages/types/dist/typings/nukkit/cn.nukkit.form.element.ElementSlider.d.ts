declare namespace cn {
    namespace nukkit {
        namespace form {
            namespace element {
                // @ts-ignore
                 class ElementSlider extends cn.nukkit.form.element.Element {
                    // @ts-ignore
                    constructor(text: string, min: number, max: number)
                    // @ts-ignore
                    constructor(text: string, min: number, max: number, step: number)
                    // @ts-ignore
                    constructor(text: string, min: number, max: number, step: number, defaultValue: number)
                    // @ts-ignore
                    public getText(): string;
                    // @ts-ignore
                    public setText(text: string): void;
                    // @ts-ignore
                    public getMin(): number;
                    // @ts-ignore
                    public setMin(min: number): void;
                    // @ts-ignore
                    public getMax(): number;
                    // @ts-ignore
                    public setMax(max: number): void;
                    // @ts-ignore
                    public getStep(): number;
                    // @ts-ignore
                    public setStep(step: number): void;
                    // @ts-ignore
                    public getDefaultValue(): number;
                    // @ts-ignore
                    public setDefaultValue(defaultValue: number): void;
                }
            }
        }
    }
}
