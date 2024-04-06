import styled from 'styled-components'
export const Card = styled.div`
    display : flex;
    flex-direction : column;
    justify-content: space-between;
    border-radius: 0.625rem;
    background: #fff;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    margin-bottom: 3rem;
`;
export const CardHeaderRed = styled.div`
    width: 100%;
    background: #EB5757;
    border-radius: 0.625rem 0.625rem 0 0 ;
    padding : 2rem;
    
`;
export const CardHeaderGreen = styled.div`
    width: 100%;
    background: #64BC44;
    border-radius: 0.625rem 0.625rem 0 0 ;
    padding : 2rem;
    
`;
export const CardHeading = styled.h3`
    font-size: 2rem;
    color : #fff;
`
export const CardContent = styled.div`
    display : flex;
    flex-direction : column;
    justify-content: space-between;
    padding : 2rem;
`
export const CardContentInfo = styled.div`
    display : flex;
    flex-direction : row;
    justify-content: flex-start;
`
export const CardContentTitle = styled.h5`
    font-size: 1.5rem;
    color : #2F2F2F;
    padding-right: 1rem
`
export const CardContentValueRed = styled.h5`
    font-size: 1.5rem;
    color : #EB5757;
`
export const CardContentValueGreen = styled.h5`
    font-size: 1.5rem;
    color : #64BC44;
`
export const CardContentNormal = styled.h5`
    font-size: 1.5rem;
    color : #888;
`;