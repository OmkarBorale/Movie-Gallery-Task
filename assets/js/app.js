const cl = console.log;

const openModal = document.getElementById("openModal");
const backDrop = document.getElementById("backDrop");
const ourModal = document.getElementById("ourModal");
const closeModal = [...document.querySelectorAll(".closeModal")]

const movieForm = document.getElementById("movieForm");
const titleControlar = document.getElementById("title");
const imageUrlControlar = document.getElementById("imageUrl");
const movieRatingControlar = document.getElementById("movieRating");
const movieCardContainer = document.getElementById("movieCardContainer");


let moviesArr = [
    {
        title : "Devil",
        imageUrl : `https://m.media-amazon.com/images/M/MV5BYjI5NjFlMGItMWY1NC00YjY3LTgzMmUtYmY5NjBiZGMyNTc1XkEyXkFqcGdeQXVyNTgxODY5ODI@._V1_FMjpg_UX1000_.jpg`,
        rating : 5,
    }
]

const templating = (arr) => {
    let result = '';
    arr.forEach(ele => {
        result += `
                   <div class="col-md-4 mb-4">
                       <div class="card">
                           <div class="card-header d-flex justify-content-between align-items-center">
                               <h2>${ele.title}</h2>
                               <small>Rating : ${ele.rating}</small>
                           </div>
                           <div class="card-body">
                               <img src="${ele.imageUrl}" alt="" class="movieImg">
                           </div>
                           <div class="card-footer d-flex justify-content-between">
                               <button class="btn btn-primary">Edit</button>
                               <button class="btn btn-danger">Deleat</button>
                           </div>
                       </div>
                   </div>`
    })
    movieCardContainer.innerHTML = result;
}

templating(moviesArr)

const modalHandler = () => {
    backDrop.classList.toggle("active");
    ourModal.classList.toggle("active");
}

const onMovieSubmit = (eve) => {
    eve.preventDefault()
    let obj = {
        title : titleControlar.value,
        imageUrl : imageUrlControlar.value,
        rating : movieRatingControlar.value,
    }
    moviesArr.unshift(obj);
    templating(moviesArr);
    cl(moviesArr);
    movieForm.reset();
    modalHandler()
}

openModal.addEventListener("click", modalHandler)
movieForm.addEventListener("submit", onMovieSubmit)

closeModal.forEach(ele => {
    ele.addEventListener("click", modalHandler);
})