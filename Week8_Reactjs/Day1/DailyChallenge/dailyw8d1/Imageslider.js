import 'react-slideshow-image/dist/styles.css'
import React from 'react';
import { Slide } from 'react-slideshow-image';

const images = [
    {
        url: 'https://pngimg.com/uploads/dog/dog_PNG50322.png',
        name: 'dog',
        id: 1
    },
    {
        url: 'https://image.shutterstock.com/image-photo/cute-dog-on-isolated-background-600w-1942867918.jpg',
        name: 'dog',
        id: 2
    },
    {
        url: 'https://image.shutterstock.com/image-photo/pure-youth-crazy-english-cocker-600w-1424153078.jpg',
        name: 'dog',
        id: 3
    },
    {
        url: 'https://pngimg.com/uploads/dog/dog_PNG175.png',
        name: 'dog',
        id: 4
    }
];

const Imageslider = () => {

    return (
        <>
            <div style={{ 'backgroundImage': `url(${images[0].url})` }}></div>
            <div className="slide-container">
                <Slide>
                    {images.map(image => {
                        return (
                            <div className="each-slide" key={image.id}>
                                <div style={{ 'backgroundImage': `url(${image.url})`,height:'80vh'  }}>
                                    <span>{image.id}</span>
                                    <span>{image.name}</span>
                                </div>
                            </div>
                        )
                    })
                    }
                </Slide>
            </div>
        </>
    )
}
export default Imageslider;