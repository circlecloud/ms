declare namespace cn {
    namespace nukkit {
        namespace form {
            namespace window {
                // @ts-ignore
                 class FormWindowModal extends cn.nukkit.form.window.FormWindow {
                    // @ts-ignore
                    constructor(title: string, content: string, trueButtonText: string, falseButtonText: string)
                    // @ts-ignore
                    public getTitle(): string;
                    // @ts-ignore
                    public setTitle(title: string): void;
                    // @ts-ignore
                    public getContent(): string;
                    // @ts-ignore
                    public setContent(content: string): void;
                    // @ts-ignore
                    public getButton1(): string;
                    // @ts-ignore
                    public setButton1(button1: string): void;
                    // @ts-ignore
                    public getButton2(): string;
                    // @ts-ignore
                    public setButton2(button2: string): void;
                    // @ts-ignore
                    public getResponse(): cn.nukkit.form.response.FormResponseModal;
                    // @ts-ignore
                    public setResponse(data: string): void;
                }
            }
        }
    }
}
