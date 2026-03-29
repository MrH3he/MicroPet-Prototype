input.onButtonPressed(Button.A, function () {
    basic.showNumber(health)
})
input.onButtonPressed(Button.B, function () {
    health += 10
})
let health = 0
health = 100
loops.everyInterval(10000, function () {
    health += -10
})
basic.forever(function () {
    if (health < 100 && health > 50) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
    if (health < 50 && health > 30) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            . . . . .
            `)
    }
    if (health > 30 && health < 50) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    }
})
