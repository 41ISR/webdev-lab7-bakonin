const Feed = ({title = "Сообщения"}) => {
    return (
        <>
            <div className="messages-section">
                <div className="container">
                    <h2 className="section-title">{title}</h2>
                    <div className="message-grid"></div>
                </div>
            </div>
        </>
    )
}

export default Feed