// write your code here
fetch('http://localhost:3000/ramens')
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        data.forEach(element => {
            const imgSrc= element.image
            const imgTag = document.createElement("img")
            imgTag.setAttribute("src", imgSrc)
            const ramenImg = document.querySelector("#ramen-menu")
            ramenImg.append(imgTag)
            imgTag.addEventListener("click",()=>{
                const name= document.querySelector(".name")
                const restaurant= document.querySelector(".restaurant")
                const imageContainer = document.querySelector(".detail-image")
                const rating = document.querySelector("#rating-display")
                const comment = document.querySelector("#comment-display")
                name.innerText= element.name
                restaurant.innerText= element.restaurant
                imageContainer.setAttribute("src", imgSrc)
                rating.innerText= element.rating
                comment.innerText= element.comment
            })
        });
    })


//cant't get create new ramen to add my  img to ramen menu 
function createNewRamen(event){
    //make a new obj for the ramen
    //append input value to new container
    // add event listener for submit button
    
    const newName= document.querySelector("#new-name").value
    const newImg= document.querySelector("#new-image").value
    const newComment= document.querySelector("#new-comment").value
    const newRestaurant= document.querySelector('#new-restaurant').value
    const newRating= document.querySelector("#new-rating").value
    const ramenobj={
        comment: newComment,
        image: newImg,
        name: newName,
        rating: newRating,
        restaurant: newRestaurant
    }
    const imgSrc= newImg
    console.log(ramenobj)
    const imgTag = document.createElement("img")
    imgTag.setAttribute("src", imgSrc)
    const ramenImg = document.querySelector("#ramen-menu")
    ramenImg.append(imgTag)
    imgTag.addEventListener("click",()=>{
        const name= document.querySelector(".name")
        const restaurant= document.querySelector(".restaurant")
        const imageContainer = document.querySelector(".detail-image")
        const rating = document.querySelector("#rating-display")
        const comment = document.querySelector("#comment-display")
        name.innerText= ramenobj.name
        restaurant.innerText= ramenobj.restaurant
        imageContainer.setAttribute("src", imgSrc)
        rating.innerText= ramenobj.rating
        comment.innerText= ramenobj.comment
    })
    event.preventDefault();
 }

 const ramenForm = document.querySelector(".button")
 ramenForm.addEventListener("click", createNewRamen)


