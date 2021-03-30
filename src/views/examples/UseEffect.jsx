import React, { useState, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from "../../components/layout/SectionTitle";


function calcFactorial (n) {
    if(n < 0) return -1
    if(n === 0) return 1
    return calcFactorial(n-1) * n
}

const UseEffect = (props) => {

    const [number, setNumber] = useState(1)
    const [factorial, setFactorial] = useState(1)
    const [numberDesafio, setNumberDesafio] = useState(0)
    const [isPar, setIsPar] = useState(true)

    useEffect(function (){
        setFactorial(calcFactorial(number))
    }, [number])

    useEffect(function (){
        if(factorial > 1000000){
            document.title = 'Eita!!!'
        }
    }, [factorial])

    useEffect(function (){
        if(numberDesafio % 2 === 0){
            setIsPar(true)
        } else{
            setIsPar(false)
        }
    }, [numberDesafio])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title='Exercício #01'/>
            <div className='center'>
                <div>
                    <span className='text'>Fatorial: </span>
                    <span className='text red'>{factorial === -1 ? 'Não existe fatorial de número negativo!' : factorial}</span>
                </div>
                <input type='number' className='input' value={number} onChange={e => setNumber(e.target.value)}/>
            </div>

            <SectionTitle title='Exercício #02'/>
            <div className='center'>
                <span className='text'>É o que?  </span>
                <span className='text red'>{isPar === true ? 'É par!' : 'É impar!'}</span>
            </div>
            <input type='number' className='input' value={numberDesafio} onChange={e => setNumberDesafio(e.target.value)}/>

        </div>
    )
}

export default UseEffect
