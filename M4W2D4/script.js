
const url = "https://striveschool-api.herokuapp.com/books";

let cartTotal = 0; 

const fetchBooks = () => {
  fetch(url)
    .then((res) => res.json())
    .then((books) => {
      console.log(books);
      const cont = document.querySelector(".album .row");
      cont.innerHTML = books
        .map(
          ({ asin, img, title, price }) => `
            <div class="col col-3">
              <div class="card mb-4 shadow-sm" id="book_${asin}">
                <img src="${img}" class="card-img-top" alt="${title}" />
                <div class="card-body">
                  <p class="font-weight-bold text-truncate book-title">${title}</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <button class="btn btn-primary" onclick="addToCart('${title}', '${price}', '${asin}')">
                      EUR ${price}
                    </button>
                    <button class="btn btn-secondary" onclick="hideCard('${asin}')">Nascondi</button>
                  </div>
                </div>
              </div>
            </div>`
        )
        .join("");
    })
    .catch((error) => {
      console.error("Errore nel recupero dei dati:", error);
    });
};


const hideCard = (asin) => {
  const bookCard = document.querySelector(`#book_${asin}`);
  if (bookCard) {
    bookCard.style.display = 'none';
  }
};

const addToCart = (title, price, asin) => {
  const cart = document.querySelector(".list-group");

  cart.innerHTML += `
    <li class="list-group-item" id="cart-item-${asin}">
      ${title}, EUR ${price} 
      <button class="btn btn-danger btn-sm float-end" onclick="removeFromCart('${asin}', ${price})">X</button>
    </li>
  `;


  cartTotal += parseFloat(price);
  updateCartTotal();
};


const removeFromCart = (asin, price) => {
  const cartItem = document.querySelector(`#cart-item-${asin}`);
  if (cartItem) {
    cartItem.remove();
  }


  cartTotal -= parseFloat(price);
  updateCartTotal();
};


const updateCartTotal = () => {
  const totalElement = document.querySelector("h1 span");
  totalElement.innerText = cartTotal.toFixed(2);
};


const emptyCart = () => {
  document.querySelector(".list-group").innerHTML = "";
  cartTotal = 0;
  updateCartTotal();
};

window.onload = () => {
    fetchBooks();
  };