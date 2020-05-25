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
    search: "",
    price: 0,
    minPri: 0,
    maxPri: 0,
    company: "all",
    shipping: false,
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
    //console.log(storedProducts);

    //featured products
    let featuredProducts = storedProducts.filter(
      (item) => item.featured === true
    );

    //get max price
    let maxPrice = Math.max(...storedProducts.map((item) => item.price));
    //console.log(maxPrice);

    this.setState(
      {
        storedProducts: storedProducts,
        filteredProducts: storedProducts,
        featuredProducts: featuredProducts,
        cart: this.getStorageCart(),
        singleProduct: this.getStorageProduct(),
        loading: false,
        price: maxPrice,
        maxPri: maxPrice,
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

  //handle change filtering
  handleChange = (event) => {
    //console.log(event);
    const name = event.target.name;
    let value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    //console.log(name, value);
    /*if (name === "price") {
      value = Number(value);
    }*/
    this.setState(
      {
        [name]: value,
      },
      this.sortData
    );
  };

  //este lo hice aparte porque no funciona como los otros filtros
  handleCompany = (event) => {
    //console.log(event);
    const namesliced = event.name;
    const value = event.value;
    const name = namesliced.slice(0, 7);
    //console.log(name, value);
    this.setState(
      {
        [name]: value,
      },
      this.sortData
    );
  };

  //sort data
  sortData = () => {
    //console.log("sorting ...");
    const { storedProducts, price, company, shipping, search } = this.state;
    let tempPrice = parseInt(price);
    let tempProducts = [...storedProducts];
    //filter by price
    tempProducts = tempProducts.filter((item) => item.price <= tempPrice);
    //filter by company
    if (company !== "all") {
      tempProducts = tempProducts.filter((item) => item.company === company);
    }
    //filter by free shipping
    if (shipping === true) {
      tempProducts = tempProducts.filter((item) => item.freeShipping === true);
    }
    //filter by search
    if (search.length > 0) {
      tempProducts = tempProducts.filter((item) => {
        let tempSearch = search.toLowerCase();
        let tempTitle = item.title.toLowerCase().slice(0, search.length);
        if (tempSearch === tempTitle) {
          return item;
        }
      });
    }
    this.setState({
      filteredProducts: tempProducts,
    });
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
          handleChange: this.handleChange,
          handleCompany: this.handleCompany,
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
