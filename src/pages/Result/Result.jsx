import React from 'react'

export default function Result() {

    const options = JSON.parse(localStorage.getItem('userOptions'))

    const questions = Object.keys(options)

    const result = Object.keys(options).filter((key)=>{
        if(options[key].correctAnswer === options[key].selectedAnswer){
            return options[key].selectedAnswer
        } 
    })

    console.log(result);

    return (
        <section>
            <p>{result.length} acertos de {questions.length} perguntas</p>   
            <table cellPadding={0}>
                <thead>
                    <tr>
                        <th>Questão</th>
                        <th>Reposta Correta</th>
                        <th>Resposta Selecionada</th>
                        <th>Pontuação</th>
                    </tr>
                </thead>
                <tbody>
                {Object.keys(options).map(key => {
                    return(
                        <tr key={key}>
                           <td style={{width:450}}>{options[key].question}</td> 
                           <td style={{width:250, padding:20}}>{options[key].correctAnswer}</td> 
                           <td style={{width:250}}>{options[key].selectedAnswer}</td> 
                           {options[key].correctAnswer === options[key].selectedAnswer ? <td style={{width:50}}>✔</td> : <td style={{width:50}}>❌</td> }
                        </tr>
                    )
                })}
                 </tbody>
            </table>
        </section>
    )
}


// <table cellPadding={0}>

// <tbody>
//   {allEpisodes.map(item => {
//     return(
//       <tr key={item.id}>
//         <td style={{width:72}}>
//           <Image
//             src={item.thumbnail}
//             alt ={item.title}
//             width={120}
//             height={120}
//             objectFit='cover'
//           />
//         </td>
//         <td>
//           <Link href={`/episode/${item.id}`}>
//             <a>{item.title}</a>
//           </Link>
//         </td>
//         <td>
//           {item.members}
//         </td>
//         <td style={{width:100}}>
//           {item.publishedAt}
//         </td>
//         <td>
//           {item.durationAsString}
//         </td>
//         <td>
//           <button type='button'>
//             <img src="/play-green.svg" alt="" />
//           </button>
//         </td>
//       </tr>
//     )
//   })}
// </tbody>
// </table>