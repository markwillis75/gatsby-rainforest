import React from "react"

import Layout from "../../components/layout"
import image1 from "./../../images/Day-2-cabin.png"
import image2 from "./../../images/day-2-rainforest-plants.jpg"

const DayTwo = () => (
  <Layout>
    <h1>Day 2 – 06/02/2020 </h1>
    <p>Last night I did not get much sleep as the howler monkey was howling!</p>

    <p>
     Today I woke up to the chirping and screeching of all the birds and animals
      of the rainforest, the forest was alive!   It was very hot today, it felt
       like 100 degrees!
    </p>
    <p>
    After breakfast, we went on a walk with Pedro and he showed us
       many plants that are used to make medicines, they were very vibrant!  We spent
       the day exploring the forest floor and we saw lots of wildlife
        like snakes, geckos and toads – it was very exciting, though Pedro explained we had
         to be careful as some of them are very dangerous and could harm us.
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <img alt="" src={image2}/>
    </div>
    <p>
     We came back to the lodge for the evening and had some traditional
      Amazonian food of fish and cassava (like potatoes).
    </p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <img alt="" src={image1}/>
      </div>
  </Layout>
)


export default DayTwo
