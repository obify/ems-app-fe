// import React from 'react'
// import { useState } from "react";
// import { Gallery } from "react-grid-gallery";
// import {  IMAGES } from "./images";
// import {SlideshowLightbox} from 'lightbox.js-react'

// const Gallry = () => {

//     const [images, setImages] = useState(IMAGES);
//     const hasSelected = images.some((image) => image.isSelected);
//     const [lightboxIndex, setLightboxIndex] = useState(null);

//     const handleSelect = (index) => {
//         const nextImages = images.map((image, i) =>
//             i === index ? { ...image, isSelected: !image.isSelected } : image
//         );
//         setImages(nextImages);
//     };

//     const openLightbox = (index) => {
//         setLightboxIndex(index);
//     };

//     const closeLightbox = () => {
//         setLightboxIndex(null);
//     };

//     // const handleSelectAllClick = () => {
//     //     const nextImages = images.map((image) => ({
//     //         ...image,
//     //         isSelected: !hasSelected,
//     //     }));
//     //     setImages(nextImages);
//     // };
//     return (
//         <>
//             <div id="Gallery" >
//                 <div className="p-t-1 p-b-1">

//                 </div>

//                  <Gallery images={images} onSelect={handleSelect}  onClickThumbnail={openLightbox}  />

//             </div>
//             {lightboxIndex !== null && (

//                 <SlideshowLightbox
//                     images={images.map((image) => ({ src: image.src, caption: image.caption }))}
//                     currentIndex={lightboxIndex}
//                     onClose={closeLightbox}
//                 />
//             )}
//         </>
//     )
// }

// export default Gallry;

import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";

import 'react-image-lightbox/style.css';
import { images } from "./images";

const Gallry = () => {
    const [index, setIndex] = useState(-1);

    const currentImage = images[index];
    //   const [currentImage,setCurrentImage]=useState(images[index])
    const nextIndex = (index + 1) % images.length;
    const nextImage = images[nextIndex] || currentImage;
    const prevIndex = (index + images.length - 1) % images.length;
    const prevImage = images[prevIndex] || currentImage;
    //console.log("Helloooooo",currentImage);

    const handleClick = (index, item) => {
        // console.log(item)

        setIndex(index);
        // setCurrentImage(images[index]);
        // console.log(images[index]);
        //console.log("Hiiiiii",currentImage);
        //debugger;
    };
    const handleClose = () => setIndex(-1);
    const handleMovePrev = () => setIndex(prevIndex);
    const handleMoveNext = () => setIndex(nextIndex);

    return (
        <div  className="" id="Gallery">
            <div className="mt-5 section-head text-center">
                <h2>Mela Gallery</h2>
            </div>
            <Gallery
                images={images}
                onClick={handleClick}
                enableImageSelection={false}
            />
            <div className="p-5">
                {currentImage && (
                    <Lightbox
                        mainSrc={images[index]}

                        mainSrcThumbnail={currentImage.src}
                        nextSrc={images[nextIndex] || images[index]}
                        nextSrcThumbnail={nextImage.src}
                        prevSrc={images[prevIndex] || images[index]}
                        prevSrcThumbnail={prevImage.src}
                        onCloseRequest={handleClose}
                        onMovePrevRequest={handleMovePrev}
                        onMoveNextRequest={handleMoveNext}
                    />

                )}
            </div>
        </div>
    );
};
export default Gallry;
