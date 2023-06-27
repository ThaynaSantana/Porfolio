
type CertificateProps = {
    name: string,
    href: string
}

const Certificate = ({ name, href }: CertificateProps ) => {

    return(
        <div className="objects">
            <h3>{name}</h3>
            <object data={href} type="application/pdf">
                <p>Seu navegador não tem suporte para visualizar PDF</p>
            </object>
            <button>Veja mais</button>
        </div>
    )
}

export default Certificate