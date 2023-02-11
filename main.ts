input.onButtonPressed(Button.A, function () {
    radio.sendString("I love LYC!")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("ICT is fun!")
})
radio.setGroup(123)
