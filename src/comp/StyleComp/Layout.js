

import Footer from "../footer";
import Navbar from "../Navbar";


const Layout = ({Children}) => {
    return ( <>
    <Navbar/>
    <Footer />
      <main>{Children}</main>
 
    </> );
}
 
export default Layout;