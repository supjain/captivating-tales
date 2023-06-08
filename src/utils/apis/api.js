//To have all the api calls segregated
//Please add your api calls here

import { FETCH_COMMENTS_BY_POST_ID } from "../Constants";

//get comments by post id
export const fetchCommentsByPostID = async (postId) => {
    try {
      const response = await fetch(`${FETCH_COMMENTS_BY_POST_ID}/${postId}`);
      const jsonData = await response.json();
      return jsonData;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };
  
  //delete post by id
  export const deletePostByID = async (postId) => {
    try {
      const response = await fetch(`https://dummyjson.com/posts/${postId}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        console.log('Post deleted successfully');
        return response; 
      } else {
        console.log('API call failed');
      }
    } catch (error) {
      console.error('Error occurred while making the API call', error);
    }
  };
