export class SonarSweep {
  constructor(private numbers: number[]) {}

  public getIncreases() {
    return this.calculateIncreases(this.numbers)
  }

  public getSums(){
    const sums = []
    for(let i = 0; i < this.numbers.length; i++){
      const first = this.numbers[i]
      const second = this.numbers[i+1]
      const third = this.numbers[i+2]
      
      if(first && second && third){
        sums.push(first + second + third)
      }
    }
    return this.calculateIncreases(sums)
  }

  private calculateIncreases(arr: any[]){
    return arr.reduce((increases, cur, i)=>{
      const next = arr[i+1]
      if(next > cur){
        increases++
      }
      return increases
    }, 0)
  }
}

