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
      expect(rover.grid).toEqual({
        x: 50, 
        y: 50
      })
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

    it("can move backward facing west", () => {
      const rover = new MarsRover([2,0], "w", [50,50])
      rover.move("b")
      expect(rover.getLocation()).toEqual([3,0])
    })

    it("can move backward facing south", () => {
      const rover = new MarsRover([2,1], "s", [50,50])
      rover.move("b")
      expect(rover.getLocation()).toEqual([2,0])
    })

    it("can move backward facing north", () => {
      const rover = new MarsRover([2,1], "n", [50,50])
      rover.move("b")
      expect(rover.getLocation()).toEqual([2,2])
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

  describe("receives mutliple commands of the same kind", () => {
    it("can move forwards twice facing east", () => {
      const rover = new MarsRover([0,0], "e", [50,50])
      rover.move("ff")
      expect(rover.getLocation()).toEqual([2,0])
    })

    it("can move forwards thrice facing east", () => {
      const rover = new MarsRover([0,0], "e", [50,50])
      rover.move("fff")
      expect(rover.getLocation()).toEqual([3,0])
    })

    it("can move backwards twice facing east", () => {
      const rover = new MarsRover([2,0], "e", [50,50])
      rover.move("bb")
      expect(rover.getLocation()).toEqual([0,0])
    })

    it("can move backwards thrice facing east", () => {
      const rover = new MarsRover([3,0], "e", [50,50])
      rover.move("bbb")
      expect(rover.getLocation()).toEqual([0,0])
    })

    it("can turn left twice facing east", () => {
      const rover = new MarsRover([2,0], "e", [50,50])
      rover.move("ll")
      expect(rover.direction).toEqual("w")
    })

    it("can turn left thrice facing east", () => {
      const rover = new MarsRover([2,0], "e", [50,50])
      rover.move("lll")
      expect(rover.direction).toEqual("s")
    })

    it("can turn right twice facing east", () => {
      const rover = new MarsRover([2,0], "e", [50,50])
      rover.move("rr")
      expect(rover.direction).toEqual("w")
    })

    it("can turn right thrice facing east", () => {
      const rover = new MarsRover([2,0], "e", [50,50])
      rover.move("rrr")
      expect(rover.direction).toEqual("n")
    })
  }) 

  describe("receives multiple different commands", () => {
    it("moves twice forward facing south, turns left, and moves twice forward again", () => {
      const rover = new MarsRover([0,0], "s", [100,100])
      rover.move("fflff")
      expect(rover.getLocation()).toEqual([2,2])
    })
  })

  describe("it wraps from one end of the grid to another", () => {
    it("will continue form 0 index if x index exceeds grid during movement forward facing east", () => {
      const rover = new MarsRover([10,0], "e", [10,10])
      rover.move("f")
      expect(rover.getLocation()).toEqual([0,0])
    })

    it("will continue form 0 index if x index exceeds grid during movement backward facing west", () => {
      const rover = new MarsRover([10,0], "w", [10,10])
      rover.move("b")
      expect(rover.getLocation()).toEqual([0,0])
    })

    it("will continue form last index if x index exceeds grid during movement forward facing west", () => {
      const rover = new MarsRover([0,0], "w", [10,10])
      rover.move("f")
      expect(rover.getLocation()).toEqual([10,0])
    })

    it("will continue form last index if x index exceeds grid during movement backward facing east", () => {
      const rover = new MarsRover([0,0], "e", [10,10])
      rover.move("b")
      expect(rover.getLocation()).toEqual([10,0])
    })

    it("will continue form 0 index if y index exceeds grid during movement forward facing south", () => {
      const rover = new MarsRover([0,10], "s", [10,10])
      rover.move("f")
      expect(rover.getLocation()).toEqual([0,0])
    })

    it("will continue form 0 index if y index exceeds grid during movement backward facing north", () => {
      const rover = new MarsRover([0,10], "n", [10,10])
      rover.move("b")
      expect(rover.getLocation()).toEqual([0,0])
    })
  })
})