
function product(type, desc, price, image) {
    this.type = "type :-" + type;
    this.desc = "desc :-" + desc;
    this.price = "price :-" + price;
    this.image = image;

}
var item = document.querySelector("#add_product")
item.addEventListener("click", myfunction)

function myfunction() {
    event.preventDefault();

    var type = products.type.value
    var desc = products.desc.value
    var price = products.desc.value
    var image = products.image.value

    var s1 = new product(type, desc, price, image)

    var arr = JSON.parse(localStorage.getItem("products")) || []
    arr.push(s1)
    localStorage.setItem("products", JSON.stringify(arr))
    console.log(s1)
    window.location.reload();

}