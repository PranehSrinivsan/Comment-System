export const getComments = async () => {
    return [
      {
        id: "1",
        body: "First comment",
        username: "Jack",
        userId: "1",
        parentId: null,
        createdAt: "2021-08-16T23:00:33.010+02:00",
        likecount: "5",
        dislikecount: "2",
      },
      {
        id: "2",
        body: "Second comment",
        username: "John",
        userId: "2",
        parentId: null,
        createdAt: "2021-08-16T23:00:33.010+02:00",
        likecount: "8",
        dislikecount: "4",
      },
      {
        id: "3",
        body: "Third comment",
        username: "Jill",
        userId: "3",
        parentId: null,
        createdAt: "2021-08-16T23:00:33.010+02:00",
        likecount: "10",
        dislikecount: "3",
      },
      {
        id: "4",
        body: "Second comment second child",
        username: "John",
        userId: "2",
        parentId: "2",
        createdAt: "2021-08-16T23:00:33.010+02:00",
      },
    ];
  };
  
  export const createComment = async (text, parentId = null) => {
    return {
      id: Math.random().toString(36).substr(2, 9),
      body: text,
      parentId,
      userId: "5",
      username: "pranesh",
      createdAt: new Date().toISOString(),
      likecount: "0",
      dislikecount: "0",
    };
  };
  
  export const updateComment = async (text) => {
    return { text };
  };
  
  export const deleteComment = async () => {
    return {};
  };