

const perfumeCard = document.getElementById("perfumeCard");

const shopProducts = document.getElementById("shopProducts");

const shopSection = document.getElementById("shop");


perfumeCard.addEventListener("click", function () {

    shopProducts.innerHTML = `

        <div class="shop-product">
            <img src="images/perfume1.jpg" alt="Valentino">
            <h3>Valentino size 100ml</h3>
            <p>৳ 15,550</p>
            <button>Explore</button>
        </div>

        <div class="shop-product">
            <img src="images/perfume2.jpg" alt="Scandal">
            <h3>Scandal (for women) 100ml</h3>
            <p>৳ 12,999</p>
            <button>Explore</button>
        </div>

        <div class="shop-product">
            <img src="images/perfume3.jpg" alt="Bleu de Chanel">
            <h3>Bleu de Chanel Eau De(EDP) 100ml</h3>
            <p>৳ 21,000</p>
            <button>Explore</button>
        </div>

    `;

    shopSection.scrollIntoView({
        behavior: "smooth"
    });

});
const capCard = document.getElementById("capCard");


capCard.addEventListener("click", function () {

    shopProducts.innerHTML = `

        <div class="shop-product">
            <img src="images/cap1.jpg" alt="Classic Cap">
            <h3>Classic Cap</h3>
            <p>৳ 1,300</p>
            <button>Explore</button>
        </div>

        <div class="shop-product">
            <img src="images/cap2.jpg" alt="Premium Cap">
            <h3>Premium Cap</h3>
            <p>৳ 1,300</p>
            <button>Explore</button>
        </div>

        <div class="shop-product">
            <img src="images/cap3.jpg" alt="REVIVAL Cap">
            <h3>REVIVAL Cap</h3>
            <p>৳ 1,100</p>
            <button>Explore</button>
        </div>

    `;

    shopSection.scrollIntoView({
        behavior: "smooth"
    });

});
const womenBagCard = document.getElementById("womenBagCard");


womenBagCard.addEventListener("click", function () {

    shopProducts.innerHTML = `

        <div class="shop-product">
            <img src="images/womenbag1.jpg" alt="Pink Women Bag">
            <h3>Pink Luxury Bag</h3>
            <p>৳ 3,700</p>
            <button>Explore</button>
        </div>

        <div class="shop-product">
            <img src="images/womenbag2.jpg" alt="Denim Women Bag">
            <h3>Denim Premium Bag</h3>
            <p>৳ 3,900</p>
            <button>Explore</button>
        </div>

        <div class="shop-product">
            <img src="images/womenbag3.jpg" alt="Floral Women Bag">
            <h3>Floral Women Bag</h3>
            <p>৳ 4,200</p>
            <button>Explore</button>
        </div>

    `;

    shopSection.scrollIntoView({
        behavior: "smooth"
    });

});
const sneakersCard = document.getElementById("sneakersCard");


sneakersCard.addEventListener("click", function () {

    shopProducts.innerHTML = `

        <div class="shop-product">
            <img src="images/sneakers1.jpg" alt="REVIVAL Sneakers 1">
            <h3>Classic Sneakers</h3>
            <p>৳ 5,200</p>
            <button>Explore</button>
        </div>

        <div class="shop-product">
            <img src="images/sneakers2.jpg" alt="REVIVAL Sneakers 2">
            <h3>Premium Sneakers(Women)</h3>
            <p>৳ 6,000</p>
            <button>Explore</button>
        </div>

        <div class="shop-product">
            <img src="images/sneakers3.jpg" alt="REVIVAL Sneakers 3">
            <h3>Luxury Sneakers</h3>
            <p>৳ 9,300</p>
            <button>Explore</button>
        </div>

    `;

    shopSection.scrollIntoView({
        behavior: "smooth"
    });

});
const tshirtCard = document.getElementById("tshirtCard");

tshirtCard.addEventListener("click", function () {

    shopProducts.innerHTML = `

        <div class="shop-product">
            <img src="images/tshirt1.jpg" alt="REVIVAL T-Shirt 1">
            <h3>Premium <Winter Collection</h3>
            <p>৳ 3,100</p>
            <button>Explore</button>
        </div>

        <div class="shop-product">
            <img src="images/tshirt2.jpg" alt="REVIVAL T-Shirt 2">
            <h3>Classic REVIVAL Winter Collection</h3>
            <p>৳ 2,699</p>
            <button>Explore</button>
        </div>

        <div class="shop-product">
            <img src="images/tshirt3.jpg" alt="REVIVAL T-Shirt 3">
            <h3>Premium Winter Collection</h3>
            <p>৳ 2,699</p>
            <button>Explore</button>
        </div>

    `;

    shopSection.scrollIntoView({
        behavior: "smooth"
    });

});
const watchCard = document.getElementById("watchCard");

