class User {
    constructor(name, pass) {
        this.name = name
        this.pass = pass
    }
}

const users = [new User("username3", "pass"), new User("username2", "password9"), new User("username3", "password")]
let validUser = new User("username3", "pass")

for (let i = 0; i < 3; i++) {
    if (login(users[i])) {
        console.log("Добро пожаловать, " + validUser.name + "!")
        break;
    }
    if (i === 2) {
        console.log("Неправильный логин или пароль! \nПрограмма завершена.")
    }
}

function login(user) {
    console.log("Login:" + user.name)
    console.log("Pass: " + user.pass)
    if (validUser.name === user.name && validUser.pass === user.pass) {
        return true
    } else {
        return false
    }
}