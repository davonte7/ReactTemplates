import Header        from "./Header";
import GetStarted    from "./GetStarted";
import WhitePapers    from "./WhitePapers";
import React         from 'react'


function Home(){

  return <React.Fragment>
           <Header     />
           <GetStarted />
           <WhitePapers />
         </React.Fragment>
}

export default Home;