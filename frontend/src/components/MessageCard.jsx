import { useUserStore } from "../store/useUserStore"
import useMessageStore from "../store/useMessageStore"
import { api } from "../api/api"

const MessageCard = ({id, content, username, createdAt, userId, likedBy}) => {
    const {session} = useUserStore()
    const {getMessages} = useMessageStore()

    const handleDelete = async () => {
        await api.deleteMessage(id)
        await getMessages()
    }

    const handleReport = async () => {
        await api.reportMessage(id)
        await getMessages()
    }

    const handleLike = async () => {
        await api.likeMessage(id)
        await getMessages()
    }
    const isLiked = likedBy.some((likedUserId) => likedUserId === session?.user.id)
    const isOwn = session?.user.id === userId
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
            <button className="action-button" onClick = {handleLike}>💗</button>
            <button className="action-button" onClick = {handleReport}>💭</button>
            {isOwn && <button className="action-button delete" onClick = {handleDelete}>💫</button>}
        </div>
        </div>
    )
}

export default MessageCard