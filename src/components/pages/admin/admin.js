import React, {useState,useEffect} from 'react'
// css
import '../../css/admin.css'
// icons
import { FaRegUser,FaSearch } from "react-icons/fa";
import { IoPawOutline,IoFishOutline } from "react-icons/io5";
import { BiPurchaseTag } from "react-icons/bi";
import { MdCardMembership,MdOutlineHealthAndSafety } from "react-icons/md";
import { LuBeef } from "react-icons/lu";
import { GiChickenOven,GiMeat } from "react-icons/gi";
import { AiOutlineMedicineBox } from "react-icons/ai";
import { CiMedicalCase } from "react-icons/ci";
import { TbMeat } from "react-icons/tb";
// assets
import sampImg from '../../assets/notes-male-avatar.png'
import userImg from '../../assets/outline-user-icon-1.png'
import loaderCat from '../../assets/purr-cat-in-the-pot-1.png'
// jsfile
import Sidenav from './sideNav'
// axis
import axios from 'axios'

// chart js
import BarChart from '../backend/charts/barchart';
import DoughnutChart from '../backend/charts/doughnotchart';
import BarChart2 from '../backend/charts/barchart2';
import LineChart from '../backend/charts/linechart';


const Admin = () => {
const [customerIDcount,setCustomeridcount] = useState('')
const [petIDcount,setPetidcount] = useState('')
const [petHealthissue,setPethealthissue] = useState([])
const [petHealthissuecat,setPethealthissuecat] = useState([])
const [petallergenlist,setPetallergenlist] = useState([])
const [petallergencategory,setPetallergencategory] = useState([])
const [petaverageOrder,setPetaverageorder] = useState([])
const [petoverallaverageOrder,setPetoverallaverageorder] = useState('')
const [petoveralwetlaverageOrder,setPetoverallwetaverageorder] = useState('')
const [petsubscriptioncount,setPetsubscriptioncount] = useState('')
const [petsubscriptionpercent,setPetsubscriptionpercent] = useState('')
const [foodTier,setPetfoodtier] = useState()
const [petgender,setGender] = useState()
const [breedsize,setBreedsize] = useState()
const [faveFlavor,setfaveFlavor] = useState()
const [petneutered,setPetneutered] = useState()
const [petLifestage,setPetlifestage] = useState()
const [dryfoodbrands,setDryfoodbrands] = useState()
const [totalkcal,setTotalkcal] = useState()

// search input
const [openModal,setOpenmodal] = useState(false)
const [searchData,setSearchdata] = useState()
const [resultSearch,setResult] = useState()

// loading data
const [dataOnload,setDataonload] = useState(false)

useEffect(() => {
    getCustomer()
    getPet()
    getPethealthissue()
    getPethealthissuecat()
    getPetallergen()
    getPetallergencategory()
    getPetoverallaverageorder()
    getPetoverallwetaverageorder()
    getPetsubscription()
    getFoodtier()
    getGender()
    getBreedsize()
    getFaveflavor()
    getNeutered()
    getPetlifestage()
    getDryfoodbrands()
    getTotalkcal()
}, [])

// handle onchange
const handleSearchbar = (event) => {
    setSearchdata(event.target.value)
}
// get customer
async function getCustomer() {
    try {
      const response = await axios.get('http://127.0.0.1:5000/customer_id/count');
      setCustomeridcount(response.data.count)
    } catch (error) {
      console.log(error);
    }
  }

// get pet 
async function getPet() {
    try {
      const response = await axios.get('http://127.0.0.1:5000/pet_id/count');
      setPetidcount(response.data.count)
    } catch (error) {
      console.log(error);
    }
  }
  
// get pet health issue
async function getPethealthissue() {
    try {
      const response = await axios.get('http://127.0.0.1:5000/pet_health_issues');
      setPethealthissue(response.data)
    } catch (error) {
      console.log(error);
    }
  }
// get pet health issue
async function getPethealthissuecat() {
    try {
      const response = await axios.get('http://127.0.0.1:5000/health_issue_category_counts');
      setPethealthissuecat(response.data)
    } catch (error) {
      console.log(error);
    }
  }
// get pet allergen list
async function getPetallergen() {
    try {
      const response = await axios.get('http://127.0.0.1:5000/pet_allergen_list');
      setPetallergenlist(response.data)
    } catch (error) {
      console.log(error);
    }
  }
// get pet allergen category
async function getPetallergencategory() {
    try {
    const response = await axios.get('http://127.0.0.1:5000/pet_allergen_category_counts');
    setPetallergencategory(response.data)
    } catch (error) {
    console.log(error);
    }
}

// get pet average order no.
async function getPetaverageorder() {
    try {
    const response = await axios.get('http://127.0.0.1:5000/total_average_order_numbers');
    setPetaverageorder(response.data)
    } catch (error) {
    console.log(error);
    }
}

// get pet over all average order no.
async function getPetoverallaverageorder() {
    try {
    const response = await axios.get('http://127.0.0.1:5000/total_average_order_numbers');
    setPetoverallaverageorder(response.data.total_average_order_number)
    } catch (error) {
    console.log(error);
    }
}
// get pet over all average wet order no.
async function getPetoverallwetaverageorder() {
    try {
    const response = await axios.get('http://127.0.0.1:5000/total_average_wet_food_order_numbers');
    setPetoverallwetaverageorder(response.data.total_average_order_number)
    } catch (error) {
    console.log(error);
    }
}

// get pet subscription percent and count
async function getPetsubscription() {
    try {
    const response = await axios.get('http://127.0.0.1:5000/subscription_statistics');
    setPetsubscriptioncount(response.data.pets_with_subscription)
    setPetsubscriptionpercent(response.data.percentage_with_subscription)
    } catch (error) {
    console.log(error);
    }
}

// // get pet over all average order no.
async function getFoodtier() {
    try {
    const response = await axios.get('http://127.0.0.1:5000/food_tier_category_counts');
    setPetfoodtier(response.data)
    } catch (error) {
    console.log(error);
    }
}
// // get pet gender
async function getGender() {
    try {
    const response = await axios.get('http://127.0.0.1:5000/gender_category_counts');
    setGender(response.data)
    } catch (error) {
    console.log(error);
    }
}
// // get pet breed seze
async function getBreedsize() {
    try {
    const response = await axios.get('http://127.0.0.1:5000/breed_size_category_counts');
    setBreedsize(response.data)
    } catch (error) {
    console.log(error);
    }
}
// // get pet fave flavor
async function getFaveflavor() {
    try {
    const response = await axios.get('http://127.0.0.1:5000/favorite_flavor_category_counts');
    setfaveFlavor(response.data)
    } catch (error) {
    console.log(error);
    }
}
// // get pet fave flavor
async function getNeutered() {
    try {
    const response = await axios.get('http://127.0.0.1:5000/neutered_category_counts');
    setPetneutered(response.data)
    } catch (error) {
    console.log(error);
    }
}
// // get pet life stage
async function getPetlifestage() {
    try {
    const response = await axios.get('http://127.0.0.1:5000/life_stage_category_counts');
    setPetlifestage(response.data)
    } catch (error) {
    console.log(error);
    }
}
// // get pet dry foo brands
async function getDryfoodbrands() {
    try {
    const response = await axios.get('http://127.0.0.1:5000/dry_food_brand_category_counts');
    setDryfoodbrands(response.data)
    } catch (error) {
    console.log(error);
    }
}

// // get total kcal
async function getTotalkcal() {
    try {
    const response = await axios.get('http://127.0.0.1:5000/total_order_kcal');
    setTotalkcal(response.data.total_order_kcal)
    setDataonload(true)
    } catch (error) {
    console.log(error);
    }
}

// search input
async function getSearchdata() {
    try {
        setOpenmodal(true)
        const response = await axios.get('http://127.0.0.1:5000/search', {
          params: {
            "id": searchData
          }
        });
        setResult(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('There was an error!', error);
        setResult(null);
      }
}

const closeModal = () => {
    setOpenmodal(false)
}
// loader
if (!dataOnload) {
    return(
        <>
            <div className="loading-data">
                <div className="catLoader">
                    <img src={loaderCat} alt="" />
                    <h1>waiting for data to load..</h1>
                </div>
            </div>
        </>
    )
}


  return (
    <div className="admin">
        <div className={`adsearchModal ${openModal}`}>
            <div className="adsm-container">
                {!resultSearch&&(
                    <div className="modalCatload">
                        <section>
                            <img src={loaderCat} alt="" />
                            <h1>searching for : ' {searchData} '</h1>
                        </section>
                    </div>
                )}
                {resultSearch&&(<>
                <div className="adsm-header">
                    <p>Results for : "{searchData}"</p>
                    <span onClick={closeModal}>x</span>
                </div>
                <div className="adsm-contents">
                    <div className="searchProf">
                        <div className="adsm-profimg">
                            <img src={userImg} alt="" />
                        </div>
                        <div className="adsm-prof-text">
                            <h1>no username registered</h1>
                            <span>username</span>
                            <h1>{resultSearch[0].customer_id}</h1>
                            <span>customer id</span>
                            <h1>{resultSearch[0].pet_has_active_subscription}</h1>
                            <span>pet active subscription</span>
                            <h1>{resultSearch[0].signup_promo}</h1>
                            <span>sign up promo</span>
                        </div>
                    </div>
                    <div className="searchprof-details">
                        <div className="orderInfo">
                            <li>
                                <h1>{resultSearch[0].pet_order_number}</h1>
                                <span>pet order</span>
                            </li>
                            <li>
                                <h1>{resultSearch[0].wet_food_order_number}</h1>
                                <span>wet food order</span>
                            </li>
                            <li>
                                <h1>{resultSearch[0].total_order_kcal}</h1>
                                <span>total order kcal</span>
                            </li>
                            <li>
                                <h1>{resultSearch[0].customer_support_ticket_category}</h1>
                                <span>customer support ticket</span>
                            </li>
                        </div>
                    </div>
                    <div className="adsm-petInfo">
                        <div className="petInfo">
                            <h2>Pet info</h2>
                            <hr />
                            <h1>no name registeredd</h1>
                            <span>pet name</span>
                            <h1>{resultSearch[0].pet_id}</h1>
                            <span>pet id</span>
                            <h1>{resultSearch[0].gender}</h1>
                            <span>gender</span>
                            <h1>{resultSearch[0].pet_breed_size}</h1>
                            <span>breed size</span>
                        </div>
                        <div className="petfod-fave">
                            <h2>Pet consumes</h2>
                            <hr />
                            <h1>{resultSearch[0].pet_food_tier}</h1>
                            <span>pet food tier</span>
                            <h1>{resultSearch[0].pet_fav_flavour_list}</h1>
                            <span>pet favorite flavor</span>
                            <h1>{resultSearch[0].dry_food_brand_pre_tails}</h1>
                            <span>dry food preTails</span>
                            <h1>{resultSearch[0].kibble_kcal}</h1>
                            <span>kibble kcal</span>
                            <h1>{resultSearch[0].wet_kcal}</h1>
                            <span>wet kcal</span>
                            <h1>{resultSearch[0].premium_treat_packs}</h1>
                            <span>premium treats</span>
                            <h1>{resultSearch[0].dental_treat_packs}</h1>
                            <span>dental treats</span>
                            <h1>{resultSearch[0].wet_food_textures_in_order}</h1>
                            <span>wet food texture</span>
                        </div>
                        <div className="adsmpet-health">
                            <h2>Pet Health</h2>
                            <hr />
                            <h1>{resultSearch[0].pet_life_stage_at_order}</h1>
                            <span>life stage</span>
                            <h1>{resultSearch[0].pet_health_issue_list}</h1>
                            <span>health issue</span>
                            <h1>{resultSearch[0].pet_allergen_list}</h1>
                            <span>allergen list</span>
                            <h1>{resultSearch[0].neutered}</h1>
                            <span>neutered</span>
                        </div>
                    </div>
                </div>
                </>)}
            </div>
        </div>
        <div className="mainAdmin">
            <div className="admin-container">
                <div className="admin-header">
                    <section>
                        <img src={sampImg} alt="" />
                        <div className="adminUser">
                            <h1>hope</h1>
                            <p>developer</p>
                        </div>
                    </section>
                    <div className="adminSearch">
                        <div className="adSearch">
                            <input type="text" placeholder='search customer or pet id here...' value={searchData} onChange={handleSearchbar}/>
                            <FaSearch id='adSearchicon' onClick={getSearchdata}/>
                        </div>
                    </div>
                </div>
                <div className="admin-contents">
                    {/* <section>
                        <Sidenav/>
                    </section> */}
                    <section>
                        <ul className='adlist1'>
                            <div className="customerPet-count">
                                <li>
                                    <div>
                                        <h1>Customer Count</h1>
                                        <span><FaRegUser /></span>
                                        <p>{!customerIDcount ? "N/A" : customerIDcount}</p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <h1>Pet Count</h1>
                                        <span><IoPawOutline /></span>
                                        <p>{!petIDcount ? "N/A" : petIDcount}</p>
                                    </div>
                                </li>
                            </div>
                            <li className='adpetHissue'>
                                <div>
                                    <h1>Pet Health Issue</h1>
                                    <p><MdOutlineHealthAndSafety/></p>
                                </div>
                                    {petHealthissuecat&&(
                                        <>
                                        <div className='issue'>
                                            <h1>Digestion</h1>
                                            <p>{petHealthissuecat.digestion}</p>
                                        </div>
                                        <div className='issue'>
                                            <h1>Joints</h1>
                                            <p>{petHealthissuecat.joints}</p>
                                        </div>
                                        <div className='issue'>
                                            <h1>Pancreatitis</h1>
                                            <p>{petHealthissuecat.pancreatitis}</p>
                                        </div>
                                        <div className='issue'>
                                            <h1>Skin</h1>
                                            <p>{petHealthissuecat['skin and coat']}</p>
                                        </div>
                                        </>
                                    )}
                                {/* <p>{!petHealthissue ? "N/A" : petHealthissue}</p> */}
                            </li>
                        </ul>
                        <ul className='adlist2'>
                            <li className='admostOrder'>
                                <div>
                                    <h1>total order kcal</h1>
                                    <span><GiMeat /></span>
                                    {totalkcal&&(<p>{totalkcal}</p>)}
                                </div>
                            </li>
                            <div className="petOrder-subscription">
                                <li>
                                    <div>
                                        <h1>overall average pet food order</h1>
                                        <span><BiPurchaseTag /></span>
                                        <p>{!petoverallaverageOrder ? "N/A" : petoverallaverageOrder}</p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <h1>pet with active subscription</h1>
                                        <span><MdCardMembership /></span>
                                        <p>{!petsubscriptionpercent ? "N/A" : petsubscriptionpercent}%</p>
                                    </div>
                                </li>
                            </div>
                        </ul>
                        <ul className='adlist3'>
                            <li>
                                {dryfoodbrands&&(<LineChart data={dryfoodbrands} />)}
                            </li>
                        </ul>
                    </section>
                    <section>
                        <ul className="adgender-size">
                            <div className="admost-ordered">
                                <li>
                                    {petLifestage&&(<BarChart data={petLifestage}/>)}
                                </li>
                            </div>
                            <div className="adgenderSize">
                                <li>
                                    <h2>Pet Gender</h2>
                                    <div id='petGender'>
                                        <h1>female</h1>
                                        <p>{!petgender ? "N/A" : petgender.female}</p>
                                    </div>
                                    <div id='petGender'>
                                        <h1>male</h1>
                                        <p>{!petgender ? "N/A" : petgender.male}</p>
                                    </div>
                                </li>
                                <li id='listBreed'>
                                    <div id='breedSize'>
                                        <p>{!breedsize ? "N/A" : breedsize.toy}</p>
                                        <h1>toy</h1>
                                    </div>
                                    <div id='breedSize'>
                                        <p>{!breedsize ? "N/A" : breedsize.small}</p>
                                        <h1>small</h1>
                                    </div>
                                    <div id='breedSize'>
                                        <p>{!breedsize ? "N/A" : breedsize.medium}</p>
                                        <h1>medium</h1>
                                    </div>
                                    <div id='breedSize'>
                                        <p>{!breedsize ? "N/A" : breedsize.large}</p>
                                        <h1>large</h1>
                                    </div>
                                    <div id='breedSize'>
                                        <p>{!breedsize ? "N/A" : breedsize.giant}</p>
                                        <h1>giant</h1>
                                    </div>
                                </li>
                            </div>
                        </ul>
                    </section>
                    <section>
                        <ul className='adpetlife-neutered'>
                            <li className='adpetLife'>
                                {faveFlavor&&(
                                <>
                                <div>
                                    <h1>Beef</h1>
                                    <span><LuBeef /></span>
                                    <p>{!faveFlavor ? "N/A" : faveFlavor.Beef}</p>
                                </div>
                                <div>
                                    <h1>Chicken</h1>
                                    <span><GiChickenOven /></span>
                                    <p>{!faveFlavor ? "N/A" : faveFlavor.Chicken}</p>
                                </div>
                                <div>
                                    <h1>Fish</h1>
                                    <span><IoFishOutline /></span>
                                    <p>{!faveFlavor ? "N/A" : faveFlavor.Fish}</p>
                                </div>
                                <div>
                                    <h1>Lamb</h1>
                                    <span><TbMeat /></span>
                                    <p>{!faveFlavor ? "N/A" : faveFlavor.Lamb}</p>
                                </div>
                                </>
                                )}
                            </li>
                            <li className='adneutered'>
                                <div>
                                    <h1>pet neutered</h1>
                                    <span><CiMedicalCase /></span>
                                    <p>{!petneutered ? "N/A" : petneutered.true}</p>
                                </div>
                            </li>
                        </ul>
                    </section>
                    <section className='addataLast'>
                        <ul>
                            <li className='adAllergen'>
                                {foodTier&&(<DoughnutChart data={foodTier}/>)}
                            </li>
                            <li className='addryFood'>
                                {petallergencategory&&(<BarChart2 data={petallergencategory}/>)}
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Admin