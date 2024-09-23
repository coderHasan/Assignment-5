
const navCount = document.querySelector("#nav-amount")
const floodCount = document.querySelector("#flood-amount")
const inputCount = document.querySelector(".input-amount")
const donatBtn = document.querySelector(".donateBtn")
const modal = document.querySelector(".modal")
const closeBtn = document.querySelector(".closeBtn")
// Feni Donate
const feniDonatBtn = document.querySelector(".feni-donate-btn")

donatBtn.addEventListener("click", function() {
    const inputNumber = parseFloat(inputCount.value)
    const navCountNumber = parseFloat(navCount.innerText)
    const floodCountNumber = parseFloat(floodCount.innerText) 
   
    if(inputNumber > 0){
        modal.classList.add("modal-open")          
        const newBlance =  floodCountNumber + inputNumber.toFixed(2) 
        floodCount.innerText = newBlance
        const myNewBlance = navCountNumber - inputNumber.toFixed(2)
        
        navCount.innerText = myNewBlance
        inputCount.focus()
        inputCount.value = ''
        
    }else{
        
        alert("Donate failed")
    }
})
closeBtn.addEventListener("click", function() {
    modal.classList.remove("modal-open")
})
feniDonatBtn.addEventListener("click", function() {
    feniDonate(
        navCount
    )
})



