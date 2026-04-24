//Questão 1 – Condicional If
const tarefaConcluida = "2";
if (tarefaConcluida===2){
    console.log("A tarefa está concluída!");
} else{
    console.log("A tarefa não foi concluida");
}

//Questão 2 – Condicional If/Else If/Else
 
let prioridade = 2;
if (prioridade === 1){
    console.log("Prioridade Baixa");
} else if(prioridade === 2){
    console.log("Prioridade Média");
} else if(prioridade === 3){
    console.log("Prioridade Alta");
} else{
    console.log("Esse valor não se encaixa como uma prioridade");
}

//Questão 3 – Switch Case
let diaSemana = new Date().getDay();

switch(diaSemana){
    case 0:
        console.log("Domingo");
        break;
    case 1:
        console.log("Segunda-feira");
        break;
    case 2:
        console.log("Terça-feira");
        break;
    case 3:
        console.log("Quarta-feira");
        break;
    case 4:
        console.log("Quinta-feira");
        break;
    case 5:
        console.log("Sexta-feira");
        break;
    case 6:
        console.log("Sábado");
        break;
    
}

//questão 4
for (let i = 0; i < 10; i++) {
  console.log(i);
}


