
const navCount = document.querySelector("#nav-amount")
const floodCount = document.querySelector("#flood-amount")
const inputCount = document.querySelector(".input-amount")
const donatBtn = document.querySelector(".donateBtn")
const modal = document.querySelector(".modal")
const closeBtn = document.querySelector(".closeBtn")


donatBtn.addEventListener("click", function() {
    const inputNumber = parseFloat(inputCount.value)
    const navCountNumber = parseFloat(navCount.innerText)
    const floodCountNumber = parseFloat(floodCount.innerText) 
   
    if(!inputNumber <=0){
        modal.classList.add("modal-open")          
        const newBlance =  floodCountNumber + inputNumber 
        floodCount.innerText = newBlance
        const myNewBlance = navCountNumber - inputNumber
        
        navCount.innerText = myNewBlance
        inputCount.focus()
        inputCount.value = ''
        
    }else{
        
        alert("Donate faild")
    }
})
closeBtn.addEventListener("click", function() {
    modal.classList.remove("modal-open")
})




