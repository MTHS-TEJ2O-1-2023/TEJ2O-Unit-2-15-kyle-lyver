/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Kyle Lyver
 * Created on: Nov 2023
 * This program moves a pixel around the microbit
*/

// variables
let ledCoordinate: number = 0
let loopCounter: number = 0
let sprite: game.LedSprite = null

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// when button A is pressed, move sprite around edge
input.onButtonPressed(Button.A, function () {
  // prep screen
  basic.clearScreen()
  sprite = game.createSprite(0, 0)

  loopCounter = 0
  while (loopCounter <= 3) {
    // reset ledCoordinate
    ledCoordinate = 0
    while (ledCoordinate <= 4) {
      // move ledCoordinate
      basic.pause(500)
      sprite.move(1)
      ledCoordinate++
    }
  // tuning 90 degrees
  sprite.turn(Direction.Right, 90)
    loopCounter++
    }
  // clean up
  sprite.delete()
  basic.pause(500)
  basic.showIcon(IconNames.Happy)
})
