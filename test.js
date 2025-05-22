const app = require('./userauth');

const PORT = 3000;
const LOGIN_ENDPOINT = `http://localhost:${PORT}/login`;

const server = app.listen(PORT, async () => {
    try {
        //Valid login
        const validRes = await fetch(LOGIN_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: 'suncon', password: 'password' })
        });
        const validData = await validRes.json();
        console.log('Valid Test:');
        console.log('Expecteed: 200 and "Authentication Successful!"');
        console.log('\nStatus:', validRes.status, '\nResponse:', validData);

        //Invalid password
        const badPassRes = await fetch(LOGIN_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: 'suncon', password: 'wrong' })
        });
        const badPassData = await badPassRes.json();
        console.log('\nInvalid Password Test:');
        console.log('Expecteed: 401 and "Invalid Password"');
        console.log('\nStatus:', badPassRes.status, '\nResponse:', badPassData);

        //User DNE
        const noUserRes = await fetch(LOGIN_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: 'nobody', password: 'pass' })
        });
        const noUserData = await noUserRes.json();
        console.log('\nInvalid User Test');
        console.log('Expecteed: 401 and "User does not exist"');
        console.log('\nStatus:', noUserRes.status, '\nResponse:', noUserData);

    } catch (err) {
        console.error('ERROR:', err);
    } finally {
        server.close(() => {
            console.log('Finished Testing');
        });
    }
});