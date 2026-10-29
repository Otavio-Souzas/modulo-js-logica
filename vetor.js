// const medias = [8.5, 9, 6, 7, 8.5, 7, 7]
// // crie uma lista de nomes com Ana, Bruno, Carla, Diego, Elisa, Fábio, Junior
// // e mostre no console, o nomes[3], e medias[3]
// const nomes = ["Ana", "Bruno", "Carla", "Diego", "Elisa", "Fábio", "Junior"]
// // console.log(nomes[3] + " " + medias[3] // Diego 7

// const mediaDaEscola =7;

// for (let i = 0; i <medias.lenght; i++)
//     // i = 0
//  if (medias[i] >=mediaDaEscola) {
//     console.log("O aluno: " + nomes[i] + "Está Aprovado");
// }


// console.log(nomes[3] + "" + medias[3]) // Diego 7

// console.log(medias[1]) // 9
// console.log(medias[5]) // 7
// console.log(medias[4]) // 8.5
// console.log(medias.lenght) // 7
// console.log(medias[10]) // undefined



const medias = []
const mediaDaEscola = 7;
let input 

while (input != -1) {
    while (input < 0 || isNaN(input)) {
        console.log("Valor inválido.");
        input = Number(prompt("Média do próximo aluno: "))
    }
    input = Number(prompt("Média do próximo aluno: "))
    medias.push(input);
}
