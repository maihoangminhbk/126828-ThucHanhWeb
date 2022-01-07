import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { CardMedia } from '@material-ui/core/';
// import { useDispatch, useSelector } from 'react-redux';
// import useStyles from './styles';
// const { post, posts, isLoading } = useSelector((state) => state.posts);
const images = [
  // post.selectedFile,
  'https://pbs.twimg.com/media/FIFGVy_agAAPyq7.jpg',
  'https://i2.wp.com/www.trendyicecream.com/wp-content/uploads/2018/04/fotos-antiguas.jpg?fit=4272%2C2848&ssl=1',
  'https://store-images.s-microsoft.com/image/apps.10414.14382110684585838.1ce87d04-f578-4f7f-a6f2-dc93a65420e5.e3718ac6-8122-4723-b697-85b1dd7822ba?w=320&h=320&q=70&mode=crop'
];
//   'https://www.w3schools.com/howto/img_nature_wide.jpg',
//   'https://www.w3schools.com/howto/img_snow_wide.jpg',
  // post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'

// const images ={post.selectedFile};
const Slideshow = () => {
  // const { post} = useSelector((state) => state.posts);
  // const classes = useStyles();
  // const images = [
  //   post.selectedFile
  // ];
    return (
      <div className="slide-container">
                {/* <div className={classes.imageSection}>
                  <img className={classes.media} src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
                </div> */}
        <Zoom scale={0.4}>
          {
            // <img src={selectedFile} width="200px" />
            // const images ={post.selectedFile};
            images.map((each, index) => <img key={index} style={{width: "100%", height: "50%", alignItems: "center"}} src={each} />)
          }
        </Zoom>
      </div>
    )
}

export default Slideshow;