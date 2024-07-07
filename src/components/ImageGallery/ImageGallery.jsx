import PropTypes, { object } from 'prop-types';

import styles from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

function ImageGallery({ photos, onOpen }) {
  return (
    <ul className={styles.ul}>
      {photos.map(photo => (
        <li key={photo.id} className={styles.li}>
          <ImageCard photo={photo} modal={false} onOpen={onOpen} />
        </li>
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  photos: PropTypes.arrayOf(object),
  onOpen: PropTypes.func,
};

export default ImageGallery;
