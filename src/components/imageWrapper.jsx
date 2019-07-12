import styled from 'styled-components'
export default component => styled(component)`
.image{
    height: 325px;
    width: 135px;
    background-position : ${({position})=>`${position}cm 0cm`};
    background-image: url("./image.jpg");
    overflow: hidden;
  }
`