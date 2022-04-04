import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deSelectItem, selectItem } from "../store/actionCreators/shipmentActions"

const TableRow = ({ product }) => {
    const deselect = "DESELECTED"
    const select = "SELECTED"

    const [isSelected, setIsSelected] = useState(deselect)
    const items = useSelector(s => s.shipment)

    const dispatch = useDispatch()
    const checkStatus = () => {
        switch(product.status){
            case `'Shipped'`:
                return "text-info"
            case `'Delivered'`:
                return "text-success"
            case `'In Transit'`:
                return "text-warning"
            default:
                return "text-danger"
        }
    }
    const handleClick = () => {
        if(isSelected === select){
            setIsSelected(deselect)
            dispatch(deSelectItem(product.orderNo))
        }
        else{
            setIsSelected(select)
            dispatch(selectItem(product.orderNo))
        }
    }

    return(
        <tr onClick={() => handleClick()} style={{background: items.orderNo.includes(product.orderNo) ? '#D7EDDB' : '', cursor: 'pointer'}}>
            <th scope="row">{product.orderNo}</th>
            <td>{product.date}</td>
            <td>{product.customer}</td>
            <td>{product.trackingNo}</td>
            <td className={checkStatus()}>{product.status}</td>
            <td>{product.consignee}</td>
         </tr>
    )
}

export default TableRow