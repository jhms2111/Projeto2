//DIA
let opcoes 

for (let contador = "" ; contador <= "" ; contador++) {
    opcoes += `<Option>${"-- Selecione --" + contador}</Option>`
}
for (let contador = 01; contador <= 9; contador++) {
    opcoes += `<Option>${"0" + contador}</Option>`
}
for (let contador = 10; contador <= 31; contador++) {
    opcoes += `<Option>${contador}</Option>`
}
document.querySelector('#dia').innerHTML = opcoes

//MES
let opcoes1

for (let contador = "" ; contador <= "" ; contador++) {
    opcoes1 += `<Option>${"-- Selecione --" + contador}</Option>`
}
for (let contador = 1; contador <= 9; contador++) {
    opcoes1 += `<Option>${"0" + contador}</Option>`
}
for (let contador = 10; contador <= 12; contador++) {
    opcoes1 += `<Option>${contador}</Option>`
}
document.querySelector('#mes').innerHTML = opcoes1

//ANO
let opcoes2

for (let contador = "" ; contador <= "" ; contador++) {
    opcoes2 += `<Option>${"-- Selecione --" + contador}</Option>`
}
for (let contador = 2022; contador <= 2023; contador++) {
    opcoes2 += `<Option>${contador}</Option>`
}
document.querySelector('#ano').innerHTML = opcoes2

//HORA
let opcoes3

for (let contador = "" ; contador <= "" ; contador++) {
    opcoes3 += `<Option>${"-- Selecione --" + contador}</Option>`
}
for (let contador = 9  ; contador <= 9 ; contador++) {
    opcoes3 += `<Option>${"0" + contador + ":00" }</Option>` 
    opcoes3 += `<Option>${"0" + contador + ":30" }</Option>`
}
for (let contador = 10  ; contador <= 19 ; contador++) {
    opcoes3 += `<Option>${contador + ":00" }</Option>` 
    opcoes3 += `<Option>${contador + ":30" }</Option>`
}
document.querySelector('#hora').innerHTML = opcoes3
