
const Biograph: React.FC = () => {
    const textToCopy = 'thaynas.s502@gmail.com';


    const copyToClipboard = () => {
        navigator.clipboard.writeText(textToCopy)
        .then(() => {
            window.alert('📩Email copiado para a area de tranferencia');
        })
        .catch((error) => {
            window.alert('⛔Erro ao copiar para a area de transferencia: '+ error);
        })
    
    }

    return(
        <div className="biograph">
            <h1>👋Olá, eu sou Thayna</h1>
            <h3 id="office"><span className="orange">FullStack</span> Developer</h3>
            <h3>Sou uma desenvolvedora de software com foco na linguagem Java e ampla experiência em diversas tecnologias. Ao longo dos anos, adquiri conhecimentos sólidos em Ruby, Python, React, HTML, CSS, JavaScript, MySQL e TypeScript. Recentemente, comecei a me aprofundar nos estudos de PostgresSQL, Dart e Flutter para expandir ainda mais minha base de habilidades.</h3>
            <button onClick={copyToClipboard} id="contact">Entre Contato</button> {/*TODO: Redirect para curriculo */}
        </div>
    )
}

export default Biograph