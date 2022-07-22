import React from "react";
import { useState, useEffect } from 'react';
import { getTopics } from "../../../api/topicApi";
import TopicsList from "./TopicsList"

export default function TopicsTable() {

  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then(_topics => setTopics(_topics))
  }, [])

  return (
    <div >
      <TopicsList topics={topics} />
    </div>
  );
}