const button=document.querySelector('.btn');
const gangLeader=document.querySelector('.king');
const imageCard=document.querySelector('#drag');
const container=document.querySelector('.case');
const parent=document.querySelector('.card');




button.addEventListener('click',addButton);


function addButton(){
gangLeader.style.backgroundColor='blue';
gangLeader.style.height='70px';
gangLeader.style.padding='15px';
gangLeader.style.marginBottom='15px';
gangLeader.style.marginTop='12px';
imageCard.src="image/gwagon.jpg";
container.style.backgroundColor='rgb(191, 137, 241)';
parent.style.backgroundColor='grey';
button.style.backgroundColor='red';
button.style.color='';
gangLeader.style.borderRadius='15px';
}