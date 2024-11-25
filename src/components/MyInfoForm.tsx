interface MyInfoFormProps {
  myInfoHandlerCallback: (name: string, value: string) => void;
}

function MyInfoForm({ myInfoHandlerCallback }: MyInfoFormProps) {
  const handleBlur=(event: React.FocusEvent<HTMLInputElement>)=>{
    myInfoHandlerCallback(event.target.name, event.target.value)
  }

  return (
    <div className='input-form-container'>
      <label htmlFor='myname'>My Name</label>
      <input type='text' id='myname' name='myname' onBlur={handleBlur} />
      <label htmlFor='mycallsign'>My Callsign</label>
      <input
        type='text'
        id='mycallsign'
        name='mycallsign'
        onBlur={handleBlur}
      />
      <label htmlFor="myreturnaddress">My Address</label>
      <input type="text" id="myreturnaddress" name="myreturnaddress" onBlur={handleBlur} />
      <label htmlFor='mycity'>My City</label>
      <input type='text' id='mycity' name='mycity' onBlur={handleBlur} />
      <label htmlFor='mycounty'>My County</label>
      <input type='text' id='mycounty' name='mycounty' onBlur={handleBlur} />
      <label htmlFor='mystate'>My State</label>
      <input type='text' id='mystate' name='mystate' onBlur={handleBlur} />
      <label htmlFor='myreturnzip'>My Zip</label>
      <input type='text' id='myreturnzip' name='myreturnzip' onBlur={handleBlur} />
      <label htmlFor='mycountry'>My Country</label>
      <input type='text' id='mycountry' name='mycountry' onBlur={handleBlur} />
      <label htmlFor='mycqzone'>My CQ Zone</label>
      <input type='number' id='mycqzone' name='mycqzone' onBlur={handleBlur} />
      <label htmlFor='myarrlsection'>My ARRL Section</label>
      <input
        type='text'
        id='myarrlsection'
        name='myarrlsection'
        onBlur={handleBlur}
      />
      <label htmlFor='mygrid'>My Grid</label>
      <input type='text' id='mygrid' name='mygrid' onBlur={handleBlur} />
    </div>
  )
}

export default MyInfoForm
