export interface Account {
  id: string;
  title: string;
  price: number;
  level: number;
  tier: string;
  images: string[];
  stats: AccountStats;
  type: 'premium' | 'variety';
  created_at: string;
}

export interface AccountStats {
  kills: number;
  matches: number;
  winRate: number;
  kd: number;
  damage: number;
  headshots: number;
  vehicles: number;
  assists: number;
  revives: number;
  healing: number;
  distance: number;
  survivalTime: number;
  topTen: number;
  weapons: string[];
  skins: string[];
  outfits: string[];
  vehicles_skins: string[];
  achievements: string[];
  titles: string[];
  frames: string[];
  emotes: string[];
  parachutes: string[];
  backpacks: string[];
  helmets: string[];
  masks: string[];
  glasses: string[];
  shoes: string[];
  gloves: string[];
  pan_skins: string[];
  mythic_items: string[];
  legendary_items: string[];
  epic_items: string[];
}

export interface NewsItem {
  id: string;
  text: string;
  created_at: string;
}

export interface BannerImage {
  id: string;
  url: string;
  title: string;
  created_at: string;
}

export interface User {
  id: string;
  email: string;
  role: 'admin' | 'user';
}