import { Timestamp } from "rxjs";

export interface Fair {
    id: number;
    title: string;
    shortDescription: string;
    description: string;
    category: string;
    image: string;
    publishDate: Date;
    fairStartDate: Date;
    fairEndDate?: Date;
    hourStart: string;
    hourEnd?: string; 
    location: string;
    capacity: number,
    cost: number;
    conditions: {
      internet: boolean;
      cable: boolean;
      light: boolean;
      water: boolean;
      
    };
    contents: Content[];
  }

  export interface Content {
    id: number;
    title: string;
    description?: string;
    hour?: string;
  }
  
  export type PageSize = 6 | 12 | 24;