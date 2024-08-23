import { ApolloProvider } from "@apollo/client";
import "./App.css";
import HomePage from "./pages/Home";
import Helmet from "react-helmet";
import ApolloClientInstance from "./services/graphqlClient";

function App() {
  return (
    <ApolloProvider client={ApolloClientInstance}>
      <HomePage />
      <Helmet>
        {/* <script async src="/js/modernizr.min.js"></script> */}
        {/* <!-- jQuery JS --> */}
        {/* <script async src="/js/jquery.js"></script> */}
        {/* <!-- Bootstrap JS --> */}
        {/* <script async src="/js/bootstrap.min.js"></script> */}
        {/* <!-- sal.js --> */}
        {/* <script async src="/js/sal.js"></script> */}
        {/* <!-- Dark Mode Switcher --> */}
        {/* <script async src="/js/js.cookie.js"></script>
        <script async src="/js/jquery.style.switcher.js"></script>
        <script async src="/js/swiper.js"></script>
        <script async src="/js/jquery-appear.js"></script>
        <script async src="/js/odometer.js"></script>
        <script async src="/js/backtotop.js"></script>
        <script async src="/js/isotop.js"></script>
        <script async src="/js/imageloaded.js"></script> */}

        {/* <script async src="/js/wow.js"></script>
        <script async src="/js/waypoint.min.js"></script>
        <script async src="/js/easypie.js"></script>
        <script async src="/js/text-type.js"></script>
        <script async src="/js/jquery-one-page-nav.js"></script>
        <script async src="/js/bootstrap-select.min.js"></script>
        <script async src="/js/jquery-ui.js"></script>
        <script async src="/js/magnify-popup.min.js"></script>
        <script async src="/js/paralax-scroll.js"></script>
        <script async src="/js/paralax.min.js"></script>
        <script async src="/js/countdown.js"></script>
        <script async src="/js/plyr.js"></script> */}
        {/* <!-- Main JS --> */}
        {/* <script async src="/js/main.js"></script> */}
      </Helmet>
    </ApolloProvider>
  );
}

export default App;
