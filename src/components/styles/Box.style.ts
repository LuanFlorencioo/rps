import styled from "styled-components";

const Box = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: #fff;
    box-shadow: inset 0 25px 0 #aaa;
    position: relative;
    
    &::before {
        content: '';
        width: 80%;
        height: 80%;
        background: transparent;
        border-radius: 50%;
        border: 15px solid #2ff;
        box-shadow: 0 10px 0 #3aa;
        position: absolute;
    }
`

export default Box;