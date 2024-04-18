import { useEffect } from "react"


export default function Test({projectList}) {

    useEffect(() => {
        console.log('Test cmp render - ', projectList)
    });

    return <div className="w-full">
        {
            projectList?.map(el => {
                return <div key={el.id} className="w-full bg-violet-200 my-4 p-2">
                    <p className="text-[28px]">{el.name}</p>
                    <p>{el.description}</p>
                </div>
            })
        }
    </div>
}