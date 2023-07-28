
import Logo from "../../public/assets/world-regular-24.png"
function Navbar(){
    return(
      <>
     <nav>
        <img src={Logo} className="nav-logo"/>
        <p>My Travel Journal</p>
        
     </nav>
      </>
    )
}
export default Navbar