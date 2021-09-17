import React from "react"
import { StaticImage } from "gatsby-plugin-image"



function Avatar() {
 return (
   <StaticImage
     src="./stache-avatar.jpeg"
     alt="A jsx code snippet"
     placeholder="blurred"
     style={{
      height: '100%',
      width: '100%',
      inset: 0,
      objectFit: 'cover',
      borderRadius:'50%'
    }}
   />
 )
}

export default Avatar