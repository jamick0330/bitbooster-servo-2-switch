basic.showNumber(2)
pins.setPull(DigitalPin.P3, PinPullMode.PullUp)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P3) == 0) {
        pins.servoWritePin(AnalogPin.P13, 25)
    } else {
        pins.servoWritePin(AnalogPin.P13, 90)
        pins.digitalWritePin(DigitalPin.P13, 0)
    }
})
