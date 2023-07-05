import img from "../assets/dropmenu.png";

const Experience = () => {

    return(
        <div className="experience">
            <h2>World Text Editor</h2>
            <p>
            Apresento o World Text Editor, um projeto empolgante que combina as tecnologias JavaScript, HTML e CSS. O World Text Editor é um website que oferece diversas funcionalidades para edição de texto de forma fácil e intuitiva.
            </p>
            <p>
            Com o World Text Editor, você pode formatar seu texto de várias maneiras. Adicione ênfase aos seus trechos com opções para colocar o texto em itálico, negrito ou sublinhado. Além disso, você pode aumentar ou diminuir a fonte do texto de acordo com suas preferências.
            </p>
            <p>
            Personalize a aparência do seu texto com opções de mudança de cor. Não apenas para o texto em si, mas também para o título. Dessa forma, você pode criar documentos com um visual atraente e profissional.
            </p>
            <p>
            O World Text Editor oferece uma função para copiar o documento feito no editor, incluindo o título e o corpo do texto. Dessa forma, você pode compartilhar seu trabalho facilmente ou salvar uma cópia para referência futura.
            </p>
            <img src="https://user-images.githubusercontent.com/88935936/241106034-83074fa0-d487-4785-8974-5c9664db63a8.png" />
            <a target="_blank" href="https://world-text-editor.netlify.app/"><button >Experimente aqui</button></a>
            <p>
            Com relação ao alinhamento do texto, o World Text Editor permite que você escolha entre alinhamento à esquerda, centralizado ou à direita. Isso garante que seus documentos tenham uma apresentação consistente e organizada.
            </p>
            <p>
            Outra funcionalidade interessante é a possibilidade de alterar a fonte do texto. Com uma variedade de opções disponíveis, você pode escolher aquela que melhor se adequa ao seu estilo e preferências pessoais.
            </p>
            <p>
            O World Text Editor também disponibiliza um botão de download, que permite baixar o documento em formato .txt. Dessa forma, você pode salvar sua criação localmente e acessá-la mesmo quando estiver offline.
            </p>
            <p>
            E não para por aí! O World Text Editor ainda oferece a opção de exportar o documento em formato PDF, mantendo toda a formatação feita. Isso permite que você compartilhe seu trabalho de maneira profissional e pronta para impressão.
            </p>
            <img src={img} />
            <p>
            Com a combinação poderosa das tecnologias JavaScript, HTML e CSS, o World Text Editor oferece uma experiência completa de edição de texto, com recursos avançados e uma interface amigável. Descubra todo o potencial desse projeto e crie documentos incríveis de maneira rápida e fácil. 
            </p>
            <p>Source Code: <a className="link" target="_blank" href="https://github.com/ThaynaSantana/World-Text-Editor">https://github.com/ThaynaSantana/World-Text-Editor</a></p>
        </div>
    )
}

export default Experience