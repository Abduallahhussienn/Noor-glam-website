const data = [0, 0, 0, 0, 0, 0]; 
var x = document.getElementsByClassName("counting");

    //creation of increment function 
    function increment(i) { 
        data[i] = data[i] + 1; 
        if (data[i] > 10) {
            data[i] = 10;
        }
        x[i].innerText = data[i];
    } 
    //creation of decrement function 
    function decrement(i) { 
        data[i] = data[i] - 1; 
        if (data[i] < 0) {
            data[i] = 0;
        }
        x[i].innerText = data[i];
    } 

    function toggle() {
            var t = document.querySelector('.secondpage');
            t.classList.toggle('active');
        }    
////////////////////////////////////////////
var product_array = [];
product_array[0] = ['Magic adhesive eyeliner (clear)', 200,data[0]];
product_array[1] = ['Magic adhesive eyeliner (black)', 300,0];
product_array[2] = ['Angel', 1300,0];
product_array[3] = ['Hling', 450,0];
product_array[4] = ['Sweet', 650,0];
product_array[5] = ['Wing', 2000,0];
function product_add(product_id){
    product_array[product_id][2] += 1;
    var remove_button_id = "r_" + product_id;
    var total_added = 0;
    var cart_list = "";
    var total_cost = 0;
    cart_list += '<div class="mb-2 card"><div class="card-body"><table width="90%"><tr><td><b>\tProduct name</b></td><td id="quantity" style="text-align: center; white-space: nowrap">'+ "<b>\tQuantity</b>" +'</td><td id="total_cost" style="text-align: left; white-space: nowrap">'+ "<b>\tTotal Cost</b>" +'</td></tr></table></div></div>';

    for (i = 0; i<product_array.length; i++){
        if (product_array[i][2] != 0 ){
            total_added += 1;
            cart_list += '<table width="90%"><tr><td><p>\t' + product_array[i][0] + '</p></td><td id="quantity" style="text-align: center; white-space: nowrap">'+ product_array[i][2] +'</td><td id="total_cost" style="text-align: center; white-space: nowrap">'+ product_array[i][2]*product_array[i][1] +'</td><td style=" text-align: center; white-space: nowrap"> <button style=" background-color: red; color: white; border-radius: 2.0rem;" onclick="close_single_cart(this.id)" id="cart_' + i +'">x</button></td></tr></table></div></div>';
            total_cost += product_array[i][2]*product_array[i][1];
        }
    }
   // document.getElementById('product_total').innerHTML = total_added;
    document.getElementById('Incart').innerHTML = cart_list;
    document.getElementById(remove_button_id).classList.remove('d-none');
}
///////////////////////////
function close_single_cart(clicked_id) {
    var make_main_id = "single_" + clicked_id;
    var original_id = clicked_id.substr(5);
    var remove_button_id = "r_" + original_id;
    product_array[original_id][2] = 0;
    var total_cost = 0;
    var total_added = 0;
    for (i = 0; i<product_array.length; i++){
        if (product_array[i][2] != 0 ){
            total_added += 1;
            total_cost += product_array[i][2]*product_array[i][1];
        }
    }
    document.getElementById('product_total').innerHTML = total_added;
    document.getElementById(make_main_id).classList.add('d-none');
    document.getElementById("total_cost").innerHTML = total_cost + "/=";
    document.getElementById(remove_button_id).classList.add('d-none');
}