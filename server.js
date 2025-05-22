const app = require('./userauth');
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`User authentication microservice running at http://localhost:${PORT}`);
});