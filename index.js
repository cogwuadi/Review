
let reviews = [
{
    id: 1,
    name:"Grace oko",
    job:"Web Developer",
    img: src="./images/images-removebg-preview.png",
    text:"Lorem ipsum dolor sit amet. Est corporis consequatur ea blanditiis Quis qui quia rerum. Ut voluptas accusamus sit esse sapiente non corporis voluptatem quo molestias magniday going?"
},

{
    id: 2,
    name:"Emman quick",
    job:"Web Developer",
    img: src="./images/images__1_-removebg-preview.png",
    text:"Lorem ipsum dolor sit amet. Est corporis consequatur ea blanditiis Quis qui quia rerum. Ut voluptas accusamus sit esse sapiente non corporis voluptatem quo molestias magniday going?"
},

{
    id: 3,
    name:"David Gambo",
    job:"Web Developer",
    img: src= "./images/images-removebg-preview.png",
    text:"Lorem ipsum dolor sit amet. Est corporis consequatur ea blanditiis Quis qui quia rerum. Ut voluptas accusamus sit esse sapiente non corporis voluptatem quo molestias magniday going?"
}


];

let img = document.getElementById("person-img");
let author = document.getElementById("author");
let job = document.getElementById("job");
let info = document.getElementById("info");


let prevBtn = document.querySelector("#prev-btn");
let nextBtn = document.querySelector("#next-btn");

// set starting item
let currentItem = 5;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
   showPerson();
});


// show person based on item
function showPerson() {
    let item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
};

// show next person
nextBtn.addEventListener("click", function() {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson();
});

// show prev person
prevBtn.addEventListener("click", function() {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
});
