import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {FlatList} from 'react-native';
import ListItem from './ListItem';
import {MediaContext} from '../contexts/MediaContexts';

const List = () => {
  // eslint-disable-next-line no-unused-vars
  const [media, setMedia] = useContext(MediaContext);
  console.log(media);
  return (
    <FlatList
      data={media}
      renderItem={({item}) => <ListItem singleMedia={item} />}
    />
  );
};

List.propTypes = {
  mediaArray: PropTypes.array,
};

export default List;
