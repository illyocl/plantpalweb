
document.addEventListener("DOMContentLoaded", () => {
    const userId = localStorage.getItem('userId');

    if (!userId) {
        
        alert("Lütfen giriş yapın.");
        window.location.href = "login.html"; 
    }
});
