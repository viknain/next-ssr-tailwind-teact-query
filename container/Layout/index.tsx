import Footer from "../Footer"
import Header from "../Header"
const Layout: React.FC<any> = ({ children }) => {

  return (
    <div className={`layout`}>
      <div className="container">
        <Header />
        <div className="main-container">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
