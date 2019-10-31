import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Icon from "../components/icon"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
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
              years of professional experience. I love writing TypeScript, React
              & Node in my synthwave code editor while listening to this guy, or
              switching amazing channels of di.fm. Passionate about GraphQL &
              OSS.
              <br></br>
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
  color: #f68b9d;
  text-transform: uppercase;
  margin-bottom: 35px;
  @media screen and (max-width: 550px) {
    color: white;
    margin-bottom: 10px;
  }
`

// Visible on mobile only
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
`

const ListItem = styled.li`
  margin-right: 15px;
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
  margin-top: -25px;
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
    title: "Twitter",
    href: "https://twitter.com/branunnaki",
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
