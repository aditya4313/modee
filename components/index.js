// // pages/index.js
// import axios from 'axios';
// import { useEffect, useState } from 'react';

// export default function Home() {
//   const [services, setServices] = useState([]);

//   // Fetch data from Strapi
//   useEffect(() => {
//     async function fetchServices() {
//       try {
//         const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/services`);
//         setServices(response.data.data.services);
//       } catch (error) {
//         console.error('Error fetching data from Strapi:', error);
//       }
//     }
//     fetchServices();
//   }, []);

//   return (
//     <div>
//       <h1>Our Services</h1>
//       <div>
//         {services && services.length > 0 ? (
//           services.map((service, index) => (
//             <div key={index}>
//               <h2>{service.title}</h2>
//               <p>{service.detail}</p>
//             </div>
//           ))
//         ) : (
//           <p>Loading services...</p>
//         )}
//       </div>
//     </div>
//   );
// }
