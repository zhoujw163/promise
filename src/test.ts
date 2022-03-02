import MyPromise from './promise';

let p = new MyPromise((resolve, reject) => {
    resolve(1);
    reject(2);
});

p.then(
    res => {
        console.log('res: ', res);
    },
    err => {
        console.log('err: ', err);
    }
);
