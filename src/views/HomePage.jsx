import InputField from "../components/InputField";
import Navbar from "../components/Navbar";
import image1 from "../assets/images/main_sec_img.png";
import image2 from "../assets/images/one_percent_cashback.png";
import image3 from "../assets/images/five_x_rewards.png";
import image4 from "../assets/images/forex_globe.png";
import appScreenOne from "../assets/images/app_screen_1.webp";
import appScreenTwo from "../assets/images/app_screen_2.webp";
import whatsapp from '../assets/images/whatsapp_bubble.webp'
import rupee from '../assets/images/rupee_bubble.webp'
import antivirus from '../assets/images/antivirus_bubble.webp'
// TODO:- ------ Make all the sections into seperate components ----

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="background-video">
        {/* <video autoPlay muted loop playsInline>
          <source src={Wave} type="video/mp4" />
        </video> */}
      </div>
      <div className="content">
        <div className="nav">
          <Navbar />
        </div>
        <div className="main-content">
          <div className="text-left">
            <strong>NX Wave. </strong> The next-gen credit card for those who
            love rewards.
            <div className="features">
              <p>1% Cashback + 5x Rewards + Zero Forex Markup</p>
            </div>
            <div>
              <InputField />
            </div>
          </div>
          <div className="text-right">
            <img src={image1} />
          </div>
        </div>
      </div>
      <div className="about-company">
        Earn 1% assured cashback on <span>your spends. Get </span> 5X more value
        than cashback <span>at the Uni Store. Enjoy round</span> the clock
        Whatsapp support. <span>And it's</span> lifetime free{" "}
        <span>; no joining fee, no annual charges.</span>
      </div>
      <div className="features-details">
        <div className="feature">
          <div className="about-feature">
            <p>
              <strong>1% assured cashback on your spends.</strong>{" "}
              <span className="light-text">
                The more you spend, the more you earn.
              </span>
            </p>
            <p className="info light-text">
              Not applicable on fuel purchase, rent & wallet transfers, ATM
              withdrawals & international transactions.
            </p>
          </div>
          <div className="feature-image">
            <img src={image2} />
          </div>
        </div>
        <div className="feature reverse">
          <div className="about-feature">
            <p>
              <strong>5x more value than your cashback,</strong>{" "}
              <span className="light-text">only at the Uni Store.</span>
            </p>
          </div>
          <div className="feature-image">
            <img src={image3} />
          </div>
        </div>
        <div className="feature">
          <div className="about-feature">
            <p>
              <strong>Zero Forex Markup.</strong>{" "}
              <span className="light-text">
                Go international, without any fees.
              </span>
            </p>
          </div>
          <div className="feature-image">
            <img src={image4} />
          </div>
        </div>
      </div>
      {/* all about uni cards */}
      <div className="more-features">
        <div className="app-screen">
          <div className="app-content">
            <h3>
              We've all heard of instant groceries, now say hello to
              <span className="linear-gradient"> instant credit.</span>
            </h3>
            <p className="app-info">
              0% hassle, 100% paperless. Get your Uni Card instantly.
            </p>
          </div>
          <div className="sreen-image">
            <img src={appScreenOne} />
          </div>
        </div>
        <div className="app-screen">
          <div className="app-content">
            <h3>
              We've all heard of instant groceries, now say hello to instant
              credit.
            </h3>
            <p className="app-info">
              0% hassle, 100% paperless. Get your Uni Card instantly.
            </p>
          </div>
          <div className="sreen-image">
            <img src={appScreenOne} />
          </div>
        </div>
        <div className="services">
        <div className="service">
          <div className="service-img">
            <img src={whatsapp} />
          </div>
          <div className="about-serive">
          Help, just a WhatsApp away. Anytime, Anyday
          </div>
          <div className="service-info">
          During hectic work hours. On lazy sunday mornings. In the thick of night. Anytime.
          </div>
        </div>
        <div className="service">
          <div className="service-img">
            <img src={whatsapp} />
          </div>
          <div className="about-serive">
          Help, just a WhatsApp away. Anytime, Anyday
          </div>
          <div className="service-info">
          During hectic work hours. On lazy sunday mornings. In the thick of night. Anytime.
          </div>
        </div>  
        <div className="service">
          <div className="service-img">
            <img src={whatsapp} />
          </div>
          <div className="about-serive">
          Help, just a WhatsApp away. Anytime, Anyday
          </div>
          <div className="service-info">
          During hectic work hours. On lazy sunday mornings. In the thick of night. Anytime.
          </div>
        </div>
      </div>
      </div>
     
    </div>
  );
};

export default HomePage;
