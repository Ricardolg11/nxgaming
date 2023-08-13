// Pegar Informações para criar uma nova conta
let btnCreateAccount = document.getElementById('btnCreateAccount')
let inputCreatePass = document.getElementById('inputCreatePass')
let inputCreateEmail = document.getElementById('inputCreateEmail')

// Pegar informações para fazer login
const btnLogin = document.getElementById('btnLogin')
const inputLoginPass = document.getElementById('inputLoginPass')
const inputLoginEmail = document.getElementById('inputLoginEmail')

let btnFacebookLogin = document.getElementById('btnFacebookLogin')
let btnGoogleLogin = document.getElementById('btnGoogleLogin')

let btnFacebookCreate = document.getElementById('btnFacebookCreate')
let btnGoogleCreate = document.getElementById('btnGoogleCreate')

let providerGoogle = new firebase.auth.GoogleAuthProvider();
let provider = new firebase.auth.FacebookAuthProvider();


// Função : Criar novo usuario / email e senha
btnCreateAccount.addEventListener('click', function () {

    firebase.auth().createUserWithEmailAndPassword(inputCreateEmail.value, inputCreatePass.value)
        .then((userCredential) => {
            // Signed in
            let user = userCredential.user;

            let userData = {
                id: user.uid,
                name: user.displayName,
                avatar: user.photoURL,
                email: user.email
            }

            localStorage.setItem('userData', JSON.stringify(userData));
            let storageuser = JSON.parse(localStorage.getItem('userData'));

            alert('Usuario Criado com Sucesso')
            window.location.replace('telaPrincipal.html')

            // ...
        })
        .catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
            alert('ERRO! Verifique as informações fornecidas e tente novamente.')

            // ..
        });
});

// Função : Login com usuario existente / email e senha
btnLogin.addEventListener('click', function () {

    firebase.auth().signInWithEmailAndPassword(inputLoginEmail.value, inputLoginPass.value)
        .then((userCredential) => {
            // Signed in
            let user = userCredential.user;

            let userData = {
                id: user.uid,
                name: user.displayName,
                avatar: user.photoURL,
                email: user.email
            }

            localStorage.setItem('userData', JSON.stringify(userData));
            let storageUser = JSON.parse(localStorage.getItem('userData'));

            console.log(user)
            alert('Login efetuado com sucesso')
            window.location.replace('telaPrincipal.html')
            // ...
        })
        .catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
            alert('ERRO! Verifique as informações fornecidas e tente novamente.')


        });

});

// Facasbook Create
btnFacebookCreate.addEventListener('click', function () {

    firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            let credential = result.credential;

            // The signed-in user info.
            let user = result.user;

            let userData = {
                id: user.uid,
                name: user.displayName,
                avatar: user.photoURL,
                email: user.email
            }

            localStorage.setItem('userData', JSON.stringify(userData));
            let storageUser = JSON.parse(localStorage.getItem('userData'));

            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            let accessToken = credential.accessToken;

            // ...
        })
        .catch((error) => {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;
            // The email of the user's account used.
            let email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            let credential = error.credential;

            // ...
        });
});

// Google Create
btnGoogleCreate.addEventListener('click', function () {

    firebase.auth()
        .signInWithPopup(providerGoogle)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            let credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            let token = credential.accessToken;
            // The signed-in user info.
            let user = result.user;

            let userData = {
                id: user.uid,
                name: user.displayName,
                avatar: user.photoURL,
                email: user.email
            }

            localStorage.setItem('userData', JSON.stringify(userData));
            let storageUser = JSON.parse(localStorage.getItem('userData'));

            window.location.replace('telaPrincipal.html')


            // ...
        }).catch((error) => {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;
            // The email of the user's account used.
            let email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            let credential = error.credential;
            // ...
        });
});

// Facasbook Login
btnFacebookLogin.addEventListener('click', function () {

    firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            let credential = result.credential;

            // The signed-in user info.
            let user = result.user;

            let userData = {
                id: user.uid,
                name: user.displayName,
                avatar: user.photoURL,
                email: user.email
            }

            localStorage.setItem('userData', JSON.stringify(userData));
            let storageUser = JSON.parse(localStorage.getItem('userData'));

            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var accessToken = credential.accessToken;

            // ...
        })
        .catch((error) => {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;
            // The email of the user's account used.
            let email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            let credential = error.credential;

            // ...
        });
});

// Google Login
btnGoogleLogin.addEventListener('click', function () {

    firebase.auth()
        .signInWithPopup(providerGoogle)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            let credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            let token = credential.accessToken;
            // The signed-in user info.
            let user = result.user;

            let userData = {
                id: user.uid,
                name: user.displayName,
                avatar: user.photoURL,
                email: user.email
            }

            localStorage.setItem('userData', JSON.stringify(userData));
            let storageUser = JSON.parse(localStorage.getItem('userData'));

            window.location.replace('telaPrincipal.html')


            // ...
        }).catch((error) => {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;
            // The email of the user's account used.
            let email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            let credential = error.credential;
            // ...
        });
});

