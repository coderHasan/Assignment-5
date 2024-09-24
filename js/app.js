
const navCount = document.querySelector("#nav-amount")
const floodCount = document.querySelector("#flood-amount")
const inputCount = document.querySelector(".input-amount")
const donatBtn = document.querySelector(".donateBtn")
const modal = document.querySelector(".modal")
const closeBtn = document.querySelector(".closeBtn")
const cardTitle1 = document.querySelector(".title1")
// Feni Donate
const feniDonatBtn = document.querySelector(".feni-donate-btn")
const historyContainer1 = document.getElementById("noakhali")
const cardTitle2 = document.querySelector(".title2")
// Quata Donate
const quataDonatBtn = document.querySelector(".quata-donate-btn")
const cardTitle3 = document.querySelector(".title3")


//Donate & History Button
const donateBtn = document.querySelector(".donate-btn")
const historyBtn = document.querySelector(".history-btn")
const main = document.querySelectorAll(".main")





// Noakhali donate card
donatBtn.addEventListener("click", function() {
    const inputNumber = parseFloat(inputCount.value)
    const navCountNumber = parseFloat(navCount.innerText)
    const floodCountNumber = parseFloat(floodCount.innerText) 
   
    if(inputNumber > 0){
        modal.classList.add("modal-open")          
        const newBlance =  floodCountNumber + inputNumber 
        floodCount.innerText = newBlance
        const myNewBlance = navCountNumber - inputNumber
        navCount.innerText = myNewBlance
        inputCount.focus()
        inputCount.value = ''


        const historyItems = document.createElement("div")
        historyItems.innerHTML=`
            

          <div class="p-5 border border-gray-300 rounded-md mb-7">
                <p class="text-md font-bold mb-5"> ${floodCount.innerText = newBlance} <span class="text-3xl font-extrabold">৳</span> ${cardTitle1.innerText}</p>

                <p>${new Date()}</p>

          </div>

        `
        historyContainer1.insertBefore(historyItems, historyContainer1.firstChild)
    
        
    }else{
        
        alert("Donate failed")
    }

   
})

closeBtn.addEventListener("click", function() {
    modal.classList.remove("modal-open")
})

// feni donate card
feniDonatBtn.addEventListener("click", function() {
    feniDonate(
        navCount, cardTitle2
    )
})

// Quata
quataDonatBtn.addEventListener("click", function() {
    quataDonate(navCount, cardTitle3)
})

//Style history  button
historyBtn.addEventListener("click", function() {
    historyButton(historyBtn, donateBtn, historyContainer1)
    for(const section of main){
            section.classList.add("hidden")
    }
    

})

donateBtn.addEventListener("click", function() {
    donateButton(donateBtn, historyBtn, historyContainer1)
    for(const section of main){
        section.classList.remove("hidden")
}
})




