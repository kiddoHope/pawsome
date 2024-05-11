import { useEffect } from "react";
// js backend
import { retrieveUser } from "./database";

const Fetchbuyers = ({ onDatafetchedlocalbuyer, onDatafetchbuyers }) => {
  // useEffect
  useEffect(() => {
    fetchLocalBuyer();
    fetchBuyerlist();
    return () => {
      fetchLocalBuyer();
      fetchBuyerlist();
    };
  }, []);

  // fetch local session & user
  const fetchLocalBuyer = () => {
    // login Session
    const localLoginsession = localStorage.getItem("loginBuyerlocalSession");
    console.log(localLoginsession);
    if (localLoginsession === null) {
      console.log("no data");
    } else {
      const localUser = localStorage.getItem("currentBuyer");
      const jsonData = JSON.parse(localUser);
      console.log(jsonData);
      onDatafetchedlocalbuyer(jsonData);
    }
  };

  // fetch local session & user
  // const fetchBuyers = () => {
  //   // login Session
  //   // const localLoginsession = localStorage.getItem("loginBuyerlocalSession");
  //   // if (localLoginsession === "") {
  //   //   console.log("no data");
  //   // } else {
  //     fetchBuyerlist();
  //   // }
  // };

  async function fetchBuyerlist() {
    try {
      const response = await fetch(retrieveUser);
      const data = await response.json();
      console.log(data);
      onDatafetchbuyers(data);
    } catch (error) {
      console.log(error);
    }
  }
  return null;
};

export default Fetchbuyers;
