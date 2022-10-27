export class MarsRover {
  public location: {
    x: number,
    y: number
  };
  public direction: "e" | "w" | "s" | "n";
  public grid: {
    x: number,
    y: number
  };;

  constructor(location: [number, number], direction: "e" | "w" | "s" | "n", grid: [number, number]) {
    this.location = {
      x: location[0],
      y: location[1]
    };
    this.direction = direction;
    this.grid = {
      x: grid[0],
      y: grid[1]
    };
  }

  move = (commands: string): void => {
    commands.split("").forEach(char => {
      switch(char) {
        case "f":
          this.moveForward();
          break;
        case "b":
          this.moveBackward();
          break;
        case "l":
          this.turnLeft();
          break;
        case "r":
          this.turnRight();
      }
    })
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
    this.wrapGrid()
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
    this.wrapGrid()
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

  wrapGrid = (): void => {
    this.wrapXAxis();
    this.wrapYAxis();
  }

  wrapXAxis = (): void => {
    if(this.location.x > this.grid.x) {
      this.location.x = 0
    } else if(this.location.x < 0) {
      this.location.x = this.grid.x
    }
  }

  wrapYAxis = (): void => {
    if (this.location.y > this.grid.y) {
      this.location.y = 0
    } else if (this.location.y < 0) {
      this.location.y = this.grid.y
    }
  }
}

