input.onButtonPressed(Button.A, function () {
    Number_1 += 1
    basic.showNumber(Number_1)
})
input.onButtonPressed(Button.AB, function () {
    Number_2 = Number_1
})
input.onButtonPressed(Button.B, function () {
    Number_1 += -1
    basic.showNumber(Number_1)
})
let Number_2 = 0
let Number_1 = 0
Number_1 = 0
Number_2 = 0
basic.forever(function () {
	
})
