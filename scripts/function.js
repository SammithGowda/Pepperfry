const appendData = (data, location) => {
    data.map((elem) => {
        let div = document.createElement("div");
        div.setAttribute("class", "prod-card")
        
        // let heart = document.createElement("i")
        // heart.setAttribute("class", "fa fa-heart-o");  
        // console.log(heart)  

        

        let img = document.createElement("img");
        img.src = elem.image;
        img.setAttribute("class", "prod-img");

        let desc = document.createElement("p");
        desc.textContent = elem.desc;

        let dp = document.createElement("p");
        dp.textContent = "  ₹" + elem.dprice + "  ";
        dp.style.display = "inline";

        let name = document.createElement("p");
        name.textContent = elem.name;

        let mrp = document.createElement("p");
        mrp.textContent = "  ₹" + elem.mrp;

        let disc = document.createElement("p");
        disc.textContent = elem.disc;
        disc.setAttribute("class", "discountPr");

        let cartBtn = document.createElement("button")
        cartBtn.textContent = "Add to Cart";
        cartBtn.setAttribute("class", "cart-btn");

        let wishBtn = document.createElement("button")
        wishBtn.textContent = "Add to Wishlist";
        wishBtn.setAttribute("class", "wish-btn");

        div.append(cartBtn,wishBtn, img, desc, name, dp, mrp, disc);
        location.append(div);

        //   Eventlisteners in function
        div.addEventListener("mouseover", () => {
            cartBtn.style.display = "block";
            wishBtn.style.display = "block";
        });
        div.addEventListener("mouseout", () => {
            cartBtn.style.display = "none";
            wishBtn.style.display = "none";
        });
        cartBtn.addEventListener("click", function () {
            adddata(elem);
        });
        wishBtn.addEventListener("click", function () {
            addwish(elem);
        });
    })
}
var arr = [];
    var arrwishList = [];
    function adddata(elem) {
        arr.push(elem);
        localStorage.setItem("cart", JSON.stringify(arr));
    }
    function addwish(elem) {
        arrwishList.push(elem);
        localStorage.setItem("wishlist", JSON.stringify(arrwishList));
    }
export default appendData;