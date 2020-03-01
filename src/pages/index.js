import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Icon from "../components/icon"
import { Element } from "react-scroll"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Full-stack JavaScript Engineer"
      description="Full-stack JavaScript Engineer based in Belgrade, Serbia who loves writing TypeScript, React & Node. Passionate about GraphQL & open-source."
      image="http://zivanovicb.com/static/0d5c9aa56e39c73a4ef450079c28f83f/b33a3/me.jpg"
    />
    <main>
      <Section
        css={`
          padding-top: 70px;
        `}
      >
        <BioWrapper>
          <ImageWrapper>
            <Image src="me.jpg" />
          </ImageWrapper>
          <RightSection>
            <Bio>
              <SayMyName>Branko Zivanovic</SayMyName>
              <span
                css={`
                  @media screen and (max-width: 550px) {
                    display: none;
                  }
                `}
              >
                Hey, my name is Branko Zivanovic 🖐
              </span>
              <br></br>
              <br></br>
              I’m a Full-stack JavaScript Engineer based in Belgrade 🇷🇸 with 5
              years of professional experience.
              <br></br>I love writing TypeScript, React & Node in my &nbsp;
              <Exotic css={``}>exotic code editor</Exotic>
              &nbsp; while randomly switching channels on{" "}
              <a target="_blank" href="https://di.fm">
                di.fm
              </a>
              .<br></br>
              <br></br>
              When not working, I like to toy with different programming
              paradigms & languages, play tennis & enjoy life.
            </Bio>

            <List>
              {aboutLinks.map((l, i) => {
                return (
                  <ListItem key={i.toString()}>
                    <Anchor
                      css={`
                        text-decoration: underline;
                      `}
                      target="_blank"
                      href={l.href}
                    >
                      {l.title}
                    </Anchor>
                  </ListItem>
                )
              })}
            </List>
          </RightSection>
        </BioWrapper>
      </Section>

      <Element name="techstack">
        <Section
          css={`
            @media screen and (max-width: 550px) {
              display: none;
            }
          `}
        >
          <SectionTitle>tech stack</SectionTitle>
          <div
            css={`
              position: relative;
            `}
          >
            <Icon
              name="techstackSeparator"
              width="30px"
              height="273px"
              css={`
                margin-right: 110px;
              `}
            />
            <TechListTitle
              css={`
                top: -8px;
                left: 45px;
              `}
            >
              front-end
            </TechListTitle>

            <TechList
              css={`
                top: -21px;
              `}
            >
              {frontendTech.map((t, i) => {
                return <TechListItem key={i.toString()}>{t}</TechListItem>
              })}
            </TechList>

            <TechListTitle
              css={`
                top: 82px;
                left: 45px;
              `}
            >
              testing
            </TechListTitle>
            <TechList
              css={`
                top: 78px;
              `}
            >
              {testingTech.map((t, i) => {
                return <TechListItem key={i.toString()}>{t}</TechListItem>
              })}
            </TechList>

            <TechListTitle
              css={`
                top: 171px;
                left: 45px;
              `}
            >
              back-end
            </TechListTitle>
            <TechList
              css={`
                top: 155px;
              `}
            >
              {backendCloudTech.map((t, i) => {
                return <TechListItem key={i.toString()}>{t}</TechListItem>
              })}
            </TechList>

            <TechListTitle
              css={`
                top: 261px;
                left: 45px;
              `}
            >
              cloud
            </TechListTitle>

            <TechList
              css={`
                top: 255px;
              `}
            >
              {cloudTech.map((t, i) => {
                return <TechListItem key={i.toString()}>{t}</TechListItem>
              })}
            </TechList>
          </div>
        </Section>
      </Element>

      <Element name="projects">
        <Section>
          <SectionTitle>projects</SectionTitle>

          <List>
            {projects.map((p, i) => {
              return (
                <ListItem key={i.toString()}>
                  <Anchor target="_blank" href={p.href}>
                    {p.title}
                  </Anchor>
                </ListItem>
              )
            })}
          </List>
        </Section>
      </Element>
    </main>
  </Layout>
)

