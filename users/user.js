class User{
    constructor(name, surname, age, email, password, job){
        this.name = name
        this.surname = surname
        this.age = age
        this.email = email
        this.password = password
        this.job = job
    }

    changePassword(oldPassword, newPassword) {
        if (oldPassword != this.password){
            console.log(new Error("Incorrect password!"))
        }
        else {
            this.password = newPassword
            console.log("Success change password!")
        }
    } 
}

// ivan.changePassword("qwerty123", "321")
let ivan = new User("Ivan", "Serov", 26, "sia@mail.ru", "qwerty123", "garpix")

let ass = new User("AS", "Serov", 26, "sia@mail.ru", "qwerty123", "garpix")

let mass = [ivan, ass]

console.log(mass[0].name)
let a = mass.sort((a, b) => a.name - b.name)
console.log(a[0].name)