export type VesselInformation = {
  vesselID: number, // random string or uuid
  vesselName: string, // Random name search on the internet
  vesselType: string, // Type: need to search for each defined types
  capacity: number, // I have no idea
  yearBuilt: number, // year, limit to 4 digit
  owner: string, // a person who chartered the vessel, with avata
  price: number, // Float number display with currency
  chartered: boolean, // This should be checkbox
} 