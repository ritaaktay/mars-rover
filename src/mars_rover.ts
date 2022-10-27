export class MarsRover {
  public location: {
    x: number,
    y: number
  };
  public direction: "e" | "w" | "s" | "n";
  public grid: [number, number];

  constructor(location: [number, number], direction: "e" | "w" | "s" | "n", grid: [number, number]) {
    this.location = {
      x: location[0],
      y: location[1]
    };
    this.direction = direction;
    this.grid = grid;
  }

  move = (commands: string): void => {
    if (commands == "f") {
      if (this.direction == "e") {
        this.location.x += 1
      } else if (this.direction == "w") {
        this.location.x -= 1
      } else if (this.direction == "n") {
        this.location.y -= 1
      } else if (this.direction == "s") {
        this.location.y += 1
      }
    }
    if (commands == "b") this.location.x -= 1
    if (commands == "l") this.turnLeft()
    if (commands == "r") this.turnRight()
  }

  turnLeft = (): void => {
    switch(this.direction) {
      case "e":
        this.direction = "n";
        break;
      case "n":
        this.direction = "w";
        break;
      case "w":
        this.direction = "s";
        break;
      case "s":
        this.direction = "e"
        break;
    }
  }

  turnRight = (): void => {
    switch(this.direction) {
      case "e":
        this.direction = "s";
        break;
      case "s":
        this.direction = "w"
        break;
      case "w":
        this.direction = "n"
        break;
      case "n":
        this.direction = "e"
        break;
    }
  }

  getLocation = (): [number, number] => {
    return [this.location.x, this.location.y]
  }
}

