// Old syntax - no one uses this

const User = {
    _email: "example@email.com",
    _password: "12345678",

    get email(){
        return this._email.toUpperCase();
    },

    set email(mail){
        this._email = mail;
    },

    get password(){
        return this._password.toUpperCase();
    },

    set password(pass){
        this._password = pass;
    }
}

const user = Object.create(User);
user.email = "hm@something.com";
user.password = "12345678";
console.log(user.email);
console.log(user.password);

const user1 = Object.create(User);
user1.email = "usr1@mail.ml";
user1.password = "87654321a";
console.log(user1.email);
console.log(user1.password);