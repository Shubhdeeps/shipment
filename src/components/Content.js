import { useEffect } from "react"
import { Container, Spinner, Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { deleteItem, detailsButton, newAlert, setDetailsSelected, setItem, updateButton } from "../store/actionCreators/shipmentActions"
import { styles } from "../styles/styles"
import RenderTableContent from "./RenderTableContent"


const Content = () => {
   const items = useSelector(s => s.shipment)
   const alertMessage = useSelector(s => s.alertMessgae)
   const errorMessage = useSelector(s => s.errorMessage)
   const dispatch = useDispatch()
   const headers = ['ORDERNO', 'DELIVERYDATE', 'CUSTOMER', 'TRACKINGNO', 'STATUS', 'CONSIGEE']

   const handleDelete = () => {
       dispatch(deleteItem())
       dispatch(newAlert('Item/Items deleted successfully'))
   }
   const handelUpdate = () => {
    dispatch(setDetailsSelected(true))
    dispatch(setItem(items.orderNo[0]))
    dispatch(updateButton())
   }

   const handleSelected = () => {
    dispatch(setDetailsSelected(true))
    dispatch(setItem(items.orderNo[0]))
    dispatch(detailsButton())
   }
   useEffect(() => {
    setTimeout(() => dispatch(newAlert('')) , 4000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [alertMessage])

 

   const renderAlert = () => {
       return(
        <div className="alert alert-success" role="alert">
                {alertMessage}
        </div>)
   }
    return(
        <Container>
            <div className="rounded-3 container" style={styles.topElement}></div>
            <div className="shadow rounded-3 container ">
                <br />
                {alertMessage && renderAlert()}
                <div className="d-flex w-100 justify-content-end"> 
                    <button type="button" className="btn btn-outline-info ps-3 pe-3 me-2" disabled={items.orderNo.length !== 1} onClick={() => handleSelected()}>Details</button>
                    <button type="button" className="btn btn-outline-warning ps-3 pe-3 me-2" disabled={items.orderNo.length !== 1} onClick={() => handelUpdate()}>Update</button>
                    <button type="button" className="btn btn-outline-danger ps-3 pe-3 me-2" disabled={items.orderNo.length === 0} onClick={() => handleDelete()}>Delete</button>
                </div>
                <div className="table-responsive">
                    <Table className="table-responsive-lg">
                        <thead>
                                <tr>
                                    {headers.map(x => <th scope="col" key={x}>{x}</th>)}
                                </tr>
                            </thead>
                            <tbody>
                                { errorMessage ? <tr><td colSpan={6} className='text-center'>{errorMessage}</td></tr> : 
                                    <>{items.products.length !== 0 && items.products.map((product) => {
                                        return <RenderTableContent product={product} key={product.trackingNo} />
                                    })}</>
                                }
                            </tbody>
                    </Table>
                    {items.products.length === 0 && <div className="text-center mt-5 mb-5"> <Spinner animation="border" /></div> && !errorMessage}
               </div>
            </div>
               <br />
               <br />
               <br />
               <br />
        </Container>
    )
}

export default Content