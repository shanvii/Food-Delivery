import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplayTwo from '../../components/FoodDisplayTwo/FoodDisplayTwo'
import AppDownload from '../../components/AppDownload/AppDownload'
import Footer from '../../components/Footer/Footer'

const Home = () => {

  const [category,setCategory] = useState("All");

  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplayTwo category={category} />
      <AppDownload/>
    </div>
  )
}

export default Home
