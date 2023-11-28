// - **Chennai:**
//   - Population: Approximately 10.97 million (2021)
//   - Language: Tamil, English
//   - Literacy Rate: High

// - **Delhi:**
//   - Population: Over 31 million (2021)
//   - Language: Hindi, English, Punjabi, Urdu
//   - Literacy Rate: High

// - **Mumbai:**
//   - Population: Around 20.4 million (2021)
//   - Language: Marathi, Hindi, English
//   - Literacy Rate: High

// - **Bangalore (Bengaluru):**
//   - Population: Approximately 12.3 million (2021)
//   - Language: Kannada, English
//   - Literacy Rate: High

const button = document.querySelector("button")
let resultdiv = document.createElement("div") //creation of an element
    resultdiv.id = 'result'
    document.getElementById("wrapper").appendChild(resultdiv)

//event listener 
button.addEventListener(`click`, displaystates)
function displaystates(){
    const input = document.getElementById("input")
    const city = input.options[input.selectedIndex].value
    console.log(city)
    let population= 0,  lr = 0, language = ""
    
    switch(city){
        case 'bangaluru':
            population = 1000000
            lr = 88.71
            language = "kanada"
            break
        case "chennai":
            population = 2000000
            lr = 90.20
            language = "tamil"
            break
        case "delhi":
            population = 300000
            lr = 50.0
            language = "hindi"
            break
        case "mumbai":
            population = 400000
            lr  = 60.0
            language = "marati"


    }
    let text  = `The indian city of ${city} has a population ${population} and language is ${language} and literacy rate is ${lr}`
    console.log(text)
    
    document.getElementById("result").innerHTML = text
}