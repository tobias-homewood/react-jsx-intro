const Tweet = ({username, name, date, message}) => {
    return (
        <div className="tweet">
            <h3 className="name">{name}</h3>
            <p className="username">@{username}</p>
            <p className="message">{message}</p>
            <p className="date">{date.toLocaleString()}</p>
        </div>
    );
}