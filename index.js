let but = document.querySelector("button");
let load = document.querySelector(".load");
let section = document.querySelector("#products-container");
but.addEventListener("click", ()=>{
    let newEle = document.createElement("p");
    newEle.textContent = "loading...";
    load.appendChild(newEle);
    fetch("https://dummyjson.com/products")
    .then((responde)=>{return responde.json()})
    .then((data)=>{
        load.removeChild(newEle);
        data.products.forEach((product) => {
            let newCard = `<div class="col-lg-3 mb-4">
                <section class="card h-100">
                    <img src="${product.thumbnail}" class="card-img-top" alt="${product.title}">
                    <div class="card-body">
                        <h4 class="card-title">${product.title}</h4>
                        <p class="card-text fs-6 text-secondary">${product.category}</p>
                        <p class="card-text">${product.description}</p>
                        <p class="fw-bold text-success">$${product.price}</p>
                        <a href="#" class="btn btn-primary">view product</a>
                    </div>
                </section>
            </div>`;
            section.innerHTML += newCard;
        });
    })
    .catch((er)=>{console.log(er.message)})
    .finally(()=>{
        newEle.remove();
    });
});
