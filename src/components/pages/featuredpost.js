import React,{useState,useEffect} from 'react'
// css
import '../css/featuredPost.css'
// icons
import { PiHeartStraightBold,PiHeartStraightFill  } from "react-icons/pi";
import { MdOutlineModeComment } from "react-icons/md";
import { LuSend } from "react-icons/lu";
// assets
import sampPrf from '../assets/notes-male-avatar.png'
import samPost from '../assets/purr-financial-success.png'
import logoPaw from '../assets/logo.png'
import daga from '../assets/purr-16.png'


const Featuredpost = () => {
const [likePost, setLikepost] = useState(false)

const likeftPost = () => {
    setLikepost(likePost=>!likePost)
}
  return (
    <div className="featuredpost">
      <div className="featuredpost-head">
        <h1>join to our community</h1>
        <p>connect with other fur-parents</p>
      </div>
      <div className="featuredPostMain">
        <div className="ftPost-container">
          <div className="ftPost-header">
            <section>
              <h1>Featured Post</h1>
              <p>Post from owners</p>
            </section>
            <img src={logoPaw} alt="" />
          </div>
          <hr />
          <div className="ftPost-contents">
            <ul>
              <li>
                <div className="featPost">
                  <div className="featPost-head">
                    <img src={sampPrf} alt="" />
                    <section>
                      <h1>Nathaniel</h1>
                      <span>10pm</span>
                    </section>
                  </div>
                  <div className="featPost-content">
                    <p>stupid ass cat</p>
                    <div className="imgFtpost">
                      <img src={samPost} alt="" />
                    </div>
                    <div className="ftreactIcons">
                      {!likePost ? (
                        <PiHeartStraightBold
                          className={`likeFtpost ${likePost}`}
                          onClick={likeftPost}
                        />
                      ) : (
                        <PiHeartStraightFill
                          className={`likeFtpost ${likePost}`}
                          onClick={likeftPost}
                        />
                      )}
                      <MdOutlineModeComment className="commentFtpost" />
                      <LuSend className="shareFtpost" />
                    </div>
                    <div className="wrcommentFtpost">
                      <input type="text" />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="featPost">
                  <div className="featPost-head">
                    <img src={sampPrf} alt="" />
                    <section>
                      <h1>Nathaniel</h1>
                      <span>10pm</span>
                    </section>
                  </div>
                  <div className="featPost-content">
                    <p>stupid ass cat</p>
                    <div className="imgFtpost">
                      <img src={samPost} alt="" />
                    </div>
                    <div className="ftreactIcons">
                      {!likePost ? (
                        <PiHeartStraightBold
                          className={`likeFtpost ${likePost}`}
                          onClick={likeftPost}
                        />
                      ) : (
                        <PiHeartStraightFill
                          className={`likeFtpost ${likePost}`}
                          onClick={likeftPost}
                        />
                      )}
                      <MdOutlineModeComment className="commentFtpost" />
                      <LuSend className="shareFtpost" />
                    </div>
                    <div className="wrcommentFtpost">
                      <input type="text" />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="featPost">
                  <div className="featPost-head">
                    <img src={sampPrf} alt="" />
                    <section>
                      <h1>Nathaniel</h1>
                      <span>10pm</span>
                    </section>
                  </div>
                  <div className="featPost-content">
                    <p>stupid ass cat</p>
                    <div className="imgFtpost">
                      <img src={samPost} alt="" />
                    </div>
                    <div className="ftreactIcons">
                      {!likePost ? (
                        <PiHeartStraightBold
                          className={`likeFtpost ${likePost}`}
                          onClick={likeftPost}
                        />
                      ) : (
                        <PiHeartStraightFill
                          className={`likeFtpost ${likePost}`}
                          onClick={likeftPost}
                        />
                      )}
                      <MdOutlineModeComment className="commentFtpost" />
                      <LuSend className="shareFtpost" />
                    </div>
                    <div className="wrcommentFtpost">
                      <input type="text" />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="featPost">
                  <div className="featPost-head">
                    <img src={sampPrf} alt="" />
                    <section>
                      <h1>Nathaniel</h1>
                      <span>10pm</span>
                    </section>
                  </div>
                  <div className="featPost-content">
                    <p>stupid ass cat</p>
                    <div className="imgFtpost">
                      <img src={samPost} alt="" />
                    </div>
                    <div className="ftreactIcons">
                      {!likePost ? (
                        <PiHeartStraightBold
                          className={`likeFtpost ${likePost}`}
                          onClick={likeftPost}
                        />
                      ) : (
                        <PiHeartStraightFill
                          className={`likeFtpost ${likePost}`}
                          onClick={likeftPost}
                        />
                      )}
                      <MdOutlineModeComment className="commentFtpost" />
                      <LuSend className="shareFtpost" />
                    </div>
                    <div className="wrcommentFtpost">
                      <input type="text" />
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div className="viewMoreftP">
              <button>view more</button>
            </div>
          </div>
        </div>
      </div>
      <div className="overlayImgs">
        <img src={daga} alt="" id='data'/>
      </div>
    </div>
  );
}

export default Featuredpost