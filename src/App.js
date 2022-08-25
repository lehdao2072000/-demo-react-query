import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './App.css'
import {HomePage} from './components/Home.page'
import {RQSuperHeroesPage} from './components/RQSuperHeroes.page'
import {SuperHeroesPage} from './components/SuperHeroes.page'
import {QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";
import {SuperHero} from "./components/SuperHero.page";
import {ParallelQueries} from "./components/ParallelQueries.page";
import {DynamicParallelPage} from "./components/DynamicParallel.page";
import {DependentQueriesPage} from "./components/DependentQueries.page";

const queryClient = new QueryClient()

function App() {

    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/super-heroes'>Traditional Super Heroes</Link>
                            </li>
                            <li>
                                <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
                            </li>
                            <li>
                                <Link to='/rq-paralleQueries'>paralleQueries</Link>
                            </li>
                            <li>
                                <Link to='/rq-DynamicParallelPage'>DynamicParallelPage</Link>
                            </li>
                            <li>
                                <Link to='/rq-DependentQueriesPage'>DependentQueriesPage</Link>
                            </li>
                        </ul>
                    </nav>
                    <Routes>
                        {/*<Route path='/rq-DependentQueriesPage' element={<DependentQueriesPage email=="vishwas@example.com"/>}/>*/}
                        <Route path='/rq-DynamicParallelPage' element={<DynamicParallelPage heroIds={[1, 3]}/>}/>
                        <Route path='/rq-paralleQueries' element={<ParallelQueries/>}/>
                        <Route path='/rq-super-heroes/:heroId' element={<SuperHero/>}/>
                        <Route path='/super-heroes' element={<SuperHeroesPage/>}/>
                        <Route path='/rq-super-heroes' element={<RQSuperHeroesPage/>}/>
                        <Route path='/' element={<HomePage/>}/>
                    </Routes>
                </div>
            </Router>
            <ReactQueryDevtools initialIsOpen={false} position="bottom-right"/>
        </QueryClientProvider>
    )
}

export default App