
const Cell = ({ color }) => {
    let style = {
        backgroundColor: color
    }
    
    return (
        <div className='timeline-cells-cell' style={style}>    
        </div>
    )
}

export default Cell
