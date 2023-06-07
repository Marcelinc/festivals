import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Home from "./pages/Home";
import './css/App.css'
import Browser from "./pages/Browser";
import Collection from "./pages/Collection";
import Festival from "./pages/Festival";

const festivals = new ApolloClient({
  uri: `http://localhost:${process.env.REACT_APP_SERVER}/graphql`,
  cache: new InMemoryCache()
})

function App() {
  return (
    <>
    <ApolloProvider client={festivals}>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/browser' element={<Browser/>}/>
          <Route path="/collection" element={<Collection/>}/>
          <Route path="/collection/:id" element={<Festival/>}/>
        </Routes>
      </Router>
    </ApolloProvider>
    </>
  );
}

export default App;
