import Contact from "../components/Contact";
import Nav from "../components/Nav";
function CookingClass() {
    return(
        <div>
            <div className='header sticky top-0 z-20  bg-yellow'>
                <Contact />
                <Nav />
          </div>
        </div>
    )
}

export default CookingClass;