input.onButtonPressed(Button.A, function () {
    mode = 1
    highest = 0
})
edubitIrBit.onIrSensorEvent(IrEventType.Rise, function () {
    mode = 2
})
let loudness = 0
let highest = 0
let mode = 0
mode = 0
basic.forever(function () {
    led.plotBarGraph(
    edubitSoundBit.readSoundSensor(),
    1023
    )
})
basic.forever(function () {
    if (mode == 1) {
        loudness = edubitSoundBit.readSoundSensor()
        if (loudness > highest) {
            highest = loudness
            led.plotBarGraph(
            loudness,
            1023
            )
        }
    } else if (mode == 2) {
        basic.showNumber(highest)
    } else {
        basic.showIcon(IconNames.Heart)
    }
})
