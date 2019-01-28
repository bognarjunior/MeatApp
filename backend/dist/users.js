"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.matches = function (another) {
        return another !== undefined &&
            another.email === this.email &&
            another.password === this.password;
    };
    return User;
}());
exports.User = User;
exports.users = {
    'bognar.junior@gmail.com': new User('bognar.junior@gmail.com', 'Bognar', '123456'),
    'bognar_junior@yahoo.com.br': new User('bognar_junior@yahoo.com.br', 'Bognar Junior', '654321')
};
