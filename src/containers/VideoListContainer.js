import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

var VideoListContainer = () => {};

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

var mapDispatchToProps = dispatch => {
  return { 
    handleVideoListEntryTitleClick: (video) => {
      return dispatch(changeVideo(video));
    } 
  };
};

var mapStateToProps = state => {
  return {
    videos: state.videoList
  };
};

var VideoListContainer = connect(
  mapStateToProps, 
  mapDispatchToProps
)(VideoList);



export default VideoListContainer;
