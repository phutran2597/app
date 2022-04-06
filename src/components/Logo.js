import LogoImage from "../assets/images/logo.png";

const Logo = () => {
    return (
        <h1 className="logo">
            <a href="/">
                <img src={LogoImage.src} alt="" />
            </a>
        </h1>
    )
}

export default Logo