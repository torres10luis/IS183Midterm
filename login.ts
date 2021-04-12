class Login {
    constructor(){
    }
    login() {
        const usernameInput = document.getElementById('username');
        console.log('from login() usernameInput', usernameInput);
        const passwordInut = document.getElementById('password');
        let username = usernameInput.value;
        let password = passwordInut.value
        console.log('username', username)
        console.log('username', username)
        if(username === 'lphan' && password === 'abc123'){
            this.goToHome();
        }else {
            this.displayError();
        }
    }
    displayError(){
        const errorBox = document.getElementById('error-box');
        errorBox.innerHTML = "User not found!";
        const interval = setInterval(() => {
            errorBox.style = "display: none;";
            clearInterval(interval);
        }, 5000);
    }
    
    goToHome() {
        window.location.href = 'index.html';
    }
}
const login = new Login();