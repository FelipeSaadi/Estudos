const App = () => {
  let name: string = "Felipe";
  let lastName: string = "Saadi Siegert";
  let n1: number = 10;
  let n2: number = 3;
  let link: string = "https://www.linkedin.com/in/felipe-saadi/"

  function sum(n1: number, n2: number): number {
    return n1 + n2;
  }

  function sub(n1: number, n2: number): number {
    return n1 - n2;
  }
  
  function mult(n1: number, n2: number): number {
    return n1 * n2;
  }

  function div(n1: number, n2: number): number {
    return n1 / n2; 
  }
  
  return (
    <div>
      <div>{`Nome: ${name}`}</div>
      <div>{`Sobrenome: ${lastName}`}</div>
      <div>Sum: {sum(n1,n2)}</div>
      <div>Sub: {sub(n1,n2)}</div>
      <div>Mult: {mult(n1,n2)}</div>
      <div>Div: {div(n1,n2).toFixed(1)}</div>

      <div>
        Link para o meu Linkedin:
        <a href={link} target={"blank"}>Felipe Saadi | LinkedIn</a>
      </div>
    </div>
  )
}

export default App