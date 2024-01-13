import Contact from "../Contact";
import Header from "../Header";
import Navbar from "../Navbar";

const LeftSection = ({navBarItems, currentSection}) => {
    return (
        <div className="px-5 mb-14 lg:mb-0">
            <div className='sticky top-14 px-2 grid gap-y-5 lg:gap-y-0 lg:grid-rows-[lfr_2fr_25%] lg:h-[86vh]'>
                <Header />
                <Navbar navBarItems={navBarItems} currentSection= {currentSection}/>
                <Contact />
            </div>
        </div>
    )
}

export default LeftSection;