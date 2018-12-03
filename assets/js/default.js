const ITEMS_URL = '/content/products.json';
const STORAGE_KEY = 'OVI_CART';

const JSONcart = localStorage.getItem(STORAGE_KEY);
const cart = JSONcart ? JSON.parse(JSONcart) : [];

const getCartSize = () => {
  const size = cart.reduce((previous, current) => {
    return previous + Number(current.quantity);
  }, 0);

  const $badge = $('.cart-badge');
  $badge.text(size);
  if (size > 0) {
    $badge.removeClass('d-none');
  } else {
    $badge.addClass('d-none');
  }

  return size;
};

const addToCart = item => {
  const itemIndex = cart.findIndex(
    _item => _item.id.toString() === item.id.toString()
  );

  if (itemIndex > -1) {
    const newQuantity = Number(cart[itemIndex].quantity) + 1;
    cart[itemIndex].quantity = newQuantity;
  } else {
    cart.push({
      id: item.id,
      item,
      quantity: 1
    });
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  getCartSize();
};

const removeFromCart = (id, removeOne) => {
  const itemIndex = cart.findIndex(
    _item => _item.id.toString() === id.toString()
  );

  if (itemIndex > -1) {
    if (removeOne) {
      const newQuantity = Number(cart[itemIndex].quantity) - 1;
      if (newQuantity < 1) {
        cart.splice(itemIndex, 1);
      } else {
        cart[itemIndex].quantity = newQuantity;
      }
    } else {
      cart.splice(itemIndex, 1);
    }
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  getCartSize();
};

$(document).ready(function() {
  getCartSize();
});
