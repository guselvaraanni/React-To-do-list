import React from 'react'


const Header = ({title}) => {
  const headerStyle = {backgroundColor:'blue' , color:'white'}
  return (
    <header style={headerStyle}> 
       <h1>{title}</h1> 
    </header>
  )
}

export default Header
