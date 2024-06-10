import React from 'react'
import styled from 'styled-components'

const ImageWrapper = styled.div`

height: auto;
width: 100%;

`
const ImageContent = styled.img`
width: 100%;
height: auto;
object-fit:cover;
object-position:center;
`


const Image = ({className, title , src, onClick , name , ...props}) => {
  return (
<ImageWrapper className={className} onClic={onClick} {...props} >
    <ImageContent src={src}  alt={title} title={title} />
</ImageWrapper>
)
}

export default Image
