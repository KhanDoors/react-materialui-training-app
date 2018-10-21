import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  FormControl: {
    width: 500
  }
});

class Form extends Component {
  state = this.getInitState();

  getInitState() {
    const { exercise } = this.props;

    return exercise
      ? exercise
      : {
          title: "",
          description: "",
          muscles: ""
        };
  }

  componentWillReceiveProps({ exercise }) {
    this.setState({
      ...exercise
    });
  }

  handleChange = name => ({ target: { value } }) =>
    this.setState({
      [name]: value
    });

  handleSubmit = () => {
    // TODO: validate

    this.props.onSubmit({
      id: this.state.title.toLocaleLowerCase().replace(/ /g, "-"),
      ...this.state
    });
  };

  handleChange = name => ({ target: { value } }) =>
    this.setState({
      [name]: value
    });

  handleSubmit = () => {
    this.props.onSubmit({
      id: this.state.title.toLowerCase().replace(/ /g, "-"),
      ...this.state
    });

    this.setState(this.getInitState());
  };

  render() {
    const { title, description, muscles } = this.state,
      { classes, exercise, muscles: categories } = this.props;

    return (
      <form>
        <TextField
          label="Title"
          value={title}
          onChange={this.handleChange("title")}
          margin="normal"
          className={classes.FormControl}
        />
        <br />
        <FormControl className={classes.FormControl}>
          <InputLabel htmlFor="muscles">Muscles</InputLabel>
          <Select value={muscles} onChange={this.handleChange("muscles")}>
            {categories.map(category => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <br />
        <TextField
          multiline
          rows="4"
          label="Description"
          value={description}
          onChange={this.handleChange("description")}
          margin="normal"
          className={classes.FormControl}
        />
        <br />
        <Button color="primary" variant="contained" onClick={this.handleSubmit}>
          {exercise ? "Edit" : "Create"}
        </Button>
      </form>
    );
  }
}

export default withStyles(styles)(Form);
