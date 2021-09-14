import React from "react"
import { StaticImage } from "gatsby-plugin-image"



function Stache() {
 return (
   <StaticImage
     src="./stache-avatar.jpeg"
     alt="A jsx code snippet"
     placeholder="blurred"
     style={{
      position: 'absolute',
      height: '100%',
      width: '100%',
      inset: 0,
      objectFit: 'cover',
    }}
   />
 )
}

export default Stache