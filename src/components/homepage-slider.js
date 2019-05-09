import React, { Component } from 'react'
import '../App.css';
import { Carousel } from 'antd'
class Slider extends Component {
    constructor() {
        super();
        this.state = {

        }
        
    }

    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
          };
        return (
          <Carousel {...settings}
            autoplay = 'true'
            >
            <div>
                <img src={require('../image/image2.jpg')} className='picture' alt = 'some text'/>    
            </div>
            <div>
                <img src={require('../image/image1.jpg')} className='picture' alt = 'some text' />    
            </div>
            <div>
                <img src={require('../image/image3.jpg')} className='picture' alt = 'some text'/>    
            </div>
                
            </Carousel>

        )
    }
}
export default Slider