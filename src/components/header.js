import { Link } from "gatsby"
import styled from "styled-components"
import React from "react"
import Container from "./container"

const Header = () => (
  <Wrapper>
    <Container>
      <Row
        css={`
          padding-top: 50px;
        `}
      >
        <Title>
          branko zivanovic. <span>full-stack javascript engineer</span>
        </Title>

        <Navigation>
          <ul>
            <ActiveListItem>
              <a href="/">about</a>
            </ActiveListItem>
            <li>
              <a href="#tech">tech stack</a>
            </li>
            <li>
              <a href="#projects">projects</a>
            </li>
          </ul>
        </Navigation>
      </Row>
    </Container>
  </Wrapper>
)

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

const ActiveListItem = styled.li`
  &:after {
    content: "";
    position: absolute;
    display: block;
    width: 5px;
    height: 5px;
    border-radius: 100%;
    background: #f68b9d;
    right: -10px;
    top: 50%;
  }
`

const Navigation = styled.nav`
  ul {
    display: flex;
  }
  li {
    position: relative;
    margin-right: 25px;
    &:last-of-type {
      margin: 0;
    }
  }
  li a {
    color: white;
    font-size: 14px;
    line-height: 1;
  }
`

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export default Header
