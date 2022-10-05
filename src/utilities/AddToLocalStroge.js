const addToLS =(id)=>{
    let shoppingCart = {}

    const storedCart = localStorage.getItem('cart')

    if(storedCart){
        shoppingCart = JSON.parse(storedCart)
    }

    const productQuantity = shoppingCart[id]
    if(productQuantity){
        const newQuantity = productQuantity + 1
        shoppingCart[id] =newQuantity
    }
    else{
        shoppingCart[id]=1
    }

    localStorage.setItem('cart',JSON.stringify(shoppingCart))
}

const GetDataFromLS = ()=>{
    let shoppingCart = {}

    const storedCart = localStorage.getItem('cart')

    if(storedCart){
        shoppingCart = JSON.parse(storedCart)
    }

    return shoppingCart
}

export {
    addToLS,
    GetDataFromLS
}