watchCard.addEventListener("click", function () {

    shopProducts.innerHTML = `

        <div class="shop-product">
            <img src="images/watch1.jfif" alt="REVIVAL Watch 1">
            <h3>Classic Luxury Watch</h3>
            <p>৳ 2,650</p>
            <button>Explore</button>
        </div>

        <div class="shop-product">
            <img src="images/watch2.jfif" alt="REVIVAL Watch 2">
            <h3>Premium Watch</h3>
            <p>৳ 4,500</p>
            <button>Explore</button>
        </div>

        <div class="shop-product">
            <img src="images/watch3.jfif" alt="REVIVAL Watch 3">
            <h3>Elegant Luxury Watch</h3>
            <p>৳3,750</p>
            <button>Explore</button>
        </div>

    `;

    shopSection.scrollIntoView({
        behavior: "smooth"
    });

});
const bagCard = document.getElementById("bagCard");

bagCard.addEventListener("click", function () {

    shopProducts.innerHTML = `

        <div class="shop-product">
            <img src="images/travelbag1.jfif" alt="Travel Bag 1">
            <h3>Classic Travel Bag</h3>
            <p>৳ 4,200</p>
            <button>Explore</button>
        </div>

        <div class="shop-product">
            <img src="images/travelbag2.jfif" alt="Travel Bag 2">
            <h3>Premium Travel Bag</h3>
            <p>৳ 2,600</p>
            <button>Explore</button>
        </div>

        <div class="shop-product">
            <img src="images/travelbag3.jfif" alt="Travel Bag 3">
            <h3>Luxury Travel Bag</h3>
            <p>৳ 2,600</p>
            <button>Explore</button>
        </div>

    `;

    shopSection.scrollIntoView({
        behavior: "smooth"
    });

});
const walletCard = document.getElementById("walletCard");

walletCard.addEventListener("click", function () {

    shopProducts.innerHTML = `

        <div class="shop-product">
            <img src="images/wallet1.jfif" alt="Wallet 1">
            <h3>Classic Leather Wallet</h3>
            <p>৳ 1,800</p>
            <button>Explore</button>
        </div>

        <div class="shop-product">
            <img src="images/wallet2.jfif" alt="Wallet 2">
            <h3>Premium Leather Wallet</h3>
            <p>৳ 2,300</p>
            <button>Explore</button>
        </div>

        <div class="shop-product">
            <img src="images/wallet3.jfif" alt="Wallet 3">
            <h3>Luxury Wallet</h3>
            <p>৳ 1,700</p>
            <button>Explore</button>
        </div>

    `;

    shopSection.scrollIntoView({
        behavior: "smooth"
    });

});
const searchInput = document.querySelector(".search-box input");
const searchButton = document.querySelector(".search-box button");


searchButton.addEventListener("click", function () {

    const searchText = searchInput.value.toLowerCase().trim();

    if (searchText === "") {
        return;
    }


    /* WINTER COLLECTION / SWEATER */

    if (
        searchText.includes("winter") ||
        searchText.includes("sweater") ||
        searchText.includes("winter collection")
    ) {

        tshirtCard.click();

    }


    /* TRAVEL BAG */

    else if (
        searchText === "bag" ||
        searchText.includes("travel bag")
    ) {

        bagCard.click();

    }


    /* WOMEN BAG */

    else if (
        searchText.includes("women bag") ||
        searchText.includes("women")
    ) {

        womenBagCard.click();

    }


    /* WALLET */

    else if (searchText.includes("wallet")) {

        walletCard.click();

    }


    /* SNEAKERS */

    else if (
        searchText.includes("sneaker") ||
        searchText.includes("shoe")
    ) {

        sneakersCard.click();

    }


    /* CAP */

    else if (searchText.includes("cap")) {

        capCard.click();

    }


    /* WATCH */

    else if (searchText.includes("watch")) {

        watchCard.click();

    }


    /* PERFUME */

    else if (searchText.includes("perfume")) {

        perfumeCard.click();

    }


    /* NOT FOUND */

    else {

        alert("Product not found!");

    }

});


/* ENTER KEY */

searchInput.addEventListener("keydown", function (e) {

    if (e.key === "Enter") {
        searchButton.click();
    }

});
/* =========================
   EXPLORE CAROUSEL
========================= */

const exploreCarousel = document.querySelector(".explore-carousel");

const exploreNext = document.querySelector(".explore-next");

const explorePrev = document.querySelector(".explore-prev");


exploreNext.addEventListener("click", function () {

    const card = exploreCarousel.querySelector(".explore-item");
    const gap = 15;

    const cardWidth = card.offsetWidth;

    exploreCarousel.scrollBy({
        left: (cardWidth + gap) * 2,
        behavior: "smooth"
    });

});


explorePrev.addEventListener("click", function () {

    const card = exploreCarousel.querySelector(".explore-item");
    const gap = 15;

    const cardWidth = card.offsetWidth;

    exploreCarousel.scrollBy({
        left: -(cardWidth + gap) * 2,
        behavior: "smooth"
    });

});