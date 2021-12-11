console.log("Olá Mundo");

const alunos = [
    {
        nome:"Luiz",
        nota:10,
        turma:"A10",
    },{
        nome:"Mateus",
        nota:9,
        turma:"B9",
    },{
        nome:"Miguel",
        nota:8,
        turma:"C8",
    },{
        nome:"Iraquitan",
        nota:8,
        turma:"D8",
    },{
        nome:"Fulano",
        nota:5,
        turma:"E8",
    },{
        nome:"Sicrano",
        nota:4,
        turma:"F8",
    },{
        nome:"Beltrano",
        nota:7,
        turma:"G8",
    },
];


function aprovados(media = 7){
    const arrayAprovados = [];

    for(let i=0; i<alunos.length; i++){
        if(alunos[i].nota >= media){
            console.log(" -----> Aprovados: " + alunos[i].nome + " Nota: " + alunos[i].nota + " da turma: " + alunos[i].turma);
            arrayAprovados.push(alunos[i]);
        }
        else{
            console.log("Reprovados: " + alunos[i].nome + " com nota: " + alunos[i].nota + " da turma " + alunos[i].turma);
        }
    }

    for(let e=0; e<arrayAprovados.length; e++){
        console.log("---------------------------------------------");
        console.log(arrayAprovados[e]);
    }
}

aprovados();