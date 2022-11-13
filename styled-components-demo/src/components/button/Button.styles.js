import styled from 'styled-components'

export const StyledButton = styled.button`
box-sizing:border-box;
width:200px;
padding: 15px 32px;
border:2px solid #4caf50;
text-align:center;
font-size:16px;
background-color: ${(props)=> props.variant === 'outline' ? '#fff' :'#4caf50'  };
color:${(props)=> props.variant === 'outline' ? '#4caf50': '#fff'};
cursor:pointer;
transition:0.5s all ease-out;
&:hover{
    background-color: ${(props)=> props.variant !== 'outline' ? '#fff' :'#4caf50'  };
    color:${(props)=> props.variant !== 'outline' ? '#4caf50': '#fff'};
}
`
export const FancyButton = styled(StyledButton)`
background-image: linear-gradient(to right,#f6d365 0%,#fda085 100%);
border:none;
`

export const SubmitButton = styled(StyledButton).attrs({
    type:'submit'
})`
box-shadow:0 9px #999;
&:hover{
    background-color: ${(props)=> props.variant === 'outline' ? '#fff' :'#4caf50'  };
    color:${(props)=> props.variant === 'outline' ? '#4caf50': '#fff'};
    box-shadow:0 5px #666;
    transform: translateY(4px);

}
`

export const DarkButton = styled(StyledButton)`
border: 2px solid ${ (props) => props.theme.dark.primary};
background-color:  ${ (props) => props.theme.dark.primary};
color: ${ (props) => props.theme.dark.text};
`