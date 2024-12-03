import React from 'react'

const regalos = [
    "https://z-p3-scontent.fiqq2-1.fna.fbcdn.net/v/t39.30808-6/465071104_1067680581715890_5030668028983048660_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGV66HbUZ2W8SYtzhiTx5t4Kx0Hc_8WakwrHQdz_xZqTAEnt5QwGpvRLjNGbJNT_jsYW4EegAI222JEFKApK_El&_nc_ohc=1v1D7JR0VcIQ7kNvgHQ1sYm&_nc_zt=23&_nc_ht=z-p3-scontent.fiqq2-1.fna&_nc_gid=Am89oLG-T_jeYYoJ3L8Rf-A&oh=00_AYCrhxbVTpacA2kP--5rvHRRKmXklEbCeuFrzacgMs-xfA&oe=6755321C",
    "https://z-p3-scontent.fiqq2-1.fna.fbcdn.net/v/t39.30808-6/464913595_1067680625049219_2511109827148969183_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEBeFjCs2eOnHtDfn7znUoA87FQjCeoK6bzsVCMJ6grpu4Y6JEpoNl2vRLNdGVIV-ALEOQyNk26z3XvHpPf3NdB&_nc_ohc=WD33wsJytCoQ7kNvgFd-Dkd&_nc_zt=23&_nc_ht=z-p3-scontent.fiqq2-1.fna&_nc_gid=AFr7nS0dRGjMV_RBlJBd8Dt&oh=00_AYDyUMw_GrHcYmtRZexnAG5Ifcc3rXUdGr34gmcHgHocRQ&oe=6755395B",
    "https://z-p3-scontent.fiqq2-1.fna.fbcdn.net/v/t39.30808-6/464951856_1067680681715880_1467441493441864219_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFir-F5VwWVxaawb0foY2zUn7xmeDy8192fvGZ4PLzX3RHhz5Mfb38Ge5nY8eg7Z9tkRzAcQyVH-KgOhfHObjsK&_nc_ohc=HYw0UDF2Op8Q7kNvgEOjs6q&_nc_zt=23&_nc_ht=z-p3-scontent.fiqq2-1.fna&_nc_gid=AcEYnccB6pzZmP7RxsMDhhm&oh=00_AYAWYS-phc8GckvNW1n9yw2WLZOZpetRz7SiCpEkspLHpg&oe=67553F1B",
    "https://z-p3-scontent.fiqq2-1.fna.fbcdn.net/v/t39.30808-6/455878930_1015188413631774_4416864235895801376_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEAcbfEG68OXps_OMG1-jwNWcd_R7HLdv5Zx39Hsct2_iGCp7P_6cUfafomRXbbuy9MsBv-82lQIONmuhY-GgqH&_nc_ohc=C1WdGRfVIZEQ7kNvgG8HrOI&_nc_zt=23&_nc_ht=z-p3-scontent.fiqq2-1.fna&_nc_gid=AR_TixXGvOINrP2wHpFq2VP&oh=00_AYBAOQj-FtR39vbxoWAdXqhbxSbG-UoHeQaemsxW5zm41Q&oe=67553A2C",
    "https://z-p3-scontent.fiqq2-1.fna.fbcdn.net/v/t39.30808-6/450405324_991492092668073_8688764365168720114_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGpsXTtBgAcP8M5OkCC1zzIF96CBmN3LeUX3oIGY3ct5bG98UFNnlq-GoWFnxun5BF3-xKhByUu_KwbHqCx5aIR&_nc_ohc=jX-jnzTQ684Q7kNvgE-3crM&_nc_zt=23&_nc_ht=z-p3-scontent.fiqq2-1.fna&_nc_gid=AcOHtfK5AfDw0dlbf7oby-Q&oh=00_AYCTCBv-eupPE0aCKXem2PBI5bDilFBgQBROkeu3xgdyBQ&oe=67552E58",
]


function NuestraHistoria() {
    return (
        <div>
            <div className='flex flex-col items-center justify-center mt-8 gap-3'>
                <img src="https://www.emporiolarosa.cl/wp-content/uploads/2021/02/decorado1.png" alt="" />
                <h2 className='text-4xl font-tittle text-[#de2d7a]'>–Nuestra Historia–</h2>
            </div>
            <div className='flex flex-col items-start justify-center px-80 py-11 text-left'>
                <p className='list-item'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quo, sed voluptatem eligendi magni natus voluptates asperiores quos. Eum autem odio quisquam suscipit maiores perspiciatis aperiam ipsa placeat, id sequi.
                    Reiciendis voluptatem cumque consectetur exercitationem incidunt. Voluptate nobis doloremque nemo modi fugit, perspiciatis aspernatur velit illum quos quisquam quae incidunt sequi exercitationem atque quidem architecto consequuntur? Esse repellendus inventore veritatis.
                    Deserunt repudiandae nemo beatae sit placeat necessitatibus obcaecati!</p>
                <p className='list-item'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio deserunt dolorem laboriosam exercitationem obcaecati reiciendis eius quis culpa temporibus deleniti similique magnam laudantium hic assumenda ut, a perferendis dolorum nemo.
                    Ad maiores fugiat eligendi laborum expedita sapiente ex temporibus, harum unde eius esse dolor molestias tempora dolorum sit nemo, rem error! Similique laudantium iusto adipisci tempore cumque ducimus quia reprehenderit!
                    Voluptatem delectus aspernatur accusantium iste harum? Iusto sapiente atque deserunt, nihil doloremque aperiam commodi iure incidunt nobis? A possimus dicta, quo ut, modi sapiente iure, est similique facere blanditiis aspernatur.</p>
                <p className='list-item'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum ipsam nisi accusamus? Culpa ratione eum non molestiae at, dignissimos similique sapiente in ab est omnis sequi nulla perferendis consequatur ullam.
                    A tempore numquam dignissimos voluptate libero, perferendis, temporibus animi consectetur impedit eligendi expedita consequuntur voluptatibus dolor quidem eveniet id at dolorum inventore accusamus in dolores exercitationem obcaecati, nisi similique! Illo.</p>
            </div>
            <div className='grid grid-cols-5 gap-9 px-80 pb-12'>
                {regalos.map((img, index) => (
                    <div
                        key={index}
                        className='rounded-lg shadow-2xl'
                    >
                        <img 
                            src={img}  
                            alt="" 
                            className='w-full h-full rounded-lg shadow-2xl'
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NuestraHistoria