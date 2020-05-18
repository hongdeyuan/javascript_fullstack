import { Field, reduxForm } from 'redux-form'
const SimpleForm = props => {
    const { 
     handleSubmit, 
     pristine, 
     reset, 
     submitting } = this.props
    return (
     <form onSubmit={handleSubmit}>
       <div>
         <Field
           name="firstName"
           component="input"
           type="text"
         />
       </div>
       <div>
         <button type="submit">添加</button>
       </div>
     </form>
    )
}

export default reduxForm({
  form: 'simple'
})(SimpleForm);