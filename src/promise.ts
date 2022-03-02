import { Status, RejectType, ResolveType, Executor } from './actionType';

export default class MyPromise {
    public status!: Status;
    public resolve!: ResolveType;
    public reject!: RejectType;
    public resolveExecutorValue!: any;
    public rejectExecutorValue!: any;

    constructor(executor: Executor) {
        this.status = 'pending';

        this.resolve = (value: any) => {
            if (this.status === 'pending') {
                console.log('resolve: ', value);
                this.status = 'resolved';
                // throw new Error('test resolve error');
                this.resolveExecutorValue = value;
            }
        };

        this.reject = (value: any) => {
            if (this.status === 'pending') {
                console.log('reject: ', value);
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
        if (this.status === 'resolved') {
            console.log('resolveInThen: ');
            resolveInThen(this.resolveExecutorValue);
        }

        if (this.status === 'rejected') {
            console.log('rejectInThen: ');
            rejectInThen(this.rejectExecutorValue);
        }
    }
}

export {};
