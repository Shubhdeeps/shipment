import { Image } from 'react-bootstrap'
import headerImage from '../assets/header-cover.png'


const Header = () => {
    return(
        <div>
            <Image src={headerImage} fluid />
        </div>
    )
}

export default Header