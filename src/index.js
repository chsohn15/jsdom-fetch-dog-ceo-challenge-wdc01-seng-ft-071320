//

document.addEventListener("DOMContentLoaded", function () {
    console.log("Hello World")

    function addImageTag(dog) {
        const imgContainer = document.getElementById('dog-image-container')
        let imgTag = document.createElement('IMG')
        imgTag.src = dog
        imgContainer.appendChild(imgTag)
    }

    function pictureLoop(dogs) {
        for (const element of dogs) {
            addImageTag(element)
        }
        // dogs.forEach(function(dog){ 
        //     addImageTag(dog)
        // }
        // )
    }

    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(res => res.json())
        .then(pictures => pictureLoop(pictures.message))

    // add image elements to DOm for each image in array


    function addLiTag(element) {
        const dogBreed = document.getElementById("dog-breeds")
        const li = document.createElement('li');
        li.id = element
        li.innerText = element;
        dogBreed.append(li);
    }


    function addBreed(breeds) {
        for (let element in breeds) {
            addLiTag(element)
            if (breeds[element].length != 0) {
                let ul = document.createElement('ul');
                for (const subBreed of breeds[element]) {
                    let li = document.createElement('li')
                    li.innerText = subBreed
                    ul.appendChild(li);
                    document.getElementById(element).appendChild(ul);
                }
            }
        }
    }

    fetch("https://dog.ceo/api/breeds/list/all")
        .then(resp => resp.json())
        .then(breeds => addBreed(breeds.message))

})