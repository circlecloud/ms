Terminal.applyAddon(fit);
var term = new Terminal();
avalon.ready(() => {
    term.open(document.getElementById('terminal'));
    window.onresize = () => {
        term.fit();
    }
    window.onresize()
})
term.on('data', (data) => {
    if (data == '\r') {
        term.writeln(data)
    }
});
term.attachCustomKeyEventHandler(e => {
    if (e.ctrlKey && e.key == 'c' && term.hasSelection()) {
        showMessenger('内容已复制到粘贴板')
        return false;
    }
    if (e.ctrlKey && e.key == 'v') {
        return false;
    }
    return true;
})
var colorMap = []
colorMap['0'] = '38;5;0'
colorMap['1'] = '38;5;4'
colorMap['2'] = '38;5;2'
colorMap['3'] = '38;5;6'
colorMap['4'] = '38;5;1'
colorMap['5'] = '38;5;5'
colorMap['6'] = '38;5;3'
colorMap['7'] = '38;5;7'
colorMap['8'] = '38;5;8'
colorMap['9'] = '38;5;12'
colorMap['a'] = '38;5;10'
colorMap['b'] = '38;5;14'
colorMap['c'] = '38;5;9'
colorMap['d'] = '38;5;13'
colorMap['e'] = '38;5;11'
colorMap['f'] = '38;5;15'
colorMap['r'] = '0'
colorMap['l'] = '1'
colorMap['n'] = '4'
var regexMap = []
for (const c in colorMap) {
    regexMap[colorMap[c]] = new RegExp(`§${c}`, "g")
}
function mcColor2ANSI(str) {
    for (const regex in regexMap) {
        str = str.replace(regexMap[regex], `\u001b[${regex}m`)
    }
    return str;
}