import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const navs = [
  { title: "About", sectionId: "About-section" },
  { title: "Experience", sectionId: "Experience-section" },
  { title: "Project", sectionId: "Project-section" },
  { title: "Article", sectionId: "Article-section" },
]

const Navbar = ({ navBarItems, currentSection }) => {

  const [isMouseEnter, setIsMouseEnter] = useState({});

  const handleClick = (sectionId) => {
    console.log(sectionId)
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" })
  }
  console.log(navBarItems)
  return (
    <div className='hidden lg:flex flex-col font-semibold mt-7'>
      {
        navBarItems.map((e, i) => (
          <div
            key={`nav-${e}-${i}`}
            onClick={() => (handleClick(e.sectionId))}
            onMouseEnter={() => setIsMouseEnter({ [e.title]: true })}
            onMouseLeave={() => setIsMouseEnter({ [e.title]: false })}
            className="cursor-pointer flex py-2"
          >
            <div className="">
              <FontAwesomeIcon
                className={` new-arrow  ${currentSection === e.sectionId ? "text-primarySubContent" : isMouseEnter[e.title] ? "" : "hidden"} `} icon={faArrowRight} />
            </div>
            <div className={`${currentSection === e.sectionId || isMouseEnter[e.title] ? "translate-x-2" : ""} duration-500 ease-out`}>{e.title}</div>

          </div>

        ))
      }
    </div>

  )
}

export default Navbar;