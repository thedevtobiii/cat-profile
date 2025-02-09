import phoneIcon from '../images/phone-icon.png';
import emailIcon from '../images/mail-icon.png';
import whiskerson from '../images/mr-whiskerson.png'


 function Contact({img, name, phone, email}){
  
  return(
    <article className="contact-card">
<img src={img} alt="Mr Whiskerson"/>
<h3>{name}</h3>
<div className="info-group">
  <img src={phoneIcon} alt="phone" />
  <p>{phone}</p>
</div>
<div className="info-group">
  <img src={emailIcon} alt="mail icon" />
  <p>{email}</p>
</div>
    </article>
  )
}
 
export default Contact;
//NB curly braces while destructuring the props object are not necessary if the props object is the only argument in the function.