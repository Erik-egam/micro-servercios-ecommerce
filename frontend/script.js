// Cambia esta URL dependiendo del entorno (compose vs k8s)
const BASE_URL = "http://localhost"; 
// Ejemplo compose -> const BASE_URL = "http://localhost";

async function loadUsers() {
    const ul = document.getElementById("users");
    const loading = document.getElementById("users-loading");
    const error = document.getElementById("users-error");

    ul.innerHTML = "";
    error.classList.add("hidden");
    loading.classList.remove("hidden");

    try {
        const res = await fetch(`${BASE_URL}/users`);
        if (!res.ok) throw new Error("Error al obtener usuarios");
        
        const data = await res.json();

        if (!Array.isArray(data)) throw new Error("Respuesta inesperada");

        data.forEach(u => {
            const li = document.createElement("li");
            li.innerHTML = `<strong>${u.name}</strong> — ${u.email}`;
            ul.appendChild(li);
        });

    } catch (err) {
        error.textContent = err.message;
        error.classList.remove("hidden");
    } finally {
        loading.classList.add("hidden");
    }
}

async function loadProducts() {
    const ul = document.getElementById("products");
    const loading = document.getElementById("products-loading");
    const error = document.getElementById("products-error");

    ul.innerHTML = "";
    error.classList.add("hidden");
    loading.classList.remove("hidden");

    try {
        const res = await fetch(`${BASE_URL}/products`);
        if (!res.ok) throw new Error("Error al obtener productos");

        const data = await res.json();

        data.forEach(p => {
            const li = document.createElement("li");
            li.innerHTML = `<strong>${p.name}</strong> — $${p.price}`;
            ul.appendChild(li);
        });

    } catch (err) {
        error.textContent = err.message;
        error.classList.remove("hidden");
    } finally {
        loading.classList.add("hidden");
    }
}
