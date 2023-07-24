import TextField from "../../components/TextField";

const AddUSer = () => {
  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label="Name"
        inputProps={{ type: "text", placeholder: "John Doe" }}
      />
    </div>
  );
};

export default AddUSer;
