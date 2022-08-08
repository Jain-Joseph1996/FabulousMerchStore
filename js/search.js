$(document).ready(function(){
 
let productsjson = {
    data: [
      {
        productName: "Friends Large T-Shirt",
        category: "Shows",
        price: "30",
        image: "./assets/img/home/friends.jpeg",
        id:"1",
        href: "./productdetails.html?src=./assets/img/home/friends.jpeg&price=30&name=Friends Large T-Shirt&id=1"
      },
      {
        productName: "Stranger Things T-Shirt",
        category: "Shows",
        price: "49",
        id:"2",
        image: "./assets/img/home/strangerthings.jpeg",
        href: "./productdetails.html?src=./assets/img/home/strangerthings.jpeg&price=49&name=Stranger Things T-Shirt&id=2"
      },
      {
        productName: "The Office T-Shirt",
        category: "Shows",
        price: "99",
        id:"3",
        image: "./assets/img/home/office.jpeg",
        href: "./productdetails.html?src=./assets/img/home/office.jpeg&price=99&name=The Office T-Shirt&id=3"
      },
      {
        productName: "Avengers T-Shirt",
        category: "Movies",
        price: "29",
        id:"4",
        image: "./assets/img/home/avengerstshirt.jpeg",
        href: "./productdetails.html?src=./assets/img/home/avengerstshirt.jpeg&price=29&name=Avengers T-Shirt&id=4"
      },
      {
        productName: "Star Wars T-Shirt",
        category: "Movies",
        price: "129",
        id:"5",
        image: "./assets/img/home/starwars.jpeg",
        href: "./productdetails.html?src=./assets/img/home/starwars.jpeg&price=129&name=Star Wars T-Shirt&id=5"
      },
      {
        productName: "Pink Floyd T-Shirt",
        category: "Band",
        price: "89",
        id:"6",
        image: "./assets/img/home/pinkfloyd.jpeg",
        href: "./productdetails.html?src=./assets/img/home/pinkfloyd.jpeg&price=89&name=Pink Floyd T-Shirt&id=6"
      },
      {
        productName: "Beatles T-Shirt",
        category: "Band",
        price: "189",
        id:"7",
        image: "./assets/img/home/beatles.jpeg",
        href: "./productdetails.html?src=./assets/img/home/beatles.jpeg&price=189&name=Beatles T-Shirt&id=7"
      },
      {
        productName: "Rolling Stones T-Shirt",
        category: "Band",
        price: "49",
        id:"8",
        image: "./assets/img/home/rollingstones.jpeg",
        href: "./productdetails.html?src=./assets/img/home/rollingstones.jpeg&price=49&name=Rolling Stones T-Shirt&id=8"
      },
    ],
  };
  
  for (let i of productsjson.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    // <a> link
    let aContainer = document.createElement("div");
    aContainer.classList.add("a-container");
    //a tag
    let atag = document.createElement("a");
    atag.appendChild(imgContainer);
    atag.setAttribute("href", i.href);
    aContainer.appendChild(atag);
    
    card.appendChild(aContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);

    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  
  filterProduct("all");
  
  //Search button click
  document.getElementById("search-button").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });

})

 //parameter passed from button (Parameter same as category)
 function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }