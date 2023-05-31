// Pegar Informações para criar uma nova conta
var btnCreateAccount = document.getElementById('btnCreateAccount')
var inputCreatePass = document.getElementById('inputCreatePass')
var inputCreateEmail = document.getElementById('inputCreateEmail')

// Pegar informações para fazer login
var btnLogin = document.getElementById('btnLogin')
var inputLoginPass = document.getElementById('inputLoginPass')
var inputLoginEmail = document.getElementById('inputLoginEmail')

var btnFacebookLogin = document.getElementById('btnFacebookLogin')
var btnGoogleLogin = document.getElementById('btnGoogleLogin')

var btnFacebookCreate = document.getElementById('btnFacebookCreate')
var btnGoogleCreate = document.getElementById('btnGoogleCreate')

var providerGoogle = new firebase.auth.GoogleAuthProvider();
var provider = new firebase.auth.FacebookAuthProvider();


// Função : Criar novo usuario / email e senha
btnCreateAccount.addEventListener('click', function () {

    firebase.auth().createUserWithEmailAndPassword(inputCreateEmail.value, inputCreatePass.value)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;

            var userData = {
                id: user.uid,
                name: user.displayName,
                avatar: user.photoURL,
                email: user.email
            }

            localStorage.setItem('userData', JSON.stringify(userData));
            let storageUser = JSON.parse(localStorage.getItem('userData'));

            alert('Usuario Criado com Sucesso')
            window.location.replace('telaPrincipal.html')

            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert('ERRO! Verifique as informações fornecidas e tente novamente.')

            // ..
        });
});

// Função : Login com usuario existente / email e senha
btnLogin.addEventListener('click', function () {

    firebase.auth().signInWithEmailAndPassword(inputLoginEmail.value, inputLoginPass.value)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;

            var userData = {
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
            var errorCode = error.code;
            var errorMessage = error.message;
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
            var credential = result.credential;

            // The signed-in user info.
            var user = result.user;

            var userData = {
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
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;

            // ...
        });
});

// Google Create
btnGoogleCreate.addEventListener('click', function () {

    firebase.auth()
        .signInWithPopup(providerGoogle)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;

            var userData = {
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
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
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
            var credential = result.credential;

            // The signed-in user info.
            var user = result.user;

            var userData = {
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
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;

            // ...
        });
});

// Google Login
btnGoogleLogin.addEventListener('click', function () {

    firebase.auth()
        .signInWithPopup(providerGoogle)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;

            var userData = {
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
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
});

