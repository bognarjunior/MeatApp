export class User {
    constructor(
        public email: string,
        public name: string,
        private password: string
    ) { }

    matches(another: User): boolean {
        return another !== undefined &&
            another.email === this.email &&
            another.password === this.password;

    }
}

export const users = {
    'bognar.junior@gmail.com': new User('bognar.junior@gmail.com', 'Bognar', '123456'),
    'bognar_junior@yahoo.com.br': new User('bognar_junior@yahoo.com.br', 'Bognar Junior', '654321')
}
