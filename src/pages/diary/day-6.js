import React from "react"

import Layout from "../../components/layout"
import image1 from "./../../images/howler-monkeys.jpg"

const DaySix = () => (
  <Layout>
    <h1>Day 6 – 10/02/2020 </h1>

    <p>Today I am going home.  I will miss Megan the Monkey and all the other
     wildlife in the rainforest, though I won’t miss that howler monkey!!
    </p>

    <p>The highlight of my trip has been seeing the Harpy Eagle.   The scariest
      moment was finding snakes in our tent.  I am sad to be leaving because I
       have had so much fun and made so many amazing memories, but I will be
       happy to eat again with a knife and fork and sleep on a mattress!
       The Amazon Rainforest is definitely unlike any other
       place in the world! </p>
       <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
         <img alt="" src={image1}/>
       </div>

  </Layout>
)

export default DaySix
