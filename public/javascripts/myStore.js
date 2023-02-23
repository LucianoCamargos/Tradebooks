

let divImage = document.querySelector('.images')

let fileInput = document.getElementById("file");


function readImage() {
    divImage.innerHTML = ""
    let j = 0
    for (i of fileInput.files) {
        var file = new FileReader();
        let figure = document.createElement("figure");
        let figCap = document.createElement("figcaption");


        figCap.innerText = `Foto ${j + 1}`

        figure.appendChild(figCap);

        file.addEventListener('load', e => {
            readerTarget = e.target
            let image = document.createElement('img')
            image.setAttribute("src", readerTarget.result);
            figure.insertBefore(image, figCap);

        })

        divImage.appendChild(figure)
        file.readAsDataURL(i);
        j++
    }
}

fileInput.addEventListener("change", readImage, false);



