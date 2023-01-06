class Game {
    constructor() {
        this.gameBtn = document.getElementById('gameBtn')
        this.rollBtn = document.getElementById('rollBtn')
        this.redCubes = document.getElementById('redCubes')
        this.blueCubes = document.getElementById('blueCubes')
        this.greenCubes = document.getElementById('greenCubes')
        this.purpleCubes = document.getElementById('purpleCubes')
        this.goldCube = document.getElementById('goldCube')
        this.tradingValue = document.getElementById('tradingValue')
        this.dieRoll = document.getElementById('dieRoll')

        this.tradeValue

        /**
         * this.cubes = {
         *  red: 0,
         *  blue: 0,
         *  green: 0,
         *  purple: 0,
         *  gold: 0
         * }
         */

        this.cubes = {
            red: [],
            blue: [],
            green: [],
            purple: [],
            gold: []
        }
    }

    init() {
        this.setTradeValue()
        this.tradeRed()

    }

    setTradeValue() {
        const gameBtn = this.gameBtn

        gameBtn.addEventListener('click', ()=> {
            // console.log('click')
            this.tradeValue = Math.floor(Math.random() * (6 - 2 + 1) + 2)
            this.tradingValue.innerText = this.tradeValue
            gameBtn.classList.add('disabled')

            this.rollDie()
            
        })
    }

    rollDie() {
        const rollBtn = this.rollBtn
        const dieRoll = this.dieRoll

        if (this.tradeValue > 0) {
            rollBtn.addEventListener('click', ()=> {
                let roll = Math.ceil(Math.random() * 6)
                dieRoll.innerText = roll
                this.buildRedCubes(roll)
                // this.cubes.red+= roll
                // console.log(this.cubes)
            })
        }
    }

    buildRedCubes(cubes) {
        for (let i = 0; i < cubes; i++) {
            
            const redCube = document.createElement('div')
            redCube.classList.add('cube', 'red')
            this.cubes.red.push(redCube)
            this.redCubes.append(redCube)
        }
    }

    buildCube(color) {
        const cube = document.createElement('div')
        cube.classList.add('cube', color)
        
        switch (color) {
            case 'blue': 
                this.cubes.blue.push(cube)
                this.blueCubes.append(cube)
                break
            case 'green':
                this.cubes.green.push(cube)
                this.greenCubes.append(cube)
                break
            case 'purple':
                this.cubes.purple.push(cube)
                this.purpleCubes.append(cube)
                break
            case 'gold':
                this.cubes.gold.push(cube)
                this.goldCube.append(cube)
                break
            default:
                break
        }
    }

    tradeCubes(tradeValue, prevColor, nextColor) {
        console.log(tradeValue, this.cubes[prevColor])
        if (tradeValue <= this.cubes[prevColor].length) {
            // this.cubes[prevColor] = this.cubes[prevColor] - tradeValue
            // this.cubes[nextColor]+= 1
            // this.buildCube(nextColor)
            // console.log(this.cubes)
            console.log(this.cubes[prevColor])
            for (let i = 0; i < tradeValue; i++) {
                this.cubes[prevColor][i].addClassList('d-none')
                this.cubes[prevColor].pop()
            }
            this.buildCube(nextColor)
            console.log(this.cubes)
        }
    }

    tradeRed() {
        const redTrade = document.getElementById('redTrade')

        redTrade.addEventListener('click', ()=> {
            // console.log('click')
            // console.log(this.cubes.red)
            this.tradeCubes(this.tradeValue, 'red', 'blue')
            // for (let i = 0; i < this.tradeValue; i++) {

            // }
        })
    }


}

const action = new Game()
action.init()