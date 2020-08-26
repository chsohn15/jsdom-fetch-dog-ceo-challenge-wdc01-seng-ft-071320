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
        li.addEventListener("click",function(){
            li.style = "color:red"
        })
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
    

    // switch(document.querySelector('#breed-dropdown').value){
    //     case "a":
    //         let allLis = document.querySelectorAll("li")
    //         for(const li of allLis){
    //             if (li.innerText[0] === "a"){
    //                 document.querySelector('ul#dog-breeds').innerHTML = "";
    //                 let child = document.createElement("li")
    //                 child.innerText = li.innerText
    //                 document.querySelector('ul#dog-breeds').append(child)
    //             }
    //         }
    //         break
    //     case "b":
    //         console.log("B")
    //         for(const li of allLis){
    //             if (li.innerText[0] === "b"){
    //                 document.querySelector('ul#dog-breeds').innerHTML = "";
    //                 document.querySelector('ul#dog-breeds').appendChild(li)
    //             }
    //         }
            // for(const li of allLis){
            //     if (li.innerText[0] === "b"){
            //         console.log("WORKING")
            //         document.querySelector('ul#dog-breeds').innerHTML = "";
            //         let child = document.createElement('li')
            //         text = li.innerText
            //         child.innerText = text
            //         let uldogs = document.querySelector('ul#dog-breeds')
            //         uldogs.appendChild(child)
            //     }
            // }
    //     break
            
     
     

    fetch("https://dog.ceo/api/breeds/list/all")
        .then(resp => resp.json())
        .then(breeds => addBreed(breeds.message))

    const allLis = document.querySelectorAll("li")
    
    
    document.querySelector('#breed-dropdown').onchange = function(){
        
        
        switch(document.querySelector('#breed-dropdown').value){
                case "a":
                    console.log('IT CHANGED TO A')
                    for(const li of allLis){
                        if (li.innerText[0] === "a"){
                            document.querySelector('ul#dog-breeds').innerHTML = "";
                            let child = document.createElement("li")
                            child.innerText = li.innerText
                            document.querySelector('ul#dog-breeds').append(child)
                        }
                    }
                    break
                
                    case "b":
                        console.log('IT CHANGED TO B')
                    for(const li of allLis){
                        if (li.innerText[0] === "b"){
                            document.querySelector('ul#dog-breeds').innerHTML = "";
                            document.querySelector('ul#dog-breeds').appendChild(li)
                        }
                    }
    }

    }

})