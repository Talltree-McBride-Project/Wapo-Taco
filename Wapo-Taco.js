let BreakfastTacos=["BACON & EGG","POTATO & EGG","CHORIZO & EGG","HAM & EGG","BEAN & EGG","COUNTRY SAUSAGE & EGG","HUEVO A LA MEXICANA","BEAN & POTATO","CHORIZO & EGG","BACON & POTATO","PAPA LA LA MEXICANA","PAPA RANCHERA","BEAN & CHEESE TACO","TACO DE BARBACOA","TACO DE CARNE GUISADA","TACO DE PICADILLO","TACO DE CHICHARRON","TACO DE MIGAS","TACO DE CHILAQUILES","TACO DE MACHACADO"]

let BreakfastBurritos=["BREAKFAST TORTA","Filled with scrambled eggs, cheese, refried beans, and your choice of Bacon, Chorizo, OR Ham","BREAKFAST BURRITO","12' tortilla stuffed with scrambled eggs, potatoes, beans, cheese and your choice of Bacon, Chorizo, OR Ham"]

let desayunos=["WAPO BREAKFAST PLATE","2 eggs cooked your way, chorizo & potatoes, carne guisada, and 2 bacon slices served with refried beans","HUEVOS AL GUSTO","2 eggs made any way you want them. Served with refried beans and potatoes","HUEVOS A LA MEXICANA","Served with refried beans and potatoes","HUEVOS CON BACON","Served with refried beans and potatoes","HUEVOS CON CHORIZO","Served with refried beans and potatoes","HUEVOS CON COUNTRY SAUSAGE","Served with refried beans and potatoes","HUEVOS DIVORCIADOS","2 eggs, one topped with salsa verde and the other with salsa ranchera. Served with refried beans and potatoes","HUEVOS RANCHEROS","A corn tortilla topped with a slice of ham, 2 eggs cooked your way, and salsa ranchera. Served with refried beans and potatoes","MEXICAN OMELETTE","Stuffed with cheese, bell pepper, tomato, onions, and youor choice of Bacon, Chorizo, or Ham. Served with refried beans and potatoes","CHILAQUILES","2 Eggs cooked your way, tortilla strips cooked with our salsa casera, and topped with queso fresco. Served with refried beans and potatoes","MIGAS","Scrambled eggs mixed with tortilla strips. Served with refried beans and potatoes","BARBACOA PLATE","Served with refried beans and potatoes","CARNE GUISADA PLATE","Served with refried beans and potatoes","CARNE A LA MEXICANA PLATE","Served with refried beans and potatoes","CHICHARRON EN SALSA VERDE PLATE","Served with refried beans and potatoes","MACHACADO PLATE","Served with refried beans and potatoes","PICADILLO PLATE","Served with refried beans and potatoes"]

let appetizers = ["CHIPS & GUACAMOLE","CHIPS & QUESO","CHIPS & SALSA"]

let meatChoices=["-BEEF-","ASADA","BARBACOA","BEEF FAJITA","with grilled onions & bell peppers","CARNE GUISADA","PICADILLO","-CHICKEN-","CHICKEN FAJITA","with grilled onions & bell peppers","POLLO DESHEBRADO","-PORK-","AL PASTOR","CARNITAS","GUISADO DE PUERCO"]

let tacos=["MEXICAN TACO","Corn tortilla filled with your choice of meat, topped with onion and cilantro","GRINGO TACO","Flour tortilla filled with your choice of meat, topped with lettuce, cheese, tomato, and sour cream","REGULAR TACO","Flour tortilla filled with you choice of meat","WAPO TACO","Flour tortilla filled with your choice of meat, beans, cheese, and avocado. Lightly toasted!","MINI TACOS","5 mini taquitos filled with your choice of up to 2 meats, topped with onions and cilantro."]

let burritos=["BURRITO GRANDE","Large flour tortilla stuffed with rice, beans, your choice of meat, cheese, sour cream, lettuce, and tomato","CHICKEN FLAUTAS","3 flautas stuffed with shredded chicken and topped with lettuce, tomato, sour cream, & queso fresco. Served with rice and beans","LOADED NACHOS","Home-made chips topped with beans, choice of meat, loads of cheese, sour cream, and guacamole","NAKED BURRITO","Just like our Burrito Grande, but without the tortilla","QUESADILLA","Large flour tortilla stuffed with your choice of meat and loads of cheese. Served with a side of sour cream","SUPER TORTA","Mexican sandwich filled with choice of meat, beans, lettuce, tomato, avocado, cheese, and sour cream"]

