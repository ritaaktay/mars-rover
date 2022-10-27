import { decide } from '../src/decide'

describe("decide", () => {
  it("decides that rock wins over scissors", () => {
    const decision = decide("rock", "scissors")
    expect(decision).toEqual("rock")
  })

  it("decides that rock wins over scissors", () => {
    const decision = decide("scissors", "rock")
    expect(decision).toEqual("rock")
  })

  it("decides that scissors wins over paper", () => {
    const decision = decide("scissors", "paper")
    expect(decision).toEqual("scissors")
  })

  it("decides that scissors wins over paper", () => {
    const decision = decide("paper", "scissors")
    expect(decision).toEqual("scissors")
  })

  it("decides that paper wins over rock", () => {
    const decision = decide("paper", "rock")
    expect(decision).toEqual("paper")
  })

  it("decides that paper wins over rock", () => {
    const decision = decide("rock", "paper")
    expect(decision).toEqual("paper")
  })

  it("decides that rock and rock is a draw", () => {
    const decision = decide("rock", "rock")
    expect(decision).toEqual("draw")
  })

  it("decides that paper and paper is a draw", () => {
    const decision = decide("paper", "paper")
    expect(decision).toEqual("draw")
  })
})