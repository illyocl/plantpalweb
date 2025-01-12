
const API_BASE_URL = "https://localhost:7035/api"; 

// Kayıt 
async function register(name, email, password) {
    try {
        const response = await fetch(`${API_BASE_URL}/auth/register`, { 
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, password })  
        });

        if (!response.ok) {
            throw new Error("API isteği başarısız oldu");
        }

        const result = await response.json();

        
        if (result && result.userId) {
            localStorage.setItem("userId", result.userId);  
        }

        return result;
    } catch (error) {
        console.error("Kayıt işlemi sırasında bir hata oluştu:", error);
        throw error;  
    }
}

// Login 
async function login(email, password) {
    try {
        const response = await fetch(`${API_BASE_URL}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });

        if (!response.ok) {
            throw new Error("API isteği başarısız oldu");
        }

        const result = await response.json();

       
        if (result && result.userId) {
            localStorage.setItem("userId", result.userId);  
        }

        return result;
    } catch (error) {
        console.error("Login işlemi sırasında bir hata oluştu:", error);
        throw error;  
    }
}
