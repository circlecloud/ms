import * as ts from 'typescript'

let scan = ts.createScanner(ts.ScriptTarget.ES5, true, ts.LanguageVariant.Standard)
scan.setText('let a = 1')
scan.tryScan(() => { })