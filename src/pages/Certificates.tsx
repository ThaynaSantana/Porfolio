import Certificate from '../component/Certificate'

const Certificates = () => {
    return(
        <main id="certificates">
            <Certificate name={'Curso de Extensao - Programaçao Python UNIFACS'} href={'/certificados/certificado_20230613220432.pdf'}  />
            <div className="certificate-button">
                <Certificate name={'Google - Technical Support Fundamentals'} href={'/certificados/Coursera ELN4HMHZHRKN.pdf'}  />
                <a target="_blank" href='https://coursera.org/share/77514aabbaaff678f9a2d3bef6d878d9'><button>Verifique</button></a>
            </div>
            <div className="certificate-button">
                <Certificate name={'Google - Fundamentals: Data, Data, Everywhere'} href={'./certificados/certificado_7QTT8BWLSTBV.pdf'} />
                <a target="_blank" href='https://coursera.org/share/290b796f69015c1628ffd495d0c9c31a'><button>Verifique</button></a>
            </div>

            <Certificate name={'Rocketseat - Funcionamento de computadores, programaçao, internet e mais.'} href={'/certificados/discover-conectar-certificate.pdf'} />

            <Certificate name={'Rocketseat - O currículo de aprendizado inclui: HTML,CSS, JavaScript, NodeJS, SQL e mais'} href={'/certificados/discover-fundamentar-certificate.pdf'} />
        </main>
    )
}

export default Certificates