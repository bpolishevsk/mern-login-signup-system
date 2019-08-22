import React, { Component } from 'react'
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
   CardTitle,
   CardSubtitle,
  CardBody
} from "reactstrap";
import { connect } from "react-redux"; // API to connect component state to redux store
import PropTypes from "prop-types";
import { buttonClicked } from "../actions/uiActions";
import { Link } from 'react-router-dom'
import './style.css';



class Login extends Component {

  static propTypes = {
    buttonClicked: PropTypes.func.isRequired,
    button: PropTypes.bool,

  };


onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

onSubmit = (e) => {
    e.preventDefault();
  };


  render() {
      this.props.buttonClicked();

    let className = 'divStyle';
    if (!this.props.button) {
      className = 'formStyle';
    }
    return (
      <div className={className}>

            <Card>
                <CardBody >
                  <CardTitle> <h2><strong>Login</strong></h2></CardTitle>
                <CardSubtitle className="text-muted">Don't have an account?
                <Link to="/register"> Register. </Link></CardSubtitle>
                <br/>
                  <Form onSubmit={this.onSubmit} >
                  <FormGroup>

                    <Label for="email">Email</Label>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      className="mb-3"
                      onChange={this.onChange}
                    />

                    <Label for="password">Password</Label>
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      className="mb-3"
                      onChange={this.onChange}
                    />
                    <Button color="dark" style={{ marginTop: "2rem" }} block>
                      Login
                    </Button>
                  </FormGroup>
                </Form>
                </CardBody>
            </Card>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({ //Maps state element in redux store to props
  //location of element in the state is on the right and key is on the left
  button: state.ui.button //store.getState().ui.button another way to get button bool
});

export default connect(mapStateToProps,{ buttonClicked })(Login);
