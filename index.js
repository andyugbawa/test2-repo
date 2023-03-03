console.log('hello world')

const button=document.querySelector('.btn');
const h1=document.querySelector('.jug');
const bugJug=document.querySelector('.gas');
const imageFolder=document.querySelector('#easy');



button.addEventListener('click',rake);
// button.addEventListener('click',bake);

function rake(){
h1.innerText='phone';
h1.style.fontWeight='bold'
h1.style.color='red'
h1.style.fontSize='50px'
bugJug.style.backgroundColor='green';
imageFolder.src="image/phone.jpg";


}




