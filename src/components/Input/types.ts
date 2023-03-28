import { TextInputProps } from "react-native";

export interface PropsInput extends TextInputProps{
    width?: string;
    icon: React.ReactNode
}