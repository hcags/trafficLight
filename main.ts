input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    pins.analogWritePin(AnalogPin.C4, 0)
    pins.analogWritePin(AnalogPin.C5, 1023)
    basic.pause(1000)
    pins.analogWritePin(AnalogPin.C9, 1023)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.C8, 0)
    pins.digitalWritePin(DigitalPin.C9, 0)
    pins.digitalWritePin(DigitalPin.C10, 1)
    pins.analogWritePin(AnalogPin.C8, 0)
    pins.analogWritePin(AnalogPin.C9, 0)
    pins.analogWritePin(AnalogPin.C10, 1023)
})
pins.analogWritePin(AnalogPin.C4, 1023)
pins.analogWritePin(AnalogPin.C5, 0)
pins.analogWritePin(AnalogPin.C8, 1023)
pins.analogWritePin(AnalogPin.C9, 0)
pins.analogWritePin(AnalogPin.C10, 0)
