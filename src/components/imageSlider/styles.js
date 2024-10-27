import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 150, // Adjust height for a more spacious look
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10, // Rounded corners for a modern look
    overflow: 'hidden', // Ensure content is clipped within the container
    shadowColor: '#000', // Add shadow for depth
    shadowOffset: {width: 0, height: 2}, // Shadow offset
    shadowOpacity: 0.3, // Shadow opacity
    shadowRadius: 4, // Shadow radius
    elevation: 5, // Android elevation for shadow
  },
  wrapper: {
    height: '100%', // Use full height of the container
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Background color for each slide
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10, // Rounded corners for images
  },
  pagination: {
    bottom: 10,
  },
  dot: {
    backgroundColor: 'rgba(255,255,255,.5)', // Slightly more opaque for inactive dots
    width: 8, // Increased dot size
    height: 8, // Increased dot size
    borderRadius: 4, // Make dots circular
  },
  activeDot: {
    backgroundColor: '#ff6347', // Active dot color to make it pop
    width: 10, // Increased size for active dot
    height: 10, // Increased size for active dot
    borderRadius: 5, // Make active dot circular
  },
});

export default styles;
