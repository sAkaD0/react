const Photo = (props) => {

    console.log(props.url);
    return (
      <img src={props.url}></img>
    );
  };
  
  export default Photo;