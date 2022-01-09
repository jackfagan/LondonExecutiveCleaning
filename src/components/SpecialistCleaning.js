import React, { Component } from 'react';
import Image1 from '../images/school.png';
import Slider from '../components/Slider';

const images = [Image1]
export default class Home extends Component {
  render() {
    return (
        <div class ="specialist-carousel">
          <div style={{ display: 'flex', justifyContent: 'space-between' }} />
          <h2>Specialist Cleaning</h2>
          <Slider
            options={{
              autoPlay: 4000,
              pauseAutoPlayOnHover: true,
              wrapAround: true,
              fullscreen: true,
              adaptiveHeight: true,
            }}
          >
            {images.map((image, index) => (
              <div className="slider-item" style={{ width: '100%', margin: '0 0.5em' }} key={index}>
                  <img width="200" src="https://buildingandinteriors.com/wp-content/uploads/2021/07/AV6000_Schwarz_M_02-haecker.jpg" />
                  <h3>Covid-19 Cleans</h3>
                  <p className="padding-x-eight">Whether it's misting a whole building or having a trained member of staff to wipe down touchpoints throughout the day using a virucidal chemical. London Executive has the experience and staff to ensure the safety of staff and visitors to your premises.</p>
              </div>
            ))}
                        {images.map((image, index) => (
              <div className="slider-item" style={{ width: '100%', margin: '0 0.5em' }} key={index}>
                                    <img width="200" src="https://buildingandinteriors.com/wp-content/uploads/2021/07/AV6000_Schwarz_M_02-haecker.jpg" />

                  <h3>Window Cleaning</h3>
                  <p className="padding-x-eight">With management experience of cleaning large commercial buildings in Central London and surrounding boroughs. We have the facility to incorporate pole fed, cherry pickers, spiders, abseiling and all aspects of window cleaning. </p>
               </div>
            ))}
                        {images.map((image, index) => (
              <div className="slider-item" style={{ width: '100%', margin: '0 0.5em' }} key={index}>
                                    <img width="200" src="https://buildingandinteriors.com/wp-content/uploads/2021/07/AV6000_Schwarz_M_02-haecker.jpg" />

              <h3>Kitchen Cleaning</h3>
              <p className="padding-x-eight">Whether it be a kitchen clean in an end of tenancy clean or a large commercial kitchen, we have experienced teams who will give you peace of mind that your kitchen will receive a 5-star rating.  </p>
           </div>
            ))}
                        {images.map((image, index) => (
              <div className="slider-item" style={{ width: '100%', margin: '0 0.5em' }} key={index}>
                                    <img width="200" src="https://buildingandinteriors.com/wp-content/uploads/2021/07/AV6000_Schwarz_M_02-haecker.jpg" />

              <h3>Duct Cleaning</h3>
              <p className="padding-x-eight">Our highly qualified and experienced team will clean your ducting throughout. You will receive a HVCA TR/19 certificate on completion. </p>
           </div>
            ))}
                                    {images.map((image, index) => (
              <div className="slider-item" style={{ width: '100%', margin: '0 0.5em' }} key={index}>
                                    <img width="200" src="https://buildingandinteriors.com/wp-content/uploads/2021/07/AV6000_Schwarz_M_02-haecker.jpg" />

              <h3>Carpet Cleaning</h3>
                <p className="padding-x-eight">With an array of different machines and chemicals we should be able to remove the majority of stains from your carpets, and give them a new lease of life, whether its domestic or commercial carpets.</p>
           </div>
            ))}
                                    {images.map((image, index) => (
              <div className="slider-item" style={{ width: '100%', margin: '0 0.5em' }} key={index}>
                                    <img width="200" src="https://buildingandinteriors.com/wp-content/uploads/2021/07/AV6000_Schwarz_M_02-haecker.jpg" />

              <h3>Builders Cleaning</h3>
                <p className="padding-x-eight">We will work with you to handover your premises to the client, even working unsociable hours to ensure you meet your deadline and provide your client with a clean building on completion</p>
           </div>
            ))}
          </Slider>
        </div>
    );
  }
}