const Section = styled.section`
  width: 100%;
  margin-bottom: 150px;
  @media screen and (max-width: 550px) {
    margin-bottom: 70px;
  }
`

const BioWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 840px) {
    flex-flow: column nowrap;
    align-items: flex-start;
  }
`

const SectionTitle = styled.h3`
  font-weight: bold;
  font-size: 24px;
  color: white;
  text-transform: uppercase;
  margin-bottom: 35px;
  @media screen and (max-width: 550px) {
    margin-bottom: 10px;
  }
`

const SayMyName = styled.h1`
  display: none;
  color: white;
  font-size: 40px;
  font-weight: bold;
  margin: 0;
  @media screen and (max-width: 550px) {
    display: block;
  }
`

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

const ListItem = styled.li`
  margin-right: 15px;
  &:last-of-type {
    margin-right: 0;
  }
`

const TechList = styled(List)`
  flex-wrap: wrap;
  position: absolute;
  left: 220px;
  max-width: 630px;
  @media screen and (max-width: 670px) {
    left: 150px;
  }
`

const TechListTitle = styled.span`
  position: absolute;
  color: #f68b9d;
  font-size: 16px;
  font-weight: 600;
`

const TechListItem = styled(ListItem)`
  line-height: 25px;
`
const Anchor = styled.a`
  color: #f68b9d;
`

const ImageWrapper = styled.div`
  height: 380px;
  width: 380px;
  margin-right: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(122.62deg, #f68b9d 14.05%, #1d334d 100%);
  @media screen and (max-width: 840px) {
    display: none;
  }
`

const Bio = styled.p`
  margin-bottom: 55px;
  @media screen and (max-width: 550px) {
    margin-bottom: 25px;
  }
`
const RightSection = styled.div`
  flex: 1;
  font-size: 16px;
  color: white;
  max-width: 650px;
  width: 100%;
  margin-top: -25px;
`

const Exotic = styled.span`
  position: relative;
  color: #f68b9d;
  &:hover {
    &:before {
      display: block;
      content: "";
      width: 500px;
      height: 500px;
      position: absolute;
      background: url("https://github.com/robb0wen/synthwave-vscode/raw/master/theme.jpg")
        no-repeat;
      background-size: contain;
      top: 0;
      right: 0;
      @media screen and (max-width: 500px) {
        width: 300px;
        height: 300px;
        right: -550px;
      }
      @media screen and (max-width: 550px) {
        right: -100px;
      }
    }
  }
`

const aboutLinks = [
  {
    title: "GitHub",
    href: "https://github.com/zivanovicb1",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/zivanovicb1/",
  },
  {
    title: "Email",
    href: "mailto:zivanovic.b1@hotmail.com",
  },
  {
    title: "Telegram",
    href: "https://t.me/zivanovicb1",
  },
]

const cloudTech = [
  "Docker",
  "CI/CD",
  "Kubernetes",
  "Swarm",
  "AWS",
  "DO",
  "Heroku",
]
const frontendTech = [
  "React",
  "Redux",
  "MobX",
  "RxJS",
  "Flow",
  "GraphQL",
  "NextJS",
  "Gatsby",
  "CSS-in-JS",
  "SCSS",
  "BEM",
  "D3.js",
  "Canvas",
]

const testingTech = ["Cypress.io", "Jest", "Mocha"]

const backendCloudTech = [
  "Node",
  "Express",
  "NestJS",
  "WebSockets",
  "AMQP",
  "OAuth2",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Redis",
]

const projects = [
  {
    title: "ProductHub",
    href: "https://producthub.app",
  },
  {
    title: "Codeleak",
    href: "https://codeleak.io",
  },
  {
    title: "Resi",
    href: "https://resiapp.co",
  },
]

export default IndexPage
