import React, { useState } from 'react'
import styles from './Pad.module.scss'




export function Pad() {
const [visor, setVisor] = useState('');

function butao(num){
  setVisor(visor + num)
}

function reset(){
  setVisor('');
}

function calculate(){
  setVisor(eval(visor));
}

  return (
    <main className={styles.calcwrap}>
        <form action='' name='calc'>
            <div id='calculadora' className={styles.calculadora}>
              <input type='text' value={visor} className={styles.visor}/>
                <div className={styles.first}>
                  <input type='button' value='7' className={styles.borderbtn} onClick={() => butao('7')}/>
                  <input type='button' value='8' className={styles.borderbtn} onClick={() => butao('8')}/>
                  <input type='button' value='9' className={styles.borderbtn} onClick={() => butao('9')}/>
                  <input type='button' value='/' className={styles.borderbtn} onClick={() => butao('/')}/>
                </div>
                <div>
                  <input type='button' value='4' className={styles.borderbtn} onClick={() => butao('4')}/>
                  <input type='button' value='5' className={styles.borderbtn} onClick={() => butao('5')}/>
                  <input type='button' value='6' className={styles.borderbtn} onClick={() => butao('6')}/>
                  <input type='button' value='*' className={styles.borderbtn} onClick={() => butao('*')}/>
                </div>
                <div>
                  <input type='button' value='1' className={styles.borderbtn} onClick={() => butao('1')}/>
                  <input type='button' value='2' className={styles.borderbtn} onClick={() => butao('2')}/>
                  <input type='button' value='3' className={styles.borderbtn} onClick={() => butao('3')}/>
                  <input type='button' value='-' className={styles.borderbtn} onClick={() => butao('-')}/>
                </div>
                <div>
                  <input type='button' value='C' className={styles.borderbtn} onClick={() => reset()}/>
                  <input type='button' value='0' className={styles.borderbtn} onClick={() => butao('0')}/>
                  <input type='button' value='=' className={styles.borderbtn} onClick={() => calculate()}/>
                  <input type='button' value='+' className={styles.borderbtn} onClick={() => butao('+')}/>
                </div>
            </div>
        </form>
    </main>
  )
}
