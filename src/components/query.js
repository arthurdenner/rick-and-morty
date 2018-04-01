import React from 'react';
import PropTypes from 'prop-types';
import { Connect, query as qry } from 'urql';
import Error from './error';
import Loading from './loading';

const Query = ({ children, dataPath, query, variables }) => (
  <Connect
    query={qry(query, variables)}
    children={({ fetching, error, loaded, data }) => {
      if (fetching || !loaded) {
        return <Loading />;
      }

      if (error) {
        return <Error err={error} />;
      }

      return children(data[dataPath] || undefined);
    }}
  />
);

Query.propTypes = {
  children: PropTypes.func.isRequired,
  dataPath: PropTypes.string.isRequired,
  query: PropTypes.string.isRequired,
  variables: PropTypes.object,
};

Query.defaultProps = {
  variables: {},
};

export default Query;
