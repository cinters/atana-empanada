// ─────────────────────────────────────────────────────────────────────────────
// HOW TO UPDATE THE SCHEDULE
//
// 1. Go to https://streetfoodfinder.com/atanafoodtruck to see confirmed stops.
// 2. Edit the `upcomingStops` array below to match the upcoming week.
// 3. Set `confirmed: true` for real stops, `confirmed: false` for unknowns.
// 4. Save the file — the homepage and /find-us page update automatically.
//
// The live StreetFoodFinder tracker on the /find-us page stays in sync on its
// own — this file only drives the homepage "Where Are We?" cards.
// ─────────────────────────────────────────────────────────────────────────────

export type Stop = {
  day: string;
  date: string;
  location: string;
  address: string;
  time: string;
  mapUrl: string;
  confirmed: boolean;
};

export const upcomingStops: Stop[] = [
  {
    day: "Friday",
    date: "March 21",
    location: "Birdsong Brewing Co.",
    address: "1016 N Davidson St, Charlotte, NC",
    time: "5:00 PM – 9:00 PM",
    mapUrl: "https://maps.google.com/?q=1016+N+Davidson+St+Charlotte+NC",
    confirmed: true,
  },
  {
    day: "Saturday",
    date: "March 22",
    location: "TBD — Check StreetFoodFinder",
    address: "Charlotte, NC",
    time: "TBD",
    mapUrl: "https://streetfoodfinder.com/atanafoodtruck",
    confirmed: false,
  },
  {
    day: "Sunday",
    date: "March 23",
    location: "TBD — Check StreetFoodFinder",
    address: "Charlotte, NC",
    time: "TBD",
    mapUrl: "https://streetfoodfinder.com/atanafoodtruck",
    confirmed: false,
  },
];

export const regularSpots = [
  {
    name: "Birdsong Brewing Co.",
    address: "1016 N Davidson St, Charlotte, NC",
    notes: "Regular Friday stops, 5pm–9pm",
    mapUrl: "https://maps.google.com/?q=1016+N+Davidson+St+Charlotte+NC",
  },
];
