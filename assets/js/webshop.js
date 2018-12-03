$(document).ready(function() {
    const $itemsContainer = $('.items-container');
  
    $.getJSON(ITEMS_URL, itemList => {
      $itemsContainer.html('');
      itemList.forEach((item, index) => {
        const { image, name, price } = item;
  
        $itemsContainer.append(`
        <div class="col-md-4">
          <div class="card mb-4 box-shadow">
            <img class="card-img-top" src="content/pictures/${image}1.png" onmouseover="this.src='content/pictures/${image}2.png';"
              onmouseout="this.src='content/pictures/${image}1.png';" alt="Card image cap">
            <div class="card-body">
              <p class="card-text">${name}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary add-to-cart-btn" data-target="${index}">Add to cart</button>
                </div>
                <strong class="price-color">£${price}</strong>
              </div>
            </div>
          </div>
        </div>
        `);
      });
  
      $addBtn = $('.add-to-cart-btn');
      $addBtn.click(function() {
        const itemIndex = $(this).attr('data-target');
        addToCart(itemList[itemIndex]);
      });
    });
  });