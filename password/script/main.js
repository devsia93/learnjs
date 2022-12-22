let username = "Seva"
let password = "abc132"



function checkUser(name, pass) {
    let inputName = prompt('Введите свое имя');
    let inputPass = prompt('Введите пароль');


    for (let i = 0; i > 0; i++ {
        if (username === inputName && password === inputPass) {
            alert("Добро пожаловать, Сева")
            break;
        }
        if (i === 3) {
            alert("Неправильный логин или пароль! \nПрограмма завершена.")
        }
    }
}

checkUser(username, password)

let x = checkUser()