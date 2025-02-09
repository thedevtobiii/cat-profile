import { Fragment } from "react";
import Contact from "./components/contact.jsx";
import felix from '../src/images/felix.png'
import fluffykins from '../src/images/fluffykins.png'
import mrWhiskerson from '../src/images/mr-whiskerson.png'
import pumpkin from '../src/images/pumpkin.png'


function App(){
  return(
    <>
    <div className="contacts">
    <Contact
    img={mrWhiskerson}
    name="Mr.Whiskerson"
    phone="(212) 555-1234"
    email="mr-whiskaz@catnap.meow"
    />

    <Contact
    img={fluffykins}
    name="Fluffykins"
    phone="(212) 555-2345"
    email="fluffykins@gmail.com"
    />
    <Contact
   img={felix}
    name="Felix"
    phone="(212) 555-9908"
    email="felix@gmail.com"
    />
    <Contact
    img={pumpkin}
    name="Pumpkin"
    phone="(212) 555-6672"
    email="pumpkins@gmail.com"
    />
    </div>
    </>
  )
}

export default App;