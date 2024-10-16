/****Beto -- practicando como imprimir una lista de numeros***** */
const tenNumbers = ["one1", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];

const impNumbers = ()=>{
    tenNumbers.forEach(tenNumber => {
        /**ESTO ES UNA FORMA DE ESCRIBIRLO */
        console.log("Vamos en el numero "+ tenNumber)
        /**Creo que tambien asi se puede escribir */
        console.log(`Numero ${tenNumber}`)
    });
}
impNumbers();