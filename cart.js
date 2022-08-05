let carts = document.querySelectorAll('.add-cart');
let products=[
{
	name:'Grey TShirt',
	tag:'avengerstshirt',
	price:15,
	inCart:0
},
{
	name:'Black TShirt',
	tag:'avengers2',
	price:10,
	inCart:0
},
{
	name:'Red TShirt',
	tag:'friends',
	price:25,
	inCart:0
},
{
	name:'Green TShirt',
	tag:'friends2',
	price:17,
	inCart:0
},
{
	name:'Blue TShirt',
	tag:'netflix',
	price:25,
	inCart:0
},
{
	name:'Pink TShirt',
	tag:'netflix2',
	price:17,
	inCart:0
}
];
for (let i=0; i < carts.length;i++){
	carts[i].addEventListener('click',() => {
		cartNumbers(products[i]);
		totalCost(products[i]);
	})
}
function onLoadCartNumbers(){
	let productNumbers = localStorage.getItem('cartNumbers');
	if(productNumbers){
		document.querySelector('.nav-item span').textContent = productNumbers;
	}
}

function cartNumbers(product){
	let productNumbers = localStorage.getItem('cartNumbers');
	productNumbers = parseInt(productNumbers);
	if(productNumbers){
		localStorage.setItem('cartNumbers',productNumbers + 1);
		document.querySelector('.nav-item span').textContent =productNumbers + 1;
	}else{
		localStorage.setItem('cartNumbers',1);
		document.querySelector('.nav-item span').textContent = 1;
	}
	setItems(product);
	
}
function setItems(product) {
	let cartItems= localStorage.getItem('productsInCart');
	cartItems = JSON.parse(cartItems)
	if(cartItems != null){
		if(cartItems[product.tag] == undefined){
			cartItems ={
				...cartItems,
				[product.tag]:product
			}
			
		}
		cartItems[product.tag].inCart += 1;
	} else{
		product.inCart = 1;
		cartItems={
			[product.tag]:product
		
		}
	} 

	localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}
function totalCost(product) {
	let cartCost = localStorage.getItem('totalCost');
	
	if (cartCost != null) {
		cartCost = parseInt(cartCost);
		localStorage.setItem("totalCost", cartCost + product.price);

	} else {
		localStorage.setItem("totalCost", product.price);
	}
	
}
function displayCart(){
	let cartItems = localStorage.getItem("productsInCart");
	cartItems = JSON.parse(cartItems);
	let productContainer = document.querySelector(".products");
	let cartCost = localStorage.getItem('totalCost');
if (cartItems && productContainer) {
	productContainer.innerHTML = '';
	Object.values(cartItems).map(item => {
			productContainer.innerHTML +=
				'<div class="product"><ion-icon name="close-circle-outline"></ion-icon><img src="./assets/img/home/'+item.tag+'.jpeg"><span>'+item.name+'</span></div><div class="price">$'+item.price+'</div><div class="quantity"><span>'+item.inCart+'</span></div><div class="total">$'+item.inCart * item.price+'</div>';
					
		});
		productContainer.innerHTML +='<div class="basketTotalContainer"><h4 class="basketTotalTitle">Basket Total</h4><h4 class="basketTotal">$'+cartCost+'</h4>'
	}
}

displayCart();
onLoadCartNumbers();