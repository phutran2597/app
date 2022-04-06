import Image from "next/image";

const UserInfo = ({ name, avatar}) => {

    return (
        <div className="c-user flex items-center">
            <div className="c-user__ava">
                <Image src={avatar} width="100%" height="40%" layout="responsive" objectFit="contain" alt="" />
            </div>
            <div className="c-user__name">{name}</div>
        </div>
    )
}

export default UserInfo