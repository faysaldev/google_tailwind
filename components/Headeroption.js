function Headeroption({Icon,title,selected}) {
    return (
        <div className={`flex items-center space-x-1 border-b-4 border-transparent hover:border-blue-500 cursor-pointer transition-all duration-100 hover:text-blue-500 hover:bold ${selected && "text-blue-500 border-blue-500 "}`}>
            <Icon className="h-5"/>
            <p className="hidden sm:inline-flex">{title}</p>
        </div>
    )
}

export default Headeroption
