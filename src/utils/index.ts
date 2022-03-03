// export function isObject(obj: any): obj is object {
//     return obj !== null && typeof obj === 'object';
// }

import MyPromise from '../promise';

export function isObject(obj: any): obj is Record<any, any> {
    return obj !== null && typeof obj === 'object';
}

export function isFunction(obj: any): obj is Function {
    return typeof obj === 'function';
}

// thenable
export function isPromise(obj: any): obj is MyPromise {
    return isObject(obj) && isFunction(obj.then);
}
