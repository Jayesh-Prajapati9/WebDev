const jwt = require('jsonwebtoken');
const express = require('express'); 
const JWT_SECRET="secret";

const app = express();  

app.use(express.json());

let user = []

app.post('/signup', (req, res) => {
    const {username, password} = req.body;
    user.push({username, password});
    res.json({ message: 'Signup successful' });
})

app.post('/signin', (req, res) => {
    const username = req.body.username;
    if (user.find(u => u.username === username)) {
        const token = jwt.sign({ username }, JWT_SECRET);   
        res.json({ token });
    }
})

app.get('/me', (req, res) => {
    const token = req.headers.token;
    if (!token) {
        res.json({ message: 'Unauthenticated user' });
    } else {
        jwt.verify(token, JWT_SECRET, (err, user) => {
            if (err) {
                res.json({ message: 'Unauthenticated user' });
            } else {
                res.json({ user });
            }
        })
    }
})

let port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
