export type Status = 'pending' | 'resolved' | 'rejected';

export type ResolveType = (value: any) => any;

export type RejectType = (value: any) => any;

export type Executor = (resolve: ResolveType, reject: RejectType) => any;
