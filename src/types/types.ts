export interface ITeam {
  name: string;
  logo: string | undefined;
  userId: string;
}

export interface IPlayer {
  position: string;
  age: number;
  name: string;
  birthDate: string;
  weight: number;
  height: number;
  nationality: string;
  salary: number;
  avatar: string | undefined;
  teamId: string;
  isInjured: boolean;
}

export interface IUser {
  email: string;
  password: string;
  name: string;
}