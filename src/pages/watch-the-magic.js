import React from "react"
import ReactPlayer from "react-player"

import Layout from "../components/layout"
import SEO from "../components/seo"

import hannahVideo from "./../video/hannah-at-work.mp4"

const Video = () => (
  <Layout>
    <SEO title="Home" />
    <ReactPlayer
      url={hannahVideo}
      playing={false}
      width={200}
      maxWidth={300}
      controls={true}
    />
  </Layout>
)

export default Video
