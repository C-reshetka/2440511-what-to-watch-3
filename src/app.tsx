import {Home, HomeProps} from './home/home.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {SignIn} from './sign-in/sign-in.tsx';
import {MyList} from './my-list/my-list.tsx';
import {MoviePage} from './movie-page/movie-page.tsx';
import {MoviePageReviews} from './movie-page/reviews/movie-page-reviews.tsx';
import {Player} from './player/player.tsx';
import {NotFound} from './not-found/not-found.tsx';
import {PrivateRoute} from './private-route/private-route.tsx';


type Props = HomeProps

export function App(props: Props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home {...props}/>}/>
        <Route path='/login' element={<SignIn/>}/>
        <Route path='/mylist' element={<PrivateRoute isAuthenticated={false}><MyList/></PrivateRoute>}/>
        <Route path='/films/:id' element={<MoviePage/>}>
          <Route path='review' element={<MoviePageReviews/>}/>
        </Route>
        <Route path='/player/:id' element={<Player/>}/>

        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}