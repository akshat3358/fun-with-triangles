const triangleBase =  document.querySelector('#base-triangle');

const triangleHeight = document.querySelector('#height-triangle');

const calAreaBtn = document.querySelector('.cal-Area');

const resultEl = document.querySelector('#result');

function calculateArea(b,h) {
    var areaa = 0.5*((b)*(h));
    
    return areaa;
}

function clickHandler(){
    const areaofTriangle = calculateArea(triangleBase.value,triangleHeight.value);
    console.log(areaofTriangle);
    resultEl.innerHTML = `Area of Triangle is ${areaofTriangle} cm<sup>2</sup>`;
    //resultEl.innerHTML = 'Area of Triangle is ${areaOfTrianlge} cm<sup>2</sup>';
}


calAreaBtn.addEventListener('click',clickHandler);