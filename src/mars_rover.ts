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
    if (commands == "f") this.location.x += 1
    if (commands == "b") this.location.x -= 1
    if (commands == "l") {
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
    if (commands == "r") {
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
  }

  getLocation = (): [number, number] => {
    return [this.location.x, this.location.y]
  }
}

