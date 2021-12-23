import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: #3B9C9C;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 500;

`

const Announcement = () => {
    return (
        <Container>
            Get Free Shipping On Orders Over 99DT
        </Container>
    )
}

export default Announcement
