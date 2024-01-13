const Tech = ({ isHighLight, data }) => {
    return (
        <div>
            <div className="flex gap-4 text-sm text-red-800">
                {
                    data.map((e, i) => (
                        <div key={`${e}-tech-${i}`} className={` text-primarytext px-2 py-1 rounded-md transition-all  ${isHighLight ? "text-white bg-primarySubContent" : "bg-primaryContent"}`}>{e}</div>
                    ))
                }
            </div>
        </div>
    )
}

export default Tech;