import { Children } from "react";

const FormattedDate = ({isHighLight ,children}) => {
    return (
        <div className="">
            <span className={` font-semibold ${isHighLight ? "text-primarySubContent" : "text-primarytext "}`}>
                {children}
            </span>
        </div>
    )
}

export default FormattedDate;