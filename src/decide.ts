export const decide = (choiceOne: string, choiceTwo: string): string => {
  if(choiceOne == "rock" && choiceTwo == "rock") return "draw"
  if (choiceOne == "paper" && choiceTwo == "paper") return "draw"
  if ([choiceOne, choiceTwo].includes("rock")) {
    if ([choiceOne, choiceTwo].includes("paper")) return "paper"
    return "rock"
  }
  return "scissors"
}
