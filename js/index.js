const images = document.querySelectorAll('.img');
const containterImage = document.querySelector('.container-img');
const imageContainer = document.querySelector('.img-show');
const copy = document.querySelector('.copy');
const closeModal = document.querySelector('.bx.bx-x');


images.forEach(image =>{
    image.addEventListener('click', ()=>{
        
        addImage(image.getAttribute('src'),image.getAttribute('alt'));

    })
})

const addImage = (srcImage, altImage)=>{
    containterImage.classList.toggle('move'); 
    imageContainer.classList.toggle('show');
    imageContainer.src = srcImage; 
    copy.innerHTML = altImage;
}

closeModal.addEventListener('click', ()=>{
    containterImage.classList.toggle('move'); 
    imageContainer.classList.toggle('show');

})