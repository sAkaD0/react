import Photo from "./Photo";

const book = [

  {
    id:1,
    url:"https://fastly.picsum.photos/id/21/200/200.jpg?hmac=T8DSVNvP-QldCew7WD4jj_S3mWwxZPqdF0CNPksSko4",
    width: "200px",
    height: "200px",
  },
  {
    id:2,
    url:"https://fastly.picsum.photos/id/21/100/100.jpg?hmac=T8DSVNvP-QldCew7WD4jj_S3mWwxZPqdF0CNPksSko4",
    width: "200px",
    height: "200px",
  }
  ]

const Gallery = () => {
  return (
    <>
      <h1>Galerie de photos</h1>
      {
        book.map((element) => {
          return(
            <Photo url={element.url}></Photo>
          );

        })
      }
    </>
  );
};

export default Gallery;