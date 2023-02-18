import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import "react-multi-carousel/lib/styles.css";
import { PageProvider } from '../context/page'
import ContextMenu, { Item } from '../components/Context';
import "../styles/globals.css"

function App({ Component, pageProps }) {
  return <>
    <PageProvider>
    <main>
          <head>
            <title>Thendra | Full-stack Developer</title>
          </head>
          <ContextMenu
            content={event => <>
              <div>
                {event.hasBack && (<Item icon={<i className="fa fa-arrow-left" />} text="Back" kbd={["Alt", "◀"]} onClick={event.goBack} />)}
                {event.hasForward && (<Item icon={<i className="fa fa-arrow-right" />} text="Forward" kbd={["Alt", "▶"]} onClick={event.goForward} />)}
                <Item icon={<i className="fa fa-redo" />} text="Refresh" kbd={["Ctrl", "R"]} onClick={event.refreshPage} />
              </div>

              <div className="pt-2">
                <Item icon={<i className="fa fa-code" />} text="View Source" onClick={event.viewSource} />
              </div>
            </>}
          >
          <Navbar/>
          <main className="min-h-[67vh] px-6 lg:px-0">
              <Component {...pageProps} />
              </main>
              
              <Footer/>
              </ContextMenu>
              <div className="color-layout layout-purple position-right-top" />
              <div className="color-layout layout-blue position-left-bottom" />
              </main>
    </PageProvider>
  </>
}

export default App