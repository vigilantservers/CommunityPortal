import Topic from '../components/Topic';
import { useParams } from 'react-router'

const TopicPage = () => {
    const { id } = useParams()
    return (
      <div>
        <Topic id={id} />
      </div>
    );
  };

export default (TopicPage);
