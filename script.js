const allMenus = [{
        title: "Idli Sambar",
        price: "Rs100",
        img: "./assets/idli.jpg",
        type: "breakfast",
        des: "Healthy south indian breakfast with spongy light idli and flavoured soupy sambar."
}, {
        title: "Poha",
        price: "Rs100",
        img: "./assets/poha1.jpg",
        type: "breakfast",
        des: "Maharastrian dish Poha with flavours of lemon, coconut and coriander."
}, {
        title: "Paneer Masala",
        price: "Rs100",
        img: "./assets/paneer.jpg",
        type: "lunch",
        des: "Maharastrian dish Poha with flavours of lemon, coconut and coriander."
}, {
        title: "Misal Pav",
        price: "Rs100",
        img: "./assets/misal.jpg",
        type: "lunch",
        des: "Maharastrian dish Poha with flavours of lemon, coconut and coriander."
}, {
        title: "Mango Milkshake",
        price: "Rs100",
        img: "./assets/mango.jpg",
        type: "shakes",
        des: "Maharastrian dish Poha with flavours of lemon, coconut and coriander."
}, {
        title: " Chocolate Milkshake",
        price: "Rs100",
        img: "./assets/choco.jpg",
        type: "shakes",
        des: "Maharastrian dish Poha with flavours of lemon, coconut and coriander."
}, {
        title: "Chhole Bhature",
        price: "Rs100",
        img: "./assets/chhole.jpg",
        type: "dinner",
        des: "Maharastrian dish Poha with flavours of lemon, coconut and coriander."
}, {
        title: "Pav Bhaji",
        price: "Rs100",
        img: "./assets/pavbhaji.jpg",
        type: "dinner",
        des: "Maharastrian dish Poha with flavours of lemon, coconut and coriander."
}]

function onMenuClick(type) {
       
        document.getElementById("demo").innerHTML = ''
        let filteredMenus = [];
        if (type == 'all') {
                filteredMenus = allMenus;
        }
        else {
                filteredMenus = allMenus.filter((menu) => menu.type === type)
        }

        console.log("\n\n\n filters", filteredMenus)
        filteredMenus.forEach((menu) => {
                var value = `<div id=${menu.title}>
        <img src=${menu.img}>
        <div class="food_des">
        <h3 ><b>${menu.title}</b></h3>
        <h5>${menu.price}</h5>
        <hr style="border:1px dotted rgb(118, 118, 143)">
        <p>${menu.des}</p>
        </div>`
                document.getElementById("demo").style = "display:flex"
                document.getElementById("demo").innerHTML += value;
        })
}

this.onMenuClick("all")
