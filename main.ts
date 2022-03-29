input.onButtonPressed(Button.A, function () {
    Number2 += 1
    basic.showNumber(Number2)
})
input.onButtonPressed(Button.AB, function () {
    A = Number2 + 9
    B = Number2 - 9
    C = Number2 * 2
    D = Number2 / 3
    E = Number2 % 4
    F = Math.sqrt(Number2)
    G = Math.round(3 / 4)
    H = Math.ceil(3 / 9)
    I = Number2 ** 3
    J = randint(0, 100)
})
input.onButtonPressed(Button.B, function () {
    Number2 += -1
    basic.showNumber(Number2)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("A - B")
    basic.showNumber(A - B)
    basic.showString("C")
    basic.showNumber(C)
    basic.showString("D")
    basic.showNumber(D)
    basic.showString("E")
    basic.showNumber(E)
    basic.showString("F")
    basic.showNumber(F)
    basic.showString("G")
    basic.showNumber(G)
    basic.showString("H")
    basic.showNumber(H)
    basic.showString("I")
    basic.showNumber(I)
    basic.showString("J")
    basic.showNumber(J)
})
input.onGesture(Gesture.LogoDown, function () {
    Number2 = 0
    A = 0
    B = 0
    C = 0
    D = 0
    E = 0
    F = 0
    G = 0
    H = 0
    I = 0
    J = 0
    basic.showNumber(Number2)
})
let J = 0
let I = 0
let H = 0
let G = 0
let F = 0
let E = 0
let D = 0
let C = 0
let B = 0
let A = 0
let Number2 = 0
basic.showIcon(IconNames.Yes)
Number2 = 0
