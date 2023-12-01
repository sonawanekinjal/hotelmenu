const panels = document.querySelectorAll('.panels')
function panelopen(){
   console.log("Hello")
   this.classList.toggle('open')
}
function panelactive(e){
  console.log(e.propertyName)
  if(e.propertyName.includes('flex')){
  this.classList.toggle('open-active') 
}
} 
panels.forEach(panel => panel.addEventListener('click',panelopen()))
panels.forEach(panel => panel.addEventListener('transitioned',panelactive(e)))
