import {
  Books,
  Header,
  Footer
} from '../index'
import '../../styles/header.scss'

const HomePage = () => {
  return (
    <>
      <Header/>
      <main>
        <Books/>
      </main>
      <Footer/>
    </>
  );
}

export { HomePage }