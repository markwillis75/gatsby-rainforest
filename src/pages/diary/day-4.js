import React from "react"

import Layout from "../../components/layout"

import image1 from "./../../images/Day-4-native-tribe.jpg"
import image2 from "./../../images/hannah-stick.jpg"

const DayFour = () => (
  <Layout>
    <h1>Day 4 – 08/02/2020 </h1>
    <p>Today Pedro had arranged for a visit to an Amazonian camp to meet native
     tribe people.  They don’t speak English so Pedro had to translate for us.
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <img alt="" src={image1}/>
    </div>
    <p>
       They told us all about their way of life which was fascinating because
        it is so different compared to life in Ireland.  They never leave the
        rainforest, they have to hunt for all their food and learn about what
         foods are ok to eat or poisonous.  They make all their own clothes and
         build their own houses.
    </p>
    <p>
    They wanted us to stay for lunch and we had a
    delicious meal of fish wrapped in banana leaves – it was nice to
    taste all the local ingredients.   When we were leaving, they gave us
     a souvenir – it was a curved stick and it said “May you always feel loved”.
       I thought the gift was very original and it meant a lot to
       them and me. </p>

    <p>When we returned tour tents, some snakes were in one of the tents!
     We thought they were poisonous but Pedro told us they were Emerald Tree
      Snakes and they are non-venomous – thankfully!  </p>

      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <img alt="" src={image2}/>
      </div>

  </Layout>
)


export default DayFour
