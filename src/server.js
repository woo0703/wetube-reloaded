import express from "express";

const PORT = 4000;

const app = express();

// #1) URL Logger 
app.use((req, res, next) => {
    console.log(`Path: ${req.path}`);
    next();
});

// #2) Time Logger 
app.use((req, res, next) => {
    const now = new Date();
    console.log(`Time: ${now.getFullYear()}.${now.getMonth() + 1}.${now.getDate()}`);
    next();
});

// #3) Security Logger 
app.use((req, res, next) => {
    const protocol = req.protocol;
    console.log(protocol === 'https' ? 'Secure' : 'Insecure');
    next();
});

// #4) Protector 
app.use('/protected', (req, res, next) => {
    res.send('Access Denied');
});

// [ Home route ]
app.get('/', (req, res) => {
    res.send('Home Page');
});


        
const handleListening = () => 
    console.log("Server listening on port http://localhost:${PORT}")

app.listen(PORT, handleListening);
        