import RadioButton from "./RadioButton";
export default function Radiogroup(data) {
    return (
        <>
        {
          Array(data).forEach(element => {
            return <RadioButton {...element} />
            
          })
}   
        </>
    )

}
