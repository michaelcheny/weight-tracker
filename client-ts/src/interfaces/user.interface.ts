export interface User {
  activity_level: number;
  age: number;
  bmr: number;
  created_at: string;
  current_calories: number | undefined;
  email: string;
  first_name: string;
  gender: string;
  goal: number;
  height: number;
  id: number;
  last_name: string;
  macros: object[];
  macro: object;
  macro_goal: object;
  meals: object[];
  tdee: number;
  updated_at: string;
  weight: number;
  weight_histories: object[];
  errors?: object[] | string[] | undefined;
}
