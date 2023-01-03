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
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;

`