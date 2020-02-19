class MessagePart {
    text: string
    color: string
    clickEvent: MessagePartEvent
    hoverEvent: MessagePartEvent
    translate: string
    with: MessagePart[]
    extra: MessagePart[]
}

class MessagePartEvent {
    action: string
    value: string
}

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

let jsonColorMap = {
    "black": '0',
    "dark_blue": '1',
    "dark_green": '2',
    "dark_aqua": '3',
    "dark_red": '4',
    "dark_purple": '5',
    "gold": '6',
    "gray": '7',
    "dark_gray": '8',
    "blue": '9',
    "green": 'a',
    "aqua": 'b',
    "red": 'c',
    "light_purple": 'd',
    "yellow": 'e',
    "white": 'f',
    "obfuscated": 'k',
    "bold": 'l',
    "strikethrough": 'm',
    "underline": 'n',
    "italic": 'o',
    "reset": 'r',
};

function json2text(json: MessagePart): string {
    let temp = "";
    if (json.color) {
        temp += `§${jsonColorMap[json.color]}`
    }
    temp += json.text || json.translate || ''
    if (json.extra) {
        json.extra.forEach((ext) => {
            temp += json2text(ext)
        })
    }
    return temp += '§r'
}

function $(input: any) {
    if (typeof input === "string") {
        input = JSON.parse(input)
    }
    return mcColor2ANSI(json2text(input) + '§r')
}

export {
    json2text,
    mcColor2ANSI,
    $
}