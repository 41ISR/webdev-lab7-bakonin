const MessageCard = ({content, username, createdAt}) => {
    const isOwn = false
    return (
        <div className="message-card">
            <div className="message-content">
                {content}
            </div>
            <div className="message-meta">
                <span className="message-author">@{username}</span>
                <span className="message-time">{createdAt}</span>
                </div>     
        <div className="message-actions">
            <div className="action-button">💗</div>
            <div className="action-button">💭</div>
            {isOwn && <div className="action-button delete">💫</div>}
        </div>
        </div>
    )
}

export default MessageCard