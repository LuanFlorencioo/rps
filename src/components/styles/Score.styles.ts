import styled from "styled-components";
import './_variables.css';

const ScoreBar = styled.div`
    width: 75px;
    height: 75px;
    background: linear-gradient(to top, #ddd, #fff);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
        font-size: 1.3rem;
        font-weight: 700;
        color: var(--score-text);
    }

    #points {
        font-size: 4rem;
        color: var(--dark-text);
    }
`

export default ScoreBar