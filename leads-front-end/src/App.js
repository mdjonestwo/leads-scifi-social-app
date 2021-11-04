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
            url= "https://v39.tiktokcdn-us.com/24320f15a8bae393becb95bd49ded4f0/61849368/video/tos/useast2a/tos-useast2a-pve-0068/3fea1d66564f4b3cbe1eb630fdeb9d51/?a=1233&amp;br=1258&amp;bt=629&amp;cd=0%7C0%7C1&amp;ch=0&amp;cr=0&amp;cs=0&amp;cv=1&amp;dr=0&amp;ds=3&amp;er=&amp;ft=Sduyqeta4kag3&amp;l=2021110420110001011300619710A8DD4C&amp;lr=tiktok_m&amp;mime_type=video_mp4&amp;net=0&amp;pl=0&amp;qs=0&amp;rc=MzZkaDY6ZmVsODMzNzczM0ApZTxnOjtmaTtkNzxmOjdmZGdrMjEzcjRnXnBgLS1kMTZzcy4wNGE0XzQ0LzE0YzFeMjQ6Yw%3D%3D&amp;vl=&amp;vr="
            channel= "jonesmichael"
            description= "Musa travels through parrell universes to find his captured father..."
            movieTitle= "Cyba Brotha"
            likes= "4623"

          />
            <Video
            url= "https://v19.tiktokcdn-us.com/3d3a8bd67c08b7975db8fe023da18901/618496f6/video/tos/useast2a/tos-useast2a-ve-0068c004/21f806103b874794ac1d5b7cc1e9b6aa/?a=1233&amp;br=2620&amp;bt=1310&amp;cd=0%7C0%7C1&amp;ch=0&amp;cr=0&amp;cs=0&amp;cv=1&amp;dr=0&amp;ds=3&amp;er=&amp;ft=Sduyqeta4kag3&amp;l=20211104202612010191057017363CBA0C&amp;lr=tiktok_m&amp;mime_type=video_mp4&amp;net=0&amp;pl=0&amp;qs=0&amp;rc=anY2Nzc6Znc1NzMzNzczM0ApZjY4ZTo3M2Q3NzhlOWU5OmcuZTBtcjRnNWtgLS1kMTZzc2E0NjJiYGBeYzAxMF80YDU6Yw%3D%3D&amp;vl=&amp;vr="
            channel= "mrrobodude"
            description= "When the Order of Robots dynasty took over the world, one robot decided to not fall in line..."
            movieTitle= "Robotic Rebel"
            likes= "3326"

          />
            <Video
            url= "https://v39.tiktokcdn-us.com/40ad6bc94b9448c3196705dcd493085f/6184978f/video/tos/useast2a/tos-useast2a-ve-0068c003/2c90b46c15f542918f68b689a1ef7f1d/?a=1233&amp;br=3626&amp;bt=1813&amp;cd=0%7C0%7C0&amp;ch=0&amp;cr=0&amp;cs=0&amp;dr=0&amp;ds=2&amp;er=&amp;ft=Sduyqeta4kag3&amp;l=2021110420312301011313512820AB6F34&amp;lr=tiktok_m&amp;mime_type=video_mp4&amp;net=0&amp;pl=0&amp;qs=0&amp;rc=ampsZTs6ZjpwODMzNzczM0ApN2ZmN2RkOztoNzo5OzxkOmdjLS1xcjRvZGtgLS1kMTZzc180Ly8wLzI2MWBhYDAzYV46Yw%3D%3D&amp;vl=&amp;vr="
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
 