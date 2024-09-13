import React, { useEffect,useState } from "react";
import './Header.css'
import Social from "./Social";
import AppsDisplay from "./AppsDisplay";
import axios from 'axios'

const tabsList = [
    {tabId: 'SOCIAL', displayText: 'Social'},
    {tabId: 'GAMES', displayText: 'Games'},
    {tabId: 'NEWS', displayText: 'News'},
    {tabId: 'FOOD', displayText: 'Food'},
  ]

const Header = () => {

    const [current,setCurrent]=useState(tabsList[0].tabId)
    const [cursrch,setCursrch]=useState("")

    function onSrch(event){
      setCursrch(event.target.value)
    }

    async function getSearchResults () {
      const response=await axios.get('http://localhost:5000/apps')
      const listapps=response.data
      if(cursrch===''){
        const show=listapps.filter(item=>item.category === current)
        return show
      }
      else{
        const match=listapps.filter(item=>item.appName.toLowerCase().includes(cursrch.toLowerCase()))
        return match
      }
  }

  const [align,setAlign]=useState([])

  async function fetchData(){
    const appData=await getSearchResults()
    setAlign(appData)
  }

  useEffect(()=>{fetchData();})



  return (
    <div className="bg-container">
        <h1 className="heading">App Store</h1>
        <div className="search-container">
          <input
            type="search"
            className="search"
            placeholder='🔍 Search Apps'
            onChange={onSrch}
          />
        </div>
         <ul className="tabs-container">
          {tabsList.map(eachItem => (
            <Social
              tabDetails={eachItem}
              key={eachItem.tabId}
              onClickTabUpdate={(value)=>setCurrent(value)}
              isActive={eachItem.tabId === current}
            />
          ))}
        </ul>
        <ul className="apps-container">
          {align.map(eachItem => (
            <AppsDisplay appDetails={eachItem} key={eachItem.appId} />
          ))}
        </ul>
      </div>
  )
};

export default Header;
