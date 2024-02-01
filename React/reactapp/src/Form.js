import React ,{ useState , target} from 'react'
import UserData from './UserData';

export default function Form() {
    const [Name, setName] = useState();
    const SetUserName = (e) => {
        console.log(e, target.value)
        setName(e.target.value)
    }

    const [Position, setPosition] = useState();
    const setUserPosition = (e) => {
        console.log(e, target.value)
        setPosition(e.target.value)
    }

    const [Age, setAge] = useState();
    const setUserAge = (e) => {
        console.log(e, target.value)
        setAge(e.target.value)
    }


    return (
        <div className='container'>
            <h2>Form SignUp</h2>
            <input type='text' onChange={(e) => SetUserName(e)} placeholder='UserName' id='username' className='form-control' />
            <UserData name={Name} />

            <input type='text' onChange={(e) => setUserPosition(e)} placeholder='Position' id='position' className='form-control' />
            <UserData position={Position} />

            <input type='number' onChange={(e) => setUserAge(e)} placeholder='Age' id='age' className='form-control' />
            <UserData age={Age} />
        </div>
    );
}

