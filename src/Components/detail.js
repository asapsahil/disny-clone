import React from 'react'
import styled from 'styled-components'

function detail() {
  return (
    <Container>
        <Background>
            <img src="https://wallpaperaccess.com/full/2071603.jpg" />
        </Background>
        <ImgTitle>
        <img src="https://i.pinimg.com/originals/f7/bc/7b/f7bc7b19e7f8555ba0f36aa3f2bc5dcd.jpg " />
        </ImgTitle>
        <Controls>
            <Play>
                <img src="/images/play-icon-black.png" />
                <span>PLAY</span>
            </Play>
            <Trailer>
                 <img src="/images/play-icon-white.png" />
                <span>Trailer</span>
            </Trailer>
            <AddButton>
                <span>+</span>
            </AddButton>
            <GroupWatch>
                 <img src="/images/group-icon.png" />
            </GroupWatch>
        </Controls>
        <Sub>
hello this is the placeholder text
        </Sub>
        <Description>
            jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjf fu hsdifgsif wseg 
        </Description>





    </Container>
  )
}

export default detail


const Container=styled.div`
min-height: calc(100vh-70px);
padding: 0 calc(3.5vw+5px);
position:relative;
margin-left:50px;

`

const Background=styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
z-index:-1;
opacity:0.8;
img{
    width:100%;
    height:100%;
}

`

const ImgTitle=styled.div`
height:30vh;
min-height:170px;
width:35vw;
min-width:200px;
margin-top:60px;
margin-bottom:25px;
img{
    width:100%;
    height:100%;
    object-fit:contain;
}

`

const Controls=styled.div`
display:flex;
align-items:center;

`

const Play=styled.button`
border-radius:4px;
font-size:15px;
padding:0px 24px;
display:flex;
align-items:center;
height:56px;
background:rgb(249,249,249);
border:none;
margin-right:22px;
letter-spacing:1.8px;
cursor:pointer;

&:hover{
    background:rgb(198,198,198);
}
`

const Trailer=styled(Play)`
background: rgba(0,0,0,0.3);
border: 1px solid rgb(249,249,249);
color: rgb(249,249,249);
text-trasnform:uppercase;

&:hover{

}
`

const AddButton=styled.button`
height:44px;
width:44px;
display:flex;
align-items:center;
justify-content:center;
border-radius:50%;
margin-right:16px;
border: 2px solid white;
background-color: rgba(0,0,0,0.6);
cursor:pointer;
span{
font-size:30px;
color:white;
}
`
const GroupWatch=styled(AddButton)`
background:rgb(0,0,0);

`

const Sub=styled.div`
color:rbg(249,249,249);
font-size:15px;
min-height:20px;
margin-top:26px;
`
const Description=styled.div`
line-height:1.4;
font-size:20px;
marin-top:16px;
color:rgb(249,249,249);
max-width:760px;
`