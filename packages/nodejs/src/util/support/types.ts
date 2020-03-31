// Currently in sync with Node.js lib/internal/util/types.js
// https://github.com/nodejs/node/commit/112cc7c27551254aa2b17098fb774867f05ed0d9

'use strict';

var isBuffer = require('./isBuffer');

var isArgumentsObject = require('is-arguments');
var isGeneratorFunction = require('is-generator-function');

function uncurryThis(f) {
    return f.call.bind(f);
}

var BigIntSupported = typeof BigInt !== 'undefined';
var SymbolSupported = typeof Symbol !== 'undefined';
var SymbolToStringTagSupported = SymbolSupported && typeof Symbol.toStringTag !== 'undefined';
var Uint8ArraySupported = typeof Uint8Array !== 'undefined';
var ArrayBufferSupported = typeof ArrayBuffer !== 'undefined';

if (Uint8ArraySupported && SymbolToStringTagSupported) {
    var TypedArrayPrototype = Object.getPrototypeOf(Uint8Array.prototype);

    var TypedArrayProto_toStringTag =
        uncurryThis(
            Object.getOwnPropertyDescriptor(TypedArrayPrototype,
                Symbol.toStringTag).get);

}

var ObjectToString = uncurryThis(Object.prototype.toString);

var numberValue = uncurryThis(Number.prototype.valueOf);
var stringValue = uncurryThis(String.prototype.valueOf);
var booleanValue = uncurryThis(Boolean.prototype.valueOf);

if (BigIntSupported) {
    var bigIntValue = uncurryThis(BigInt.prototype.valueOf);
}

if (SymbolSupported) {
    var symbolValue = uncurryThis(Symbol.prototype.valueOf);
}

function checkBoxedPrimitive(value, prototypeValueOf) {
    if (typeof value !== 'object') {
        return false;
    }
    try {
        prototypeValueOf(value);
        return true;
    } catch (e) {
        return false;
    }
}

exports.isArgumentsObject = isArgumentsObject;

exports.isGeneratorFunction = isGeneratorFunction;

// Taken from here and modified for better browser support
// https://github.com/sindresorhus/p-is-promise/blob/cda35a513bda03f977ad5cde3a079d237e82d7ef/index.js
function isPromise(input) {
    return (
        (
            typeof Promise !== 'undefined' &&
            input instanceof Promise
        ) ||
        (
            input !== null &&
            typeof input === 'object' &&
            typeof input.then === 'function' &&
            typeof input.catch === 'function'
        )
    );
}
exports.isPromise = isPromise;

function isArrayBufferView(value) {
    if (ArrayBufferSupported && ArrayBuffer.isView) {
        return ArrayBuffer.isView(value);
    }

    return (
        isTypedArray(value) ||
        isDataView(value)
    );
}
exports.isArrayBufferView = isArrayBufferView;

function isTypedArray(value) {
    if (Uint8ArraySupported && SymbolToStringTagSupported) {
        return TypedArrayProto_toStringTag(value) !== undefined;
    } else {
        return (
            isUint8Array(value) ||
            isUint8ClampedArray(value) ||
            isUint16Array(value) ||
            isUint32Array(value) ||
            isInt8Array(value) ||
            isInt16Array(value) ||
            isInt32Array(value) ||
            isFloat32Array(value) ||
            isFloat64Array(value) ||
            isBigInt64Array(value) ||
            isBigUint64Array(value)
        );
    }
}
exports.isTypedArray = isTypedArray;

function isUint8Array(value) {
    if (Uint8ArraySupported && SymbolToStringTagSupported) {
        return TypedArrayProto_toStringTag(value) === 'Uint8Array';
    } else {
        return (
            ObjectToString(value) === '[object Uint8Array]' ||
            // If it's a Buffer instance _and_ has a `.buffer` property,
            // this is an ArrayBuffer based buffer; thus it's an Uint8Array
            // (Old Node.js had a custom non-Uint8Array implementation)
            isBuffer(value) && value.buffer !== undefined
        );
    }
}
exports.isUint8Array = isUint8Array;

function isUint8ClampedArray(value) {
    if (Uint8ArraySupported && SymbolToStringTagSupported) {
        return TypedArrayProto_toStringTag(value) === 'Uint8ClampedArray';
    } else {
        return ObjectToString(value) === '[object Uint8ClampedArray]';
    }
}
exports.isUint8ClampedArray = isUint8ClampedArray;

