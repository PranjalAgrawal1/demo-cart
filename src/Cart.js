import React from "react";
import CartItem from "./CartItem";



class Cart extends React.Component {

    constructor() {
        super();
        this.state = {
            products: [
                {
                    id: 1,
                    qty: 1,
                    price: 999,
                    name: "Phone",
                    img: " "
                },
                {
                    id: 2,
                    qty: 1,
                    price: 999,
                    name: "Laptop",
                    img: " "
                },
                {
                    id: 3,
                    qty: 1,
                    price: 999,
                    name: "Watch",
                    img: " "
                },
                {
                    id: 4,
                    qty: 1,
                    price: 999,
                    name: "Shirt",
                    img: " "
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


    render() {
        const { products } = this.state;
        return (
            <div className="cart">
                {products.map((product) => {
                    // console.log(product);
                    return (
                        <CartItem
                            product={product}
                            key={product.id}
                            onIncreaseQuantity={this.handleIncreaseQuantity}
                            onDecreseQuantity={this.handleDecreseQuantity}
                            onDeleteItem = {this.handleDeleteProduct}

                        />

                    )

                })}
            </div>

        )
    }

}

export default Cart;