input.onButtonPressed(Button.A, function () {
    숫자 += 1
    dan = 2 * 숫자
})
input.onButtonPressed(Button.B, function () {
    dan = 2
})
let 숫자 = 0
let dan = 0
dan = 2
숫자 = 0
basic.forever(function () {
    basic.showNumber(dan)
})
