import classNames from 'classnames'
import React from 'react'
import Image from './Image'
import Typography, { Paragraph } from './Typography';
import ProductStyle from "./components.module.css";


const Cards = ({ className, title, ImgSrc, ImgTitle }) => {
  className = { className }
  return (

    <div className={className} >
      <img src={ImgSrc} alt={ImgTitle} />
      <h3>{title}</h3>
    </div>
  )
}


export const ProductCard = ({ price, className, title, image, ...props }) => {

  return (
    <div {...props} className={classNames(className, ProductStyle['Product__card'])} >
      {/* <img src={ImgSrc} alt={ImgTitle} /> */}
      <Image src={image} title={title} />
      {/* <h3>{title}</h3> */}
      <Paragraph color={"secondary3"}>
        {title}
      </Paragraph>
      {/* <p>{Text}</p> */}
      <Paragraph color={"secondary3"}>{price}</Paragraph>
      <button>Посмотреть</button>
    </div>
  )
}

export default Cards


