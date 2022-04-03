import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Content from "./components/Content";
import Details from "./components/Details";
import Header from "./components/Header";
import { setItems } from "./store/actionCreators/shipmentActions";
function App() {
  const dispatch = useDispatch()
  const isSelected = useSelector(s => s.isSelected)

  // setItems will fetch the data from api endpoint (using thunk middleware) and save it to the redux state
  useEffect(() => {
    dispatch(setItems())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
        <Header />
        <Content />
        <Details
        show={isSelected}
        />
        <p className="blocksquote text-end me-1">A product by Shubhdeep Singh</p>
      </div>
  );
}

export default App;
