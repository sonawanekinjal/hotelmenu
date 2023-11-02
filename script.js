var allmenu = [{title:"idli-sambar",
                    price:"Rs100",
                    img:"./assets/idli.jpg",
                    type:"breakfast",
                    des:"Healthy south indian breakfast with spongy light idli and flavoured soupy sambar."
            } , {title: "poha",
                    price:"Rs100",
                    img:"./assets/poha1.jpg",
                    type:"breakfast",
                    des:"Maharastrian dish Poha with flavours of lemon, coconut and coriander."
            }, {title:"misal-pav",
                    price:"Rs100",
                    img:"./assets/misal.jpg",
                    type:"lunch",
                    des:"Maharashtrian famous dish of mothbeans flavourous curry and soft buns."
            } , {title: "Paneer-masala",
                    price:"Rs100",
                    img:"./assets/paneer.jpg",
                    type:["lunch","dinner"],
                    des:"Fresh paneer masala curry with buttery naan and steamed hot rice."
            }, {title:"mango",
                      price:"Rs100",
                     img:"./assets/mango.jpg",
                     type:"shakes",
                     des:"Mango flavored creamy milkshake.Mango flavored creamy milkshake."
            } , {title: "chocolate",
                     price:"Rs100",
                     img:"./assets/choco.jpg",
                     type:"shakes",
                     des:"Sweet chocolate flavoured milkshake with ice-cream."
            }, {title:"pav-bhaji",
                    price:"Rs100",
                     img:"./assets/pavbhaji.jpg",
                     type:"dinner",
                     des:"Flavourfull curry madeup of vegetables and spices with soft buns garnished with coriander, lemon and onion."
            } , {title: "chhole-bhature",
                      price:"Rs100",
                     img:"./assets/chhole.jpg",
                     type:"dinner",
                     des:"Flavourfull curry of cheakpeas madeup of spices with deep fried breads."
            }]
// function onMenuClick(type){
//   let menu=[]
//   if (type=='all'){
//     menu.push(allmenu)
//   }  
//   else{
//     menu.push(allmenu[type])
//     var value = `<div id=${menu.title}>
//                 <img src=${menu.img}>
//                 <div class="food_des">
//                 <h3 ><b>${menu.title}</b></h3>
//                 <h5>${menu.price}</h5>
//                 <hr style="border:1px dotted rgb(118, 118, 143)">
//                 <p>${menu.des}</p>
//                 </div>`
//  }
//  allmenu.forEach(type => {
//         document.getElementById(type).innerHTML = value;
// }); 
// }
function onMenuClick(type){
        let menu = []
        if (type=="all"){
                menu.push(allmenu)
        }
        else{
        allmenu.filter(type);
        for (let iter=0 ; iter<allmenu.length ; iter++)
        {
                menu.push(allmenu[iter])
                var value = `<div id=${allmenu[iter].title}>
                             <img src=${allmenu[iter].img}>
                             <div class="food_des">
                             <h3 ><b>${allmenu[iter].title}</b></h3>
                             <h5>${allmenu[iter].price}</h5>
                             <hr style="border:1px dotted rgb(118, 118, 143)">
                             <p>${allmenu[iter].des}</p>
                             </div>`
        }
        allmenu.forEach(type=>{console.log(value);});
        }
}
// function Menu_type(type){
//         if (type=='breakfast'){
//                 menu.push(allmenu[0])
//         }
//         else if (type=='lunch'){
//                 menu.push(allmenu[1])
//         }
//         else if (type=='shakes'){
//                 menu.push(allmenu[2])
//         }
//         else if (type=='dinner'){
//                 menu.push(allmenu[3])
//         }
// }