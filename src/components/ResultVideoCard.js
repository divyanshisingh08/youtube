import React from "react";

const ResultVideo = ({ info }) => {
  const { snippet } = info;
  const { title, channelTitle, thumbnails, description, publishTime } = snippet;

  return (
    <div className="flex p-4 border-b border-gray-200">
      <img
        className="w-64 h-36 rounded-lg"
        alt="thumbnail"
        src={thumbnails.medium.url}
      />
      <div className="ml-4">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-gray-600">{channelTitle}</p>
        <p className="text-gray-500 text-sm">Published: {new Date(publishTime).toLocaleDateString()}</p>
        <p className="text-gray-700 mt-2 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ResultVideo;
