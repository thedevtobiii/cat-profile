import { Fragment } from "react";
import Contact from "./components/contact.jsx";

function App(){
  return(
    <>
    <div className="contacts">
    <Contact
    img="./src/images/mr-whiskerson.png"
    name="Mr.Whiskerson"
    phone="(212) 555-1234"
    email="mr-whiskaz@catnap.meow"
    />

    <Contact
    img="./src/images/fluffykins.png"
    name="Fluffykins"
    phone="(212) 555-2345"
    email="fluffykins@gmail.com"
    />
    <Contact
    img="./src/images/felix.png"
    name="Felix"
    phone="(212) 555-9908"
    email="felix@gmail.com"
    />
    <Contact
    img="./src/images/pumpkin.png"
    name="Pumpkin"
    phone="(212) 555-6672"
    email="pumpkins@gmail.com"
    />
    </div>
    </>
  )
}

export default App;