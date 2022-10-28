export class MarsRover {
  public location: {
    x: number;
    y: number;
  };
  public grid: {
    x: number;
    y: number;
  };
  public direction: direction;
  commands: command[];

  constructor(
    location: [number, number],
    direction: direction,
    grid: [number, number]
  ) {
    this.location = {
      x: location[0],
      y: location[1],
    };
    this.grid = {
      x: grid[0],
      y: grid[1],
    };
    this.direction = direction;
    this.commands = ["f", "b", "r", "l"];
  }

  getLocation = (): [number, number] => {
    return [this.location.x, this.location.y];
  };

  move = (commands: string): void => {
    commands.split("").forEach((char) => {
      if (this.#isCommand(char)) this.#moveOnce(char);
    });
  };

  #isCommand = (char: any): char is command => {
    return true;
  };

  #moveOnce = (command: command): void => {
    const commandMap = new Map<command, () => void>();
    commandMap.set("f", this.#moveForward);
    commandMap.set("b", this.#moveBackward);
    commandMap.set("l", this.#turnLeft);
    commandMap.set("r", this.#turnRight);
    const moveFunction: (() => void) | undefined = commandMap.get(command);
    if (moveFunction != undefined) moveFunction();
  };

  #moveBackward = (): void => {
    switch (this.direction) {
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
    this.#wrapGrid();
  };

  #moveForward = (): void => {
    switch (this.direction) {
      case "e":
        this.location.x += 1;
        break;
      case "w":
        this.location.x -= 1;
        break;
      case "n":
        this.location.y -= 1;
        break;
      case "s":
        this.location.y += 1;
    }
    this.#wrapGrid();
  };

  #turnLeft = (): void => {
    const directionsLeft: direction[] = ["e", "n", "w", "s", "e"];
    const indexToTheLeft: number = directionsLeft.indexOf(this.direction) + 1;
    const newDirection: direction = directionsLeft[indexToTheLeft];
    this.direction = newDirection;
  };

  #turnRight = (): void => {
    const directionsRight: direction[] = ["e", "s", "w", "n", "e"];
    const indexToTheRight: number = directionsRight.indexOf(this.direction) + 1;
    const newDirection: direction = directionsRight[indexToTheRight];
    this.direction = newDirection;
  };

  #wrapGrid = (): void => {
    this.#wrapXAxis();
    this.#wrapYAxis();
  };

  #wrapXAxis = (): void => {
    if (this.location.x > this.grid.x) {
      this.location.x = 0;
    } else if (this.location.x < 0) {
      this.location.x = this.grid.x;
    }
  };

  #wrapYAxis = (): void => {
    if (this.location.y > this.grid.y) {
      this.location.y = 0;
    } else if (this.location.y < 0) {
      this.location.y = this.grid.y;
    }
  };
}
