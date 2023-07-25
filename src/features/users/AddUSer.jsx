import TextField from "../../components/TextField";
import Button from "../../components/Button";
import { useState } from "react";

const AddUSer = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
  });

  const handleAddUser = () => {
    console.log(values);
  };

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label="Name"
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}                
        inputProps={{ type: "text", placeholder: "John Doe" }}
      />
      <br />
      <TextField
        label="Email"
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}        
        inputProps={{ type: "email", placeholder: "john@doe.com" }}
      />
      <Button onClick={handleAddUser}>Submit</Button>
    </div>
  );
};

export default AddUSer;
