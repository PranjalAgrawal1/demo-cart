import React from "react";

class CartItem extends React.Component {
    constructor() {
        super();
        this.state = {
            price: 9999,
            name: "Phone",
            qty: 1,
            img: ""
        }
    }

    increaseQuantity = () => {
        this.setState((prevState) => {
            return {
                qty : prevState.qty + 1
            }
        });

    }

    decreseQuantity = () =>{
        if(this.state.qty == 0){
            return;
        }
        
        this.setState((prevState) => {
            return {
                qty : prevState.qty - 1
            }
        });

    }

    deleteCartItem = () => {
        this.setState((prevState) => {
            return {
                qty : 0
            }
        });
    }

    render() {
        const {price, name, qty} = this.state;
        return (
            <div className="cart-item" >
                <div className="left-block">
                    <img style={styles.image} />

                </div>
                <div className="right-block">
                    <div style={styles.name}>{name}</div>
                    <div style={styles.quantity}>Rs {price}</div>
                    <div style={styles.quantity}>Qty: {qty}</div>
                    <div className="cart-item-actions">

                        <img 
                            alt="increase" 
                            className="action-icons" 
                            // src="https://cdn-icons.flaticon.com/png/512/2040/premium/2040520.png?token=exp=1652256168~hmac=42f14b538f9827b3ce0ed8610b0b9850" 
                            src="./plus.png"
                            onClick={this.increaseQuantity}
                        />
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            // src="https://cdn-icons.flaticon.com/png/512/2040/premium/2040522.png?token=exp=1652256014~hmac=e85ee22b4d66bc31e3cb8f0f172829b4" 
                            src="./minus.png"
                            onClick={this.decreseQuantity}

                        />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            // src="https://cdn-icons.flaticon.com/png/512/2040/premium/2040464.png?token=exp=1652256182~hmac=aa77a95ff9319e85436d84f31eaa0998" 
                            src="./delete.png"
                            onClick={this.deleteCartItem}

                        />

                    </div>
                </div>

            </div>
        )
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4
    },
    name: {
        fontSize: 25

    },

    quantity: {
        color: "#777"
    }

}

export default CartItem;