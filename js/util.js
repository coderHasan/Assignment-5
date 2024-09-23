

const feniFloodCount = document.querySelector("#feni-flood-amount")
const feniCount = document.querySelector(".feni-amount")


function feniDonate(navCount) {
    const feniInputNumber = parseFloat(feniCount.value)
    const feniNavCountNumber = parseFloat(navCount.innerText)
    const floodCountNumber = parseFloat(feniFloodCount.innerText) 
   
    if(feniInputNumber > 0){
        modal.classList.add("modal-open")          
        const feniNewBlance =  floodCountNumber + feniInputNumber 
        feniFloodCount.innerText = feniNewBlance
        const myFeniNewBlance = feniNavCountNumber - feniInputNumber
        
        navCount.innerText = myFeniNewBlance
        feniCount.focus()
        feniCount.value = ''
        
    }else{
        alert("Donate failed")
    }

}
