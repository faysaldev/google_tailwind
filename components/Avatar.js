import { lazy } from "react"


function Avatar({src ,className}) {
    return (
            <img loading={lazy} src={src} className={`h-12 w-12 rounded-full cursor-pointer transform hover:scale-105 transition duration-100 ${className}`} />
    )
}

export default Avatar
