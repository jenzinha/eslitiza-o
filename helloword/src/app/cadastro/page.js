'use client'

import { useState } from 'react'
import styles from '../page.module.css'
import { useRouter } from 'next/navigation'
import { User} from 'lucide-react';



export default function Cadastro() {

    const route = useRouter();
    const [nome, setNome] = useState();
    const [curso, setCurso] = useState();
    const [num_inscrito, setNum_inscrito] = useState();


    const cadastrar = (e) => {
        e.preventDefault()
        const aluno = {
            nome: nome,
            curso: curso,
            num_inscrito: num_inscrito
        }

        const alunoJson = JSON.stringify(aluno);

        fetch("http://localhost:3003/alunos", {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: alunoJson
        }).then(function(){ route.push("/")}).catch(()=> console.log("Não foi possível cadastrar!"))
    }
    return (
        <div className={styles.main}>
            <form  action='' onSubmit={cadastrar}>
             <h1 className={styles.titulo}>
                Cadastrar
                </h1>
                <div className={styles.centro}>
                <User color='#18156B' size={40}/>
                </div>
                <div className={styles.form}>
                <input className={styles.input} placeholder='Digite o nome do aluno' nome="nome" type="text"
                    onChange={e => setNome(e.target.value)}></input><br/>

                <input className={styles.input} placeholder='Informe o curso do aluno' nome="curso" type="text"
                    onChange={e => setCurso(e.target.value)}></input><br/>

                <input className={styles.input} placeholder='Informe o Nº de inscrição' nome="num_inscrito" type="number"
                    onChange={e => setNum_inscrito(e.target.value)}></input><br/>
             
                <button className={styles.button} type='submit'>Cadastrar</button>
                <a href='/' className={styles.a}>Voltar </a>
                </div>
            </form>
        </div>

    );

}