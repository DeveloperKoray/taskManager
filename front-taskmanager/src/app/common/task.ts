export class Task {
    constructor(
        public title: string,
        public description: string,
        public createdAt?: string,
        public updatedAt?: string,
        public id?: number
    ){}
}
