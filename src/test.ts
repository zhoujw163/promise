import MyPromise from './promise';

let p = new MyPromise((resolve, reject) => {
    resolve(1);
    // reject(2);
});

p.then(
    res => {
        console.log('第一个then: ', res);
        return 'ok';
    },
    err => {
        console.log('第一个then: ', err);
        return 'fail';
    }
)
    .then(
        res => {
            console.log('第二个then: ', res);
            return 'ok';
        },
        err => {
            console.log('第二个then: ', err);
            return 'fail';
        }
    )
    .then(
        res => {
            console.log('第三个then: ', res);
            return 'ok';
        },
        err => {
            console.log('第三个then: ', err);
            return 'fail';
        }
    );
