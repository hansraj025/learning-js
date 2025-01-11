// function based syntax

function User(email, password) {
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        get: function() {
            return this._email.toUpperCase();
        },
        set: function(mail) {
            this._email = mail;
        }
    })

    Object.defineProperty(this, 'password', {
        get: function() {
            return this._password.toUpperCase();
        },
        set: function(pass) {
            this._password = pass;
        }
    })
}


let user = new User("trombone@musical.band", '123');
console.log(user.email);