import React from 'react';

import './footer.css';

import IconPhone from "../../assets/images/icon-phone.png"
import IconEmail from "../../assets/images/icon-email.png"

const validEmailRegex = RegExp(
	/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = errors => {
	let valid = true;
	Object.values(errors).forEach(val => val.length > 0 && (valid = false));
	return valid;
};

class Footer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			fullName: '',
			email: '',
			subject: '',
			message: '',
			errors: {
				fullName: '',
				email: '',
				subject:'',
				message:'',
			}
		};
	}
	
	handleChange = (event) => {
		event.preventDefault();
		const { name, value } = event.target;
		let errors = this.state.errors;
	
		switch (name) {
			case 'fullName': 
				errors.fullName = value.length < 1 ? 'Name Required' : '';
				break;
			case 'email': 
				errors.email = value.length < 1 ? 'Email Required' : validEmailRegex.test(value) ? '' : 'Email is not valid!';
				break;
			case 'subject': 
				errors.subject = value.length < 1 ? 'Subject Required' : '';
				break;
			case 'message': 
				errors.message = value.length < 1 ? 'MessageBox Empty' : '';
				break;
			default:
				break;
		}
	
		this.setState({errors, [name]: value});
	}

	handleSubmit = (event) => {
		event.preventDefault();
		let errors = this.state.errors
		
		errors.fullName = this.state.fullName.length < 1 ? 'Name Required' : '';
		errors.email = this.state.email.length < 1 ? 'Email Required' : validEmailRegex.test(this.state.email) ? '' : 'Email is not valid!';
		errors.subject = this.state.subject.length < 1 ? 'Subject Required' : '';
		errors.message = this.state.message.length < 1 ? 'MessageBox Empty' : '';
		
		this.setState({ errors })
		if(validateForm(this.state.errors)) {
		  	console.info('Valid Form')
		}else{
		  	console.error('Invalid Form')
		}
	  }

    render() {
		const {errors} = this.state;
        return (
            <footer className="site-footer" role="contentinfo">
				<div className="container">
					<div className="row">
						<div className="col-sm-6 col-md-4">
							<div className="footer-navigation">
								<a href="/disclaimer">Disclaimer</a><span>|</span>
								<a href="/policy">Privacy Policy</a><span>|</span>
								<a href="/train">Training </a><span>|</span>
								<a href="/career">Career </a><span>|</span>
								<a href="/workus">Work with US</a>
							</div>
							<p className="site-info">Copyright(c) 2011 Synet Technologies</p>
						</div>
						<div className="col-sm-6 col-md-4 col-lg-5">
							<div className="footer-address">
								<address>
									Synet Technologies Pvt Ltd.<br/>
									Lakshmi, Althara Lane,<br/>
									Vellayambalam, Trivandrum Kerala.<br/>
									India. PIN : 695010<br/>
								</address>
								<ul className="list-inline">
									<li><img src={IconPhone} alt="icon" />+91 - 471 4063886 , 2720112</li>
									<li><img src={IconEmail} alt="icon" />contact@ synettechnologies.com</li>
								</ul>


							</div>
						</div>
						<div className="col-md-4 col-lg-3">
							<div className="footer-form">
								<h2>Write to US</h2>
								<form onSubmit={this.handleSubmit} noValidate>
									<div className="form-group">
										<input type='text' name='fullName' placeholder="Name" noValidate onChange={(e)=>this.setState({ fullName: e.target.value })} />
										{errors.fullName.length > 0 && 
                							<span className='error'>{errors.fullName}</span>}
									</div>
									<div className="form-group">
										<input type='email' name='email' placeholder='Email' noValidate onChange={(e)=>this.setState({ email: e.target.value })} />
										{errors.email.length > 0 && 
                							<span className='error'>{errors.email}</span>}
									</div>
									<div className="form-group">
										<input type='text' name='subject' placeholder="Subject" noValidate onChange={(e)=>this.setState({ subject: e.target.value })} />
										{errors.subject.length > 0 && 
                							<span className='error'>{errors.subject}</span>}
									</div>
									<div className="form-group">
										<textarea placeholder="Message" name="message" noValidate onChange={(e)=>this.setState({ message: e.target.value })}></textarea>
										{errors.message.length > 0 && 
                							<span className='error'>{errors.message}</span>}
									</div>
									<button >Submit</button>
								</form>
							</div>
						</div>
					</div>
					<div className="row footer-bottom">
						<div className="col-md-4">
							<ul className="list-inline social-links">
								<li><a href="https://www.facebook.com/synetlanka/" className="fb" target="_blank">Facebook</a></li>
								<li><a href="#" className="tw" target="_blank">Twitter</a></li>
								<li><a href="#" className="gp" target="_blank">GooglePlus</a></li>
								<li><a href="#" className="ln" target="_blank">LinkedIn</a></li>
								<li><a href="#" className="yt" target="_blank">YouTube</a></li>
							</ul>
						</div>
						<div className="col-md-8">
							<p>Imagery (c) Eagle View, Pictometry, NearMap, Google.<br />Sketch Check is registered trade mark of Eagle View.</p>
						</div>
					</div>
				</div>
			</footer>
        );
    }
}

export default Footer;