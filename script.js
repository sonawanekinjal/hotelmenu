var allmenu = [{title:"idli-sambar",
                    price:"Rs100",
                    img:"./assets/idli.jpg",
                    type:"breakfast",
                    des:"Healthy south indian breakfast with spongy light idli and flavoured soupy sambar."
            } , {title: "poha",
                    price:"Rs100",
                    img:"./assets/poha1.jpg",
                    type:"breakfast",
                    des:"Maharastrian dish Poha with flavours of lemon, coconut and coriander."}]
        
for (let iter=0; iter<allmenu.length; iter++){
    var value =`<div id=${allmenu[iter].title}>
                <img src=${allmenu[iter].img}>
                <div class="food_des">
                <h3 ><b>${allmenu[iter].title}</b></h3>
                <h5>${allmenu[iter].price}</h5>
                <hr style="border:1px dotted rgb(118, 118, 143)">
                <p>${allmenu[iter].des}</p>
                </div>`
    document.getElementById("demo"),style = 'display:flex';
    document.getElementById("demo").innerHTML = value;
 }
