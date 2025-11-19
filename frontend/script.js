async function loadUsers() {
    const res = await fetch("http://localhost:3000/users");
    const data = await res.json();
    const ul = document.getElementById("users");
    ul.innerHTML = "";
    data.forEach(u => {
        const li = document.createElement("li");
        li.textContent = `${u.name} - ${u.email}`;
        ul.appendChild(li);
    });
}

async function loadProducts() {
    const res = await fetch("http://localhost:8000/products");
    const data = await res.json();
    const ul = document.getElementById("products");
    ul.innerHTML = "";
    data.forEach(p => {
        const li = document.createElement("li");
        li.textContent = `${p.name} - $${p.price}`;
        ul.appendChild(li);
    });
}
