import {ReactElement} from "react";

const InputForm = (): ReactElement => {
    return (
          <div className='container mt-5'>
              <textarea className='hero-body textarea is-primary' placeholder='Write your note.'></textarea>
          </div>
    );
}

export default InputForm;