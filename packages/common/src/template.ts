class Template {
    private renderFunc: Function;

    constructor(tpl: string) {
        var match: RegExpExecArray;
        var code = ['var r=[];'];
        var re = /\{\{\s*([a-zA-Z\.\_0-9()]+)\s*\}\}/m;

        while (match = re.exec(tpl)) {
            if (match.index > 0) {
                this.addLine(code, tpl.slice(0, match.index));
            }
            code.push('r.push(this.' + match[1] + ');');
            tpl = tpl.substring(match.index + match[0].length);
        }
        this.addLine(code, tpl);
        code.push('return r.join(\'\');');
        // 创建函数:
        this.renderFunc = new Function(code.join('\n'));
    }
    addLine(code: string[], text: string) {
        code.push('r.push(\'' + text.replace(/\'/g, '\\\'').replace(/\n/g, '\\n').replace(/\r/g, '\\r') + '\');');
    }
    // 用render()调用函数并绑定this参数：
    render(model: object) {
        return this.renderFunc.apply(model);
    }
}

export = {
    create: function(tpl: string) {
        return new Template(tpl);
    }
}
