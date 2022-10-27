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
      if(this.direction == "e") {
        this.direction = "n"
      }else if(this.direction == "n") {
        this.direction = "w"
      }else if(this.direction == "w") {
        this.direction = "s"
      }else if(this.direction == "s") {
        this.direction = "e"
      }
    }
    if (commands == "r") this.direction = "s"
  }

  getLocation = (): [number, number] => {
    return [this.location.x, this.location.y]
  }
}

