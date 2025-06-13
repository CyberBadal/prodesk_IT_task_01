const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());
app.post('/api/posts', async (req, res) => {
    const { title, content, userId } = req.body;
    try {
        const response = await axios.post('https://api.hubapi.com/content/api/v2/blog-posts', {
            title,
            content,
            userId
        }, {
            headers: {
                'Authorization': `Bearer YOUR_HUBSPOT_API_KEY`
            }
        });
        res.status(201).json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error creating post', error });
    }
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});