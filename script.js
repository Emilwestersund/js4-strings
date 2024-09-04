//opg 1
/*
function navnformatering() {
    let fornavn = prompt("skriv ditt fornavn")
    let etternavn = prompt("skriv ditt etternavn")

    fornavn = fornavn.substring(0,1).toUpperCase()+ fornavn.substring(1).toLowerCase()
    etternavn = etternavn.substring(0,1).toUpperCase()+ etternavn.substring(1).toLowerCase()
    return(`${fornavn} ${etternavn}`)
}

document.write(navnformatering())
*/

//opg 2
/*
function countwords(settning){
    let words = settning.split(" "). filter(word => word.length)
    return words.length
}

let sentence = "dette er en test"
console.log("antall ord i setningen:", countwords(sentence))
*/

//opg 3
/*
function replacewith()  {
    let sentence = prompt("skriv inn en setning")

    let newsentence = ""
    for (let i= 0; i < sentence.length; i++){
        if (sentence[i] == "a") {
            newsentence += "@"
    }else {
        newsentence += sentence[i]
    }
}
    console.log("nyt settning:", newsentence)
    
}

replacewith()
*/

//opg 4
/*
function lengst(){
    let sentence = prompt("skriv inn en setning")
    let words = sentence.split(" ")
    let lengste = words[0]
    for (let i = 1; i < words.length; i++){
        if (words[i].length > lengste.length){
            lengste = words[i]
        }
    }
    console.log("lengste ord:", lengste)
}

lengst()
*/

//opg 5
