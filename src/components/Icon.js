import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(fas)

const Icon = ({icon, children}) => {
    return (
        <button className="c-icon w-10 h-10 bg-cyan-700 text-white rounded-full mr-4">
            <span className='w-3 h-3 flex items-center justify-center mx-auto'>
                <FontAwesomeIcon icon={icon} />
            </span>
            { children }
        </button>
    )
}

export default Icon