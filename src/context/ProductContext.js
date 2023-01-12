import { createContext, useState } from "react";

export const ProductContext = createContext(),
// Authentication context
ProductContextProvider = (props) => {
  const [product, setProduct] = useState(
    [{
      "id": 1,
      "price": 83869,
      "product_name": "Lettuce - Mini Greens, Whole",
      "stock": 5
    }, {
      "id": 2,
      "price": 70058,
      "product_name": "Lettuce - Mini Greens, Whole",
      "stock": 1
    }, {
      "id": 3,
      "price": 82878,
      "product_name": "Pasta - Fett Alfredo, Single Serve",
      "stock": 2
    }, {
      "id": 4,
      "price": 69977,
      "product_name": "Coffee Cup 16oz Foam",
      "stock": 6
    }, {
      "id": 5,
      "price": 35215,
      "product_name": "Fenngreek Seed",
      "stock": 5
    }, {
      "id": 6,
      "price": 78174,
      "product_name": "Wine - Toasted Head",
      "stock": 6
    }, {
      "id": 7,
      "price": 56175,
      "product_name": "Chicken - Base",
      "stock": 9
    }, {
      "id": 8,
      "price": 99566,
      "product_name": "Yokaline",
      "stock": 9
    }, {
      "id": 9,
      "price": 64491,
      "product_name": "Bread - Multigrain Oval",
      "stock": 9
    }, {
      "id": 10,
      "price": 84996,
      "product_name": "Tea - Vanilla Chai",
      "stock": 6
    }, {
      "id": 11,
      "price": 28427,
      "product_name": "Sultanas",
      "stock": 1
    }, {
      "id": 12,
      "price": 37013,
      "product_name": "Wine - White, Schroder And Schyl",
      "stock": 8
    }, {
      "id": 13,
      "price": 34714,
      "product_name": "Plate Pie Foil",
      "stock": 2
    }, {
      "id": 14,
      "price": 43748,
      "product_name": "Couscous",
      "stock": 5
    }, {
      "id": 15,
      "price": 54963,
      "product_name": "Foil - 4oz Custard Cup",
      "stock": 5
    }, {
      "id": 16,
      "price": 73326,
      "product_name": "Five Alive Citrus",
      "stock": 3
    }, {
      "id": 17,
      "price": 31022,
      "product_name": "Juice - Clam, 46 Oz",
      "stock": 4
    }, {
      "id": 18,
      "price": 69004,
      "product_name": "Longos - Chicken Curried",
      "stock": 10
    }, {
      "id": 19,
      "price": 70061,
      "product_name": "Island Oasis - Wildberry",
      "stock": 5
    }, {
      "id": 20,
      "price": 21318,
      "product_name": "Rolled Oats",
      "stock": 4
    }, {
      "id": 21,
      "price": 45604,
      "product_name": "Vodka - Lemon, Absolut",
      "stock": 1
    }, {
      "id": 22,
      "price": 68846,
      "product_name": "Cheese - Le Cheve Noir",
      "stock": 3
    }, {
      "id": 23,
      "price": 27473,
      "product_name": "Asparagus - Green, Fresh",
      "stock": 5
    }, {
      "id": 24,
      "price": 30027,
      "product_name": "Brocolinni - Gaylan, Chinese",
      "stock": 10
    }, {
      "id": 25,
      "price": 80649,
      "product_name": "Ocean Spray - Ruby Red",
      "stock": 9
    }]
  );

  const [createHistoryProduct, setCreateHistoryProduct] = useState([])

  const [updateHistoryProduct, setUpdateHistoryProduct] = useState([])
  

  
  

  return (
    <ProductContext.Provider value={{product, setProduct, createHistoryProduct, setCreateHistoryProduct, updateHistoryProduct, setUpdateHistoryProduct}}>
      {props.children}
    </ProductContext.Provider>
  )
}

export default ProductContextProvider;
