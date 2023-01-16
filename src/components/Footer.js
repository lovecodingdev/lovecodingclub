import "../styles/footer.css";
import {
  TbMail,
  TbPhoneCall,
  TbBrandSkype,
  TbBrandDiscord,
  TbBrandGithub,
  TbBrandTelegram,
  TbBrandLinkedin
} from "react-icons/tb";

const Footer = () => {
  return (
    <footer>
      <form className="contact">
        <h1>Contact Information</h1>
        <div className="input-field">
          <TbMail />
          <input
            type="email"
            placeholder="Email"
            value="andrew.lee.lcc@gmail.com"
            readOnly
          />
        </div>
        <div className="input-field">
          <TbBrandLinkedin />
          <input
            type="Linkedin"
            placeholder="Linkedin"
            value="https://www.linkedin.com/in/andrew-lee-lcc"
            readOnly
          />
        </div>
        <div className="input-field">
          <TbBrandGithub />
          <input
            type="text"
            placeholder="Github"
            value="https://github.com/luckyman828"
            readOnly
          />
        </div>
        <div className="input-field">
          <TbBrandSkype />
          <input
            type="text"
            placeholder="Skype"
            value="live:.cid.374c50cc076c763f"
            readOnly
          />
        </div>
        <div className="input-field">
          <TbBrandTelegram />
          <input
            type="text"
            placeholder="Telegram"
            value="@wildhorse2080"
            readOnly
          />
        </div>
      </form>
    </footer>
  );
};

export default Footer;
