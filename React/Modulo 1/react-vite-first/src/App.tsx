const App = () => {
  let n1: number = 10;
  let n2: number = 3;

  function sum(n1: number, n2: number): number {
    return n1 + n2
  }

  function sub(n1: number, n2: number): number {
    return n1 - n2
  }
  
  function mult(n1: number, n2: number): number {
    return n1 * n2
  }

  function div(n1: number, n2: number): number {
    return n1 / n2
  }
  
  return (
    <div>
      <div>Sum: {sum(n1,n2)}</div>
      <div>Sub: {sub(n1,n2)}</div>
      <div>Mult: {mult(n1,n2)}</div>
      <div>Div: {div(n1,n2).toFixed(1)}</div>
    </div>
  )
}

export default App