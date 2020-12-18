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
            <img className="service-icon" src={virus} />
            <div className="service-text">
              <h3>Corona Virus Cleaning</h3>
              <p>Corona Virus means clenaing services lorem ipsum dolor sit amet lorem ipsum dolor sit amet book now for covid safe spray clean</p>
            </div>
          </div> 

          <div className="service-wrapper">
            <img className="service-icon" src={calendar} />
            <div className="service-text">
              <h3>7 Day Availability</h3>
              <p>Corona Virus means clenaing services lorem ipsum dolor sit amet lorem ipsum dolor sit amet book now for covid safe spray clean</p>
            </div>          </div> 

          <div className="service-wrapper">
            <img className="service-icon" src={rating} />
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
          <h1>Contact Us</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <div className="accordion">
          <form className="contact-form">
                        <label>
                          <div className="input-div">
                            <input className="input is-d-block" type="text" placeholder="Full Name" name="name" />
                          </div>
                        </label>
                        <label>
                          <div className="input-div">
                            <input className="input is-d-block" type="text" placeholder="Email" name="email" />
                          </div>
                        </label>
                        <label>
                          <div className="input-div">
                            <input className="input is-d-block" type="tel" placeholder="Number" name="number" />
                          </div>
                        </label>
                        <label>
                          <div className="input-div">
                            <input className="input is-d-block" type="text" placeholder="Company" name="company" />
                          </div>
                        </label>
                        <label>
                          <div className="input-div message-box">
                            <textarea className="input is-d-block" type="textarea" placeholder="Message" name="message" />
                          </div>
                        </label>
                        <input className="button" type="submit" value="Submit" />
                      </form>
            {/* <div className="row">
              <div className="col">
                <div className="tabs">
                  <div className="tab">
                    <input className="no-visibility" type="checkbox" id="chck1" />
                    <label className="tab-label" for="chck1">Contact Form</label>
                    <div className="tab-content">
                      <form className="contact-form">
                        <label>
                          <div className="input-div">
                            <input className="input is-d-block" type="text" placeholder="Full Name" name="name" />
                          </div>
                        </label>
                        <label>
                          <div className="input-div">
                            <input className="input is-d-block" type="text" placeholder="Email" name="email" />
                          </div>
                        </label>
                        <label>
                          <div className="input-div">
                            <input className="input is-d-block" type="tel" placeholder="Number" name="number" />
                          </div>
                        </label>
                        <label>
                          <div className="input-div">
                            <input className="input is-d-block" type="text" placeholder="Company" name="company" />
                          </div>
                        </label>
                        <label>
                          <div className="input-div">
                            <input className="input is-d-block" type="text" placeholder="Message Sibject" name="subject" />
                          </div>
                        </label>
                        <label>
                          <div className="input-div">
                            <textarea className="input is-d-block" type="textarea" placeholder="Message" name="message" />
                          </div>
                        </label>
                        <input type="submit" value="Submit" />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <hr />

          <br />
          <p>Any clenaing rules will go here lorem ipsum dolor sit amet cleaning rules please here test dummy text all cleaning rules text bottom footer lorem ipsum dolor sit amet</p>
          <br />
          <br />
        </div>
      </div>

      <ContactForm />
   </div>
  );
}

export default App;
