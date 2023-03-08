input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showIcon(IconNames.SmallHeart)
})
for (let index = 0; index < 3; index++) {
    basic.showString("ILY")
}
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    basic.showLeds(`
        # # # # #
        . . # # .
        . . # # #
        # . # . #
        . # . # #
        `)
})
