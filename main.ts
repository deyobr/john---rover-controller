gamerbit.onEvent(GamerBitPin.P12, GamerBitEvent.Down, function () {
    radio.sendString("stop")
})
gamerbit.onEvent(GamerBitPin.P16, GamerBitEvent.Down, function () {
    radio.sendString("spin")
})
gamerbit.onEvent(GamerBitPin.P1, GamerBitEvent.Down, function () {
    radio.sendString("left")
})
gamerbit.onEvent(GamerBitPin.P8, GamerBitEvent.Down, function () {
    radio.sendString("back")
})
gamerbit.onEvent(GamerBitPin.P2, GamerBitEvent.Down, function () {
    radio.sendString("right")
})
gamerbit.onEvent(GamerBitPin.P0, GamerBitEvent.Down, function () {
    radio.raiseEvent(
    EventBusSource.MICROBIT_ID_IO_P0,
    EventBusValue.MICROBIT_BUTTON_EVT_DOWN
    )
})
basic.forever(function () {
    radio.setGroup(1)
})
