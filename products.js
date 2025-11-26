document.addEventListener("DOMContentLoaded", () => {
    // ^^waits for html file to load 
    const container = document.getElementById("product-container");
    //  
    fetch("product.json")
    // fetch retries the JSON file 
    .then(response => response.json())
    .then(products => {
        products.forEach(item => {
            const card = document.createElement("div");
            card.classList.add("product-card");
            
            card.innerHTML = `
            <img src="${item.photo}" alt="${item.name}">
            <h2 class="product_name" >${item.name}<h2>
            <p class="product_description">${item.description}<p>
            <h3 class="product_price">${item.price}<h3>
            `; // Added a class so I can style it in my css
            container.appendChild(card);// pushes this into my innerHtml
        });
    })
    .catch(err => console.error("Error loading the Json", err)); // catches anyy errors 
});