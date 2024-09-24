

const feniFloodCount = document.querySelector("#feni-flood-amount")
const feniCount = document.querySelector(".feni-amount")

// Quota
const quotaFloodCount = document.querySelector("#quota-amount")
const quataCount = document.querySelector(".quota-amount")


// Feni donation card
function feniDonate(navCount, cardTitle) {
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

        // History
        const historyItems = document.createElement("div")
        historyItems.innerHTML=`
            

          <div class="p-5 border border-gray-300 rounded-md mb-7">
                <p class="text-md font-bold mb-5"> ${feniFloodCount.innerText = feniNewBlance} <span class="text-3xl font-extrabold">৳</span> ${cardTitle.innerText}</p>

                <p>${new Date()}</p>

          </div>

        `
        historyContainer1.insertBefore(historyItems, historyContainer1.firstChild)
        
    }else{
        alert("Donate failed")
    }

}
// Quota donation card

function quataDonate(navCount, cardTitle) {
    const quataInputNumber = parseFloat(quataCount.value)
    const quataNavCountNumber = parseFloat(navCount.innerText)
    const qualaCountNumber = parseFloat(quotaFloodCount.innerText) 
   
    if(quataInputNumber > 0){
        modal.classList.add("modal-open")          
        const quataNewBlance =  qualaCountNumber + quataInputNumber 
        quotaFloodCount.innerText = quataNewBlance
        const myQuataNewBlance = quataNavCountNumber - quataInputNumber
        
        navCount.innerText = myQuataNewBlance
        quataCount.focus()
        quataCount.value = ''

        // History
        const historyItems = document.createElement("div")
        historyItems.innerHTML=`
            

          <div class="p-5 border border-gray-300 rounded-md mb-7">
                <p class="text-md font-bold mb-5"> ${quotaFloodCount.innerText = quataNewBlance} <span class="text-3xl font-extrabold">৳</span> ${cardTitle.innerText}</p>

                <p>${new Date()}</p>

          </div>

        `
        historyContainer1.insertBefore(historyItems, historyContainer1.firstChild)
        
    }else{
        alert("Donate failed")
    }

}

// style donate & history button
function historyButton(history, donate, historyContainer){
    history.classList.add("active-btn-bg")
    donate.classList.remove("active-btn-bg")
    historyContainer.classList.remove("hidden")
}

function donateButton(donate, history, historyContainer) {
    donate.classList.add("active-btn-bg")
    history.classList.remove("active-btn-bg")
    historyContainer.classList.add("hidden")
}