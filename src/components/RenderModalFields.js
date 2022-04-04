import { useState } from "react"
import { Form } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { newItemObject } from "../store/actionCreators/shipmentActions"

const RenderModalFields = ({value, items}) => {
 
    const [inputValue, setInputValue] = useState(items.item[value])
    const dispatch = useDispatch()
  
    const handleChange = (e) => {
      setInputValue(e.target.value)
      dispatch(newItemObject(value, e.target.value))
    }
  
      return(
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>{value}</Form.Label>
                <Form.Control
                    type="text"
                    value={inputValue}
                    disabled={value === 'orderNo'}
                    onChange={(e) => handleChange(e)}
                />
            </Form.Group>
      )
  }

  export default RenderModalFields