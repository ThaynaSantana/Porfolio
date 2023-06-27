import Certificate from '../component/Certificate'

const Certificates = () => {
    return(
        <main>
            <Certificate name={'Curso de Extensao - Programaçao Python UNIFACS'} href={'../../public/certificados/certificado_20230613220432.pdf'} />

            <Certificate name={'Google - Technical Support Fundamentals'} href={'../../public/certificados/Coursera ELN4HMHZHRKN.pdf'} />

            <Certificate name={'Rocketseat - Funcionamento de computadores, programaçao, internet e mais.'} href={'../../public/certificados/discover-conectar-certificate.pdf'}/>

            <Certificate name={'Rocketseat - O currículo de aprendizado inclui: HTML,CSS, JavaScript, NodeJS, SQL e mais'} href={'../../public/certificados/discover-fundamentar-certificate.pdf'} />
        </main>
    )
}

export default Certificates