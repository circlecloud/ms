declare namespace cn {
    namespace nukkit {
        namespace form {
            namespace window {
                // @ts-ignore
                 class FormWindowSimple extends cn.nukkit.form.window.FormWindow {
                    // @ts-ignore
                    constructor(title: string, content: string)
                    // @ts-ignore
                    constructor(title: string, content: string, buttons: java.util.List)
                    // @ts-ignore
                    public getTitle(): string;
                    // @ts-ignore
                    public setTitle(title: string): void;
                    // @ts-ignore
                    public getContent(): string;
                    // @ts-ignore
                    public setContent(content: string): void;
                    // @ts-ignore
                    public getButtons(): java.util.List;
                    // @ts-ignore
                    public addButton(button: cn.nukkit.form.element.ElementButton): void;
                    // @ts-ignore
                    public getResponse(): cn.nukkit.form.response.FormResponseSimple;
                    // @ts-ignore
                    public setResponse(data: string): void;
                }
            }
        }
    }
}
