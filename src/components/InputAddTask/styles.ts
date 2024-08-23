import styled from 'styled-components/native';

export const InputContainer = styled.View`
    flex-direction: row;
    width: 100%;
    border-radius: 4px;
`;

export const Input = styled.TextInput`
    background-color: #252627;
    flex: 1;
  
    padding: 16px;
    color: #FFFFFF;
    
`;

export const InputButton = styled.TouchableOpacity`
    width: 56px;
    height: 56px;
    background-color: #1E1E1E;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
`;