import styled from 'styled-components';

export const Container = styled.div`
    background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 98%, 0 100%);
`;

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 10px 0px 100px 0;
    gap: 12px;

    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

export const Title = styled.div`
    font-size: 42px;
    text-align: center;
    font-weight: 600;
    margin: 40px 0 0; /* Space only above the title */
    color: ${({ theme }) => theme.secondary};
    font-family: 'Yeseva One', cursive;

    @media (max-width: 768px) {
        margin: 12px 0 0; /* Adjust for smaller screens, no space below */
        font-size: 32px;
    }
`;

export const Desc = styled.div`
    font-size: 16px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.white };
    margin: 20px 0; /* Margin above and below description */
    
    @media (max-width: 768px) {
        margin: 12px 0; /* Keep the same margin for smaller screens */
        font-size: 16px;
    }
`;

export const ToggleButtonGroup = styled.div`
    display: flex;
    gap: 10px; /* Adjust gap between buttons as needed */
    font-size: 16px;
    font-weight: 500;
    margin: 22px 40px; /* Margin to create space above and below the button group */
    padding: 20px;

    @media (max-width: 768px) {
        margin: 20px 10px; /* Adjust for smaller screens */
    }
`;

export const ToggleButton = styled.div`
    padding: 15px 30px;
    cursor: pointer;
    background: ${({ active, theme }) => (active ? theme.secondary : 'transparent')}; /* No fill when inactive */
    color: ${({ active, theme }) => (active ? theme.text_primary : theme.white)}; /* Text color changes based on state */
    border: 1.5px solid ${({ theme }) => theme.white }; /* Add border color */
    border-radius: 50px 30px 50px 30px; /* Uneven border-radius for blob shape */
    transition: all 0.3s ease;
    position: relative;
    box-shadow: ${({ active, theme }) =>
        active ? `0 2px 2px ${theme.primary + '80'}` : `0 4px 10px ${theme.black + '1A'}`};

    &:hover {
        background: ${({ active, theme }) => (active ? theme.secondary : theme.primary + '20')}; /* Change background on hover */
        transform: scale(1.05);
    }

    @media (max-width: 768px) {
        padding: 12px 20px;
    }
`;

//export const Divider = styled.div`
   // width: 1.5px;
   // background: ${({ theme }) => theme.primary};
//`;

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
    /* Uncomment and adjust for grid layout if needed
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 32px;
    grid-auto-rows: minmax(100px, auto);
    @media (max-width: 960px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 640px) {
        grid-template-columns: repeat(1, 1fr);
    }
    */
`;
