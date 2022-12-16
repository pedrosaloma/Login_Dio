import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, disabled, onClick }: IButtonProps) => {
  
  if(disabled ==true){
    return <ButtonContainer style={{display: "none"}}></ButtonContainer>;
  }else{
    return <ButtonContainer onClick={onClick}>{title}</ButtonContainer>;
  }
};

export default Button;
