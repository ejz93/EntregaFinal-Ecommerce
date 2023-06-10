// import React, { useEffect, useState } from 'react'
// import Spinner from './Spinner';
// // import Product from './Product';
// import Item from '../Item'



// const item = [
//     {
//         id: "",
//         title: "",
//         img: "",
//         price: ""
//     },
//     {
//         id: "",
//         title: "",
//         img: "",
//         price: ""
//     },
//     {
//         id: "",
//         title: "",
//         img: "",
//         price: ""
//     }
// ];

// const Promises = () => {
//     const [loading, setLoading] = useState(false);
//     const [item, setItem] = useState([]);

//     useEffect(() => {
//         setLoading(true);
//         const task = new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(item);
//             }, 3000);
//         });

//         task
//             .then((res) => {
//                 setItem(res);
//                 setLoading(false);
//             })
//             .catch((err) => {
//                 console.log(err);
//                 alert('Something went wrong')
//             })
//     }, []);

//     return (
//         <div>
//             {loading && <Spinner />}
//             {!loading &&
//             item.length > 0 &&
//             item.map(({ id, title, img, price}, index) => (
//                 <Item id={id} title={title} img={img} price={price} key={index} /> 
//             ))}
//         </div>
//     );
// };

// export default Promises;