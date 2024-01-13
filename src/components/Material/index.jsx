import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Material = ({icon, link}) => {
    return (
        <div className="flex gap-4 text-xl">
            <a href={link} target="_blank" className="hover:scale-110"><FontAwesomeIcon icon={icon} /></a>
        </div>
    )
}

export default Material;