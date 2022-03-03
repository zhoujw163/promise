import { Status, RejectType, ResolveType, Executor } from './actionType';

export default class MyPromise {
    public status!: Status;
    public resolve!: ResolveType;
    public reject!: RejectType;
    public resolveExecutorValue!: any;
    public rejectExecutorValue!: any;
    public resolveThenCallbacks: Array<() => void> = [];
    public rejectThenCallbacks: Array<() => void> = [];

    constructor(executor: Executor) {
        this.status = 'pending';

        this.resolve = (value: any) => {
            if (this.status === 'pending') {
                this.status = 'resolved';
                this.resolveExecutorValue = value;
                this.resolveThenCallbacks.forEach(callback => callback());
            }
        };

        this.reject = (value: any) => {
            if (this.status === 'pending') {
                this.status = 'rejected';
                this.rejectExecutorValue = value;
            }
        };

        try {
            executor(this.resolve, this.reject);
        } catch (error: any) {
            this.status = 'pending';
            this.reject(error.toString());
        }
    }

    then(resolveInThen: ResolveType, rejectInThen: RejectType) {
        return new MyPromise((resolve, reject) => {
            if (this.status === 'resolved') {
                let result = resolveInThen(this.resolveExecutorValue);
                resolve(result);
            }

            if (this.status === 'rejected') {
                let result = rejectInThen(this.rejectExecutorValue);
                reject(result);
            }

            // 处理异步
            if (this.status === 'pending') {
                this.resolveThenCallbacks.push(() => {
                    let result = resolveInThen(this.resolveExecutorValue);
                    resolve(result);
                });

                this.rejectThenCallbacks.push(() => {
                    let result = resolveInThen(this.rejectExecutorValue);
                    reject(result);
                });
            }
        });
    }
}

export {};
