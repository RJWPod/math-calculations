def on_button_pressed_a():
    global Number2
    Number2 += 1
    basic.show_number(Number2)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global A, B, C, D, E, F, G, H, I, J
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
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global Number2
    Number2 += -1
    basic.show_number(Number2)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_shake():
    basic.show_string("A - B")
    basic.show_number(A - B)
    basic.show_string("C")
    basic.show_number(C)
    basic.show_string("D")
    basic.show_number(D)
    basic.show_string("E")
    basic.show_number(E)
    basic.show_string("F")
    basic.show_number(F)
    basic.show_string("G")
    basic.show_number(G)
    basic.show_string("H")
    basic.show_number(H)
    basic.show_string("I")
    basic.show_number(I)
    basic.show_string("J")
    basic.show_number(J)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

J = 0
I = 0
H = 0
G = 0
F = 0
E = 0
D = 0
C = 0
B = 0
A = 0
Number2 = 0
Number2 = 0