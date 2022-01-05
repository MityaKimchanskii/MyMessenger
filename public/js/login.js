
const login = document.getElementById('login')

login.addEventListener ('submit', (e) => {
    e.preventDefault()
    const email = document.querySelector('.email')
    const password = document.querySelector('.password')
    const logUser = {
        email: email.value,
        password: password.value
    }
    registData(logUser)
    console.log(logUser)
})

function registData(logUser) {
    axios.post('/login', logUser)
    .then((res) => {
        console.log(logUser)
        alert('ok')
    }) 
    .catch ((err) => {
        // console.log(newUser)
        alert('not ok')
    })
}

