import React, { useState, useEffect } from 'react';
import confirm from './Confirm'

function Test7() {
    const [value, setValue] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            let res = await confirm('确定删除吗')
            if(res){
                console.log("是")
                setValue('是')
            }else{
                console.log("否")
                setValue('否')
            }

        }
        if(!value){
            fetchData();
        }

    })

    return (
        <div>
            <h1>confirm方法组件</h1>
            {!!value ? <div>你选择了：{value}</div> : ''}
        </div>
    )
}
export default Test7;
