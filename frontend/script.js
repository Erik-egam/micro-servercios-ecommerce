// APIs accesibles desde el navegador
const USERS_URL = "http://localhost:3000";
const PRODUCTS_URL = "http://localhost:8000";

async function loadUsers() {
    const ul = document.getElementById("users");
    const loading = document.getElementById("users-loading");
    const error = document.getElementById("users-error");

    ul.innerHTML = "";
    error.classList.add("hidden");
    loading.classList.remove("hidden");

    try {
        const res = await fetch(`${USERS_URL}/users`);
        if (!res.ok) throw new Error("Error al obtener usuarios");

        const data = await res.json();
        data.forEach(u => {
            const li = document.createElement("li");
            li.innerHTML = `<strong>${u.name}</strong> — ${u.email}`;
            ul.appendChild(li);
        });

    } catch (err) {
        error.textContent = "No se pudo conectar con el servicio de usuarios";
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
        const res = await fetch(`${PRODUCTS_URL}/products`);
        if (!res.ok) throw new Error("Error al obtener productos");

        const data = await res.json();
        data.forEach(p => {
            const li = document.createElement("li");
            li.innerHTML = `<strong>${p.name}</strong> — $${p.price}`;
            ul.appendChild(li);
        });

    } catch (err) {
        error.textContent = "No se pudo conectar con el servicio de productos";
        error.classList.remove("hidden");
    } finally {
        loading.classList.add("hidden");
    }
}
