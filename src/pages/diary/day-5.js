import React from "react"

import Layout from "../../components/layout"
import image1 from "./../../images/Day-5-harpy-eagle.jpg"
import image2 from "./../../images/hannah-look-up.jpg"
const DayFive = () => (
  <Layout>
    <h1>Day 5 – 09/02/2020 </h1>

    <p>I am now getting used to the noises of the rainforest and I slept well
    last night in our tent on the forest floor.
    </p>

    <p>Today Pedro took us to a beautiful clear blue waterfall – it was so beautiful and so hot I just
     jumped in!  I was soaking wet but it’s the coolest I have felt since I
      got here.  I soon dried off because it is so warm here.
    </p>

    <p> While we were   exploring today, Pedro spotted a Harpy Eagle and pointed it out to us.
        I was lucky to be able to see it and got a photo just before it
        flew off – the Harpy Eagle is rare to see.   Pedro told us he’d been
         taking tours for years and only seen it 5 or 6 times. </p>

     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
       <img alt="" src={image1}/>
     </div>

     <p>This afternoon we made our way back to the lodge by the River for our
      final day in the forest.</p>

      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <img alt="" src={image2}/>
      </div>
  </Layout>
)


export default DayFive
