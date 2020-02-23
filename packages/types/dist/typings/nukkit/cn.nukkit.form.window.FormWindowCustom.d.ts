declare namespace cn {
    namespace nukkit {
        namespace form {
            namespace window {
                // @ts-ignore
                 class FormWindowCustom extends cn.nukkit.form.window.FormWindow {
                    // @ts-ignore
                    constructor(title: string)
                    // @ts-ignore
                    constructor(title: string, contents: java.util.List)
                    // @ts-ignore
                    constructor(title: string, contents: java.util.List, icon: string)
                    // @ts-ignore
                    constructor(title: string, contents: java.util.List, icon: cn.nukkit.form.element.ElementButtonImageData)
                    // @ts-ignore
                    public getTitle(): string;
                    // @ts-ignore
                    public setTitle(title: string): void;
                    // @ts-ignore
                    public getElements(): java.util.List;
                    // @ts-ignore
                    public addElement(element: cn.nukkit.form.element.Element): void;
                    // @ts-ignore
                    public getIcon(): cn.nukkit.form.element.ElementButtonImageData;
                    // @ts-ignore
                    public setIcon(icon: string): void;
                    // @ts-ignore
                    public setIcon(icon: cn.nukkit.form.element.ElementButtonImageData): void;
                    // @ts-ignore
                    public getResponse(): cn.nukkit.form.response.FormResponseCustom;
                    // @ts-ignore
                    public setResponse(data: string): void;
                    /**
                     * Set Elements from Response
                     * Used on ServerSettings Form Response. After players set settings, we need to sync these settings to the server.
                     */
                    // @ts-ignore
                    public setElementsFromResponse(): void;
                }
            }
        }
    }
}
