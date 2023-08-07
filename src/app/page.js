"use client";
// import Image from "next/image";
// import Banner from "./components/Banner";
// import { useEffect } from "react";
import Banner2 from "./components/Banner2";

// import Header from "./components/Header";
// import styles from './page.module.css';

const Home = () => {
  // const [navbar, setNavbar] = useState(false)

  // const changeBackground = () => {
  //   useEffect(() => {
  //     if(window.scrollY >= 80){
  //       setNavbar(true)
  //     }else {
  //       setNavbar(false)
  //     }
  //     window.addEventListener('scroll', changeBackground);
    
  //     // return () => window.removeEventListener('scroll', changeBg);
  //   }, []);
  // }

  return (
    <>
      <Banner2 />

      <div className="hero-section section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h1>Resonsive left-aligned hero with image </h1>
              <p>Instead of making the whole layout a Client Component, move the interactive logic to a Client Component and keep your layout as a Server Component. This means you don't have to send all the component Javascript of the layout to the client.</p>
              <button className="btn btn-danger mx-2">Primary</button>
              <button className="btn btn-outline-secondary mx-2">Secondary</button>
            </div>
            
            <div className="col-lg-6">
              <img 
                src="/bootstrap.jpg"
                alt="bootstrap themes"
                width={470}
                height={400}
              />
            </div>
            {/* <div className={styles.main_container}>
              fdsgdfhfgjgh
            </div> */}
          </div>
        </div>
      </div>

      <div className="container-fluid section bg-dark text-white">
        <div className="container">
          <div className="row py-5">

            <div className="col-lg-6">
              <img 
                src="/bootstrap.jpg"
                alt="bootstrap themes"
                width={470}
                height={400}
              />
            </div>

            <div className="col-lg-6">
              <h1>Resonsive left-aligned hero with image </h1>
              <p>Instead of making the whole layout a Client Component, move the interactive logic to a Client Component and keep your layout as a Server Component. This means you don't have to send all the component Javascript of the layout to the client.</p>
              <button className="btn btn-danger mx-2">Primary</button>
              <button className="btn btn-outline-secondary mx-2">Secondary</button>
            </div>
            
            
          </div>
        </div>
      </div>

      <div className="container-fluid section bg-light">
        <div className="container">
        <div className="row g-2">
          <div className="col-sm-6 col-lg-4">
            <div className="p-3 border bg-light">Custom column padding</div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="p-3 border bg-light">Custom column padding</div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="p-3 border bg-light">Custom column padding</div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="p-3 border bg-light">Custom column padding</div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="p-3 border bg-light">Custom column padding</div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="p-3 border bg-light">Custom column padding</div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
// export default function Home() {
//   // const [navbar setNavbar] = useState(false)
//   return (
//     <>
//       <Banner2 />

//       <div className="hero-section section">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-6">
//               <h1>Resonsive left-aligned hero with image </h1>
//               <p>Instead of making the whole layout a Client Component, move the interactive logic to a Client Component and keep your layout as a Server Component. This means you don't have to send all the component Javascript of the layout to the client.</p>
//               <button className="btn btn-danger mx-2">Primary</button>
//               <button className="btn btn-outline-secondary mx-2">Secondary</button>
//             </div>
            
//             <div className="col-lg-6">
//               <img 
//                 src="/bootstrap.jpg"
//                 alt="bootstrap themes"
//                 width={470}
//                 height={400}
//               />
//             </div>
//             {/* <div className={styles.main_container}>
//               fdsgdfhfgjgh
//             </div> */}
//           </div>
//         </div>
//       </div>

//       <div className="container-fluid section bg-dark text-white">
//         <div className="container">
//           <div className="row py-5">

//             <div className="col-lg-6">
//               <img 
//                 src="/bootstrap.jpg"
//                 alt="bootstrap themes"
//                 width={470}
//                 height={400}
//               />
//             </div>

//             <div className="col-lg-6">
//               <h1>Resonsive left-aligned hero with image </h1>
//               <p>Instead of making the whole layout a Client Component, move the interactive logic to a Client Component and keep your layout as a Server Component. This means you don't have to send all the component Javascript of the layout to the client.</p>
//               <button className="btn btn-danger mx-2">Primary</button>
//               <button className="btn btn-outline-secondary mx-2">Secondary</button>
//             </div>
            
            
//           </div>
//         </div>
//       </div>

//       <div className="container-fluid section bg-light">
//         <div className="container">
//         <div className="row g-2">
//           <div className="col-sm-6 col-lg-4">
//             <div className="p-3 border bg-light">Custom column padding</div>
//           </div>
//           <div className="col-sm-6 col-lg-4">
//             <div className="p-3 border bg-light">Custom column padding</div>
//           </div>
//           <div className="col-sm-6 col-lg-4">
//             <div className="p-3 border bg-light">Custom column padding</div>
//           </div>
//           <div className="col-sm-6 col-lg-4">
//             <div className="p-3 border bg-light">Custom column padding</div>
//           </div>
//           <div className="col-sm-6 col-lg-4">
//             <div className="p-3 border bg-light">Custom column padding</div>
//           </div>
//           <div className="col-sm-6 col-lg-4">
//             <div className="p-3 border bg-light">Custom column padding</div>
//           </div>
//         </div>
//         </div>
//       </div>
//     </>
//   );
// }

export default Home;