import { Link } from "react-scroll"
import styled from "styled-components"
import React, { useState } from "react"
import Container from "./container"

const Header = () => {
  const [activeLinkIndex, setActiveLinkIndex] = useState(0)
  return (
    <Wrapper>
      <Container>
        <Row>
          <Title>
            branko zivanovic. <span>full-stack javascript engineer</span>
          </Title>

          <nav>
            <List>
              {links.map((l, i) => {
                return (
                  <ListItem isActive={l.index === activeLinkIndex}>
                    <Anchor
                      to={l.title.replace(" ", "")}
                      key={i.toString()}
                      onClick={() => {
                        setActiveLinkIndex(l.index)
                      }}
                      duration={500}
                      smooth={true}
                    >
                      {l.title}
                    </Anchor>
                  </ListItem>
                )
              })}
            </List>
          </nav>
        </Row>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  width: 100%;
  font-family: "Work Sans", sans-serif;

  @media screen and (max-width: 750px) {
    display: none;
  }
`

const Title = styled.h1`
  font-size: 14px;
  display: inline;
  color: white;
  span {
    color: #f68b9d;
  }
`

const List = styled.ul`
  display: flex;
`

const ListItem = styled.li`
  position: relative;
  margin-right: 25px;
  &:after {
    display: ${props => (props.isActive ? "block" : "none")};
    content: "";
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 100%;
    background: #f68b9d;
    right: -10px;
    top: 50%;
  }
  &:last-of-type {
    margin: 0;
  }
`
const Anchor = styled(Link)`
  color: white;
  font-size: 14px;
  line-height: 1;
  cursor: pointer;
`

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 50px;
`

const links = [
  {
    index: 0,
    title: "about",
  },
  {
    index: 1,
    title: "tech stack",
  },
  {
    index: 2,
    title: "projects",
  },
]

export default Header
