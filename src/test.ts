import MyPromise from './promise';

let p = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, 5);
    // reject(2);
});

p.then(
    res => {
        console.log('第一个then: ', res);
        return new MyPromise((resolve, reject) => {
            setTimeout(() => {
                resolve('第二个异步-ok1');
            }, 5);
        });
    },
    err => {
        console.log('第一个then: ', err);
        return 'fail1';
    }
)
    .then(
        res => {
            console.log('第二个then: ', res);
            return 'ok2';
        },
        err => {
            console.log('第二个then: ', err);
            return 'fail2';
        }
    )
    .then(
        res => {
            console.log('第三个then: ', res);
            return 'ok3';
        },
        err => {
            console.log('第三个then: ', err);
            return 'fail3';
        }
    );

console.log('end');
