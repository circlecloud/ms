let editor
let codeStorageKey = "MiaoScript:code";

let monaco_path = 'https://cdn.jsdelivr.net/npm/monaco-editor@0.18.1/min'
require.config({ paths: { 'vs': monaco_path + '/vs' } });
window.MonacoEnvironment = { getWorkerUrl: () => proxy };
let proxy = URL.createObjectURL(new Blob([`
	self.MonacoEnvironment = {
        baseUrl: '${monaco_path}/'
    };
    importScripts('${monaco_path}/vs/base/worker/workerMain.js');
`], { type: 'text/javascript' }));

require(["vs/editor/editor.main"], function() {
    if (main.type !== 'unknow') {
        let ts_d_src = `https://cdn.jsdelivr.net/gh/circlecloud/ms@master/packages/${main.type}/src/typings`
        $.get(`${ts_d_src}/index.ts`, (res) => {
            monaco.languages.typescript.javascriptDefaults.addExtraLib(res, 'file:///src/typings/index.ts')
            let classes = res.split('\n').map(line => line.match(/.*\.\/(.*)".*/)).filter(line => line).map(dts => dts[1])
            main.classes.total = classes.length
            main.classes.loaded = 0
            classes.forEach(fname => {
                $.get(`${ts_d_src}/${fname}`, content => {
                    monaco.languages.typescript.javascriptDefaults.addExtraLib(content, `file:///src/typings/${fname}`)
                    main.classes.loaded++
                })
            })
        })
    }
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
});
function getSelectContent(editor) {
    let selInfo = editor.getSelection();
    return editor.getModel().getLineContent(selInfo.startLineNumber).substr(selInfo.startColumn - 1, selInfo.endColumn - selInfo.startColumn);
}