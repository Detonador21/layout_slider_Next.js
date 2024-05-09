'use client'
import {useState, useEffect, useRef} from  'react';
import './banner.css';
import { FaCircleNotch } from "react-icons/fa";
import localImage from '../../public/image.png';
import localCoxinha from '../../public/comida/coxinha.png'
import localBeuru from '../../public/comida/beuru.png'
import Image from "next/image";

export default function Banner() {
    const [b1, setB1] = useState(1);
    const [b2, setB2] = useState(2);
    const [b3, setB3] = useState(3);
    const [b4, setB4] = useState(4);
    const [sel, setSel] = useState(-1);

    /* UseEffect para Mudança Inicial */
    useEffect(()=>{
        var b = document.querySelector('.cont1');
        if (b){b.classList.add(`rotate${b1}-false`)}
    
        b = document.querySelector('.cont2');
        if (b){b.classList.add(`rotate${b2}-false`)}
    
        b = document.querySelector('.cont3');
        if (b){b.classList.add(`rotate${b3}-false`)}
        
        b = document.querySelector('.cont4');
        if (b){b.classList.add(`rotate${b4}-false`)}
    },[])

    /* UseEffect para Mudança Continua */
    useEffect(() => {

        const verificar = (v:number) =>{
            if (v >= 4){
                return 1;
            } else {
                return v + 1;
            }
        }

        const intervalFunction = () => {
            var b = document.querySelector('.cont1');
            if (b){b.classList.remove(`rotate${b1}-false`);/* Retirar Animação Antiga */
                b.classList.remove(`rotate${b1}-true`);
                b.classList.add(`rotate${verificar(b1)}-false`)}/* Add Próxima Animação */

            b = document.querySelector('.cont2');
            if (b){b.classList.remove(`rotate${b2}-false`);
                b.classList.remove(`rotate${b2}-true`);
                b.classList.add(`rotate${verificar(b2)}-false`)}
    
            b = document.querySelector('.cont3');
            if (b){b.classList.remove(`rotate${b3}-false`);
                b.classList.remove(`rotate${b3}-true`);
                b.classList.add(`rotate${verificar(b3)}-false`)}
    
            b = document.querySelector('.cont4');
            if (b){b.classList.remove(`rotate${b4}-false`);
                b.classList.remove(`rotate${b4}-true`);
                b.classList.add(`rotate${verificar(b4)}-false`)}

            /* Almenta o contador */
            setB1(verificar(b1))
            setB2(verificar(b2))
            setB3(verificar(b3))
            setB4(verificar(b4))
        };
        const intervalId = setInterval(intervalFunction, 5000);

        return (()=>{clearInterval(intervalId)})
    },[b1,b2,b3,b4])

    /* UseEffect para a cada Click */
    useEffect(() => {
        if (sel === -1){
            return
        }else if ([b1,b2,b3,b4][sel] === 1) {
            setSel(-1)
            return
        }

        const verificar = (v:number) =>{
            if (v >= 4){
                return 1;
            } else {
                return v + 1;
            }
        }

        const rodar = () => {
            var b = document.querySelector('.cont1');
            if (b){b.classList.remove(`rotate${b1}-true`);/* Retirar Animação Antiga */
                b.classList.remove(`rotate${b1}-false`);
                b.classList.add(`rotate${verificar(b1)}-true`)} /* Add Próxima Animação */

            b = document.querySelector('.cont2');
            if (b){b.classList.remove(`rotate${b2}-true`);
                b.classList.remove(`rotate${b2}-false`);
                b.classList.add(`rotate${verificar(b2)}-true`)}
    
            b = document.querySelector('.cont3');
            if (b){b.classList.remove(`rotate${b3}-true`);
                b.classList.remove(`rotate${b3}-false`);
                b.classList.add(`rotate${verificar(b3)}-true`)}
    
            b = document.querySelector('.cont4');
            if (b){b.classList.remove(`rotate${b4}-true`);
                b.classList.remove(`rotate${b4}-false`);
                b.classList.add(`rotate${verificar(b4)}-true`)}

            /* Almenta o contador */
            setB1(verificar(b1))
            setB2(verificar(b2))
            setB3(verificar(b3))
            setB4(verificar(b4))
        }

        const interval = setInterval(rodar, 200);
        return (()=>{clearInterval(interval)})
    },[b1,b2,b3,b4,sel])

  return (
    <main>
      <div id="banner">
        <button onClick={()=>{setSel(0)}} className="cont1">
            <Image src={localImage} alt="Logo do Moleza" />
            <h1>A Melhor lanchonete da Mauá</h1>
        </button>
        <button onClick={()=>{setSel(1)}} className="cont2">
            {b2}
        </button>
        <button onClick={()=>{setSel(2)}} className="cont3">
            {b3}
        </button>
        <button onClick={()=>{setSel(3)}} className="cont4">
            <div className='salgado'>
                <Image className="co" src={localCoxinha} alt="Coxinha" />
                <Image className="be" src={localBeuru} alt="Beuru" />
                <div className='texto'>
                    <h2>Bateu aquela Fominha chata?</h2>
                    <h1>Venha provar nossos salgados</h1>
                </div>
            </div>
        </button>
        <i className='fa'><FaCircleNotch/></i>
      </div>
    </main>
  );
}
