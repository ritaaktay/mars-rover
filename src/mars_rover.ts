import { match } from "ts-pattern";

export class MarsRover {
  private location: {
    x: number;
    y: number;
  };
  public readonly grid: {
    x: number;
    y: number;
  };
  public direction: direction;

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
    match(command)
      .with("f", "b", () => this.#moveForwardOrBackward(command))
      .with("r", "l", () => this.#turnRightOrLeft(command))
      .run();
  };

  #moveForwardOrBackward = (command: command): void => {
    this.#makeMove(command + this.direction);
    this.#wrapGrid();
  };

  #moveBackward = (): void => {
    const moveCommand: string = "b" + this.direction;
    this.#makeMove(moveCommand);
    this.#wrapGrid();
  };

  #makeMove = (commands: string): void => {
    match(commands)
      .with("fe", "bw", () => (this.location.x += 1))
      .with("fw", "be", () => (this.location.x -= 1))
      .with("fs", "bn", () => (this.location.y += 1))
      .with("fn", "bs", () => (this.location.y -= 1))
      .run();
  };

  #turnLeft = (): void => {
    const directionsLeft: direction[] = ["e", "n", "w", "s", "e"];
    const indexToTheLeft: number = directionsLeft.indexOf(this.direction) + 1;
    const newDirection: direction = directionsLeft[indexToTheLeft];
    this.direction = newDirection;
  };

  #turnRightOrLeft = (command: command): void => {
    const directions: direction[] = ["e", "s", "w", "n", "e"];
    let index = directions.indexOf(this.direction) + 1;
    if (command == "l") {
      index = directions.lastIndexOf(this.direction) - 1;
    }
    this.direction = directions[index];
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
