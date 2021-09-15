import React from "react"
import { StaticImage } from "gatsby-plugin-image"



function Vending() {
 return (
   <StaticImage
     src="./aboutvending.jpeg"
     alt="A jsx code snippet"
     placeholder="blurred"
     style={{
      height: '100%',
      width: '100%',
      inset: 0,
      objectFit: 'cover',
    }}
   />
 )
}

export default Vending;