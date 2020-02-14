import './../css/app.scss';

var component = function () {
    let element = document.createElement('div');
    element.innerHTML = 'hellooooooooooooooooooooooooooooooooooo world';
    return element;

};

document.body.appendChild(component());