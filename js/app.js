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
        this.rollCount = 0
        this.totalRolls = 0

        this.cubes = {
            red: [],
            blue: [],
            green: [],
            purple: [],
            gold: []
        }

        this.bestScores = [
            {
                tradeValue: 2,
                score: 0,
                avg: 0
            },
            {
                tradeValue: 3,
                score: 0,
                avg: 0
            },
            {
                tradeValue: 4,
                score: 0,
                avg: 0
            },
            {
                tradeValue: 5,
                score: 0,
                avg: 0
            },
            {
                tradeValue: 6,
                score: 0,
                avg: 0
            }
        ]
    }

    init() {
        this.setTradeValue()
        this.tradeRed()
        this.tradeBlue()
        this.tradeGreen()
        this.tradePurple()
        // this.handleTradeBtns()

        // this.getScores()

    }

    setTradeValue() {
        const gameBtn = this.gameBtn

        gameBtn.addEventListener('click', ()=> {
            // console.log('click')
            this.tradeValue = Math.floor(Math.random() * (6 - 2 + 1) + 2)
            this.tradingValue.innerText = this.tradeValue
            gameBtn.classList.add('disabled')
            gameBtn.innerText = 'Trade Value Set'
            // document.getElementById('needToWin').innerText = this.tradeValue ** 4

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
                this.rollCount += roll
                this.totalRolls++
                document.getElementById('rollTally').innerText = this.rollCount

                document.getElementById('totalRolls').innerText = this.totalRolls
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
        // console.log(tradeValue, this.cubes[prevColor])
        if (tradeValue <= this.cubes[prevColor].length) {
            let cubesToDelete = tradeValue
            while (cubesToDelete > 0) {
                // console.log(cubesToDelete)
                this.cubes[prevColor][this.cubes[prevColor].length - 1].classList.add('d-none')
                this.cubes[prevColor].pop()
                cubesToDelete--
            }
            this.buildCube(nextColor)
            // console.log(this.cubes)
        }
    }

    tradeRed() {
        const redTrade = document.getElementById('redTrade')

        redTrade.addEventListener('click', ()=> {
            this.tradeCubes(this.tradeValue, 'red', 'blue')
        })
    }

    tradeBlue() {
        const blueTrade = document.getElementById('blueTrade')

        blueTrade.addEventListener('click', ()=> {
            this.tradeCubes(this.tradeValue, 'blue', 'green')
        })
    }

    tradeGreen() {
        const greenTrade = document.getElementById('greenTrade')

        greenTrade.addEventListener('click', ()=> {
            this.tradeCubes(this.tradeValue, 'green', 'purple')
        })
    }

    tradePurple() {
        const greenTrade = document.getElementById('purpleTrade')

        purpleTrade.addEventListener('click', ()=> {
            this.tradeCubes(this.tradeValue, 'purple', 'gold')
            this.winGame()
        })
    }

    // handleTradeBtns() {
    //     const tradeBtns = document.querySelectorAll('.trade-btn')

    //     console.log(tradeBtns)

    //     tradeBtns.forEach(button => {
    //         button.addEventListener('click', ()=> {
    //             console.log('click')
    //             let prev;

    //             switch (prev) {
    //                 case 'red':
    //                     this.tradeCubes(this.tradeValue, prev, 'blue')
    //                     break
    //                 case 'blue': 
    //                     this.tradeCubes(this.tradeValue, 'blue', 'green')
    //                     break 
    //                 case 'green':
    //                     this.tradeCubes(this.tradeValue, 'green', 'purple')
    //                     break
    //                 case 'purple':
    //                     this.tradeCubes(this.tradeValue, 'purple', 'gold')
    //                     this.winGame()
    //                     break
    //                 default: 
    //                     console.log('clicked')
    //                     break
    //             }
    //         })
    //     })
    // }

    winGame() {
        if (this.cubes.gold.length == 1) {
            document.getElementById('h1').innerText = 'You Win!'
        }

        // let score = this.totalRolls 
        this.getScores(this.tradeValue, this.totalRolls)

    }

    getScores(value, rolls) {
        
        this.bestScores.forEach(obj => {
            // console.log(obj.tradeValue)
            if (obj.tradeValue == value) {
                obj.score = rolls
                obj.avg = this.rollCount / this.totalRolls
                console.log(obj)

            }
        })
    }

}

const action = new Game()
action.init()