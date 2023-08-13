type GalleryProductType = {
  image: string;
};

const Gallery = ({ image }: GalleryProductType) => {
  const featImage = image;

  return (
    <section className="product-gallery">
      <div className="product-gallery__image">
        <img src={featImage} alt="" />
      </div>
    </section>
  );
};

export default Gallery;
