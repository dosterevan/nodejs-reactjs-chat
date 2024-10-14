import { PrettyChatWindow} from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return (
        <div style ={{ height: '100vh' }} >
            <PrettyChatWindow
                projectId='3b2f7f29-a0b6-42c5-9935-62a9941417b6'
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100%' }} />
        </div>
    )
}

export default ChatsPage