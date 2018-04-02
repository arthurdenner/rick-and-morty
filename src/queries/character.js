export const GET_CHARACTERS = `
  query getCharacters($page: Int!) {
    characters(page: $page) {
      info {
        pages
        next
        prev
      }
      results {
        id
        image
        name
      }
    }
  }
`;

export const SINGLE_CHARACTER = `
  query getSingleCharacter($id: Int!) {
    character(id: $id) {
      species
      type
      status
      location {
        id
        name
      }
      origin {
        id
        name
      }
      gender
    }
  }
`;
