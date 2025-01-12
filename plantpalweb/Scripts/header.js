document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.getElementById('loginButton');
    const calendarLink = document.getElementById('calendarLink');
    const userId = localStorage.getItem('userId');

    if (userId) {
        
        loginButton.textContent = 'Çıkış Yap';
        loginButton.href = '#';
        loginButton.addEventListener('click', function () {
            localStorage.removeItem('userId');
            alert('Başarıyla çıkış yaptınız!');
            window.location.href = '/login';
        });

       
    } else {
       
        loginButton.textContent = 'Giriş Yap';
        loginButton.href = '/login';

    }
});
