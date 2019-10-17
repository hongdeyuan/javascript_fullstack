const divs = document.querySelectorAll('div');
for (let i = 0; i < divs.length; i++) {
    console.log(divs[i].getAttribute('abc'));
    divs[i].setAttribute('sex', 'man');
}