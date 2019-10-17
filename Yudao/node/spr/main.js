// document process 进程
const playerAction = process.argv[2];
console.log(playerAction)

if (playerAction != 'rock' && playerAction != 'paper' && playerAction != 'scissor') {
    throw new Error('你违背了游戏规则，请再次出')
} else {
    let computerAction;
    let arr = ['rock', 'paper', 'scissor'];
    let random = Math.random() * 3;


    if (random < 1) {
        computerAction = 'rock';
        console.log('电脑出了石头');

    } else if (random > 2) {
        computerAction = 'paper';
        console.log('电脑出了布');
    } else {
        computerAction = 'scissor';
        console.log('电脑出了剪刀');
    }

    if (computerAction === playerAction) {
        console.log('平局');
    } else if (computerAction === 'scissor' && playerAction === 'paper' || computerAction === 'paper' && playerAction === 'rock' || computerAction === 'rock' && playerAction === 'scissor') {
        console.log('你输了');
    } else {
        console.log('你赢了');
    }


}