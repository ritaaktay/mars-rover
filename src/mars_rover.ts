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
    //move forward as many times as there are fs in the commands string
    if (commands == "f") this.moveForward()
    if (commands == "ff") {
      this.moveForward()
      this.moveForward()
    }
    if (commands == "fff") {
      this.moveForward()
      this.moveForward()
      this.moveForward()
    }
    if (commands == "b") this.moveBackward()
    if (commands == "l") this.turnLeft()
    if (commands == "r") this.turnRight()
  }

  moveBackward = (): void => {
    switch(this.direction) {
      case "e":
        this.location.x -= 1;
        break;
      case "w":
        this.location.x += 1;
        break;
      case "s":
        this.location.y -= 1;
        break;
      case "n":
        this.location.y += 1;
    }
  }

  moveForward = (): void => {
    switch(this.direction) {
      case "e":
        this.location.x += 1;
        break;
      case "w":
        this.location.x -= 1
        break;
      case "n":
        this.location.y -= 1
        break;  
      case "s":
        this.location.y += 1
    }
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
    }
  }

  getLocation = (): [number, number] => {
    return [this.location.x, this.location.y]
  }
}

