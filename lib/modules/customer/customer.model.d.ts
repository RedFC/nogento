interface ILogin {
    email: string;
    password: string;
}
interface IRegister {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    profile_picture: string;
    dateOfBirth: string;
    gender: string;
    phone_number: string;
}
interface IToken {
    token: string;
}
