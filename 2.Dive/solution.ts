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

  public getMultiplied(){
    return this.horizontal * this.depth
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
      types[type].call(value);
    }
  }
}
