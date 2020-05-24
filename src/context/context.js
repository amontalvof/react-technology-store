import React, { Component } from "react";
import { linkData } from "./linkData";
import { socialData } from "./socialData";
import { items } from "./productData";

const ProductContext = React.createContext();
//Provider
//Consumer

class ProductProvider extends Component {
  state = {
    sidebarOpen: false,
    cartOpen: false,
    links: linkData,
    socialIcons: socialData,
    cart: [],
    cartItems: 0,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    storedProducts: [],
    filteredProducts: [],
    featuredProducts: [],
    singleProduct: {},
    loading: true,
  };

  componentDidMount() {
    this.setProducts(items);
  }

  //set products from productData.js
  setProducts = (products) => {
    let storedProducts = products.map((item) => {
      const { id } = item.sys;
      const image = item.fields.image.fields.file.url;
      const product = { id, ...item.fields, image };
      return product;
    });
    //console.log(storeProducts);

    //featured products
    let featuredProducts = storedProducts.filter(
      (item) => item.featured === true
    );

    this.setState(
      {
        storedProducts: storedProducts,
        filteredProducts: storedProducts,
        featuredProducts: featuredProducts,
        cart: this.getStorageCart(),
        singleProduct: this.getStorageProduct(),
        loading: false,
      },
      () => {
        this.addTotals();
      }
    );
  };

  //get storage cart
  getStorageCart = () => {
    //return [];
    let cart;
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    } else {
      cart = [];
    }
    return cart;
  };

  //get storage product
  getStorageProduct = () => {
    //return {};
    return localStorage.getItem("singleProduct")
      ? JSON.parse(localStorage.getItem("singleProduct"))
      : {};
  };

  //get totals
  getTotals = () => {
    let subTotal = 0;
    let cartItems = 0;
    this.state.cart.forEach((item) => {
      subTotal += item.total;
      cartItems += item.count;
    });
    subTotal = parseFloat(subTotal.toFixed(2));
    let tax = subTotal * 0.1;
    tax = parseFloat(tax.toFixed(2));
    let total = subTotal + tax;
    total = parseFloat(total.toFixed(2));
    return {
      cartItems,
      subTotal,
      tax,
      total,
    };
  };

  //add totals
  addTotals = () => {
    const totals = this.getTotals();
    this.setState({
      cartItems: totals.cartItems,
      cartSubTotal: totals.subTotal,
      cartTax: totals.tax,
      cartTotal: totals.total,
    });
  };

  //sync Storage
  syncStorage = () => {
    localStorage.setItem("cart", JSON.stringify(this.state.cart));
  };

  //add To Cart
  addToCart = (id) => {
    //console.log(`add to cart ${id}`);
    let tempCart = [...this.state.cart];
    let tempProducts = [...this.state.storedProducts];
    let tempItem = tempCart.find((item) => item.id === id);
    let total;
    //console.log(tempItem);

    if (!tempItem) {
      tempItem = tempProducts.find((item) => item.id === id);
      //console.log(tempItem);
      if (tempItem.featured === false) {
        total = tempItem.price;
      } else {
        total = tempItem.price - (tempItem.price * tempItem.forsale) / 100;
      }
      //console.log(total);
      let cartItem = { ...tempItem, count: 1, total };
      //console.log(cartItem);
      tempCart = [...tempCart, cartItem];
      //console.log(tempCart);
    } else {
      tempItem.count++;
      if (!tempItem.featured) {
        tempItem.total = tempItem.price * tempItem.count;
      } else {
        tempItem.total =
          (tempItem.price - (tempItem.price * tempItem.forsale) / 100) *
          tempItem.count;
      }
      tempItem.total = parseFloat(tempItem.total.toFixed(2));
    }

    this.setState(
      () => {
        return { cart: tempCart };
      },
      () => {
        this.addTotals();
        this.syncStorage(); //si activo este metodo que esta arriba guardo los datos en el local storage del navegador
        this.openCart();
      }
    );
    //console.log(tempItem);
  };

  //set single product
  setSingleProduct = (id) => {
    //console.log(`set single product ${id}`);
    //console.log(id);

    let product = this.state.storedProducts.find((item) => item.id === id);
    localStorage.setItem("singleProduct", JSON.stringify(product)); //si ejecuto esta linea guardo los datos en el local storage del navegador
    //console.log(this.state.storedProducts);

    //console.log(product);

    this.setState({
      singleProduct: { ...product },
      loading: false,
    });
  };

  //handle sidebar
  handleSidebar = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  };

  //handle cart
  handleCart = () => {
    this.setState({ cartOpen: !this.state.cartOpen });
  };

  //close cart
  closeCart = () => {
    this.setState({ cartOpen: false });
  };

  //open cart
  openCart = () => {
    this.setState({ cartOpen: true });
  };

  //increment cart
  incrementCart = (id) => {
    //console.log(id);
    let tempCart = [...this.state.cart];
    const cartItem = tempCart.find((item) => item.id === id);
    //console.log(cartItem);
    cartItem.count++;
    if (cartItem.featured === true) {
      cartItem.total =
        (cartItem.price - (cartItem.price * cartItem.forsale) / 100) *
        cartItem.count;
    } else {
      cartItem.total = cartItem.count * cartItem.price;
    }
    cartItem.total = parseFloat(cartItem.total.toFixed(2));

    this.setState(
      () => {
        return { cart: [...tempCart] };
      },
      () => {
        this.addTotals();
        this.syncStorage();
      }
    );
  };

  //decrement cart
  decrementCart = (id) => {
    //console.log("decrement", id);
    let tempCart = [...this.state.cart];
    const cartItem = tempCart.find((item) => item.id === id);
    cartItem.count = cartItem.count - 1;
    if (cartItem.count === 0) {
      this.removeCart(id);
    } else {
      if (cartItem.featured === true) {
        cartItem.total =
          (cartItem.price - (cartItem.price * cartItem.forsale) / 100) *
          cartItem.count;
      } else {
        cartItem.total = cartItem.count * cartItem.price;
      }
      cartItem.total = parseFloat(cartItem.total.toFixed(2));

      this.setState(
        () => {
          return { cart: [...tempCart] };
        },
        () => {
          this.addTotals();
          this.syncStorage();
        }
      );
    }
  };

  //remove cart
  removeCart = (id) => {
    //console.log("remove", id);
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter((item) => item.id !== id);
    this.setState(
      {
        cart: [...tempCart],
      },
      () => {
        this.addTotals();
        this.syncStorage();
      }
    );
  };

  //clear cart
  clearCart = () => {
    //console.log("clear");
    this.setState(
      {
        cart: [],
      },
      () => {
        this.addTotals();
        this.syncStorage();
      }
    );
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleSidebar: this.handleSidebar,
          handleCart: this.handleCart,
          closeCart: this.closeCart,
          openCart: this.openCart,
          addToCart: this.addToCart,
          setSingleProduct: this.setSingleProduct,
          incrementCart: this.incrementCart,
          decrementCart: this.decrementCart,
          removeCart: this.removeCart,
          clearCart: this.clearCart,
        }}
      >
        {/*something really important with this setup is the simple fact that you do need to render children*/}
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
