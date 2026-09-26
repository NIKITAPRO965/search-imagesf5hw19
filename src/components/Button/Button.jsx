import { memo } from "react"


function Button({onClick}){


    return(<>
        <button onClick={onClick} type="button">Load More</button>
    </>)
}

export default memo(Button)