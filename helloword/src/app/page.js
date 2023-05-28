"use client"
import { useRouter } from 'next/navigation';
import styles from './page.module.css'
import Link from 'next/link';
import { User } from 'lucide-react';


export default async function Home() {
  const router = useRouter();
  const req = await fetch("http://localhost:3003/alunos", {
    cache: "no-cache"
  });
  const alunos = await req.json();
 

  const remover = async (id) => {
    try {
      await fetch("http://localhost:3003/alunos/" + id, {
        method: "DELETE"
      })
      router.refresh()
    } catch {
      alert.arguments("Não foi possivél remover!")
    }
  }
  return (
    <main className={styles.main}>

      <Link href="/cadastro" > <h1 className={styles.titulo}>Cadastrar <User size={40}/></h1></Link>
      {alunos.map(aluno => (
        <div className={styles.div} key={aluno.id}>
          <p className={styles.p}> <span className={styles.h3}> Nome: </span>  {aluno.nome}</p>
          <p className={styles.p}> <span className={styles.h3}> Curso: </span> {aluno.curso}</p>
          <button className={styles.button} onClick={e => e.preventDefault(remover(aluno.id))}>Remover</button>
        </div>
      ))}
    </main>
  )
}
