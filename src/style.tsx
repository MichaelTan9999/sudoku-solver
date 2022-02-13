import styled from 'styled-components'

export const AppCentered = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const CellGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(9, 45px);
`
export const SingleCellStyle = styled.input`
    width: 30px;
    height: 30px;
    margin: 5px 5px;
    font-size: 25px;
    text-align: center;
`
export const ButtonBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    button {
        width: 100px;
        height: 30px;
        margin: 10px;
    }
`