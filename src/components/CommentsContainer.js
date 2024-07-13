import React from "react";

const commentData = [
  {
    name: "Divyanshi Singh",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [],
  },

  {
    name: "Divyanshi Singh",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [
      {
        name: "XYZ",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        replies: [],
      },
    ],
  },

  {
    name: "Divyanshi Singh",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [
      {
        name: "ABCD",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        replies: [
          {
            name: "PQRS",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            replies: [
              {
                name: "STUV",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                replies: [
                  {
                    name: "TUVW",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Divyanshi Singh",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [],
  },
  {
    name: "Divyanshi Singh",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [ {
      name: "PQRS",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      replies: [],
    },],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-50 p-2 rounded-lg">
      <img
        className="h-12 w-12 "
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt="user"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>

  );
};

const CommentList=({comments})=>{
  return comments.map((comment,index)=>
(
  <div key={index} >
     <Comment data={comment}/>
    {/* Replies */}
     <div className="pl-5 border border-l-black ml-5">

      {/* Recursion - calling comment list in commentlist*/ }
<CommentList comments={comment.replies}/>
     </div>
     </div>

  ))
}


const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentList comments={commentData}/>
    </div>
  );
};

export default CommentsContainer;
