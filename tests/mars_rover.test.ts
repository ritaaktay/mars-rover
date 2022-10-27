import { MarsRover } from "../src/mars_rover"

describe("Mars Rover", () => {
  describe("initializes", () => {
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
  })

  describe("moves forward", () => {
    it("con move forward facing east", () => {
      const rover = new MarsRover([0,0], "e", [50,50])
      rover.move("f")
      expect(rover.getLocation()).toEqual([1,0])
    })

    it("con move forward facing east", () => {
      const rover = new MarsRover([1,0], "e", [50,50])
      rover.move("f")
      expect(rover.getLocation()).toEqual([2,0])
    })

    it("con move forward facing west", () => {
      const rover = new MarsRover([1,0], "w", [50,50])
      rover.move("f")
      expect(rover.getLocation()).toEqual([0,0])
    })

    it("con move forward facing north", () => {
      const rover = new MarsRover([0,1], "n", [50,50])
      rover.move("f")
      expect(rover.getLocation()).toEqual([0,0])
    })

    it("con move forward facing south", () => {
      const rover = new MarsRover([0,1], "s", [50,50])
      rover.move("f")
      expect(rover.getLocation()).toEqual([0,2])
    })
  })

  describe("moves backward", () => {
    it("can move backward facing east", () => {
      const rover = new MarsRover([1,0], "e", [50,50])
      rover.move("b")
      expect(rover.getLocation()).toEqual([0,0])
    })

    it("can move backward facing east", () => {
      const rover = new MarsRover([2,0], "e", [50,50])
      rover.move("b")
      expect(rover.getLocation()).toEqual([1,0])
    })
  })

  describe("turns left", () => {
    it("can turn left facing east", () => {
      const rover = new MarsRover([1,0], "e", [50,50])
      rover.move("l")
      expect(rover.direction).toEqual("n")
    })

    it("can turn left facing north", () => {
      const rover = new MarsRover([1,0], "n", [50,50])
      rover.move("l")
      expect(rover.direction).toEqual("w")
    })

    it("can turn left facing west", () => {
      const rover = new MarsRover([1,0], "w", [50,50])
      rover.move("l")
      expect(rover.direction).toEqual("s")
    })

    it("can turn left facing south", () => {
      const rover = new MarsRover([1,0], "s", [50,50])
      rover.move("l")
      expect(rover.direction).toEqual("e")
    })
  })

  describe("turns right", () => {
    it("can turn right facing east", () => {
      const rover = new MarsRover([1,0], "e", [50,50])
      rover.move("r")
      expect(rover.direction).toEqual("s")
    })

    it("can turn right facing south", () => {
      const rover = new MarsRover([1,0], "s", [50,50])
      rover.move("r")
      expect(rover.direction).toEqual("w")
    })

    it("can turn right facing west", () => {
      const rover = new MarsRover([1,0], "w", [50,50])
      rover.move("r")
      expect(rover.direction).toEqual("n")
    })
  
    it("can turn right facing north", () => {
      const rover = new MarsRover([1,0], "n", [50,50])
      rover.move("r")
      expect(rover.direction).toEqual("e")
    })
  })
})