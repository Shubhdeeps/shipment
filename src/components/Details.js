import { useEffect, useState } from "react"
import { Button, Form } from "react-bootstrap"
import { Modal } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { deleteItem, newAlert, newItemObject, setDetailsSelected, updateItem } from "../store/actionCreators/shipmentActions"



const Details = (props) => {
    const type = useSelector(s => s.buttonType)
    const dispatch = useDispatch()
    const items = useSelector(s => s.shipment)

    const handleUpdate = () => {
      dispatch(deleteItem())
      dispatch(updateItem())
      dispatch(newAlert('Item updated successfully'))
      handleClose()
    }
    const handleClose = () => {
      dispatch(setDetailsSelected(false))
    }

    return(
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            SHIPMENT {type.toUpperCase()}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        { 
        Object.keys(items.item).map((key, index) => {
          return( <UpdateModal key={index} value={key} readOnly={type!=='Update'}/>)
        })
        }
         
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => handleClose()}>Close</Button>
          {type === 'Update' && <Button onClick={() => handleUpdate()}>Update</Button>}
        </Modal.Footer>
      </Modal>
    )
}

const UpdateModal = ({value, readOnly}) => {
  const items = useSelector(s => s.shipment)
  const [inputValue, setInputValue] = useState(items.item[value])
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }
  useEffect(() => {
    dispatch(newItemObject(value, inputValue))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue])
   
    return(
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>{value}</Form.Label>
              <Form.Control
                  required
                  type="text"
                  value={inputValue}
                  disabled={value === 'orderNo'}
                  readOnly={readOnly}
                  onChange={(e) => handleChange(e)}
              />
          </Form.Group>
    )
}

export default Details

