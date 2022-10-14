// console.log ('hi');
// console.log ("Hellooo")

document.querySelector('#minus').addEventListener('click', e => {
    const counterElement = document.querySelector('#counter');
    parseInt(counterElement.innerText --);
    
})
document.querySelector('#plus').addEventListener('click', e => {
    const counterElement = document.querySelector('#counter');
    parseInt(counterElement.innerText ++);
    
})
