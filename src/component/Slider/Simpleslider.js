import React, { Component } from 'react';
import Slider from 'react-slick';

export default class Simpleslider extends Component {
  render() {
    const settings = {
      fade: true,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 2800,
    };
    return (
      <div className="main-slider">
				<link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
				<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
				<style>{cssstyle}</style>
        <Slider {...settings}>
          <div>
          <div className="slider">
                    <div id="mainSlider" className="nivoSlider slider-image">
                      <img src="img/slider/s1.jpg" alt="main slider" title="#htmlcaption1" style={{width: '847px', visibility: 'hidden'}} />
                      <img className="nivo-main-image" src="img/slider/s5.jpg" style={{display: 'inline', height: '410.138px', width: '847px', overflow: 'hidden'}} /><div className="nivo-caption" style={{display: 'block'}}>
                        <div className="slider-progress" />					
                        <div className="slide-text">
                          <div className="middle-text">
                            <div className="cap-title wow slideInRight animated animated" data-wow-duration=".9s" data-wow-delay="0s" style={{visibility: 'visible', animationDuration: '0.9s', animationDelay: '0s', animationName: 'slideInRight'}}>
                              <h2>AVAILABLE IN STORE AND ONLINE</h2>
                            </div>
                            <div className="cap-dec wow slideInRight animated animated" data-wow-duration="1.1s" data-wow-delay="0s" style={{visibility: 'visible', animationDuration: '1.1s', animationDelay: '0s', animationName: 'slideInRight'}}>
                              <p>BLACK PANTHER</p>
                              <h1>1.99$</h1>
                              
                            </div>	
                            <div className="cap-readmore animated bounceIn" data-wow-duration="1.5s" data-wow-delay=".5s">
                              <a href="#">Shop Now</a>
                            </div>	
                          </div>	
                        </div>
                        <div className="slide-image slide2-image">
                          <img className="wow slideInUp animated animated" data-wow-duration="1.5s" data-wow-delay="0s" src="img/slider/si3.png" alt="slider caption" style={{visibility: 'visible', animationDuration: '1.5s', animationDelay: '0s', animationName: 'slideInUp'}} />
                        </div>
                      </div>
                    </div>
                    
                  </div>
          </div>
          <div>
          <div className="slider">
                    <div id="mainSlider" className="nivoSlider slider-image">
                      <img src="img/slider/s1.jpg" alt="main slider" title="#htmlcaption2" style={{width: '847px', visibility: 'hidden'}} />
                      <img className="nivo-main-image" src="img/slider/s1.jpg" style={{display: 'inline', height: '410.138px', width: '847px', overflow: 'hidden'}} /><div className="nivo-caption" style={{display: 'block'}}>
                        <div className="slider-progress" />					
                        <div className="slide-text">
                          <div className="middle-text">
                            <div className="cap-title wow slideInRight animated animated" data-wow-duration=".9s" data-wow-delay="0s" style={{visibility: 'visible', animationDuration: '0.9s', animationDelay: '0s', animationName: 'slideInRight'}}>
                              <h2>NEW COLLECTION</h2>
                            </div>
                            <div className="cap-dec wow slideInRight animated animated" data-wow-duration="1.1s" data-wow-delay="0s" style={{visibility: 'visible', animationDuration: '1.1s', animationDelay: '0s', animationName: 'slideInRight'}}>
                              <p>SAVE TO UP</p>
                              <h1>20% OFF</h1>
                              
                            </div>	
                            <div className="cap-readmore animated bounceIn" data-wow-duration="1.5s" data-wow-delay=".5s">
                              <a href="#">Shop Now</a>
                            </div>	
                          </div>	
                        </div>
                        
                      </div>
                    </div>
                    
          </div>
          
          </div>
        </Slider>
      </div>
    );
  }
}

const cssstyle = `
.main-slider{
  width: 860;
  margin: 0 auto;
}
`