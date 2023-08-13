/**
 * Props for the Gallery component.
 */
type GalleryProps = {
  /** The featured image URL to be displayed. */
  image: string;
};

/**
 * Displays the gallery section for a product.
 *
 * @param {GalleryProps} props - The props for the component.
 * @returns {JSX.Element} The Gallery component.
 */
const Gallery = ({ image }: GalleryProps) => {
  const featImage = image;

  return (
    <section className="product-gallery">
      <div className="product-gallery__image">
        {/* Display the featured image using an <img> element. */}
        <img src={featImage} alt="" />
      </div>
    </section>
  );
};

// Export the Gallery component as the default export.
export default Gallery;
