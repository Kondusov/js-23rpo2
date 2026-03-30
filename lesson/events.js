let mouseElem = document.getElementById('mouseEnter');
mouseElem.addEventListener('mouseenter', ()=>{
    console.log('курсор пришел на элемент')
    document.getElementById('resultDataForm').textContent = 'курсор пришел на элемент';
})
mouseElem.addEventListener('mouseleave', ()=>{
    console.log('курсор покинул элемент')
    document.getElementById('resultDataForm').textContent = 'курсор покинул элемент';
})

let mouseEntwerBlock = document.getElementById('mouseEnter');
mouseEntwerBlock.style.color = '#fff';
document.addEventListener('mousemove', (event)=>{
    console.log('по Х:'+ event.clientX+' по Y:'+ event.clientY)
    mouseEntwerBlock.textContent = `по Х: ${event.clientX} по Y: ${event.clientY}`;
})
