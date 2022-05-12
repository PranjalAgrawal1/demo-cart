import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      products: [
        {
          id: 1,
          qty: 1,
          price: 999,
          name: "Phone",
          img: "https://images.samsung.com/is/image/samsung/p6pim/in/2202/gallery/in-galaxy-s22-plus-s906-412931-sm-s906ezwdinu-thumb-530963903?$264_264_PNG$"
        },
        {
          id: 2,
          qty: 1,
          price: 999,
          name: "Laptop",
          img: "https://static.acer.com/up/Resource/Acer/Laptops/Aspire_5/images/20200908/Acer-Aspire-5_A514-54-54G_Gold_modelmain.png"
        },
        {
          id: 3,
          qty: 1,
          price: 999,
          name: "Watch",
          img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/9da7e1ae-89f2-42c4-9714-76ac5ec83817.png?v=1625045743"
        },
        {
          id: 4,
          qty: 1,
          price: 999,
          name: "Shirt",
          img: "https://dictionary.cambridge.org/images/thumb/shirt_noun_002_33400.jpg"
        },
      ]
    }
  }

  handleIncreaseQuantity = (product) => {
    // console.log("hey increase the quantity of", product);
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({
        products
    })
  }

  handleDecreseQuantity = (product) => {
    // console.log("hey decrease the quantity of", product);
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty === 0) {
        // handleDeleteProduct(products[index].id);
        return;
    }
    products[index].qty -= 1;
    this.setState({
        products
    })
  }

  handleDeleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id);
    this.setState({
      products: items
    })
  }

  getCartCount = () => {
    const{products} = this.state;
    let count = 0;

    products.forEach((product) => {
      count += product.qty
    })
    if(count > 9){
      count = '9+'
    }
    return count;
  }
  getCartTotal=()=>{
    const{products} = this.state;
    let total = 0;
    products.map((product) => {
      total += (product.qty * product.price)
    })
    return total;
  }

  render(){
    const{products} = this.state;

    return (
      <div className="App">
        <Navbar
          count = {this.getCartCount()}
        />
        <Cart
          products = {products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreseQuantity={this.handleDecreseQuantity}
          onDeleteItem = {this.handleDeleteProduct}
        />

        <div>
          Total - Rs {this.getCartTotal()}
        </div>

      </div>
    );
  }
}

export default App;
