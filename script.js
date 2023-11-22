// SHA-256 hashing function
function sha256(str) {
    return crypto.subtle.digest('SHA-256', new TextEncoder().encode(str))
        .then(hashBuffer => {
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
            return hashHex;
        });
}

function hashAndSubmit() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Hash the password using SHA-256 
    //tge password show in console
    sha256(password)
        .then(hashedPassword => {
     
            console.log('Username:', username);
            console.log('Hashed Password:', hashedPassword);
        })
        .catch(error => console.error('Error hashing password:', error));
}

