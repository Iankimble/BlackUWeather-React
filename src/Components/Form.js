import React from "react";

const Form = ()=>(
<div>
<form onSubmit={this.handeSubmit}>

<label>
Please search a U.S city:
<input type="text" name="city" value= {this.state.search} onChange={this.handleChange}/>
</label>
<input type="submit" value="submit"/>
</form>

</div>
)

export default Form;