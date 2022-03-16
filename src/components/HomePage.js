
function HomePage (props) {
    return (
        <div>
            <h1>My Hardware Store</h1>

            <span>Currently On Sale : {props.saleItem}</span>
            {/* <span><button onClick={props.toggleEditSaleItem}>Edit Sale Item</button></span> */}

            {/* {Jon's Version: } */}
            <span><button onClick={props.toggleEditSaleItem}>{props.editable ? 'Hide' : 'Edit Sale Item'}</button></span>
            
            { props.editable ? <div>
                <input 
                    type= "text" 
                    value={props.saleItem} //We have to tell React how to change it
                    onChange ={ props.handleItemCurrentlyOnSaleChange} //here we tell React, how to react
                />
                </div> : null }
  
        </div>
    )
}

export default HomePage;


// {/* My version */}
//             {/* { props.editable ? <div><input type= "text" /><span><button onClick={props.toggleEditSaleItem}>Hide</button></span></div> : <span><br></br><button onClick={props.toggleEditSaleItem}>Edit Sale Item</button></span> } 
//             { props.editable ? <div><input type= "text" /></div> : null }
//             */}
           
//             {/* initial code--
            
//             <div>
//                 <input type = "text" />
//             </div> */}

//             {/* <h2>Currently On Sale : {props.saleItem}</h2> */}