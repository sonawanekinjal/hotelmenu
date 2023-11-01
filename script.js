var allmenu = [{title:"Idli sambar",
                    price:"Rs100",
                    img:"./assets/idli.jpg",
                    type:"breakfast",
                    des:"Healthy south indian breakfast with spongy light idli and flavoured soupy sambar."
            } , {title: "Poha",
                    price:"Rs100",
                    img:"./assets/poha1.jpg",
                    type:"breakfast",
                    des:"Maharastrian dish Poha with flavours of lemon, coconut and coriander."
            }, {title:"Misal pav",
                    price:"Rs100",
                    img:"./assets/misal.jpg",
                    type:"lunch",
                    des:"Maharashtrian famous dish of mothbeans flavourous curry and soft buns."
            } , {title: "Paneer masala with naan and pulav",
                    price:"Rs100",
                    img:"./assets/paneer.jpg",
                    type:["lunch","dinner"],
                    des:"Fresh paneer masala curry with buttery naan and steamed hot rice."
            }, {title:"Mango Milkshake",
                      price:"Rs100",
                     img:"./assets/mango.jpg",
                     type:"shakes",
                     des:"Mango flavored creamy milkshake.Mango flavored creamy milkshake."
            } , {title: "Chocolate Milkshake",
                     price:"Rs100",
                     img:"./assets/choco.jpg",
                     type:"shakes",
                     des:"Sweet chocolate flavoured milkshake with ice-cream."
            }, {title:"Pav Bhaji",
                    price:"Rs100",
                     img:"./assets/pavbhaji.jpg",
                     type:"dinner",
                     des:"Flavourfull curry madeup of vegetables and spices with soft buns garnished with coriander, lemon and onion."
            } , {title: "Chhole Bhature",
                      price:"Rs100",
                     img:"./assets/chhole.jpg",
                     type:"dinner",
                     des:"Flavourfull curry of cheakpeas madeup of spices with deep fried breads."
            }]
allmenu.forEach(type=>{
  let menu=[]
  if (type=='all'){
    menu=allmenu;
  }  
  else{
    menu=allmenu[type];
    var value = `<div id=${menu.title}>
                <img src=${menu.img}>
                <div class="food_des">
                <h3 ><b>${menu.title}</b></h3>
                <h5>${menu.price}</h5>
                <hr style="border:1px dotted rgb(118, 118, 143)">
                <p>${menu.des}</p>
                </div>`
  }
});
function onMenuClick(type) {
        document.getElementById(type).innerHTML = value;
}