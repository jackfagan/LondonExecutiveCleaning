import logo from './images/logo.PNG';
import './App.scss';

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
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <div className="accordion">
            <div className="row">
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
            </div>
          </div>
        </div>


      </div>
   </div>
  );
}

export default App;
