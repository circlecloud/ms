let editor
let codeStorageKey = "MiaoScript:code";

let monaco_path = 'https://cdn.jsdelivr.net/npm/monaco-editor@0.18.1/min'
require.config({ paths: { 'vs': monaco_path + '/vs' } });
window.MonacoEnvironment = { getWorkerUrl: () => proxy };
let proxy = URL.createObjectURL(new Blob([`self.MonacoEnvironment = {baseUrl: '${monaco_path}/'};
importScripts('${monaco_path}/vs/base/worker/workerMain.js');`], { type: 'text/javascript' }));

function loadExtraLibs(ts_d_src, filter) {
    let count = 0;
    axios.get(`${ts_d_src}/index.d.ts`).then(async result => {
        monaco.languages.typescript.javascriptDefaults.addExtraLib(result.data, 'file:///src/typings/index.d.ts')
        let classes = result.data.split('\n').map(line => line.match(/.*\.\/(.*)".*/)).filter(line => line).map(dts => dts[1])
        if (filter) {
            classes = classes.filter(line => filter(line))
        }
        main.classes.total += classes.length
        for (let fname of classes) {
            if (count++ % 50 == 0) { await axios.get(`${ts_d_src}/${fname}`) }
            loadExtraLib(`${ts_d_src}/${fname}`, `file:///src/typings/${fname}`)
        }
    })
}

function loadExtraLib(url, file) {
    axios.get(url).then(result => monaco.languages.typescript.javascriptDefaults.addExtraLib(result.data, file)).finally(() => main.classes.loaded++)
}

require(["vs/editor/editor.main"], async function() {
    main.classes.total = 0
    main.classes.loaded = 0
    editor = monaco.editor.create(document.getElementById('editor'), {
        value: window.localStorage.getItem(codeStorageKey) || 'org.bukkit.Bukkit.server.version',
        language: 'javascript',
        automaticLayout: true,
        scrollBeyondLastLine: false,
        theme: 'vs-dark'
    });
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_S, function() {
        window.localStorage.setItem(codeStorageKey, editor.getValue())
        showMessenger('代码保存成功!')
    })
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_R, function() {
        main.send('execCode', getSelectContent(editor) || editor.getValue())
    })
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_E, function() {
        main.send('execCommand', getSelectContent(editor))
    })
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_Q, function() {
        console.log('switch')
    })
    loadExtraLibs(`https://cdn.jsdelivr.net/gh/circlecloud/ms@master/packages/types/dist/typings/jdk`, (line) => line.startsWith('java.lang'))
    if (main.type !== 'unknow') {
        loadExtraLibs(`https://cdn.jsdelivr.net/gh/circlecloud/ms@master/packages/types/dist/typings/${main.type}`)
    }
});
function getSelectContent(editor) {
    let selInfo = editor.getSelection();
    return editor.getModel().getLineContent(selInfo.startLineNumber).substr(selInfo.startColumn - 1, selInfo.endColumn - selInfo.startColumn);
}