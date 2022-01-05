const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const socketio = require('socket.io')
const http = require('http')
const connectDB = require('./config/db')
const formatMessage = require('./public/js/utils/messages')

// Load config
dotenv.config({ path: './config/config.env' })

// passport config
require('./config/passport')(passport)

connectDB()

const app = express()
const server = http.createServer(app)
const io = socketio(server)

// logging
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// handlebars
app.engine('.hbs', exphbs.engine({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');

// session
app.use(
    session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: false,
        store: new MongoStore({ mongooseConnection: mongoose.connection }),
}))

// passport middleware
app.use(passport.initialize())
app.use(passport.session())

// static folder
app.use(express.static(path.join(__dirname, 'public')))

const botName = 'Message bot '

// run when client connect
io.on('connection', socket => {
    socket.on('joinRoom', ({ room }) => {
        socket.join(room)
   
    // // welcome current user
    // socket.emit('message', formatMessage(botName, 'Welcome to Fanny Messenger!'))

    // Broadcast when a user connects
         socket.broadcast.to(room).emit('message', 'A user join the chat')

    })
    // // runs when client disconnect
    // socket.on('disconnect', () => {
    //     io.emit('a user has left the chat')
    // })

    // listen for chat
    socket.on('chatMessage', (msg) => {
        console.log(msg)
        io.emit('message', formatMessage('USER ', msg))
    })
})


//routes
app.use('/', require('./routes/index'))
app.use('/auth', require('./routes/auth') )

// get new user
// const getNewUser = require('./routes/getNewUser')

// app.use('/api/newRegisterUser', require('./routes/regNewUser') )

// port
const PORT = process.env.PORT || 3000

server.listen(PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`)
)