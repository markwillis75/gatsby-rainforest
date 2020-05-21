import React from "react"

import Layout from "../../components/layout"
import image1 from "./../../images/hannah-megan-1.jpg"
import image2 from "./../../images/megan.jpg"

const DayThree = () => (
  <Layout>
    <h1>Day 3 – 07/02/2020 </h1>
    <p>This morning we packed up our things and set off for a days adventure.
      I was amazed at how tall the trees were in this part of the rainforest.
       Pedro told us that they were 165ft, some even taller and they were at
        least 100 years old.</p>

    <p>Today we saw a group of Spider Monkeys, one of the little Spider monkeys
    came down and started climbing on me.  I thought she was so cute and named her Megan!</p>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <img alt="" src={image1}/>
    </div>

    <p>Later we went for an evening walk and a Blue Morpho butterfly landed on me
    – it was so tickly and a great day for meeting wildlife! </p>

    <p>Tonight we are camping in tents on the forest floor – Pedro has told us to
    be aware of animals that will be around us and not to touch anything, it’s a bit scary! </p>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <img alt="" src={image2}/>
    </div>

  </Layout>
)


export default DayThree
