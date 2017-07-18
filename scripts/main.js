var imageSelector = '[data-image-role="target"]';
var titleSelector = '[data-image-role="title"]';
var thumbSelector = '[data-image-role="trigger"]';
var detailImage = document.querySelector(imageSelector);
var detailText = document.querySelector(titleSelector);
var thumbsNodeList = document.querySelectorAll('a');
var thumbsArray= getArray(thumbsNodeList);


function getArray(nodeList) {
    return [].slice.call(nodeList);
}

function setImage(thumb) {
    detailImage.setAttribute('src', thumb.getAttribute('data-image-url'));
}

function setCaption(thumb) {
    detailText.textContent = thumb.getAttribute('data-image-title');
}


function addListener(array) {
    array.forEach(function(thumb) {
        thumb.addEventListener("click", function(event) {
            event.preventDefault();
            setImage(thumb);
            setCaption(thumb);
        });
    });
}

function randomImage(array) {
    var num = Math.floor(Math.random() * 4);
    var thumbnail = array[num];
    setImage(thumbnail);
    setCaption(thumbnail);
}

addListener(thumbsArray);
randomImage(thumbsArray);