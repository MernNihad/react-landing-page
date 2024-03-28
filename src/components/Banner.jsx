import React from 'react'


function Banner() {


    const img1 = "https://images.unsplash.com/photo-1429041966141-44d228a42775?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

  return (
    <div>
        <div className="mt-10 h-[400px] w-full" style={{backgroundImage:`url('${img1}')`,backgroundAttachment:"fixed"}} >
            {/* <img style={{backgroundAttachment:"fixed"}} src={img1} alt="" className='w-full m-auto h-[500px]' /> */}
        </div>
    </div>
  )
}

export default Banner