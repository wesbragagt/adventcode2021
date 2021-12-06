export class Diver {
  horizontal = 0;
  depth = 0;

  constructor(instructions: string) {
    const parsedInstructions = this.parseInstructions(instructions);
    for (let movement in parsedInstructions) {
      const value = parsedInstructions[movement];
      this.move(value, movement);
    }
  }

  public getMultiplied() {
    return this.horizontal * this.depth;
  }

  private parseInstructions(str = "") {
    const toObject = (acc: Record<string, any>, cur: any) => {
      const [direction, value] = cur.split(" ");
      if (direction && value) {
        return {
          ...acc,
          [direction]: acc[direction]
            ? acc[direction] + Number(value)
            : Number(value),
        };
      }
      return acc;
    };
    return str.split("\n").reduce(toObject, {});
  }
  private move(value: number, type: string) {
    const types: Record<string, any> = {
      forward: () => {
        this.horizontal += value;
      },
      up: () => {
        this.depth -= value;
      },
      down: () => {
        this.depth += value;
      },
    };
    if (type in types) {
      types[type](value);
    }
  }
}

export const diverAim = (input = "") => {
  const parseInstructions = (instructions = "") =>
    instructions.split("\n").map((instruction) => {
      const [direction, value] = instruction.split(" ");
      if (direction && value) {
        return [direction, Number(value)];
      }
    }).filter(Boolean);

  const pipe =
    (...fns: any[]) =>
    (initialValue: any) =>
    fns.reduce((output: any, fn: any) => fn(output), initialValue);

  const movement: Record<string, any> = {
    forward: (value: number) => (state: any) => {
      const horizontal = state.horizontal + value;
      const depth = state.depth + (state.aim * value);
      return { ...state, horizontal, depth };
    },
    up: (value: number) => (state: any) => {
      const aim = state.aim - value;
      return { ...state, aim };
    },
    down: (value: number) => (state: any) => {
      const aim = state.aim + value;
      return {
        ...state,
        aim,
      };
    },
  };
  const parsed = parseInstructions(input);
  const movements = parsed.map((instruction) => {
    if (instruction) {
      const [direction, value] = instruction;
      const output = movement[direction](value);
      return output;
    }
  });
  function getMultiplied(){
    //@ts-ignore
    return this.horizontal * this.depth
  }
  return pipe(...movements)({ horizontal: 0, depth: 0, aim: 0, getMultiplied });
};
