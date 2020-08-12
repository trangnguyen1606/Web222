/*--- Please scroll down abit to make the selection option works, when the black menu appears, the option works*/

//the functions for each item selection
window.onload = loadPage;

function loadPage() {
  displayProducts();
  getItem();
}

//displayProduct part
function displayProducts() {
  let allItemsOnACupcake = sortCategoriesACupcake();
  //set Page1 as default
  displayEachPage(1, allItemsOnACupcake);

  document.querySelector('#page1').onclick = function() {
    displayEachPage(1, allItemsOnACupcake);
  };
  document.querySelector('#page2').onclick = function() {
    displayEachPage(2, allItemsOnACupcake);
  };
}
function sortCategoriesACupcake() {
  var itemsAfterSortByCupcake = window.allItemsData;
  itemsAfterSortByCupcake = itemsAfterSortByCupcake.filter(item => item.categories === 'A Cupcake');
  return itemsAfterSortByCupcake;
}

//displayProduct part
function displayEachPage(pageNum, ItemsData) {
  var itemsElement = document.getElementsByClassName('productItem');
  for (var j = 0, i = 0; j < 12; j++, i++) {
    //12 items per page
    //set the position of the starting item each Page, with the respective position of the Data
    if (j === 0 && pageNum === 1) {
      i = 12 * 0; //object of position 0 in the data, page 1
    } else if (j === 0 && pageNum === 2) {
      i = 12 * 1; //object of position 12 in the data, page 2
    } else if (j === 0 && pageNum === 3) {
      i = 12 * 2; //object of position 24 in the data, page 3
    } else if (j === 0 && pageNum === 4) {
      i = 12 * 3; //object of position 36 in the data, page 4
    }
    //display the image
    let imgSrc = document.createElement('img');
    imgSrc = ItemsData[i].image.mainImg;
    itemsElement[j].querySelector('img').src = imgSrc;

    //display the title;
    let title = itemsElement[j].querySelector('h4');
    title.innerText = ItemsData[i].title;
    //display the rating
    displayRating(itemsElement);
    //display the Price
    let price = itemsElement[j].querySelector('p');
    //display the categories
    let categories = itemsElement[j].getElementsByClassName('aCategory')[0];
    categories.innerText = 'Category: ' + ItemsData[i].categories;

    //check if item has sales
    if (ItemsData[i].sales > 0) {
      price.innerText =
        '$' + ItemsData[i].price.toFixed(2) + ' - On Sales: ' + ItemsData[i].sales + '%';
    } else {
      price.innerText = '$' + ItemsData[i].price.toFixed(2);
    }
  }
}

//function helper for displayEachPage
function displayRating(itemsElement) {
  for (var i = 0; i < itemsElement.length; i++) {
    let rating = itemsElement[i].getElementsByClassName('rating')[0];
    let itemRating = window.allItemsData[i].rating;
    let addedRating = rating.querySelectorAll('i');
    for (let j = 0; j < 5; j++) {
      if (j + 1 - itemRating < 0) {
        addedRating[j].classList.add('fa');
        addedRating[j].classList.add('fa-star');
      } else if (j + 1 - itemRating === 0.5) {
        addedRating[j].classList.add('fa');
        addedRating[j].classList.add('fa-star-half-o');
      } else {
        addedRating[j].classList.add('fa');
        addedRating[j].classList.add('fa-star-o');
      }
    }
  }
}

function getElementsofItem(container) {
  //get the small Images for product Details
  var imgText = container.querySelector('img').getAttribute('src');
  let smallImg1 = imgText.replace('.jpg', '') + '-1.jpg';
  let smallImg2 = imgText.replace('.jpg', '') + '-2.jpg';
  let smallImg3 = imgText.replace('.jpg', '') + '-3.jpg';
  let smallImg4 = imgText.replace('.jpg', '') + '-4.jpg';
  //extract the onSales and prices
  var itemInfo = {
    title: container.querySelector('h4').innerText,
    price: parseFloat(container.querySelector('p').innerText.replace('$', '')),
    image: {
      mainImg: container.querySelector('img').src,
      smallImage1: smallImg1,
      smallImage2: smallImg2,
      smallImage3: smallImg3,
      smallImage4: smallImg4
    },
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium'
  };

  return itemInfo;
}

//GetItem Part - get the information of each item the customer clicks and stores it at local Storage before the page turns to product details
function getItem() {
  document.querySelector('#item1').onclick = function() {
    //localStorage.clear();
    var container1 = document.querySelector('#item1').parentElement;
    var itemInfo = getElementsofItem(container1);
    localStorage.setItem('itemInfo', JSON.stringify(itemInfo));
  };

  document.querySelector('#item2').onclick = function() {
    //localStorage.clear();
    var container = document.querySelector('#item2').parentElement;
    var itemInfo = getElementsofItem(container);
    localStorage.setItem('itemInfo', JSON.stringify(itemInfo));
  };

  document.querySelector('#item3').onclick = function() {
    //localStorage.clear();
    var container = document.querySelector('#item3').parentElement;
    var itemInfo = getElementsofItem(container);
    localStorage.setItem('itemInfo', JSON.stringify(itemInfo));
  };
  document.querySelector('#item4').onclick = function() {
    //localStorage.clear();
    var container = document.querySelector('#item4').parentElement;
    var itemInfo = getElementsofItem(container);
    localStorage.setItem('itemInfo', JSON.stringify(itemInfo));
  };

  document.querySelector('#item5').onclick = function() {
    //localStorage.clear();
    var container = document.querySelector('#item5').parentElement;
    var itemInfo = getElementsofItem(container);
    localStorage.setItem('itemInfo', JSON.stringify(itemInfo));
  };

  document.querySelector('#item6').onclick = function() {
    //localStorage.clear();
    var container = document.querySelector('#item6').parentElement;
    var itemInfo = getElementsofItem(container);
    localStorage.setItem('itemInfo', JSON.stringify(itemInfo));
  };
  document.querySelector('#item7').onclick = function() {
    //localStorage.clear();
    var container = document.querySelector('#item7').parentElement;
    var itemInfo = getElementsofItem(container);
    localStorage.setItem('itemInfo', JSON.stringify(itemInfo));
  };

  document.querySelector('#item8').onclick = function() {
    //localStorage.clear();
    var container = document.querySelector('#item8').parentElement;
    var itemInfo = getElementsofItem(container);
    localStorage.setItem('itemInfo', JSON.stringify(itemInfo));
  };

  document.querySelector('#item9').onclick = function() {
    //localStorage.clear();
    var container = document.querySelector('#item9').parentElement;
    var itemInfo = getElementsofItem(container);
    localStorage.setItem('itemInfo', JSON.stringify(itemInfo));
  };

  document.querySelector('#item10').onclick = function() {
    //localStorage.clear();
    var container = document.querySelector('#item10').parentElement;
    var itemInfo = getElementsofItem(container);
    localStorage.setItem('itemInfo', JSON.stringify(itemInfo));
  };

  document.querySelector('#item11').onclick = function() {
    //localStorage.clear();
    var container = document.querySelector('#item11').parentElement;
    var itemInfo = getElementsofItem(container);
    localStorage.setItem('itemInfo', JSON.stringify(itemInfo));
  };

  document.querySelector('#item12').onclick = function() {
    //localStorage.clear();
    var container = document.querySelector('#item12').parentElement;
    var itemInfo = getElementsofItem(container);
    localStorage.setItem('itemInfo', JSON.stringify(itemInfo));
  };
}
