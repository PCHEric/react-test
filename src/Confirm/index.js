import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

function Confirm(props) {
    const { message, onClick } = props;
    return (
        <div className='confirm'>
            <div className='confirm__content'>
                <div className='confirm__title'>{message}</div>
                <div className='confirm__btn'>
                    <button className='btn sure' onClick={e => onClick(true)}>确认</button>
                    <button className='btn cancel' onClick={e => onClick(false)}>取消</button>
                </div>
            </div>
        </div>

    )
}

const confirm = (msg) => {
    const node = document.createElement('div');
    document.body.appendChild(node)

    return new Promise(resolve => {
        ReactDOM.render(<Confirm message={msg} onClick={e => {
            resolve(e)
            ReactDOM.unmountComponentAtNode(node)
            document.body.removeChild(node)
        }} />, node)

    })

}

export default confirm