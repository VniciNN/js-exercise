export default function Home() {
  const objetos = [{nome: 'Vinicius', idade: 19}, {nome: 'Melissa', idade: 18}, {nome: 'Roberto', idade: 18}]
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Next.js</h1>
      <ul>
        {
          objetos.map(
            (dados) => (
              <li key={dados.nome}>
                {dados.nome} - {dados.idade}
              </li>
            )
          )
        }
      </ul>
    </main>
  )
}
