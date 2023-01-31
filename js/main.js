var featureLink = document.querySelector('a.feature');

function featureLinkHandler(evt) {

    var featureImage = document.querySelector('img.feature');
    featureImage.src = featureLink.href;

    if(featureImage.classList.contains('hidden')){ //if the classList contains hidden, show the image

        featureLink.innerHTML = "Hide Barcelona"
        featureImage.classList.remove('hidden')

    } else {

        featureLink.innerHTML = "View Barcelona"
        featureImage.classList.add('hidden');

    }
    evt.preventDefault();
}



featureLink.addEventListener('click', featureLinkHandler);