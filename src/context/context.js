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
    loading: false,
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

    this.setState({
      storedProducts: storedProducts,
      filteredProducts: storedProducts,
      featuredProducts: featuredProducts,
      cart: this.getStorageCart(),
      singleProduct: this.getStorageProduct(),
      loading: false,
    });
  };

  //get storage cart
  getStorageCart = () => {
    return [];
  };

  //get storage product
  getStorageProduct = () => {
    return {};
  };

  //get totals
  getTotals = () => {};

  //add totals
  addTotals = () => {};

  //sync Storage
  syncStorage = () => {};

  //add To Cart
  addToCart = (id) => {
    console.log(`add to cart ${id}`);
  };

  //set single product
  setSingleProduct = (id) => {
    console.log(`set single product ${id}`);
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
