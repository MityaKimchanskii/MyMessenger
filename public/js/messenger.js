const chatForm = document.getElementById('chat-form')
const chatMessages = document.querySelector('.chat-messages')
const socket = io()

const arrayDance = []
const arrayParty = []
const arrayProgramming = []

// get chatRoom
const chatRoom = document.getElementById('rooms')

// appear room name in chat
chatRoom.addEventListener('click', () => {
    const value = chatRoom.value
    document.querySelector('.chat-messages').innerHTML = ""
    const h3 = document.createElement('h3')
    h3.textContent = value
    document.querySelector('.chat-messages').appendChild(h3)
    // console.log(h3.textContent)
})

function room () {
    chatRoom.addEventListener('click', () => {
    const value = chatRoom.value
    return value
    // console.log(value)
    })
}

// join chatroom
socket.emit('joinRoom', room) 


// message from server
socket.on('message', message => {
    // console.log(message)
    outputMessage(message)

    // scrol down
    chatMessages.scrollTop = chatMessages.scrollHeight

})

// message sabmit
chatForm.addEventListener('submit', (e) => {
    e.preventDefault()

    // // add message to array
    // if (chatRoom === 'Dance') {
    //     arrayDance.push(msg)
    //     console.log(arrayDance)
    // }

    // Get message text
    const msg = e.target.elements.msg.value
    console.log(msg)

    

    //emit message to server
    socket.emit('chatMessage', msg)

    //clear input
    e.target.elements.msg.value = ''
    e.target.elements.msg.focus()
})

// output message to DOM
function outputMessage(message) {

    
    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML = `<p class="meta"> USER <span>${message.time}</span></p>
    <p class="text">
        ${message.text}
    </p>`
    document.querySelector('.chat-messages').appendChild(div)
    
}

