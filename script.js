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
function onMenuClick(type){
  let menu=[]
  if (type=='all'){
    menu=allmenu;
  }
  else{
    menu=allmenu[type];
    var value = `<div id=${menu.title}>
                <img src=${menu.img}>
                </div>
                <div class="food_des">
                <h3 ><b>${menu.title}</b></h3>
                <h5>${menu.price}</h5>
                <hr style="border:1px dotted rgb(118, 118, 143)">
                <p>${menu.des}</p>
                </div>`
  }

}
menu.forEach(type => {
  document.getElementById(type).innerHTML= value;
});
// var value1 = `<div id="idli">
//                 <img src=${allmenu.img}>
//                 </div>
//                 <div class="food_des">
//                 <h3 ><b>${menu1.title}</b></h3>
//                 <h5>Rs.40</h5>
//                 <hr style="border:1px dotted rgb(118, 118, 143)">
//                 <p>${menu1.des}</p>
//                 </div>`
// var value2  =  `<div id="poha">
//                 <img src=${menu2.img}>
//                 </div>
//                 <div class="food_des">
//                 <h3><b>${menu2.title}</b></h3>
//                 <h5>Rs.80</h5>
//                 <hr style="border:1px dotted rgb(118, 118, 143)">
//                 <p>${menu2.des}</p>
//                 </div>`
// function onBreakfastClick(){
//   document.getElementById('breakfast').style= 'display:flex'
//   document.getElementById('breakfast').innerHTML = value1 + value2;
//   document.getElementById("lunch").style.display= 'none';
//   document.getElementById("shakes").style.display= 'none';
//   document.getElementById("dinner").style.display= 'none';
// }
// var value3 = `<div id="misal">
//                 <img src=${menu3.img}>
//                 </div>
//                 <div class="food_des">
//                 <h3 ><b>${menu3.title}</b></h3>
//                 <h5>Rs.40</h5>
//                 <hr style="border:1px dotted rgb(118, 118, 143)">
//                 <p>${menu3.des}</p>
//                 </div>`
// var value4  =  `<div id="paneer">
//                 <img src=${menu4.img}>
//                 </div>
//                 <div class="food_des">
//                 <h3><b>${menu4.title}</b></h3>
//                 <h5>Rs.80</h5>
//                 <hr style="border:1px dotted rgb(118, 118, 143)">
//                 <p>${menu4.des}</p>
//                 </div>`
// function onLunchClick(){
//   document.getElementById('lunch').style= 'display:flex'
//   document.getElementById('lunch').innerHTML = value3 + value4;
//   document.getElementById("breakfast").style.display= 'none';
//   document.getElementById("shakes").style.display= 'none';
//   document.getElementById("dinner").style.display= 'none';
// }
// var value5 = `<div id="mango">
//                 <img src=${menu5.img}>
//                 </div>
//                 <div class="food_des">
//                 <h3 ><b>${menu5.title}</b></h3>
//                 <h5>Rs.40</h5>
//                 <hr style="border:1px dotted rgb(118, 118, 143)">
//                 <p>${menu5.des}</p>
//                 </div>`
// var value6  =  `<div id="choco">
//                 <img src=${menu6.img}>
//                 </div>
//                 <div class="food_des">
//                 <h3><b>${menu6.title}</b></h3>
//                 <h5>Rs.80</h5>
//                 <hr style="border:1px dotted rgb(118, 118, 143)">
//                 <p>${menu6.des}</p>
//                 </div>`
// function onShakesClick(){
//   document.getElementById('shakes').style= 'display:flex'
//   document.getElementById('shakes').innerHTML = value5 + value6;
//   document.getElementById("lunch").style.display= 'none';
//   document.getElementById("breakfast").style.display= 'none';
//   document.getElementById("dinner").style.display= 'none';
// }
// var value7 = `<div id="pavbhaji">
//                 <img src=${menu7.img}>
//                 </div>
//                 <div class="food_des">
//                 <h3 ><b>${menu7.title}</b></h3>
//                 <h5>Rs.40</h5>
//                 <hr style="border:1px dotted rgb(118, 118, 143)">
//                 <p>${menu7.des}</p>
//                 </div>`
// var value8  =  `<div id="choco">
//                 <img src=${menu8.img}>
//                 </div>
//                 <div class="food_des">
//                 <h3><b>${menu8.title}</b></h3>
//                 <h5>Rs.80</h5>
//                 <hr style="border:1px dotted rgb(118, 118, 143)">
//                 <p>${menu8.des}</p>
//                 </div>`
// function onDinnerClick(){
//   document.getElementById('dinner').style= 'display:flex'
//   document.getElementById('dinner').innerHTML = value7 + value8;
//   document.getElementById("lunch").style.display= 'none';
//   document.getElementById("shakes").style.display= 'none';
//   document.getElementById("breakfast").style.display= 'none';
// }
// function onMenuClick(){
//   document.getElementById("breakfast").innerHTML= value1+value2;
//   document.getElementById("lunch").innerHTML= value3+value4;
//   document.getElementById("shakes").innerHTML= value5+value6;
//   document.getElementById("dinner").innerHTML= value7+value8; 
//   document.getElementById("breakfast").style.display= 'flex';
//   document.getElementById("lunch").style.display= 'flex';
//   document.getElementById("shakes").style.display= 'flex';
//   document.getElementById("dinner").style.display= 'flex'; 
// }