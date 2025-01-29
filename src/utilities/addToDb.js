const getCartList = () => {
  const storedCartStr = localStorage.getItem("cart");
  if (storedCartStr) {
    const storedCartList = JSON.parse(storedCartStr);
    return storedCartList;
  } else {
    return [];
  }
};

const addToCartList = (id) => {
  const cartList = getCartList();
  if (!cartList.includes(id)) {
    cartList.push(id);
    const cartListStr = JSON.stringify(cartList);
    localStorage.setItem("cart", cartListStr);
  }
};

const getWishList = () => {
  const wishListStr = localStorage.getItem("wish");
  if (wishListStr) {
    const wishList = JSON.parse(wishListStr);
    return wishList;
  } else {
    return [];
  }
};

const addToWishList = (id) => {
  const wishList = getWishList();
  if (!wishList.includes(id)) {
    wishList.push(id);
    const wishListStr = JSON.stringify(wishList);
    localStorage.setItem("wish", wishListStr);
    return true;
  } else {
    return false;
  }
};

const removeFromCart = (id) => {
  const cartList = getCartList();
  if (cartList) {
    const newCartList = cartList.filter((cart) => cart !== id);
    const cartListSrt = JSON.stringify(newCartList);
    localStorage.setItem("cart", cartListSrt);
  }
};

const removeFromWish = (id) => {
  const wishList = getWishList();
  const newWishList = wishList.filter((wish) => wish !== id);
  const wishListStr = JSON.stringify(newWishList);
  localStorage.setItem("wish", wishListStr);
};

export {
  addToCartList,
  addToWishList,
  getCartList,
  getWishList,
  removeFromCart,
  removeFromWish,
};
