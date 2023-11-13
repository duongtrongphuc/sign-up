import "./SignUp.css";
import { useFormik } from "formik";
import * as Yup from "yup";
const SignUpForm= () =>{
    
    const formik= useFormik({
        initialValues: {
            name:"",
            address:"",
            bankaccount:"",
            taxcode:"",
            phone:"",
            code:""
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Required").matches(/^[a-zA-Z]+ [a-zA-Z]+$/,"Not Valid!"),
            address: Yup.string().required("Required").matches(/^(\d{1,}) [a-zA-Z0-9\s]+(\,)? [a-zA-Z]+(\,)? [a-zA-Z]+(\,)? [a-zA-Z]+(\,)?$/, "Not Valid!"),
            bankaccount: Yup.string().required("Required").matches(/^[0-9]{9,18}$/,"Not Valid!"),
            taxcode: Yup.string().required("Required").matches(/^(NT|SD2|[SC]?(0T|D[01]|BR|K[1-9][0-9]{0,5}|[1-9][0-9]{0,5}[LMNT]))$/,"Not Valid!"),
            phone: Yup.string().required("Requires").matches(/^[0-9]{10}$/,"Not Valid!"),
            code: Yup.string().required("Required"),


        }),
        onSubmit: (values)=>{
            window.alert("Form Submitted");
            console.log(values);
        }
    });
   

    return(
        <section>
            <form className="information" onSubmit={formik.handleSubmit}>
                <label> Name</label> 
                    <input 
                    type="text" id="name" 
                    name="name" 
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    placeholder="Enter your name"/> 
                    {
                        formik.errors.name &&(
                            <p className="errorMsg">{formik.errors.name}</p>
                        )
                    }
                <label>Address</label> 
                    <input 
                    type="text" id="address" 
                    name="address" 
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    placeholder="Enter your address"/> 
                       {
                        formik.errors.address &&(
                            <p className="errorMsg">{formik.errors.address}</p>
                        )
                    }
                <label> Bank Account</label> 
                    <input 
                    type="text" id="bankaccount" 
                    name="bankaccount" 
                    value={formik.values.bankaccount}
                    onChange={formik.handleChange}
                    placeholder="Enter your Bank Account"/> 
                       {
                        formik.errors.bankaccount &&(
                            <p className="errorMsg">{formik.errors.bankaccount}</p>
                        )
                    }
                <label> Tax Code</label> 
                    <input 
                    type="text" id="taxcode" 
                    name="taxcode" 
                    value={formik.values.taxcode}
                    onChange={formik.handleChange}
                    placeholder="Enter your Tax Code"/> 
                       {
                        formik.errors.taxcode &&(
                            <p className="errorMsg">{formik.errors.taxcode}</p>
                        )
                    }
                <label> Phone Number</label> 
                    <input 
                    type="text" id="phone" 
                    name="phone" 
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    placeholder="Enter your Phone Number"/> 
                       {
                        formik.errors.phone &&(
                            <p className="errorMsg">{formik.errors.phone}</p>
                        )
                    }
                <label> Code</label> 
                    <input 
                    type="text" id="code" 
                    name="code" 
                    value={formik.values.code}
                    onChange={formik.handleChange}
                    placeholder="Enter your Code"/> 
                       {
                        formik.errors.code &&(
                            <p className="errorMsg">{formik.errors.code}</p>
                        )
                    }
               
                    <button type="submit">Submit</button>
                    
            </form>
        </section>
    );
}
export default SignUpForm;