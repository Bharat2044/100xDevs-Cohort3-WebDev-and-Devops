const express = require('express');
const mongoose = require('mongoose');
const adminSessionMiddleware = require('./middleware/adminSessionMiddleware');
const userSessionMiddleware = require('./middleware/userSessionMiddleware');

// Import route handlers
const { userRouter } = require('./routes/user');
const { courseRouter } = require('./routes/course');
const { adminRouter } = require('./routes/admin');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URL = process.env.MONGODB_URL;

app.use(express.json());

app.use('/api/v1/user', userSessionMiddleware, userRouter);
app.use('/api/v1/admin', adminSessionMiddleware, adminRouter);
app.use('/api/v1/course', courseRouter);

async function main() {
    try {
        await mongoose.connect(MONGODB_URL);
        console.log('Connected to the database');
        
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Failed to connect to the database', error);
    }
}

main();
