
const registNewUser = document.getElementById('regist')

registNewUser.addEventListener ('submit', (e) => {
    e.preventDefault()
    const firstName = document.querySelector('.firstName')
    const lastName = document.querySelector('.lastName')
    const email = document.querySelector('.email')
    const password = document.querySelector('.password')
    const newUser = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value
    }
    registData(newUser)
    console.log(newUser)
})

function registData(newUser) {
    axios.post('/registration', newUser)
    .then((res) => {
        console.log(newUser)
        alert('ok')
    }) 
    .catch ((err) => {
        // console.log(newUser)
        alert('not ok')
    })
}

