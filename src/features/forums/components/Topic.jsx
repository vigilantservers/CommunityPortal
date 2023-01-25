import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./Topic.css";

const Topic = ({ match }) => {
const [topic, setTopic] = useState({});

useEffect(() => {
const getTopic = async () => {
const res = await axios.get('https://localhost:7174/api/Topics/get/${match.params.id}');
setTopic(res.data);
};
getTopic();
}, [match.params.id]);

return (
<div className="topic">
<div className="topic-header">
<h1>{topic.title}</h1>
<div className="topic-meta">
<p>Created by: {topic.userName}</p>
<p>Category: {topic.categoryName}</p>
<p>Date created: {new Date(topic.dateCreated).toDateString()}</p>
</div>
</div>
<div className="topic-content">
<p>{topic.content}</p>
</div>
</div>
);
};

export default Topic;