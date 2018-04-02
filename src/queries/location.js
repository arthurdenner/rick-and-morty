export const GET_LOCATION_BY_ID = `
  query getLocation($id: Int!) {
    location(id: $id) {
      type
      dimension
    }
  }
`;

export const ALL_LOCATIONS = `
  query allLocations($page: Int!) {
    locations(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
      }
    }
  }
`;
