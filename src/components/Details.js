import { Button, Form } from "react-bootstrap"
import { Modal } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { deleteItem, deSelectAllItems, newAlert, setDetailsSelected, updateItem } from "../store/actionCreators/shipmentActions"
import RenderModalFields from "./RenderModalFields"

// Each input field of Modal is render by same component, that is RenderModalFields

const Details = (props) => {
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
      dispatch(deSelectAllItems())
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
            SHIPMENT DETAILS
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          { 
          Object.keys(items.item).map((key, index) => {
            return( <RenderModalFields key={index} value={key} items={items} />)
          })
          }
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="me-2" onClick={() => handleClose()}>Close</Button>
          <Button onClick={() => handleUpdate()}>Update</Button>
        </Modal.Footer>
      </Modal>
    )
}



export default Details

