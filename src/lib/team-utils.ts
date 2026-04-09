export type TeamID = 
  | "CSK" | "MI" | "RCB" | "KKR" | "SRH" 
  | "DC" | "GT" | "LSG" | "PBKS" | "RR";

export interface TeamBrand {
  id: TeamID;
  name: string;
  logo: string;
  primaryColor: string;
  secondaryColor: string;
}

export const TEAMS: Record<string, TeamBrand> = {
  "Chennai Super Kings": {
    id: "CSK",
    name: "Chennai Super Kings",
    logo: "/static/logos/csk.jpg",
    primaryColor: "#FFFF00",
    secondaryColor: "#0081E9",
  },
  "Mumbai Indians": {
    id: "MI",
    name: "Mumbai Indians",
    logo: "/static/logos/mi.jpg",
    primaryColor: "#004BA0",
    secondaryColor: "#D1AB3E",
  },
  "Royal Challengers Bengaluru": {
    id: "RCB",
    name: "Royal Challengers Bengaluru",
    logo: "/static/logos/rcb.jpg",
    primaryColor: "#EC1C24",
    secondaryColor: "#000000",
  },
  "Kolkata Knight Riders": {
    id: "KKR",
    name: "Kolkata Knight Riders",
    logo: "/static/logos/kkr.jpg",
    primaryColor: "#2E0854",
    secondaryColor: "#B3A123",
  },
  "Sunrisers Hyderabad": {
    id: "SRH",
    name: "Sunrisers Hyderabad",
    logo: "/static/logos/srh.jpg",
    primaryColor: "#FF822A",
    secondaryColor: "#000000",
  },
  "Delhi Capitals": {
    id: "DC",
    name: "Delhi Capitals",
    logo: "/static/logos/dc.jpg",
    primaryColor: "#00008B",
    secondaryColor: "#FF0000",
  },
  "Gujarat Titans": {
    id: "GT",
    name: "Gujarat Titans",
    logo: "/static/logos/gt.jpg",
    primaryColor: "#1B2133",
    secondaryColor: "#D1AB3E",
  },
  "Lucknow Super Giants": {
    id: "LSG",
    name: "Lucknow Super Giants",
    logo: "/static/logos/lsg.jpg",
    primaryColor: "#A72056",
    secondaryColor: "#0057E7",
  },
  "Punjab Kings": {
    id: "PBKS",
    name: "Punjab Kings",
    logo: "/static/logos/pbks.jpg",
    primaryColor: "#DD1F2D",
    secondaryColor: "#FFFFFF",
  },
  "Rajasthan Royals": {
    id: "RR",
    name: "Rajasthan Royals",
    logo: "/static/logos/rr.png",
    primaryColor: "#EA1A85",
    secondaryColor: "#254AA5",
  },
};

export function getTeamBrand(name: string): TeamBrand | undefined {
  return TEAMS[name];
}
