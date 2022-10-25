let infoMargarida = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
};

let infoTioPatinhas = {
    personagem: 'Tio Patinhas',
    origem: `Christmas on Bear Mountain', Dell's Four Color Comics #178`,
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
};

for (let key in infoMargarida, infoTioPatinhas) {
    if (key == 'recorrente' && infoMargarida.recorrente == infoTioPatinhas.recorrente) {
        console.log('Ambos recorrentes')
    } else {
        console.log(infoMargarida[key], 'e', infoTioPatinhas[key])
    }
}