// console.log ('hi');
// console.log ("Hellooo")

const counterElement = document.querySelector('#counter');

document.querySelector('#minus').addEventListener('click', e => {
    parseInt(counterElement.innerText --);
})

document.querySelector('#plus').addEventListener('click', e => {
    parseInt(counterElement.innerText ++);
})
