function searchProducts() {

    const searchText =
        document.getElementById("search").value.toLowerCase();

    const products =
        document.getElementsByClassName("product");

    for (let i = 0; i < products.length; i++) {

        const productName =
            products[i].getElementsByTagName("h2")[0]
            .innerText.toLowerCase();

        if (productName.includes(searchText)) {
            products[i].style.display = "block";
        } else {
            products[i].style.display = "none";
        }
    }
}