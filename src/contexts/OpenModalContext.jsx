import React,{useState} from "react";
import products from "../products/products";


const OpenModalContext = React.createContext()

const OpenModalContextProvider = ({children}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [productClicked, setProductClicked] = useState(products.product1)
    const openModal = () => setIsOpen(true)
    const closeModal = (state) => setIsOpen(state)

    const handleClickProduct = (product) =>{
        setProductClicked(product)
        openModal()
    }
    
    return (
        <OpenModalContext.Provider value={{isOpen,setIsOpen,openModal,closeModal,productClicked,handleClickProduct}}>
            {children}
        </OpenModalContext.Provider>
    )
    
}

export { OpenModalContext, OpenModalContextProvider }











