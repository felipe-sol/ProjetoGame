import styled from "styled-components";

export const HeaderContainer =styled.header`
    background:#01269;
    padding:20px;
    display:flex;
    justify-content:space-around;
`;

export const Nav = styled.Nav `
    ul{
        list-style:none
        padding:0;
        margin:0;
        display:flex;
    }
    li{
        margin: 0 15px
    }
    a{
        color:green;
        text-decoration:none;
        text-transform:uppercase;
        padding:5px 15px
    }
`       

