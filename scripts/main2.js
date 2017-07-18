var imageSelector = '[data-image-role="target"]';
var titleSelector = '[data-image-role="title"]';
var thumbSelector = '[data-image-role="trigger"]';

var thumbsNodeList;
var thumbsArray;
var detailImage;
var detailText;
var unorderedList;

// Information formerly listed in HTML doc
var thumbsArray2 = [
        { href: "img/otter1.jpg", 
          title: "Stayin' Alive",
          alt: "Barry the Otter",
          text: "Barry"
        },
        
        { href: "img/otter2.jpg",
          title: "How Deep Is Your Love",
          alt: "Robin the Otter",
          text: "Robin"
        },

        { href: "img/otter3.jpg",
          title: "You Should Be Dancing",
          alt: "Maurice the Otter",
          text: "Maurice"
        },

        { href: "img/otter4.jpg",
          title: "Night Fever",
          alt: "Lesley the Otter",
          text: "Lesley"
        },

        { href: "img/otter5.jpg",
          title: "To Love Somebody",
          alt: "Barbara the Otter",
          text: "Barbara"
        }
    ]

unorderedList = document.querySelector('.thumbnail-list');


function createListItem(array) {
    array.forEach(function (thumb) {
        var thumbList = document.createElement('li');
        thumbList.setAttribute('class', "thumbnail-item");
        unorderedList.appendChild(thumbList);

        var thumbLink = document.createElement('a');
        thumbLink.setAttribute('href', thumb.href);
        thumbLink.setAttribute('data-image-role', "trigger");
        thumbLink.setAttribute('data-image-title', thumb.title);
        thumbLink.setAttribute('data-image-url', thumb.href);
        thumbList.appendChild(thumbLink);
        
        var thumbImage = document.createElement('img');
        thumbImage.setAttribute('class', "thumbnail-image");
        thumbImage.setAttribute('src', thumb.href);
        thumbImage.setAttribute('alt', thumb.alt);
        thumbLink.appendChild(thumbImage);

        var thumbSpan = document.createElement('span'); 
        thumbSpan.setAttribute('class', "thumbnail-title");
        thumbSpan.textContent = thumb.text;
        thumbLink.appendChild(thumbSpan);
    })
}

// Loops through each object in thumbsArray2 -- creates list item for each, appends to body of doc
createListItem(thumbsArray2);

thumbsNodeList = document.querySelectorAll('a');
thumbsArray= getArray(thumbsNodeList);
detailImage = document.querySelector(imageSelector);
detailText = document.querySelector(titleSelector);

// Makes nodeList into array
function getArray(nodeList) {
    return [].slice.call(nodeList);
}

function setImage(thumb) {
    detailImage.setAttribute('src', thumb.getAttribute('data-image-url'));
}

function setCaption(thumb) {
    detailText.textContent = thumb.getAttribute('data-image-title');
}

// adds listener to each thumbnail, changes main image and caption when clicked
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
    var swap;
    var i = 0;
    setImage(thumbnail);
    setCaption(thumbnail);
}

addListener(thumbsArray);
randomImage(thumbsArray);

//  thumbsArray2.forEach(function(thumb2) {
//         if (array[num].getAttribute('href') === thumb2.href) {
//             swap = thumbsArray2[0];
//             thumbsArray2[0] = thumbsArray2[i];
//             thumbsArray2[i] = swap;
//         }
//         i++;
//         console.log(i);
//     })
//     createListItem(thumbsArray2);