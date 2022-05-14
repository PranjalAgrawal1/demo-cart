import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import * as firebase from "firebase";



class App extends React.Component {

  constructor() {
    super();
    this.state = {
      products: [],
      loading: true
    }

    this.db = firebase.firestore();
  }

  componentDidMount() {
    //  firebase
    //   .firestore()
    //   .collection('products')
    //   .get()
    //   .then(snapshot => {
    //     const products = snapshot.docs.map(doc=>{
    //       const data = doc.data();
    //       data["id"] = doc.id;
    //       return data;
    //     });
    //     this.setState({ products: products, loading: false });
    //   })


    this.db
      .collection('products')
      .onSnapshot(snapshot => {
        const products = snapshot.docs.map(doc => {
          const data = doc.data();
          data["id"] = doc.id;
          return data;
        });
        this.setState({ products: products, loading: false });
      })
  }

  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    // products[index].qty += 1;
    // this.setState({
    //     products
    // })

    const docRef = this.db.collection('products').doc(products[index].id);
    docRef.update({
      qty: products[index].qty + 1
    })
      .then(() => {
        console.log('updated')
      })
      .catch((err) => {
        console.log("error", err);
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
    // products[index].qty -= 1;
    // this.setState({
    //     products,
    //     loading: false
    // })

    const docRef = this.db.collection('products').doc(products[index].id);
    docRef.update({
      qty: products[index].qty - 1
    })
      .then(() => {
        console.log('updated')
      })
      .catch((err) => {
        console.log("error", err);
      })
  }

  handleDeleteProduct = (id) => {
    const { products } = this.state;
    // const items = products.filter((item) => item.id !== id);
    // this.setState({
    //   products: items
    // })

    const docRef = this.db.collection('products').doc(id);
    docRef
      .delete()
      .then(() => {
        console.log("deleted successfully");
      }).catch((err) => {
        console.log("error : ", err);
      })
  }

  getCartCount = () => {
    const { products } = this.state;
    let count = 0;

    products.forEach((product) => {
      count += product.qty
    })
    if (count > 9) {
      count = '9+'
    }
    return count;
  }
  getCartTotal = () => {
    const { products } = this.state;
    let total = 0;
    products.map((product) => {
      total += (product.qty * product.price)
    })
    return total;
  }
  addProduct = () => {
    this.db
      .collection('products')
      .add({
        img: '',
        price: 900,
        qty: 2,
        name: "Washing Machine"
      })
      .then((docRef) => {
        console.log("product added" + docRef)
      })
      .catch((err) => {
        console.log("Error : ", err)
      })
  }

  render() {
    const { products, loading } = this.state;

    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        {/* <button onClick={this.addProduct} style={{padding: 20, fontSize: 20 }}>Add a Product</button> */}
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreseQuantity={this.handleDecreseQuantity}
          onDeleteItem={this.handleDeleteProduct}
        />
        {loading && <h1> Loading Products... </h1>}

        <div>
          Total - Rs {this.getCartTotal()}
        </div>

      </div>
    );
  }
}

export default App;
