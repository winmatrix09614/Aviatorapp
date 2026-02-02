const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Эта строка говорит: "Показывай всё, что лежит в папке public"
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Game Server running on port ${port}`);
});