import "../styles/contact-style.css";
import myPhoto from "../assets/eduardo-kmus.png";

const Contact = () => {
  return (
    <div className="contact-container container">
      <img src={myPhoto} style={{ height: "80px", borderRadius: '50%' }} alt="#" />
      <p>
        Puedes contactarme por la siguiente vía:
        <br />
        WhatsApp: 0424-6073526
        <br />
        kmusdc128@gmail.com
      </p>
    </div>
  );
};
export default Contact;