function isUint16Array(value) {
    if (Uint8ArraySupported && SymbolToStringTagSupported) {
        return TypedArrayProto_toStringTag(value) === 'Uint16Array';
    } else {
        return ObjectToString(value) === '[object Uint16Array]';
    }
}
exports.isUint16Array = isUint16Array;

function isUint32Array(value) {
    if (Uint8ArraySupported && SymbolToStringTagSupported) {
        return TypedArrayProto_toStringTag(value) === 'Uint32Array';
    } else {
        return ObjectToString(value) === '[object Uint32Array]';
    }
}
exports.isUint32Array = isUint32Array;

function isInt8Array(value) {
    if (Uint8ArraySupported && SymbolToStringTagSupported) {
        return TypedArrayProto_toStringTag(value) === 'Int8Array';
    } else {
        return ObjectToString(value) === '[object Int8Array]';
    }
}
exports.isInt8Array = isInt8Array;

function isInt16Array(value) {
    if (Uint8ArraySupported && SymbolToStringTagSupported) {
        return TypedArrayProto_toStringTag(value) === 'Int16Array';
    } else {
        return ObjectToString(value) === '[object Int16Array]';
    }
}
exports.isInt16Array = isInt16Array;

function isInt32Array(value) {
    if (Uint8ArraySupported && SymbolToStringTagSupported) {
        return TypedArrayProto_toStringTag(value) === 'Int32Array';
    } else {
        return ObjectToString(value) === '[object Int32Array]';
    }
}
exports.isInt32Array = isInt32Array;

function isFloat32Array(value) {
    if (Uint8ArraySupported && SymbolToStringTagSupported) {
        return TypedArrayProto_toStringTag(value) === 'Float32Array';
    } else {
        return ObjectToString(value) === '[object Float32Array]';
    }
}
exports.isFloat32Array = isFloat32Array;

function isFloat64Array(value) {
    if (Uint8ArraySupported && SymbolToStringTagSupported) {
        return TypedArrayProto_toStringTag(value) === 'Float64Array';
    } else {
        return ObjectToString(value) === '[object Float64Array]';
    }
}
exports.isFloat64Array = isFloat64Array;

function isBigInt64Array(value) {
    if (Uint8ArraySupported && SymbolToStringTagSupported) {
        return TypedArrayProto_toStringTag(value) === 'BigInt64Array';
    } else {
        return ObjectToString(value) === '[object BigInt64Array]';
    }
}
exports.isBigInt64Array = isBigInt64Array;

function isBigUint64Array(value) {
    if (Uint8ArraySupported && SymbolToStringTagSupported) {
        return TypedArrayProto_toStringTag(value) === 'BigUint64Array';
    } else {
        return ObjectToString(value) === '[object BigUint64Array]';
    }
}
exports.isBigUint64Array = isBigUint64Array;

function isMapToString(value) {
    return ObjectToString(value) === '[object Map]';
}
isMapToString.working = (
    typeof Map !== 'undefined' &&
    isMapToString(new Map())
);

function isMap(value) {
    if (typeof Map === 'undefined') {
        return false;
    }

    return isMapToString.working
        ? isMapToString(value)
        : value instanceof Map;
}
exports.isMap = isMap;

function isSetToString(value) {
    return ObjectToString(value) === '[object Set]';
}
isSetToString.working = (
    typeof Set !== 'undefined' &&
    isSetToString(new Set())
);
function isSet(value) {
    if (typeof Set === 'undefined') {
        return false;
    }

    return isSetToString.working
        ? isSetToString(value)
        : value instanceof Set;
}
exports.isSet = isSet;

function isWeakMapToString(value) {
    return ObjectToString(value) === '[object WeakMap]';
}
isWeakMapToString.working = (
    typeof WeakMap !== 'undefined' &&
    isWeakMapToString(new WeakMap())
);
function isWeakMap(value) {
    if (typeof WeakMap === 'undefined') {
        return false;
    }

    return isWeakMapToString.working
        ? isWeakMapToString(value)
        : value instanceof WeakMap;
}
exports.isWeakMap = isWeakMap;

