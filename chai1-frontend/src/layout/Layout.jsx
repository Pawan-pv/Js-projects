import PropTypes from 'prop-types';
import Header from "../pages/Header"
import LeftComponents from "../components/LeftComponents"
function Layout({children}) {
  return (
    <div className="bg-gradient-to-r text-white from-black via-slate-500 to-blue-950">
    <div className=' p-1'><Header/></div>
    <div></div>
    <div>{children}</div>
    </div>
    
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout