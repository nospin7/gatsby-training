import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/section"

const AboutPage = () => (
    <Layout>
        <SEO title="About" />
        <h1>What's this about man?</h1>
        <p>Being cool.  That's what</p>
        <Section title="Hello" body="This is the body"></Section>
        <Section title="Is it me you're looking for?" body="You sing it, Lionel."></Section>
        <Link to="/">Go Home</Link>
    </Layout>
)

export default AboutPage