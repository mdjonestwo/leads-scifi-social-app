import React, {useEffect, useState} from 'react';
import axios from './axios.js';
import './App.css';
import Video from './Video.js';
import myVideo1 from "./pexels-tima-miroshnichenko-6498520.mp4"
import myVideo2 from "./pexels-c-technical-6153725.mp4"
import myVideo3 from "./pexels-mikhail-nilov-8239190.mp4"


function App() {
  // Axios({
  //   method: "GET",
  //   url: "http://localhost:9000/v2/posts",
  //   headers: {
  //     "Content-Type": "application/json"
  //   }
  // }).then(res => {
  //   console.log(res.data);
  // });


  const [videos, setVideos] = useState([])

  useEffect(() => {
    async function fetchPosts(){
      const response = await axios.get('/v2/posts')
      setVideos(response.data)

      return response
    }
   
    fetchPosts()
  }, [])

  console.log(videos)

  return (
    //BEM Naming convention
    <div className="app">
   
    
      <div className="app_videos">

            <Video
            url= {myVideo1}
            description= "Musa travels through parrell universes to find his captured father..."
            movieTitle= "Cyba Brotha"
            likes= "4623"

          />
            <Video
            url={myVideo2}
            channel= "mrrobodude"
            description= "When the Order of Robots dynasty took over the world, one robot decided to not fall in line..."
            movieTitle= "Robotic Rebel"
            likes= "3326"

          />
            <Video
            url={myVideo3}
            channel= "innov8"
            description= "In a world where drones are only issued for goverment use to monitor civilians Khadijja builds one on her own... "
            movieTitle= "Similar"
            likes="6892"
          />

      </div>
      
    </div>
  );
}

export default App;
 