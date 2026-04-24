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