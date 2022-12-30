import React from 'react'
import styled from 'styled-components'


export default function Header() {
  return (
    <Div >
        Emoji Search

    </Div>
  )
}

const Div = styled.div`
 padding: 15px;
  position: relative;
  font-weight: normal;
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 32px;
  text-align: center;
  color: #333;
  border-bottom:1px solid gray;

`