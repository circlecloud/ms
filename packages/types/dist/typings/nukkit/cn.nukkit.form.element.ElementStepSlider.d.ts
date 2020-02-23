declare namespace cn {
    namespace nukkit {
        namespace form {
            namespace element {
                // @ts-ignore
                 class ElementStepSlider extends cn.nukkit.form.element.Element {
                    // @ts-ignore
                    constructor(text: string)
                    // @ts-ignore
                    constructor(text: string, steps: java.util.List)
                    // @ts-ignore
                    constructor(text: string, steps: java.util.List, defaultStep: number)
                    // @ts-ignore
                    public getDefaultStepIndex(): number;
                    // @ts-ignore
                    public setDefaultOptionIndex(index: number): void;
                    // @ts-ignore
                    public getText(): string;
                    // @ts-ignore
                    public setText(text: string): void;
                    // @ts-ignore
                    public getSteps(): java.util.List;
                    // @ts-ignore
                    public addStep(step: string): void;
                    // @ts-ignore
                    public addStep(step: string, isDefault: boolean): void;
                }
            }
        }
    }
}
