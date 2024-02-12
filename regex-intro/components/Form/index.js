import { useState } from "react";
import Link from "next/link";

export default function Form({
    navigate='/'
}) {
    const [firstName, setFirstName] = useState("");
    const [errorFirstName, setErrorFirstName] = useState('');
    const [firstNameCount, setFirstNameCount] = useState(0);
    const [show, setShow] = useState(false);

    function isValidFirstName(firstName) {
        // The / / means to check the values between these forward slashes
        // \ means can either be a escape character or can be used as pattern matchers
        // the ^ means beginning of string
        // \p{L} matches a single code point in the category letter
        // \p{Lu} matches a single code point in the category uppercase letter
        // the /u modifier is for unicode support
        return /^\p{Lu}/u.test(firstName);
    }

    const handleChangeFirstName = (event) => {
        if(!isValidFirstName(event.target.value)) {
            setErrorFirstName("First name error. First letter must be capital");

            if(firstName.length == 0) {
                setFirstNameCount(0);
            }
        } else {
            setErrorFirstName('');
            if(firstName.length >= 1) {
                setFirstNameCount(firstNameCount + 1);
                setShow(true);
            }
        }

        setFirstName(event.target.value);
        console.log(show);
        console.log(firstNameCount);
    }

    return(
        <>
            <form>
                <label>Please enter your first name </label>
                <input 
                    type="text"
                    title="Your first name"
                    name="firstName"
                    id="firstName"
                    value={firstName}
                    placeholder="First name here"
                    onChange={handleChangeFirstName}
                />

                {
                    show && errorFirstName.length == 0 ?
                        <Link href={navigate}>
                            <button>Submit</button>
                        </Link>
                        : <></>
                }
            </form>

            {
                errorFirstName && <p style={{color: 'red'}}>{errorFirstName}</p>
            }
        </>
    )
}