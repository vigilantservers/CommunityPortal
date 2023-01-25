import Topic from '../components/Topic';

const TopicPage = ({match}) => {
    return (
        <div>
            <Topic match={match} />
        </div>
    )
}

export default (TopicPage);
