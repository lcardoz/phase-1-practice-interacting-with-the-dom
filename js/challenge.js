console.log ('hi');

document.querySelector('#minus').addEventListener('click', e => {
    const counterElement = document.querySelector('#counter');
    parseInt(counterElement.innerText --);
    
})

