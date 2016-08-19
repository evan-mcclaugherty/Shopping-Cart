class DiceService {
    getRandom() {
        return Math.floor(Math.random() * 6) + 1;
    }
}

app.service('diceService', DiceService);
