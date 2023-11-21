import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Confirmed,
  SignIn,
  SignUp,
  SignUpActivate,
  SignUpConfirmation,
  HomePage, 
  SelectedBook,
  SearchData,
  Basket,
} from "./components";

//voxoha1828@soebing.com
//evtyzyjdfz1

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'}>
          <Route index element={<HomePage />} />
          <Route path={'basket'} element={<Basket/>} />
          <Route path={'search'} >
            <Route path={':id'} element={<SearchData />} />
          </Route>
          <Route path={'books'}>
            <Route path={':id'} element={<SelectedBook/>}/>
            <Route path={'*'} element={<div>Wrong Page</div>}/>
          </Route>
          <Route path={'signUp'} element={<SignUp/>}/>
          <Route path={'signIn'} element={<SignIn/>}/>
          <Route path={'signUpConfirmation'} element={<SignUpConfirmation/>}/>
          <Route path={'confirmed'} element={<Confirmed/>}/>
          <Route path={'activate/:uid/:token'} element={<SignUpActivate/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
