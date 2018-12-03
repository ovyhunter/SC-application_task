function renderCart() {
    const $itemsContainer = $('.cart-items-container');
    const $subtotal = $('#subtotal');
    const $tax = $('#tax');
    const $total = $('#total');
  
    let billSubtotal = 0;
  
    $itemsContainer.html('');
    cart.forEach(cartItem => {
      const {
        item: { image, name, price },
        id,
        quantity
      } = cartItem;
  
      const subtotal = Number(price.replace('.', '')) * quantity;
      billSubtotal += subtotal;
  
      $itemsContainer.append(`
      <div>
        <img class="card-img-top cart-img" src="content/pictures/${image}1.png" style="width:200px;height:200px";>
        <div class="name-div">
          <strong>Product:</strong> ${name} 
        </div> <br>
        <div class="quantity-div">
          <strong>Quantity:</strong> ${quantity}
        </div> <br>
        <div class="price-div">
          <strong>Price:</strong> £${price}
        </div> <br>
        <div class="btn-group">
        <button class="plus-btn btn btn-sm btn-outline-secondary" data-target="${id}">+</button>
        <button class="minus-btn btn btn-sm btn-outline-secondary" data-target="${id}">-</button>
        <button class="remove-btn btn btn-sm btn-outline-secondary" data-target="${id}">Remove</button>
        </div>
      </div><br><hr>
      `);
    });
  
    $plusBtn = $('.plus-btn');
    $minusBtn = $('.minus-btn');
    $removeBtn = $('.remove-btn');
  
    $plusBtn.click(function () {
      const id = $(this).attr('data-target');
      const item = cart.find(cartItem => cartItem.id.toString() === id.toString())
        .item;
      addToCart(item);
      renderCart();
    });
  
    $minusBtn.click(function () {
      const id = $(this).attr('data-target');
      removeFromCart(id, true);
      renderCart();
    });
  
    $removeBtn.click(function () {
      const id = $(this).attr('data-target');
      removeFromCart(id);
      renderCart();
    });
  
    const tax = parseInt((25 / 100) * billSubtotal);
    $subtotal.html('&pound; ' + billSubtotal);
    $tax.html('&pound; ' + tax);
    $total.html('&pound; ' + Number(billSubtotal + tax));
  }
  
  $(document).ready(function () {
    getCartSize();
    renderCart();
  });
  