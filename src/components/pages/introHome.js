import React,{useState,useEffect} from 'react'
// css
import '../css/introHome.css'
// icons
import { PiHeartStraightBold,PiHeartStraightFill  } from "react-icons/pi";
import { MdOutlineModeComment } from "react-icons/md";
import { LuSend } from "react-icons/lu";
import { IoMdSend } from "react-icons/io";
// assets
import pawLogo from '../assets/logoname.png'
import shopcat from '../assets/intro.png'
import apple from '../assets/purr-apple.png'
import fish from '../assets/purr-fish-5.png'
import jar from '../assets/purr-jar-with-cookies.png'
import prof from '../assets/notes-male-avatar.png'
import stupidcat from '../assets/purr-online-shopping.png'
import why from '../assets/why.png'
import spyCat from '../assets/purr-cat-sitting-and-playing-with-a-spider.png'
import emily from '../assets/purr-two-cats-stretching-their-hind-legs.png'
import selfie from '../assets/purr-camera-access.png'

const Introhome = ({ onOpensignin }) => {
  // useState
  const [localCurbuyer, setLocalcurbuyer] = useState();
  const [likePost, setLikepost] = useState(false)


  const likeftPost = () => {
      setLikepost(likePost=>!likePost)
  }


  useEffect(() => {
    handlelocalBuyer();
  }, []);

  const openCreate = () => {
    onOpensignin(true);
  };

  const handlelocalBuyer = () => {
    const data = localStorage.getItem("currentUser");
    setLocalcurbuyer(data);
  };

  
  return (
    <div className="introHome">
      <div className="introHomemain">
        <div className="intHome-container">
          <div className="intHome-contents">
            <section>
              <div className="floatingImages">
                <img src={apple} alt="" id="apple" />
                <img src={fish} alt="" id="fish" />
                <img src={jar} alt="" id="jar" />
              </div>
              <div className="intTexthome">
                <h1>welcome to</h1>
                <div className="pawLogointro">
                  <img src={pawLogo} alt="" />
                </div>
                <p>Your Pet's Favorite Online Food Store!</p>
                <div className="introBtns">
                  <button>shop now</button>
                  {!localCurbuyer && (
                    <button onClick={openCreate}>create account</button>
                  )}
                </div>
              </div>
            </section>
            <section>
              <img src={shopcat} alt="" className="shoopCat" />
            </section>
          </div>
          <div className="mbsamplePost">
            <div className="samplepostHeader">
              <div className="mbProf">
                <img src={prof} alt="" />
              </div>
              <div className="mbsp-name">
                <section>
                  <h1>Nathaniel</h1>
                  <p>24hrs ago</p>
                </section>
              </div>
            </div>
            <div className="mbSamppost">
              <div className="mbsampCap">
                <p>Welcome to Pawsome. can you just by this stupid cat please.</p>
              </div>
              <div className="mbpost">
                <img src={stupidcat} alt="" />
              </div>
              <div className="mbsampostIcons">
                <div className="mbsampReacts">
                  {!likePost ? (
                    <PiHeartStraightBold
                      className={`sampPostlike ${likePost}`}
                      onClick={likeftPost}
                      id='sampReacts'
                    />
                  ) : (
                    <PiHeartStraightFill
                      className={`sampPostlike ${likePost}`}
                      onClick={likeftPost}
                      id='sampReacts'
                    />
                  )}
                  <MdOutlineModeComment className="sampcommentFtpost" id='sampReacts'/>
                  <LuSend className="sampshareFtpost" id='sampReacts'/>
                </div>
                <div className="msampComment">
                  <section>
                    <input type="text" />
                    <IoMdSend className='mbSendcomment'/>
                  </section>
                </div>
              </div>
            </div>
          </div>
          <div className="mbsamplePost">
            <div className="samplepostHeader">
              <div className="mbProf">
                <img src={prof} alt="" />
              </div>
              <div className="mbsp-name">
                <section>
                  <h1>Nathaniel</h1>
                  <p>24hrs ago</p>
                </section>
              </div>
            </div>
            <div className="mbSamppost">
              <div className="mbsampCap">
                <p>buy my products, im in debt</p>
              </div>
              <div className="mbpost">
                <img src={why} alt="" />
              </div>
              <div className="mbsampostIcons">
                <div className="mbsampReacts">
                  {!likePost ? (
                    <PiHeartStraightBold
                      className={`sampPostlike ${likePost}`}
                      onClick={likeftPost}
                      id='sampReacts'
                    />
                  ) : (
                    <PiHeartStraightFill
                      className={`sampPostlike ${likePost}`}
                      onClick={likeftPost}
                      id='sampReacts'
                    />
                  )}
                  <MdOutlineModeComment className="sampcommentFtpost" id='sampReacts'/>
                  <LuSend className="sampshareFtpost" id='sampReacts'/>
                </div>
                <div className="msampComment">
                  <section>
                    <input type="text" />
                    <IoMdSend className='mbSendcomment'/>
                  </section>
                </div>
              </div>
            </div>
          </div>
          <div className="mbsamplePost">
            <div className="samplepostHeader">
              <div className="mbProf">
                <img src={prof} alt="" />
              </div>
              <div className="mbsp-name">
                <section>
                  <h1>Nathaniel</h1>
                  <p>24hrs ago</p>
                </section>
              </div>
            </div>
            <div className="mbSamppost">
              <div className="mbsampCap">
                <p>Whether your pet prefers kibble, wet food, or treats, we offer a wide range of options to suit every taste and dietary requirement.</p>
              </div>
              <div className="mbsampostIcons">
                <div className="mbsampReacts">
                  {!likePost ? (
                    <PiHeartStraightBold
                      className={`sampPostlike ${likePost}`}
                      onClick={likeftPost}
                      id='sampReacts'
                    />
                  ) : (
                    <PiHeartStraightFill
                      className={`sampPostlike ${likePost}`}
                      onClick={likeftPost}
                      id='sampReacts'
                    />
                  )}
                  <MdOutlineModeComment className="sampcommentFtpost" id='sampReacts'/>
                  <LuSend className="sampshareFtpost" id='sampReacts'/>
                </div>
                <div className="msampComment">
                  <section>
                    <input type="text" />
                    <IoMdSend className='mbSendcomment'/>
                  </section>
                </div>
              </div>
            </div>
          </div>
          <div className="mbsamplePost">
            <div className="samplepostHeader">
              <div className="mbProf">
                <img src={prof} alt="" />
              </div>
              <div className="mbsp-name">
                <section>
                  <h1>Nathaniel</h1>
                  <p>24hrs ago</p>
                </section>
              </div>
            </div>
            <div className="mbSamppost">
              <div className="mbsampCap">
                <p>We handpick only the finest ingredients for our pet food, ensuring that your furry friend gets the nutrition they deserve.</p>
              </div>
              <div className="mbsampostIcons">
                <div className="mbsampReacts">
                  {!likePost ? (
                    <PiHeartStraightBold
                      className={`sampPostlike ${likePost}`}
                      onClick={likeftPost}
                      id='sampReacts'
                    />
                  ) : (
                    <PiHeartStraightFill
                      className={`sampPostlike ${likePost}`}
                      onClick={likeftPost}
                      id='sampReacts'
                    />
                  )}
                  <MdOutlineModeComment className="sampcommentFtpost" id='sampReacts'/>
                  <LuSend className="sampshareFtpost" id='sampReacts'/>
                </div>
                <div className="msampComment">
                  <section>
                    <input type="text" />
                    <IoMdSend className='mbSendcomment'/>
                  </section>
                </div>
              </div>
            </div>
          </div>
          <div className="mbsamplePost">
            <div className="samplepostHeader">
              <div className="mbProf">
                <img src={prof} alt="" />
              </div>
              <div className="mbsp-name">
                <section>
                  <h1>Nathaniel</h1>
                  <p>24hrs ago</p>
                </section>
              </div>
            </div>
            <div className="mbSamppost">
              <div className="mbsampCap">
                <p>yooooo, this cat can send a selfie!</p>
              </div>
              <div className="mbpost">
                <img src={selfie} alt="" />
              </div>
              <div className="mbsampostIcons">
                <div className="mbsampReacts">
                  {!likePost ? (
                    <PiHeartStraightBold
                      className={`sampPostlike ${likePost}`}
                      onClick={likeftPost}
                      id='sampReacts'
                    />
                  ) : (
                    <PiHeartStraightFill
                      className={`sampPostlike ${likePost}`}
                      onClick={likeftPost}
                      id='sampReacts'
                    />
                  )}
                  <MdOutlineModeComment className="sampcommentFtpost" id='sampReacts'/>
                  <LuSend className="sampshareFtpost" id='sampReacts'/>
                </div>
                <div className="msampComment">
                  <section>
                    <input type="text" />
                    <IoMdSend className='mbSendcomment'/>
                  </section>
                </div>
              </div>
            </div>
          </div>
          <div className="mbsamplePost">
            <div className="samplepostHeader">
              <div className="mbProf">
                <img src={prof} alt="" />
              </div>
              <div className="mbsp-name">
                <section>
                  <h1>Nathaniel</h1>
                  <p>24hrs ago</p>
                </section>
              </div>
            </div>
            <div className="mbSamppost">
              <div className="mbsampCap">
                <p>Our products are formulated by pet nutrition experts to promote overall health and vitality, supporting your pet's well-being from nose to tail.</p>
              </div>
              <div className="mbsampostIcons">
                <div className="mbsampReacts">
                  {!likePost ? (
                    <PiHeartStraightBold
                      className={`sampPostlike ${likePost}`}
                      onClick={likeftPost}
                      id='sampReacts'
                    />
                  ) : (
                    <PiHeartStraightFill
                      className={`sampPostlike ${likePost}`}
                      onClick={likeftPost}
                      id='sampReacts'
                    />
                  )}
                  <MdOutlineModeComment className="sampcommentFtpost" id='sampReacts'/>
                  <LuSend className="sampshareFtpost" id='sampReacts'/>
                </div>
                <div className="msampComment">
                  <section>
                    <input type="text" />
                    <IoMdSend className='mbSendcomment'/>
                  </section>
                </div>
              </div>
            </div>
          </div>
          <div className="sampAddpip">
            <div className="sampips">
              <div className="sampipsheader">
                <h1>look for adorable babies</h1>
                <section>
                  <div className="samPetscard">
                    <div className="sPetspf">
                      <img src={spyCat} alt="" />
                    </div>
                    <h1>cat rodriguez</h1>
                    <div className="sampAdd">
                      <p>add fur-baby</p>
                    </div>
                  </div>
                  <div className="samPetscard">
                    <div className="sPetspf">
                      <img src={emily} alt="" />
                    </div>
                    <h1>emily perez</h1>
                    <div className="sampAdd">
                      <p>add fur-baby</p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <div className="mbsamplePost">
            <div className="samplepostHeader">
              <div className="mbProf">
                <img src={prof} alt="" />
              </div>
              <div className="mbsp-name">
                <section>
                  <h1>Nathaniel</h1>
                  <p>24hrs ago</p>
                </section>
              </div>
            </div>
            <div className="mbSamppost">
              <div className="mbsampCap">
                <p>Say goodbye to last-minute trips to the store! With Pawsome, you can order your pet's favorite food from the comfort of your home and have it delivered straight to your doorstep.</p>
              </div>
              <div className="mbsampostIcons">
                <div className="mbsampReacts">
                  {!likePost ? (
                    <PiHeartStraightBold
                      className={`sampPostlike ${likePost}`}
                      onClick={likeftPost}
                      id='sampReacts'
                    />
                  ) : (
                    <PiHeartStraightFill
                      className={`sampPostlike ${likePost}`}
                      onClick={likeftPost}
                      id='sampReacts'
                    />
                  )}
                  <MdOutlineModeComment className="sampcommentFtpost" id='sampReacts'/>
                  <LuSend className="sampshareFtpost" id='sampReacts'/>
                </div>
                <div className="msampComment">
                  <section>
                    <input type="text" />
                    <IoMdSend className='mbSendcomment'/>
                  </section>
                </div>
              </div>
            </div>
          </div>
          <div className="mbsamplePost">
            <div className="samplepostHeader">
              <div className="mbProf">
                <img src={prof} alt="" />
              </div>
              <div className="mbsp-name">
                <section>
                  <h1>Nathaniel</h1>
                  <p>24hrs ago</p>
                </section>
              </div>
            </div>
            <div className="mbSamppost">
              <div className="mbsampCap">
                <p>We believe that every pet deserves the best without breaking the bank. That's why we offer competitive prices and regular discounts to make caring for your pet more accessible.</p>
              </div>
              <div className="mbsampostIcons">
                <div className="mbsampReacts">
                  {!likePost ? (
                    <PiHeartStraightBold
                      className={`sampPostlike ${likePost}`}
                      onClick={likeftPost}
                      id='sampReacts'
                    />
                  ) : (
                    <PiHeartStraightFill
                      className={`sampPostlike ${likePost}`}
                      onClick={likeftPost}
                      id='sampReacts'
                    />
                  )}
                  <MdOutlineModeComment className="sampcommentFtpost" id='sampReacts'/>
                  <LuSend className="sampshareFtpost" id='sampReacts'/>
                </div>
                <div className="msampComment">
                  <section>
                    <input type="text" />
                    <IoMdSend className='mbSendcomment'/>
                  </section>
                </div>
              </div>
            </div>
          </div>
          <div className="mbviewMorepost">
            <button>view more post</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introhome;
