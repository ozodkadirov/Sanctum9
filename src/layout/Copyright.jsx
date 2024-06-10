import React from 'react'
import QuestionStyle from './layout.module.css'

const Copyright = () => {
  return (
    <section className={QuestionStyle["Copyright"]}>
      <div className={QuestionStyle["Copyright__wrap"]}>
        <div >
          <p className={QuestionStyle['opacity']} >@2022 Sanctum Все права защищены</p>
          <br />
          <div> 
            <div>Facebook</div>
            <div>Facebook</div>
            <div>Facebook</div>
          </div>
        </div>
        <div>+998 90 002 02 02 <br />
        <br />
          sanctum@gmail.com</div>
        <div>Яккасарайский район, улица Навои
          здание Sanctum, напротив Пахтакора             </div>
      </div>
    </section>
  )
}

export default Copyright