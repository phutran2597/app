const UserInfo = ({ name, avatar}) => {
    return (
        <div className="c-user flex items-center">
            <div className="c-user__ava">
                <img src={avatar} alt="" />
            </div>
            <div className="c-user__name">{name}</div>
        </div>
    )
}

export default UserInfo