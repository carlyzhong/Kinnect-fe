import { useEffect, useState } from "react";
import { getTopics } from "../../utils/api";
import TopicButton from "./TopicButton";

export default function TopicNavBar() {
  const [topics, setTopics] = useState([]);
  const [selectedTopics, setSelectedTopics] = useState(null);

  useEffect(() => {
    getTopics().then((topicsFromApi) => {
      const formattedTopics = topicsFromApi.map((topic) => ({
        ...topic,
        formattedSlug: topic.slug[0].toUpperCase() + topic.slug.slice(1),
      }));
      setTopics(formattedTopics);
    });
  }, []);

  function handleClick(topic) {
    setSelectedTopics(topic);
    console.log("Selected topic:", topic);
  }

  return (
    <div className="p-3 text-s overflow-x-auto flex flex-row gap-x-2">
      <TopicButton onClick={() => handleClick(null)}>All</TopicButton>
      {topics.map((topic) => {
        return (
          <TopicButton key={topic.slug} onClick={() => handleClick(topic.slug)}>
            {topic.formattedSlug}
          </TopicButton>
        );
      })}
    </div>
  );
}
