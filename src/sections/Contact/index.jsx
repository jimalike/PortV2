import { faGithub, faLinkedin, faMedium } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
    return (
        <div className='flex items-end gap-5 text-3xl'>
            <a href="https://github.com/jimalike" target="_blank">
            <FontAwesomeIcon className='text-primarySubContent hover:scale-125 hover:text-primarytext transition-all' icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/supanut-theeraraktrakul-594573250/" target="_blank" >
            <FontAwesomeIcon className='text-primarySubContent hover:scale-125 hover:text-primarytext transition-all' icon={faLinkedin} />
            </a>
        </div>
    )
}

export default Contact;