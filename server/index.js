const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require ('nodemailer')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/api/form', (req, res) => { 
    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
            <div>
                <h3>Contact Details</h3>
                <ul>
                    <li> Name: ${req.query.name}</li>
                    <li> Email: ${req.query.email}</li>
                </ul>
                <h3>Message</h3>
                <p> Subject: ${req.query.subject}</p>
                <p> Message: ${req.query.message}</p>
            </div>
        `
        let transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'vernon89@ethereal.email',
                pass: '2F9aqzBXdSG4MVEbDJ'
            }
        })
        let mailOptions = {
            from: 'test@gmail.com',
            to: 'vernon89@ethereal.email',
            replyTo: 'test@gmail.com',
            subject: 'New Message',
            text: req.body.message,
            html: htmlEmail
        }
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.log(err)
            }
            console.log('message ok', info)
            console.log('message URL: %s', nodemailer.getTestMessageUrl(info))
        })
    })
    res.send('/')
})

// app.use('/', (req, res) => {
// console.log('ok')
// res.send('elisa')})
app.get('/', (request, response) => {
    response.sendfile('test.html')
})

const PORT = 3001

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})