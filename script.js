var sidemuneu = document.getElementById("sidemenu");

function openmenu() {
    sidemuneu.style.right = "0";
    sidemuneu.style.display = "block";
    document.getElementById("openn").classList.remove("active-bar");
    document.getElementById("closee").classList.add("active-bar");

}

function closemenu() {
    sidemuneu.style.right = "-300px";
	sidemuneu.style.display = "none";
        document.getElementById("closee").classList.remove("active-bar");
        document.getElementById("openn").classList.add("active-bar");
}


function drydhoop(){
    open("DryDhoop.html");
}

function sambrani(){
    open("sambrani.html");
}

function agarbatti(){
    open("agarbatti.html");
}

function floral(){
    open("floral.html");
}

function shop(){
    open("shop.html");
}

function offers(){
    open("offers.html");
}

// ===================================================================Prodetail

var mainimg= document.getElementById("mainimg");
var smallimg= document.getElementsByClassName("small-img");

smallimg[0].onclick = function (){
    mainimg.src = smallimg[0].src;
}

smallimg[1].onclick = function (){
    mainimg.src = smallimg[1].src;
}

smallimg[2].onclick = function (){
    mainimg.src = smallimg[2].src;
}

smallimg[3].onclick = function (){
    mainimg.src = smallimg[3].src;
}


// ==========================================================================cart
let qunt= document.getElementById("quantity");

$(document).ready(function() {
	$('.add-to-cart').click(function() {
		var item_id = $(this).attr('data-item-id');
		var item_name = $(this).attr('data-item-name');
		var item_price = $(this).attr('data-item-price');
		addToCart(item_id, item_name,item_price);
	});

	$('#view-cart').click(function() {
		showCart();
	});

	function addToCart(item_id, item_name, item_price) {
		var cart = localStorage.getItem('cart');
		if (!cart) {
			cart = [];
		} else {
			cart = JSON.parse(cart);
		}
		cart.push({
			id: item_id,
			name: item_name,
			price: item_price
		});
		localStorage.setItem('cart', JSON.stringify(cart));
		alert('Item added to cart!');
	}

	let total = 45;


	function showCart() {
		var cart = localStorage.getItem('cart');
		if (cart) {
			cart = JSON.parse(cart);
			var cartHtml = '<h2>Cart</h2><table>';
			cartHtml += '<tr><th>Items</th><th>Price (Rs.)</th><th>Sub-Total (Rs.)</th></tr>';
			for (var i = 0; i < cart.length; i++) {
				cartHtml += '<tr>';
				cartHtml += '<td>' + cart[i].name + '</td>';
				cartHtml += '<td>' + cart[i].price + '</td>';
				cartHtml += '<td>' + cart[i].price +'</td>';
				cartHtml += '</tr>'; 
				total = total + (parseInt(cart[i].price));
			}
			cartHtml += '<tr><th></th><th>Shipping Fee</th><th>45</th></tr>';
			cartHtml += '<th></th><th>Total</th>';
			cartHtml += '<th>'+ total +'</th>';
			$('#cart').html(cartHtml);
		} else {
			alert('Your cart is empty!');
			process.style.display = "none";

		}
	}
});

const button= document.getElementById("view-cart");
const caart = document.getElementById("cart");
const proceed = document.getElementById("process");


button.addEventListener('click', function(){
	if (caart.style.display === "none") {
		caart.style.display = "block";
	  } else {
		caart.style.display = "none";
		location.reload();
	  }
	  process.style.display = "block";
});

function address(){
    open("address.html");
	localStorage.clear();
}



