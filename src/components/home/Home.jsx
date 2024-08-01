import React from 'react'
import Banner from './Banner'
import Journey from './Journey'
import Universallifechurch from './Universallifechurch'
import Latestblogs from './Latestblogs'

const Home = () => {
  return (
    <>
      <Banner bannerheading='We are All Children of the  Same Universe' subheading='George Freeman' />
      <Journey />
      <Universallifechurch />
      <Latestblogs />
    </>
  )
}

export default Home