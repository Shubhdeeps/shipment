import { useState } from "react"
import { useDispatch } from "react-redux"
import { deSelectItem, selectItem } from "../store/actionCreators/shipmentActions"

const RenderTableContent = ({ product }) => {
    const deselect = "DESELECTED"
    const select = "SELECTED"

    const [isSelected, setIsSelected] = useState(deselect)
    const dispatch = useDispatch()
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
        <tr onClick={() => handleClick()} style={{background: isSelected === select ? '#D9D9D9' : '', cursor: 'pointer'}}>
            <th scope="row">{product.orderNo}</th>
            <td>{product.date}</td>
            <td>{product.customer}</td>
            <td>{product.trackingNo}</td>
            <td>{product.status}</td>
            <td>{product.consignee}</td>
         </tr>
    )
}

export default RenderTableContent