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
  private commands: command[];
  private moveMap: Map<string, () => void>;

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
    this.moveMap = this.#createMoveMap();
  }

  getLocation = (): [number, number] => {
    return [this.location.x, this.location.y];
  };

  move = (commands: string): void => {
    commands.split("").forEach((char) => {
      if (this.#isCommand(char)) this.#moveOnce(char);
    });
  };

  #createMoveMap = (): Map<string, () => void> => {
    const moveMap = new Map<string, () => void>();
    moveMap.set("fe", () => (this.location.x += 1));
    moveMap.set("fw", () => (this.location.x -= 1));
    moveMap.set("fs", () => (this.location.y += 1));
    moveMap.set("fn", () => (this.location.y -= 1));
    moveMap.set("bw", () => (this.location.x += 1));
    moveMap.set("be", () => (this.location.x -= 1));
    moveMap.set("bn", () => (this.location.y += 1));
    moveMap.set("bs", () => (this.location.y -= 1));
    return moveMap;
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

  #moveForward = (): void => {
    const moveKey: string = "f" + this.direction;
    const moveAction: (() => void) | undefined = this.moveMap.get(moveKey);
    if (moveAction != undefined) moveAction();
    this.#wrapGrid();
  };

  #moveBackward = (): void => {
    const moveKey: string = "b" + this.direction;
    const moveAction: (() => void) | undefined = this.moveMap.get(moveKey);
    console.log(moveAction == undefined);
    if (moveAction != undefined) moveAction();
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
