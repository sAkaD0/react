import Photo from "./Photo";

const book = [

    {
      id: "20",
      author: "Aleks Dorohovich",
      width: 3670,
      height: 2462,
      url: "https://unsplash.com/photos/nJdwUHmaY8A",
      download_url: "https://picsum.photos/id/20/500/500"
    },
    {
      id: "21",
      author: "Alejandro Escamilla",
      width: 3008,
      height: 2008,
      url: "https://unsplash.com/photos/jVb0mSn0LbE",
      download_url: "https://picsum.photos/id/21/500/500"
    },
    {
      id: "22",
      author: "Alejandro Escamilla",
      width: 4434,
      height: 3729,
      url: "https://unsplash.com/photos/du_OrQAA4r0",
      download_url: "https://picsum.photos/id/22/500/500"
    },
    {
      id: "23",
      author: "Alejandro Escamilla",
      width: 3887,
      height: 4899,
      url: "https://unsplash.com/photos/8yqds_91OLw",
      download_url: "https://picsum.photos/id/23/500/500"
    },
    {
      id: "24",
      author: "Alejandro Escamilla",
      width: 4855,
      height: 1803,
      url: "https://unsplash.com/photos/cZhUxIQjILg",
      download_url: "https://picsum.photos/id/24/500/500"
    },
    {
      id: "25",
      author: "Alejandro Escamilla",
      width: 5000,
      height: 3333,
      url: "https://unsplash.com/photos/Iuq0EL4EINY",
      download_url: "https://picsum.photos/id/25/500/500"
    },
    {
      id: "26",
      author: "Vadim Sherbakov",
      width: 4209,
      height: 2769,
      url: "https://unsplash.com/photos/tCICLJ5ktBE",
      download_url: "https://picsum.photos/id/26/500/500"
    },
    {
      id: "27",
      author: "Yoni Kaplan-Nadel",
      width: 3264,
      height: 1836,
      url: "https://unsplash.com/photos/iJnZwLBOB1I",
      download_url: "https://picsum.photos/id/27/500/500"
    },
    {
      id: "28",
      author: "Jerry Adney",
      width: 4928,
      height: 3264,
      url: "https://unsplash.com/photos/_WiFMBRT7Aw",
      download_url: "https://picsum.photos/id/28/500/500"
    },
    {
      id: "29",
      author: "Go Wild",
      width: 4000,
      height: 2670,
      url: "https://unsplash.com/photos/V0yAek6BgGk",
      download_url: "https://picsum.photos/id/29/500/500"
    }
  ]

const Gallery = () => {
  return (
    <>
      <h1>Galerie de photos</h1>
      {
        book.map((element) => {
          return(
            <>
              <p>{element.author} #{element.id}</p>
              <Photo url={element.download_url}></Photo>
            </>
          );

        })
      }
    </>
  );
};

export default Gallery;