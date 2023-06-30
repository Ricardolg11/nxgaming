let storageUser = JSON.parse(localStorage.getItem('userData'));
var emailLogado = document.getElementById('emailLogado')
emailLogado.innerText = storageUser.email;

var btnLogout = document.getElementById('btnLogout')


// logout
btnLogout.addEventListener('click', function () {

    firebase.auth().signOut().then(() => {
        alert('Logout realizado com sucesso!')
        localStorage.setItem('userData', '');
        window.location.replace('index.html');

        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
        alert(error)
    });

});

