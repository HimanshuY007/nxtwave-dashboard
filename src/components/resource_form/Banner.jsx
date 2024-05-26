const Banner = ({src}) => {
  return (
    <div>
      <img
        src={src}
        alt="Banner Image"
        className="size-full object-cover"
      />
    </div>
  );
};

export default Banner;
