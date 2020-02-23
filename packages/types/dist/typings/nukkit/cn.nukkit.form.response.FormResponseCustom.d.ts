declare namespace cn {
    namespace nukkit {
        namespace form {
            namespace response {
                // @ts-ignore
                 class FormResponseCustom extends cn.nukkit.form.response.FormResponse {
                    // @ts-ignore
                    constructor(responses: java.util.HashMap, dropdownResponses: java.util.HashMap, inputResponses: java.util.HashMap, sliderResponses: java.util.HashMap, stepSliderResponses: java.util.HashMap, toggleResponses: java.util.HashMap, labelResponses: java.util.HashMap)
                    // @ts-ignore
                    public getResponses(): java.util.HashMap;
                    // @ts-ignore
                    public getResponse(id: number): java.lang.Object;
                    // @ts-ignore
                    public getDropdownResponse(id: number): cn.nukkit.form.response.FormResponseData;
                    // @ts-ignore
                    public getInputResponse(id: number): string;
                    // @ts-ignore
                    public getSliderResponse(id: number): number;
                    // @ts-ignore
                    public getStepSliderResponse(id: number): cn.nukkit.form.response.FormResponseData;
                    // @ts-ignore
                    public getToggleResponse(id: number): boolean;
                    // @ts-ignore
                    public getLabelResponse(id: number): string;
                }
            }
        }
    }
}
