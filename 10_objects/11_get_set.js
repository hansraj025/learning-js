// getters and setters with newer syntax

class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    };

    get email() {
        return `${this._email}`.toUpperCase();
    };

    set email(mail) {
        this._email = mail;
    };

    get password() {
        return `*****${this._password}`;    // getter will modify the original password
    }

    set password(pass) {
        this._password = pass;
    }
};

let user = new User("Lucky", "Lucky123");
console.log(user);
console.log(user.email)
console.log(user.password);