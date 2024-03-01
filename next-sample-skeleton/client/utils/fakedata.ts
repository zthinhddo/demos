import { VesselInformation } from "./types";

export type TData = VesselInformation;

export const SAMPLE_FORMULA_DATA = [
    ["Greg Black", 4.66, "=B1*1.3", "=AVERAGE(B1:C1)", "=SUM(B1:C1)"],
  ["Anne Carpenter", 5.25, "=$B$2*30%", "=AVERAGE(B2:C2)", "=SUM(B2:C2)"],
  ["Natalie Dem", 3.59, "=B3*2.7+2+1", "=AVERAGE(B3:C3)", "=SUM(B3:C3)"],
  ["John Sieg", 12.51, "=B4*(1.22+1)", "=AVERAGE(B4:C4)", "=SUM(B4:C4)"],
  [
    "Chris Aklips",
    7.63,
    "=B5*1.1*SUM(10,20)+1",
    "=AVERAGE(B5:C5)",
    "=SUM(B5:C5)"
  ]
]

export const DATA: TData[] = [
{
      "vesselID": 1,
      "vesselName": "Ocean Voyager",
      "vesselType": "Container Ship",
      "capacity": 5000,
      "yearBuilt": 2015,
      "owner": "Maritime Co.",
      "price": 10000000.00,
      "chartered": false,
    },
    {
      "vesselID": 2,
      "vesselName": "Liquid Express",
      "vesselType": "Tanker",
      "capacity": 8000,
      "yearBuilt": 2012,
      "owner": "PetroLogistics Inc",
      "price": 15000000.00,
      "chartered": true,
    },
    {
      "vesselID": 3,
      "vesselName": "Arctic Carrier",
      "vesselType": "Icebreaker",
      "capacity": 3000,
      "yearBuilt": 2018,
      "owner": "Polar Shipping Co.",
      "price": 12500000.00,
      "chartered": false,
    },
    {
      "vesselID": 4,
      "vesselName": "Speedy Freighter",
      "vesselType": "Cargo Ship",
      "capacity": 7000,
      "yearBuilt": 2014,
      "owner": "Global Transport",
      "price": 9500000.00,
      "chartered": false
    },
    {
      "vesselID": 5,
      "vesselName": "Windjammer",
      "vesselType": "Sailboat",
      "capacity": 150,
      "yearBuilt": 2020,
      "owner": "Sailing Adventures",
      "price": 500000.00,
      "chartered": true
    },
    {
      "vesselID": 6,
      "vesselName": "EcoCruiser",
      "vesselType": "Cruise Ship",
      "capacity": 2000,
      "yearBuilt": 2016,
      "owner": "GreenLine Cruises",
      "price": 20000000.00,
      "chartered": true
    }
];