// import React, { useState } from "react";

// const ItemCount = (props) => {

//   const {item, addCart} = props;
//   const [count, setCount] = useState(0);

//   const handleSumar = () => {
//     setCount(count + 1);
//   };
//   const handleRestar = () => {
// if (count> 1) {
//     setCount(count - 1);
// }
//   };


//   return (
//     <div className="d-flex">
//       <div>
//         <button className="btn btn-warning border border-dark text-center m-1 p-2" onClick={handleRestar}>-</button>
//       </div>
//       <h3 className="m-2">Cantidad: {count}</h3>
//       <div>
//         <button className="btn btn-warning border border-dark text-center m-1 p-2" onClick={handleSumar}>+</button>
//       </div>
//       <div>
//         <button className="btn btn-warning border border-dark text-center m-1 p-2" onClick={() => addCart({...item, count})}>Add to cart</button>
//       </div>
//     </div>
//   );
// };

// export default ItemCount;