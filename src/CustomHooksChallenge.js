import React, { useState } from 'react';

const CustomHooksChallenge = () => {
  // const [name, handleSetName] = useInput('')
  // const [lastName, handleSetLastName] = useInput('')
  // const [age, handleSetAge] = useInput(0)

  // const { value: name, onChange: handleSetName} = useInput('')
  // const { value: lastName, onChange: handleSetLastName} = useInput('')
  // const { value: age, onChange: handleSetAge} = useInput(0)

  // return (
  //   <form>
  //     <input 
  //       type="text"
  //       placeholder="Name"
  //       value={name}
  //       onChange={handleSetName}
  //     />
  //     <input 
  //       type="text"
  //       placeholder="Last Name"
  //       value={lastName}
  //       onChange={handleSetLastName}
  //     />
  //     <input 
  //       type="number"
  //       placeholder="Age"
  //       value={age}
  //       onChange={handleSetAge}
  //     />
  //   </form>
  // )

  return (
    <form>
      <input 
        type="text"
        placeholder="Name"
        {...useInput('')}
      />
      <input 
        type="text"
        placeholder="Last Name"
        {...useInput('')}
      />
      <input 
        type="number"
        placeholder="Age"
        {...useInput(0)}
      />
    </form>
  )
}

const useInput = (startingValue) => {
  const [value, setValue] = useState(startingValue)
  const onChange = e => setValue(e.target.value)
  // return [value, onChange]
  return { value, onChange }
}

export default CustomHooksChallenge;
