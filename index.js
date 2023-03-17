let imgUrls = [
   'image/image1.jpg',
   'image/image2.jpg',
   'image/image3.jpg',
   'image/image4.jpg',
   'image/image5.jpg'
]




let setCount = 0;
let sliderImg = document.getElementById('slider-img');

setInterval(() => {
    if(setCount === imgUrls.length){
        setCount = 0;
    }
    let imageUrl = imgUrls[setCount];
    sliderImg.setAttribute('src', imageUrl);
    console.log(imageUrl);
    setCount++
}, 1500);