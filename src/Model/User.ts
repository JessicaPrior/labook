export type AuthenticationData = {
    id: string
}

export class User {

    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string
    ) { }

    public getId = (): string => this.id
    public getName = (): string => this.name
    public getEmail = (): string => this.email
    public getPassword = (): string => this.password
}

export class inputUser {

    constructor(
        private name: string,
        private email: string,
        private password: string
    ) { }

    public inName = (): string => this.name
    public inEmail = (): string => this.email
    public inPassword = (): string => this.password
}
