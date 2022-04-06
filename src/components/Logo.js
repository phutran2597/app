import LogoImage from "../assets/images/logo.png";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
    return (
        <h1 className="logo">
            <Link href="/">
                <a>
                    <Image src={LogoImage.src} width="100%" height="40%" layout="responsive" objectFit="contain" alt=""/>
                </a>
            </Link>
        </h1>
    )
}

export default Logo