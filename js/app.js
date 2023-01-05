class Game {
    constructor() {
        this.gameBtn = document.getElementById('gameBtn')
        this.tradeBtn = document.getElementById('tradeBtn')
        this.redCubes = document.getElementById('redCubes')
        this.blueCubes = document.getElementById('blueCubes')
        this.greenCubes = document.getElementById('greenCubes')
        this.purpleCubes = document.getElementById('purpleCubes')
        this.goldCube = document.getElementById('goldCube')
        this.tradingValue = document.getElementById('tradingValue')
        this.dieRoll = document.getElementById('dieRoll')

        this.cubes = {
            red: 0,
            blue: 0,
            green: 0,
            purple: 0,
            gold: 0
        }
    }

    init() {
        this.setTradeValue()
    }

    setTradeValue() {
        const gameBtn = this.gameBtn
        console.log(gameBtn)
        gameBtn.addEventListener('click', ()=> {
            // console.log('click')
            const tradeValue = Math.ceil(Math.random() * 6)
            this.tradingValue.innerText = tradeValue
        })
    }
}

const action = new Game()
action.init()