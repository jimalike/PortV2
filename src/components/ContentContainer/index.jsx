import { useEffect, useState } from "react";
import FormattedDate from "../FormattedDate";
import Picture from "../Picture";
import TitleLink from "../TitleLink";
import Material from "../Material";
import Description from "../Description";
import Tech from "../Tech";

const ContentContainer = ({
    onInitial,
    title: sectionTitle = "",
    data = [],

}) => {
    const [isMouseEnter, setIsMouseEnter] = useState(false);

    const SECTION_ID = `${sectionTitle}-section`;

    useEffect(()=>{
        onInitial(SECTION_ID);
    }, [])
    
    return (
        <div className="scroll-m-14" id={SECTION_ID} >
            <div className="px-2 font-medium text-lg">{sectionTitle}</div>
            {
                data.map((
                    { date = "",
                        title = "",
                        link = "",
                        materials = [],
                        descriptions = [],
                        skills = [],
                        picture = "",
                    }, index) => (

                    <div
                        key={`${SECTION_ID}-${index}-${title.replaceAll(" ", "")}`}
                        className={`grid grid-cols-[25%_75%] rounded-md px-2 py-6 transition-all ${isMouseEnter[`${SECTION_ID}-${index}`] ? "bg-secondContent" : ""}`}
                        onMouseEnter={() => setIsMouseEnter({ [`${SECTION_ID}-${index}`]: true })}
                        onMouseLeave={() => setIsMouseEnter({ [`${SECTION_ID}-${index}`]: false })}
                    >
                        <div className="">
                            <FormattedDate isHighLight={isMouseEnter['exp1']}>{date}</FormattedDate>
                            <Picture className="" picture={picture} title={title} />
                        </div>

                        <div className="grid gap-y-4">
                            <TitleLink isHighLight={isMouseEnter[`${SECTION_ID}-${index}`]} title={title} link={link} />
                            {
                                materials.length > 0 ?

                                    <div className="flex gap-4 text-xl items-center">

                                        {
                                            materials.map((e, i) => (
                                                <Material key={`${e}-material-${i}`} icon={e.type} link={e.link} />
                                            ))
                                        }
                                    </div>
                                    : null
                            }

                            {
                                descriptions.map((e, i) => (
                                    <Description key={`${e}-description-${i}`} description={e} />
                                ))
                            }
                            {
                                skills.map((e, i) => (
                                    <Tech key={`${e}-skill-${i}`} isHighLight={isMouseEnter[`${SECTION_ID}-${index}`]} data={e} />
                                ))
                            }

                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default ContentContainer;