const storeToken = (value)=>{
    localStorage.setItem('data',JSON.stringify(value))
}
const storecartToken = (value)=>{
  localStorage.setItem('cart',JSON.stringify(value))
}

const storeipToken = (value)=>{
  localStorage.setItem('userip',JSON.stringify(value))
}

const storepidToken = (value)=>{
  localStorage.setItem('prodid',JSON.stringify(value))
}


const getToken = ()=>{
  let data = localStorage.getItem('data')
  return JSON.parse(data)
}

const getprodidToken = ()=>{
  let data = localStorage.getItem('prodid')
  return JSON.parse(data)
}

const getipToken = ()=>{
  let data = localStorage.getItem('userip')
  return JSON.parse(data)
}

const getcartToken = ()=>{
  let data = localStorage.getItem('cart')
  return JSON.parse(data)
}

const removeToken = (value)=>{
localStorage.removeItem(value)
  }

  const removeprodidToken = (value)=>{
    localStorage.removeItem(value)
      }

  const removecartToken = (value)=>{
    localStorage.removeItem(value)
      }

  export { storeToken, getToken, removeToken, storecartToken, getcartToken, removecartToken, storeipToken, getipToken, storepidToken, getprodidToken,removeprodidToken }