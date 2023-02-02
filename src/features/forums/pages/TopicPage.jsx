import React, { useState, useEffect } from "react";
import Topic from "../components/Topic";
import { useParams } from "react-router-dom";
import axios from "axios";

const TopicPage = () => {
  const [topic, setTopic] = useState();
  const { id } = useParams();

  const validateAndSanitize = (value) => {
    // First, create a new DOMParser object
    const parser = new DOMParser();

    // Parse the input value as HTML
    const doc = parser.parseFromString(value, "text/html");

    // Get all the elements in the parsed HTML
    const elements = doc.body.getElementsByTagName("*");

    // Iterate through each element
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];

      // Remove any elements that are not allowed (e.g. script tags)
      if (element.tagName.toLowerCase() === "script") {
        element.parentNode.removeChild(element);
      }

      // Remove any attributes that are not allowed (e.g. onclick)
      element.removeAttribute("onclick");

      // Remove any inline styles
      element.removeAttribute("style");

      // Ensure all links have "rel" attribute set to "nofollow"
      if (element.tagName.toLowerCase() === "a") {
        element.setAttribute("rel", "nofollow");
      }

      // Ensure all images have "alt" attribute set
      if (element.tagName.toLowerCase() === "img") {
        if (!element.hasAttribute("alt")) {
          element.setAttribute("alt", "");
        }
      }
    }

    // Return the modified HTML as a string
    return doc.body.innerHTML;
  };

  useEffect(() => {
    async function fetchTopic() {
      try {
        const response = await axios.get(
          `https://localhost:7174/api/Topics/getbyid/${id}`
        );
        const topic = response.data;
        console.log("Topic: ", topic);
        topic.data.content = validateAndSanitize(topic.data.content);
        console.log("Topic content: ", topic.data.content);
        try {
          const response = await axios.get(
            `https://localhost:7174/api/Replies/topic/${id}`
          );
          const replies = response.data.data;
          // add the replies to the topic object
          topic.data.replies = replies;
          console.log("Replies: ", topic.data.replies);
          setTopic(topic);
        } catch (err) {
          console.log("Error fetching replies: ", err);
        }
      } catch (err) {
        console.log("Error fetching topic: ", err);
      }
    }
    fetchTopic();
  }, [id]);

  if (!topic) {
    return <div>Loading...</div>;
  }
  return <Topic topic={topic} />;
};

export default TopicPage;
