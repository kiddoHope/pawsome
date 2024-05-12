import { useEffect, useState } from "react";
// js backend
import { retrieveUser } from "./database";
import Usermodalsign from "../modals/signInuser";

const Fetchbuyers = ({ onDatafetchedlocalbuyer, onDatafetchbuyers }) => {
  const [database, setDatabase] = useState();
  const [localDatausers, setLocaldatausers] = useState();

  // useEffect
  useEffect(() => {
    fetchLocalBuyer();
    fetchBuyers();
  }, []);

  // fetch local session & user
  const fetchLocalBuyer = () => {
    // login Session
    const localLoginsession = localStorage.getItem("loginBuyerlocalSession");
    console.log(localLoginsession);
    if (localLoginsession === "") {
      console.log("no data");
    } else {
      const localUser = localStorage.getItem("currentUser");
      const jsonData = JSON.stringify(localUser);
      onDatafetchedlocalbuyer(jsonData);
    }
  };

  // fetch local session & user
  const fetchBuyers = async () => {
    // login Session
    const localLoginsession = localStorage.getItem("loginBuyerlocalSession");
    if (localLoginsession === "") {
      await fetchBuyerlist();
    } else {
      localStorage.setItem("localStorageuserList", '');
      const setLocaluser = localStorage.getItem("localStorageuserList");
      setLocaldatausers(setLocaluser);
    }
  };

  async function fetchBuyerlist() {
    try {
      const response = await fetch(retrieveUser);
      const data = await response.json();
      const json = JSON.stringify(data);
      setDatabase(json);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <Usermodalsign fromFetch={database} />
    </>
  );
};

export default Fetchbuyers;