function isWeakSetToString(value) {
    return ObjectToString(value) === '[object WeakSet]';
}
isWeakSetToString.working = (
    typeof WeakSet !== 'undefined' &&
    isWeakSetToString(new WeakSet())
);
function isWeakSet(value) {
    return isWeakSetToString(value);
    if (typeof WeakSet === 'undefined') {
        return false;
    }

    return isWeakSetToString.working
        ? isWeakSetToString(value)
        : value instanceof WeakSet;
}
exports.isWeakSet = isWeakSet;

function isArrayBufferToString(value) {
    return ObjectToString(value) === '[object ArrayBuffer]';
}
isArrayBufferToString.working = (
    typeof ArrayBuffer !== 'undefined' &&
    // @ts-ignore
    isArrayBufferToString(new ArrayBuffer())
);
function isArrayBuffer(value) {
    if (typeof ArrayBuffer === 'undefined') {
        return false;
    }

    return isArrayBufferToString.working
        ? isArrayBufferToString(value)
        : value instanceof ArrayBuffer;
}
exports.isArrayBuffer = isArrayBuffer;

function isDataViewToString(value) {
    return ObjectToString(value) === '[object DataView]';
}
isDataViewToString.working = (
    typeof ArrayBuffer !== 'undefined' &&
    typeof DataView !== 'undefined' &&
    isDataViewToString(new DataView(new ArrayBuffer(1), 0, 1))
);
function isDataView(value) {
    if (typeof DataView === 'undefined') {
        return false;
    }

    return isDataViewToString.working
        ? isDataViewToString(value)
        : value instanceof DataView;
}
exports.isDataView = isDataView;

function isSharedArrayBufferToString(value) {
    return ObjectToString(value) === '[object SharedArrayBuffer]';
}
isSharedArrayBufferToString.working = (
    typeof SharedArrayBuffer !== 'undefined' &&
    // @ts-ignore
    isSharedArrayBufferToString(new SharedArrayBuffer())
);
function isSharedArrayBuffer(value) {
    if (typeof SharedArrayBuffer === 'undefined') {
        return false;
    }

    return isSharedArrayBufferToString.working
        ? isSharedArrayBufferToString(value)
        : value instanceof SharedArrayBuffer;
}
exports.isSharedArrayBuffer = isSharedArrayBuffer;

function isAsyncFunction(value) {
    return ObjectToString(value) === '[object AsyncFunction]';
}
exports.isAsyncFunction = isAsyncFunction;

function isMapIterator(value) {
    return ObjectToString(value) === '[object Map Iterator]';
}
exports.isMapIterator = isMapIterator;

function isSetIterator(value) {
    return ObjectToString(value) === '[object Set Iterator]';
}
exports.isSetIterator = isSetIterator;

function isGeneratorObject(value) {
    return ObjectToString(value) === '[object Generator]';
}
exports.isGeneratorObject = isGeneratorObject;

function isWebAssemblyCompiledModule(value) {
    return ObjectToString(value) === '[object WebAssembly.Module]';
}
exports.isWebAssemblyCompiledModule = isWebAssemblyCompiledModule;

function isNumberObject(value) {
    return checkBoxedPrimitive(value, numberValue);
}
exports.isNumberObject = isNumberObject;

function isStringObject(value) {
    return checkBoxedPrimitive(value, stringValue);
}
exports.isStringObject = isStringObject;

function isBooleanObject(value) {
    return checkBoxedPrimitive(value, booleanValue);
}
exports.isBooleanObject = isBooleanObject;

function isBigIntObject(value) {
    return BigIntSupported && checkBoxedPrimitive(value, bigIntValue);
}
exports.isBigIntObject = isBigIntObject;

function isSymbolObject(value) {
    return SymbolSupported && checkBoxedPrimitive(value, symbolValue);
}
exports.isSymbolObject = isSymbolObject;

function isBoxedPrimitive(value) {
    return (
        isNumberObject(value) ||
        isStringObject(value) ||
        isBooleanObject(value) ||
        isBigIntObject(value) ||
        isSymbolObject(value)
    );
}
exports.isBoxedPrimitive = isBoxedPrimitive;

function isAnyArrayBuffer(value) {
    return Uint8ArraySupported && (
        isArrayBuffer(value) ||
        isSharedArrayBuffer(value)
    );
}
exports.isAnyArrayBuffer = isAnyArrayBuffer;

['isProxy', 'isExternal', 'isModuleNamespaceObject'].forEach(function (method) {
    Object.defineProperty(exports, method, {
        enumerable: false,
        value: function () {
            throw new Error(method + ' is not supported in userland');
        }
    });
});