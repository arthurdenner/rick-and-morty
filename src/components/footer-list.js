import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FooterContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 10px 10px;
`;

const FooterList = ({ currentPage, info, getNextPage, getPreviousPage }) => (
  <FooterContainer>
    <TouchableOpacity disabled={!info.prev} onPress={getPreviousPage}>
      <View>
        <Text>Previous page</Text>
      </View>
    </TouchableOpacity>
    <Text>
      Page {currentPage} of {info.pages}
    </Text>
    <TouchableOpacity disabled={!info.next} onPress={getNextPage}>
      <View>
        <Text>Next page️</Text>
      </View>
    </TouchableOpacity>
  </FooterContainer>
);

FooterList.propTypes = {
  currentPage: PropTypes.number.isRequired,
  info: PropTypes.object.isRequired,
  getNextPage: PropTypes.func.isRequired,
  getPreviousPage: PropTypes.func.isRequired,
};

export default FooterList;