let platillos=["2 MEAT PLATE","You choose the meats and we will make it into a meal","3 MEAT PLATE","You choose the meats and we will make it into a meal","CHILE RELLENO","A chile poblano stuffed with cheese & picadillo or cheese & shredded chicken and topped with our salsa ranchera. Served with rice and beans"]

let enchiladas=["2 ENCHILADA PLATE","3 ENCHILADA PLATE","CHOOSE FROM","CHICKEN, CHEESE, OR BEEF","TYPE OF ENCHILADAS","CASERAS, ENMOLADAS, SUIZAS, TEX-MEX, OR VERDES","CASERAS","Traditional red sauce, topped with queso fresco","ENMOLADAS","Homemade Mole sauce, topped with queso fresco","SUIZAS","Creamy poblano/tomatillo sauce, topped with cheese and sour cream","TEX-MEX","Carne guisada sauce, topped with cheese","VERDES","Green tomatillo sauce, topped with cheese"]

let underTheSea=["CEVICHE FRESCO","Composed of tilapia cured in citrus juices, spices, onion, and cilantro. Topped with avocado slices and served with chips","WAPO C-FOOD TACO","Corn tortilla filled with grilled tilapia or shrimp, topped with chipotle coleslaw and pico de gallo","BAJA C-FOOD TACO","Corn tortilla filled with beer battered tilapia or shrimp, topped with chipotle coleslaw and pico de gallo","TACO GOBERNADOR","Deliciously seasoned shrimp, onion, and bell pepper stuffed in a flour tortilla filled with cheese and delicately grilled to perfection!"]

let weekendsOnly=["BIRRIA","A Jalisco Tradition! Slow roasted beef topped with an exquisite, spicy stew. Accompanied with corn tortillas, onion, cilantro, and limes","MENUDO","Savory, tender honeycomb beef stew, slow cooked for hours with spices. Accompanied with corn onion, oregano, crushed peppers, and corn tortillas","POZOLE","An appetizing pork stew with savory hominy kernels. Accompanied with onion, lettuce/cabbage, radish, lime, and tostadas"]

let breakfastTacos=document.getElementById("breakfastTacos");
let menuDivInnerHTML="";
for (let i=0; i<BreakfastTacos.length; i++){
    menuDivInnerHTML+='<div class="card m-1" style="width: 18rem;">';
    menuDivInnerHTML+='<img src="..." class="card-img-top" alt="...">'
    menuDivInnerHTML+='<div class="card-body">';
    menuDivInnerHTML+=`<p class="card-text">${BreakfastTacos[i]}</p>`
    menuDivInnerHTML+='</div></div>'

}
breakfastTacos.innerHTML=menuDivInnerHTML;

let breakfastBurritos=document.getElementById("breakfastBurritos");
 menuDivInnerHTML="";
for (let i=0; i<BreakfastBurritos.length; i++){
    if (i%2===0) {
        menuDivInnerHTML += '<div class="card m-1" style="width: 18rem;">';
        menuDivInnerHTML += '<img src="..." class="card-img-top" alt="...">'
        menuDivInnerHTML += '<div class="card-body">';
        menuDivInnerHTML+=`<h4>${BreakfastBurritos[i]}</h4>`
    } else {
        menuDivInnerHTML += `<p class="card-text">${BreakfastBurritos[i]}</p>`
        menuDivInnerHTML += '</div></div>'
    }

}
breakfastBurritos.innerHTML=menuDivInnerHTML;

let desayunosDiv=document.getElementById("desayunos");
menuDivInnerHTML="";
for (let i=0; i<desayunos.length; i++){
    if (i%2===0) {
        menuDivInnerHTML += '<div class="card m-1" style="width: 18rem;">';
        menuDivInnerHTML += '<img src="..." class="card-img-top" alt="...">'
        menuDivInnerHTML += '<div class="card-body">';
        menuDivInnerHTML+=`<h4>${desayunos[i]}</h4>`
    } else {
        menuDivInnerHTML += `<p class="card-text">${desayunos[i]}</p>`
        menuDivInnerHTML += '</div></div>'
    }

}
desayunosDiv.innerHTML=menuDivInnerHTML;


