import { rover } from "../src/mars_rover"

describe("Mars Rover", () => {
  it("has a location", () => {
    expect(rover.location).not.toBeUndefined()
  })

  it("has a direction", () => {
    expect(rover.direction).not.toBeUndefined()
  })

  it("has a grid", () => {
    expect(rover.grid).not.toBeUndefined()
  })
})