import TextField from "../../components/TextField";
import Button from "../../components/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const EditUser = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
  });

  const handleEditUser = () => {
    setValues({ name: "", email: "" });
    navigate("/view-users");
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
      <Button onClick={handleEditUser}>Edit</Button>
    </div>
  );
}

export default EditUser