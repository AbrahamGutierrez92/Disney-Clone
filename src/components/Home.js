import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Recommends from "./Recommends";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { setMovies } from "../features/movie/MovieSlice";
import { selectUserName } from "../features/user/userSlice";


const Home = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    db.collection('movies').onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        switch(doc.data().type){
          case 'recommend' :
            recommends.push({id: doc.id.anchor, ...doc.data()});
            break;
          
          case 'new':
            newDisneys.push({id: doc.id.anchor, ...doc.data()});
            break;
          
          case 'original':
            originals.push({id: doc.id.anchor, ...doc.data()});
            break;

          case 'trending':
            trending.push({id: doc.id.anchor, ...doc.data()});
            break;
        }
      });
    });

    dispatch(setMovies({
      recommend: recommends,
      newDisney: newDisneys
    }))

  });

  return(
      <Container>
          <ImgSlider/>
          <Viewers />
          <Recommends/>
          <NewDisney/>
          <Originals/>
      </Container>
  );
};

const Container = styled.main`
  
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after{
    
    content: "";
    position: absolute;
    inset: 0px;
    opacity; 1;
    z-index: -1;
  }
`;
export default Home;