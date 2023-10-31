var menu1 = {title:"Idli sambar",
                    img:"./assignments/Menu/assets/idli.jpg",
                    type:"breakfast",
                    des:"Healthy south indian breakfast with spongy light idli and flavoured soupy sambar."
            } 
var menu2 = {title: "Poha",
                    img:"./assets/poha1.jpg",
                    type:"breakfast",
                    des:"Maharastrian dish Poha with flavours of lemon, coconut and coriander."
            }
var menu3 = {title:"Misal pav",
                    img:"./assignments/Menu/assets/misal.jpg",
                    type:"lunch",
                    des:"Maharashtrian famous dish of mothbeans flavourous curry and soft buns."
            } 
var menu4 = {title: "Paneer masala with naan and pulav",
                    img:"./assignments/Menu/assets/paneer.jpg",
                    type:["lunch","dinner"],
                    des:"Fresh paneer masala curry with buttery naan and steamed hot rice."
            }
var menu5 = {title:"Mango Milkshake",
                     img:"./assignments/Menu/assets/mango.jpg",
                     type:"shakes",
                     des:"Mango flavored creamy milkshake.Mango flavored creamy milkshake."
            } 
var menu6 = {title: "Chocolate Milkshake",
                     img:"./assignments/Menu/assets/choco.jpg",
                     type:"shakes",
                     des:"Sweet chocolate flavoured milkshake with ice-cream."
            }
var menu7 = {title:"Pav Bhaji",
                     img:"./assignments/Menu/assets/pavbhaji.jpg",
                     type:"dinner",
                     des:"Flavourfull curry madeup of vegetables and spices with soft buns garnished with coriander, lemon and onion."
            } 
var menu8 = {title: "Chhole Bhature",
                     img:"./assignments/Menu/assets/chhole.jpg",
                     type:"dinner",
                     des:"Flavourfull curry of cheakpeas madeup of spices with deep fried breads."
            }
var value1 = `<div id="idli">
                <img src=${menu1.img}>
                </div>
                <div class="food_des">
                <h3 ><b>${menu1.title}</b></h3>
                <h5>Rs.40</h5>
                <hr style="border:1px dotted rgb(118, 118, 143)">
                <p>${menu1.des}</p>
                </div>`
var value2  =  `<div id="poha">
                <img src=${menu2.img}>
                </div>
                <div class="food_des">
                <h3><b>${menu2.title}</b></h3>
                <h5>Rs.80</h5>
                <hr style="border:1px dotted rgb(118, 118, 143)">
                <p>${menu2.des}</p>
                </div>`
function onBreakfastClick(){
  document.getElementById('breakfast').style= 'display:flex'
  document.getElementById('breakfast').innerHTML = value1 + value2;
  document.getElementById("lunch").style.display= 'none';
  document.getElementById("shakes").style.display= 'none';
  document.getElementById("dinner").style.display= 'none';
}
var value3 = `<div id="misal">
                <img src=${menu3.img}>
                </div>
                <div class="food_des">
                <h3 ><b>${menu3.title}</b></h3>
                <h5>Rs.40</h5>
                <hr style="border:1px dotted rgb(118, 118, 143)">
                <p>${menu3.des}</p>
                </div>`
var value4  =  `<div id="paneer">
                <img src=${menu4.img}>
                </div>
                <div class="food_des">
                <h3><b>${menu4.title}</b></h3>
                <h5>Rs.80</h5>
                <hr style="border:1px dotted rgb(118, 118, 143)">
                <p>${menu4.des}</p>
                </div>`
function onLunchClick(){
  document.getElementById('lunch').style= 'display:flex'
  document.getElementById('lunch').innerHTML = value3 + value4;
  document.getElementById("breakfast").style.display= 'none';
  document.getElementById("shakes").style.display= 'none';
  document.getElementById("dinner").style.display= 'none';
}
var value5 = `<div id="mango">
                <img src=${menu5.img}>
                </div>
                <div class="food_des">
                <h3 ><b>${menu5.title}</b></h3>
                <h5>Rs.40</h5>
                <hr style="border:1px dotted rgb(118, 118, 143)">
                <p>${menu5.des}</p>
                </div>`
var value6  =  `<div id="choco">
                <img src=${menu6.img}>
                </div>
                <div class="food_des">
                <h3><b>${menu6.title}</b></h3>
                <h5>Rs.80</h5>
                <hr style="border:1px dotted rgb(118, 118, 143)">
                <p>${menu6.des}</p>
                </div>`
function onShakesClick(){
  document.getElementById('shakes').style= 'display:flex'
  document.getElementById('shakes').innerHTML = value5 + value6;
  document.getElementById("lunch").style.display= 'none';
  document.getElementById("breakfast").style.display= 'none';
  document.getElementById("dinner").style.display= 'none';
}
var value7 = `<div id="pavbhaji">
                <img src=${menu7.img}>
                </div>
                <div class="food_des">
                <h3 ><b>${menu7.title}</b></h3>
                <h5>Rs.40</h5>
                <hr style="border:1px dotted rgb(118, 118, 143)">
                <p>${menu7.des}</p>
                </div>`
var value8  =  `<div id="choco">
                <img src=${menu8.img}>
                </div>
                <div class="food_des">
                <h3><b>${menu8.title}</b></h3>
                <h5>Rs.80</h5>
                <hr style="border:1px dotted rgb(118, 118, 143)">
                <p>${menu8.des}</p>
                </div>`
function onDinnerClick(){
  document.getElementById('dinner').style= 'display:flex'
  document.getElementById('dinner').innerHTML = value7 + value8;
  document.getElementById("lunch").style.display= 'none';
  document.getElementById("shakes").style.display= 'none';
  document.getElementById("breakfast").style.display= 'none';
}
function onMenuClick(){
  document.getElementById("breakfast").innerHTML= value1+value2;
  document.getElementById("lunch").innerHTML= value3+value4;
  document.getElementById("shakes").innerHTML= value5+value6;
  document.getElementById("dinner").innerHTML= value7+value8; 
  document.getElementById("breakfast").style.display= 'flex';
  document.getElementById("lunch").style.display= 'flex';
  document.getElementById("shakes").style.display= 'flex';
  document.getElementById("dinner").style.display= 'flex'; 
}