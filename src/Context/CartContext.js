import {createContext ,useState} from 'react'

const CartContext = createContext()

export const CartContextProvider=({children})=>{
    const [cart ,setCart]=useState([])
    

    const addItem=(productToAdd)=>{
        setCart([...cart,productToAdd])
    }

const totalCart = () => {
        let total = 0;
        const prices = cart.forEach(prod => {
            total = total + (prod.price * prod.quantity)
        })
           // console.log(total);
           return total;
        }
    const getQuantity=()=>{
        let count =0
        cart.forEach(prod=>{
            count+=prod.quantity
        })

        return count
    }
    const isInCart=(id)=>{
        return cart.some(prod => prod.id===id)
       
    }
    const clearCart =(id)=>{
setCart([])
    }
    const removeItem=(id)=>{
      const products=  cart.filter(prod=>prod.id!==id)
      setCart(products)
    }
    return(
        <CartContext.Provider value={{
            cart,
            addItem,
            getQuantity,
            isInCart,
            clearCart,
            totalCart,
            removeItem
        }}>
            {children}
        </CartContext.Provider>
    )

}
export default CartContext