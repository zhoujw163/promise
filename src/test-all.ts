import MyPromise from './promise';

let p1 = new MyPromise((resolve, reject) => {
    console.log('第1个 promise 同步区域');
    setTimeout(() => {
        console.log('第1个 promise 异步区域');
        resolve('第1个 promise 异步区域');
    }, 0);
});

let p2 = new MyPromise((resolve, reject) => {
    console.log('第2个 promise 同步区域');
    setTimeout(() => {
        console.log('第2个 promise 异步区域');
        resolve('第2个 promise 异步区域');
    }, 0);
});

let p3 = new MyPromise((resolve, reject) => {
    console.log('第3个 promise 同步区域');
    setTimeout(() => {
        console.log('第3个 promise 异步区域');
        resolve('第3个 promise 异步区域');
    }, 0);
});

MyPromise.all([p1, p2, p3]).then(
    res => {
        console.log('all: ', res);
    },
    () => {}
);
