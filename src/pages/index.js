import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import image1 from "./../images/background-hannah.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>My name is Hannalito Gonzalez Escobar III, but you can call me Hannah for short!</p>
    <p>I am the grand daughter of the famous explorer Gustavo Escobar</p>
    <p>This is my diary of all the days that I was in the Amazon Rainforest exploring</p>
    <p>Hope you have fun while you're here!</p>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <img alt="" src={image1}/>
    </div>
  </Layout>
)

export default IndexPage
