import OurItems from "../ourItems/OurItems"

const itemsNeeded =[
    {
        id:1,
        desccription:"Passport",
        quantity:2
    },
    {
        id:2,
        desccription:"Socks",
        quantity:4
    },{
        id:3,
        desccription:"Luggage",
        quantity:6
    },
                   ]




const Items = () => {
  return (
    <div className="flex flex-col bg-gray-300 min-h-screen justify-center items-center">
        <ul>
            {itemsNeeded.map((items)=>(
                <OurItems key={items.id} {...items}/>
            ))}
            {/* {itemsNeeded.map((items,i)=>{
                
            })} */}
           {/* {itemsNeeded.map((items,i)=>
            <div> {...items}</div>
           )} */}
        </ul>

    </div>
  )
}

export default Items