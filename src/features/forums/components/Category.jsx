import { Link } from "react-router-dom";
import './Category.css';
import moment from 'moment';

const Category = ({ categoryName, topics }) => {
return (
<div className="category">
<div className="category-header">
<h1>{categoryName}</h1>
</div>
<ul className="topic-list">
{topics.map((topic) => (
<div className="topic-info">
<li key={topic.id}>
<Link to={`/forums/topic/${topic.id}`} className="no-decoration white">{topic.title}</Link>
<span>Created by: {topic.user.userName}</span>
<span>Date created: {moment(topic.dateCreated).format('MMMM Do YYYY')}</span>
</li>
</div>
))}
</ul>
</div>
);
};

export default Category;