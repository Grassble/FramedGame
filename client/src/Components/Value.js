export const MakeComponent = props => {
    const { path, value, info, update } = props;
  
    const [val, setVal] = useState(value);
    if (val !== value) { // don't update unnecessarily
      setVal(value);
    }

}