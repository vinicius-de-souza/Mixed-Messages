function randomNumber(num){
    return Math.floor(Math.random() * num);
}   

const messages = {
    signs: ['Áries ♈︎', 'Touro ♉︎', 'Gêmeos ♊︎', 'Câncer ♋︎', 'Leão ♌︎', 'Virgem ♍︎', 'Libra ♎︎', 'Escorpião ♏︎', 'Sagitário ♐︎', 'Capricórnio ♑︎', 'Aquário ♒︎', 'Peixes ♓︎'],
    months: ['21 março e 20 de abril', '21 de abril e 20 de maio', '21 de maio a 20 de junho', '21 de junho a 22 de julho', '23 de julho a 22 de agosto', '23 de agosto a 22 de setembro', '23 de setembro a 22 de outubro', '23 de outubro a 21 de novembro', '22 de novembro a 21 de dezembro', '22 de dezembro a 20 de janeiro', '21 de janeiro a 18 de fevereiro', '19 de fevereiro a 20 de março'],
    fortune: ['algo bom irá acontecer na sua vida financeira.', 'você tem que prestar mais atenção com quem você deixa entrar na sua vida.', 'em breve você terá uma grande surpresa em sua vida amorosa'], 
}

function randomMessage(){
    const s = randomNumber(12);
    const f = randomNumber(messages.fortune.length);
    console.log(`Você nasceu entre ${messages.months[s]} e seu signo é ${messages.signs[s]}. Seu horóscopo para hoje é: ${messages.fortune[f]}`);
}

randomMessage();


