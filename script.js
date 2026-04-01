let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({name, price});
    total += price;
    updateCart();
}

function updateCart() {
    const items = document.getElementById("cart-items");
    items.innerHTML = "";
    cart.forEach(i => items.innerHTML += `<li>${i.name} - $${i.price}</li>`);
    document.getElementById("total").innerText = total;
    document.getElementById("cart-count").innerText = cart.length;
}

function toggleCart() {
    document.getElementById("cart").classList.toggle("active");
}

/* LANGUAGE */
function changeLanguage(lang) {
    if(lang === "si") {
        heroTitle.innerText="සියලු දෙනාටම උසස් භාණ්ඩ";
        heroText.innerText="සුවපහසුව සහ විලාසිතාව එකම තැනක";
        button.innerText="එන්න බලන්න";
        productTitle.innerText="අපගේ නිෂ්පාදන";
        contactTitle.innerText="අප අමතන්න";
        contacttext.innerText="අපි ඔබේ දවස තවත් පහසු කරන්නෙමු";
        p1.innerText="කලු සෙරප්පු";
        p2.innerText="කාන්තා ෆ්ලිප්-ෆ්ලොප්";
        p3.innerText="ළමා ක්ීඩා සපත්තු";
        p4.innerText="ගමන් මලු";
        p5.innerText="ගැහැනු ළමයින්ට සපත්තු";
        p6.innerText="කලු කබා";
        p7.innerText="සන්ග්ලාස්";
        p8.innerText="පිරිමි සරම්";
    } else location.reload();
}

/* PAYHERE */
function payNow() {
    payhere.startPayment({
        sandbox:true,
        merchant_id:"1220001",
        order_id:"SK001",
        items:"Superking Order",
        amount:total,
        currency:"USD",
        first_name:"Customer",
        email:"test@test.com",
        phone:"0771234567",
        address:"Sri Lanka",
        city:"Colombo",
        country:"Sri Lanka"
    });
}

/* SCROLL MICRO ANIMATION */
window.addEventListener("scroll",()=>{
    document.querySelector(".navbar")
        .classList.toggle("scrolled",window.scrollY>20);
});

/* MAGNETIC EFFECT */
document.querySelectorAll(".magnetic").forEach(el=>{
    el.addEventListener("mousemove",e=>{
        const r=el.getBoundingClientRect();
        el.style.transform=`translate(${(e.clientX-r.left-r.width/2)/10}px,${(e.clientY-r.top-r.height/2)/10}px)`;
    });
    el.addEventListener("mouseleave",()=>el.style.transform="translate(0,0)");
});
