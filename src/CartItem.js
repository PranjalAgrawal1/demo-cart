import React from "react";

const CartItem = (props) => {


    const { qty, price, name, img } = props.product;
    const { product, onIncreaseQuantity, onDecreseQuantity, onDeleteItem} = props;
    return (
        <div className="cart-item" >
            <div className="left-block">
                <img style={styles.image} src={img}/>
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
                        onClick={() => onIncreaseQuantity(product)}
                    />
                    <img
                        alt="decrease"
                        className="action-icons"
                        // src="https://cdn-icons.flaticon.com/png/512/2040/premium/2040522.png?token=exp=1652256014~hmac=e85ee22b4d66bc31e3cb8f0f172829b4" 
                        src="./minus.png"
                        onClick={() => onDecreseQuantity(product)}
                    />
                    <img
                        alt="delete"
                        className="action-icons"
                        // src="https://cdn-icons.flaticon.com/png/512/2040/premium/2040464.png?token=exp=1652256182~hmac=aa77a95ff9319e85436d84f31eaa0998" 
                        src="./delete.png"
                        onClick={() => onDeleteItem(product.id)}
                    />
                </div>
            </div>
        </div>
    )
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
    },
    name: {
        fontSize: 25

    },

    quantity: {
        color: "#777"
    }

}

export default CartItem;