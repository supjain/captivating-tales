//To have all the api calls segregated
//Please add your api calls here

const fetchCommentsByPostID = async (postId) => {
    try {
      const response = await fetch(`https://dummyjson.com/comments/post/${postId}`);
      const jsonData = await response.json();
      return jsonData;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };
  
  export default fetchCommentsByPostID;