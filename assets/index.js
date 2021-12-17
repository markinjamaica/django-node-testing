function component() {
    const element = document.createElement('div');
    element.innerHtml = 'Hello webpack';
    return element;
}
document.body.appendChild(component());
