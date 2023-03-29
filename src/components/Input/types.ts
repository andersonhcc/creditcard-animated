import { TextInputProps } from "react-native";
import { TextInputMaskOptionProp, TextInputMaskTypeProp} from "react-native-masked-text";

export interface PropsInput extends TextInputProps{
    width?: string;
    icon: React.ReactNode;
    mask?: boolean
    value: string;
    type?: TextInputMaskTypeProp;
    options?: TextInputMaskOptionProp;
    onChangeText: (value: string) => void;
}