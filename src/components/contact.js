import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faFacebookSquare, faInstagramSquare, faGithubSquare} from '@fortawesome/free-brands-svg-icons'

function Contact() {
    return (
        <>
            <h1>I would love to hear from you. as;flkajsdfa</h1>
            <article>
                <p>LinkedIn</p>
                <div className="imageHolder">
                    <img className='image' src='' alt="linkedIn" />
                </div>
                <p>or</p>
                <div className='socialLink'>
                    <a href=''><FontAwesomeIcon icon={faLinkedin} className='icon'>@danieljuarez</FontAwesomeIcon></a>
                </div>
            </article>
            <article>
                <p>GitHub</p>
                <div className="imageHolder">
                    <img className='image' src='' alt="github" />
                </div>
                <p>or</p>
                <div className='socialLink'>
                    <a href=''><FontAwesomeIcon icon={faGithubSquare} className='icon'>@DanielSJuarez</FontAwesomeIcon></a>
                </div>
            </article>
            <article>
                <p>Facebook</p>
                <div className="imageHolder">
                    <img className='image' src='' alt="facebook" />
                </div>
                <p>or</p>
                <div className='socialLink'>
                    <a href=''><FontAwesomeIcon icon={faFacebookSquare} className='icon'>@DanielJuarez</FontAwesomeIcon></a>
                </div>
            </article>
            <article>
                <p>Instagram</p>
                <div className="imageHolder">
                    <img className='image' src='' alt="instagram" />
                </div>
                <p>or</p>
                <div className='socialLink'>
                    <a href=''><FontAwesomeIcon icon={faInstagramSquare} className='icon'>@djuarez_sv</FontAwesomeIcon></a>
                </div>
            </article>

        </>
    )
}

export default Contact