
type Data = {
    name: string;
    number: string;
    validate: string;
    cvv: string;
}

export interface PropsCard {
    data: Data
    backCard: boolean;
}