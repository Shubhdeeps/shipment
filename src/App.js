import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Content from "./components/Content";
import Details from "./components/Details";
import Header from "./components/Header";
import { setItems } from "./store/actionCreators/shipmentActions";

// Application Intro
//Header component consist header UI element, and a mock company tagline
//Content is a body component which hosts all the data from API in the table form
//Details is a Model component, which is use to show the details of a single row from the table.
// Multiple rows could be deleted by selecting them, if none of the rows are selected, then Delete button will remain disabled
// Only single row could be updated at a time, if none or more than one row is selected, then Details button will get disabled
//Details modal has two button, Close - To close modal without changes, and Update - To update changes that has been made
// The application is fully responsive as well, it support multiple devices i.e. Tablet, SmartPhone, etc.

function App() {
  const dispatch = useDispatch()
  const isSelected = useSelector(s => s.isSelected)

  // setItems() will fetch the data from api endpoint (using thunk middleware) and save it to the redux state
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
