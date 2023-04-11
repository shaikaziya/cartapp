import React from "react";
import Card from "./Card";

export default function Data({cart,setCart}){
    const cardData = [
        {
          title: 'Fancy Product',
          rating: '',
          oldPrice: '',
          newPrice: '$40.00 - $80.00',
          sale: false,
          addToCart: false,
          button: 'View options',
        },
        {
          title: 'Special Item',
          rating: '⭐⭐⭐⭐⭐',
          oldPrice: '$20.00',
          newPrice: '$18.00',
          sale: true,
          addToCart: true,
          button: 'Add to cart',
        },
        {
          title: 'Sale Item',
          rating: '',
          oldPrice: '$50.00',
          newPrice: '$25.00',
          sale: true,
          addToCart: true,
          button: 'Add to cart',
        },
        {
          title: 'Popular Item',
          rating: '⭐⭐⭐⭐⭐',
          oldPrice: '',
          newPrice: '$40.00',
          sale: false,
          addToCart: true,
          button: 'Add to cart',
        },
        {
          title: 'Sale Item',
          rating: '',
          oldPrice: '$50.00',
          newPrice: '$25.00',
          sale: true,
          addToCart: true,
          button: 'Add to cart',
        },
        {
          title: 'Fancy Product',
          rating: '',
          oldPrice: '',
          newPrice: '$120.00 - $280.00',
          sale: false,
          addToCart: false,
          button: 'View options',
        },
        {
          title: 'Special Item',
          rating: '⭐⭐⭐⭐⭐',
          oldPrice: '$20.00',
          newPrice: '$18.00',
          sale: true,
          addToCart: true,
          button: 'Add to cart',
        },
        {
          title: 'Popular Item',
          rating: '⭐⭐⭐⭐⭐',
          oldPrice: '',
          newPrice: '$40.00',
          sale: false,
          addToCart: true,
          button: 'Add to cart',
        },
      ]

      return (
        <section className="py-5">
          <div className="container px-4 px-lg-5 mt-5">
            <div className="row row-cols-1 row-cols-md-3 row-cols-xl-4 row-cols-sm-2 g-4 m-5">
              {cardData.map((card, index) => (
                <Card
                  key={index}
                  title={card.title}
                  rating={card.rating}
                  oldPrice={card.oldPrice}
                  newPrice={card.newPrice}
                  sale={card.sale}
                  button={card.button}
                  cart={cart}
                  setCart={setCart}
                />
              ))}
            </div>
          </div>
        </section>
      )
    
}