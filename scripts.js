document.addEventListener("DOMContentLoaded", function () {
    const photoAlbum = document.getElementById("photoAlbum");
  
    // Add images to the photo album
    for (let i = 1; i <= 64; i++) { // Adjusted loop to iterate from 1 to 64
      const imageSrc = `images/image${i}.jpg`;
  
      // Select the corresponding img tag and set the src attribute
      const imageTag = photoAlbum.querySelector(`img:nth-of-type(${i})`);
      imageTag.src = imageSrc;
    }
  });
  