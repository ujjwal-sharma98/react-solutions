import ErrorBoundary from './components/ErrorBoundary'
import UseEffectExamples from './components/UseEffectExamples'
import Displaydot from './components/DisplayDot'
import Pagination from './components/Pagination'
import Counter from './components/Counter'
import SearchComponent from './components/SearchComponent'

function App() {

  return (
    <>
      <ErrorBoundary  >
        <div>
          {/* <UseEffectExamples /> */}
          {/* <Displaydot /> */}
          {/* <Pagination /> */}
          {/* <Counter /> */}
          <SearchComponent />
        </div>
      </ErrorBoundary>
    </>
  )
}

export default App
