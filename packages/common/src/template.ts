function Template(tpl: string) {
    var match: RegExpExecArray;
    var code = ['var r=[];'];
    var re = /\{\{\s*([a-zA-Z\.\_0-9()]+)\s*\}\}/m;
    function addLine(text: string) {
        code.push('r.push(\'' + text.replace(/\'/g, '\\\'').replace(/\n/g, '\\n').replace(/\r/g, '\\r') + '\');');
    };
    while (match = re.exec(tpl)) {
        if (match.index > 0) {
            addLine(tpl.slice(0, match.index));
        }
        code.push('r.push(this.' + match[1] + ');');
        tpl = tpl.substring(match.index + match[0].length);
    }
    addLine(tpl);
    code.push('return r.join(\'\');');
    // 创建函数:
    var fn = new Function(code.join('\n'));
    // 用render()调用函数并绑定this参数：
    this.render = function(model) {
        return fn.apply(model);
    };
}

export = {
    create: function(tpl: string) {
        return new Template(tpl);
    }
}
