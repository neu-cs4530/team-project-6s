export type Direction = 'front' | 'back' | 'left' | 'right';
export type UserLocation = {
  x: number;
  y: number;
  rotation: Direction;
  moving: boolean;
  conversationLabel?: string;
};
export type CoveyTownList = { friendlyName: string; coveyTownID: string; currentOccupancy: number; maximumOccupancy: number }[];

export type ChatMessage = {
  author: string;
  sid: string;
  body: string | File;
  dateCreated: Date;
  privateMessage: boolean;
  privateMessageRecipientId: string|undefined;
};

export type ChatLocation = {
  x: number;
  y: number;
  radius: number;
};