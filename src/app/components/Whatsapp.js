import Link from "next/link"
import "./style.css";

const Whatsapp = () => {
  return (
    <>
        <div className="whatsapp_main">
          <Link href="https://wa.me/2348061313253" target="_blank"> <img src="/logo.jpg" width="40%" className="whatsapp_img" /></Link>
        </div>
    </>
  )
}

export default Whatsapp;