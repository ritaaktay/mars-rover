export class MarsRover {
  public location: {
    x: number,
    y: number
  };
  public grid: {
    x: number,
    y: number
  };
  public direction: string;

  constructor(location: [number, number], direction: string, grid: [number, number]) {
    this.location = {
      x: location[0],
      y: location[1]
    };
    this.grid = {
      x: grid[0],
      y: grid[1]
    };
    this.direction = direction;
  }

  move = (commands: string): void => {
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
    // const commandMap: Map<K, V> = new Map()
    // commandMap.set("f", this.moveForward)
    // commandMap.set("b", this.moveBackward)
    // commandMap.set("l", this.turnLeft)
    // commandMap.set("r", this.turnRight)
    commands.split("").forEach(char => {
      // commandMap.get(char)()
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
    const directionsLeft: string[] = ["e", "n", "w", "s", "e"]
    const indexToTheLeft: number = directionsLeft.indexOf(this.direction) + 1
    const newDirection: string = directionsLeft[indexToTheLeft]
    this.direction = newDirection
  }

  turnRight = (): void => {
    const directionsRight: string[] = ["e", "s", "w", "n", "e"]
    const indexToTheRight: number = directionsRight.indexOf(this.direction) + 1
    const newDirection: string = directionsRight[indexToTheRight]
    this.direction = newDirection
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

