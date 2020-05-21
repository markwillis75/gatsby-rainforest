import React from "react"

import Layout from "../../components/layout"
import image1 from "./../../images/Pink-Dolphin-in-the-Rainforest.jpg"

const DayOne = () => (
  <Layout>
    <h1>Day 1 – 05/02/2020</h1>
    <p>Today, I began my very exciting journey into the Amazon Rainforest.
    Yesterday I flew from Ireland to Manaus in Brazil on an 11 hour flight.
    I then took a bus to my hotel where I was sleeping at for the night.
    This morning at 9am I was collected at the hotel by my guide Pedro,
    who would be my guide for the next 5 days.</p>

    <p>Pedro took me to the nearby docks where we boarded the riverboat that would
    take us into the rainforest.  We needed to take a boat because the density of the
    forest makes land travel too hard.  There were about 10 other people in my tour group.</p>

    <p>We set off up the Amazon River and I was overwhelmed at the sights and noises as we
    travelled up the river.  We were very lucky to see a Pink River Dolphin on the journey, it was majestic! </p>

    <p>After 3 hours we arrived at our camp for the evening.  It is a wooden lodge with
    fold out beds, but it is still very comfortable.   I am looking forward to starting my adventures tomorrow. </p>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <img alt="" src={image1}/>
    </div>
  </Layout>
)


export default DayOne
