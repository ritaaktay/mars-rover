export const decide = (playerOneChoice: string, playerTwoChoice: string): string => {
  if (playerOneChoice ==  playerTwoChoice) return "draw"
  if ([playerOneChoice, playerTwoChoice].includes("rock")) {
    if ([playerOneChoice, playerTwoChoice].includes("paper")) return "paper"
    return "rock"
  }
  return "scissors"
}
