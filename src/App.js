import logo from './images/logo.PNG';
import './App.scss';
import school from './images/school.png';
import office from './images/office-two.svg';
import handshake from './images/handshake.png';
import ContactForm from './components/ContactForm';
import SpecialistCleaning from './components/SpecialistCleaning';

function App() {
  return (
    <div className="App">
      <header className="App-top-body">
        <div className="Top-body-content">
          <img src={logo} className="App-logo" alt="logo" />
          <p>07720 616834</p>
        </div>
        <div className="down-link">
          <p>⌄</p>
        </div>
      </header>
      <div className="App-main-body">
      <div className="about-us">
          <p>London Executive is a young company in terms of incorporation, but we have decades of management experience across all aspects of cleaning.</p>
          <p>London Executive are passionate in protecting our environment by using electric or hybrid vehicles, minimising waste, encouraging staff to travel green, and to ensure we are using environmentally friendly chemicals in all aspects of our cleaning. We are always open to new ideas to improve our carbon footprint.</p>
        </div>

        <div className="service-block">
          <div className="service-wrapper">
            <img className="service-icon" src={school} alt="description of image" />
            <div className="service-text">
              <h3>Education</h3>
              <p>With the welfare of pupils and staff as a priority, at London Executive all members of staff must go through initial trial period, and they are trained, and security vetted to make sure they meet our high standards. From managing the cleaning of before and after school clubs, to the more specialist needs of holiday cleaning programs, we have the experience, resources and understanding to ensure we can match a service to your needs.</p>
            </div>
          </div> 

          <div className="service-wrapper">
            <img className="service-icon" src={office} alt="description of image"/>
            <div className="service-text">
              <h3>Offices</h3>
              <p>Understanding the fundamentals of office cleaning, we at London Executive realise the importance to impress clients in every way when they visit your offices. During these uncertain times staff are trained to perform extra sanitising cleans throughout the day to ensure the safety and well-being of staff and visitors to your premises.                                        </p>
             </div>
          </div> 

          <div className="service-wrapper">
            <img className="service-icon" src={handshake} alt="description of image"/>
            <div className="service-text desktop-padding-top">
              <h3>End of tenancy</h3>
              <p>At London Executive our service team are highly trained to deal with all
types of end of tenancy cleans, following a strict checklist to ensure the new tenant enters
a pristine home.</p>
            </div>
          </div> 
        </div> 
 
 <SpecialistCleaning />

<div>
  <h2>Consumables</h2>
  <p><strong>Janitorial supplies - </strong>Contact us about suppling any form of janitorial supply, we can deliver nationwide. </p>
  <p><strong>Feminine hygiene services - </strong>Speak to us about your sanitary bins and vending machines without tying you into a long contract. 
 </p>

</div>

        <div className="contact-div">
          <hr />
          <div className="contact-title">
            <h1>Contact Us</h1>
            <img src={logo} className="App-logo" alt="logo" />
          </div>  
          <ContactForm />
          <hr />
          <br />
          <div className="contact-footer">
            <p className="center-left display-inline">VAT number 397 8317 38 - </p>
            <p className="center-right display-inline">Company number 12563540 </p>
          </div>
          <br />
          <br />
        </div>
      </div>
     </div>
  );
}

export default App;
