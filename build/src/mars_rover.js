var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _MarsRover_createMoveMap, _MarsRover_isCommand, _MarsRover_moveOnce, _MarsRover_moveForward, _MarsRover_moveBackward, _MarsRover_turnLeft, _MarsRover_turnRight, _MarsRover_wrapGrid, _MarsRover_wrapXAxis, _MarsRover_wrapYAxis;
export class MarsRover {
    constructor(location, direction, grid) {
        this.getLocation = () => {
            return [this.location.x, this.location.y];
        };
        this.move = (commands) => {
            commands.split("").forEach((char) => {
                if (__classPrivateFieldGet(this, _MarsRover_isCommand, "f").call(this, char))
                    __classPrivateFieldGet(this, _MarsRover_moveOnce, "f").call(this, char);
            });
        };
        _MarsRover_createMoveMap.set(this, () => {
            const moveMap = new Map();
            moveMap.set("fe", () => (this.location.x += 1));
            moveMap.set("fw", () => (this.location.x -= 1));
            moveMap.set("fs", () => (this.location.y += 1));
            moveMap.set("fn", () => (this.location.y -= 1));
            moveMap.set("bw", () => (this.location.x += 1));
            moveMap.set("be", () => (this.location.x -= 1));
            moveMap.set("bn", () => (this.location.y += 1));
            moveMap.set("bs", () => (this.location.y -= 1));
            return moveMap;
        });
        _MarsRover_isCommand.set(this, (char) => {
            return true;
        });
        _MarsRover_moveOnce.set(this, (command) => {
            const commandMap = new Map();
            commandMap.set("f", __classPrivateFieldGet(this, _MarsRover_moveForward, "f"));
            commandMap.set("b", __classPrivateFieldGet(this, _MarsRover_moveBackward, "f"));
            commandMap.set("l", __classPrivateFieldGet(this, _MarsRover_turnLeft, "f"));
            commandMap.set("r", __classPrivateFieldGet(this, _MarsRover_turnRight, "f"));
            const moveFunction = commandMap.get(command);
            if (moveFunction != undefined)
                moveFunction();
        });
        _MarsRover_moveForward.set(this, () => {
            const moveKey = "f" + this.direction;
            const moveAction = this.moveMap.get(moveKey);
            if (moveAction != undefined)
                moveAction();
            __classPrivateFieldGet(this, _MarsRover_wrapGrid, "f").call(this);
        });
        _MarsRover_moveBackward.set(this, () => {
            const moveKey = "b" + this.direction;
            const moveAction = this.moveMap.get(moveKey);
            console.log(moveAction == undefined);
            if (moveAction != undefined)
                moveAction();
            __classPrivateFieldGet(this, _MarsRover_wrapGrid, "f").call(this);
        });
        _MarsRover_turnLeft.set(this, () => {
            const directionsLeft = ["e", "n", "w", "s", "e"];
            const indexToTheLeft = directionsLeft.indexOf(this.direction) + 1;
            const newDirection = directionsLeft[indexToTheLeft];
            this.direction = newDirection;
        });
        _MarsRover_turnRight.set(this, () => {
            const directionsRight = ["e", "s", "w", "n", "e"];
            const indexToTheRight = directionsRight.indexOf(this.direction) + 1;
            const newDirection = directionsRight[indexToTheRight];
            this.direction = newDirection;
        });
        _MarsRover_wrapGrid.set(this, () => {
            __classPrivateFieldGet(this, _MarsRover_wrapXAxis, "f").call(this);
            __classPrivateFieldGet(this, _MarsRover_wrapYAxis, "f").call(this);
        });
        _MarsRover_wrapXAxis.set(this, () => {
            if (this.location.x > this.grid.x) {
                this.location.x = 0;
            }
            else if (this.location.x < 0) {
                this.location.x = this.grid.x;
            }
        });
        _MarsRover_wrapYAxis.set(this, () => {
            if (this.location.y > this.grid.y) {
                this.location.y = 0;
            }
            else if (this.location.y < 0) {
                this.location.y = this.grid.y;
            }
        });
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
        this.moveMap = __classPrivateFieldGet(this, _MarsRover_createMoveMap, "f").call(this);
    }
}
_MarsRover_createMoveMap = new WeakMap(), _MarsRover_isCommand = new WeakMap(), _MarsRover_moveOnce = new WeakMap(), _MarsRover_moveForward = new WeakMap(), _MarsRover_moveBackward = new WeakMap(), _MarsRover_turnLeft = new WeakMap(), _MarsRover_turnRight = new WeakMap(), _MarsRover_wrapGrid = new WeakMap(), _MarsRover_wrapXAxis = new WeakMap(), _MarsRover_wrapYAxis = new WeakMap();
