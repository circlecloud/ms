class ChatMessagePart {
    private internal: any = {}

    get text() {
        return this.internal.text
    }
    set text(text: string) {
        this.internal.text = text
    }

    click(action: string, value: string) {
        this.internal.clickEvent = { action, value }
    }

    hover(action: string, value: string) {
        this.internal.hoverEvent = { action, value }
    }

    convert() {
        return this.internal;
    }
}

class Tellraw {
    static duplicateChar = '§卐'
    static create() {
        return new Tellraw().then(Tellraw.duplicateChar);
    }

    private cache: string = '';
    private parts = [new ChatMessagePart()];

    then(part: ChatMessagePart | string) {
        if (typeof part === "string") {
            var newPart = new ChatMessagePart();
            newPart.text = part
            this.then(newPart);
            return this;
        }
        var last = this.latest();
        if (!last.text) {
            last.text = part.text;
        } else {
            this.parts.push(part);
        }
        this.cache = null;
    }

    text(text: string) {
        this.latest().text = text;
        return this;
    }

    tip(text: string) {
        this.latest().hover("show_text", text);
        return this;
    }

    item(text: string) {
        this.latest().hover("show_item", text);
        return this;
    }

    command(command: string) {
        this.latest().click("run_command", command);
        return this;
    }

    suggest(url: string) {
        this.latest().click("suggest_command", url);
        return this;
    }

    file(path: string) {
        this.latest().click("open_file", path);
        return this;
    }

    link(url: string) {
        this.latest().click("open_url", url);
        return this;
    }

    latest() {
        return this.parts[this.parts.length - 1];
    }

    json() {
        if (!this.cache) {
            var temp = [];
            this.parts.forEach(function(t) {
                temp.push(t.convert());
            });
            this.cache = JSON.stringify(temp);
            console.trace(this.cache);
        }
        return this.cache;
    }
}

export default Tellraw
