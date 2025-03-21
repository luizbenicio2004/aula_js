function Alunos(a,b){
    this.nome = a
    this.nota = b
}

var aluno1 = new Alunos ("Luiz", 20)
var aluno2 = new Alunos ("Silvestre", 20)
var aluno3 = new Alunos ("caiqu0", 20)

var lista = [];

lista.push(aluno1);
lista.push(aluno2);
lista.push(aluno3)

console.log(lista)