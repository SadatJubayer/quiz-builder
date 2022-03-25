import { IChoice } from './IChoice';

export interface IQuestion {
    id: string;
    title: string;
    imgUrl?: string;
    choices: IChoice[];
}
