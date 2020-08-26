//

document.addEventListener("DOMContentLoaded",function(){
    console.log("Hello World")

    function addImageTag(dog){
        const imgContainer = document.getElementById('dog-image-container')
        let imgTag = document.createElement('IMG')
        imgTag.src = dog
        imgContainer.appendChild(imgTag)
    }

    function pictureLoop(dogs){
        for(const element of dogs){
            addImageTag(element)
        }
        // dogs.forEach(function(dog){ 
        //     addImageTag(dog)
        // }
        // )
    }

    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(res => res.json())
    .then(pictures => pictureLoop(pictures.message)
    )

    // add image elements to DOm for each image in array
    
    
}
)
