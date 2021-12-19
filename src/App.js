import logo from './images/logo.PNG';
import './App.scss';
import virus from './images/virus.svg';
import rating from './images/rating.svg';
import calendar from './images/calendar.svg';
import ContactForm from './components/ContactForm';


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
        <div className="service-block">
          <div className="service-wrapper">
            <img className="service-icon" src={virus} alt="description of image" />
            <div className="service-text">
              <h3>Corona Virus Cleaning</h3>
              <p>Corona Virus means clenaing services lorem ipsum dolor sit amet lorem ipsum dolor sit amet book now for covid safe spray clean</p>
            </div>
          </div> 

          <div className="service-wrapper">
            <img className="service-icon" src={calendar} alt="description of image"/>
            <div className="service-text">
              <h3>7 Day Availability</h3>
              <p>Corona Virus means clenaing services lorem ipsum dolor sit amet lorem ipsum dolor sit amet book now for covid safe spray clean</p>
            </div>          </div> 

          <div className="service-wrapper">
            <img className="service-icon" src={rating} alt="description of image"/>
            <div className="service-text">
              <h3>10/10 Customer Satisfaction</h3>
              <p>Corona Virus means clenaing services lorem ipsum dolor sit amet lorem ipsum dolor sit amet book now for covid safe spray clean</p>
            </div>
          </div> 
        </div> 
        <div className="about-us">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
          <p>Any clenaing rules will go here lorem ipsum dolor sit amet cleaning rules please here test dummy text all cleaning rules text bottom footer lorem ipsum dolor sit amet</p>
          <br />
          <br />
        </div>
      </div>
     </div>
  );
}

export default App;
