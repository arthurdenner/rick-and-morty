export const GET_LOCATION_BY_ID = `
  query getLocation($id: Int!) {
    location(id: $id) {
      type
      dimension
    }
  }
`;
