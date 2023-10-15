const testimonialData = [
    {
        author: "Fauzan Ramadhana",
        quote: "Shappp!",
        image: "https://media.istockphoto.com/id/1183948830/id/foto/masih-detail-kehidupan-di-interior-rumah-ruang-tamu-sweater-dan-secangkir-kopi-dengan-labu-dan.jpg?s=612x612&w=0&k=20&c=cPL6HHA-zSrIKC1LrRAAk_zs959wNvL2ULNmxYIoaGM=",
        rating: 5,
    },
    {
        author: "Fauzan Rama",
        quote: "Shapppeeee!",
        image: "https://media.istockphoto.com/id/1183948830/id/foto/masih-detail-kehidupan-di-interior-rumah-ruang-tamu-sweater-dan-secangkir-kopi-dengan-labu-dan.jpg?s=612x612&w=0&k=20&c=cPL6HHA-zSrIKC1LrRAAk_zs959wNvL2ULNmxYIoaGM=",
        rating: 3,
    },
    {
        author: "FauzaRama",
        quote: "Shapppooooo!",
        image: "https://media.istockphoto.com/id/1183948830/id/foto/masih-detail-kehidupan-di-interior-rumah-ruang-tamu-sweater-dan-secangkir-kopi-dengan-labu-dan.jpg?s=612x612&w=0&k=20&c=cPL6HHA-zSrIKC1LrRAAk_zs959wNvL2ULNmxYIoaGM=",
        rating: 2,
    }

];

function allTestimonial() {
    let testimonialHTML = "";
  
    testimonialData.forEach(function (item) {
      testimonialHTML += `
              <div class="testimonial">
                  <img
                      class="profile-testimonial"
                      src="${item.image}"
                      alt="profile"
                  />
                  <p class="quote">${item.quote}</p>
                  <p class="author">- ${item.author}</p>
                  <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
              </div>
          `;
    });
  
    document.getElementById("testimonials").innerHTML = testimonialHTML;
  }
  
  allTestimonial();
  
  // filtered testimonial
  function filterTestimonial(rating) {
    let testimonialHTML = "";
  
    const testimonialFiltered = testimonialData.filter(function (item) {
      return item.rating === rating;
    });
      console.log(testimonialFiltered);
  
    if (testimonialFiltered.length === 0) {
      testimonialHTML += `<h1> Data not found! </h1>`;
    } else {
      testimonialFiltered.forEach(function (item) {
        testimonialHTML += `
              <div class="testimonial">
                  <img
                      class="profile-testimonial"
                      src="${item.image}"
                      alt="profile"
                  />
                  <p class="quote">${item.quote}</p>
                  <p class="author">- ${item.author}</p>
                  <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
              </div>
          `;
      });
    }
  
    document.getElementById("testimonials").innerHTML = testimonialHTML;
  }