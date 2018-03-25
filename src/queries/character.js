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
