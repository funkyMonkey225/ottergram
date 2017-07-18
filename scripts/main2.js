var imageSelector = '[data-image-role="target"]';
var titleSelector = '[data-image-role="title"]';
var thumbSelector = '[data-image-role="trigger"]';
var detailImage = document.querySelector(imageSelector);
var detailText = document.querySelector(titleSelector);

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
// var listItems = document.querySelectorAll("thumbnail-item");
// var listItemsArray = getArray(listItems);

function createListItem (array) {
    array.forEach(function (thumb) {
        var i = 0;
        var thumbList = document.createElement('li');
        thumbList.setAttribute('class', "thumbnail-item");
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
        thumbList.appendChild(thumbImage);

        var thumbSpan = document.createElement('span'); 
        thumbSpan.setAttribute('class', "thumbnail-title");
        thumbSpan.textContent = thumb.text;
        thumbList.appendChild(thumbSpan);
        ul.appendChild(thumbList);
        i++;
    })
})
      

