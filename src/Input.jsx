import React from 'react'



function Input() {


    const handleSubmit = (e) => {
        e.preventDefault()
    }

    function clickBtn() {

    }


    return (

        <>
            <h1 className='todo'>Todo list</h1>
            <hr />

            <div className='userInput'>

                <form onSubmit={handleSubmit}>
                    <div className="mainInput">

                        <div className="name">
                            <label htmlFor="name">Enter your name:</label>
                            <input
                                className='form-control'
                                type="text"
                                name="name"
                                id="name"
                                placeholder='Enter your name..' />
                        </div>

                        <div className="age">
                            <label htmlFor="age">Enter your age:</label>
                            <input
                                className='form-control'
                                type="number"
                                name="age"
                                id="age"
                                placeholder='Enter your age..' />
                        </div>

                        <div className="gender">
                            <label htmlFor="gender">Status:</label>
                            <input
                                className='form-control'
                                type="text"
                                name="gender"
                                id="gender"
                                placeholder='Enter your status..' />
                        </div>

                    </div>

                </form>

                <div className="userBtn" onClick={clickBtn}>
                    <button type='submit'>Send your Info</button>
                </div>

            </div>


            <div className="container">

                <table>
                    <tr>
                        <th style={{ width: '10%' }}>ID</th>
                        <th>Name</th>
                        <th style={{ width: '20%' }}>Age</th>
                        <th style={{ width: '16%' }} colSpan='3'>Status</th>
                    </tr>

                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td style={{width: '3%'}}>Delete</td>
                        <td style={{width: '3%'}}>Edit</td>
                    </tr>
                </table>



            </div>





        </>
    )
}

export default Input