import phoneIcon from '../images/phone-icon.png';
import emailIcon from '../images/mail-icon.png';
import whiskerson from '../images/mr-whiskerson.png'


 function Contact(props){
  console.log(props)
  return(
    <article className="contact-card">
<img src={props.img} alt="Mr Whiskerson"/>
<h3>{props.name}</h3>
<div className="info-group">
  <img src={phoneIcon} alt="phone" />
  <p>{props.phone}</p>
</div>
<div className="info-group">
  <img src={emailIcon} alt="mail icon" />
  <p>{props.email}</p>
</div>
    </article>
  )
}
 
export default Contact;