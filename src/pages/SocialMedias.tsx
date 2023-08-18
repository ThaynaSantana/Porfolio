import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'

const SocialMedias = () => {
    return(
        <div className="socialmedias">
            <div className='social'>
                <img className='banner' src={linkedin}></img>
                <h3><img className="icons-programming" src="https://t.ctcdn.com.br/09Y6BbLFxNn7XGCYRGzEI0p0oy8=/400x400/smart/filters:format(webp)/i490027.jpeg" />Linkedin <a className="link" href="https://www.linkedin.com/in/thayss/">www.linkedin.com/in/thayss</a></h3>
            </div>
            

            <div className='social'>
                <img className='banner' src={github}></img>
                <h3><img className="icons-programming" src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU" />Github <a className="link" href="https://github.com/ThaynaSantana">www.github.com/ThaynaSantana</a></h3>
            </div>
            
        </div>
    )
}

export default SocialMedias