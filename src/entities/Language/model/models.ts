export type TColor = string | null;
export type TRecordLanguagesColors = { [key: string]: TColor };

export type TLanguage = {
  name: string;
  color: TColor;
};
