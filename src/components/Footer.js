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
            value="lovecodingdev@gmail.com"
            readOnly
          />
        </div>
        <div className="input-field">
          <TbBrandGithub />
          <input
            type="text"
            placeholder="Github"
            value="https://github.com/lovecodingdev"
            readOnly
          />
        </div>
        <div className="input-field">
          <TbBrandSkype />
          <input
            type="text"
            placeholder="Skype"
            value="live:.cid.caefd7681f0e2320"
            readOnly
          />
        </div>
        <div className="input-field">
          <TbBrandTelegram />
          <input
            type="text"
            placeholder="Telegram"
            value="@mntmaster"
            readOnly
          />
        </div>
      </form>
    </footer>
  );
};

export default Footer;
