let ensMedio = alert ("Vamos verificar se você passou de Ano!")
let student = prompt("Qual o nome do(a) aluno(a) ?")
let nt1 = prompt("Qual a nota do primeiro bimestre")
let nt2 = prompt("Qual a nota do segundo bimestre")
let nt3 = prompt("Qual a nota do terceira bimestre")
let nt4 = prompt("Qual a nota do quarto bimestre")

let average = (Number(nt1) + Number(nt2) + Number(nt3) + Number(nt4)) /4

let result = average > 6

average = average.toFixed(2)

if (result) {
    alert("Parabéns, " + student + " ! Sua média foi de: " + average + 
    ", Você tem um belo futuro pela frente!")
   
}else if (average == 6) {
    alert("Parabéns, " + student + " ! Porém você passou se arreastendo "
     + "! Sua média foi de: " + average)
}else if (average <= 3) {
    alert("Repovado")
}

else{
    alert(student +
         " ! Estude para sua prova de recuperação! Sua média foi de: "
     + average)
}
