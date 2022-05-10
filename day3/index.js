const inputs=document.querySelectorAll('.controls input')



console.log("hello")
try{
inputs.forEach((input)=>{
  input.addEventListener('change',handleUpdate)
  input.addEventListener('mousemove',handleUpdate)


})


function handleUpdate(){
  console.log(this.value)//here this will refer to html element which is we operating on ie the 
 // input tag we are changing
 const suffix = this.dataset.sizing || '';
 console.log(suffix)
 console.log(this.name)
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
 
}
}

catch(e){
  console.log(e.message)
}
