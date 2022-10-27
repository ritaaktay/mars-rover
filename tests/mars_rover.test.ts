import { MarsRover } from "../src/mars_rover"

describe("Mars Rover", () => {
  it("has a location", () => {
    const rover = new MarsRover([0,0], "e", [50,50])
    expect(rover.getLocation()).toEqual([0,0])
  })

  it("has a direction", () => {
    const rover = new MarsRover([0,0], "e", [50,50])
    expect(rover.direction).toEqual("e")
  })

  it("has a grid", () => {
    const rover = new MarsRover([0,0], "e", [50,50])
    expect(rover.grid).toEqual([50,50])
  })

  it("con move forward", () => {
    const rover = new MarsRover([0,0], "e", [50,50])
    rover.move("f")
    expect(rover.getLocation()).toEqual([1,0])
  })

  it("can move backward", () => {
    const rover = new MarsRover([1,0], "e", [50,50])
    rover.move("b")
    expect(rover.getLocation()).toEqual([0,0])
  })

  it("can turn left", () => {
    const rover = new MarsRover([1,0], "e", [50,50])
    rover.move("l")
    expect(rover.direction).toEqual("n")
  })

  it("can turn right", () => {
    const rover = new MarsRover([1,0], "e", [50,50])
    rover.move("r")
    expect(rover.direction).toEqual("s")
  })

  it("con move forward", () => {
    const rover = new MarsRover([1,0], "e", [50,50])
    rover.move("f")
    expect(rover.getLocation()).toEqual([2,0])
  })


  it("can move backward", () => {
    const rover = new MarsRover([2,0], "e", [50,50])
    rover.move("b")
    expect(rover.getLocation()).toEqual([1,0])
  })
})