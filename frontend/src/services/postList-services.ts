import axios from "axios";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { loadPostList } from "../redux/slices/PostList";



export const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3002/roomposts/');
      return response.data.data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };